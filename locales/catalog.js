'use strict';
// Central, versioned UI catalog; placeholders are data, never executable HTML.
(()=>{const data={
 "rows": {
  "ui.s000": {
   "de-DE": "Jeffrey and Friends · Desktop-Assistent",
   "en-GB": "Jeffrey and Friends · Desktop assistant",
   "zh-CN": "Jeffrey and Friends · 桌面助手",
   "ja-JP": "Jeffrey and Friends · デスクトップアシスタント",
   "es-ES": "Jeffrey and Friends · Asistente de escritorio",
   "pt-BR": "Jeffrey and Friends · Assistente de desktop"
  },
  "ui.s001": {
   "de-DE": "DEIN DESKTOP-BEGLEITER",
   "en-GB": "YOUR DESKTOP COMPANION",
   "zh-CN": "你的桌面伙伴",
   "ja-JP": "デスクトップの相棒",
   "es-ES": "TU COMPAÑERO DE ESCRITORIO",
   "pt-BR": "SEU COMPANHEIRO DE DESKTOP"
  },
  "ui.s002": {
   "de-DE": "Ein kleiner",
   "en-GB": "A little",
   "zh-CN": "一点",
   "ja-JP": "小さな",
   "es-ES": "Un pequeño",
   "pt-BR": "Um pequeno"
  },
  "ui.s003": {
   "de-DE": "Moment Magie",
   "en-GB": "moment of magic",
   "zh-CN": "魔法时刻",
   "ja-JP": "魔法のひととき",
   "es-ES": "momento de magia",
   "pt-BR": "momento de magia"
  },
  "ui.s004": {
   "de-DE": "Jeffrey: ein Roboterkopf, zwei Hände. Und ein freundliches Hallo aus dem Rauschen.",
   "en-GB": "Jeffrey: a robot head, two hands and a friendly hello.",
   "zh-CN": "Jeffrey：一个机器人头、两只手和友好的问候。",
   "ja-JP": "Jeffrey：ロボットの頭と両手、そして親しみやすい挨拶。",
   "es-ES": "Jeffrey: una cabeza robótica, dos manos y un saludo amable.",
   "pt-BR": "Jeffrey: uma cabeça robótica, duas mãos e uma saudação amigável."
  },
  "ui.s005": {
   "de-DE": "STUFE 5.0 · CHARAKTER AUSWÄHLEN",
   "en-GB": "CHOOSE A CHARACTER",
   "zh-CN": "选择角色",
   "ja-JP": "キャラクターを選択",
   "es-ES": "ELEGIR PERSONAJE",
   "pt-BR": "ESCOLHER PERSONAGEM"
  },
  "ui.s006": {
   "de-DE": "Jeffrey",
   "en-GB": "Jeffrey",
   "zh-CN": "Jeffrey",
   "ja-JP": "Jeffrey",
   "es-ES": "Jeffrey",
   "pt-BR": "Jeffrey"
  },
  "ui.s007": {
   "de-DE": "Kelly",
   "en-GB": "Kelly",
   "zh-CN": "Kelly",
   "ja-JP": "Kelly",
   "es-ES": "Kelly",
   "pt-BR": "Kelly"
  },
  "ui.s008": {
   "de-DE": "Krak",
   "en-GB": "Krak",
   "zh-CN": "Krak",
   "ja-JP": "Krak",
   "es-ES": "Krak",
   "pt-BR": "Krak"
  },
  "ui.s009": {
   "de-DE": "Bronco",
   "en-GB": "Bronco",
   "zh-CN": "Bronco",
   "ja-JP": "Bronco",
   "es-ES": "Bronco",
   "pt-BR": "Bronco"
  },
  "ui.s010": {
   "de-DE": "James",
   "en-GB": "James",
   "zh-CN": "James",
   "ja-JP": "James",
   "es-ES": "James",
   "pt-BR": "James"
  },
  "ui.s011": {
   "de-DE": "Immer nur eine Figur ist aktiv. Ihr Name, ihre Stimme und die Persönlichkeit wechseln mit. Eine laufende Live-Unterhaltung wird beim Wechsel beendet (Kostenschutz).",
   "en-GB": "One character at a time. Switching ends the live session and mouse control; each keeps its voice profile.",
   "zh-CN": "一次仅启用一个角色。切换会结束实时会话和鼠标控制；语音配置独立保存。",
   "ja-JP": "一度に1体。切替時にライブ会話とマウス制御を終了。音声設定は個別に保存します。",
   "es-ES": "Un personaje a la vez. Cambiar termina Live y el control del ratón; cada uno conserva su perfil de voz.",
   "pt-BR": "Um personagem por vez. A troca encerra a sessão Live e o controle do mouse; cada um mantém seu perfil de voz."
  },
  "ui.s012": {
   "de-DE": "HOLOGRAMM AUSPROBIEREN",
   "en-GB": "TRY THE HOLOGRAM",
   "zh-CN": "试用全息角色",
   "ja-JP": "ホログラムを試す",
   "es-ES": "PROBAR HOLOGRAMA",
   "pt-BR": "TESTAR HOLOGRAMA"
  },
  "ui.s013": {
   "de-DE": "Jeffrey rufen",
   "en-GB": "Show Jeffrey",
   "zh-CN": "显示 Jeffrey",
   "ja-JP": "Jeffrey を表示",
   "es-ES": "Mostrar Jeffrey",
   "pt-BR": "Mostrar Jeffrey"
  },
  "ui.s014": {
   "de-DE": "Wieder ausblenden",
   "en-GB": "Hide character",
   "zh-CN": "隐藏角色",
   "ja-JP": "キャラクターを隠す",
   "es-ES": "Ocultar personaje",
   "pt-BR": "Ocultar personagem"
  },
  "ui.s015": {
   "de-DE": "🎙️ DIREKT SPRECHEN",
   "en-GB": "🎙️ TALK DIRECTLY",
   "zh-CN": "🎙️ 直接对话",
   "ja-JP": "🎙️ 直接話す",
   "es-ES": "🎙️ HABLAR DIRECTAMENTE",
   "pt-BR": "🎙️ CONVERSAR DIRETAMENTE"
  },
  "ui.s016": {
   "de-DE": "🎙️ Live sprechen",
   "en-GB": "🎙️ Start Live",
   "zh-CN": "🎙️ 开始实时对话",
   "ja-JP": "🎙️ ライブ開始",
   "es-ES": "🎙️ Iniciar Live",
   "pt-BR": "🎙️ Iniciar Live"
  },
  "ui.s017": {
   "de-DE": "⏹ Beenden",
   "en-GB": "⏹ End Live",
   "zh-CN": "⏹ 结束实时对话",
   "ja-JP": "⏹ ライブ終了",
   "es-ES": "⏹ Terminar Live",
   "pt-BR": "⏹ Encerrar Live"
  },
  "ui.s018": {
   "de-DE": "Bereit · Mikrofon aus · Keine laufenden Kosten",
   "en-GB": "Ready · Microphone off · No ongoing costs",
   "zh-CN": "就绪 · 麦克风关闭 · 无持续费用",
   "ja-JP": "準備完了 · マイクオフ · 継続料金なし",
   "es-ES": "Listo · Micrófono apagado · Sin costes activos",
   "pt-BR": "Pronto · Microfone desligado · Sem custos ativos"
  },
  "ui.s019": {
   "de-DE": "KI-Modus",
   "en-GB": "AI mode",
   "zh-CN": "AI 模式",
   "ja-JP": "AI モード",
   "es-ES": "Modo de IA",
   "pt-BR": "Modo de IA"
  },
  "ui.s020": {
   "de-DE": "OpenAI · Qualität · bestehende Stimmen",
   "en-GB": "OpenAI · Quality · existing voices",
   "zh-CN": "OpenAI · 品质 · 原有声音",
   "ja-JP": "OpenAI · 品質 · 既存の音声",
   "es-ES": "OpenAI · Calidad · voces existentes",
   "pt-BR": "OpenAI · Qualidade · vozes existentes"
  },
  "ui.s021": {
   "de-DE": "Gemini · Sparmodus · andere Stimmen",
   "en-GB": "Gemini · Economy · different voices",
   "zh-CN": "Gemini · 节省 · 不同声音",
   "ja-JP": "Gemini · 節約 · 異なる音声",
   "es-ES": "Gemini · Ahorro · voces distintas",
   "pt-BR": "Gemini · Economia · vozes diferentes"
  },
  "ui.s022": {
   "de-DE": "Lokal · Offline-Text über eigenen Server",
   "en-GB": "Local · Text through your own server",
   "zh-CN": "本地 · 通过自己的服务器处理文本",
   "ja-JP": "ローカル · 自分のサーバーでテキスト処理",
   "es-ES": "Local · Texto mediante tu servidor",
   "pt-BR": "Local · Texto pelo seu servidor"
  },
  "ui.s023": {
   "de-DE": "Automatisch · Kosten optimieren",
   "en-GB": "Automatic · Optimise costs",
   "zh-CN": "自动 · 优化费用",
   "ja-JP": "自動 · 費用を最適化",
   "es-ES": "Automático · Optimizar costes",
   "pt-BR": "Automático · Otimizar custos"
  },
  "ui.s024": {
   "de-DE": "KOORDINATENNETZ · WINDOWS",
   "en-GB": "COORDINATE GRID · WINDOWS",
   "zh-CN": "坐标网格 · WINDOWS",
   "ja-JP": "座標グリッド · WINDOWS",
   "es-ES": "CUADRÍCULA · WINDOWS",
   "pt-BR": "GRADE DE COORDENADAS · WINDOWS"
  },
  "ui.s025": {
   "de-DE": "Raster anzeigen",
   "en-GB": "Show grid",
   "zh-CN": "显示网格",
   "ja-JP": "グリッドを表示",
   "es-ES": "Mostrar cuadrícula",
   "pt-BR": "Mostrar grade"
  },
  "ui.s026": {
   "de-DE": "Modus beenden",
   "en-GB": "Exit grid",
   "zh-CN": "关闭网格",
   "ja-JP": "グリッドを終了",
   "es-ES": "Cerrar cuadrícula",
   "pt-BR": "Encerrar grade"
  },
  "ui.s027": {
   "de-DE": "■ Maus STOPP",
   "en-GB": "■ STOP MOUSE",
   "zh-CN": "■ 停止鼠标",
   "ja-JP": "■ マウス停止",
   "es-ES": "■ DETENER RATÓN",
   "pt-BR": "■ PARAR MOUSE"
  },
  "ui.s028": {
   "de-DE": "OpenAI teilt Live-Transkripte. Gemini nutzt einen exklusiven lokalen Fallback. Keine Klicks.",
   "en-GB": "OpenAI shares Live transcripts. Gemini uses an exclusive local fallback. No clicks.",
   "zh-CN": "OpenAI 共用实时转录；Gemini 使用独占的本地后备模式。无点击操作。",
   "ja-JP": "OpenAI はライブ文字起こしを共用。Gemini は排他的なローカル代替モード。クリックなし。",
   "es-ES": "OpenAI comparte las transcripciones Live. Gemini usa un modo local exclusivo. Sin clics.",
   "pt-BR": "OpenAI compartilha transcrições Live. Gemini usa modo local exclusivo. Sem cliques."
  },
  "ui.s029": {
   "de-DE": "Raster & Bewegung einstellen",
   "en-GB": "Grid and movement settings",
   "zh-CN": "网格和移动设置",
   "ja-JP": "グリッドと移動の設定",
   "es-ES": "Ajustes de cuadrícula y movimiento",
   "pt-BR": "Configurações de grade e movimento"
  },
  "ui.s030": {
   "de-DE": "Sichtbarkeit",
   "en-GB": "Visibility",
   "zh-CN": "可见度",
   "ja-JP": "表示濃度",
   "es-ES": "Visibilidad",
   "pt-BR": "Visibilidade"
  },
  "ui.s031": {
   "de-DE": "Bewegungsgeschwindigkeit (Pixel/Sekunde)",
   "en-GB": "Movement speed (pixels/second)",
   "zh-CN": "移动速度（像素/秒）",
   "ja-JP": "移動速度（ピクセル/秒）",
   "es-ES": "Velocidad (píxeles/segundo)",
   "pt-BR": "Velocidade (pixels/segundo)"
  },
  "ui.s032": {
   "de-DE": "Maximale Unterteilungstiefe (1–8, zusätzlich Pixelgrenze)",
   "en-GB": "Maximum depth (1–8, also limited by pixels)",
   "zh-CN": "最大深度（1–8，受像素限制）",
   "ja-JP": "最大深度（1～8、ピクセル制限あり）",
   "es-ES": "Profundidad máxima (1–8, limitada por píxeles)",
   "pt-BR": "Profundidade máxima (1–8, limitada por pixels)"
  },
  "ui.s033": {
   "de-DE": "Beenden beendet nur die Koordinatensteuerung. Ein bestehendes OpenAI-Live-Gespräch läuft weiter.",
   "en-GB": "Exit ends coordinate control. An existing OpenAI Live conversation continues.",
   "zh-CN": "退出仅结束坐标控制，现有 OpenAI Live 对话继续。",
   "ja-JP": "終了すると座標操作が終わります。既存のOpenAI Live会話は続きます。",
   "es-ES": "Salir termina el control por coordenadas. Una conversación OpenAI Live existente continúa.",
   "pt-BR": "Sair encerra o controle por coordenadas. Uma conversa OpenAI Live existente continua."
  },
  "ui.s034": {
   "de-DE": "ASSISTENT-MODUS",
   "en-GB": "ASSISTANT MODE",
   "zh-CN": "助手模式",
   "ja-JP": "アシスタントモード",
   "es-ES": "MODO DEL ASISTENTE",
   "pt-BR": "MODO DO ASSISTENTE"
  },
  "ui.s035": {
   "de-DE": "🟢 Aktiv",
   "en-GB": "🟢 Active",
   "zh-CN": "🟢 活跃",
   "ja-JP": "🟢 アクティブ",
   "es-ES": "🟢 Activo",
   "pt-BR": "🟢 Ativo"
  },
  "ui.s036": {
   "de-DE": "🟡 Ruhe",
   "en-GB": "🟡 Quiet",
   "zh-CN": "🟡 安静",
   "ja-JP": "🟡 静か",
   "es-ES": "🟡 Silencioso",
   "pt-BR": "🟡 Silencioso"
  },
  "ui.s037": {
   "de-DE": "😴 Schlaf",
   "en-GB": "😴 Sleep",
   "zh-CN": "😴 睡眠",
   "ja-JP": "😴 スリープ",
   "es-ES": "😴 Reposo",
   "pt-BR": "😴 Dormir"
  },
  "ui.s038": {
   "de-DE": "Ab und zu ein Kommentar. Auf Abruf immer da.",
   "en-GB": "Occasional comments; available on request.",
   "zh-CN": "偶尔评论，随时响应请求。",
   "ja-JP": "時々コメントし、呼びかけに応答します。",
   "es-ES": "Comentarios ocasionales; disponible a petición.",
   "pt-BR": "Comentários ocasionais; disponível quando solicitado."
  },
  "ui.s039": {
   "de-DE": "Spontane Kommentare erlauben",
   "en-GB": "Allow spontaneous comments",
   "zh-CN": "允许主动评论",
   "ja-JP": "自発的なコメントを許可",
   "es-ES": "Permitir comentarios espontáneos",
   "pt-BR": "Permitir comentários espontâneos"
  },
  "ui.s040": {
   "de-DE": "Testkommentar zeigen",
   "en-GB": "Show test comment",
   "zh-CN": "显示测试评论",
   "ja-JP": "テストコメント",
   "es-ES": "Mostrar comentario de prueba",
   "pt-BR": "Mostrar comentário de teste"
  },
  "ui.s041": {
   "de-DE": "Wie oft darf",
   "en-GB": "How often may",
   "zh-CN": "允许发言频率：",
   "ja-JP": "発言頻度：",
   "es-ES": "¿Con qué frecuencia puede",
   "pt-BR": "Com que frequência pode"
  },
  "ui.s042": {
   "de-DE": "sich melden?",
   "en-GB": "comment?",
   "zh-CN": "评论",
   "ja-JP": "のコメント",
   "es-ES": "comentar?",
   "pt-BR": "comentar?"
  },
  "ui.s043": {
   "de-DE": "Selten · alle 35–55 Minuten",
   "en-GB": "Rare · every 35–55 minutes",
   "zh-CN": "很少 · 每 35–55 分钟",
   "ja-JP": "少ない · 35～55分ごと",
   "es-ES": "Raro · cada 35–55 minutos",
   "pt-BR": "Raro · a cada 35–55 minutos"
  },
  "ui.s044": {
   "de-DE": "Normal · alle 15–25 Minuten",
   "en-GB": "Normal · every 15–25 minutes",
   "zh-CN": "正常 · 每 15–25 分钟",
   "ja-JP": "通常 · 15～25分ごと",
   "es-ES": "Normal · cada 15–25 minutos",
   "pt-BR": "Normal · a cada 15–25 minutos"
  },
  "ui.s045": {
   "de-DE": "Gesprächig · alle 7–12 Minuten",
   "en-GB": "Talkative · every 7–12 minutes",
   "zh-CN": "频繁 · 每 7–12 分钟",
   "ja-JP": "多い · 7～12分ごと",
   "es-ES": "Frecuente · cada 7–12 minutos",
   "pt-BR": "Frequente · a cada 7–12 minutos"
  },
  "ui.s046": {
   "de-DE": "Stimme für spontane Kommentare",
   "en-GB": "Voice for spontaneous comments",
   "zh-CN": "主动评论的声音",
   "ja-JP": "コメント用の音声",
   "es-ES": "Voz para comentarios",
   "pt-BR": "Voz dos comentários"
  },
  "ui.s047": {
   "de-DE": "Aus · nur Hologramm-Geste, kein Ton",
   "en-GB": "Off · gesture only, no sound",
   "zh-CN": "关闭 · 仅手势，无声音",
   "ja-JP": "オフ · ジェスチャーのみ",
   "es-ES": "Desactivado · solo gesto, sin sonido",
   "pt-BR": "Desligado · só gesto, sem som"
  },
  "ui.s048": {
   "de-DE": "Windows-Stimme · kostenlos",
   "en-GB": "Windows voice · no API charges",
   "zh-CN": "Windows 声音 · 无 API 费用",
   "ja-JP": "Windows 音声 · API料金なし",
   "es-ES": "Voz Windows · sin cargos API",
   "pt-BR": "Voz Windows · sem custo de API"
  },
  "ui.s049": {
   "de-DE": "OpenAI-Stimme der Figur · kostenpflichtig",
   "en-GB": "OpenAI character voice · paid",
   "zh-CN": "OpenAI 角色声音 · 收费",
   "ja-JP": "OpenAI のキャラクター音声 · 有料",
   "es-ES": "Voz OpenAI del personaje · de pago",
   "pt-BR": "Voz OpenAI do personagem · paga"
  },
  "ui.s050": {
   "de-DE": "Nur im Aktivmodus. OpenAI-Kommentare kosten extra: maximal 4 pro Kalendertag und mindestens 15 Minuten Abstand; ohne API-Schlüssel bleibt er still. Testkommentar kann Guthaben verbrauchen. Kein dauerhaftes Mikrofon nötig.",
   "en-GB": "Active mode only. OpenAI comments cost extra: up to 4/day, at least 15 minutes apart. A test may incur charges. No continuous microphone required.",
   "zh-CN": "仅活跃模式。OpenAI 评论另收费：每天最多 4 次，间隔至少 15 分钟。测试也可能收费。无需持续麦克风。",
   "ja-JP": "アクティブ時のみ。OpenAIコメントは追加料金：1日4回まで、15分以上の間隔。テストも有料の場合があります。常時マイク不要。",
   "es-ES": "Solo modo activo. OpenAI cuesta extra: hasta 4 al día, separados 15 minutos. La prueba puede costar. No requiere micrófono continuo.",
   "pt-BR": "Só no modo ativo. OpenAI custa extra: até 4 por dia, intervalo de 15 minutos. O teste pode gerar custos. Não exige microfone contínuo."
  },
  "ui.s051": {
   "de-DE": "SCHWEBENDE HÄNDE & GESTEN",
   "en-GB": "HANDS AND GESTURES",
   "zh-CN": "手和手势",
   "ja-JP": "手とジェスチャー",
   "es-ES": "MANOS Y GESTOS",
   "pt-BR": "MÃOS E GESTOS"
  },
  "ui.s052": {
   "de-DE": "Winken",
   "en-GB": "Wave",
   "zh-CN": "挥手",
   "ja-JP": "手を振る",
   "es-ES": "Saludar",
   "pt-BR": "Acenar"
  },
  "ui.s053": {
   "de-DE": "Zeigen",
   "en-GB": "Point",
   "zh-CN": "指向",
   "ja-JP": "指さす",
   "es-ES": "Señalar",
   "pt-BR": "Apontar"
  },
  "ui.s054": {
   "de-DE": "Nachdenken",
   "en-GB": "Think",
   "zh-CN": "思考",
   "ja-JP": "考える",
   "es-ES": "Pensar",
   "pt-BR": "Pensar"
  },
  "ui.s055": {
   "de-DE": "Erzählen",
   "en-GB": "Talk",
   "zh-CN": "说话",
   "ja-JP": "話す",
   "es-ES": "Hablar",
   "pt-BR": "Falar"
  },
  "ui.s056": {
   "de-DE": "Robotergröße",
   "en-GB": "Character size",
   "zh-CN": "角色大小",
   "ja-JP": "キャラクターの大きさ",
   "es-ES": "Tamaño del personaje",
   "pt-BR": "Tamanho do personagem"
  },
  "ui.s057": {
   "de-DE": "Mit gedrückter linker Maustaste am Kopf oder an den Händen ziehen. Position und Größe bleiben gespeichert. Kelly und Krak haben getrennte Hände sowie ein lokales Audio-/Transkript-Viseme-Rig mit weichen Lippen- und Kieferübergängen.",
   "en-GB": "Drag the head or hands with the left mouse button. Size and position are saved. Kelly and Krak have separate hands and local audio/transcript-driven mouth animation.",
   "zh-CN": "按住鼠标左键拖动头部或手部。大小和位置会保存。Kelly 和 Krak 有独立手部及本地音频/转录驱动的口型。",
   "ja-JP": "頭や手を左ボタンでドラッグ。大きさと位置は保存されます。KellyとKrakは独立した手と音声・文字起こしによる口の動きを持ちます。",
   "es-ES": "Arrastra cabeza o manos con el botón izquierdo. Tamaño y posición se guardan. Kelly y Krak tienen manos separadas y animación bucal local por audio/transcripción.",
   "pt-BR": "Arraste a cabeça ou as mãos com o botão esquerdo. Tamanho e posição são salvos. Kelly e Krak têm mãos separadas e animação labial local por áudio/transcrição."
  },
  "ui.s058": {
   "de-DE": "Hologramm-Grisseln",
   "en-GB": "Hologram noise",
   "zh-CN": "全息噪点",
   "ja-JP": "ホログラムノイズ",
   "es-ES": "Ruido holográfico",
   "pt-BR": "Ruído holográfico"
  },
  "ui.s059": {
   "de-DE": "Ein- und Ausblenden",
   "en-GB": "Fade in/out",
   "zh-CN": "淡入/淡出",
   "ja-JP": "フェードイン/アウト",
   "es-ES": "Aparición/desaparición",
   "pt-BR": "Aparecer/desaparecer"
  },
  "ui.s060": {
   "de-DE": "1,5 s",
   "en-GB": "1.5 s",
   "zh-CN": "1.5 秒",
   "ja-JP": "1.5秒",
   "es-ES": "1,5 s",
   "pt-BR": "1,5 s"
  },
  "ui.s061": {
   "de-DE": "Bildschirmecke",
   "en-GB": "Screen corner",
   "zh-CN": "屏幕角落",
   "ja-JP": "画面の隅",
   "es-ES": "Esquina de pantalla",
   "pt-BR": "Canto da tela"
  },
  "ui.s062": {
   "de-DE": "Unten rechts",
   "en-GB": "Bottom right",
   "zh-CN": "右下",
   "ja-JP": "右下",
   "es-ES": "Abajo derecha",
   "pt-BR": "Inferior direito"
  },
  "ui.s063": {
   "de-DE": "Unten links",
   "en-GB": "Bottom left",
   "zh-CN": "左下",
   "ja-JP": "左下",
   "es-ES": "Abajo izquierda",
   "pt-BR": "Inferior esquerdo"
  },
  "ui.s064": {
   "de-DE": "Oben rechts",
   "en-GB": "Top right",
   "zh-CN": "右上",
   "ja-JP": "右上",
   "es-ES": "Arriba derecha",
   "pt-BR": "Superior direito"
  },
  "ui.s065": {
   "de-DE": "Oben links",
   "en-GB": "Top left",
   "zh-CN": "左上",
   "ja-JP": "左上",
   "es-ES": "Arriba izquierda",
   "pt-BR": "Superior esquerdo"
  },
  "ui.s066": {
   "de-DE": "Frei platziert",
   "en-GB": "Free position",
   "zh-CN": "自由位置",
   "ja-JP": "自由配置",
   "es-ES": "Posición libre",
   "pt-BR": "Posição livre"
  },
  "ui.s067": {
   "de-DE": "✨ NATÜRLICHES LIVE-GESPRÄCH",
   "en-GB": "✨ NATURAL LIVE CONVERSATION",
   "zh-CN": "✨ 自然实时对话",
   "ja-JP": "✨ 自然なライブ会話",
   "es-ES": "✨ CONVERSACIÓN LIVE NATURAL",
   "pt-BR": "✨ CONVERSA LIVE NATURAL"
  },
  "ui.s068": {
   "de-DE": "Live nutzt den gewählten Anbieter. Nach 45 Sekunden ohne Aktivität wird getrennt; maximal 15 Minuten je Sitzung. Gemeinsame Rasterbefehle benötigen einen zuverlässigen Transkriptkanal.",
   "en-GB": "Start Live with a button or wakeword. Idle disconnect after 45 seconds; safety limit 15 minutes. App-side voice commands depend on provider transcripts.",
   "zh-CN": "按钮或唤醒词启动实时会话。空闲 45 秒断开，安全上限 15 分钟。应用语音命令依赖提供商转录。",
   "ja-JP": "ボタンかウェイクワードで開始。無活動45秒で切断、安全上限15分。アプリの音声コマンドには提供元の文字起こしが必要です。",
   "es-ES": "Inicia Live con botón o palabra de activación. Desconexión tras 45 s inactivos; límite 15 minutos. Los comandos dependen de transcripciones del proveedor.",
   "pt-BR": "Inicie Live por botão ou palavra de ativação. Desconecta após 45 s inativos; limite de 15 minutos. Comandos dependem das transcrições do provedor."
  },
  "ui.s069": {
   "de-DE": "🎭 Live-Stimme",
   "en-GB": "🎭 Live voice",
   "zh-CN": "🎭 实时声音",
   "ja-JP": "🎭 ライブ音声",
   "es-ES": "🎭 Voz Live",
   "pt-BR": "🎭 Voz Live"
  },
  "ui.s070": {
   "de-DE": "Shimmer · heller und weich (Vorschlag)",
   "en-GB": "Shimmer · bright and soft",
   "zh-CN": "Shimmer · 明亮柔和",
   "ja-JP": "Shimmer · 明るく柔らかい",
   "es-ES": "Shimmer · clara y suave",
   "pt-BR": "Shimmer · clara e suave"
  },
  "ui.s071": {
   "de-DE": "Coral · frisch und freundlich",
   "en-GB": "Coral · fresh and friendly",
   "zh-CN": "Coral · 清新友好",
   "ja-JP": "Coral · 爽やかで親しみやすい",
   "es-ES": "Coral · fresca y amable",
   "pt-BR": "Coral · fresca e amigável"
  },
  "ui.s072": {
   "de-DE": "Marin · bisherige Stimme",
   "en-GB": "Marin · previous voice",
   "zh-CN": "Marin · 原有声音",
   "ja-JP": "Marin · 以前の音声",
   "es-ES": "Marin · voz anterior",
   "pt-BR": "Marin · voz anterior"
  },
  "ui.s073": {
   "de-DE": "Verse · ausdrucksvoll",
   "en-GB": "Verse · expressive",
   "zh-CN": "Verse · 富有表现力",
   "ja-JP": "Verse · 表情豊か",
   "es-ES": "Verse · expresiva",
   "pt-BR": "Verse · expressiva"
  },
  "ui.s074": {
   "de-DE": "Ash · alternative männliche Stimme",
   "en-GB": "Ash · alternative male voice",
   "zh-CN": "Ash · 男声选项",
   "ja-JP": "Ash · 男性音声の選択肢",
   "es-ES": "Ash · voz masculina alternativa",
   "pt-BR": "Ash · voz masculina alternativa"
  },
  "ui.s075": {
   "de-DE": "Sage · ruhig",
   "en-GB": "Sage · calm",
   "zh-CN": "Sage · 平静",
   "ja-JP": "Sage · 落ち着いた声",
   "es-ES": "Sage · tranquila",
   "pt-BR": "Sage · calma"
  },
  "ui.s076": {
   "de-DE": "Cedar · warm",
   "en-GB": "Cedar · warm",
   "zh-CN": "Cedar · 温暖",
   "ja-JP": "Cedar · 温かい声",
   "es-ES": "Cedar · cálida",
   "pt-BR": "Cedar · calorosa"
  },
  "ui.s077": {
   "de-DE": "Sprechstil",
   "en-GB": "Speaking style",
   "zh-CN": "说话风格",
   "ja-JP": "話し方",
   "es-ES": "Estilo de habla",
   "pt-BR": "Estilo de fala"
  },
  "ui.s078": {
   "de-DE": "Comic · hell, verspielt und frech",
   "en-GB": "Comic · bright and playful",
   "zh-CN": "卡通 · 明亮俏皮",
   "ja-JP": "コミック · 明るく遊び心",
   "es-ES": "Cómic · claro y juguetón",
   "pt-BR": "Cômico · claro e brincalhão"
  },
  "ui.s079": {
   "de-DE": "Natürlich · entspannt",
   "en-GB": "Natural · relaxed",
   "zh-CN": "自然 · 放松",
   "ja-JP": "自然 · リラックス",
   "es-ES": "Natural · relajado",
   "pt-BR": "Natural · relaxado"
  },
  "ui.s080": {
   "de-DE": "Lebhaft · voller Energie",
   "en-GB": "Energetic · lively",
   "zh-CN": "活力 · 生动",
   "ja-JP": "元気 · 生き生き",
   "es-ES": "Enérgico · animado",
   "pt-BR": "Enérgico · animado"
  },
  "ui.s081": {
   "de-DE": "Jede Figur hat ihr eigenes gespeichertes Stimmenprofil. Bei Charakterwechsel gilt dessen Stimme für das nächste Gespräch. Krak klingt durch Sprechregeln koboldhaft; echte Stimmverzerrung ist nicht garantiert.",
   "en-GB": "Each character keeps a voice profile. Changes apply to the next conversation. Krak's character direction does not guarantee actual voice distortion.",
   "zh-CN": "每个角色保存独立声音配置，下一次会话生效。Krak 的角色指令不保证实际变声。",
   "ja-JP": "キャラクター別に音声設定を保存し、次の会話で適用。Krakの演技指示は実際の声質変化を保証しません。",
   "es-ES": "Cada personaje guarda su perfil. Cambios en la próxima conversación. Las indicaciones de Krak no garantizan distorsión real.",
   "pt-BR": "Cada personagem salva seu perfil. Mudanças na próxima conversa. As instruções de Krak não garantem distorção real."
  },
  "ui.s082": {
   "de-DE": "🤖 Jeffreys Computerstimme (nur Jeffrey)",
   "en-GB": "🤖 Jeffrey's computer voice",
   "zh-CN": "🤖 Jeffrey 的电脑声音",
   "ja-JP": "🤖 Jeffreyのコンピューター音声",
   "es-ES": "🤖 Voz de ordenador de Jeffrey",
   "pt-BR": "🤖 Voz de computador de Jeffrey"
  },
  "ui.s083": {
   "de-DE": "Original · ohne lokalen Filter",
   "en-GB": "Original · no local filter",
   "zh-CN": "原声 · 无本地滤镜",
   "ja-JP": "原音 · フィルターなし",
   "es-ES": "Original · sin filtro local",
   "pt-BR": "Original · sem filtro local"
  },
  "ui.s084": {
   "de-DE": "Leicht · etwas heller, dezent technisch",
   "en-GB": "Light · slightly brighter",
   "zh-CN": "轻度 · 稍明亮",
   "ja-JP": "軽い · 少し明るい",
   "es-ES": "Ligero · algo más claro",
   "pt-BR": "Leve · um pouco mais clara"
  },
  "ui.s085": {
   "de-DE": "Blechern · höher und metallisch (Empfehlung)",
   "en-GB": "Tinny · higher and metallic",
   "zh-CN": "金属 · 较高且金属感",
   "ja-JP": "ブリキ · 高く金属的",
   "es-ES": "Metálico · más agudo",
   "pt-BR": "Metálico · mais agudo"
  },
  "ui.s086": {
   "de-DE": "Robotisch · deutlich höher und künstlicher",
   "en-GB": "Robotic · higher and synthetic",
   "zh-CN": "机器人 · 更高更合成",
   "ja-JP": "ロボット · 高く人工的",
   "es-ES": "Robótico · agudo y sintético",
   "pt-BR": "Robótico · agudo e sintético"
  },
  "ui.s087": {
   "de-DE": "Nur Jeffreys Live-Stimme. Lokal verarbeitet und ohne zusätzliche API-Kosten. Nach dem Wechsel ein neues Gespräch starten. Andere Charaktere bleiben unverändert.",
   "en-GB": "Local Jeffrey filter, no additional API charge. Start a new conversation after changing it. Other characters stay unchanged.",
   "zh-CN": "Jeffrey 的本地滤镜，无额外 API 费。修改后重新开始会话，其他角色不变。",
   "ja-JP": "Jeffrey用ローカルフィルター。追加API料金なし。変更後は会話を再開。他キャラクターは変更しません。",
   "es-ES": "Filtro local de Jeffrey, sin coste API extra. Reinicia la conversación al cambiarlo. Otros personajes no cambian.",
   "pt-BR": "Filtro local de Jeffrey, sem custo extra de API. Reinicie a conversa após alterar. Outros personagens não mudam."
  },
  "ui.s088": {
   "de-DE": "🔧 Broncos Schrottplatz-Stimme (nur Bronco)",
   "en-GB": "🔧 Bronco's scrapyard voice",
   "zh-CN": "🔧 Bronco 的废料场声音",
   "ja-JP": "🔧 Broncoのスクラップ声",
   "es-ES": "🔧 Voz de chatarrería de Bronco",
   "pt-BR": "🔧 Voz de ferro-velho de Bronco"
  },
  "ui.s089": {
   "de-DE": "Originalstimme · ohne Effekt",
   "en-GB": "Original · no effect",
   "zh-CN": "原声 · 无效果",
   "ja-JP": "原音 · エフェクトなし",
   "es-ES": "Original · sin efecto",
   "pt-BR": "Original · sem efeito"
  },
  "ui.s090": {
   "de-DE": "Rau · etwas tiefer",
   "en-GB": "Rough · slightly deeper",
   "zh-CN": "粗糙 · 稍低沉",
   "ja-JP": "荒い · 少し低い",
   "es-ES": "Áspero · algo más grave",
   "pt-BR": "Áspero · um pouco mais grave"
  },
  "ui.s091": {
   "de-DE": "Hart · tief, kratzig und metallisch",
   "en-GB": "Hard · deep and metallic",
   "zh-CN": "强烈 · 低沉金属感",
   "ja-JP": "強い · 低く金属的",
   "es-ES": "Duro · grave y metálico",
   "pt-BR": "Forte · grave e metálico"
  },
  "ui.s092": {
   "de-DE": "Extrem · sehr tief und schrottig",
   "en-GB": "Extreme · very deep",
   "zh-CN": "极强 · 很低沉",
   "ja-JP": "極端 · とても低い",
   "es-ES": "Extremo · muy grave",
   "pt-BR": "Extremo · muito grave"
  },
  "ui.s093": {
   "de-DE": "Wirkt lokal auf Broncos Live-Stimme; keine Extra-API-Kosten. Nach dem Umschalten ein neues Live-Gespräch starten. Falls der Pitch-Effekt unter Windows nicht verfügbar ist, bleibt der raue Klangfilter aktiv.",
   "en-GB": "Local Bronco effect without extra API charges. Restart Live after changing it. If pitch processing is unavailable, the rough filter remains.",
   "zh-CN": "Bronco 本地效果，无额外 API 费。修改后重启实时会话。无法处理音高时保留粗糙滤镜。",
   "ja-JP": "Bronco用ローカル効果、追加API料金なし。変更後ライブを再開。ピッチ処理不可でも荒いフィルターは維持。",
   "es-ES": "Efecto local de Bronco sin coste API extra. Reinicia Live al cambiarlo. Si falla el tono, sigue el filtro áspero.",
   "pt-BR": "Efeito local de Bronco sem custo extra. Reinicie Live ao mudar. Se o processamento de tom falhar, o filtro áspero permanece."
  },
  "ui.s094": {
   "de-DE": "🌐 Websuche für aktuelle Fragen aktivieren (zusätzliche API-Kosten)",
   "en-GB": "🌐 Enable web search (additional API cost)",
   "zh-CN": "🌐 启用网页搜索（额外 API 费）",
   "ja-JP": "🌐 ウェブ検索を有効化（追加API料金）",
   "es-ES": "🌐 Activar búsqueda web (coste API extra)",
   "pt-BR": "🌐 Ativar busca web (custo extra de API)"
  },
  "ui.s095": {
   "de-DE": "Der Roboter sucht nur bei aktuellen Fragen wie Wetter, Nachrichten oder Öffnungszeiten. Maximal 2 Websuchen pro Live-Gespräch. Bei aktivierter Suche laufen Suchanfragen über OpenAI; jede Suche kostet zusätzlich Guthaben.",
   "en-GB": "Current questions may use OpenAI web search: at most 2 per Live session, billed separately.",
   "zh-CN": "时效问题可使用 OpenAI 网页搜索：每次实时会话最多 2 次，单独收费。",
   "ja-JP": "最新情報にはOpenAIウェブ検索を使用。ライブ1回につき2回まで、別料金。",
   "es-ES": "Consultas actuales pueden usar búsqueda OpenAI: máximo 2 por sesión, con cargo aparte.",
   "pt-BR": "Perguntas atuais podem usar busca OpenAI: até 2 por sessão, com cobrança separada."
  },
  "ui.s096": {
   "de-DE": "🌐 Webseiten öffnen und Produkte bei Idealo suchen",
   "en-GB": "🌐 Open websites and search Idealo",
   "zh-CN": "🌐 打开网站并搜索 Idealo",
   "ja-JP": "🌐 サイトを開く・Idealo検索",
   "es-ES": "🌐 Abrir webs y buscar en Idealo",
   "pt-BR": "🌐 Abrir sites e pesquisar no Idealo"
  },
  "ui.s097": {
   "de-DE": "Zum Beispiel: „Jeffrey, öffne YouTube“, „Öffne wikipedia.org“ oder „Jeffrey, suche bei Idealo nach einer RTX 5070“. Die Idealo-Suchergebnisse öffnen direkt in Chrome, ohne zusätzliche Websuche. Nur öffentliche HTTPS-Seiten, keine Dateien oder Windows-Befehle. Maximal vier Seiten pro Live-Gespräch. Chrome wird direkt gestartet, falls installiert.",
   "en-GB": "Explicit requests only. Public HTTPS pages in installed Chrome; up to 4 per session. Idealo opens directly without an extra search API. No files or shell commands.",
   "zh-CN": "仅明确请求。在已安装的 Chrome 打开公共 HTTPS 页面，每会话最多 4 页。Idealo 直接打开，无额外搜索 API。禁止文件和命令行。",
   "ja-JP": "明示要求のみ。インストール済みChromeで公開HTTPSサイトを1会話4件まで。Idealoは追加検索APIなし。ファイルやシェル操作なし。",
   "es-ES": "Solo petición explícita. HTTPS público en Chrome instalado, hasta 4 páginas por sesión. Idealo directo sin API de búsqueda extra. Sin archivos ni comandos.",
   "pt-BR": "Só solicitação explícita. HTTPS público no Chrome instalado, até 4 páginas por sessão. Idealo direto sem API extra. Sem arquivos nem comandos."
  },
  "ui.s098": {
   "de-DE": "💻 STUFE 3 · PC-ASSISTENT",
   "en-GB": "💻 PC ASSISTANT",
   "zh-CN": "💻 电脑助手",
   "ja-JP": "💻 PCアシスタント",
   "es-ES": "💻 ASISTENTE DEL PC",
   "pt-BR": "💻 ASSISTENTE DO PC"
  },
  "ui.s099": {
   "de-DE": "PC-Zustand prüfen und ausgewählte Programme öffnen",
   "en-GB": "Check PC status and open allowed apps",
   "zh-CN": "检查电脑状态并打开允许的应用",
   "ja-JP": "PC状態の確認・許可アプリの起動",
   "es-ES": "Ver estado del PC y abrir apps permitidas",
   "pt-BR": "Ver estado do PC e abrir apps permitidos"
  },
  "ui.s100": {
   "de-DE": "Sag „Jeffrey, wie geht’s meinem PC?“ oder „Jeffrey, öffne VS Code“. Erlaubt sind nur VS Code, Editor, Rechner und Datei-Explorer. Kein PowerShell, keine beliebigen Programme, kein Löschen. Programmstart nur nach ausdrücklichem Sprachbefehl.",
   "en-GB": "Only VS Code, Notepad, Calculator and File Explorer may be started, on explicit request. No arbitrary programs, shell commands or deletion.",
   "zh-CN": "仅明确请求可启动 VS Code、记事本、计算器和文件资源管理器。禁止任意程序、命令行和删除。",
   "ja-JP": "明示要求でVS Code、メモ帳、電卓、エクスプローラーのみ起動可能。任意プログラム・シェル・削除なし。",
   "es-ES": "Solo abre VS Code, Bloc de notas, Calculadora y Explorador por petición explícita. Sin programas arbitrarios, consola ni borrado.",
   "pt-BR": "Só inicia VS Code, Bloco de Notas, Calculadora e Explorador por pedido explícito. Sem programas arbitrários, comandos ou exclusão."
  },
  "ui.s101": {
   "de-DE": "💻 PC-Status kostenlos prüfen",
   "en-GB": "💻 Check PC status locally",
   "zh-CN": "💻 本地检查电脑状态",
   "ja-JP": "💻 PC状態をローカル確認",
   "es-ES": "💻 Ver estado local del PC",
   "pt-BR": "💻 Ver estado local do PC"
  },
  "ui.s102": {
   "de-DE": "Noch keine PC-Abfrage durchgeführt.",
   "en-GB": "No PC check yet.",
   "zh-CN": "尚未检查电脑。",
   "ja-JP": "PCは未確認です。",
   "es-ES": "Todavía sin consulta del PC.",
   "pt-BR": "PC ainda não verificado."
  },
  "ui.s103": {
   "de-DE": "Bei hoher CPU-/RAM-Last von selbst warnen",
   "en-GB": "Warn automatically about high CPU/RAM use",
   "zh-CN": "CPU/内存负载高时自动警告",
   "ja-JP": "CPU・メモリー高負荷時に通知",
   "es-ES": "Avisar de CPU/RAM alta",
   "pt-BR": "Avisar sobre CPU/RAM alta"
  },
  "ui.s104": {
   "de-DE": "Standardmäßig aus. Nur im Aktivmodus mit spontanen Kommentaren; nach zwei hohen Messungen, höchstens einmal pro Stunde pro Ursache. Windows-Stimme kostenlos, optionale OpenAI-Kommentarstimme kostet Guthaben (mit dem bisherigen Tageslimit).",
   "en-GB": "Off by default. Active mode with comments only; after two high readings, at most hourly per cause. Optional OpenAI speech costs extra and respects the daily limit.",
   "zh-CN": "默认关闭。仅活跃且允许评论时，在两次高读数后通知；每原因每小时最多一次。可选 OpenAI 语音收费并遵守每日限制。",
   "ja-JP": "初期はオフ。アクティブ・コメント許可時に高負荷2回で通知、原因ごとに1時間1回まで。OpenAI音声は追加料金と日次制限あり。",
   "es-ES": "Desactivado al inicio. Solo activo con comentarios: tras dos lecturas altas, máximo una vez/hora por causa. Voz OpenAI opcional con coste y límite diario.",
   "pt-BR": "Desligado por padrão. Só ativo com comentários: após duas leituras altas, no máximo uma vez/hora por causa. Voz OpenAI opcional com custo e limite diário."
  },
  "ui.s105": {
   "de-DE": "🎤 Im Hintergrund auf „Jeffrey“ warten (lokal)",
   "en-GB": "🎤 Wait for “Jeffrey” locally",
   "zh-CN": "🎤 本地等待唤醒词“Jeffrey”",
   "ja-JP": "🎤 「Jeffrey」をローカルで待機",
   "es-ES": "🎤 Esperar «Jeffrey» localmente",
   "pt-BR": "🎤 Aguardar “Jeffrey” localmente"
  },
  "ui.s106": {
   "de-DE": "Wie empfindlich soll die Figur auf den Namen reagieren?",
   "en-GB": "Wakeword sensitivity",
   "zh-CN": "唤醒词灵敏度",
   "ja-JP": "ウェイクワード感度",
   "es-ES": "Sensibilidad de activación",
   "pt-BR": "Sensibilidade de ativação"
  },
  "ui.s107": {
   "de-DE": "Empfindlich · reagiert leichter (empfohlen)",
   "en-GB": "Sensitive · easier to trigger",
   "zh-CN": "灵敏 · 更易触发",
   "ja-JP": "高感度 · 反応しやすい",
   "es-ES": "Sensible · activación fácil",
   "pt-BR": "Sensível · ativação fácil"
  },
  "ui.s108": {
   "de-DE": "Normal · weniger Fehlalarme",
   "en-GB": "Normal · fewer false triggers",
   "zh-CN": "正常 · 减少误触",
   "ja-JP": "通常 · 誤反応を軽減",
   "es-ES": "Normal · menos falsas activaciones",
   "pt-BR": "Normal · menos ativações falsas"
  },
  "ui.s109": {
   "de-DE": "Streng · nur sehr sichere Treffer",
   "en-GB": "Strict · high confidence only",
   "zh-CN": "严格 · 仅高置信度",
   "ja-JP": "厳格 · 高い確信度のみ",
   "es-ES": "Estricto · solo alta confianza",
   "pt-BR": "Rigoroso · só alta confiança"
  },
  "ui.s110": {
   "de-DE": "Bei „Empfindlich“ reagiert Jeffrey zuverlässiger auf einen einzelnen Ruf, kann aber bei ähnlich klingenden Wörtern gelegentlich versehentlich erscheinen. Die Erkennung bleibt vollständig lokal und kostenlos.",
   "en-GB": "Sensitive recognition may also react to similar words. Recognition is local and has no API charge.",
   "zh-CN": "灵敏模式也可能误听相似词。识别在本地进行，无 API 费。",
   "ja-JP": "高感度では似た言葉にも反応する場合があります。ローカル認識でAPI料金なし。",
   "es-ES": "La sensibilidad alta puede reaccionar a palabras parecidas. Reconocimiento local, sin coste API.",
   "pt-BR": "A alta sensibilidade pode reagir a palavras parecidas. Reconhecimento local, sem custo de API."
  },
  "ui.s111": {
   "de-DE": "Codewort-Erkennung ist ausgeschaltet.",
   "en-GB": "Wakeword recognition is off.",
   "zh-CN": "唤醒词识别已关闭。",
   "ja-JP": "ウェイクワード認識はオフ。",
   "es-ES": "Activación por voz desactivada.",
   "pt-BR": "Ativação por voz desligada."
  },
  "ui.s112": {
   "de-DE": "🔎 Codewort kostenlos testen",
   "en-GB": "🔎 Test wakeword without API charges",
   "zh-CN": "🔎 测试唤醒词（无 API 费）",
   "ja-JP": "🔎 ウェイクワードを無料テスト",
   "es-ES": "🔎 Probar activación sin coste API",
   "pt-BR": "🔎 Testar ativação sem custo de API"
  },
  "ui.s113": {
   "de-DE": "Wenn „Lokal bereit“ nicht erscheint, die Fehlermeldung direkt darüber lesen. Zum Testen „Jeffrey“ deutlich sagen: Dabei wird keine OpenAI-Verbindung geöffnet. Im Ruhemodus verfügbar, im Schlafmodus aus. Das lokale Codewort aktiviert erst bei Treffer die kostenpflichtige Live-Verbindung. Deaktivieren stoppt das lokale Hintergrundmikrofon.",
   "en-GB": "The wakeword test stays local and opens no API connection. Available in Quiet mode, off in Sleep. Normal wakeups can start a paid Live session. Turning this off stops background wake listening.",
   "zh-CN": "唤醒测试仅本地，不打开 API。安静模式可用，睡眠关闭。正常唤醒可启动付费实时会话。关闭此项会停止后台唤醒监听。",
   "ja-JP": "テストはローカルのみでAPI接続なし。静かモードでも利用、スリープ時は停止。通常の呼びかけは有料ライブを開始する場合あり。オフで待機認識を停止。",
   "es-ES": "La prueba es local, sin conexión API. Funciona en Silencioso, no en Reposo. La activación normal puede iniciar Live de pago. Desactivar detiene la escucha de fondo.",
   "pt-BR": "O teste é local, sem conexão API. Funciona no Silencioso, não no Dormir. A ativação normal pode iniciar Live pago. Desligar interrompe a escuta de fundo."
  },
  "ui.s114": {
   "de-DE": "Den Live-Start und Stopp findest du jetzt direkt oben unter der Charakterauswahl.",
   "en-GB": "Live start/stop controls are at the top, below the characters.",
   "zh-CN": "实时开始/结束按钮位于角色下方。",
   "ja-JP": "ライブの開始・終了は上部のキャラクター選択の下。",
   "es-ES": "Los controles Live están arriba, bajo los personajes.",
   "pt-BR": "Os controles Live ficam no topo, abaixo dos personagens."
  },
  "ui.s115": {
   "de-DE": "Live-Audio wird an den gewählten Cloud-Anbieter übertragen. Bildschirm und markierter Text benötigen eine separate Freigabe.",
   "en-GB": "API keys stay in the main process. Live audio goes to the selected provider and may be billed. Headphones help prevent echo. One-time Windows recognition is available below.",
   "zh-CN": "API 密钥保留在主进程。实时音频发送到所选提供商，可能收费。耳机可防回声。下方有 Windows 单次识别。",
   "ja-JP": "APIキーはメインプロセスに保持。ライブ音声は選択先に送信され、料金が発生する場合があります。ヘッドホン推奨。下にWindows単発認識があります。",
   "es-ES": "Las claves quedan en el proceso principal. Live envía audio al proveedor y puede facturarse. Usa auriculares contra el eco. Abajo hay reconocimiento Windows de una frase.",
   "pt-BR": "As chaves ficam no processo principal. Live envia áudio ao provedor e pode ser cobrado. Fones ajudam contra eco. Abaixo há reconhecimento Windows de uma frase."
  },
  "ui.s116": {
   "de-DE": "💬 TEXT UND WINDOWS-SPRACHE",
   "en-GB": "💬 TEXT AND WINDOWS SPEECH",
   "zh-CN": "💬 文本与 WINDOWS 语音",
   "ja-JP": "💬 テキストとWINDOWS音声",
   "es-ES": "💬 TEXTO Y VOZ WINDOWS",
   "pt-BR": "💬 TEXTO E VOZ WINDOWS"
  },
  "ui.s117": {
   "de-DE": "Einmal zuhören (kein Dauer-Mikrofon). Oder Text eingeben und Enter drücken.",
   "en-GB": "Listen once, or type a message and press Enter.",
   "zh-CN": "单次听写，或输入消息后按 Enter。",
   "ja-JP": "一度聞き取るか、入力してEnter。",
   "es-ES": "Escucha una frase o escribe y pulsa Enter.",
   "pt-BR": "Ouça uma frase ou digite e pressione Enter."
  },
  "ui.s118": {
   "de-DE": "🎤 Einmal zuhören",
   "en-GB": "🎤 Listen once",
   "zh-CN": "🎤 听写一次",
   "ja-JP": "🎤 一度聞き取る",
   "es-ES": "🎤 Escuchar una vez",
   "pt-BR": "🎤 Ouvir uma vez"
  },
  "ui.s119": {
   "de-DE": "Bereit. Für Windows-Diktat im Textfeld: Win + H.",
   "en-GB": "Ready. Windows dictation in the text box: Win + H.",
   "zh-CN": "就绪。在文本框使用 Windows 听写：Win + H。",
   "ja-JP": "準備完了。入力欄でWindows音声入力：Win + H。",
   "es-ES": "Listo. Dictado Windows en el campo: Win + H.",
   "pt-BR": "Pronto. Ditado Windows no campo: Win + H."
  },
  "ui.s120": {
   "de-DE": "Deine Nachricht",
   "en-GB": "Your message",
   "zh-CN": "你的消息",
   "ja-JP": "メッセージ",
   "es-ES": "Tu mensaje",
   "pt-BR": "Sua mensagem"
  },
  "ui.s121": {
   "de-DE": "Nachricht senden ↗",
   "en-GB": "Send message ↗",
   "zh-CN": "发送消息 ↗",
   "ja-JP": "送信 ↗",
   "es-ES": "Enviar mensaje ↗",
   "pt-BR": "Enviar mensagem ↗"
  },
  "ui.s122": {
   "de-DE": "🔇 Stopp",
   "en-GB": "🔇 Stop",
   "zh-CN": "🔇 停止",
   "ja-JP": "🔇 停止",
   "es-ES": "🔇 Detener",
   "pt-BR": "🔇 Parar"
  },
  "ui.s123": {
   "de-DE": "Antworten laut sprechen",
   "en-GB": "Read replies aloud",
   "zh-CN": "朗读回复",
   "ja-JP": "返答を読み上げる",
   "es-ES": "Leer respuestas en voz alta",
   "pt-BR": "Ler respostas em voz alta"
  },
  "ui.s124": {
   "de-DE": "🧠 LOKALES GEDÄCHTNIS",
   "en-GB": "🧠 LOCAL MEMORY",
   "zh-CN": "🧠 本地记忆",
   "ja-JP": "🧠 ローカルメモリー",
   "es-ES": "🧠 MEMORIA LOCAL",
   "pt-BR": "🧠 MEMÓRIA LOCAL"
  },
  "ui.s125": {
   "de-DE": "Gespeicherte Merksätze für KI-Gespräche verwenden",
   "en-GB": "Use saved notes in AI conversations",
   "zh-CN": "在 AI 对话中使用已存笔记",
   "ja-JP": "保存メモをAI会話で使用",
   "es-ES": "Usar notas guardadas en conversaciones",
   "pt-BR": "Usar notas salvas nas conversas"
  },
  "ui.s126": {
   "de-DE": "Standardmäßig aus. Notizen bleiben auf diesem Windows-PC. Nur bei eingeschaltetem Gedächtnis werden die gespeicherten Sätze beim Start eines KI-Gesprächs an den jeweiligen KI-Anbieter gesendet. Merke dir keine Passwörter oder Geheimnisse. Bei aktivem Gedächtnis kannst du sagen: „Jeffrey, merk dir, dass ...“.",
   "en-GB": "Off by default. Notes are stored locally and sent to the selected provider only when memory is enabled. Never save passwords or secrets. Notes are added only on explicit request.",
   "zh-CN": "默认关闭。笔记本地保存，仅启用记忆时发送给所选提供商。不要保存密码或秘密。仅按明确请求添加笔记。",
   "ja-JP": "初期はオフ。メモはローカル保存し、有効時のみ選択先に送信。パスワードや秘密は保存しないでください。明示要求のみで追加。",
   "es-ES": "Desactivado al inicio. Notas locales enviadas al proveedor solo con memoria activa. No guardes contraseñas ni secretos. Se añaden solo a petición explícita.",
   "pt-BR": "Desligado por padrão. Notas locais enviadas ao provedor só com memória ativa. Não salve senhas nem segredos. Só são adicionadas por pedido explícito."
  },
  "ui.s127": {
   "de-DE": "Merksatz (max. 220 Zeichen)",
   "en-GB": "Note (up to 220 characters)",
   "zh-CN": "笔记（最多 220 字符）",
   "ja-JP": "メモ（220文字まで）",
   "es-ES": "Nota (máx. 220 caracteres)",
   "pt-BR": "Nota (até 220 caracteres)"
  },
  "ui.s128": {
   "de-DE": "Merksatz speichern",
   "en-GB": "Save note",
   "zh-CN": "保存笔记",
   "ja-JP": "メモを保存",
   "es-ES": "Guardar nota",
   "pt-BR": "Salvar nota"
  },
  "ui.s129": {
   "de-DE": "Alle Merksätze löschen",
   "en-GB": "Delete all notes",
   "zh-CN": "删除所有笔记",
   "ja-JP": "すべてのメモを削除",
   "es-ES": "Borrar todas las notas",
   "pt-BR": "Excluir todas as notas"
  },
  "ui.s130": {
   "de-DE": "🤖 KI-ANBIETER & KOSTEN",
   "en-GB": "🤖 AI PROVIDERS AND COSTS",
   "zh-CN": "🤖 AI 提供商与费用",
   "ja-JP": "🤖 AI提供元と費用",
   "es-ES": "🤖 PROVEEDORES Y COSTES",
   "pt-BR": "🤖 PROVEDORES E CUSTOS"
  },
  "ui.s131": {
   "de-DE": "Datenschutz · dauerhafte Zustimmungen",
   "en-GB": "Privacy · durable approvals",
   "zh-CN": "隐私 · 持久授权",
   "ja-JP": "プライバシー · 永続的な許可",
   "es-ES": "Privacidad · permisos permanentes",
   "pt-BR": "Privacidade · permissões permanentes"
  },
  "ui.s132": {
   "de-DE": "Nur für ausdrückliche Anfragen, getrennt nach Datenart und Empfänger. „Einmal erlauben“ gilt für genau eine Anfrage. Lokales Vorlesen benötigt keine Cloud-Zustimmung. Windows-Systemberechtigungen werden dadurch nicht ersetzt.",
   "en-GB": "Explicit requests only, separate by data type and recipient. “Once” covers one request. Local reading needs no cloud consent. Windows system permissions remain separate.",
   "zh-CN": "仅明确请求，按数据类型和接收方分别授权。“一次”仅限单次请求。本地朗读无需云授权；Windows 系统权限独立。",
   "ja-JP": "明示要求のみ、データ種別と送信先ごとに許可。「今回のみ」は1件限定。ローカル読み上げにクラウド許可は不要。Windows権限は別です。",
   "es-ES": "Solo solicitudes explícitas, separadas por datos y destinatario. «Una vez» cubre una solicitud. Lectura local sin permiso cloud. Permisos Windows independientes.",
   "pt-BR": "Só pedidos explícitos, separados por dados e destinatário. “Uma vez” vale para um pedido. Leitura local não exige consentimento cloud. Permissões Windows independentes."
  },
  "ui.s133": {
   "de-DE": "Bildschirm-Freigabe widerrufen",
   "en-GB": "Revoke screen approval",
   "zh-CN": "撤销屏幕授权",
   "ja-JP": "画面の許可を取り消す",
   "es-ES": "Revocar permiso de pantalla",
   "pt-BR": "Revogar permissão de tela"
  },
  "ui.s134": {
   "de-DE": "Text-Freigabe widerrufen",
   "en-GB": "Revoke text approval",
   "zh-CN": "撤销文本授权",
   "ja-JP": "テキストの許可を取り消す",
   "es-ES": "Revocar permiso de texto",
   "pt-BR": "Revogar permissão de texto"
  },
  "ui.s135": {
   "de-DE": "OpenAI ist der bewährte Standard. Jeffrey- und Bronco-Filter sowie alle Charakterprofile bleiben unverändert.",
   "en-GB": "OpenAI is the reference provider. Character profiles and local voice filters stay unchanged.",
   "zh-CN": "OpenAI 为参考提供商。角色配置与本地声音滤镜保持不变。",
   "ja-JP": "OpenAIが基準の提供元。キャラクター設定とローカル音声フィルターは維持します。",
   "es-ES": "OpenAI es el proveedor de referencia. Se conservan perfiles y filtros de voz.",
   "pt-BR": "OpenAI é o provedor de referência. Perfis e filtros de voz são mantidos."
  },
  "ui.s136": {
   "de-DE": "Lokale OpenAI-kompatible Serveradresse",
   "en-GB": "Local OpenAI-compatible server address",
   "zh-CN": "本地 OpenAI 兼容服务器地址",
   "ja-JP": "ローカルOpenAI互換サーバーアドレス",
   "es-ES": "Dirección del servidor local compatible",
   "pt-BR": "Endereço do servidor local compatível"
  },
  "ui.s137": {
   "de-DE": "Lokales Modell",
   "en-GB": "Local model",
   "zh-CN": "本地模型",
   "ja-JP": "ローカルモデル",
   "es-ES": "Modelo local",
   "pt-BR": "Modelo local"
  },
  "ui.s138": {
   "de-DE": "Lokale Modelle prüfen",
   "en-GB": "Check local models",
   "zh-CN": "检查本地模型",
   "ja-JP": "ローカルモデルを確認",
   "es-ES": "Comprobar modelos locales",
   "pt-BR": "Verificar modelos locais"
  },
  "ui.s139": {
   "de-DE": "Textmodus: Ollama, LM Studio oder llama.cpp auf diesem PC. Kein vollständiges Realtime-Audio.",
   "en-GB": "Ollama, LM Studio or llama.cpp on this PC. Text only, no complete Realtime audio.",
   "zh-CN": "本机 Ollama、LM Studio 或 llama.cpp。仅文本，无完整实时音频。",
   "ja-JP": "このPCのOllama、LM Studio、llama.cpp。テキストのみ、完全なライブ音声なし。",
   "es-ES": "Ollama, LM Studio o llama.cpp en este PC. Solo texto, sin Realtime completo.",
   "pt-BR": "Ollama, LM Studio ou llama.cpp neste PC. Só texto, sem Realtime completo."
  },
  "ui.s140": {
   "de-DE": "Gemini-Live-Modell",
   "en-GB": "Gemini Live model",
   "zh-CN": "Gemini 实时模型",
   "ja-JP": "Gemini Liveモデル",
   "es-ES": "Modelo Gemini Live",
   "pt-BR": "Modelo Gemini Live"
  },
  "ui.s141": {
   "de-DE": "Gemini-API-Schlüssel",
   "en-GB": "Gemini API key",
   "zh-CN": "Gemini API 密钥",
   "ja-JP": "Gemini APIキー",
   "es-ES": "Clave API de Gemini",
   "pt-BR": "Chave API do Gemini"
  },
  "ui.s142": {
   "de-DE": "Gemini-Schlüssel geschützt speichern",
   "en-GB": "Save Gemini key securely",
   "zh-CN": "安全保存 Gemini 密钥",
   "ja-JP": "Geminiキーを安全に保存",
   "es-ES": "Guardar clave Gemini de forma segura",
   "pt-BR": "Salvar chave Gemini com segurança"
  },
  "ui.s143": {
   "de-DE": "Gemini-Schlüssel löschen",
   "en-GB": "Delete Gemini key",
   "zh-CN": "删除 Gemini 密钥",
   "ja-JP": "Geminiキーを削除",
   "es-ES": "Eliminar clave Gemini",
   "pt-BR": "Excluir chave Gemini"
  },
  "ui.s144": {
   "de-DE": "Neue Gemini-Authorization Keys können mit AQ. beginnen; ältere Standard-Keys mit AIza werden ebenfalls akzeptiert. Gemini-Stimmen klingen anders als die OpenAI-Stimmen. Das Free Tier ist nicht unbegrenzt kostenlos und je nach Region/Konto nicht garantiert. Bei unbezahlten Diensten kann Google Inhalte zur Produktverbesserung verwenden; keine sensiblen Daten senden. In EWR, Schweiz und Vereinigtem Königreich gelten besondere Paid-Service-Bedingungen.",
   "en-GB": "Gemini accepts AQ. and AIza keys. Voices differ from OpenAI. Free tier/quotas vary by account and region; unpaid services may use content for improvement. EEA, Swiss and UK paid-service terms apply. Do not send sensitive data.",
   "zh-CN": "Gemini 接受 AQ. 和 AIza 密钥。声音与 OpenAI 不同。免费额度因账户及地区而异；免费服务可能使用内容改进产品。欧洲经济区、瑞士及英国有付费条款。勿发送敏感数据。",
   "ja-JP": "GeminiはAQ.・AIzaキーに対応。音声はOpenAIと異なり、無料枠は地域・アカウント次第。無料サービスは改善に内容を使う場合あり。EEA・スイス・英国の有料条件を確認。機密データ禁止。",
   "es-ES": "Gemini acepta claves AQ. e AIza. Voces distintas a OpenAI. Cuotas gratuitas según cuenta/región; servicios gratuitos pueden usar contenido para mejorar. Condiciones especiales EEE, Suiza y Reino Unido. No envíes datos sensibles.",
   "pt-BR": "Gemini aceita chaves AQ. e AIza. Vozes diferentes do OpenAI. Cotas gratuitas variam por conta/região; serviços grátis podem usar conteúdo para melhorias. Termos especiais no EEE, Suíça e Reino Unido. Não envie dados sensíveis."
  },
  "ui.s145": {
   "de-DE": "OpenAI-API-Schlüssel für Live-Stimme und GPT-Text",
   "en-GB": "OpenAI API key for Live and text",
   "zh-CN": "OpenAI API 密钥（实时和文本）",
   "ja-JP": "ライブとテキスト用OpenAI APIキー",
   "es-ES": "Clave OpenAI para Live y texto",
   "pt-BR": "Chave OpenAI para Live e texto"
  },
  "ui.s146": {
   "de-DE": "Schlüssel geschützt speichern",
   "en-GB": "Save key securely",
   "zh-CN": "安全保存密钥",
   "ja-JP": "キーを安全に保存",
   "es-ES": "Guardar clave de forma segura",
   "pt-BR": "Salvar chave com segurança"
  },
  "ui.s147": {
   "de-DE": "Schlüssel löschen",
   "en-GB": "Delete key",
   "zh-CN": "删除密钥",
   "ja-JP": "キーを削除",
   "es-ES": "Eliminar clave",
   "pt-BR": "Excluir chave"
  },
  "ui.s148": {
   "de-DE": "OpenAI-API-Aufrufe können Kosten verursachen. Der Schlüssel wird mit Windows-Datenschutz verschlüsselt, wenn verfügbar.",
   "en-GB": "OpenAI API calls may be billed. Keys use OS encryption when available.",
   "zh-CN": "OpenAI API 调用可能收费。密钥使用可用的系统加密。",
   "ja-JP": "OpenAI APIは課金される場合あり。利用可能ならOS暗号化でキーを保存。",
   "es-ES": "Las llamadas OpenAI pueden costar. Claves cifradas por el sistema si es posible.",
   "pt-BR": "Chamadas OpenAI podem ser cobradas. Chaves criptografadas pelo sistema quando possível."
  },
  "ui.s149": {
   "de-DE": "Im Automatikmodus kostenpflichtige Cloud-Audioanbieter ausdrücklich erlauben",
   "en-GB": "Explicitly allow paid cloud audio in Automatic mode",
   "zh-CN": "明确允许自动模式使用付费云音频",
   "ja-JP": "自動モードで有料クラウド音声を許可",
   "es-ES": "Permitir audio cloud de pago en Automático",
   "pt-BR": "Permitir áudio cloud pago no Automático"
  },
  "ui.s150": {
   "de-DE": "Ohne diese Freigabe wechselt Automatik niemals selbstständig zu Gemini oder OpenAI. Anbieterwechsel erfolgen nur zwischen Sitzungen; es gibt keine doppelten Anfragen.",
   "en-GB": "Without permission, Automatic never starts paid cloud audio. Providers change only between sessions; no duplicate requests.",
   "zh-CN": "未授权时自动模式不会启动付费云音频。仅会话之间切换提供商，不重复请求。",
   "ja-JP": "許可なしで自動モードは有料音声を開始しません。提供元の変更は会話間のみ、重複要求なし。",
   "es-ES": "Sin permiso, Automático no inicia audio cloud de pago. Cambios solo entre sesiones; sin solicitudes duplicadas.",
   "pt-BR": "Sem permissão, Automático não inicia áudio cloud pago. Trocas só entre sessões; sem pedidos duplicados."
  },
  "ui.s151": {
   "de-DE": "Lokales Monatsbudget in Euro (0 = keine Grenze)",
   "en-GB": "Local monthly budget in EUR (0 = unlimited)",
   "zh-CN": "本地月预算（欧元，0 = 不限）",
   "ja-JP": "ローカル月額予算（EUR、0＝無制限）",
   "es-ES": "Presupuesto mensual local EUR (0 = sin límite)",
   "pt-BR": "Orçamento mensal local EUR (0 = sem limite)"
  },
  "ui.s152": {
   "de-DE": "Neue kostenpflichtige Gespräche bei 100 % lokal blockieren",
   "en-GB": "Locally block new paid conversations at 100%",
   "zh-CN": "达到 100% 时本地阻止新的付费会话",
   "ja-JP": "100%で新規有料会話をローカルでブロック",
   "es-ES": "Bloquear localmente nuevas sesiones al 100%",
   "pt-BR": "Bloquear localmente novas sessões a 100%"
  },
  "ui.s153": {
   "de-DE": "Warnungen erscheinen bei 50 %, 80 % und 100 %. Das lokale Software-Budget ist keine garantierte serverseitige Ausgabensperre; Nutzungsdaten können fehlen oder verspätet sein.",
   "en-GB": "Warnings at 50%, 80%, 100%. This local budget is not a guaranteed provider spending cap; usage may be missing or delayed.",
   "zh-CN": "在 50%、80%、100% 提醒。本地预算不是提供商侧的保证限额；用量可能缺失或延迟。",
   "ja-JP": "50%、80%、100%で警告。ローカル予算は提供元側の確実な上限ではありません。使用量が遅れる場合あり。",
   "es-ES": "Avisos al 50%, 80%, 100%. El presupuesto local no garantiza el límite del proveedor; puede faltar uso o llegar tarde.",
   "pt-BR": "Avisos a 50%, 80%, 100%. O orçamento local não garante limite no provedor; dados podem faltar ou atrasar."
  },
  "ui.s154": {
   "de-DE": "Aktiv:",
   "en-GB": "Active:",
   "zh-CN": "当前：",
   "ja-JP": "使用中：",
   "es-ES": "Activo:",
   "pt-BR": "Ativo:"
  },
  "ui.s155": {
   "de-DE": "OpenAI",
   "en-GB": "OpenAI",
   "zh-CN": "OpenAI",
   "ja-JP": "OpenAI",
   "es-ES": "OpenAI",
   "pt-BR": "OpenAI"
  },
  "ui.s156": {
   "de-DE": "gpt-realtime-2.1-mini",
   "en-GB": "gpt-realtime-2.1-mini",
   "zh-CN": "gpt-realtime-2.1-mini",
   "ja-JP": "gpt-realtime-2.1-mini",
   "es-ES": "gpt-realtime-2.1-mini",
   "pt-BR": "gpt-realtime-2.1-mini"
  },
  "ui.s157": {
   "de-DE": "Gespräch:",
   "en-GB": "Session:",
   "zh-CN": "会话：",
   "ja-JP": "会話：",
   "es-ES": "Sesión:",
   "pt-BR": "Sessão:"
  },
  "ui.s158": {
   "de-DE": "Heute:",
   "en-GB": "Today:",
   "zh-CN": "今天：",
   "ja-JP": "今日：",
   "es-ES": "Hoy:",
   "pt-BR": "Hoje:"
  },
  "ui.s159": {
   "de-DE": "Monat:",
   "en-GB": "Month:",
   "zh-CN": "本月：",
   "ja-JP": "今月：",
   "es-ES": "Mes:",
   "pt-BR": "Mês:"
  },
  "ui.s160": {
   "de-DE": "Websuche:",
   "en-GB": "Web search:",
   "zh-CN": "网页搜索：",
   "ja-JP": "ウェブ検索：",
   "es-ES": "Búsqueda web:",
   "pt-BR": "Busca web:"
  },
  "ui.s161": {
   "de-DE": "Nach Anbieter:",
   "en-GB": "By provider:",
   "zh-CN": "按提供商：",
   "ja-JP": "提供元別：",
   "es-ES": "Por proveedor:",
   "pt-BR": "Por provedor:"
  },
  "ui.s162": {
   "de-DE": "· Gemini",
   "en-GB": "· Gemini",
   "zh-CN": "· Gemini",
   "ja-JP": "· Gemini",
   "es-ES": "· Gemini",
   "pt-BR": "· Gemini"
  },
  "ui.s163": {
   "de-DE": "· Lokal",
   "en-GB": "· Local",
   "zh-CN": "· 本地",
   "ja-JP": "· ローカル",
   "es-ES": "· Local",
   "pt-BR": "· Local"
  },
  "ui.s164": {
   "de-DE": "Preisannahmen bearbeiten (EUR je 1 Mio. Tokens / Web je 1000 Aufrufe)",
   "en-GB": "Edit price assumptions (EUR/million tokens; web/1000 calls)",
   "zh-CN": "编辑价格假设（欧元/百万词元；网页/千次）",
   "ja-JP": "価格仮定を編集（EUR/100万トークン、検索/1000回）",
   "es-ES": "Editar precios (EUR/millón de tokens; web/1000 llamadas)",
   "pt-BR": "Editar preços (EUR/milhão de tokens; web/1000 chamadas)"
  },
  "ui.s165": {
   "de-DE": "OpenAI Text Input",
   "en-GB": "OpenAI text input",
   "zh-CN": "OpenAI 文本输入",
   "ja-JP": "OpenAI テキスト入力",
   "es-ES": "OpenAI texto entrada",
   "pt-BR": "OpenAI texto entrada"
  },
  "ui.s166": {
   "de-DE": "OpenAI Text Output",
   "en-GB": "OpenAI text output",
   "zh-CN": "OpenAI 文本输出",
   "ja-JP": "OpenAI テキスト出力",
   "es-ES": "OpenAI texto salida",
   "pt-BR": "OpenAI texto saída"
  },
  "ui.s167": {
   "de-DE": "OpenAI Audio Input",
   "en-GB": "OpenAI audio input",
   "zh-CN": "OpenAI 音频输入",
   "ja-JP": "OpenAI 音声入力",
   "es-ES": "OpenAI audio entrada",
   "pt-BR": "OpenAI áudio entrada"
  },
  "ui.s168": {
   "de-DE": "OpenAI Audio Output",
   "en-GB": "OpenAI audio output",
   "zh-CN": "OpenAI 音频输出",
   "ja-JP": "OpenAI 音声出力",
   "es-ES": "OpenAI audio salida",
   "pt-BR": "OpenAI áudio saída"
  },
  "ui.s169": {
   "de-DE": "Gemini Text Input",
   "en-GB": "Gemini text input",
   "zh-CN": "Gemini 文本输入",
   "ja-JP": "Gemini テキスト入力",
   "es-ES": "Gemini texto entrada",
   "pt-BR": "Gemini texto entrada"
  },
  "ui.s170": {
   "de-DE": "Gemini Text Output",
   "en-GB": "Gemini text output",
   "zh-CN": "Gemini 文本输出",
   "ja-JP": "Gemini テキスト出力",
   "es-ES": "Gemini texto salida",
   "pt-BR": "Gemini texto saída"
  },
  "ui.s171": {
   "de-DE": "Gemini Audio Input",
   "en-GB": "Gemini audio input",
   "zh-CN": "Gemini 音频输入",
   "ja-JP": "Gemini 音声入力",
   "es-ES": "Gemini audio entrada",
   "pt-BR": "Gemini áudio entrada"
  },
  "ui.s172": {
   "de-DE": "Gemini Audio Output",
   "en-GB": "Gemini audio output",
   "zh-CN": "Gemini 音频输出",
   "ja-JP": "Gemini 音声出力",
   "es-ES": "Gemini audio salida",
   "pt-BR": "Gemini áudio saída"
  },
  "ui.s173": {
   "de-DE": "OpenAI Websuche je 1000 Aufrufe",
   "en-GB": "OpenAI web search per 1000 calls",
   "zh-CN": "OpenAI 网页搜索每 1000 次",
   "ja-JP": "OpenAI検索1000回あたり",
   "es-ES": "Búsqueda OpenAI por 1000 llamadas",
   "pt-BR": "Busca OpenAI por 1000 chamadas"
  },
  "ui.s174": {
   "de-DE": "Stichtag der Vorgaben: 24.10.2026. Änderungen gelten für neue Nutzungseinträge; Anbieterpreise bitte regelmäßig prüfen.",
   "en-GB": "Default prices dated 24 Oct 2026. Changes apply to new usage; check current provider prices.",
   "zh-CN": "默认价格日期 2026-10-24。修改用于新用量；请检查提供商现价。",
   "ja-JP": "既定価格は2026年10月24日時点。変更は新規利用に適用。提供元の現在価格を確認。",
   "es-ES": "Precios predeterminados del 24/10/2026. Cambios para uso nuevo; consulta precios actuales.",
   "pt-BR": "Preços padrão de 24/10/2026. Mudanças para novos usos; confira os preços atuais."
  },
  "ui.s175": {
   "de-DE": "Noch keine gemeldete Nutzung. Werte sind Schätzungen und keine Anbieterrechnung bzw. kein offizieller Rechnungssaldo.",
   "en-GB": "No reported usage yet. Estimates are not a provider invoice or official balance.",
   "zh-CN": "尚无报告用量。估算不是提供商账单或官方余额。",
   "ja-JP": "使用量の報告はまだありません。推定値は請求書や公式残高ではありません。",
   "es-ES": "Sin uso informado. Las estimaciones no son factura ni saldo oficial.",
   "pt-BR": "Sem uso informado. Estimativas não são fatura nem saldo oficial."
  },
  "ui.s176": {
   "de-DE": "Kein lokales Monatsbudget gesetzt.",
   "en-GB": "No local monthly budget set.",
   "zh-CN": "未设置本地月预算。",
   "ja-JP": "ローカル月額予算は未設定。",
   "es-ES": "Sin presupuesto mensual local.",
   "pt-BR": "Sem orçamento mensal local."
  },
  "ui.s177": {
   "de-DE": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James",
   "en-GB": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James",
   "zh-CN": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James",
   "ja-JP": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James",
   "es-ES": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James",
   "pt-BR": "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James"
  },
  "ui.s178": {
   "de-DE": "Leertaste: rufen / ausblenden · Esc: ausblenden",
   "en-GB": "Space: show/hide · Esc: hide",
   "zh-CN": "空格：显示/隐藏 · Esc：隐藏",
   "ja-JP": "スペース：表示/非表示 · Esc：隠す",
   "es-ES": "Espacio: mostrar/ocultar · Esc: ocultar",
   "pt-BR": "Espaço: mostrar/ocultar · Esc: ocultar"
  },
  "ui.s179": {
   "de-DE": "Überall: Strg + Alt + Leertaste",
   "en-GB": "Global shortcut: Ctrl + Alt + Space",
   "zh-CN": "全局快捷键：Ctrl + Alt + 空格",
   "ja-JP": "全体ショートカット：Ctrl + Alt + スペース",
   "es-ES": "Atajo global: Ctrl + Alt + Espacio",
   "pt-BR": "Atalho global: Ctrl + Alt + Espaço"
  },
  "ui.s180": {
   "de-DE": "Fenster schließen = weiter im Infobereich.",
   "en-GB": "Closing this window keeps the app in the tray.",
   "zh-CN": "关闭窗口后应用留在系统托盘。",
   "ja-JP": "ウィンドウを閉じてもトレイに常駐します。",
   "es-ES": "Cerrar deja la app en la bandeja.",
   "pt-BR": "Fechar mantém o app na bandeja."
  },
  "ui.s181": {
   "de-DE": "Dort per Rechtsklick: Modi und Beenden.",
   "en-GB": "Right-click the tray for modes and Quit.",
   "zh-CN": "右击托盘可选模式或退出。",
   "ja-JP": "トレイを右クリックしてモード変更・終了。",
   "es-ES": "Clic derecho en la bandeja: modos y salir.",
   "pt-BR": "Clique direito na bandeja: modos e sair."
  },
  "ui.s182": {
   "de-DE": "LIVE-VORSCHAU",
   "en-GB": "LIVE PREVIEW",
   "zh-CN": "实时预览",
   "ja-JP": "ライブプレビュー",
   "es-ES": "VISTA PREVIA LIVE",
   "pt-BR": "PRÉVIA LIVE"
  },
  "ui.s183": {
   "de-DE": "01 / BEWEGUNG",
   "en-GB": "01 / MOVEMENT",
   "zh-CN": "01 / 移动",
   "ja-JP": "01 / 動き",
   "es-ES": "01 / MOVIMIENTO",
   "pt-BR": "01 / MOVIMENTO"
  },
  "ui.s184": {
   "de-DE": "Raum für",
   "en-GB": "Room for",
   "zh-CN": "留给",
   "ja-JP": "あなたの",
   "es-ES": "Espacio para",
   "pt-BR": "Espaço para"
  },
  "ui.s185": {
   "de-DE": "deine Ideen.",
   "en-GB": "your ideas.",
   "zh-CN": "你的想法。",
   "ja-JP": "アイデアのために。",
   "es-ES": "tus ideas.",
   "pt-BR": "suas ideias."
  },
  "ui.s186": {
   "de-DE": "DEIN BILDSCHIRM. SEIN KLEINER AUFTRITT.",
   "en-GB": "YOUR SCREEN. A SMALL APPEARANCE.",
   "zh-CN": "你的屏幕，他的小小亮相。",
   "ja-JP": "あなたの画面に、小さな登場。",
   "es-ES": "TU PANTALLA. UNA PEQUEÑA APARICIÓN.",
   "pt-BR": "SUA TELA. UMA PEQUENA APARIÇÃO."
  },
  "ui.s187": {
   "de-DE": "Unsichtbar · bereit für seinen Auftritt",
   "en-GB": "Hidden · ready to appear",
   "zh-CN": "隐藏 · 随时出现",
   "ja-JP": "非表示 · 登場待機",
   "es-ES": "Oculto · listo para aparecer",
   "pt-BR": "Oculto · pronto para aparecer"
  },
  "ui.s188": {
   "de-DE": "VERBINDUNG STEHT",
   "en-GB": "CONNECTED",
   "zh-CN": "已连接",
   "ja-JP": "接続済み",
   "es-ES": "CONECTADO",
   "pt-BR": "CONECTADO"
  },
  "ui.s189": {
   "de-DE": "Hallo Robin. Schön, dass du da bist.",
   "en-GB": "Hello. Good to see you.",
   "zh-CN": "你好，很高兴见到你。",
   "ja-JP": "こんにちは。お会いできて嬉しいです。",
   "es-ES": "Hola. Qué gusto verte.",
   "pt-BR": "Olá. Bom ver você."
  },
  "ui.s190": {
   "de-DE": "NUR KOPF & HÄNDE",
   "en-GB": "HEAD AND HANDS ONLY",
   "zh-CN": "仅头部和手部",
   "ja-JP": "頭と手だけ",
   "es-ES": "SOLO CABEZA Y MANOS",
   "pt-BR": "SÓ CABEÇA E MÃOS"
  },
  "ui.s191": {
   "de-DE": "LEISE IM HINTERGRUND. DA, WENN DU IHN BRAUCHST.",
   "en-GB": "QUIETLY IN THE BACKGROUND. HERE WHEN NEEDED.",
   "zh-CN": "安静地在后台，需要时出现。",
   "ja-JP": "静かに背景で。必要なときに。",
   "es-ES": "EN SILENCIO AL FONDO. CUANDO ME NECESITES.",
   "pt-BR": "SILENCIOSO AO FUNDO. QUANDO VOCÊ PRECISAR."
  },
  "language.ui": {
   "de-DE": "Bediensprache",
   "en-GB": "Interface language",
   "zh-CN": "界面语言",
   "ja-JP": "操作言語",
   "es-ES": "Idioma de interfaz",
   "pt-BR": "Idioma da interface"
  },
  "language.conversation": {
   "de-DE": "KI-Gesprächssprache",
   "en-GB": "AI conversation language",
   "zh-CN": "AI 对话语言",
   "ja-JP": "AI会話言語",
   "es-ES": "Idioma de conversación IA",
   "pt-BR": "Idioma da conversa IA"
  },
  "language.automatic": {
   "de-DE": "Automatisch",
   "en-GB": "Automatic",
   "zh-CN": "自动",
   "ja-JP": "自動",
   "es-ES": "Automático",
   "pt-BR": "Automático"
  },
  "language.saved": {
   "de-DE": "Sprache gespeichert. Live neu starten; Einstellungen bleiben erhalten.",
   "en-GB": "Language saved. Restart Live; settings are retained.",
   "zh-CN": "语言已保存。请重新启动实时会话；设置会保留。",
   "ja-JP": "言語を保存。ライブを再開してください。設定は保持されます。",
   "es-ES": "Idioma guardado. Reinicia Live; ajustes conservados.",
   "pt-BR": "Idioma salvo. Reinicie Live; configurações mantidas."
  },
  "speech.missing": {
   "de-DE": "Windows-Erkennung für {locale} fehlt oder ist nicht bereit. Textfeld und Schaltflächen verwenden; kein zweites Mikrofon wird gestartet.",
   "en-GB": "Windows recognition for {locale} is missing or unavailable. Use text and buttons; no second microphone is started.",
   "zh-CN": "Windows 的 {locale} 识别未安装或不可用。请使用文本和按钮，不会启动第二个麦克风。",
   "ja-JP": "Windowsの{locale}認識が未導入か利用不可。入力欄とボタンを使用してください。第2のマイクは開始しません。",
   "es-ES": "El reconocimiento Windows {locale} falta o no está disponible. Usa texto y botones; no se inicia otro micrófono.",
   "pt-BR": "O reconhecimento Windows {locale} está ausente ou indisponível. Use texto e botões; nenhum segundo microfone é iniciado."
  },
  "speech.ready": {
   "de-DE": "Lokale Rasterbefehle bereit ({locale}). Stopp ist jederzeit möglich.",
   "en-GB": "Local grid commands ready ({locale}). Stop is always available.",
   "zh-CN": "本地网格命令就绪（{locale}）。随时可停止。",
   "ja-JP": "ローカルグリッド認識の準備完了（{locale}）。いつでも停止可能。",
   "es-ES": "Comandos locales listos ({locale}). Puedes detener en cualquier momento.",
   "pt-BR": "Comandos locais prontos ({locale}). É possível parar a qualquer momento."
  },
  "speech.fallback": {
   "de-DE": "Gemini pausiert: kein zuverlässiger gemeinsamer Transkriptkanal im vorhandenen Setup. Exklusive lokale Rastererkennung; Text und Schaltflächen bleiben verfügbar.",
   "en-GB": "Gemini paused: no reliable shared transcript channel in the existing setup. Exclusive local grid recognition; text and buttons remain available.",
   "zh-CN": "Gemini 已暂停：现有设置无可靠共用转录。本地独占网格识别，文本和按钮仍可用。",
   "ja-JP": "Geminiを一時停止：既存設定に信頼できる共用文字起こしがありません。排他的ローカル認識、入力欄とボタンは使用可能。",
   "es-ES": "Gemini pausado: sin canal compartido fiable en el setup actual. Reconocimiento local exclusivo; texto y botones disponibles.",
   "pt-BR": "Gemini pausado: sem canal compartilhado confiável no setup atual. Reconhecimento local exclusivo; texto e botões disponíveis."
  },
  "mouse.shared": {
   "de-DE": "Raster und OpenAI-Gespräch aktiv. Ein gemeinsames Mikrofon; Mausbefehle werden lokal abgefangen.",
   "en-GB": "Grid and OpenAI conversation active. One shared microphone; mouse commands are intercepted locally.",
   "zh-CN": "网格与 OpenAI 对话均已启用。共用一个麦克风；鼠标命令在本地拦截。",
   "ja-JP": "グリッドとOpenAI会話が有効。マイクは1つ、マウスコマンドはローカルで処理。",
   "es-ES": "Cuadrícula y OpenAI activos. Un micrófono compartido; comandos de ratón interceptados localmente.",
   "pt-BR": "Grade e OpenAI ativos. Um microfone compartilhado; comandos do mouse interceptados localmente."
  },
  "mouse.local": {
   "de-DE": "Lokaler Rastermodus aktiv. Textfeld bleibt verfügbar; Spracherkennung erfordert die installierte Windows-Sprache.",
   "en-GB": "Local grid mode active. Text remains available; speech needs the matching Windows recognizer.",
   "zh-CN": "本地网格模式已启用。文本仍可用；语音需对应 Windows 识别语言。",
   "ja-JP": "ローカルグリッドモード有効。入力欄は使用可能。音声には対応するWindows認識が必要。",
   "es-ES": "Modo local activo. Texto disponible; voz necesita el reconocedor Windows correspondiente.",
   "pt-BR": "Modo local ativo. Texto disponível; voz exige o reconhecedor Windows correspondente."
  },
  "mouse.help": {
   "de-DE": "Ebene {depth} · A1–D5 · Stopp · Zurück · Raster aus",
   "en-GB": "Level {depth} · A1–D5 · Stop · Back · Grid off",
   "zh-CN": "第 {depth} 层 · A1–D5 · 停止 · 返回 · 关闭网格",
   "ja-JP": "深度 {depth} · A1–D5 · 停止 · 戻る · グリッドを終了",
   "es-ES": "Nivel {depth} · A1–D5 · Detener · Atrás · Cerrar cuadrícula",
   "pt-BR": "Nível {depth} · A1–D5 · Parar · Voltar · Encerrar grade"
  },
  "status.error": {
   "de-DE": "Aktion nicht verfügbar. Einstellungen und Verbindung prüfen. {code}",
   "en-GB": "Action unavailable. Check settings and connection. {code}",
   "zh-CN": "操作不可用。请检查设置和连接。{code}",
   "ja-JP": "操作を利用できません。設定と接続を確認。{code}",
   "es-ES": "Acción no disponible. Revisa ajustes y conexión. {code}",
   "pt-BR": "Ação indisponível. Verifique configurações e conexão. {code}"
  },
  "status.ready": {
   "de-DE": "Bereit.",
   "en-GB": "Ready.",
   "zh-CN": "就绪。",
   "ja-JP": "準備完了。",
   "es-ES": "Listo.",
   "pt-BR": "Pronto."
  },
  "consent.title": {
   "de-DE": "{name} – Übertragung erlauben?",
   "en-GB": "{name} – Allow transfer?",
   "zh-CN": "{name} – 允许传输？",
   "ja-JP": "{name} – 送信を許可しますか？",
   "es-ES": "{name} – ¿Permitir transferencia?",
   "pt-BR": "{name} – Permitir transferência?"
  },
  "consent.screen": {
   "de-DE": "Bild des gewählten Monitors zur KI-Auswertung an OpenAI übertragen?",
   "en-GB": "Send an image of the selected monitor to OpenAI for analysis?",
   "zh-CN": "将所选显示器图像发送给 OpenAI 分析？",
   "ja-JP": "選択画面の画像をOpenAIに送信して分析しますか？",
   "es-ES": "¿Enviar imagen del monitor seleccionado a OpenAI para analizar?",
   "pt-BR": "Enviar imagem do monitor selecionado ao OpenAI para análise?"
  },
  "consent.text": {
   "de-DE": "Markierten Text zum Vorlesen, Erklären oder Zusammenfassen an OpenAI übertragen?",
   "en-GB": "Send selected text to OpenAI for reading, explanation or summary?",
   "zh-CN": "将选中文本发送给 OpenAI 朗读、解释或总结？",
   "ja-JP": "選択テキストを読み上げ・説明・要約のためOpenAIへ送信しますか？",
   "es-ES": "¿Enviar texto seleccionado a OpenAI para leer, explicar o resumir?",
   "pt-BR": "Enviar texto selecionado ao OpenAI para ler, explicar ou resumir?"
  },
  "consent.screenData": {
   "de-DE": "Bildschirminhalte können vertrauliche Daten enthalten. Genau ein Bild pro ausdrücklichem Auftrag.",
   "en-GB": "Screen contents may be confidential. One image per explicit request.",
   "zh-CN": "屏幕内容可能包含机密。每个明确请求只发送一张图像。",
   "ja-JP": "画面には機密情報が含まれる場合があります。明示要求1件につき画像1枚。",
   "es-ES": "La pantalla puede contener datos confidenciales. Una imagen por solicitud explícita.",
   "pt-BR": "A tela pode conter dados confidenciais. Uma imagem por pedido explícito."
  },
  "consent.textData": {
   "de-DE": "Text kann vertraulich sein. Vorlesen sendet ihn an OpenAI TTS, Erklärung und Zusammenfassung an das vorhandene OpenAI-Textmodell.",
   "en-GB": "Text may be confidential. Reading sends it to OpenAI TTS; explanation/summary uses the existing OpenAI text model.",
   "zh-CN": "文本可能包含机密。朗读发送给 OpenAI TTS；解释和总结使用原有 OpenAI 文本模型。",
   "ja-JP": "テキストには機密情報があり得ます。読み上げはOpenAI TTS、説明・要約は既存OpenAIテキストモデルへ送信。",
   "es-ES": "El texto puede ser confidencial. Lectura a OpenAI TTS; explicación/resumen al modelo de texto existente.",
   "pt-BR": "O texto pode ser confidencial. Leitura envia ao OpenAI TTS; explicação/resumo ao modelo de texto existente."
  },
  "consent.common": {
   "de-DE": "API-Kosten können entstehen. Inhalte bleiben in der App nur vorübergehend im Speicher, ohne Inhaltsprotokolle oder Gedächtnis. Für Verarbeitung und Aufbewahrung bei OpenAI gelten dessen Regeln. Einmal gilt nur für diese Anfrage. Dauerhaft gilt auf diesem Gerät auch nach Neustart, getrennt für Bildschirm und Text, nur für OpenAI. Jeder weitere Auftrag muss ausdrücklich erfolgen; keine Hintergrundüberwachung. Widerruf jederzeit in den Einstellungen. Diese App-Zustimmung ersetzt keine Windows-Systemberechtigung.",
   "en-GB": "API charges may apply. App contents stay temporarily in memory, without content logs or memory notes. OpenAI's processing and retention rules apply. Once covers only this request. Durable approval survives restarts on this device, separate for screen/text and only for OpenAI. Each further action still requires an explicit request; no background monitoring. Revoke anytime in settings. This app consent does not replace Windows system permissions.",
   "zh-CN": "可能产生 API 费用。应用仅临时在内存处理内容，不记录内容或记忆笔记。OpenAI 的处理及保留规则适用。单次仅限本请求。持久授权在本设备重启后仍有效，屏幕与文本分开且仅限 OpenAI。后续每项操作仍需明确请求，无后台监控。可随时在设置撤销。此应用授权不替代 Windows 系统权限。",
   "ja-JP": "API料金が発生する場合があります。アプリ内は一時メモリーのみ、内容ログや記憶メモなし。OpenAIの処理・保持規則が適用されます。今回のみはこの要求限定。永続許可は本端末で再起動後も有効、画面とテキスト別、OpenAIのみ。以後も各操作に明示要求が必要で、背景監視はありません。設定でいつでも取消可能。Windows権限とは別です。",
   "es-ES": "Puede haber cargos API. Contenido temporal en memoria de la app, sin registros ni notas. Rigen las normas de OpenAI sobre tratamiento y retención. Una vez solo cubre esta solicitud. El permiso permanente sobrevive reinicios en este dispositivo, separado para pantalla/texto y solo OpenAI. Cada acción requiere petición explícita; sin vigilancia de fondo. Revoca en ajustes cuando quieras. No sustituye permisos Windows.",
   "pt-BR": "Podem existir custos de API. Conteúdo temporário na memória do app, sem logs de conteúdo nem notas. Valem as regras de processamento e retenção do OpenAI. Uma vez cobre só este pedido. Permissão permanente continua após reiniciar neste dispositivo, separada para tela/texto e só OpenAI. Cada ação exige pedido explícito; sem monitoramento em segundo plano. Revogue a qualquer momento nas configurações. Não substitui permissões Windows."
  },
  "action.cancel": {
   "de-DE": "Abbrechen",
   "en-GB": "Cancel",
   "zh-CN": "取消",
   "ja-JP": "キャンセル",
   "es-ES": "Cancelar",
   "pt-BR": "Cancelar"
  },
  "action.once": {
   "de-DE": "Einmal erlauben",
   "en-GB": "Allow once",
   "zh-CN": "允许一次",
   "ja-JP": "今回のみ許可",
   "es-ES": "Permitir una vez",
   "pt-BR": "Permitir uma vez"
  },
  "action.device": {
   "de-DE": "Auf diesem Gerät dauerhaft erlauben",
   "en-GB": "Always allow on this device",
   "zh-CN": "在本设备持久允许",
   "ja-JP": "この端末で常に許可",
   "es-ES": "Permitir siempre en este dispositivo",
   "pt-BR": "Sempre permitir neste dispositivo"
  },
  "action.quit": {
   "de-DE": "Beenden",
   "en-GB": "Quit",
   "zh-CN": "退出",
   "ja-JP": "終了",
   "es-ES": "Salir",
   "pt-BR": "Sair"
  },
  "action.delete": {
   "de-DE": "Löschen",
   "en-GB": "Delete",
   "zh-CN": "删除",
   "ja-JP": "削除",
   "es-ES": "Eliminar",
   "pt-BR": "Excluir"
  },
  "memory.confirm": {
   "de-DE": "Wirklich alle lokal gespeicherten Merksätze löschen?",
   "en-GB": "Delete all locally saved notes?",
   "zh-CN": "删除全部本地笔记？",
   "ja-JP": "ローカルメモをすべて削除しますか？",
   "es-ES": "¿Eliminar todas las notas locales?",
   "pt-BR": "Excluir todas as notas locais?"
  },
  "app.launch.title": {
   "de-DE": "{name} – Programmstart freigeben?",
   "en-GB": "{name} – Allow app launch?",
   "zh-CN": "{name} – 允许启动应用？",
   "ja-JP": "{name} – アプリ起動を許可しますか？",
   "es-ES": "{name} – ¿Permitir abrir aplicación?",
   "pt-BR": "{name} – Permitir abrir aplicativo?"
  },
  "app.launch.question": {
   "de-DE": "Soll {name} {app} öffnen?",
   "en-GB": "Should {name} open {app}?",
   "zh-CN": "允许 {name} 打开 {app}？",
   "ja-JP": "{name}が{app}を開きますか？",
   "es-ES": "¿Debe {name} abrir {app}?",
   "pt-BR": "{name} deve abrir {app}?"
  },
  "app.launch.detail": {
   "de-DE": "Spracherkennung war nicht eindeutig. Nur dieses Programm wird nach deiner Bestätigung geöffnet.",
   "en-GB": "Speech recognition was ambiguous. Only this app opens after your confirmation.",
   "zh-CN": "语音识别有歧义。仅在你确认后打开此应用。",
   "ja-JP": "音声認識が不明確でした。確認後、このアプリのみを開きます。",
   "es-ES": "Reconocimiento ambiguo. Solo se abre esta app tras confirmar.",
   "pt-BR": "Reconhecimento ambíguo. Só este app abre após sua confirmação."
  },
  "action.openOnce": {
   "de-DE": "Einmal öffnen",
   "en-GB": "Open once",
   "zh-CN": "打开一次",
   "ja-JP": "一度開く",
   "es-ES": "Abrir una vez",
   "pt-BR": "Abrir uma vez"
  },
  "character.show": {
   "de-DE": "{name} rufen",
   "en-GB": "Show {name}",
   "zh-CN": "显示 {name}",
   "ja-JP": "{name}を表示",
   "es-ES": "Mostrar {name}",
   "pt-BR": "Mostrar {name}"
  },
  "character.hide": {
   "de-DE": "{name} ausblenden und Gespräch beenden",
   "en-GB": "Hide {name} and end conversation",
   "zh-CN": "隐藏 {name} 并结束会话",
   "ja-JP": "{name}を隠して会話を終了",
   "es-ES": "Ocultar {name} y terminar conversación",
   "pt-BR": "Ocultar {name} e encerrar conversa"
  },
  "character.title": {
   "de-DE": "{name} – Einstellungen",
   "en-GB": "{name} – Settings",
   "zh-CN": "{name} – 设置",
   "ja-JP": "{name} – 設定",
   "es-ES": "{name} – Ajustes",
   "pt-BR": "{name} – Configurações"
  },
  "wake.label": {
   "de-DE": "Im Hintergrund auf „{name}“ warten (lokal)",
   "en-GB": "Wait for “{name}” locally",
   "zh-CN": "本地等待唤醒词“{name}”",
   "ja-JP": "「{name}」をローカルで待機",
   "es-ES": "Esperar «{name}» localmente",
   "pt-BR": "Aguardar “{name}” localmente"
  },
  "wake.test": {
   "de-DE": "Codewort „{name}“ kostenlos testen",
   "en-GB": "Test “{name}” without API charges",
   "zh-CN": "测试“{name}”（无 API 费）",
   "ja-JP": "「{name}」を無料テスト",
   "es-ES": "Probar «{name}» sin coste API",
   "pt-BR": "Testar “{name}” sem custo de API"
  },
  "wake.sensitivity": {
   "de-DE": "Wie empfindlich soll {name} auf den Namen reagieren?",
   "en-GB": "How sensitive should {name}'s wakeword be?",
   "zh-CN": "{name} 的唤醒词灵敏度？",
   "ja-JP": "{name}のウェイクワード感度",
   "es-ES": "¿Sensibilidad de activación de {name}?",
   "pt-BR": "Sensibilidade de ativação de {name}?"
  },
  "menu.active": {
   "de-DE": "Aktiv – Kommentare erlaubt",
   "en-GB": "Active – comments allowed",
   "zh-CN": "活跃 – 允许评论",
   "ja-JP": "アクティブ – コメント可",
   "es-ES": "Activo – comentarios permitidos",
   "pt-BR": "Ativo – comentários permitidos"
  },
  "menu.quiet": {
   "de-DE": "Ruhe – nur auf Abruf",
   "en-GB": "Quiet – on request only",
   "zh-CN": "安静 – 仅响应请求",
   "ja-JP": "静か – 要求時のみ",
   "es-ES": "Silencioso – solo a petición",
   "pt-BR": "Silencioso – só sob pedido"
  },
  "menu.sleep": {
   "de-DE": "Schlafen – vollständig still",
   "en-GB": "Sleep – fully quiet",
   "zh-CN": "睡眠 – 完全安静",
   "ja-JP": "スリープ – 完全停止",
   "es-ES": "Reposo – silencio total",
   "pt-BR": "Dormir – silêncio total"
  },
  "menu.comments": {
   "de-DE": "Spontane Kommentare",
   "en-GB": "Spontaneous comments",
   "zh-CN": "主动评论",
   "ja-JP": "自発的コメント",
   "es-ES": "Comentarios espontáneos",
   "pt-BR": "Comentários espontâneos"
  },
  "menu.test": {
   "de-DE": "Lustigen Testkommentar zeigen",
   "en-GB": "Show test comment",
   "zh-CN": "显示测试评论",
   "ja-JP": "テストコメントを表示",
   "es-ES": "Mostrar comentario de prueba",
   "pt-BR": "Mostrar comentário de teste"
  },
  "menu.stop": {
   "de-DE": "Sprachausgabe stoppen",
   "en-GB": "Stop speech",
   "zh-CN": "停止语音",
   "ja-JP": "音声を停止",
   "es-ES": "Detener voz",
   "pt-BR": "Parar voz"
  },
  "menu.position": {
   "de-DE": "Position auf unten rechts zurücksetzen",
   "en-GB": "Reset position to bottom right",
   "zh-CN": "位置重置到右下",
   "ja-JP": "右下に位置を戻す",
   "es-ES": "Restablecer posición abajo derecha",
   "pt-BR": "Redefinir posição inferior direita"
  },
  "menu.settings": {
   "de-DE": "Einstellungen öffnen",
   "en-GB": "Open settings",
   "zh-CN": "打开设置",
   "ja-JP": "設定を開く",
   "es-ES": "Abrir ajustes",
   "pt-BR": "Abrir configurações"
  },
  "language.notice": {
   "de-DE": "UI in sechs Sprachen. Sprache benötigt passende Erkennung; neue Sprachpfade noch nicht unter Windows getestet. OpenAI teilt Transkripte, Gemini nutzt einen sicheren lokalen Fallback.",
   "en-GB": "UI in six languages. Voice needs matching recognition; new language paths not yet tested on Windows. OpenAI shares transcripts; Gemini uses a safe local fallback.",
   "zh-CN": "六种界面语言。语音需要对应识别；新语言路径尚未在 Windows 实测。OpenAI 共用转录，Gemini 使用安全本地后备。",
   "ja-JP": "UIは6言語。音声には対応認識が必要で、新言語経路はWindows未実測。OpenAIは文字起こし共用、Geminiは安全なローカル代替。",
   "es-ES": "Interfaz en seis idiomas. Voz requiere reconocimiento compatible; rutas nuevas aún sin probar en Windows. OpenAI comparte transcripciones; Gemini usa alternativa local segura.",
   "pt-BR": "Interface em seis idiomas. Voz exige reconhecimento compatível; novas rotas ainda não testadas no Windows. OpenAI compartilha transcrições; Gemini usa alternativa local segura."
  },
  "language.settings": {
   "de-DE": "Spracheinstellungen",
   "en-GB": "Language settings",
   "zh-CN": "语言设置",
   "ja-JP": "言語設定",
   "es-ES": "Ajustes de idioma",
   "pt-BR": "Configurações de idioma"
  },
  "chat.you": {
   "de-DE": "Du: ",
   "en-GB": "You: ",
   "zh-CN": "你：",
   "ja-JP": "あなた：",
   "es-ES": "Tú: ",
   "pt-BR": "Você: "
  },
  "aria.character": {
   "de-DE": "Desktop-Charakter",
   "en-GB": "Desktop character",
   "zh-CN": "桌面角色",
   "ja-JP": "デスクトップキャラクター",
   "es-ES": "Personaje de escritorio",
   "pt-BR": "Personagem de desktop"
  },
  "aria.live": {
   "de-DE": "Schneller Gesprächsstart",
   "en-GB": "Quick conversation start",
   "zh-CN": "快速开始会话",
   "ja-JP": "会話をすぐ開始",
   "es-ES": "Inicio rápido de conversación",
   "pt-BR": "Início rápido de conversa"
  },
  "aria.mouse": {
   "de-DE": "Lokale Mauspositionierung",
   "en-GB": "Local mouse positioning",
   "zh-CN": "本地鼠标定位",
   "ja-JP": "ローカルマウス位置指定",
   "es-ES": "Posicionamiento local del ratón",
   "pt-BR": "Posicionamento local do mouse"
  },
  "aria.mode": {
   "de-DE": "Modus wählen",
   "en-GB": "Choose mode",
   "zh-CN": "选择模式",
   "ja-JP": "モード選択",
   "es-ES": "Elegir modo",
   "pt-BR": "Escolher modo"
  },
  "aria.gesture": {
   "de-DE": "Geste wählen",
   "en-GB": "Choose gesture",
   "zh-CN": "选择手势",
   "ja-JP": "ジェスチャー選択",
   "es-ES": "Elegir gesto",
   "pt-BR": "Escolher gesto"
  },
  "aria.chat": {
   "de-DE": "Letzte Unterhaltung",
   "en-GB": "Recent conversation",
   "zh-CN": "最近会话",
   "ja-JP": "最近の会話",
   "es-ES": "Conversación reciente",
   "pt-BR": "Conversa recente"
  },
  "aria.cost": {
   "de-DE": "Lokale Kostenschätzung",
   "en-GB": "Local cost estimate",
   "zh-CN": "本地费用估算",
   "ja-JP": "ローカル費用推定",
   "es-ES": "Estimación local de costes",
   "pt-BR": "Estimativa local de custos"
  },
  "aria.preview": {
   "de-DE": "Vorschau von Jeffrey, dem Desktop-Roboter",
   "en-GB": "Desktop character preview",
   "zh-CN": "桌面角色预览",
   "ja-JP": "デスクトップキャラクターのプレビュー",
   "es-ES": "Vista previa del personaje",
   "pt-BR": "Prévia do personagem"
  },
  "aria.robot": {
   "de-DE": "Freundlicher Roboterkopf mit schwebenden Händen",
   "en-GB": "Robot head with floating hands",
   "zh-CN": "机器人头与悬浮双手",
   "ja-JP": "ロボットの頭と浮かぶ手",
   "es-ES": "Cabeza robótica con manos flotantes",
   "pt-BR": "Cabeça robótica com mãos flutuantes"
  },
  "placeholder.chat": {
   "de-DE": "Moin! Erzähl mir einen Witz …",
   "en-GB": "Hello! Tell me a joke…",
   "zh-CN": "你好！讲个笑话吧……",
   "ja-JP": "こんにちは！冗談を聞かせて…",
   "es-ES": "¡Hola! Cuéntame un chiste…",
   "pt-BR": "Olá! Conte uma piada…"
  },
  "placeholder.note": {
   "de-DE": "Ich möchte, dass Jeffrey mich morgens kurz begrüßt.",
   "en-GB": "I would like Jeffrey to greet me in the morning.",
   "zh-CN": "我希望 Jeffrey 早晨问候我。",
   "ja-JP": "朝にJeffreyに挨拶してほしい。",
   "es-ES": "Quiero que Jeffrey me salude por la mañana.",
   "pt-BR": "Quero que Jeffrey me cumprimente de manhã."
  },
  "placeholder.model": {
   "de-DE": "z. B. llama3.2 oder qwen2.5",
   "en-GB": "e.g. llama3.2 or qwen2.5",
   "zh-CN": "例如 llama3.2 或 qwen2.5",
   "ja-JP": "例：llama3.2、qwen2.5",
   "es-ES": "p. ej. llama3.2 o qwen2.5",
   "pt-BR": "ex.: llama3.2 ou qwen2.5"
  },
  "placeholder.gemini": {
   "de-DE": "AQ.… oder AIza…",
   "en-GB": "AQ.… or AIza…",
   "zh-CN": "AQ.… 或 AIza…",
   "ja-JP": "AQ.… または AIza…",
   "es-ES": "AQ.… o AIza…",
   "pt-BR": "AQ.… ou AIza…"
  },
  "menu.wake": {
   "de-DE": "Codewort „{name}“",
   "en-GB": "Wakeword “{name}”",
   "zh-CN": "唤醒词“{name}”",
   "ja-JP": "ウェイクワード「{name}」",
   "es-ES": "Activación «{name}»",
   "pt-BR": "Ativação “{name}”"
  },
  "mouse.active": {
   "de-DE": "Koordinatennetz aktiv. Keine Klicks.",
   "en-GB": "Grid active. No clicks.",
   "zh-CN": "网格已启用，无点击。",
   "ja-JP": "グリッド有効。クリックなし。",
   "es-ES": "Cuadrícula activa. Sin clics.",
   "pt-BR": "Grade ativa. Sem cliques."
  },
  "mouse.stopped": {
   "de-DE": "Mausbewegung gestoppt.",
   "en-GB": "Mouse movement stopped.",
   "zh-CN": "鼠标移动已停止。",
   "ja-JP": "マウス移動を停止。",
   "es-ES": "Movimiento detenido.",
   "pt-BR": "Movimento parado."
  },
  "mouse.hidden": {
   "de-DE": "Raster unsichtbar. Koordinatensteuerung bleibt aktiv.",
   "en-GB": "Grid hidden. Coordinate commands stay active.",
   "zh-CN": "网格已隐藏，坐标控制仍有效。",
   "ja-JP": "グリッド非表示。座標コマンドは有効。",
   "es-ES": "Cuadrícula oculta. Control sigue activo.",
   "pt-BR": "Grade oculta. Controle continua ativo."
  },
  "mouse.subdivided": {
   "de-DE": "Aktuellen Zielbereich erneut in A1 bis D5 unterteilt.",
   "en-GB": "Target region subdivided into A1–D5.",
   "zh-CN": "目标区域已细分为 A1–D5。",
   "ja-JP": "対象領域をA1～D5に分割。",
   "es-ES": "Región subdividida en A1–D5.",
   "pt-BR": "Região subdividida em A1–D5."
  },
  "mouse.refined": {
   "de-DE": "Mausziel fein positioniert.",
   "en-GB": "Mouse target refined.",
   "zh-CN": "鼠标目标已细化。",
   "ja-JP": "マウス目標を微調整。",
   "es-ES": "Destino refinado.",
   "pt-BR": "Destino refinado."
  },
  "mouse.moving": {
   "de-DE": "Maus bewegt sich zum letzten Ziel.",
   "en-GB": "Moving to the last target.",
   "zh-CN": "正在移向上次目标。",
   "ja-JP": "前回の目標へ移動中。",
   "es-ES": "Moviendo al último destino.",
   "pt-BR": "Movendo ao último destino."
  },
  "mouse.target": {
   "de-DE": "Mausziel {cell} gewählt.",
   "en-GB": "Target {cell} selected.",
   "zh-CN": "已选择目标 {cell}。",
   "ja-JP": "目標{cell}を選択。",
   "es-ES": "Destino {cell} elegido.",
   "pt-BR": "Destino {cell} selecionado."
  },
  "mouse.depthLimit": {
   "de-DE": "Maximale Unterteilungstiefe erreicht.",
   "en-GB": "Maximum refinement depth reached.",
   "zh-CN": "已达到最大细分深度。",
   "ja-JP": "最大深度に到達。",
   "es-ES": "Profundidad máxima alcanzada.",
   "pt-BR": "Profundidade máxima atingida."
  },
  "mouse.pixelLimit": {
   "de-DE": "Zielbereich ist für weitere Pixel-Unterteilung zu klein.",
   "en-GB": "Target region is too small for further refinement.",
   "zh-CN": "目标区域过小，无法继续细分。",
   "ja-JP": "対象が小さすぎて細分化できません。",
   "es-ES": "Región demasiado pequeña para refinar.",
   "pt-BR": "Região pequena demais para refinar."
  },
  "mouse.gridPixelLimit": {
   "de-DE": "Zielbereich ist für ein weiteres Raster zu klein (Pixelgrenze).",
   "en-GB": "Region is too small for another grid (pixel limit).",
   "zh-CN": "区域过小，无法再建网格（像素限制）。",
   "ja-JP": "ピクセル制限により追加グリッド不可。",
   "es-ES": "Región muy pequeña para otra cuadrícula (límite de píxeles).",
   "pt-BR": "Região pequena demais para outra grade (limite de pixels)."
  },
  "mouse.topLevel": {
   "de-DE": "Bereits auf der obersten Ebene.",
   "en-GB": "Already at the root level.",
   "zh-CN": "已在最上层。",
   "ja-JP": "最上位です。",
   "es-ES": "Ya estás en el nivel inicial.",
   "pt-BR": "Já está no nível inicial."
  },
  "mouse.notReady": {
   "de-DE": "Maussteuerung noch nicht bereit.",
   "en-GB": "Mouse control is not ready yet.",
   "zh-CN": "鼠标控制尚未就绪。",
   "ja-JP": "マウス制御は準備中。",
   "es-ES": "Control del ratón aún no listo.",
   "pt-BR": "Controle do mouse ainda não pronto."
  },
  "mode.active": {
   "de-DE": "Aktiv",
   "en-GB": "Active",
   "zh-CN": "活跃",
   "ja-JP": "アクティブ",
   "es-ES": "Activo",
   "pt-BR": "Ativo"
  },
  "mode.quiet": {
   "de-DE": "Ruhe",
   "en-GB": "Quiet",
   "zh-CN": "安静",
   "ja-JP": "静か",
   "es-ES": "Silencioso",
   "pt-BR": "Silencioso"
  },
  "mode.sleep": {
   "de-DE": "Schlafen",
   "en-GB": "Sleep",
   "zh-CN": "睡眠",
   "ja-JP": "スリープ",
   "es-ES": "Reposo",
   "pt-BR": "Dormir"
  },
  "mode.activeDescription": {
   "de-DE": "Gelegentliche Kommentare sind erlaubt.",
   "en-GB": "Occasional comments allowed.",
   "zh-CN": "允许偶尔评论。",
   "ja-JP": "時々のコメントを許可。",
   "es-ES": "Se permiten comentarios ocasionales.",
   "pt-BR": "Comentários ocasionais permitidos."
  },
  "mode.quietDescription": {
   "de-DE": "Keine spontanen Kommentare. Auf Abruf bin ich da.",
   "en-GB": "No spontaneous comments. Available on request.",
   "zh-CN": "无主动评论，随叫随到。",
   "ja-JP": "自発的コメントなし。要求時に応答。",
   "es-ES": "Sin comentarios espontáneos. Disponible a petición.",
   "pt-BR": "Sem comentários espontâneos. Disponível sob pedido."
  },
  "tray.tooltip": {
   "de-DE": "{name} – {mode}{live}",
   "en-GB": "{name} – {mode}{live}",
   "zh-CN": "{name} – {mode}{live}",
   "ja-JP": "{name} – {mode}{live}",
   "es-ES": "{name} – {mode}{live}",
   "pt-BR": "{name} – {mode}{live}"
  },
  "tray.live": {
   "de-DE": " – LIVE-Mikrofon",
   "en-GB": " – LIVE microphone",
   "zh-CN": " – 实时麦克风",
   "ja-JP": " – ライブマイク",
   "es-ES": " – micrófono LIVE",
   "pt-BR": " – microfone LIVE"
  },
  "menu.wakeTest": {
   "de-DE": "Codewort kostenlos testen",
   "en-GB": "Test wakeword locally",
   "zh-CN": "本地测试唤醒词",
   "ja-JP": "ウェイクワードをローカルでテスト",
   "es-ES": "Probar activación local",
   "pt-BR": "Testar ativação local"
  },
  "memory.empty": {
   "de-DE": "Noch keine Merksätze gespeichert.",
   "en-GB": "No notes saved yet.",
   "zh-CN": "尚无笔记。",
   "ja-JP": "保存メモなし。",
   "es-ES": "Sin notas guardadas.",
   "pt-BR": "Sem notas salvas."
  },
  "memory.deleteLabel": {
   "de-DE": "Merksatz löschen: {note}",
   "en-GB": "Delete note: {note}",
   "zh-CN": "删除笔记：{note}",
   "ja-JP": "メモを削除：{note}",
   "es-ES": "Eliminar nota: {note}",
   "pt-BR": "Excluir nota: {note}"
  },
  "speech.recognised": {
   "de-DE": "Befehl erkannt; wird geprüft.",
   "en-GB": "Request recognised; checking it.",
   "zh-CN": "已识别请求，正在检查。",
   "ja-JP": "要求を認識。確認中。",
   "es-ES": "Petición reconocida; comprobando.",
   "pt-BR": "Pedido reconhecido; verificando."
  },
  "speech.listening": {
   "de-DE": "🎤 Ich höre zu … Sprich jetzt einen kurzen Satz.",
   "en-GB": "🎤 Listening… say a short sentence.",
   "zh-CN": "🎤 正在聆听，请说一句短句。",
   "ja-JP": "🎤 聞き取り中…短い文を話してください。",
   "es-ES": "🎤 Escuchando… di una frase breve.",
   "pt-BR": "🎤 Ouvindo… diga uma frase curta."
  },
  "speech.empty": {
   "de-DE": "Nichts verstanden. Du kannst erneut aufs Mikrofon klicken.",
   "en-GB": "Nothing recognised. Try the microphone again.",
   "zh-CN": "未识别，可再次点击麦克风。",
   "ja-JP": "認識できませんでした。もう一度マイクを押してください。",
   "es-ES": "No se reconoció nada. Prueba de nuevo.",
   "pt-BR": "Nada reconhecido. Tente novamente."
  },
  "speech.noMic": {
   "de-DE": "Mikrofon nicht verfügbar.",
   "en-GB": "Microphone unavailable.",
   "zh-CN": "麦克风不可用。",
   "ja-JP": "マイクを利用できません。",
   "es-ES": "Micrófono no disponible.",
   "pt-BR": "Microfone indisponível."
  },
  "speech.sleep": {
   "de-DE": "😴 Schlafmodus – keine Sprache, kein Mikrofon.",
   "en-GB": "😴 Sleep mode – speech and microphone off.",
   "zh-CN": "😴 睡眠模式：语音和麦克风关闭。",
   "ja-JP": "😴 スリープ：音声・マイク停止。",
   "es-ES": "😴 Reposo: voz y micrófono apagados.",
   "pt-BR": "😴 Dormir: voz e microfone desligados."
  },
  "speech.sleepRequest": {
   "de-DE": "Der Roboter schläft. Zuerst Aktiv oder Ruhe auswählen.",
   "en-GB": "Sleeping. Select Active or Quiet first.",
   "zh-CN": "正在睡眠。请先选活跃或安静。",
   "ja-JP": "スリープ中。先にアクティブか静かを選択。",
   "es-ES": "En reposo. Elige Activo o Silencioso.",
   "pt-BR": "Dormindo. Escolha Ativo ou Silencioso."
  },
  "speech.gridBusy": {
   "de-DE": "Lokale Rastererkennung ist aktiv. OpenAI Live kann sie übernehmen; für einmaliges Zuhören oder andere Anbieter das Raster beenden.",
   "en-GB": "Local grid listener is active. Start OpenAI Live to share it, or exit the grid for another provider.",
   "zh-CN": "本地网格监听已启用。启动 OpenAI Live 可共用，使用其他提供商请先关网格。",
   "ja-JP": "ローカル認識が有効。OpenAI Liveなら共用可能。他提供元はグリッドを終了。",
   "es-ES": "Escucha local activa. Inicia OpenAI Live para compartir, o cierra para otro proveedor.",
   "pt-BR": "Escuta local ativa. Inicie OpenAI Live para compartilhar, ou encerre para outro provedor."
  },
  "consent.revoked": {
   "de-DE": "Dauerhafte Zustimmung widerrufen. Künftige Cloud-Anfragen fragen wieder nach.",
   "en-GB": "Durable approval revoked. Future cloud requests will ask again.",
   "zh-CN": "持久授权已撤销。后续云请求将再次询问。",
   "ja-JP": "永続許可を取り消しました。次回クラウド要求で再確認。",
   "es-ES": "Permiso permanente revocado. Se volverá a preguntar.",
   "pt-BR": "Permissão permanente revogada. Será perguntado novamente."
  },
  "consent.revokeFailed": {
   "de-DE": "Widerruf gilt jetzt. Speichern fehlgeschlagen: Einstellungen-Datei prüfen, bevor die App neu gestartet wird.",
   "en-GB": "Revoked for this run. Saving failed: fix the settings file before restarting.",
   "zh-CN": "本次运行已撤销，但保存失败。重启前请修复设置文件。",
   "ja-JP": "今回の実行では取消済み。保存失敗。再起動前に設定ファイルを修正。",
   "es-ES": "Revocado en esta ejecución. Falló guardar: corrige ajustes antes de reiniciar.",
   "pt-BR": "Revogado nesta execução. Falhou ao salvar: corrija configurações antes de reiniciar."
  },
  "key.saved": {
   "de-DE": "{provider}-API-Schlüssel verschlüsselt im Windows-Benutzerprofil gespeichert.",
   "en-GB": "{provider} API key encrypted in the Windows profile.",
   "zh-CN": "{provider} API 密钥已加密保存在 Windows 配置中。",
   "ja-JP": "{provider} APIキーをWindowsプロファイルに暗号化保存。",
   "es-ES": "Clave API {provider} cifrada en el perfil Windows.",
   "pt-BR": "Chave API {provider} criptografada no perfil Windows."
  },
  "key.deleted": {
   "de-DE": "{provider}-API-Schlüssel gelöscht.",
   "en-GB": "{provider} API key deleted.",
   "zh-CN": "已删除 {provider} API 密钥。",
   "ja-JP": "{provider} APIキーを削除。",
   "es-ES": "Clave API {provider} eliminada.",
   "pt-BR": "Chave API {provider} excluída."
  },
  "key.volatile": {
   "de-DE": "Verschlüsselung nicht verfügbar: Schlüssel gilt nur bis zum Beenden.",
   "en-GB": "Encryption unavailable: key is kept only until exit.",
   "zh-CN": "加密不可用：密钥仅保留到退出。",
   "ja-JP": "暗号化不可：キーは終了までのみ保持。",
   "es-ES": "Cifrado no disponible: clave solo hasta salir.",
   "pt-BR": "Criptografia indisponível: chave só até sair."
  },
  "settings.changed": {
   "de-DE": "{feature}: {state}. Gilt ab dem nächsten Gespräch.",
   "en-GB": "{feature}: {state}. Applies to the next conversation.",
   "zh-CN": "{feature}：{state}。下次会话生效。",
   "ja-JP": "{feature}：{state}。次の会話で適用。",
   "es-ES": "{feature}: {state}. Próxima conversación.",
   "pt-BR": "{feature}: {state}. Próxima conversa."
  },
  "feature.memory": {
   "de-DE": "Gedächtnis",
   "en-GB": "Memory",
   "zh-CN": "记忆",
   "ja-JP": "メモリー",
   "es-ES": "Memoria",
   "pt-BR": "Memória"
  },
  "feature.pc": {
   "de-DE": "PC-Assistent",
   "en-GB": "PC assistant",
   "zh-CN": "电脑助手",
   "ja-JP": "PCアシスタント",
   "es-ES": "Asistente del PC",
   "pt-BR": "Assistente do PC"
  },
  "feature.alerts": {
   "de-DE": "PC-Warnungen",
   "en-GB": "PC alerts",
   "zh-CN": "电脑警告",
   "ja-JP": "PC警告",
   "es-ES": "Avisos del PC",
   "pt-BR": "Avisos do PC"
  },
  "feature.web": {
   "de-DE": "Websuche",
   "en-GB": "Web search",
   "zh-CN": "网页搜索",
   "ja-JP": "ウェブ検索",
   "es-ES": "Búsqueda web",
   "pt-BR": "Busca web"
  },
  "feature.browser": {
   "de-DE": "Webseiten in Chrome öffnen",
   "en-GB": "Open websites in Chrome",
   "zh-CN": "在 Chrome 打开网页",
   "ja-JP": "Chromeでサイトを開く",
   "es-ES": "Abrir sitios en Chrome",
   "pt-BR": "Abrir sites no Chrome"
  },
  "state.on": {
   "de-DE": "aktiviert",
   "en-GB": "enabled",
   "zh-CN": "启用",
   "ja-JP": "有効",
   "es-ES": "activado",
   "pt-BR": "ativado"
  },
  "state.off": {
   "de-DE": "deaktiviert",
   "en-GB": "disabled",
   "zh-CN": "关闭",
   "ja-JP": "無効",
   "es-ES": "desactivado",
   "pt-BR": "desativado"
  },
  "voice.next": {
   "de-DE": "Neue Live-Stimme gilt ab dem nächsten Gespräch.",
   "en-GB": "New Live voice applies to the next conversation.",
   "zh-CN": "新声音下次会话生效。",
   "ja-JP": "新ライブ音声は次の会話で適用。",
   "es-ES": "Nueva voz en la próxima conversación.",
   "pt-BR": "Nova voz na próxima conversa."
  },
  "style.next": {
   "de-DE": "Neuer Sprechstil gilt ab dem nächsten Gespräch.",
   "en-GB": "New speaking style applies to the next conversation.",
   "zh-CN": "新说话风格下次会话生效。",
   "ja-JP": "新話し方は次の会話で適用。",
   "es-ES": "Nuevo estilo en la próxima conversación.",
   "pt-BR": "Novo estilo na próxima conversa."
  },
  "filter.next": {
   "de-DE": "{name}-Stimmfilter ab nächstem Gespräch: {value}",
   "en-GB": "{name} voice filter next conversation: {value}",
   "zh-CN": "{name} 声音滤镜下次生效：{value}",
   "ja-JP": "{name}音声フィルターは次の会話：{value}",
   "es-ES": "Filtro de {name} en próxima conversación: {value}",
   "pt-BR": "Filtro de {name} na próxima conversa: {value}"
  },
  "character.changed": {
   "de-DE": "Aktiv: {name}. Stimme und Persönlichkeit gelten ab dem nächsten Gespräch.",
   "en-GB": "Active: {name}. Voice and personality apply next conversation.",
   "zh-CN": "当前：{name}。声音和个性下次会话生效。",
   "ja-JP": "使用中：{name}。音声と個性は次の会話で適用。",
   "es-ES": "Activo: {name}. Voz y personalidad en próxima conversación.",
   "pt-BR": "Ativo: {name}. Voz e personalidade na próxima conversa."
  },
  "intro.kelly": {
   "de-DE": "Kelly: Deine charmante virtuelle Assistentin. Freundlich, elegant und immer auf Abruf.",
   "en-GB": "Kelly: your charming assistant, friendly, elegant and ready to help.",
   "zh-CN": "Kelly：迷人的虚拟助手，友好、优雅，随时提供帮助。",
   "ja-JP": "Kelly：親しみやすく優雅で、いつでも頼れるアシスタント。",
   "es-ES": "Kelly: tu asistente encantadora, amable, elegante y disponible.",
   "pt-BR": "Kelly: sua assistente encantadora, amigável, elegante e disponível."
  },
  "intro.james": {
   "de-DE": "James: Ein kultivierter englischer Butler-Roboter. Diskret, charmant und stets zu Diensten.",
   "en-GB": "James: a cultured British butler robot, discreet and always at your service.",
   "zh-CN": "James：有教养的英式管家机器人，谨慎、迷人，随时服务。",
   "ja-JP": "James：洗練された英国執事ロボット。控えめで、いつでもお役に。",
   "es-ES": "James: mayordomo británico robótico, discreto y siempre a tu servicio.",
   "pt-BR": "James: mordomo britânico robótico, discreto e sempre às ordens."
  },
  "budget.progress": {
   "de-DE": "Monat {spent} von {limit} ({ratio} %).",
   "en-GB": "Month {spent} of {limit} ({ratio}%).",
   "zh-CN": "本月 {spent} / {limit}（{ratio}%）。",
   "ja-JP": "今月 {spent} / {limit}（{ratio}%）。",
   "es-ES": "Mes {spent} de {limit} ({ratio}%).",
   "pt-BR": "Mês {spent} de {limit} ({ratio}%)."
  },
  "budget.warning": {
   "de-DE": "Budgetwarnung: {values} % erreicht.",
   "en-GB": "Budget warning: {values}% reached.",
   "zh-CN": "预算警告：已达 {values}%。",
   "ja-JP": "予算警告：{values}%に到達。",
   "es-ES": "Aviso presupuesto: {values}% alcanzado.",
   "pt-BR": "Aviso de orçamento: {values}% atingido."
  },
  "app.notepad": {
   "de-DE": "Editor",
   "en-GB": "Notepad",
   "zh-CN": "记事本",
   "ja-JP": "メモ帳",
   "es-ES": "Bloc de notas",
   "pt-BR": "Bloco de Notas"
  },
  "wake.off": {
   "de-DE": "Codewort-Erkennung aus. Raster und Live-Gespräch steuern ihr Mikrofon separat.",
   "en-GB": "Wakeword recognition off. Grid and Live microphone use is controlled separately.",
   "zh-CN": "唤醒词识别已关闭。网格和 Live 麦克风分别控制。",
   "ja-JP": "ウェイクワード認識は停止中。グリッドとLiveのマイクは別に制御されます。",
   "es-ES": "Activación por nombre apagada. El micrófono de cuadrícula y Live se controla por separado.",
   "pt-BR": "Ativação por nome desligada. O microfone de grade e Live é controlado separadamente."
  },
  "wake.sleep": {
   "de-DE": "Schlafmodus: Codewort und Mikrofon aus.",
   "en-GB": "Sleep: wakeword and microphone off.",
   "zh-CN": "睡眠：唤醒词和麦克风关闭。",
   "ja-JP": "スリープ：ウェイクワードとマイク停止。",
   "es-ES": "Reposo: activación y micrófono apagados.",
   "pt-BR": "Dormir: ativação e microfone desligados."
  },
  "wake.grid": {
   "de-DE": "Koordinatenmodus: lokale Befehle aktiv; OpenAI-Codewort verfügbar, wenn eingeschaltet.",
   "en-GB": "Coordinate mode: local commands active; OpenAI wakeup available if enabled.",
   "zh-CN": "坐标模式：本地命令有效；启用后可唤醒 OpenAI。",
   "ja-JP": "座標モード：ローカル命令有効。設定が有効ならOpenAIを呼び出せます。",
   "es-ES": "Modo coordenadas: comandos locales; activación OpenAI si está habilitada.",
   "pt-BR": "Modo coordenadas: comandos locais; ativação OpenAI se habilitada."
  },
  "wake.live": {
   "de-DE": "Live-Gespräch läuft. Codewort-Erkennung pausiert.",
   "en-GB": "Live conversation active. Local wakeword paused.",
   "zh-CN": "实时会话进行中，本地唤醒暂停。",
   "ja-JP": "ライブ会話中。ローカルウェイクワード停止。",
   "es-ES": "Live activo. Activación local pausada.",
   "pt-BR": "Live ativo. Ativação local pausada."
  },
  "wake.starting": {
   "de-DE": "Starte lokale Codewort-Erkennung …",
   "en-GB": "Starting local wakeword recognition…",
   "zh-CN": "正在启动本地唤醒识别……",
   "ja-JP": "ローカルウェイクワード認識を開始中…",
   "es-ES": "Iniciando activación local…",
   "pt-BR": "Iniciando ativação local…"
  },
  "wake.connecting": {
   "de-DE": "Codewort erkannt – Live-Verbindung wird aufgebaut …",
   "en-GB": "Wakeword detected; connecting Live…",
   "zh-CN": "检测到唤醒词，正在连接实时会话……",
   "ja-JP": "ウェイクワード検出。ライブ接続中…",
   "es-ES": "Activación detectada; conectando Live…",
   "pt-BR": "Ativação detectada; conectando Live…"
  },
  "wake.testPassed": {
   "de-DE": "✅ Test bestanden! „{name}“ wurde lokal erkannt. Keine API-Kosten.",
   "en-GB": "✅ Test passed: “{name}” recognised locally. No API charge.",
   "zh-CN": "✅ 测试通过：本地识别“{name}”，无 API 费。",
   "ja-JP": "✅ テスト成功：「{name}」をローカル認識。API料金なし。",
   "es-ES": "✅ Prueba correcta: «{name}» reconocido localmente. Sin cargo API.",
   "pt-BR": "✅ Teste passou: “{name}” reconhecido localmente. Sem custo de API."
  },
  "wake.testPrompt": {
   "de-DE": "Sage innerhalb von 15 Sekunden „{name}“. Nur lokaler Test, keine API-Kosten.",
   "en-GB": "Say “{name}” within 15 seconds. Local test, no API charges.",
   "zh-CN": "15 秒内说“{name}”。仅本地测试，无 API 费。",
   "ja-JP": "15秒以内に「{name}」。ローカルテスト、API料金なし。",
   "es-ES": "Di «{name}» en 15 segundos. Prueba local sin coste API.",
   "pt-BR": "Diga “{name}” em 15 segundos. Teste local sem custo de API."
  },
  "wake.testFailed": {
   "de-DE": "„{name}“ nicht erkannt. Mikrofon, Erkennungssprache und Empfindlichkeit prüfen.",
   "en-GB": "“{name}” not recognised. Check microphone, recognizer language and sensitivity.",
   "zh-CN": "未识别“{name}”。检查麦克风、识别语言和灵敏度。",
   "ja-JP": "「{name}」未認識。マイク・認識言語・感度を確認。",
   "es-ES": "«{name}» no reconocido. Revisa micrófono, idioma y sensibilidad.",
   "pt-BR": "“{name}” não reconhecido. Verifique microfone, idioma e sensibilidade."
  },
  "wake.enableFirst": {
   "de-DE": "Erst das lokale Wakeword für {name} aktivieren.",
   "en-GB": "Enable the local wakeword for {name} first.",
   "zh-CN": "请先启用 {name} 的本地唤醒词。",
   "ja-JP": "先に{name}のローカルウェイクワードを有効化。",
   "es-ES": "Activa primero la palabra de {name}.",
   "pt-BR": "Ative primeiro a palavra de {name}."
  },
  "wake.endGrid": {
   "de-DE": "Erst Koordinatennetz beenden, dann Codewort testen.",
   "en-GB": "Exit the grid before the wakeword test.",
   "zh-CN": "唤醒测试前请先关网格。",
   "ja-JP": "テスト前にグリッドを終了。",
   "es-ES": "Cierra la cuadrícula antes de probar activación.",
   "pt-BR": "Encerre a grade antes do teste de ativação."
  },
  "wake.endLive": {
   "de-DE": "Erst Live-Gespräch beenden, dann Codewort testen.",
   "en-GB": "End Live before testing the wakeword.",
   "zh-CN": "唤醒测试前请先结束实时会话。",
   "ja-JP": "テスト前にライブを終了。",
   "es-ES": "Termina Live antes de probar activación.",
   "pt-BR": "Encerre Live antes do teste de ativação."
  },
  "live.closed": {
   "de-DE": "Beendet. Mikrofon aus.",
   "en-GB": "Ended. Microphone off.",
   "zh-CN": "已结束，麦克风关闭。",
   "ja-JP": "終了。マイクオフ。",
   "es-ES": "Terminado. Micrófono apagado.",
   "pt-BR": "Encerrado. Microfone desligado."
  },
  "live.connected": {
   "de-DE": "Verbunden – Mikrofon aktiv. Einfach sprechen.",
   "en-GB": "Connected – microphone active. You can speak.",
   "zh-CN": "已连接，麦克风启用，可以说话。",
   "ja-JP": "接続済み。マイク有効。話しかけてください。",
   "es-ES": "Conectado, micrófono activo. Puedes hablar.",
   "pt-BR": "Conectado, microfone ativo. Pode falar."
  },
  "live.ready": {
   "de-DE": "Bereit – du kannst erneut fragen.",
   "en-GB": "Ready – you can ask again.",
   "zh-CN": "就绪，可以继续提问。",
   "ja-JP": "準備完了。続けて質問できます。",
   "es-ES": "Listo, puedes preguntar otra vez.",
   "pt-BR": "Pronto, pode perguntar novamente."
  },
  "live.geminiReady": {
   "de-DE": "🟢 Gemini Live: Mikrofon aktiv. Stimme weicht von OpenAI ab.",
   "en-GB": "🟢 Gemini Live: microphone active. Voice differs from OpenAI.",
   "zh-CN": "🟢 Gemini 实时：麦克风已启用，声音与 OpenAI 不同。",
   "ja-JP": "🟢 Gemini Live：マイク有効。OpenAIとは異なる音声。",
   "es-ES": "🟢 Gemini Live: micrófono activo. Voz distinta de OpenAI.",
   "pt-BR": "🟢 Gemini Live: microfone ativo. Voz diferente do OpenAI."
  },
  "live.geminiConnecting": {
   "de-DE": "Gemini-Verbindung wird aufgebaut. Stimmen unterscheiden sich von OpenAI.",
   "en-GB": "Connecting to Gemini. Voices differ from OpenAI.",
   "zh-CN": "正在连接 Gemini，声音与 OpenAI 不同。",
   "ja-JP": "Geminiに接続中。OpenAIとは音声が異なります。",
   "es-ES": "Conectando a Gemini. Voces distintas de OpenAI.",
   "pt-BR": "Conectando ao Gemini. Vozes diferentes do OpenAI."
  },
  "live.idle": {
   "de-DE": "45 Sekunden Gesprächspause – Mikrofon aus. Sag „{name}“, um mich wieder zu rufen.",
   "en-GB": "45 seconds idle – microphone off. Start Live again, or say “{name}” if wakewords are enabled.",
   "zh-CN": "空闲 45 秒，麦克风关闭。可重启实时会话，或在启用唤醒时说“{name}”。",
   "ja-JP": "無活動45秒でマイクオフ。ライブを再開するか、有効なら「{name}」で呼びかけ。",
   "es-ES": "45 s inactivos, micrófono apagado. Reinicia Live o di «{name}» si activación está habilitada.",
   "pt-BR": "45 s inativos, microfone desligado. Reinicie Live ou diga “{name}” se a ativação estiver habilitada."
  },
  "live.geminiEnd": {
   "de-DE": "Gemini Live beendet (Code {code}){reason}. Mikrofon aus.",
   "en-GB": "Gemini Live ended (code {code}){reason}. Microphone off.",
   "zh-CN": "Gemini 实时结束（代码 {code}）{reason}。麦克风关闭。",
   "ja-JP": "Gemini Live終了（コード{code}）{reason}。マイクオフ。",
   "es-ES": "Gemini Live terminó (código {code}){reason}. Micrófono apagado.",
   "pt-BR": "Gemini Live encerrou (código {code}){reason}. Microfone desligado."
  },
  "filter.jeffreyPaused": {
   "de-DE": "Jeffrey: Computerfilter pausiert – Originalstimme aktiv.",
   "en-GB": "Jeffrey: filter paused, original voice active.",
   "zh-CN": "Jeffrey：滤镜已暂停，使用原声。",
   "ja-JP": "Jeffrey：フィルター停止、原音有効。",
   "es-ES": "Jeffrey: filtro pausado, voz original activa.",
   "pt-BR": "Jeffrey: filtro pausado, voz original ativa."
  },
  "filter.jeffreyPitch": {
   "de-DE": "Jeffrey: hellere, metallische Computerstimme aktiv.",
   "en-GB": "Jeffrey: brighter metallic computer voice active.",
   "zh-CN": "Jeffrey：明亮金属电脑声音已启用。",
   "ja-JP": "Jeffrey：明るい金属的な音声が有効。",
   "es-ES": "Jeffrey: voz metálica más aguda activa.",
   "pt-BR": "Jeffrey: voz metálica mais aguda ativa."
  },
  "filter.jeffreyMetal": {
   "de-DE": "Jeffrey: blecherner Klangfilter aktiv.",
   "en-GB": "Jeffrey: metallic filter active.",
   "zh-CN": "Jeffrey：金属滤镜已启用。",
   "ja-JP": "Jeffrey：金属フィルター有効。",
   "es-ES": "Jeffrey: filtro metálico activo.",
   "pt-BR": "Jeffrey: filtro metálico ativo."
  },
  "filter.broncoPaused": {
   "de-DE": "Bronco: Filter pausiert – Originalstimme aktiv.",
   "en-GB": "Bronco: filter paused, original voice active.",
   "zh-CN": "Bronco：滤镜已暂停，使用原声。",
   "ja-JP": "Bronco：フィルター停止、原音有効。",
   "es-ES": "Bronco: filtro pausado, voz original activa.",
   "pt-BR": "Bronco: filtro pausado, voz original ativa."
  },
  "filter.broncoPitch": {
   "de-DE": "Bronco: tiefe, raue Schrottplatz-Stimme aktiv.",
   "en-GB": "Bronco: deep rough scrapyard voice active.",
   "zh-CN": "Bronco：低沉粗糙的废料场声音已启用。",
   "ja-JP": "Bronco：低く荒いスクラップ音声が有効。",
   "es-ES": "Bronco: voz grave y áspera activa.",
   "pt-BR": "Bronco: voz grave e áspera ativa."
  },
  "filter.broncoRough": {
   "de-DE": "Bronco: rauer Filter aktiv.",
   "en-GB": "Bronco: rough filter active.",
   "zh-CN": "Bronco：粗糙滤镜已启用。",
   "ja-JP": "Bronco：荒いフィルター有効。",
   "es-ES": "Bronco: filtro áspero activo.",
   "pt-BR": "Bronco: filtro áspero ativo."
  },
  "wake.ready": {
   "de-DE": "🟢 Lokal bereit ({locale}): „{name}“. Reagiere auf einen einzelnen Ruf.",
   "en-GB": "🟢 Local recognizer ready ({locale}): “{name}”.",
   "zh-CN": "🟢 本地识别就绪（{locale}）：“{name}”。",
   "ja-JP": "🟢 ローカル認識準備完了（{locale}）：「{name}」。",
   "es-ES": "🟢 Reconocimiento local listo ({locale}): «{name}».",
   "pt-BR": "🟢 Reconhecimento local pronto ({locale}): “{name}”."
  },
  "wake.low": {
   "de-DE": "🟡 Namen eventuell gehört, aber nicht sicher genug ({confidence} %). Wähle bei Bedarf eine höhere Empfindlichkeit.",
   "en-GB": "🟡 Possible name, confidence too low ({confidence}%). Try higher sensitivity.",
   "zh-CN": "🟡 可能听到名字，但置信度过低（{confidence}%）。可提高灵敏度。",
   "ja-JP": "🟡 名前の可能性、確信度不足（{confidence}%）。感度を上げてみてください。",
   "es-ES": "🟡 Posible nombre, confianza baja ({confidence}%). Prueba mayor sensibilidad.",
   "pt-BR": "🟡 Possível nome, confiança baixa ({confidence}%). Tente maior sensibilidade."
  },
  "pc.status": {
   "de-DE": "CPU-Auslastung ungefähr {cpu} Prozent. Arbeitsspeicher {memory} Prozent belegt, {used} von {total} Gigabyte. Windows läuft seit ungefähr {hours} Stunden.",
   "en-GB": "CPU about {cpu}%. RAM {memory}%, {used}/{total} GB. Windows uptime about {hours} hours.",
   "zh-CN": "CPU 约 {cpu}%。内存 {memory}%，{used}/{total} GB。Windows 已运行约 {hours} 小时。",
   "ja-JP": "CPU約{cpu}%。メモリー{memory}%、{used}/{total}GB。Windows稼働約{hours}時間。",
   "es-ES": "CPU aprox. {cpu}%. RAM {memory}%, {used}/{total} GB. Windows lleva {hours} horas.",
   "pt-BR": "CPU aprox. {cpu}%. RAM {memory}%, {used}/{total} GB. Windows ativo há {hours} horas."
  },
  "selection.error": {
   "de-DE": "Technischer Fehler beim Auslesen der Windows-Textauswahl. {code}",
   "en-GB": "Technical error reading Windows selection. {code}",
   "zh-CN": "读取 Windows 文本选择时发生技术错误。{code}",
   "ja-JP": "Windows選択テキストの読み取りエラー。{code}",
   "es-ES": "Error técnico leyendo selección Windows. {code}",
   "pt-BR": "Erro técnico ao ler seleção Windows. {code}"
  },
  "selection.unsupported": {
   "de-DE": "Diese Anwendung stellt keine geeignete Textauswahl über Windows UI Automation bereit.",
   "en-GB": "This app does not expose a suitable selection through Windows UI Automation.",
   "zh-CN": "此应用未通过 Windows UI Automation 提供合适文本选择。",
   "ja-JP": "このアプリはWindows UI Automationで適切な選択を公開していません。",
   "es-ES": "La app no expone selección compatible por UI Automation.",
   "pt-BR": "O app não expõe seleção compatível pela UI Automation."
  },
  "selection.empty": {
   "de-DE": "Ich sehe gerade keinen markierten Text. Soll ich stattdessen deinen Bildschirm untersuchen?",
   "en-GB": "No selected text found. Would you like a screen request instead?",
   "zh-CN": "未找到选中文本。是否改为请求屏幕分析？",
   "ja-JP": "選択テキストがありません。代わりに画面を確認しますか？",
   "es-ES": "No hay texto seleccionado. ¿Prefieres solicitar análisis de pantalla?",
   "pt-BR": "Nenhum texto selecionado. Prefere solicitar análise da tela?"
  },
  "selection.protected": {
   "de-DE": "Die Textauswahl ist geschützt und wird nicht ausgelesen.",
   "en-GB": "Selection is protected and will not be read.",
   "zh-CN": "文本选择受保护，不会读取。",
   "ja-JP": "保護された選択は読み取りません。",
   "es-ES": "Selección protegida; no se leerá.",
   "pt-BR": "Seleção protegida; não será lida."
  },
  "selection.ambiguous": {
   "de-DE": "Die Anwendung meldet mehrere Textauswahlen. Bitte markiere den gewünschten Abschnitt erneut.",
   "en-GB": "App reports multiple selections. Select the intended passage again.",
   "zh-CN": "应用报告多个选择，请重新选定目标段落。",
   "ja-JP": "複数の選択を検出。対象部分を再選択してください。",
   "es-ES": "Hay varias selecciones. Selecciona otra vez el fragmento.",
   "pt-BR": "Há várias seleções. Selecione novamente o trecho."
  },
  "selection.tooLong": {
   "de-DE": "Die Textauswahl ist zu lang. Bitte markiere höchstens 24.000 Zeichen.",
   "en-GB": "Selection too long. Select no more than 24,000 characters.",
   "zh-CN": "选择过长，最多 24,000 字符。",
   "ja-JP": "選択が長すぎます。24,000文字以内にしてください。",
   "es-ES": "Selección larga. Máximo 24.000 caracteres.",
   "pt-BR": "Seleção longa. Máximo 24.000 caracteres."
  },
  "selection.noWindow": {
   "de-DE": "Ich finde kein geeignetes Windows-Fenster mit Textauswahl.",
   "en-GB": "No suitable Windows window with selection found.",
   "zh-CN": "未找到带文本选择的合适窗口。",
   "ja-JP": "選択のある適切なウィンドウがありません。",
   "es-ES": "No hay ventana Windows adecuada con selección.",
   "pt-BR": "Nenhuma janela Windows adequada com seleção."
  },
  "selection.readDone": {
   "de-DE": "Markierter Text wurde vorgelesen.",
   "en-GB": "Selected text read aloud.",
   "zh-CN": "已朗读选中文本。",
   "ja-JP": "選択テキストを読み上げました。",
   "es-ES": "Texto seleccionado leído.",
   "pt-BR": "Texto selecionado lido."
  },
  "desktop.target": {
   "de-DE": "Bildschirmaufnahme: Zielmonitor wird ermittelt.",
   "en-GB": "Screenshot: finding the target monitor.",
   "zh-CN": "截图：正在确定目标显示器。",
   "ja-JP": "画面取得：対象モニターを確認中。",
   "es-ES": "Captura: buscando monitor objetivo.",
   "pt-BR": "Captura: localizando monitor alvo."
  },
  "desktop.permission": {
   "de-DE": "Freigabe für diese Bildschirmübertragung wird geprüft.",
   "en-GB": "Checking approval for this screen transfer.",
   "zh-CN": "正在检查本次屏幕传输授权。",
   "ja-JP": "今回の画面送信許可を確認中。",
   "es-ES": "Comprobando permiso de esta transferencia.",
   "pt-BR": "Verificando permissão desta transferência."
  },
  "desktop.capture": {
   "de-DE": "Bildschirmaufnahme: Monitor DISPLAY{number} wird aufgenommen.",
   "en-GB": "Screenshot: capturing monitor DISPLAY{number}.",
   "zh-CN": "截图：正在获取 DISPLAY{number}。",
   "ja-JP": "画面取得：DISPLAY{number}を取得中。",
   "es-ES": "Captura: monitor DISPLAY{number}.",
   "pt-BR": "Captura: monitor DISPLAY{number}."
  },
  "desktop.primary": {
   "de-DE": "Bildschirmaufnahme: Der primäre Bildschirm wird aufgenommen.",
   "en-GB": "Screenshot: capturing the primary screen.",
   "zh-CN": "截图：正在获取主屏幕。",
   "ja-JP": "画面取得：メイン画面を取得中。",
   "es-ES": "Captura: pantalla principal.",
   "pt-BR": "Captura: tela principal."
  },
  "desktop.sending": {
   "de-DE": "Bildanalyse: Aufnahme erstellt. Übertragung an OpenAI wird gestartet.",
   "en-GB": "Image captured. Starting transfer to OpenAI.",
   "zh-CN": "图像已获取，正在发送到 OpenAI。",
   "ja-JP": "画像取得完了。OpenAIへ送信中。",
   "es-ES": "Imagen capturada. Enviando a OpenAI.",
   "pt-BR": "Imagem capturada. Enviando ao OpenAI."
  },
  "desktop.response": {
   "de-DE": "Bildanalyse: Antwort von OpenAI wird ausgewertet.",
   "en-GB": "Evaluating OpenAI's image-analysis response.",
   "zh-CN": "正在处理 OpenAI 图像分析回复。",
   "ja-JP": "OpenAI画像分析の応答を処理中。",
   "es-ES": "Procesando análisis de OpenAI.",
   "pt-BR": "Processando análise do OpenAI."
  },
  "desktop.done": {
   "de-DE": "Bildanalyse abgeschlossen. Antwort ist bereit.",
   "en-GB": "Image analysis complete. Reply ready.",
   "zh-CN": "图像分析完成，回复就绪。",
   "ja-JP": "画像分析完了。返答の準備完了。",
   "es-ES": "Análisis completo. Respuesta lista.",
   "pt-BR": "Análise concluída. Resposta pronta."
  },
  "desktop.command": {
   "de-DE": "Desktop-Befehl erkannt.",
   "en-GB": "Desktop request recognised.",
   "zh-CN": "已识别桌面请求。",
   "ja-JP": "デスクトップ要求を認識。",
   "es-ES": "Petición de escritorio reconocida.",
   "pt-BR": "Pedido de desktop reconhecido."
  },
  "desktop.readout": {
   "de-DE": "Desktop-Sprachantwort angefordert.",
   "en-GB": "Desktop speech reply requested.",
   "zh-CN": "已请求桌面语音回复。",
   "ja-JP": "デスクトップ音声返答を要求。",
   "es-ES": "Respuesta hablada solicitada.",
   "pt-BR": "Resposta falada solicitada."
  },
  "privacy.status": {
   "de-DE": "{kind}: {state}",
   "en-GB": "{kind}: {state}",
   "zh-CN": "{kind}：{state}",
   "ja-JP": "{kind}：{state}",
   "es-ES": "{kind}: {state}",
   "pt-BR": "{kind}: {state}"
  },
  "privacy.screen": {
   "de-DE": "Bildschirm",
   "en-GB": "Screen",
   "zh-CN": "屏幕",
   "ja-JP": "画面",
   "es-ES": "Pantalla",
   "pt-BR": "Tela"
  },
  "privacy.text": {
   "de-DE": "Markierter Text",
   "en-GB": "Selected text",
   "zh-CN": "选中文本",
   "ja-JP": "選択テキスト",
   "es-ES": "Texto seleccionado",
   "pt-BR": "Texto selecionado"
  },
  "privacy.allowed": {
   "de-DE": "Dauerhaft für OpenAI erlaubt.",
   "en-GB": "Durably allowed for OpenAI.",
   "zh-CN": "已持久授权 OpenAI。",
   "ja-JP": "OpenAIへの永続許可あり。",
   "es-ES": "Permiso permanente para OpenAI.",
   "pt-BR": "Permissão permanente para OpenAI."
  },
  "privacy.none": {
   "de-DE": "Keine dauerhafte Cloud-Freigabe.",
   "en-GB": "No durable cloud approval.",
   "zh-CN": "无持久云授权。",
   "ja-JP": "永続クラウド許可なし。",
   "es-ES": "Sin permiso cloud permanente.",
   "pt-BR": "Sem permissão cloud permanente."
  },
  "local.modelsFound": {
   "de-DE": "Gefunden: {models}",
   "en-GB": "Found: {models}",
   "zh-CN": "已找到：{models}",
   "ja-JP": "検出：{models}",
   "es-ES": "Encontrados: {models}",
   "pt-BR": "Encontrados: {models}"
  },
  "local.modelsEmpty": {
   "de-DE": "Keine Modelle gemeldet.",
   "en-GB": "No models reported.",
   "zh-CN": "未报告模型。",
   "ja-JP": "モデルの報告なし。",
   "es-ES": "Sin modelos informados.",
   "pt-BR": "Nenhum modelo informado."
  },
  "model.unselected": {
   "de-DE": "nicht gewählt",
   "en-GB": "not selected",
   "zh-CN": "未选择",
   "ja-JP": "未選択",
   "es-ES": "sin elegir",
   "pt-BR": "não selecionado"
  },
  "keyboard.alternative": {
   "de-DE": "Hinweis: Textfeld oder Win + H verwenden.",
   "en-GB": "Use the text field or Windows dictation (Win + H).",
   "zh-CN": "请使用文本框或 Windows 听写（Win + H）。",
   "ja-JP": "入力欄かWindows音声入力（Win + H）を使用。",
   "es-ES": "Usa texto o dictado Windows (Win + H).",
   "pt-BR": "Use texto ou ditado Windows (Win + H)."
  },
  "memory.saved": {
   "de-DE": "Merksatz lokal gespeichert. Gilt für das nächste KI-Gespräch.",
   "en-GB": "Note saved locally. Applies to the next AI conversation.",
   "zh-CN": "笔记已本地保存，下次 AI 会话生效。",
   "ja-JP": "メモをローカル保存。次のAI会話で適用。",
   "es-ES": "Nota local guardada. Próxima conversación IA.",
   "pt-BR": "Nota local salva. Próxima conversa IA."
  },
  "memory.deleted": {
   "de-DE": "Merksatz gelöscht.",
   "en-GB": "Note deleted.",
   "zh-CN": "笔记已删除。",
   "ja-JP": "メモを削除。",
   "es-ES": "Nota eliminada.",
   "pt-BR": "Nota excluída."
  },
  "memory.cleared": {
   "de-DE": "Alle Merksätze gelöscht.",
   "en-GB": "All notes deleted.",
   "zh-CN": "所有笔记已删除。",
   "ja-JP": "全メモを削除。",
   "es-ES": "Todas las notas eliminadas.",
   "pt-BR": "Todas as notas excluídas."
  },
  "pc.disabled": {
   "de-DE": "PC-Funktionen sind ausgeschaltet.",
   "en-GB": "PC features are disabled.",
   "zh-CN": "电脑功能已关闭。",
   "ja-JP": "PC機能は無効。",
   "es-ES": "Funciones PC desactivadas.",
   "pt-BR": "Funções do PC desativadas."
  },
  "wake.offShort": {
   "de-DE": "Codewort ausgeschaltet.",
   "en-GB": "Wakeword disabled.",
   "zh-CN": "唤醒词已关闭。",
   "ja-JP": "ウェイクワード無効。",
   "es-ES": "Activación desactivada.",
   "pt-BR": "Ativação desligada."
  },
  "wake.sleepShort": {
   "de-DE": "Im Schlafmodus ist das Mikrofon ausgeschaltet.",
   "en-GB": "Microphone is off in Sleep mode.",
   "zh-CN": "睡眠模式下麦克风关闭。",
   "ja-JP": "スリープ中はマイクオフ。",
   "es-ES": "Micrófono apagado en Reposo.",
   "pt-BR": "Microfone desligado ao Dormir."
  },
  "wake.restart": {
   "de-DE": "Erkenner nicht bereit. Den Codewort-Schalter aus- und wieder einschalten; danach Fehlermeldung prüfen.",
   "en-GB": "Recognizer not ready. Toggle wakewords off/on and check the error.",
   "zh-CN": "识别器未就绪。关闭并重新启用唤醒词，检查错误。",
   "ja-JP": "認識器未準備。ウェイクワードを再設定しエラーを確認。",
   "es-ES": "Reconocedor no listo. Desactiva/activa y revisa error.",
   "pt-BR": "Reconhecedor não pronto. Desligue/ligue e confira erro."
  },
  "wake.miss": {
   "de-DE": "Mikrofon hört Sprache, aber nicht sicher „{name}“. Erkennungssprache und Empfindlichkeit prüfen.",
   "en-GB": "Speech heard, but “{name}” uncertain. Check language and sensitivity.",
   "zh-CN": "听到语音，但不能确认“{name}”。检查语言和灵敏度。",
   "ja-JP": "音声を検出しましたが「{name}」は不確か。言語と感度を確認。",
   "es-ES": "Se oye voz, pero «{name}» no es seguro. Revisa idioma y sensibilidad.",
   "pt-BR": "Há voz, mas “{name}” não é certo. Verifique idioma e sensibilidade."
  },
  "character.hidden": {
   "de-DE": "Unsichtbar · {name} wartet auf seinen Auftritt",
   "en-GB": "Hidden · {name} is ready to appear",
   "zh-CN": "隐藏 · {name} 等待出场",
   "ja-JP": "非表示 · {name}は登場待機",
   "es-ES": "Oculto · {name} espera para aparecer",
   "pt-BR": "Oculto · {name} aguarda para aparecer"
  },
  "provider.auto": {
   "de-DE": "Automatisch: lokale Aufgaben zuerst; kein kostenpflichtiger Gemini-/OpenAI-Audioanbieter ohne deine Freigabe.",
   "en-GB": "Automatic: local tasks first; no paid Gemini/OpenAI audio without permission.",
   "zh-CN": "自动：优先本地；未授权不会启用付费 Gemini/OpenAI 音频。",
   "ja-JP": "自動：ローカル優先。許可なしに有料Gemini/OpenAI音声を使いません。",
   "es-ES": "Automático: primero local; sin audio Gemini/OpenAI de pago sin permiso.",
   "pt-BR": "Automático: local primeiro; sem áudio Gemini/OpenAI pago sem permissão."
  },
  "desktop.clarify": {
   "de-DE": "Meinst du markierten Text oder den Bildschirm? Bitte ausdrücklich auswählen. Keine Aufnahme gestartet.",
   "en-GB": "Do you mean selected text or the screen? Please specify. No capture started.",
   "zh-CN": "你指选中文本还是屏幕？请明确选择。未启动截图。",
   "ja-JP": "選択テキストか画面ですか？明示してください。取得は未開始。",
   "es-ES": "¿Texto seleccionado o pantalla? Especifica. No se inició captura.",
   "pt-BR": "Texto selecionado ou tela? Especifique. Nenhuma captura iniciada."
  },
  "speech.busy": {
   "de-DE": "Die Freigabe des bisherigen Mikrofonzugriffs wurde nicht bestätigt. Textfeld und Schaltflächen verwenden; bei Bedarf App neu starten.",
   "en-GB": "The previous microphone release was not confirmed. Use text and buttons; restart the app if needed.",
   "zh-CN": "无法确认原麦克风已释放。请使用文本和按钮，必要时重启应用。",
   "ja-JP": "既存マイクの解放を確認できません。入力欄とボタンを使用し、必要ならアプリを再起動してください。",
   "es-ES": "No se confirmó la liberación del micrófono anterior. Usa texto y botones; reinicia la app si hace falta.",
   "pt-BR": "A liberação do microfone anterior não foi confirmada. Use texto e botões; reinicie o aplicativo se necessário."
  },
  "speech.failed": {
   "de-DE": "Lokale Spracherkennung nicht verfügbar. Textfeld und Stopp-Schaltfläche bleiben verfügbar.",
   "en-GB": "Local speech recognition is unavailable. Text input and the Stop button remain available.",
   "zh-CN": "本地语音识别不可用。文本输入和停止按钮仍可用。",
   "ja-JP": "ローカル音声認識を利用できません。入力欄と停止ボタンは使用可能です。",
   "es-ES": "Reconocimiento local no disponible. El campo de texto y el botón Detener siguen disponibles.",
   "pt-BR": "Reconhecimento local indisponível. O campo de texto e o botão Parar continuam disponíveis."
  },
  "legacy.m002": {
   "de-DE": "OpenAI Qualität: bewährte Realtime-Stimmen und bestehende lokale Audiofilter.",
   "en-GB": "OpenAI quality: established Realtime voices and local audio filters.",
   "zh-CN": "OpenAI 品质：原有实时声音与本地音频滤镜。",
   "ja-JP": "OpenAI品質：既存ライブ音声とローカルフィルター。",
   "es-ES": "OpenAI calidad: voces Realtime y filtros locales.",
   "pt-BR": "OpenAI qualidade: vozes Realtime e filtros locais."
  },
  "legacy.m003": {
   "de-DE": "Gemini Sparmodus: Live-Audio mit anderen Stimmen; Verfügbarkeit, Datenschutz und Preise hängen von Region und Konto ab.",
   "en-GB": "Gemini economy: different voices; availability, privacy and prices depend on account and region.",
   "zh-CN": "Gemini 节省：不同声音；可用性、隐私和价格因账户、地区而异。",
   "ja-JP": "Gemini節約：異なる音声。利用可否・プライバシー・価格は地域とアカウント次第。",
   "es-ES": "Gemini ahorro: otras voces; disponibilidad, privacidad y precio según cuenta y región.",
   "pt-BR": "Gemini economia: outras vozes; disponibilidade, privacidade e preço conforme conta e região."
  },
  "legacy.m004": {
   "de-DE": "Lokale KI antwortet auf diesem Rechner; keine Cloud-Inferenz. Ein lokaler Modellserver muss verfügbar sein.",
   "en-GB": "Local text inference on your server, no cloud inference or full Realtime audio.",
   "zh-CN": "自己的服务器本地文本推理，无云推理或完整实时音频。",
   "ja-JP": "自分のサーバーでローカルテキスト推論。クラウド推論・完全ライブ音声なし。",
   "es-ES": "Texto local en tu servidor, sin inferencia cloud ni Realtime completo.",
   "pt-BR": "Texto local no seu servidor, sem inferência cloud ou Realtime completo."
  },
  "legacy.m005": {
   "de-DE": "OpenAI-Schlüssel gespeichert",
   "en-GB": "OpenAI key saved",
   "zh-CN": "OpenAI 密钥已保存",
   "ja-JP": "OpenAIキー保存済み",
   "es-ES": "Clave OpenAI guardada",
   "pt-BR": "Chave OpenAI salva"
  },
  "legacy.m006": {
   "de-DE": "Gemini-Schlüssel gespeichert",
   "en-GB": "Gemini key saved",
   "zh-CN": "Gemini 密钥已保存",
   "ja-JP": "Geminiキー保存済み",
   "es-ES": "Clave Gemini guardada",
   "pt-BR": "Chave Gemini salva"
  },
  "legacy.m007": {
   "de-DE": "Vom Anbieter gemeldete Nutzung; lokale Euro-Berechnung, keine Anbieterrechnung.",
   "en-GB": "Provider-reported usage; locally calculated EUR, not an invoice.",
   "zh-CN": "提供商报告用量；本地欧元计算，非账单。",
   "ja-JP": "提供元報告の使用量。EURはローカル計算で請求書ではありません。",
   "es-ES": "Uso informado; euros calculados localmente, no factura.",
   "pt-BR": "Uso informado; euros calculados localmente, não fatura."
  },
  "legacy.m008": {
   "de-DE": "Gemeldete und geschätzte Nutzung gemischt; keine Anbieterrechnung.",
   "en-GB": "Mixed reported and estimated usage; not an invoice.",
   "zh-CN": "报告与估算混合，非账单。",
   "ja-JP": "報告値と推定値の混在。請求書ではありません。",
   "es-ES": "Uso informado y estimado mezclado; no factura.",
   "pt-BR": "Uso informado e estimado misturado; não fatura."
  },
  "legacy.m009": {
   "de-DE": "Rechnerisch geschätzte Nutzung; keine Anbieterrechnung.",
   "en-GB": "Estimated usage; not a provider invoice.",
   "zh-CN": "估算用量，非提供商账单。",
   "ja-JP": "推定使用量。提供元の請求書ではありません。",
   "es-ES": "Uso estimado; no factura del proveedor.",
   "pt-BR": "Uso estimado; não fatura do provedor."
  },
  "legacy.m010": {
   "de-DE": "Noch keine Nutzungsdaten; keine Anbieterrechnung und kein offizieller Rechnungssaldo.",
   "en-GB": "No usage data; not an invoice or official balance.",
   "zh-CN": "无用量数据，非账单或官方余额。",
   "ja-JP": "使用データなし。請求書・公式残高ではありません。",
   "es-ES": "Sin datos de uso; no factura ni saldo oficial.",
   "pt-BR": "Sem dados de uso; não fatura nem saldo oficial."
  },
  "legacy.m011": {
   "de-DE": "Ich schlafe: keine Kommentare und keine Auftritte.",
   "en-GB": "Sleeping: no comments or appearances.",
   "zh-CN": "睡眠中：无评论或显示。",
   "ja-JP": "スリープ中：コメント・登場なし。",
   "es-ES": "En reposo: sin comentarios ni apariciones.",
   "pt-BR": "Dormindo: sem comentários nem aparições."
  },
  "legacy.m013": {
   "de-DE": "Krak: Ein schrulliger grüner Kobold. Ziemlich frech – und trotzdem hilfreich.",
   "en-GB": "Krak: a mischievous green goblin, cheeky but helpful.",
   "zh-CN": "Krak：调皮的绿色小精灵，顽皮但乐于助人。",
   "ja-JP": "Krak：いたずら好きで頼りになる緑のゴブリン。",
   "es-ES": "Krak: duende verde travieso, descarado pero útil.",
   "pt-BR": "Krak: duende verde travesso, atrevido mas útil."
  },
  "legacy.m014": {
   "de-DE": "Bronco: Ein rostiger Mecker-Roboter mit Zigarre. Schlecht gelaunt, aber nützlich.",
   "en-GB": "Bronco: a rusty grumbling robot, moody but useful.",
   "zh-CN": "Bronco：爱抱怨的生锈机器人，脾气差但有用。",
   "ja-JP": "Bronco：さびた不機嫌ロボット。でも役に立ちます。",
   "es-ES": "Bronco: robot oxidado y gruñón, malhumorado pero útil.",
   "pt-BR": "Bronco: robô enferrujado e resmungão, mal-humorado mas útil."
  },
  "legacy.m015": {
   "de-DE": "Ich höre zu",
   "en-GB": "Listening",
   "zh-CN": "正在聆听",
   "ja-JP": "聞き取り中",
   "es-ES": "Escuchando",
   "pt-BR": "Ouvindo"
  },
  "legacy.m016": {
   "de-DE": "Es ist ein Fehler aufgetreten.",
   "en-GB": "An error occurred.",
   "zh-CN": "发生错误。",
   "ja-JP": "エラーが発生しました。",
   "es-ES": "Se produjo un error.",
   "pt-BR": "Ocorreu um erro."
  },
  "legacy.m017": {
   "de-DE": "Dauerhaft für OpenAI erlaubt.",
   "en-GB": "Durably allowed for OpenAI.",
   "zh-CN": "已持久授权 OpenAI。",
   "ja-JP": "OpenAIへの永続許可あり。",
   "es-ES": "Permiso permanente para OpenAI.",
   "pt-BR": "Permissão permanente para OpenAI."
  },
  "legacy.m018": {
   "de-DE": "Noch keine Merksätze gespeichert.",
   "en-GB": "No notes saved yet.",
   "zh-CN": "尚未保存笔记。",
   "ja-JP": "保存メモはありません。",
   "es-ES": "Todavía sin notas guardadas.",
   "pt-BR": "Ainda sem notas salvas."
  },
  "legacy.m019": {
   "de-DE": "Merksatz löschen: ",
   "en-GB": "Delete note: ",
   "zh-CN": "删除笔记：",
   "ja-JP": "メモを削除：",
   "es-ES": "Eliminar nota: ",
   "pt-BR": "Excluir nota: "
  },
  "legacy.m020": {
   "de-DE": "Im Browser nur Vorschau: Die Sprachfunktionen laufen in der Windows-App.",
   "en-GB": "Browser preview only: voice features run in the Windows app.",
   "zh-CN": "仅浏览器预览；语音功能在 Windows 应用运行。",
   "ja-JP": "ブラウザはプレビューのみ。音声はWindowsアプリで動作。",
   "es-ES": "Solo vista previa: voz funciona en la app Windows.",
   "pt-BR": "Só prévia: voz funciona no app Windows."
  },
  "legacy.m021": {
   "de-DE": "Lokaler Server wird geprüft …",
   "en-GB": "Checking local server…",
   "zh-CN": "正在检查本地服务器……",
   "ja-JP": "ローカルサーバー確認中…",
   "es-ES": "Comprobando servidor local…",
   "pt-BR": "Verificando servidor local…"
  },
  "legacy.m022": {
   "de-DE": "Eine kleine Übertragung kommt an …",
   "en-GB": "Connecting the hologram…",
   "zh-CN": "全息角色连接中……",
   "ja-JP": "ホログラム接続中…",
   "es-ES": "Conectando holograma…",
   "pt-BR": "Conectando holograma…"
  },
  "legacy.m023": {
   "de-DE": "Da ist er · Kopf und Hände sind sichtbar",
   "en-GB": "Visible · head and hands",
   "zh-CN": "已显示 · 头和手",
   "ja-JP": "表示中 · 頭と手",
   "es-ES": "Visible · cabeza y manos",
   "pt-BR": "Visível · cabeça e mãos"
  },
  "legacy.m024": {
   "de-DE": "Bis gleich · löst sich im Rauschen auf …",
   "en-GB": "See you · fading out…",
   "zh-CN": "再见 · 淡出中……",
   "ja-JP": "またね · 消えていきます…",
   "es-ES": "Hasta luego · desapareciendo…",
   "pt-BR": "Até logo · desaparecendo…"
  },
  "legacy.m026": {
   "de-DE": "Desktop-Anfrage wird abgebrochen.",
   "en-GB": "Cancelling desktop request.",
   "zh-CN": "正在取消桌面请求。",
   "ja-JP": "デスクトップ要求を取り消し中。",
   "es-ES": "Cancelando solicitud de escritorio.",
   "pt-BR": "Cancelando solicitação de desktop."
  },
  "legacy.m027": {
   "de-DE": "Sprachausgabe gestoppt. Du kannst weiterfragen.",
   "en-GB": "Speech stopped. You can ask another question.",
   "zh-CN": "语音已停止。可以继续提问。",
   "ja-JP": "音声停止。続けて質問できます。",
   "es-ES": "Voz detenida. Puedes preguntar otra vez.",
   "pt-BR": "Voz parada. Pode perguntar novamente."
  },
  "legacy.m029": {
   "de-DE": "Die Desktop-Sprachantwort konnte nicht gesendet werden. Bitte erneut fragen.",
   "en-GB": "Desktop readout could not be sent. Please try again.",
   "zh-CN": "无法发送桌面朗读，请重试。",
   "ja-JP": "デスクトップ読み上げを送信できません。再試行してください。",
   "es-ES": "No se pudo enviar lectura del escritorio. Reintenta.",
   "pt-BR": "Não foi possível enviar a leitura do desktop. Tente novamente."
  },
  "legacy.m030": {
   "de-DE": "Bildanalyse nicht verfügbar.",
   "en-GB": "Image analysis unavailable.",
   "zh-CN": "图像分析不可用。",
   "ja-JP": "画像分析は利用できません。",
   "es-ES": "Análisis de imagen no disponible.",
   "pt-BR": "Análise de imagem indisponível."
  },
  "legacy.m031": {
   "de-DE": "Desktop-Anfrage abgebrochen. Du kannst weiterfragen.",
   "en-GB": "Desktop request cancelled. You can ask again.",
   "zh-CN": "桌面请求已取消。可以继续提问。",
   "ja-JP": "デスクトップ要求を取消。続けて質問できます。",
   "es-ES": "Solicitud cancelada. Puedes volver a preguntar.",
   "pt-BR": "Solicitação cancelada. Pode perguntar novamente."
  },
  "legacy.m032": {
   "de-DE": "💻 Ich prüfe den PC …",
   "en-GB": "💻 Checking PC status…",
   "zh-CN": "💻 正在检查电脑……",
   "ja-JP": "💻 PC状態を確認中…",
   "es-ES": "💻 Comprobando el PC…",
   "pt-BR": "💻 Verificando o PC…"
  },
  "legacy.m033": {
   "de-DE": "📂 Ich starte das Programm …",
   "en-GB": "📂 Opening the application…",
   "zh-CN": "📂 正在打开应用……",
   "ja-JP": "📂 アプリを起動中…",
   "es-ES": "📂 Abriendo aplicación…",
   "pt-BR": "📂 Abrindo aplicativo…"
  },
  "legacy.m034": {
   "de-DE": "🧠 Ich speichere deinen Merksatz …",
   "en-GB": "🧠 Saving your note…",
   "zh-CN": "🧠 正在保存笔记……",
   "ja-JP": "🧠 メモを保存中…",
   "es-ES": "🧠 Guardando nota…",
   "pt-BR": "🧠 Salvando nota…"
  },
  "legacy.m035": {
   "de-DE": "🛒 Ich suche bei Idealo …",
   "en-GB": "🛒 Searching Idealo…",
   "zh-CN": "🛒 正在搜索 Idealo……",
   "ja-JP": "🛒 Idealoを検索中…",
   "es-ES": "🛒 Buscando en Idealo…",
   "pt-BR": "🛒 Pesquisando no Idealo…"
  },
  "legacy.m036": {
   "de-DE": "🌐 Ich öffne Chrome …",
   "en-GB": "🌐 Opening Chrome…",
   "zh-CN": "🌐 正在打开 Chrome……",
   "ja-JP": "🌐 Chromeを開いています…",
   "es-ES": "🌐 Abriendo Chrome…",
   "pt-BR": "🌐 Abrindo Chrome…"
  },
  "legacy.m037": {
   "de-DE": "🌐 Ich suche im Internet …",
   "en-GB": "🌐 Searching the web…",
   "zh-CN": "🌐 正在搜索网页……",
   "ja-JP": "🌐 ウェブを検索中…",
   "es-ES": "🌐 Buscando en la web…",
   "pt-BR": "🌐 Pesquisando na web…"
  },
  "legacy.m045": {
   "de-DE": "🛒 Idealo-Suche geöffnet – Roboter antwortet …",
   "en-GB": "🛒 Idealo results opened; preparing reply…",
   "zh-CN": "🛒 已打开 Idealo，正在准备回复……",
   "ja-JP": "🛒 Idealoを開き、返答を準備中…",
   "es-ES": "🛒 Idealo abierto; preparando respuesta…",
   "pt-BR": "🛒 Idealo aberto; preparando resposta…"
  },
  "legacy.m046": {
   "de-DE": "🌐 Chrome-Aufruf erledigt – Roboter antwortet …",
   "en-GB": "🌐 Chrome request completed; preparing reply…",
   "zh-CN": "🌐 Chrome 请求完成，准备回复……",
   "ja-JP": "🌐 Chrome操作完了、返答を準備中…",
   "es-ES": "🌐 Chrome listo; preparando respuesta…",
   "pt-BR": "🌐 Chrome concluído; preparando resposta…"
  },
  "legacy.m047": {
   "de-DE": "🌐 Suchergebnis gefunden – Roboter antwortet …",
   "en-GB": "🌐 Search results received; preparing reply…",
   "zh-CN": "🌐 已收到搜索结果，准备回复……",
   "ja-JP": "🌐 検索結果を受信、返答を準備中…",
   "es-ES": "🌐 Resultados recibidos; preparando respuesta…",
   "pt-BR": "🌐 Resultados recebidos; preparando resposta…"
  },
  "legacy.m048": {
   "de-DE": "Suchantwort konnte nicht an den Roboter übermittelt werden.",
   "en-GB": "Search result could not be returned to the assistant.",
   "zh-CN": "无法将搜索结果返回助手。",
   "ja-JP": "検索結果をアシスタントに返せません。",
   "es-ES": "No se pudo devolver la búsqueda al asistente.",
   "pt-BR": "Não foi possível devolver a busca ao assistente."
  },
  "legacy.m049": {
   "de-DE": "Desktop-Sprachantwort wird erstellt.",
   "en-GB": "Preparing desktop readout.",
   "zh-CN": "正在准备桌面朗读。",
   "ja-JP": "デスクトップ読み上げを準備中。",
   "es-ES": "Preparando lectura del escritorio.",
   "pt-BR": "Preparando leitura do desktop."
  },
  "legacy.m050": {
   "de-DE": "Maussteuerbefehl nicht verfügbar.",
   "en-GB": "Mouse command unavailable.",
   "zh-CN": "鼠标命令不可用。",
   "ja-JP": "マウスコマンドは利用不可。",
   "es-ES": "Comando de ratón no disponible.",
   "pt-BR": "Comando de mouse indisponível."
  },
  "legacy.m051": {
   "de-DE": "Sprachantwort konnte nicht angefordert werden. Bitte erneut fragen.",
   "en-GB": "Could not request speech. Please ask again.",
   "zh-CN": "无法请求语音，请重试。",
   "ja-JP": "音声を要求できません。再度質問してください。",
   "es-ES": "No se pudo solicitar voz. Pregunta de nuevo.",
   "pt-BR": "Não foi possível solicitar voz. Pergunte novamente."
  },
  "legacy.m052": {
   "de-DE": "Desktop-Sprachausgabe beendet. Du kannst weiterfragen.",
   "en-GB": "Desktop readout finished. You can ask again.",
   "zh-CN": "桌面朗读完成。可以继续提问。",
   "ja-JP": "読み上げ完了。続けて質問できます。",
   "es-ES": "Lectura terminada. Puedes preguntar.",
   "pt-BR": "Leitura concluída. Pode perguntar."
  },
  "legacy.m053": {
   "de-DE": "Die Sprachantwort ist fehlgeschlagen. Prüfe API-Guthaben und Modellzugriff.",
   "en-GB": "Speech reply failed. Check API credit and model access.",
   "zh-CN": "语音回复失败。检查 API 余额和模型权限。",
   "ja-JP": "音声返答失敗。API残高とモデルアクセスを確認。",
   "es-ES": "Falló respuesta de voz. Revisa crédito y acceso al modelo.",
   "pt-BR": "Resposta de voz falhou. Verifique saldo e acesso ao modelo."
  },
  "legacy.m054": {
   "de-DE": "Sitzung von OpenAI beendet. Mikrofon aus.",
   "en-GB": "OpenAI session ended. Microphone off.",
   "zh-CN": "OpenAI 会话结束，麦克风关闭。",
   "ja-JP": "OpenAI会話終了。マイクオフ。",
   "es-ES": "Sesión OpenAI terminada. Micrófono apagado.",
   "pt-BR": "Sessão OpenAI encerrada. Microfone desligado."
  },
  "legacy.m055": {
   "de-DE": "15-Minuten-Sicherheitslimit erreicht. Mikrofon aus.",
   "en-GB": "15-minute safety limit reached. Microphone off.",
   "zh-CN": "达到 15 分钟安全上限，麦克风关闭。",
   "ja-JP": "15分の安全上限。マイクオフ。",
   "es-ES": "Límite de 15 minutos. Micrófono apagado.",
   "pt-BR": "Limite de 15 minutos. Microfone desligado."
  },
  "legacy.m056": {
   "de-DE": " Verbindung wird aufgebaut …",
   "en-GB": "Connecting…",
   "zh-CN": "正在连接……",
   "ja-JP": "接続中…",
   "es-ES": "Conectando…",
   "pt-BR": "Conectando…"
  },
  "legacy.m057": {
   "de-DE": "Gemini hat das Sitzungs-Setup nicht bestätigt. Prüfe Modell, API-Key-Typ und Gemini-Live-Zugriff.",
   "en-GB": "Gemini setup was not confirmed. Check model, key type and Live access.",
   "zh-CN": "Gemini 未确认设置。检查模型、密钥类型和实时权限。",
   "ja-JP": "Geminiの設定確認なし。モデル・キー形式・Live権限を確認。",
   "es-ES": "Gemini no confirmó setup. Revisa modelo, clave y acceso Live.",
   "pt-BR": "Gemini não confirmou o setup. Confira modelo, chave e acesso Live."
  },
  "legacy.m058": {
   "de-DE": "Für Gemini bitte den Rastermodus beenden. OpenAI kann Raster und Gespräch gemeinsam verwenden.",
   "en-GB": "Exit the grid before Gemini Live. OpenAI can share grid and conversation.",
   "zh-CN": "使用 Gemini Live 前请关闭网格。OpenAI 可共用网格与会话。",
   "ja-JP": "Gemini Liveの前にグリッドを終了。OpenAIは共用可能。",
   "es-ES": "Cierra la cuadrícula antes de Gemini Live. OpenAI permite compartir.",
   "pt-BR": "Encerre a grade antes de Gemini Live. OpenAI permite compartilhar."
  },
  "legacy.m059": {
   "de-DE": "Der lokale Modus bietet Text, aber kein vollständiges Realtime-Audio.",
   "en-GB": "Local mode provides text, not full Realtime audio.",
   "zh-CN": "本地模式提供文本，无完整实时音频。",
   "ja-JP": "ローカルモードはテキストのみ、完全ライブ音声なし。",
   "es-ES": "Modo local: texto, no Realtime completo.",
   "pt-BR": "Modo local: texto, sem Realtime completo."
  },
  "legacy.m060": {
   "de-DE": "Mikrofonberechtigung wird angefragt …",
   "en-GB": "Requesting microphone access…",
   "zh-CN": "正在请求麦克风权限……",
   "ja-JP": "マイク許可を要求中…",
   "es-ES": "Solicitando micrófono…",
   "pt-BR": "Solicitando microfone…"
  },
  "legacy.m061": {
   "de-DE": "Mikrofon im Browser nicht verfügbar. Windows-Mikrofonzugriff prüfen.",
   "en-GB": "Browser microphone unavailable. Check Windows permissions.",
   "zh-CN": "浏览器麦克风不可用，检查 Windows 权限。",
   "ja-JP": "ブラウザマイク利用不可。Windows権限を確認。",
   "es-ES": "Micrófono no disponible. Revisa permisos Windows.",
   "pt-BR": "Microfone indisponível. Verifique permissões Windows."
  },
  "legacy.m062": {
   "de-DE": "Verbindung mit OpenAI wird aufgebaut …",
   "en-GB": "Connecting to OpenAI…",
   "zh-CN": "正在连接 OpenAI……",
   "ja-JP": "OpenAIに接続中…",
   "es-ES": "Conectando a OpenAI…",
   "pt-BR": "Conectando ao OpenAI…"
  },
  "legacy.m067": {
   "de-DE": "🟢 Live: Sprich mit mir! Nach 45 Sekunden Gesprächspause schalte ich ab.",
   "en-GB": "🟢 Live ready. Disconnects after 45 seconds of inactivity.",
   "zh-CN": "🟢 实时会话就绪，空闲 45 秒后断开。",
   "ja-JP": "🟢 ライブ準備完了。無活動45秒で切断。",
   "es-ES": "🟢 Live listo. Desconecta tras 45 s de inactividad.",
   "pt-BR": "🟢 Live pronto. Desconecta após 45 s de inatividade."
  },
  "legacy.m070": {
   "de-DE": "Live-Gespräch beendet. Mikrofon aus.",
   "en-GB": "Live ended. Microphone off.",
   "zh-CN": "实时会话结束，麦克风关闭。",
   "ja-JP": "ライブ終了。マイクオフ。",
   "es-ES": "Live terminado. Micrófono apagado.",
   "pt-BR": "Live encerrado. Microfone desligado."
  },
  "legacy.m071": {
   "de-DE": "ICE-Zeitüberschreitung. Firewall/Netzwerk prüfen.",
   "en-GB": "ICE timeout. Check firewall/network.",
   "zh-CN": "ICE 超时，检查防火墙和网络。",
   "ja-JP": "ICEタイムアウト。ネットワーク・ファイアウォールを確認。",
   "es-ES": "Tiempo ICE agotado. Revisa red/cortafuegos.",
   "pt-BR": "Tempo ICE esgotado. Verifique rede/firewall."
  },
  "legacy.m072": {
   "de-DE": "Gemini Live: WebSocket geöffnet, Setup wird bestätigt …",
   "en-GB": "Gemini WebSocket opened; confirming setup…",
   "zh-CN": "Gemini WebSocket 已连接，正在确认设置……",
   "ja-JP": "Gemini WebSocket接続、設定確認中…",
   "es-ES": "Gemini WebSocket abierto; confirmando setup…",
   "pt-BR": "Gemini WebSocket aberto; confirmando setup…"
  },
  "legacy.m074": {
   "de-DE": "Sprachverbindung geschlossen. Mikrofon für Live aus.",
   "en-GB": "Live connection closed. Live microphone off.",
   "zh-CN": "实时连接已关闭，实时麦克风关闭。",
   "ja-JP": "ライブ接続終了。ライブ用マイクオフ。",
   "es-ES": "Conexión Live cerrada. Micrófono Live apagado.",
   "pt-BR": "Conexão Live encerrada. Microfone Live desligado."
  },
  "legacy.m075": {
   "de-DE": "Koordinatennetz beendet.",
   "en-GB": "Grid exited.",
   "zh-CN": "网格已关闭。",
   "ja-JP": "グリッドを終了しました。",
   "es-ES": "Cuadrícula cerrada.",
   "pt-BR": "Grade encerrada."
  },
  "legacy.m076": {
   "de-DE": "Bitte zuerst ein Feld auswählen.",
   "en-GB": "Select a cell first.",
   "zh-CN": "请先选择单元格。",
   "ja-JP": "先にセルを選択してください。",
   "es-ES": "Selecciona una celda primero.",
   "pt-BR": "Selecione uma célula primeiro."
  },
  "legacy.m077": {
   "de-DE": "Bildschirmkonfiguration geändert. Koordinatennetz bitte neu starten.",
   "en-GB": "Display layout changed. Restart the grid.",
   "zh-CN": "显示配置已更改，请重启网格。",
   "ja-JP": "画面構成が変わりました。グリッドを再開してください。",
   "es-ES": "Pantallas cambiadas. Reinicia la cuadrícula.",
   "pt-BR": "Telas alteradas. Reinicie a grade."
  },
  "legacy.m078": {
   "de-DE": "Mauseinstellungen übernommen.",
   "en-GB": "Mouse settings applied.",
   "zh-CN": "鼠标设置已应用。",
   "ja-JP": "マウス設定を適用。",
   "es-ES": "Ajustes del ratón aplicados.",
   "pt-BR": "Configurações do mouse aplicadas."
  },
  "legacy.m079": {
   "de-DE": "Maussteuerung ist im Schlafmodus nicht freigegeben.",
   "en-GB": "Mouse control is disabled in Sleep mode.",
   "zh-CN": "睡眠模式禁止鼠标控制。",
   "ja-JP": "スリープ中はマウス制御できません。",
   "es-ES": "Control del ratón desactivado en Reposo.",
   "pt-BR": "Controle do mouse desativado ao Dormir."
  },
  "legacy.m080": {
   "de-DE": "Koordinatennetz ist nur unter Windows verfügbar.",
   "en-GB": "The grid requires Windows.",
   "zh-CN": "网格需要 Windows。",
   "ja-JP": "グリッドにはWindowsが必要です。",
   "es-ES": "La cuadrícula requiere Windows.",
   "pt-BR": "A grade requer Windows."
  },
  "legacy.m081": {
   "de-DE": "Rasterstart abgebrochen.",
   "en-GB": "Grid startup cancelled.",
   "zh-CN": "网格启动已取消。",
   "ja-JP": "グリッド開始を取消。",
   "es-ES": "Inicio de cuadrícula cancelado.",
   "pt-BR": "Início da grade cancelado."
  },
  "legacy.m082": {
   "de-DE": "Koordinatennetz aktiv. Lokale Sprachsteuerung, keine Klicks.",
   "en-GB": "Grid active. No clicks.",
   "zh-CN": "网格已启用，无点击。",
   "ja-JP": "グリッド有効。クリックなし。",
   "es-ES": "Cuadrícula activa. Sin clics.",
   "pt-BR": "Grade ativa. Sem cliques."
  },
  "legacy.m083": {
   "de-DE": "Bitte zuerst das Koordinatennetz anzeigen.",
   "en-GB": "Show the grid first.",
   "zh-CN": "请先显示网格。",
   "ja-JP": "先にグリッドを表示してください。",
   "es-ES": "Muestra la cuadrícula primero.",
   "pt-BR": "Mostre a grade primeiro."
  },
  "legacy.m084": {
   "de-DE": "Ungültige Sichtbarkeit.",
   "en-GB": "Invalid visibility value.",
   "zh-CN": "可见度值无效。",
   "ja-JP": "表示濃度が無効です。",
   "es-ES": "Visibilidad no válida.",
   "pt-BR": "Visibilidade inválida."
  },
  "legacy.m085": {
   "de-DE": "Raster-Sichtbarkeit geändert.",
   "en-GB": "Grid visibility changed.",
   "zh-CN": "网格可见度已更改。",
   "ja-JP": "グリッド濃度を変更。",
   "es-ES": "Visibilidad cambiada.",
   "pt-BR": "Visibilidade alterada."
  },
  "legacy.m086": {
   "de-DE": "Raster auf den vollständigen Monitor zurückgesetzt.",
   "en-GB": "Grid reset to the full monitor.",
   "zh-CN": "网格已重置到整个显示器。",
   "ja-JP": "画面全体にリセットしました。",
   "es-ES": "Cuadrícula reiniciada a pantalla completa.",
   "pt-BR": "Grade reiniciada para a tela inteira."
  },
  "legacy.m087": {
   "de-DE": "Eine Unterteilung zurück.",
   "en-GB": "Returned one refinement level.",
   "zh-CN": "已返回一级。",
   "ja-JP": "1段階戻りました。",
   "es-ES": "Volviste un nivel.",
   "pt-BR": "Voltou um nível."
  },
  "legacy.m089": {
   "de-DE": "Maussteuerung ist nur unter Windows verfügbar.",
   "en-GB": "Mouse control requires Windows.",
   "zh-CN": "鼠标控制需要 Windows。",
   "ja-JP": "マウス制御にはWindowsが必要。",
   "es-ES": "Control del ratón requiere Windows.",
   "pt-BR": "Controle do mouse requer Windows."
  },
  "legacy.m090": {
   "de-DE": "Windows-Maussteuerung lieferte ungültige Daten.",
   "en-GB": "Windows mouse helper returned invalid data.",
   "zh-CN": "Windows 鼠标助手返回无效数据。",
   "ja-JP": "Windowsマウス補助から無効データ。",
   "es-ES": "El asistente de ratón devolvió datos no válidos.",
   "pt-BR": "O auxiliar do mouse retornou dados inválidos."
  },
  "legacy.m091": {
   "de-DE": "Mausziel erreicht.",
   "en-GB": "Mouse target reached.",
   "zh-CN": "已到达鼠标目标。",
   "ja-JP": "マウスが目標に到達。",
   "es-ES": "Ratón en el destino.",
   "pt-BR": "Mouse no destino."
  },
  "legacy.m092": {
   "de-DE": "Windows-Maussteuerung nicht verfügbar. Bitte die Desktop-Sitzung prüfen.",
   "en-GB": "Windows mouse control unavailable. Check the desktop session.",
   "zh-CN": "Windows 鼠标控制不可用，检查桌面会话。",
   "ja-JP": "Windowsマウス制御不可。デスクトップセッションを確認。",
   "es-ES": "Control Windows no disponible. Revisa sesión de escritorio.",
   "pt-BR": "Controle Windows indisponível. Verifique sessão de desktop."
  },
  "legacy.m093": {
   "de-DE": "Windows-Maussteuerung beendet.",
   "en-GB": "Windows mouse control ended.",
   "zh-CN": "Windows 鼠标控制已结束。",
   "ja-JP": "Windowsマウス制御を終了。",
   "es-ES": "Control Windows terminado.",
   "pt-BR": "Controle Windows encerrado."
  },
  "legacy.m094": {
   "de-DE": "Mausziel liegt außerhalb des gewählten Monitors.",
   "en-GB": "Target is outside the selected monitor.",
   "zh-CN": "目标在所选显示器之外。",
   "ja-JP": "目標が選択画面の外です。",
   "es-ES": "Destino fuera del monitor seleccionado.",
   "pt-BR": "Destino fora do monitor selecionado."
  },
  "legacy.m095": {
   "de-DE": "Ungültige Mausgeschwindigkeit.",
   "en-GB": "Invalid mouse speed.",
   "zh-CN": "鼠标速度无效。",
   "ja-JP": "マウス速度が無効。",
   "es-ES": "Velocidad no válida.",
   "pt-BR": "Velocidade inválida."
  },
  "legacy.m096": {
   "de-DE": "Lokale Raster-Spracherkennung benötigt Windows.",
   "en-GB": "Local grid recognition requires Windows.",
   "zh-CN": "本地网格识别需要 Windows。",
   "ja-JP": "ローカルグリッド認識にはWindowsが必要。",
   "es-ES": "Reconocimiento local requiere Windows.",
   "pt-BR": "Reconhecimento local requer Windows."
  },
  "legacy.m097": {
   "de-DE": "Lokale Raster-Spracherkennung konnte nicht gestartet werden.",
   "en-GB": "Local grid recognition could not start.",
   "zh-CN": "无法启动本地网格识别。",
   "ja-JP": "ローカルグリッド認識を開始できません。",
   "es-ES": "No se pudo iniciar reconocimiento local.",
   "pt-BR": "Não foi possível iniciar reconhecimento local."
  },
  "legacy.m098": {
   "de-DE": "Lokale Raster-Spracherkennung lieferte ungültige Daten.",
   "en-GB": "Local recognition returned invalid data.",
   "zh-CN": "本地识别返回无效数据。",
   "ja-JP": "ローカル認識から無効データ。",
   "es-ES": "Reconocimiento local devolvió datos no válidos.",
   "pt-BR": "Reconhecimento local retornou dados inválidos."
  },
  "legacy.m099": {
   "de-DE": "Lokale Raster-Spracherkennung nicht verfügbar. Deutsche Windows-Sprachfunktionen und Mikrofon prüfen.",
   "en-GB": "Local recognition unavailable. Check the selected Windows speech components and microphone.",
   "zh-CN": "本地识别不可用。检查所选 Windows 语音组件和麦克风。",
   "ja-JP": "ローカル認識不可。選択言語のWindows音声機能とマイクを確認。",
   "es-ES": "Reconocimiento local no disponible. Revisa idioma Windows y micrófono.",
   "pt-BR": "Reconhecimento local indisponível. Verifique idioma Windows e microfone."
  },
  "legacy.m100": {
   "de-DE": "Lokale Raster-Spracherkennung beendet. Maus-Stopp im Steuerungsfenster bleibt verfügbar.",
   "en-GB": "Local grid recognition ended. The mouse-stop button is still available.",
   "zh-CN": "本地网格识别已结束。鼠标停止按钮仍可用。",
   "ja-JP": "ローカルグリッド認識終了。マウス停止ボタンは利用可能。",
   "es-ES": "Reconocimiento local terminado. El botón de parada sigue disponible.",
   "pt-BR": "Reconhecimento local encerrado. O botão de parada continua disponível."
  },
  "mouse.cancelled": {
   "de-DE": "Mausbefehl abgebrochen.",
   "en-GB": "Mouse command cancelled.",
   "zh-CN": "鼠标命令已取消。",
   "ja-JP": "マウスコマンドを中止しました。",
   "es-ES": "Comando de ratón cancelado.",
   "pt-BR": "Comando do mouse cancelado."
  },
  "mouse.busy": {
   "de-DE": "Zu viele wartende Mausbefehle. Bitte warten oder Stopp verwenden.",
   "en-GB": "Too many pending mouse commands. Wait or use Stop.",
   "zh-CN": "待处理的鼠标命令过多。请等待或停止。",
   "ja-JP": "待機中のマウスコマンドが多すぎます。待つか停止してください。",
   "es-ES": "Demasiados comandos pendientes. Espera o usa Detener.",
   "pt-BR": "Muitos comandos pendentes. Aguarde ou use Parar."
  },
  "mouse.quadOnly": {
   "de-DE": "Viereransicht: Bitte links oben, rechts oben, links unten oder rechts unten wählen. A1–D5 gilt hier nicht.",
   "en-GB": "Four-cell view: choose top left, top right, bottom left or bottom right. A1–D5 is unavailable here.",
   "zh-CN": "四格视图：请选择左上、右上、左下或右下。此处不能使用 A1–D5。",
   "ja-JP": "4分割表示：左上・右上・左下・右下を選択してください。A1–D5は使用できません。",
   "es-ES": "Vista de cuatro: elige arriba izquierda, arriba derecha, abajo izquierda o abajo derecha. A1–D5 no está disponible.",
   "pt-BR": "Vista de quatro: escolha superior esquerdo, superior direito, inferior esquerdo ou inferior direito. A1–D5 não está disponível."
  },
  "mouse.subdividedQuad": {
   "de-DE": "Zielbereich in vier Richtungsfelder unterteilt.",
   "en-GB": "Target divided into four directional cells.",
   "zh-CN": "目标区域已细分为四个方向格。",
   "ja-JP": "対象範囲を4つの方向セルに分割しました。",
   "es-ES": "Área dividida en cuatro campos direccionales.",
   "pt-BR": "Área dividida em quatro campos direcionais."
  },
  "mouse.subdividedMatrix": {
   "de-DE": "Zielbereich erneut in A1–D5 unterteilt.",
   "en-GB": "Target divided into A1–D5 again.",
   "zh-CN": "目标区域再次细分为 A1–D5。",
   "ja-JP": "対象範囲を再びA1–D5に分割しました。",
   "es-ES": "Área subdividida de nuevo en A1–D5.",
   "pt-BR": "Área subdividida novamente em A1–D5."
  },
  "mouse.backStep": {
   "de-DE": "Einen Auswahl- oder Unterteilungsschritt zurück.",
   "en-GB": "One selection or subdivision step back.",
   "zh-CN": "已返回一个选择或细分步骤。",
   "ja-JP": "選択または分割を1段階戻しました。",
   "es-ES": "Un paso de selección o subdivisión atrás.",
   "pt-BR": "Um passo de seleção ou subdivisão atrás."
  },
  "mouse.helpQuad": {
   "de-DE": "Ebene {depth} · Links oben / rechts oben / links unten / rechts unten · Stopp · Zurück",
   "en-GB": "Level {depth} · Top left / top right / bottom left / bottom right · Stop · Back",
   "zh-CN": "第 {depth} 层 · 左上 / 右上 / 左下 / 右下 · 停止 · 返回",
   "ja-JP": "深度 {depth} · 左上 / 右上 / 左下 / 右下 · 停止 · 戻る",
   "es-ES": "Nivel {depth} · Arriba izquierda / derecha / abajo izquierda / derecha · Detener · Atrás",
   "pt-BR": "Nível {depth} · Superior esquerdo / direito / inferior esquerdo / direito · Parar · Voltar"
  },
  "mouse.quad.left-top": {
   "de-DE": "Links oben",
   "en-GB": "Top left",
   "zh-CN": "左上",
   "ja-JP": "左上",
   "es-ES": "Arriba izquierda",
   "pt-BR": "Superior esquerdo"
  },
  "mouse.quad.right-top": {
   "de-DE": "Rechts oben",
   "en-GB": "Top right",
   "zh-CN": "右上",
   "ja-JP": "右上",
   "es-ES": "Arriba derecha",
   "pt-BR": "Superior direito"
  },
  "mouse.quad.left-bottom": {
   "de-DE": "Links unten",
   "en-GB": "Bottom left",
   "zh-CN": "左下",
   "ja-JP": "左下",
   "es-ES": "Abajo izquierda",
   "pt-BR": "Inferior esquerdo"
  },
  "mouse.quad.right-bottom": {
   "de-DE": "Rechts unten",
   "en-GB": "Bottom right",
   "zh-CN": "右下",
   "ja-JP": "右下",
   "es-ES": "Abajo derecha",
   "pt-BR": "Inferior direito"
  },
  "mouse.quadShort.left-top": {
   "de-DE": "LO",
   "en-GB": "TL",
   "zh-CN": "左上",
   "ja-JP": "左上",
   "es-ES": "AI",
   "pt-BR": "SE"
  },
  "mouse.quadShort.right-top": {
   "de-DE": "RO",
   "en-GB": "TR",
   "zh-CN": "右上",
   "ja-JP": "右上",
   "es-ES": "AD",
   "pt-BR": "SD"
  },
  "mouse.quadShort.left-bottom": {
   "de-DE": "LU",
   "en-GB": "BL",
   "zh-CN": "左下",
   "ja-JP": "左下",
   "es-ES": "BI",
   "pt-BR": "IE"
  },
  "mouse.quadShort.right-bottom": {
   "de-DE": "RU",
   "en-GB": "BR",
   "zh-CN": "右下",
   "ja-JP": "右下",
   "es-ES": "BD",
   "pt-BR": "ID"
  }
 },
 "sources": {
  "Jeffrey & Freunde · Desktop-Assistent": "ui.s000",
  "DEIN DESKTOP-BEGLEITER": "ui.s001",
  "Ein kleiner": "ui.s002",
  "Moment Magie": "ui.s003",
  "Jeffrey: ein Roboterkopf, zwei Hände. Und ein freundliches Hallo aus dem Rauschen.": "ui.s004",
  "STUFE 5.0 · CHARAKTER AUSWÄHLEN": "ui.s005",
  "Jeffrey": "ui.s006",
  "Kelly": "ui.s007",
  "Krak": "ui.s008",
  "Bronco": "ui.s009",
  "James": "ui.s010",
  "Immer nur eine Figur ist aktiv. Ihr Name, ihre Stimme und die Persönlichkeit wechseln mit. Eine laufende Live-Unterhaltung wird beim Wechsel beendet (Kostenschutz).": "ui.s011",
  "HOLOGRAMM AUSPROBIEREN": "ui.s012",
  "Jeffrey rufen": "ui.s013",
  "Wieder ausblenden": "ui.s014",
  "🎙️ DIREKT SPRECHEN": "ui.s015",
  "🎙️ Live sprechen": "ui.s016",
  "⏹ Beenden": "ui.s017",
  "Bereit · Mikrofon aus · Keine laufenden Kosten": "ui.s018",
  "KI-Modus": "ui.s019",
  "OpenAI · Qualität · bestehende Stimmen": "ui.s020",
  "Gemini · Sparmodus · andere Stimmen": "ui.s021",
  "Lokal · Offline-Text über eigenen Server": "ui.s022",
  "Automatisch · Kosten optimieren": "ui.s023",
  "KOORDINATENNETZ · WINDOWS": "ui.s024",
  "Raster anzeigen": "ui.s025",
  "Modus beenden": "ui.s026",
  "■ Maus STOPP": "ui.s027",
  "Aus · Keine Klicks. Im Koordinatenmodus hört Windows lokal zu; Live pausiert.": "ui.s028",
  "Raster & Bewegung einstellen": "ui.s029",
  "Sichtbarkeit": "ui.s030",
  "Bewegungsgeschwindigkeit (Pixel/Sekunde)": "ui.s031",
  "Maximale Unterteilungstiefe (1–8, zusätzlich Pixelgrenze)": "ui.s032",
  "„Berta 3“, „links oben“, „Feld unterteilen“, „zurück“, „Raster ausblenden“. Bei 0 % bleibt die lokale Sprachsteuerung aktiv. „Koordinatennetz beenden“ schaltet sie aus.": "ui.s033",
  "ASSISTENT-MODUS": "ui.s034",
  "🟢 Aktiv": "ui.s035",
  "🟡 Ruhe": "ui.s036",
  "😴 Schlaf": "ui.s037",
  "Ab und zu ein Kommentar. Auf Abruf immer da.": "ui.s038",
  "Spontane Kommentare erlauben": "ui.s039",
  "Testkommentar zeigen": "ui.s040",
  "Wie oft darf": "ui.s041",
  "sich melden?": "ui.s042",
  "Selten · alle 35–55 Minuten": "ui.s043",
  "Normal · alle 15–25 Minuten": "ui.s044",
  "Gesprächig · alle 7–12 Minuten": "ui.s045",
  "Stimme für spontane Kommentare": "ui.s046",
  "Aus · nur Hologramm-Geste, kein Ton": "ui.s047",
  "Windows-Stimme · kostenlos": "ui.s048",
  "OpenAI-Stimme der Figur · kostenpflichtig": "ui.s049",
  "Nur im Aktivmodus. OpenAI-Kommentare kosten extra: maximal 4 pro Kalendertag und mindestens 15 Minuten Abstand; ohne API-Schlüssel bleibt er still. Testkommentar kann Guthaben verbrauchen. Kein dauerhaftes Mikrofon nötig.": "ui.s050",
  "SCHWEBENDE HÄNDE & GESTEN": "ui.s051",
  "Winken": "ui.s052",
  "Zeigen": "ui.s053",
  "Nachdenken": "ui.s054",
  "Erzählen": "ui.s055",
  "Robotergröße": "ui.s056",
  "Mit gedrückter linker Maustaste am Kopf oder an den Händen ziehen. Position und Größe bleiben gespeichert. Kelly und Krak haben getrennte Hände sowie ein lokales Audio-/Transkript-Viseme-Rig mit weichen Lippen- und Kieferübergängen.": "ui.s057",
  "Hologramm-Grisseln": "ui.s058",
  "Ein- und Ausblenden": "ui.s059",
  "1,5 s": "ui.s060",
  "Bildschirmecke": "ui.s061",
  "Unten rechts": "ui.s062",
  "Unten links": "ui.s063",
  "Oben rechts": "ui.s064",
  "Oben links": "ui.s065",
  "Frei platziert": "ui.s066",
  "✨ NATÜRLICHES LIVE-GESPRÄCH": "ui.s067",
  "OpenAI Realtime Mini · Helle Comic-Stimme voreingestellt · Direkt sprechen und Antwort hören. Per Knopf oder Codewort starten. Sage „[Name], verschwinde“, um sofort Schluss zu machen. Bei 45 Sekunden Gesprächspause automatisch aus (Sicherheitslimit: 15 Minuten).": "ui.s068",
  "🎭 Live-Stimme": "ui.s069",
  "Shimmer · heller und weich (Vorschlag)": "ui.s070",
  "Coral · frisch und freundlich": "ui.s071",
  "Marin · bisherige Stimme": "ui.s072",
  "Verse · ausdrucksvoll": "ui.s073",
  "Ash · alternative männliche Stimme": "ui.s074",
  "Sage · ruhig": "ui.s075",
  "Cedar · warm": "ui.s076",
  "Sprechstil": "ui.s077",
  "Comic · hell, verspielt und frech": "ui.s078",
  "Natürlich · entspannt": "ui.s079",
  "Lebhaft · voller Energie": "ui.s080",
  "Jede Figur hat ihr eigenes gespeichertes Stimmenprofil. Bei Charakterwechsel gilt dessen Stimme für das nächste Gespräch. Krak klingt durch Sprechregeln koboldhaft; echte Stimmverzerrung ist nicht garantiert.": "ui.s081",
  "🤖 Jeffreys Computerstimme (nur Jeffrey)": "ui.s082",
  "Original · ohne lokalen Filter": "ui.s083",
  "Leicht · etwas heller, dezent technisch": "ui.s084",
  "Blechern · höher und metallisch (Empfehlung)": "ui.s085",
  "Robotisch · deutlich höher und künstlicher": "ui.s086",
  "Nur Jeffreys Live-Stimme. Lokal verarbeitet und ohne zusätzliche API-Kosten. Nach dem Wechsel ein neues Gespräch starten. Andere Charaktere bleiben unverändert.": "ui.s087",
  "🔧 Broncos Schrottplatz-Stimme (nur Bronco)": "ui.s088",
  "Originalstimme · ohne Effekt": "ui.s089",
  "Rau · etwas tiefer": "ui.s090",
  "Hart · tief, kratzig und metallisch": "ui.s091",
  "Extrem · sehr tief und schrottig": "ui.s092",
  "Wirkt lokal auf Broncos Live-Stimme; keine Extra-API-Kosten. Nach dem Umschalten ein neues Live-Gespräch starten. Falls der Pitch-Effekt unter Windows nicht verfügbar ist, bleibt der raue Klangfilter aktiv.": "ui.s093",
  "🌐 Websuche für aktuelle Fragen aktivieren (zusätzliche API-Kosten)": "ui.s094",
  "Der Roboter sucht nur bei aktuellen Fragen wie Wetter, Nachrichten oder Öffnungszeiten. Maximal 2 Websuchen pro Live-Gespräch. Bei aktivierter Suche laufen Suchanfragen über OpenAI; jede Suche kostet zusätzlich Guthaben.": "ui.s095",
  "🌐 Webseiten öffnen und Produkte bei Idealo suchen": "ui.s096",
  "Zum Beispiel: „Jeffrey, öffne YouTube“, „Öffne wikipedia.org“ oder „Jeffrey, suche bei Idealo nach einer RTX 5070“. Die Idealo-Suchergebnisse öffnen direkt in Chrome, ohne zusätzliche Websuche. Nur öffentliche HTTPS-Seiten, keine Dateien oder Windows-Befehle. Maximal vier Seiten pro Live-Gespräch. Chrome wird direkt gestartet, falls installiert.": "ui.s097",
  "💻 STUFE 3 · PC-ASSISTENT": "ui.s098",
  "PC-Zustand prüfen und ausgewählte Programme öffnen": "ui.s099",
  "Sag „Jeffrey, wie geht’s meinem PC?“ oder „Jeffrey, öffne VS Code“. Erlaubt sind nur VS Code, Editor, Rechner und Datei-Explorer. Kein PowerShell, keine beliebigen Programme, kein Löschen. Programmstart nur nach ausdrücklichem Sprachbefehl.": "ui.s100",
  "💻 PC-Status kostenlos prüfen": "ui.s101",
  "Noch keine PC-Abfrage durchgeführt.": "ui.s102",
  "Bei hoher CPU-/RAM-Last von selbst warnen": "ui.s103",
  "Standardmäßig aus. Nur im Aktivmodus mit spontanen Kommentaren; nach zwei hohen Messungen, höchstens einmal pro Stunde pro Ursache. Windows-Stimme kostenlos, optionale OpenAI-Kommentarstimme kostet Guthaben (mit dem bisherigen Tageslimit).": "ui.s104",
  "🎤 Im Hintergrund auf „Jeffrey“ warten (lokal)": "ui.s105",
  "Wie empfindlich soll die Figur auf den Namen reagieren?": "ui.s106",
  "Empfindlich · reagiert leichter (empfohlen)": "ui.s107",
  "Normal · weniger Fehlalarme": "ui.s108",
  "Streng · nur sehr sichere Treffer": "ui.s109",
  "Bei „Empfindlich“ reagiert Jeffrey zuverlässiger auf einen einzelnen Ruf, kann aber bei ähnlich klingenden Wörtern gelegentlich versehentlich erscheinen. Die Erkennung bleibt vollständig lokal und kostenlos.": "ui.s110",
  "Codewort-Erkennung ist ausgeschaltet.": "ui.s111",
  "🔎 Codewort kostenlos testen": "ui.s112",
  "Wenn „Lokal bereit“ nicht erscheint, die Fehlermeldung direkt darüber lesen. Zum Testen „Jeffrey“ deutlich sagen: Dabei wird keine OpenAI-Verbindung geöffnet. Im Ruhemodus verfügbar, im Schlafmodus aus. Das lokale Codewort aktiviert erst bei Treffer die kostenpflichtige Live-Verbindung. Deaktivieren stoppt das lokale Hintergrundmikrofon.": "ui.s113",
  "Den Live-Start und Stopp findest du jetzt direkt oben unter der Charakterauswahl.": "ui.s114",
  "🔒 Dein API-Schlüssel bleibt im Windows-Hauptprozess. Bei Live-Gesprächen werden Mikrofondaten an OpenAI übertragen und nach Nutzung abgerechnet. Kopfhörer helfen gegen Echo. Die klassische Windows-Sprachfunktion bleibt unten als Alternative erhalten.": "ui.s115",
  "💬 TEXT UND WINDOWS-SPRACHE": "ui.s116",
  "Einmal zuhören (kein Dauer-Mikrofon). Oder Text eingeben und Enter drücken.": "ui.s117",
  "🎤 Einmal zuhören": "ui.s118",
  "Bereit. Für Windows-Diktat im Textfeld: Win + H.": "ui.s119",
  "Deine Nachricht": "ui.s120",
  "Nachricht senden ↗": "ui.s121",
  "🔇 Stopp": "ui.s122",
  "Antworten laut sprechen": "ui.s123",
  "🧠 LOKALES GEDÄCHTNIS": "ui.s124",
  "Gespeicherte Merksätze für KI-Gespräche verwenden": "ui.s125",
  "Standardmäßig aus. Notizen bleiben auf diesem Windows-PC. Nur bei eingeschaltetem Gedächtnis werden die gespeicherten Sätze beim Start eines KI-Gesprächs an den jeweiligen KI-Anbieter gesendet. Merke dir keine Passwörter oder Geheimnisse. Bei aktivem Gedächtnis kannst du sagen: „Jeffrey, merk dir, dass ...“.": "ui.s126",
  "Merksatz (max. 220 Zeichen)": "ui.s127",
  "Merksatz speichern": "ui.s128",
  "Alle Merksätze löschen": "ui.s129",
  "🤖 KI-ANBIETER & KOSTEN": "ui.s130",
  "Datenschutz · dauerhafte Zustimmungen": "ui.s131",
  "Nur für ausdrückliche Anfragen, getrennt nach Datenart und Empfänger. „Einmal erlauben“ gilt für genau eine Anfrage. Lokales Vorlesen benötigt keine Cloud-Zustimmung. Windows-Systemberechtigungen werden dadurch nicht ersetzt.": "ui.s132",
  "Bildschirm-Freigabe widerrufen": "ui.s133",
  "Text-Freigabe widerrufen": "ui.s134",
  "OpenAI ist der bewährte Standard. Jeffrey- und Bronco-Filter sowie alle Charakterprofile bleiben unverändert.": "ui.s135",
  "Lokale OpenAI-kompatible Serveradresse": "ui.s136",
  "Lokales Modell": "ui.s137",
  "Lokale Modelle prüfen": "ui.s138",
  "Textmodus: Ollama, LM Studio oder llama.cpp auf diesem PC. Kein vollständiges Realtime-Audio.": "ui.s139",
  "Gemini-Live-Modell": "ui.s140",
  "Gemini-API-Schlüssel": "ui.s141",
  "Gemini-Schlüssel geschützt speichern": "ui.s142",
  "Gemini-Schlüssel löschen": "ui.s143",
  "Neue Gemini-Authorization Keys können mit AQ. beginnen; ältere Standard-Keys mit AIza werden ebenfalls akzeptiert. Gemini-Stimmen klingen anders als die OpenAI-Stimmen. Das Free Tier ist nicht unbegrenzt kostenlos und je nach Region/Konto nicht garantiert. Bei unbezahlten Diensten kann Google Inhalte zur Produktverbesserung verwenden; keine sensiblen Daten senden. In EWR, Schweiz und Vereinigtem Königreich gelten besondere Paid-Service-Bedingungen.": "ui.s144",
  "OpenAI-API-Schlüssel für Live-Stimme und GPT-Text": "ui.s145",
  "Schlüssel geschützt speichern": "ui.s146",
  "Schlüssel löschen": "ui.s147",
  "OpenAI-API-Aufrufe können Kosten verursachen. Der Schlüssel wird mit Windows-Datenschutz verschlüsselt, wenn verfügbar.": "ui.s148",
  "Im Automatikmodus kostenpflichtige Cloud-Audioanbieter ausdrücklich erlauben": "ui.s149",
  "Ohne diese Freigabe wechselt Automatik niemals selbstständig zu Gemini oder OpenAI. Anbieterwechsel erfolgen nur zwischen Sitzungen; es gibt keine doppelten Anfragen.": "ui.s150",
  "Lokales Monatsbudget in Euro (0 = keine Grenze)": "ui.s151",
  "Neue kostenpflichtige Gespräche bei 100 % lokal blockieren": "ui.s152",
  "Warnungen erscheinen bei 50 %, 80 % und 100 %. Das lokale Software-Budget ist keine garantierte serverseitige Ausgabensperre; Nutzungsdaten können fehlen oder verspätet sein.": "ui.s153",
  "Aktiv:": "ui.s154",
  "OpenAI": "ui.s155",
  "gpt-realtime-2.1-mini": "ui.s156",
  "Gespräch:": "ui.s157",
  "Heute:": "ui.s158",
  "Monat:": "ui.s159",
  "Websuche:": "ui.s160",
  "Nach Anbieter:": "ui.s161",
  "· Gemini": "ui.s162",
  "· Lokal": "ui.s163",
  "Preisannahmen bearbeiten (EUR je 1 Mio. Tokens / Web je 1000 Aufrufe)": "ui.s164",
  "OpenAI Text Input": "ui.s165",
  "OpenAI Text Output": "ui.s166",
  "OpenAI Audio Input": "ui.s167",
  "OpenAI Audio Output": "ui.s168",
  "Gemini Text Input": "ui.s169",
  "Gemini Text Output": "ui.s170",
  "Gemini Audio Input": "ui.s171",
  "Gemini Audio Output": "ui.s172",
  "OpenAI Websuche je 1000 Aufrufe": "ui.s173",
  "Stichtag der Vorgaben: 24.10.2026. Änderungen gelten für neue Nutzungseinträge; Anbieterpreise bitte regelmäßig prüfen.": "ui.s174",
  "Noch keine gemeldete Nutzung. Werte sind Schätzungen und keine Anbieterrechnung bzw. kein offizieller Rechnungssaldo.": "ui.s175",
  "Kein lokales Monatsbudget gesetzt.": "ui.s176",
  "v0.7.4 · Jeffrey, Kelly, Krak, Bronco & James": "ui.s177",
  "Leertaste: rufen / ausblenden · Esc: ausblenden": "ui.s178",
  "Überall: Strg + Alt + Leertaste": "ui.s179",
  "Fenster schließen = weiter im Infobereich.": "ui.s180",
  "Dort per Rechtsklick: Modi und Beenden.": "ui.s181",
  "LIVE-VORSCHAU": "ui.s182",
  "01 / BEWEGUNG": "ui.s183",
  "Raum für": "ui.s184",
  "deine Ideen.": "ui.s185",
  "DEIN BILDSCHIRM. SEIN KLEINER AUFTRITT.": "ui.s186",
  "Unsichtbar · bereit für seinen Auftritt": "ui.s187",
  "VERBINDUNG STEHT": "ui.s188",
  "Hallo Robin. Schön, dass du da bist.": "ui.s189",
  "NUR KOPF & HÄNDE": "ui.s190",
  "LEISE IM HINTERGRUND. DA, WENN DU IHN BRAUCHST.": "ui.s191",
  "Bediensprache": "language.ui",
  "KI-Gesprächssprache": "language.conversation",
  "Automatisch": "language.automatic",
  "Sprache gespeichert. Live neu starten; Einstellungen bleiben erhalten.": "language.saved",
  "Windows-Erkennung für {locale} fehlt oder ist nicht bereit. Textfeld und Schaltflächen verwenden; kein zweites Mikrofon wird gestartet.": "speech.missing",
  "Lokale Rasterbefehle bereit ({locale}). Stopp ist jederzeit möglich.": "speech.ready",
  "Gemini pausiert: kein zuverlässiger gemeinsamer Transkriptkanal im vorhandenen Setup. Exklusive lokale Rastererkennung; Text und Schaltflächen bleiben verfügbar.": "speech.fallback",
  "Raster und OpenAI-Gespräch aktiv. Ein gemeinsames Mikrofon; Mausbefehle werden lokal abgefangen.": "mouse.shared",
  "Lokaler Rastermodus aktiv. Textfeld bleibt verfügbar; Spracherkennung erfordert die installierte Windows-Sprache.": "mouse.local",
  "Ebene {depth} · A1–D5 · Stopp · Zurück · Raster aus": "mouse.help",
  "Aktion nicht verfügbar. Einstellungen und Verbindung prüfen. {code}": "status.error",
  "Bereit.": "status.ready",
  "{name} – Übertragung erlauben?": "consent.title",
  "Bild des gewählten Monitors zur KI-Auswertung an OpenAI übertragen?": "consent.screen",
  "Markierten Text zum Vorlesen, Erklären oder Zusammenfassen an OpenAI übertragen?": "consent.text",
  "Bildschirminhalte können vertrauliche Daten enthalten. Genau ein Bild pro ausdrücklichem Auftrag.": "consent.screenData",
  "Text kann vertraulich sein. Vorlesen sendet ihn an OpenAI TTS, Erklärung und Zusammenfassung an das vorhandene OpenAI-Textmodell.": "consent.textData",
  "API-Kosten können entstehen. Inhalte bleiben in der App nur vorübergehend im Speicher, ohne Inhaltsprotokolle oder Gedächtnis. Für Verarbeitung und Aufbewahrung bei OpenAI gelten dessen Regeln. Einmal gilt nur für diese Anfrage. Dauerhaft gilt auf diesem Gerät auch nach Neustart, getrennt für Bildschirm und Text, nur für OpenAI. Jeder weitere Auftrag muss ausdrücklich erfolgen; keine Hintergrundüberwachung. Widerruf jederzeit in den Einstellungen. Diese App-Zustimmung ersetzt keine Windows-Systemberechtigung.": "consent.common",
  "Abbrechen": "action.cancel",
  "Einmal erlauben": "action.once",
  "Auf diesem Gerät dauerhaft erlauben": "action.device",
  "Beenden": "action.quit",
  "Löschen": "action.delete",
  "Wirklich alle lokal gespeicherten Merksätze löschen?": "memory.confirm",
  "{name} – Programmstart freigeben?": "app.launch.title",
  "Soll {name} {app} öffnen?": "app.launch.question",
  "Spracherkennung war nicht eindeutig. Nur dieses Programm wird nach deiner Bestätigung geöffnet.": "app.launch.detail",
  "Einmal öffnen": "action.openOnce",
  "{name} rufen": "character.show",
  "{name} ausblenden und Gespräch beenden": "character.hide",
  "{name} – Einstellungen": "character.title",
  "Im Hintergrund auf „{name}“ warten (lokal)": "wake.label",
  "Codewort „{name}“ kostenlos testen": "wake.test",
  "Wie empfindlich soll {name} auf den Namen reagieren?": "wake.sensitivity",
  "Aktiv – Kommentare erlaubt": "menu.active",
  "Ruhe – nur auf Abruf": "menu.quiet",
  "Schlafen – vollständig still": "menu.sleep",
  "Spontane Kommentare": "menu.comments",
  "Lustigen Testkommentar zeigen": "menu.test",
  "Sprachausgabe stoppen": "menu.stop",
  "Position auf unten rechts zurücksetzen": "menu.position",
  "Einstellungen öffnen": "menu.settings",
  "UI in sechs Sprachen. Sprache benötigt passende Erkennung; neue Sprachpfade noch nicht unter Windows getestet. OpenAI teilt Transkripte, Gemini nutzt einen sicheren lokalen Fallback.": "language.notice",
  "Spracheinstellungen": "language.settings",
  "Du: ": "chat.you",
  "Desktop-Charakter": "aria.character",
  "Schneller Gesprächsstart": "aria.live",
  "Lokale Mauspositionierung": "aria.mouse",
  "Modus wählen": "aria.mode",
  "Geste wählen": "aria.gesture",
  "Letzte Unterhaltung": "aria.chat",
  "Lokale Kostenschätzung": "aria.cost",
  "Vorschau von Jeffrey, dem Desktop-Roboter": "aria.preview",
  "Freundlicher Roboterkopf mit schwebenden Händen": "aria.robot",
  "Moin! Erzähl mir einen Witz …": "placeholder.chat",
  "Ich möchte, dass Jeffrey mich morgens kurz begrüßt.": "placeholder.note",
  "z. B. llama3.2 oder qwen2.5": "placeholder.model",
  "AQ.… oder AIza…": "placeholder.gemini",
  "Codewort „{name}“": "menu.wake",
  "Koordinatennetz aktiv. Keine Klicks.": "mouse.active",
  "Mausbewegung gestoppt.": "mouse.stopped",
  "Raster unsichtbar. Koordinatensteuerung bleibt aktiv.": "mouse.hidden",
  "Aktuellen Zielbereich erneut in A1 bis D5 unterteilt.": "mouse.subdivided",
  "Mausziel fein positioniert.": "mouse.refined",
  "Maus bewegt sich zum letzten Ziel.": "mouse.moving",
  "Mausziel {cell} gewählt.": "mouse.target",
  "Maximale Unterteilungstiefe erreicht.": "mouse.depthLimit",
  "Zielbereich ist für weitere Pixel-Unterteilung zu klein.": "mouse.pixelLimit",
  "Zielbereich ist für ein weiteres Raster zu klein (Pixelgrenze).": "mouse.gridPixelLimit",
  "Bereits auf der obersten Ebene.": "mouse.topLevel",
  "Maussteuerung noch nicht bereit.": "mouse.notReady",
  "Aktiv": "mode.active",
  "Ruhe": "mode.quiet",
  "Schlafen": "mode.sleep",
  "Gelegentliche Kommentare sind erlaubt.": "mode.activeDescription",
  "Keine spontanen Kommentare. Auf Abruf bin ich da.": "mode.quietDescription",
  "{name} – {mode}{live}": "tray.tooltip",
  " – LIVE-Mikrofon": "tray.live",
  "Codewort kostenlos testen": "menu.wakeTest",
  "Noch keine Merksätze gespeichert.": "legacy.m018",
  "Merksatz löschen: {note}": "memory.deleteLabel",
  "Befehl erkannt; wird geprüft.": "speech.recognised",
  "🎤 Ich höre zu … Sprich jetzt einen kurzen Satz.": "speech.listening",
  "Nichts verstanden. Du kannst erneut aufs Mikrofon klicken.": "speech.empty",
  "Mikrofon nicht verfügbar.": "speech.noMic",
  "😴 Schlafmodus – keine Sprache, kein Mikrofon.": "speech.sleep",
  "Der Roboter schläft. Zuerst Aktiv oder Ruhe auswählen.": "speech.sleepRequest",
  "Lokale Rastererkennung ist aktiv. OpenAI Live kann sie übernehmen; für einmaliges Zuhören oder andere Anbieter das Raster beenden.": "speech.gridBusy",
  "Dauerhafte Zustimmung widerrufen. Künftige Cloud-Anfragen fragen wieder nach.": "consent.revoked",
  "Widerruf gilt jetzt. Speichern fehlgeschlagen: Einstellungen-Datei prüfen, bevor die App neu gestartet wird.": "consent.revokeFailed",
  "{provider}-API-Schlüssel verschlüsselt im Windows-Benutzerprofil gespeichert.": "key.saved",
  "{provider}-API-Schlüssel gelöscht.": "key.deleted",
  "Verschlüsselung nicht verfügbar: Schlüssel gilt nur bis zum Beenden.": "key.volatile",
  "{feature}: {state}. Gilt ab dem nächsten Gespräch.": "settings.changed",
  "Gedächtnis": "feature.memory",
  "PC-Assistent": "feature.pc",
  "PC-Warnungen": "feature.alerts",
  "Websuche": "feature.web",
  "Webseiten in Chrome öffnen": "feature.browser",
  "aktiviert": "state.on",
  "deaktiviert": "state.off",
  "Neue Live-Stimme gilt ab dem nächsten Gespräch.": "voice.next",
  "Neuer Sprechstil gilt ab dem nächsten Gespräch.": "style.next",
  "{name}-Stimmfilter ab nächstem Gespräch: {value}": "filter.next",
  "Aktiv: {name}. Stimme und Persönlichkeit gelten ab dem nächsten Gespräch.": "character.changed",
  "Kelly: Deine charmante virtuelle Assistentin. Freundlich, elegant und immer auf Abruf.": "intro.kelly",
  "James: Ein kultivierter englischer Butler-Roboter. Diskret, charmant und stets zu Diensten.": "intro.james",
  "Monat {spent} von {limit} ({ratio} %).": "budget.progress",
  "Budgetwarnung: {values} % erreicht.": "budget.warning",
  "Editor": "app.notepad",
  "Codewort-Erkennung aus. Raster und Live-Gespräch steuern ihr Mikrofon separat.": "wake.off",
  "Schlafmodus: Codewort und Mikrofon aus.": "wake.sleep",
  "Koordinatenmodus: lokale Befehle aktiv; OpenAI-Codewort verfügbar, wenn eingeschaltet.": "wake.grid",
  "Live-Gespräch läuft. Codewort-Erkennung pausiert.": "wake.live",
  "Starte lokale Codewort-Erkennung …": "wake.starting",
  "Codewort erkannt – Live-Verbindung wird aufgebaut …": "wake.connecting",
  "✅ Test bestanden! „{name}“ wurde lokal erkannt. Keine API-Kosten.": "wake.testPassed",
  "Sage innerhalb von 15 Sekunden „{name}“. Nur lokaler Test, keine API-Kosten.": "wake.testPrompt",
  "„{name}“ nicht erkannt. Mikrofon, Erkennungssprache und Empfindlichkeit prüfen.": "wake.testFailed",
  "Erst das lokale Wakeword für {name} aktivieren.": "wake.enableFirst",
  "Erst Koordinatennetz beenden, dann Codewort testen.": "wake.endGrid",
  "Erst Live-Gespräch beenden, dann Codewort testen.": "wake.endLive",
  "Beendet. Mikrofon aus.": "live.closed",
  "Verbunden – Mikrofon aktiv. Einfach sprechen.": "live.connected",
  "Bereit – du kannst erneut fragen.": "live.ready",
  "🟢 Gemini Live: Mikrofon aktiv. Stimme weicht von OpenAI ab.": "live.geminiReady",
  "Gemini-Verbindung wird aufgebaut. Stimmen unterscheiden sich von OpenAI.": "live.geminiConnecting",
  "45 Sekunden Gesprächspause – Mikrofon aus. Sag „{name}“, um mich wieder zu rufen.": "live.idle",
  "Gemini Live beendet (Code {code}){reason}. Mikrofon aus.": "live.geminiEnd",
  "Jeffrey: Computerfilter pausiert – Originalstimme aktiv.": "filter.jeffreyPaused",
  "Jeffrey: hellere, metallische Computerstimme aktiv.": "filter.jeffreyPitch",
  "Jeffrey: blecherner Klangfilter aktiv.": "filter.jeffreyMetal",
  "Bronco: Filter pausiert – Originalstimme aktiv.": "filter.broncoPaused",
  "Bronco: tiefe, raue Schrottplatz-Stimme aktiv.": "filter.broncoPitch",
  "Bronco: rauer Filter aktiv.": "filter.broncoRough",
  "🟢 Lokal bereit ({locale}): „{name}“. Reagiere auf einen einzelnen Ruf.": "wake.ready",
  "🟡 Namen eventuell gehört, aber nicht sicher genug ({confidence} %). Wähle bei Bedarf eine höhere Empfindlichkeit.": "wake.low",
  "CPU-Auslastung ungefähr {cpu} Prozent. Arbeitsspeicher {memory} Prozent belegt, {used} von {total} Gigabyte. Windows läuft seit ungefähr {hours} Stunden.": "pc.status",
  "Technischer Fehler beim Auslesen der Windows-Textauswahl. {code}": "selection.error",
  "Diese Anwendung stellt keine geeignete Textauswahl über Windows UI Automation bereit.": "selection.unsupported",
  "Ich sehe gerade keinen markierten Text. Soll ich stattdessen deinen Bildschirm untersuchen?": "selection.empty",
  "Die Textauswahl ist geschützt und wird nicht ausgelesen.": "selection.protected",
  "Die Anwendung meldet mehrere Textauswahlen. Bitte markiere den gewünschten Abschnitt erneut.": "selection.ambiguous",
  "Die Textauswahl ist zu lang. Bitte markiere höchstens 24.000 Zeichen.": "selection.tooLong",
  "Ich finde kein geeignetes Windows-Fenster mit Textauswahl.": "selection.noWindow",
  "Markierter Text wurde vorgelesen.": "selection.readDone",
  "Bildschirmaufnahme: Zielmonitor wird ermittelt.": "desktop.target",
  "Freigabe für diese Bildschirmübertragung wird geprüft.": "desktop.permission",
  "Bildschirmaufnahme: Monitor DISPLAY{number} wird aufgenommen.": "desktop.capture",
  "Bildschirmaufnahme: Der primäre Bildschirm wird aufgenommen.": "desktop.primary",
  "Bildanalyse: Aufnahme erstellt. Übertragung an OpenAI wird gestartet.": "desktop.sending",
  "Bildanalyse: Antwort von OpenAI wird ausgewertet.": "desktop.response",
  "Bildanalyse abgeschlossen. Antwort ist bereit.": "desktop.done",
  "Desktop-Befehl erkannt.": "desktop.command",
  "Desktop-Sprachantwort angefordert.": "desktop.readout",
  "{kind}: {state}": "privacy.status",
  "Bildschirm": "privacy.screen",
  "Markierter Text": "privacy.text",
  "Dauerhaft für OpenAI erlaubt.": "legacy.m017",
  "Keine dauerhafte Cloud-Freigabe.": "privacy.none",
  "Gefunden: {models}": "local.modelsFound",
  "Keine Modelle gemeldet.": "local.modelsEmpty",
  "nicht gewählt": "model.unselected",
  "Hinweis: Textfeld oder Win + H verwenden.": "keyboard.alternative",
  "Merksatz lokal gespeichert. Gilt für das nächste KI-Gespräch.": "memory.saved",
  "Merksatz gelöscht.": "memory.deleted",
  "Alle Merksätze gelöscht.": "memory.cleared",
  "PC-Funktionen sind ausgeschaltet.": "pc.disabled",
  "Codewort ausgeschaltet.": "wake.offShort",
  "Im Schlafmodus ist das Mikrofon ausgeschaltet.": "wake.sleepShort",
  "Erkenner nicht bereit. Den Codewort-Schalter aus- und wieder einschalten; danach Fehlermeldung prüfen.": "wake.restart",
  "Mikrofon hört Sprache, aber nicht sicher „{name}“. Erkennungssprache und Empfindlichkeit prüfen.": "wake.miss",
  "Unsichtbar · {name} wartet auf seinen Auftritt": "character.hidden",
  "Automatisch: lokale Aufgaben zuerst; kein kostenpflichtiger Gemini-/OpenAI-Audioanbieter ohne deine Freigabe.": "provider.auto",
  "Meinst du markierten Text oder den Bildschirm? Bitte ausdrücklich auswählen. Keine Aufnahme gestartet.": "desktop.clarify",
  "Die Freigabe des bisherigen Mikrofonzugriffs wurde nicht bestätigt. Textfeld und Schaltflächen verwenden; bei Bedarf App neu starten.": "speech.busy",
  "Lokale Spracherkennung nicht verfügbar. Textfeld und Stopp-Schaltfläche bleiben verfügbar.": "speech.failed",
  "OpenAI Qualität: bewährte Realtime-Stimmen und bestehende lokale Audiofilter.": "legacy.m002",
  "Gemini Sparmodus: Live-Audio mit anderen Stimmen; Verfügbarkeit, Datenschutz und Preise hängen von Region und Konto ab.": "legacy.m003",
  "Lokal: kostenlose Cloud-Inferenz für Text über deinen eigenen Server; kein vollständiges Realtime-Audio.": "legacy.m004",
  "OpenAI-Schlüssel gespeichert": "legacy.m005",
  "Gemini-Schlüssel gespeichert": "legacy.m006",
  "Vom Anbieter gemeldete Nutzung; lokale Euro-Berechnung, keine Anbieterrechnung.": "legacy.m007",
  "Gemeldete und geschätzte Nutzung gemischt; keine Anbieterrechnung.": "legacy.m008",
  "Rechnerisch geschätzte Nutzung; keine Anbieterrechnung.": "legacy.m009",
  "Noch keine Nutzungsdaten; keine Anbieterrechnung und kein offizieller Rechnungssaldo.": "legacy.m010",
  "Ich schlafe: keine Kommentare und keine Auftritte.": "legacy.m011",
  "Krak: Ein schrulliger grüner Kobold. Ziemlich frech – und trotzdem hilfreich.": "legacy.m013",
  "Bronco: Ein rostiger Mecker-Roboter mit Zigarre. Schlecht gelaunt, aber nützlich.": "legacy.m014",
  "Ich höre zu": "legacy.m015",
  "Es ist ein Fehler aufgetreten.": "legacy.m016",
  "Merksatz löschen: ": "legacy.m019",
  "Im Browser nur Vorschau: Die Sprachfunktionen laufen in der Windows-App.": "legacy.m020",
  "Lokaler Server wird geprüft …": "legacy.m021",
  "Eine kleine Übertragung kommt an …": "legacy.m022",
  "Da ist er · Kopf und Hände sind sichtbar": "legacy.m023",
  "Bis gleich · löst sich im Rauschen auf …": "legacy.m024",
  "Desktop-Anfrage wird abgebrochen.": "legacy.m026",
  "Sprachausgabe gestoppt. Du kannst weiterfragen.": "legacy.m027",
  "Die Desktop-Sprachantwort konnte nicht gesendet werden. Bitte erneut fragen.": "legacy.m029",
  "Bildanalyse nicht verfügbar.": "legacy.m030",
  "Desktop-Anfrage abgebrochen. Du kannst weiterfragen.": "legacy.m031",
  "💻 Ich prüfe den PC …": "legacy.m032",
  "📂 Ich starte das Programm …": "legacy.m033",
  "🧠 Ich speichere deinen Merksatz …": "legacy.m034",
  "🛒 Ich suche bei Idealo …": "legacy.m035",
  "🌐 Ich öffne Chrome …": "legacy.m036",
  "🌐 Ich suche im Internet …": "legacy.m037",
  "🛒 Idealo-Suche geöffnet – Roboter antwortet …": "legacy.m045",
  "🌐 Chrome-Aufruf erledigt – Roboter antwortet …": "legacy.m046",
  "🌐 Suchergebnis gefunden – Roboter antwortet …": "legacy.m047",
  "Suchantwort konnte nicht an den Roboter übermittelt werden.": "legacy.m048",
  "Desktop-Sprachantwort wird erstellt.": "legacy.m049",
  "Maussteuerbefehl nicht verfügbar.": "legacy.m050",
  "Sprachantwort konnte nicht angefordert werden. Bitte erneut fragen.": "legacy.m051",
  "Desktop-Sprachausgabe beendet. Du kannst weiterfragen.": "legacy.m052",
  "Die Sprachantwort ist fehlgeschlagen. Prüfe API-Guthaben und Modellzugriff.": "legacy.m053",
  "Sitzung von OpenAI beendet. Mikrofon aus.": "legacy.m054",
  "15-Minuten-Sicherheitslimit erreicht. Mikrofon aus.": "legacy.m055",
  " Verbindung wird aufgebaut …": "legacy.m056",
  "Gemini hat das Sitzungs-Setup nicht bestätigt. Prüfe Modell, API-Key-Typ und Gemini-Live-Zugriff.": "legacy.m057",
  "Für Gemini bitte den Rastermodus beenden. OpenAI kann Raster und Gespräch gemeinsam verwenden.": "legacy.m058",
  "Der lokale Modus bietet Text, aber kein vollständiges Realtime-Audio.": "legacy.m059",
  "Mikrofonberechtigung wird angefragt …": "legacy.m060",
  "Mikrofon im Browser nicht verfügbar. Windows-Mikrofonzugriff prüfen.": "legacy.m061",
  "Verbindung mit OpenAI wird aufgebaut …": "legacy.m062",
  "🟢 Live: Sprich mit mir! Nach 45 Sekunden Gesprächspause schalte ich ab.": "legacy.m067",
  "Live-Gespräch beendet. Mikrofon aus.": "legacy.m070",
  "ICE-Zeitüberschreitung. Firewall/Netzwerk prüfen.": "legacy.m071",
  "Gemini Live: WebSocket geöffnet, Setup wird bestätigt …": "legacy.m072",
  "Sprachverbindung geschlossen. Mikrofon für Live aus.": "legacy.m074",
  "Koordinatennetz beendet.": "legacy.m075",
  "Bitte zuerst ein Feld auswählen.": "legacy.m076",
  "Bildschirmkonfiguration geändert. Koordinatennetz bitte neu starten.": "legacy.m077",
  "Mauseinstellungen übernommen.": "legacy.m078",
  "Maussteuerung ist im Schlafmodus nicht freigegeben.": "legacy.m079",
  "Koordinatennetz ist nur unter Windows verfügbar.": "legacy.m080",
  "Rasterstart abgebrochen.": "legacy.m081",
  "Koordinatennetz aktiv. Lokale Sprachsteuerung, keine Klicks.": "legacy.m082",
  "Bitte zuerst das Koordinatennetz anzeigen.": "legacy.m083",
  "Ungültige Sichtbarkeit.": "legacy.m084",
  "Raster-Sichtbarkeit geändert.": "legacy.m085",
  "Raster auf den vollständigen Monitor zurückgesetzt.": "legacy.m086",
  "Eine Unterteilung zurück.": "legacy.m087",
  "Maussteuerung ist nur unter Windows verfügbar.": "legacy.m089",
  "Windows-Maussteuerung lieferte ungültige Daten.": "legacy.m090",
  "Mausziel erreicht.": "legacy.m091",
  "Windows-Maussteuerung nicht verfügbar. Bitte die Desktop-Sitzung prüfen.": "legacy.m092",
  "Windows-Maussteuerung beendet.": "legacy.m093",
  "Mausziel liegt außerhalb des gewählten Monitors.": "legacy.m094",
  "Ungültige Mausgeschwindigkeit.": "legacy.m095",
  "Lokale Raster-Spracherkennung benötigt Windows.": "legacy.m096",
  "Lokale Raster-Spracherkennung konnte nicht gestartet werden.": "legacy.m097",
  "Lokale Raster-Spracherkennung lieferte ungültige Daten.": "legacy.m098",
  "Lokale Raster-Spracherkennung nicht verfügbar. Deutsche Windows-Sprachfunktionen und Mikrofon prüfen.": "legacy.m099",
  "Lokale Raster-Spracherkennung beendet. Maus-Stopp im Steuerungsfenster bleibt verfügbar.": "legacy.m100",
  "Mausbefehl abgebrochen.": "mouse.cancelled",
  "Zu viele wartende Mausbefehle. Bitte warten oder Stopp verwenden.": "mouse.busy",
  "Viereransicht: Bitte links oben, rechts oben, links unten oder rechts unten wählen. A1–D5 gilt hier nicht.": "mouse.quadOnly",
  "Zielbereich in vier Richtungsfelder unterteilt.": "mouse.subdividedQuad",
  "Zielbereich erneut in A1–D5 unterteilt.": "mouse.subdividedMatrix",
  "Einen Auswahl- oder Unterteilungsschritt zurück.": "mouse.backStep",
  "Ebene {depth} · Links oben / rechts oben / links unten / rechts unten · Stopp · Zurück": "mouse.helpQuad",
  "Links oben": "mouse.quad.left-top",
  "Rechts oben": "mouse.quad.right-top",
  "Links unten": "mouse.quad.left-bottom",
  "Rechts unten": "mouse.quad.right-bottom",
  "LO": "mouse.quadShort.left-top",
  "RO": "mouse.quadShort.right-top",
  "LU": "mouse.quadShort.left-bottom",
  "RU": "mouse.quadShort.right-bottom"
 }
};if(typeof module==='object'&&module.exports)module.exports=data;if(typeof window!=='undefined')window.RobotCatalog=data;})();
