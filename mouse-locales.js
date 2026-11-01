'use strict';
(()=>{
 const norm=s=>String(s).normalize('NFKC').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC').replace(/[.,!?，。、！？]/g,' ').replace(/\s+/g,' ').trim();
 const specs={
  'en-GB':{please:'please',again:'again',cell:'cell|field',numbers:['one','two','three','four','five','six','seven','eight','nine','ten'],rows:[['a','ay','alpha'],['b','bee','berta','bravo'],['c','see','charlie'],['d','dee','delta']],dirs:['center','top left','top right','bottom left','bottom right'],actions:{show:['show grid','show the grid','display the grid'],hide:['hide grid','hide the grid'],exit:['grid off','close grid','exit grid'],subdivide:['subdivide cell','subdivide the cell'],back:['back','go back'],reset:['reset grid','restart grid'],move:['move mouse here'],stop:['stop','stop mouse']},monitor:/^(.*?) on (?:(?:the )?(?:monitor|screen) (.+)|(?:the )?(left|right) (?:monitor|screen))$/,opacity:/^grid (\d{1,3}) percent$/,blocked:['do not','not','he said','when i say']},
  'zh-CN':{please:'请',again:'再次',cell:'单元格|格子',numbers:['一','二','三','四','五','六','七','八','九','十'],rows:[['a','诶'],['b','比','贝塔','berta'],['c','西'],['d','迪','delta']],dirs:['中心','左上','右上','左下','右下'],actions:{show:['显示网格','显示坐标网格'],hide:['隐藏网格'],exit:['关闭网格','结束网格'],subdivide:['细分单元格','细分格子'],back:['返回','后退'],reset:['重置网格','重新开始网格'],move:['鼠标移到这里'],stop:['停止','停止鼠标']},monitor:/^(.*?)在(?:显示器|屏幕)(\S+)$/,opacity:/^网格\s*(\d{1,3})\s*(?:%|百分比)$/,blocked:['不要','不是','他说','如果我说']},
  'ja-JP':{please:'お願いします',again:'もう一度',cell:'セル',numbers:['一','二','三','四','五','六','七','八','九','十'],rows:[['a','エー'],['b','ビー','berta'],['c','シー'],['d','ディー','delta']],dirs:['中央','左上','右上','左下','右下'],actions:{show:['グリッドを表示','グリッドを表示する'],hide:['グリッドを隠す'],exit:['グリッドを終了'],subdivide:['セルを分割'],back:['戻る'],reset:['グリッドをリセット'],move:['マウスをここへ'],stop:['停止','マウスを停止','ストップ']},monitor:/^(.*?)\s*モニター\s*(\S+)$/,opacity:/^グリッド\s*(\d{1,3})\s*(?:%|パーセント)$/,blocked:['しないで','と言った','もし言う']},
  'es-ES':{please:'por favor',again:'otra vez',cell:'celda|campo',numbers:['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'],rows:[['a','alfa'],['b','be','berta','bravo'],['c','ce'],['d','de','delta']],dirs:['centro','arriba izquierda','arriba derecha','abajo izquierda','abajo derecha'],actions:{show:['mostrar cuadrícula','mostrar la cuadrícula'],hide:['ocultar cuadrícula','ocultar la cuadrícula'],exit:['cerrar cuadrícula','salir de cuadrícula'],subdivide:['subdividir celda','subdividir la celda'],back:['atrás','volver'],reset:['reiniciar cuadrícula'],move:['mover ratón aquí'],stop:['detener','parar','detener ratón']},monitor:/^(.*?) en (?:el )?(?:monitor|pantalla) (\S+)$/,opacity:/^cuadricula (\d{1,3}) por ciento$/,blocked:['no','dijo','cuando diga']},
  'pt-BR':{please:'por favor',again:'novamente',cell:'célula|campo',numbers:['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'],rows:[['a','alfa'],['b','bê','berta','bravo'],['c','cê'],['d','dê','delta']],dirs:['centro','superior esquerdo','superior direito','inferior esquerdo','inferior direito'],actions:{show:['mostrar grade','mostrar a grade'],hide:['ocultar grade','ocultar a grade'],exit:['encerrar grade','fechar grade'],subdivide:['subdividir célula','subdividir a célula'],back:['voltar'],reset:['reiniciar grade'],move:['mover mouse aqui'],stop:['parar','parar mouse']},monitor:/^(.*?) no (?:monitor|tela) (\S+)$/,opacity:/^grade (\d{1,3}) por cento$/,blocked:['não','disse','quando disser']}
 };
 const directions=['center','left-top','right-top','left-bottom','right-bottom'];
 const names=/^(?:(?:hey|hello|hallo|hola|ola|你好|こんにちは)\s*)?(?:jeffrey|jeffry|jeffri|bronco|bronko|kelly|kelli|krak|krack|james|dscheims)\s*/;
 const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 function clean(input){return norm(input).replace(names,'').trim();}
 function parse(input,locale){
  const spec=specs[locale];if(!spec)return null;
  let text=clean(input),target={kind:'auto'};
  if(['stop','stopp','停止','detener','parar'].includes(text))return {action:'stop'};
  const please=norm(spec.please);if(text.startsWith(please+' '))text=text.slice(please.length).trim();else if(['zh-CN','ja-JP'].includes(locale)&&text.startsWith(please))text=text.slice(please.length).trim();
  if(spec.blocked.some(s=>['zh-CN','ja-JP'].includes(locale)?text.includes(norm(s)):new RegExp('(?:^|\\s)'+escape(norm(s))+'(?:\\s|$)').test(text)))return null;
  const monitor=text.match(spec.monitor);if(monitor){const value=monitor[2]||monitor[3],sides={left:['left','左侧','左','izquierdo','esquerdo'],right:['right','右侧','右','derecho','direito'],cursor:['mouse','鼠标','マウス','raton','mouse']};const kind=Object.keys(sides).find(k=>sides[k].includes(value));if(kind)target={kind};else{const number=Number(value)||spec.numbers.map(norm).indexOf(value)+1;if(!Number.isInteger(number)||number<1||number>99)return null;target={kind:'number',number};}text=monitor[1].trim();}
  for(const [action,aliases]of Object.entries(spec.actions))if(aliases.some(s=>norm(s)===text))return monitor&&action!=='show'?null:{action,...(action==='show'?{target}:{})};
  if(monitor)return null;
  const opacity=text.match(spec.opacity);if(opacity)return +opacity[1]<=100?{action:'opacity',opacity:+opacity[1]}:null;
  const again=norm(spec.again);if(text.startsWith(again))text=text.slice(again.length).trim();
  const dirs=spec.dirs.map(norm),direction=dirs.indexOf(text);if(direction>=0)return {action:'refine',direction:directions[direction]};
  const numbers=Object.fromEntries(spec.numbers.slice(0,5).flatMap((s,i)=>[[norm(s),i+1],[String(i+1),i+1]]));
  if(locale==='ja-JP')Object.assign(numbers,{'いち':1,'に':2,'さん':3,'よん':4,'ご':5});
  if(locale==='zh-CN')Object.assign(numbers,{'幺':1,'两':2});
  const rows=Object.fromEntries(spec.rows.flatMap((aliases,i)=>aliases.map(s=>[norm(s),'ABCD'[i]])));
  const field=new RegExp('^(?:(?:'+norm(spec.cell)+')\\s*)?('+Object.keys(rows).sort((a,b)=>b.length-a.length).map(escape).join('|')+')\\s*('+Object.keys(numbers).map(escape).join('|')+')(?:\\s*('+dirs.map(escape).join('|')+'))?$');
  const match=text.match(field);return match?{action:'select',cell:rows[match[1]]+numbers[match[2]],direction:match[3]?directions[dirs.indexOf(match[3])]:null}:null;
 }
 function grammar(locale){
  const s=specs[locale];if(!s)return [];
  const out=Object.values(s.actions).flat();out.push('Stop','Stopp');out.push(...s.dirs,...s.dirs.map(d=>s.again+' '+d));
  for(const rows of s.rows)for(const row of rows)for(let n=1;n<=5;n++)for(const value of [String(n),s.numbers[n-1],...(locale==='ja-JP'?[['いち','に','さん','よん','ご'][n-1]]:[])]){out.push(row+' '+value);for(const dir of s.dirs)out.push(row+' '+value+' '+dir);}
  for(let n=0;n<=100;n++){if(locale==='en-GB')out.push('grid '+n+' percent');if(locale==='zh-CN')out.push('网格 '+n+' 百分比');if(locale==='ja-JP')out.push('グリッド '+n+' パーセント');if(locale==='es-ES')out.push('cuadrícula '+n+' por ciento');if(locale==='pt-BR')out.push('grade '+n+' por cento');}
  const format=word=>({'en-GB':'show grid on monitor '+word,'zh-CN':'显示网格在显示器'+word,'ja-JP':'グリッドを表示 モニター'+word,'es-ES':'mostrar cuadrícula en monitor '+word,'pt-BR':'mostrar grade no monitor '+word})[locale];
  for(let n=1;n<=10;n++)out.push(format(s.numbers[n-1]),format(String(n)));
  for(const side of ({'en-GB':['left','right','mouse'],'zh-CN':['左侧','右侧','鼠标'],'ja-JP':['左','右','マウス'],'es-ES':['izquierdo','derecho','ratón'],'pt-BR':['esquerdo','direito','mouse']})[locale])out.push(format(side));
  return out;
 }
 function speechOptions(locale){const s=specs[locale];return s?{please:s.please,blocked:s.blocked,stops:[...s.actions.stop,'Stop','Stopp']}:{please:'bitte',blocked:['nicht','bitte nicht','er sagte','wenn ich sage'],stops:['Stopp','Stop','Stoppen','Hör auf','Brich ab','Abbrechen','Maus stoppen','Maus anhalten']};}
 const desktopPhrases={
  'en-GB':{screen:['explain my screen','what is on my screen','explain what is on this screen'],read:['read selected text','read the selected text'],explain:['explain selected text','explain the selected text'],summarize:['summarize selected text','summarise selected text']},
  'zh-CN':{screen:['解释我的屏幕','屏幕上有什么'],read:['朗读选中文本','朗读选中的文本'],explain:['解释选中文本'],summarize:['总结选中文本']},
  'ja-JP':{screen:['画面を説明','画面には何がある'],read:['選択したテキストを読む'],explain:['選択したテキストを説明'],summarize:['選択したテキストを要約']},
  'es-ES':{screen:['explica mi pantalla','que hay en mi pantalla'],read:['leer texto seleccionado'],explain:['explicar texto seleccionado'],summarize:['resumir texto seleccionado']},
  'pt-BR':{screen:['explique minha tela','o que ha na minha tela'],read:['ler texto selecionado'],explain:['explicar texto selecionado'],summarize:['resumir texto selecionado']}
 };
 function parseDesktop(input,locale){const text=clean(input);for(const [action,aliases]of Object.entries(desktopPhrases[locale]||{}))if(aliases.some(s=>norm(s)===text))return {action,target:{kind:'auto'}};return null;}
 const api={norm,parse,parseDesktop,desktopPhrases,grammar,speechOptions,specs};if(typeof module==='object'&&module.exports)module.exports=api;if(typeof window!=='undefined')window.RobotMouseLocales=api;
})();
