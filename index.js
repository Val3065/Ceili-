const D={
/* ─── BÁSICOS ─── */
corte:{n:'green',ic:'🩹',nm:'Corte / herida',kw:['corte','herida','cortada','navaja','cuchillo','tijeras','vidrio'],A:[
  {id:'i',q:'¿Cómo es el sangrado?',op:[{t:'La sangre fluye rápido y no para en 5 minutos',s:'abundante'},{t:'Es leve o ya casi paró',s:'leve'}]},
  {id:'abundante',ins:1,no:'red',ti:'Sangrado fuerte → Urgencias',ps:[
    'Presiona la herida con fuerza usando una tela o prenda limpia. No levantes la tela aunque se empape de sangre — agrega más encima.',
    'Levanta el brazo o la pierna lesionada lo más arriba posible, por encima del nivel de tu corazón (más alto que tu pecho).',
    'Pide a alguien que llame al 911 mientras mantienes la presión.',
    'No sueltes la presión hasta que llegue la ayuda.'
  ],w:'No intentes hacer un torniquete casero (amarrar con cordones, cinturones, etc.) a menos que la hemorragia sea muy masiva y no se controle de ninguna otra forma.',s911:1},
  {id:'leve',ins:1,ps:[
    'Lávate las manos con agua y jabón antes de tocar la herida.',
    'Enjuaga la herida con agua limpia del grifo durante al menos 1 minuto para sacar suciedad.',
    'Presiona suavemente con una gasa o tela limpia hasta que pare el sangrado (5 a 10 minutos).',
    'Desinfecta con Microdacyn, Isodine (povidona yodada naranja) o cualquier antiséptico de farmacia.',
    'Cubre con una curita o gasa y cinta adhesiva médica.',
    'Cambia la curita cada 24 horas o si se moja.'
  ],w:'Ve al médico si: los bordes de la herida están muy abiertos y no se juntan, fue con un objeto oxidado (puede necesitarse vacuna antitetánica), o si aparece pus, enrojecimiento que se extiende o fiebre.',
  tip:'Señal de infección: calor, enrojecimiento que crece alrededor de la herida, pus amarillo o verde. Si aparece, ve al médico ese mismo día.'}
]},
 
sangrado_nasal:{n:'green',ic:'🩸',nm:'Sangrado de nariz',kw:['sangrado nasal','epistaxis','nariz sangra','sangre nariz'],A:[
  {id:'i',q:'¿El sangrado lleva más de 20 minutos sin parar, o hubo un golpe fuerte en la cabeza o cara?',op:[{t:'Sí, no para o hubo golpe fuerte',s:'grave'},{t:'No, empezó hace poco',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Sangrado de nariz severo → Urgencias',ps:[
    'Inclina la cabeza un poco hacia adelante (que mire al piso), NO hacia atrás.',
    'Aprieta la parte blanda de la nariz (justo abajo del hueso) con tus dedos.',
    'Llama al 911 o ve a urgencias mientras mantienes la presión.'
  ],w:'No inclines la cabeza hacia atrás — la sangre se va a la garganta, puede provocar náuseas o asfixia.',s911:1},
  {id:'leve',ins:1,ps:[
    'Siéntate y mantén la cabeza inclinada un poco hacia adelante (mirando al piso).',
    'Aprieta con tus dedos la parte blanda de la nariz (la que cede al presionar, no el hueso).',
    'Mantén la presión sin soltar durante 10 a 15 minutos. Respira por la boca.',
    'Pon hielo o una bolsa fría envuelta en una tela sobre el puente de la nariz (la parte de arriba, sobre el hueso).',
    'Si el sangrado para, no te suenes fuerte por lo menos 1 hora.'
  ],w:'NO inclines hacia atrás. NO metas algodón seco dentro de la nariz — puede pegarse y al sacarlo reanuda el sangrado.',
  tip:'Si te sangra la nariz con frecuencia sin razón aparente, consulta al médico — puede ser señal de presión arterial alta.'}
]},
 
ojo:{n:'green',ic:'👁️',nm:'Objeto en el ojo',kw:['ojo','partícula ojo','polvo ojo','objeto ojo','químico ojo','arena ojo'],A:[
  {id:'i',q:'¿Qué entró al ojo?',op:[{t:'Polvo, pestaña, arena o partícula pequeña',s:'leve'},{t:'Algo punzante, vidrio o metal incrustado',s:'grave'},{t:'Salpicadura de químico, blanqueador, pintura o cualquier líquido',s:'quimico'}]},
  {id:'leve',ins:1,ps:[
    'No te frotes el ojo — empeora la irritación y puede rayar la córnea.',
    'Parpadea varias veces rápido para intentar que las lágrimas saquen la partícula.',
    'Enjuaga el ojo con agua limpia durante 2 minutos: inclina la cabeza con ese ojo hacia abajo y deja correr el agua.',
    'Si la molestia continúa después de enjuagar, ve al médico ese mismo día.'
  ],w:'No uses pinzas, palillos ni ningún objeto para sacar la partícula.'},
  {id:'grave',ins:1,no:'red',ti:'Objeto incrustado en el ojo → Emergencia',ps:[
    'NO intentes sacar el objeto bajo ninguna circunstancia.',
    'Cubre el ojo afectado con un vaso de cartón o plástico sin presionarlo — solo para que nada lo toque.',
    'Cubre también el ojo sano (si solo mueves uno, el otro lo acompaña y puede agravar el daño).',
    'Ve a urgencias oftalmológicas o llama al 911.'
  ],w:'Solo un médico puede retirar un objeto incrustado con seguridad. Intentarlo en casa puede causar pérdida permanente de la vista.',s911:1},
  {id:'quimico',ins:1,no:'red',ti:'Químico en el ojo → Lava ahora mismo',ps:[
    'LAVA el ojo con agua limpia ahora mismo — mantén el chorro durante 15 a 20 minutos sin parar.',
    'Mantén el ojo abierto con los dedos mientras lo lavas. Cada segundo importa.',
    'Usa solo agua — no colirios, no leche, no ningún otro líquido.',
    'Mientras lavas, pide a alguien que llame al 911 o que te lleve a urgencias.'
  ],w:'Los segundos cuentan. Mientras más tiempo tarda en lavarse, mayor el daño. No pares de lavar.',s911:1}
]},
 
picadura:{n:'green',ic:'🐝',nm:'Picadura de insecto',kw:['picadura','abeja','avispa','mosco','araña','hormiga','insecto','piquete'],A:[
  {id:'i',q:'¿Hay señales de reacción alérgica fuerte?',h:'Señales de alarma: le cuesta respirar, la cara o la garganta se hinchan, le salen ronchas por todo el cuerpo, se marea mucho o se desmaya.',op:[{t:'Sí, tiene alguna de esas señales',s:'anafilaxia'},{t:'No, solo dolor o picazón en el lugar',s:'leve'}]},
  {id:'anafilaxia',ins:1,no:'red',ti:'Reacción alérgica grave → 911',ps:[
    'Llama al 911 YA o pide a alguien que llame mientras actúas.',
    'Si la persona tiene un autoinyector de adrenalina (lo habrán recetado antes, como EpiPen), aplícalo en el muslo — incluso a través de la ropa.',
    'Acuéstala con las piernas levantadas (a menos que le cueste respirar — en ese caso, siéntala).',
    'Si deja de respirar, empieza RCP (ver guía RCP en el botón de arriba).',
    'Quédate con ella hasta que llegue la ambulancia.'
  ],w:'Una reacción alérgica grave puede matar en minutos. No esperes a ver si mejora sola.',s911:1},
  {id:'leve',ins:1,ps:[
    'Si fue una abeja, saca el aguijón raspando con una tarjeta de crédito o tus uñas — no lo pellizques porque exprime más veneno.',
    'Lava la zona con agua y jabón.',
    'Pon hielo envuelto en una tela durante 10 minutos.',
    'Si pica mucho, toma un antihistamínico de farmacia: Loratadina (Clarityne), Cetirizina (Zyrtec) o Clorfeniramina (Clorotrimeton). Sigue las indicaciones del empaque.',
    'No te rasques — puede infectarse.'
  ],tip:'Observa durante 30 minutos. Si aparece hinchazón que se extiende o dificultad para respirar, ve a urgencias.'}
]},
 
alacrán:{n:'green',ic:'🦂',nm:'Picadura de alacrán',kw:['alacrán','escorpión','picadura alacrán','piquete alacrán'],A:[
  {id:'i',q:'¿La persona es un niño menor de 10 años, adulto mayor, o tiene síntomas generales?',h:'Síntomas que indican urgencia: babea mucho, tiene lagrimeo, vista borrosa, dificultad para tragar, temblores, se siente muy mal.',op:[{t:'Sí, niño pequeño, adulto mayor o tiene síntomas generales',s:'grave'},{t:'No, adulto sano y solo duele en el lugar',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Picadura de alacrán → Urgencias',ps:[
    'Ve a urgencias de inmediato — existe antídoto (antiveneno de alacrán) que se aplica en el hospital.',
    'Mantén en reposo y tranquilidad — el movimiento acelera la absorción del veneno.',
    'No le des ningún medicamento en casa.',
    'Si puedes, lleva al alacrán muerto para identificarlo (con cuidado, en un frasco).'
  ],w:'En niños pequeños la picadura de alacrán puede ser mortal en pocas horas. No esperes.',s911:1},
  {id:'leve',ins:1,ps:[
    'Lava con agua y jabón.',
    'Pon hielo envuelto en tela en el lugar de la picadura.',
    'Toma un analgésico como Paracetamol (Tempra, Tylenol) para el dolor.',
    'Observa durante 2 horas — si aparece cualquier síntoma más allá del dolor local, ve a urgencias.'
  ],tip:'Aunque el dolor disminuya, si hay hormigueo en la lengua o la cara, ve al médico.'}
]},
 
astilla:{n:'green',ic:'🪵',nm:'Astilla / espina',kw:['astilla','espina','clavo','objeto piel','cactus'],A:[
  {id:'i',ins:1,ps:[
    'Lávate las manos con agua y jabón. Limpia la zona de la astilla con alcohol (cualquier alcohol de farmacia) o Isodine.',
    'Desinfecta también unas pinzas con alcohol o pasando un cerillo cerca de las puntas y dejando enfriar.',
    'Agarra la astilla lo más cerca posible de la piel, en el mismo ángulo en que entró.',
    'Jala con un movimiento firme y directo — sin doblarla para no romperla.',
    'Limpia la zona de nuevo con agua y antiséptico.',
    'Cubre con una curita.'
  ],w:'Si está muy profunda, si se rompió adentro o si la zona se pone roja y caliente o sale pus, ve al médico.',
  tip:'Si la astilla está cerca del ojo, NO intentes sacarla tú mismo — ve al médico.'}
]},
 
golpe:{n:'green',ic:'💢',nm:'Golpe / moretón',kw:['golpe','moretón','contusión','chichón','golpe cabeza'],A:[
  {id:'i',q:'¿El golpe fue en la cabeza?',op:[{t:'Sí, golpe en la cabeza',s:'cabeza'},{t:'No, fue en brazo, pierna u otro lugar del cuerpo',s:'cuerpo'}]},
  {id:'cabeza',q:'¿Tiene alguno de estos síntomas después del golpe?',h:'Pérdida del conocimiento aunque sea por unos segundos, vomitar, convulsiones, confusión o no saber dónde está, ver doble, una pupila más grande que la otra.',op:[{t:'Sí, tiene uno o más de esos síntomas',s:'cabeza_grave'},{t:'No, está bien y consciente',s:'cabeza_leve'}]},
  {id:'cabeza_grave',ins:1,no:'red',ti:'Golpe en la cabeza con síntomas → Emergencia',ps:[
    'Llama al 911 de inmediato.',
    'No muevas a la persona si sospechas que pudo haberse lastimado el cuello o la espalda (caída de altura, accidente de coche, etc.).',
    'Mantén a la persona quieta y abrigada.',
    'Si vomita y no hay riesgo de columna, voltéala de lado para que no se ahogue.',
    'No le des medicamentos, comida ni agua.'
  ],w:'Nunca dejes sola a una persona con golpe en la cabeza. Los síntomas graves a veces aparecen horas después.',s911:1},
  {id:'cabeza_leve',ins:1,ps:[
    'Pon hielo envuelto en una tela (no hielo directo en la piel) sobre el chichón durante 15 minutos.',
    'Observa durante las siguientes 24 horas.',
    'Puedes darle Paracetamol (Tylenol, Tempra) para el dolor.',
    'NO le des aspirina — puede aumentar un posible sangrado interno.'
  ],w:'Ve a urgencias si después del golpe aparece: dolor de cabeza que empeora, vomitar, confusión o mucho sueño inusual.',
  tip:'Despierta a la persona cada 2 horas durante la noche para verificar que responde normalmente.'},
  {id:'cuerpo',ins:1,ps:[
    'Pon hielo envuelto en una tela durante 15 a 20 minutos.',
    'Sube y apoya el brazo o la pierna afectada más arriba del nivel de tu corazón (más alto que tu pecho) para bajar la hinchazón.',
    'Reposa y evita usar la zona lastimada.',
    'Ibuprofeno (Advil, Motrin) o Paracetamol si tienes dolor — sigue las indicaciones del empaque.'
  ],w:'Si hay una deformidad visible (el hueso se ve chueco), o el dolor no mejora en 2 días, ve al médico para descartar una fractura.'}
]},
 
ampolla:{n:'green',ic:'💧',nm:'Ampolla',kw:['ampolla','burbuja piel','rozadura','ampolla pie'],A:[
  {id:'i',q:'¿La ampolla está cerrada o ya se reventó?',op:[{t:'Cerrada (la piel está intacta)',s:'int'},{t:'Reventada (sale líquido o la piel está abierta)',s:'rot'}]},
  {id:'int',ins:1,ps:[
    'No la revientes — la piel que la cubre protege contra infecciones.',
    'Lava suavemente con agua y jabón.',
    'Cubre con una curita grande o una gasa con cinta médica, acolchando para que no roce.',
    'Evita poner presión sobre esa zona.'
  ],tip:'Si es muy grande o muy dolorosa, un médico puede drenarla de forma segura y limpia.'},
  {id:'rot',ins:1,ps:[
    'Lava con agua y jabón muy suavemente.',
    'No arranques la piel suelta — actúa como una barrera natural contra infecciones.',
    'Aplica antiséptico suave: Microdacyn o Isodine diluido.',
    'Cubre con una gasa no adherente (la venden en farmacias, son las gasas que no se pegan a la herida).',
    'Cambia la gasa cada día o cuando se moje.'
  ],w:'Señales de infección: enrojecimiento que crece alrededor, pus, fiebre. Si aparecen, ve al médico ese mismo día.'}
]},
 
/* ─── INTERMEDIOS ─── */
quemadura:{n:'yellow',ic:'🔥',nm:'Quemadura',kw:['quemadura','quemado','vapor','agua caliente','fuego','plancha','sol','quemadura solar'],A:[
  {id:'i',q:'¿Cómo se ve la quemadura?',h:'Grado 1: solo enrojecimiento y dolor, sin ampollas. Grado 2: ampollas o piel muy roja y húmeda con mucho dolor. Grado 3: piel blanca, café oscuro o negra, o una zona que no duele (los nervios están destruidos).',op:[{t:'Solo enrojecimiento, sin ampollas',s:'g1'},{t:'Hay ampollas o la piel está muy roja con mucho dolor',s:'g2'},{t:'La piel está blanca, café oscura o negra, o hay una zona que no duele',s:'g3'}]},
  {id:'g1',ins:1,ti:'Quemadura leve (1er grado)',ps:[
    'Mete la zona quemada bajo agua fría del grifo durante 10 a 20 minutos. Esto es lo más importante.',
    'No uses hielo directo sobre la quemadura — puede dañar más el tejido.',
    'Aplica gel de aloe vera (sábila) o una crema hidratante sin perfume (como Lubriderm o Nivea sin fragancia).',
    'Cubre ligeramente con una gasa limpia.',
    'Para el dolor: Paracetamol (Tylenol, Tempra) o Ibuprofeno (Advil) — sigue las indicaciones del empaque.'
  ],w:'NO uses mantequilla, pasta dental, clara de huevo ni ningún remedio casero — empeoran la quemadura y aumentan el riesgo de infección.',
  tip:'Protege la zona quemada del sol durante la cicatrización (mínimo 2 semanas), de lo contrario puede quedar una mancha oscura permanente.'},
  {id:'g2',q:'¿Qué tan grande es la quemadura?',op:[{t:'Pequeña — menor que la palma de tu mano',s:'g2l'},{t:'Grande, o está en la cara, manos, pies, genitales o una articulación',s:'g2g'}]},
  {id:'g2l',ins:1,ti:'Quemadura con ampollas (leve)',ps:[
    'Pon agua fría del grifo sobre la zona durante 15 a 20 minutos.',
    'NO revientes las ampollas — la piel que las cubre protege contra infecciones.',
    'No pongas nada encima de las ampollas.',
    'Cubre con una gasa estéril suelta (que no apriete).',
    'Ve al médico ese mismo día para que la evalúen.'
  ],w:'Las quemaduras con ampollas siempre deben ser vistas por un médico aunque parezcan pequeñas.'},
  {id:'g2g',ins:1,no:'red',ti:'Quemadura grande → Urgencias',ps:[
    'Llama al 911 o ve a urgencias de inmediato.',
    'Pon agua fría por máximo 5 minutos — no más, porque puede provocar hipotermia.',
    'Cubre con una sábana o tela limpia húmeda sin apretar.',
    'No arranques ropa que esté pegada a la quemadura.',
    'Mantén a la persona abrigada y tranquila.'
  ],w:'NO uses hielo, mantequilla ni remedios caseros. No revientes ampollas.',s911:1},
  {id:'g3',ins:1,no:'red',ti:'Quemadura grave (3er grado) → Emergencia',ps:[
    'Llama al 911 inmediatamente.',
    'No toques la quemadura ni intentes limpiarla.',
    'Cubre con una tela limpia seca sin presionar.',
    'No intentes despegar ropa pegada a la piel.',
    'Acuesta a la persona y sube sus piernas si es posible (para tratar el estado de shock).'
  ],w:'Que no duela en esa zona es señal de quemadura muy grave — los nervios están destruidos. Requiere hospitalización urgente.',s911:1}
]},
 
hemorragia:{n:'yellow',ic:'🩸',nm:'Sangrado abundante',kw:['hemorragia','sangrado fuerte','sangre abundante','sangrado no para'],A:[
  {id:'i',q:'¿La sangre sale a chorros rítmicos (como latidos) o muy rápido sin parar?',op:[{t:'Sí, sale a chorros o muy rápido',s:'arterial'},{t:'No, fluye continuo pero algo controlable',s:'venosa'}]},
  {id:'arterial',ins:1,no:'red',ti:'Sangrado muy fuerte → 911',ps:[
    'Llama al 911 YA o pide a alguien que llame.',
    'Presiona la herida con ambas manos con toda la fuerza que puedas.',
    'No quites la presión aunque la tela se empape — agrega más tela encima.',
    'Si es en un brazo o pierna y no cede con presión: amarra un torniquete improvisado (cinturón, corbata, cinta) 5 a 7 cm arriba de la herida y anota la hora exacta en que lo pusiste.',
    'Sube el miembro afectado más alto que el nivel del corazón (más alto que el pecho).'
  ],w:'Un sangrado arterial puede causar la muerte en minutos. No sueltes la presión bajo ninguna circunstancia.',s911:1},
  {id:'venosa',ins:1,ps:[
    'Presiona firmemente con una gasa o tela limpia.',
    'Mantén la presión constante durante 10 a 15 minutos sin levantar la tela para ver.',
    'Sube el brazo o la pierna afectada más arriba que el nivel del pecho si puedes.',
    'Una vez controlado, limpia y venda la herida.',
    'Ve al médico — puede necesitar puntos de sutura.'
  ],w:'Si el sangrado no para después de 15 minutos de presión continua, ve a urgencias de inmediato.'}
]},
 
torcedura:{n:'yellow',ic:'🦶',nm:'Torcedura / esguince',kw:['torcedura','esguince','tobillo','muñeca','ligamento','torcido'],A:[
  {id:'i',q:'¿Puede poner peso en la parte lesionada o moverla aunque duela?',op:[{t:'Sí, con dolor pero puede caminar o mover',s:'leve'},{t:'No, el dolor es tan fuerte que no puede ni apoyar',s:'grave'}]},
  {id:'leve',ins:1,ti:'Torcedura — Método PRICE',ps:[
    'P — PROTEGE: No uses esa articulación ni hagas movimientos bruscos.',
    'R — REPOSA: No le des peso ni la uses durante 24 a 48 horas.',
    'I — HIELO: Pon hielo envuelto en una tela durante 15 a 20 minutos, cada 2 horas. Nunca hielo directo en la piel.',
    'C — COMPRIME: Envuelve con una venda elástica firme pero que no corte la circulación. Si los dedos se ponen morados o hormiguean, afloja.',
    'E — ELEVA: Mantén el brazo o pierna más arriba que el nivel de tu pecho (recuéstate y sube la pierna con almohadas).',
    'Para el dolor: Ibuprofeno (Advil, Motrin) o Paracetamol — sigue las indicaciones del empaque.'
  ],w:'Si el dolor o la hinchazón no mejoran en 2 días, o si el hueso duele mucho al tocarlo, ve al médico — puede ser fractura.'},
  {id:'grave',ins:1,no:'red',ti:'Posible fractura → Médico',ps:[
    'No fuerces el movimiento ni intentes "acomodar" nada.',
    'Improvisa una tablilla para inmovilizar (ver cómo hacerla más abajo).',
    'Pon hielo envuelto en tela mientras esperas o te trasladas.',
    'Ve a urgencias para una radiografía — solo así saben si es esguince grave o fractura.'
  ],w:'No intentes enderezar el hueso. Solo con una radiografía se puede saber con certeza.',
  tip:'Tablilla improvisada: usa una tabla, una revista doblada firme, un palo grueso o un paraguas cerrado. Asegúrala con tiras de tela por encima y por debajo de la lesión — no sobre ella. Que no apriete demasiado.'}
]},
 
fractura:{n:'yellow',ic:'🦴',nm:'Posible fractura',kw:['fractura','hueso roto','fracturado','hueso'],A:[
  {id:'i',q:'¿El hueso atravesó la piel o hay una herida abierta en la zona?',op:[{t:'Sí, el hueso está visible o hay una herida profunda ahí',s:'abierta'},{t:'No, la piel está intacta',s:'cerrada'}]},
  {id:'abierta',ins:1,no:'red',ti:'Fractura abierta → Emergencia',ps:[
    'Llama al 911 inmediatamente.',
    'NO intentes regresar el hueso a su lugar.',
    'Cubre la herida con una gasa húmeda y limpia sin presionar sobre el hueso.',
    'No muevas el hueso ni masajees la zona.',
    'Controla el sangrado presionando alrededor de la herida (no sobre el hueso).'
  ],w:'Nunca limpies ni toques el hueso. Alto riesgo de infección grave y daño a vasos sanguíneos.',s911:1},
  {id:'cerrada',q:'¿La posible fractura es en el cuello, la espalda o la cadera/pelvis?',op:[{t:'Sí, o no estoy seguro/a de si puede ser',s:'columna'},{t:'No, es en brazo, pierna, mano o pie',s:'extremidad'}]},
  {id:'columna',ins:1,no:'red',ti:'Posible fractura de columna → No muevas',ps:[
    'NO muevas a la persona bajo ningún concepto.',
    'Llama al 911 de inmediato.',
    'Habla con ella para mantenerla tranquila y quieta.',
    'Solo si no respira, inicia RCP con mucho cuidado de no mover el cuello.',
    'Espera al personal médico.'
  ],w:'Mover a alguien con fractura de columna puede causar parálisis permanente. Solo el personal de emergencias está capacitado para moverlos.',s911:1},
  {id:'extremidad',ins:1,ps:[
    'No endereces el hueso ni intentes acomodarlo — inmovilízalo en la posición en que está.',
    'Tablilla improvisada: usa una tabla, una revista doblada, un palo grueso o cualquier cosa rígida. Asegúrala con tiras de tela por encima y por debajo de la fractura (no sobre ella). Que quede firme pero sin cortar la circulación.',
    'Pon hielo envuelto en tela sobre la zona.',
    'Sube el miembro si puedes.',
    'Ve a urgencias para una radiografía.'
  ],w:'La tablilla debe inmovilizar la articulación que está por encima Y la que está por debajo de la fractura. Si se ponen los dedos morados, afloja.'}
]},
 
caida:{n:'yellow',ic:'⬇️',nm:'Caída',kw:['caída','caer','resbalón','tropiezo','se cayó'],A:[
  {id:'i',q:'¿La persona perdió el conocimiento, o cayó desde una altura mayor a su propia estatura?',op:[{t:'Sí, se desmayó o cayó desde altura considerable (escalera, árbol, techo)',s:'grave'},{t:'No, es una caída en el mismo nivel y está consciente',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Caída grave → 911',ps:[
    'Llama al 911 de inmediato.',
    'No muevas a la persona — puede haber lesión en la columna.',
    'Verifica si respira y tiene pulso.',
    'Si no respira, inicia RCP (ver guía RCP).',
    'Mantén la cabeza quieta en posición neutra (sin doblar el cuello).'
  ],w:'Toda caída con pérdida de conciencia se trata como posible lesión de columna hasta que el médico diga lo contrario.',s911:1},
  {id:'leve',q:'¿Hay mucho dolor al tocar alguna zona, deformidad visible (algo chueco) o no puede mover alguna parte?',op:[{t:'Sí, hay deformidad o dolor intenso al tocar',s:'fractura_pos'},{t:'No, solo raspones, moretones o dolor leve',s:'leve2'}]},
  {id:'fractura_pos',ins:1,no:'red',ti:'Posible fractura → Médico',ps:[
    'No muevas ni masajees la zona.',
    'Inmoviliza con una tablilla improvisada (tabla, revista doblada, palo) asegurada con tiras de tela.',
    'Pon hielo envuelto en tela.',
    'Ve a urgencias para una radiografía.'
  ],w:'No intentes enderezar nada ni masajear. Solo una radiografía confirma si es fractura.'},
  {id:'leve2',ins:1,ps:[
    'Limpia los raspones con agua y jabón abundante.',
    'Aplica antiséptico (Microdacyn, Isodine) y cubre con gasa o curita.',
    'Pon hielo envuelto en tela sobre los moretones durante 15 minutos.',
    'Reposa la zona afectada.',
    'Si el dolor no mejora en 2 días, ve al médico.'
  ],tip:'En personas mayores de 65 años, cualquier caída debe evaluarse por un médico aunque no haya dolor evidente — el riesgo de fractura de cadera es alto.'}
]},
 
atropellamiento:{n:'yellow',ic:'🚗',nm:'Atropellamiento',kw:['atropellamiento','atropellado','coche','carro','auto','accidente vial','ciclista atropellado'],A:[
  {id:'i',q:'¿La persona está consciente y puede responder preguntas?',op:[{t:'No responde, está inconsciente o muy confundida',s:'grave'},{t:'Sí, está consciente y habla',s:'cons'}]},
  {id:'grave',ins:1,no:'red',ti:'Atropellamiento grave → 911',ps:[
    'Llama al 911 de inmediato.',
    'NO muevas a la persona — puede haber lesiones en la columna aunque no las veas.',
    'Verifica si respira. Si no respira, inicia RCP sin mover el cuello.',
    'Controla sangrados visibles con presión directa con tela limpia.',
    'Mantén a la persona abrigada y tranquila mientras esperas la ambulancia.',
    'Si el tráfico es un peligro, señaliza el área — pero no muevas a la persona lesionada.'
  ],w:'Los daños internos de un atropellamiento no siempre se ven por fuera. Aunque parezca que "solo" tiene raspones, puede haber hemorragia interna. SIEMPRE requiere evaluación médica urgente.',s911:1},
  {id:'cons',ins:1,no:'red',ti:'Atropellamiento — siempre urgencias',ps:[
    'Llama al 911 aunque la persona se vea bien.',
    'Pide a la persona que no se mueva — puede haber lesiones que todavía no siente (por el shock).',
    'Controla sangrados visibles con presión directa.',
    'Pregúntale: ¿le duele el cuello? ¿puede mover los brazos y las piernas?',
    'Si dice que le duele el cuello o no puede mover extremidades: trata como posible lesión de columna — NO lo muevas.',
    'Cúbrela con una manta si está disponible para prevenir hipotermia.',
    'Anota el tiempo del accidente para decirle al médico.'
  ],w:'Todo atropellamiento requiere evaluación médica aunque la persona "se sienta bien". Los daños internos pueden aparecer horas después.',s911:1}
]},
 
intoxicacion:{n:'yellow',ic:'🧪',nm:'Intoxicación',kw:['intoxicación','veneno','tóxico','químico ingerido','medicamento exceso','envenenamiento','pastillas'],A:[
  {id:'i',q:'¿Cómo está la persona?',op:[{t:'Consciente y alerta',s:'cons'},{t:'Inconsciente, convulsionando o no respira bien',s:'grave'}]},
  {id:'grave',ins:1,no:'red',ti:'Intoxicación grave → 911',ps:[
    'Llama al 911 INMEDIATAMENTE.',
    'Si no respira, inicia RCP.',
    'NO le provoques el vómito.',
    'Guarda el envase del producto para mostrárselo al médico.',
    'Si fue en la piel: retira la ropa contaminada y lava con agua abundante durante 15 minutos.'
  ],w:'NUNCA provoques el vómito en intoxicaciones por químicos, productos de limpieza o gasolina — pueden quemar el esófago al subir.',s911:1},
  {id:'cons',q:'¿Qué tipo de sustancia ingirió?',op:[{t:'Medicamentos (pastillas, jarabe)',s:'meds'},{t:'Producto de limpieza o químico (blanqueador, cloro, thinner, etc.)',s:'quim'},{t:'Alcohol en exceso',s:'alcohol'}]},
  {id:'meds',ins:1,no:'red',ti:'Intoxicación por medicamentos → Urgencias',ps:[
    'Llama al 911 o al Centro Antivenenos: 800 290 0024.',
    'Anota qué tomó, cuánto y a qué hora.',
    'NO le provoques el vómito salvo que el médico o el antivenenos te lo indique.',
    'Lleva el frasco o empaque al hospital.',
    'Mantén a la persona despierta y no la dejes sola.'
  ],w:'Cualquier sobredosis requiere atención médica urgente aunque la persona se vea bien — los síntomas pueden aparecer horas después.',s911:1},
  {id:'quim',ins:1,no:'red',ti:'Intoxicación por químico → Urgencias',ps:[
    'Llama al 911 de inmediato.',
    'NO le provoques el vómito — los químicos queman el esófago al subir.',
    'Si lo inhaló, saca a la persona al exterior a respirar aire fresco.',
    'Si fue en la piel: retira la ropa con cuidado y lava con agua abundante 15 minutos.',
    'Lleva el envase al hospital para que sepan exactamente qué químico fue.'
  ],w:'No le des leche, agua ni ningún otro líquido sin indicación del médico o antivenenos.',s911:1},
  {id:'alcohol',ins:1,ps:[
    'Coloca a la persona de lado (posición de recuperación) para que si vomita no se ahogue: acuéstala de costado, pierna de arriba doblada hacia adelante, brazo de arriba hacia adelante.',
    'Nunca la dejes sola.',
    'No le des café — no sobria a nadie.',
    'Cúbrela con una manta para que no baje su temperatura.',
    'Si pierde el conocimiento o no responde: llama al 911 de inmediato.'
  ],w:'La intoxicación por alcohol grave puede causar la muerte. Si no responde a estímulos, si sus labios se ponen azules, o si no respira normalmente: llama al 911 ya.'}
]},
 
mordedura:{n:'yellow',ic:'🐾',nm:'Mordedura de animal',kw:['mordedura','mordida','perro','gato','animal','rabia','mordió'],A:[
  {id:'i',q:'¿La herida es profunda, amplia, está en la cara o cuello, o fue de un animal silvestre o desconocido?',op:[{t:'Sí, o el animal es callejero, silvestre o desconocido',s:'grave'},{t:'No, es superficial de una mascota conocida y vacunada',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Mordedura grave → Urgencias',ps:[
    'Controla el sangrado presionando con una tela limpia.',
    'Lava con agua y jabón abundante durante al menos 5 minutos — esto es fundamental para bajar el riesgo de infección y rabia.',
    'Ve a urgencias de inmediato.',
    'Si puedes, anota los datos del dueño del animal y si tiene vacunas.',
    'El médico determinará si necesitas vacuna antirrábica y antitetánica.'
  ],w:'Las mordeduras de animal tienen alto riesgo de infección grave, incluyendo rabia y tétanos. La vacuna antirrábica puede necesitarse incluso si el animal parece sano.',s911:1},
  {id:'leve',ins:1,ps:[
    'Lava con agua y jabón durante al menos 5 minutos.',
    'Aplica antiséptico (Isodine, Microdacyn).',
    'Cubre con gasa o curita.',
    'Ve al médico de todos modos para evaluar si necesitas vacuna antitetánica o seguimiento.'
  ],w:'Toda mordedura debe ser evaluada por un médico. Las bacterias en la boca de los animales pueden causar infecciones graves aunque la herida parezca pequeña.'}
]},
 
mareo:{n:'yellow',ic:'💫',nm:'Mareo / vértigo',kw:['mareo','vértigo','mareado','equilibrio','náuseas mareo'],A:[
  {id:'i',q:'El mareo va junto con alguno de estos síntomas?',h:'Dolor en el pecho, un lado del cuerpo entumecido o sin fuerza, dificultad para hablar o las palabras salen mal, visión doble, pérdida del conocimiento.',op:[{t:'Sí, tiene alguno de esos síntomas',s:'grave'},{t:'No, es solo mareo y quizás náusea',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Mareo con síntomas neurológicos → 911',ps:[
    'Llama al 911 inmediatamente.',
    'Sienta o acuesta a la persona de forma segura para que no se caiga.',
    'No le des nada de beber ni comer.',
    'Monitorea que siga respirando.'
  ],w:'El mareo con entumecimiento o dificultad para hablar puede ser señal de un derrame cerebral (ACV). Cada minuto sin tratamiento destruye millones de neuronas.',s911:1},
  {id:'leve',ins:1,ps:[
    'Sienta o acuesta a la persona en un lugar seguro para evitar una caída.',
    'Pide que fije la vista en un punto fijo y quieto.',
    'Ofrece agua en sorbos pequeños si no tiene náusea intensa.',
    'Ventila el espacio y evita ruidos y luz fuerte.',
    'Evita movimientos bruscos de cabeza.'
  ],tip:'Si el mareo aparece al incorporarse (pasar de acostado a parado) puede ser vértigo posicional — un médico puede enseñar ejercicios específicos para aliviarlo.'}
]},
 
fiebre:{n:'yellow',ic:'🌡️',nm:'Fiebre alta',kw:['fiebre','temperatura','calentura','39 grados','40 grados'],A:[
  {id:'i',q:'¿La temperatura es de 39°C o más, hay convulsiones, manchas en la piel o el cuello está muy rígido?',op:[{t:'Sí, uno o más de esos',s:'grave'},{t:'No, menos de 39°C y tolerable',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Fiebre alta → Urgencias',ps:[
    'Ve a urgencias de inmediato.',
    'Mientras vas: pon paños de agua fría (no helada) en frente, cuello y axilas.',
    'Si hay convulsión en un niño: ponlo de lado, aleja objetos peligrosos, no metas nada en su boca.',
    'No le des aspirina a menores de 16 años (puede causar una enfermedad grave llamada Síndrome de Reye).'
  ],w:'Fiebre mayor a 40°C, manchas rojas en la piel que no desaparecen al presionar con un vaso, cuello muy rígido o convulsiones = emergencia. Llama al 911.',s911:1},
  {id:'leve',ins:1,ps:[
    'Paracetamol (Tylenol, Tempra) o Ibuprofeno (Advil) siguiendo las indicaciones del empaque.',
    'Dale mucho líquido: agua, suero oral (Pedialyte o similar) o caldos.',
    'Paños de agua fresca (no helada, no con alcohol) en frente, cuello y axilas.',
    'Ventila el cuarto y no le pongas demasiada ropa o cobijas.',
    'Mide la temperatura cada 30 minutos.'
  ],w:'Ve al médico si: la fiebre no baja en 48 horas, sube de 40°C, la persona tiene menos de 3 meses de vida, o aparecen manchas en la piel.'}
]},
 
reaccion_alergica:{n:'yellow',ic:'🤧',nm:'Reacción alérgica',kw:['alergia','reacción alérgica','urticaria','ronchas','hinchazón','alérgico'],A:[
  {id:'i',q:'¿Qué síntomas tiene?',op:[{t:'Solo ronchas, picazón o una zona hinchada localizada',s:'leve'},{t:'Se le está hinchando la garganta, le cuesta respirar o se está desmayando',s:'grave'}]},
  {id:'leve',ins:1,ps:[
    'Quita o aleja lo que causó la reacción si se puede (alimento, planta, animal).',
    'Dale un antihistamínico de farmacia sin receta: Loratadina (Clarityne), Cetirizina (Zyrtec) o Clorfeniramina (Clorotrimeton). Sigue las indicaciones del empaque.',
    'Pon hielo envuelto en tela sobre la zona hinchada si hay inflamación localizada.',
    'Observa durante al menos 1 hora por si empeora.'
  ],w:'Si aparece dificultad para respirar, hinchazón de la garganta o los labios, o se marea mucho — ve a urgencias de inmediato.'},
  {id:'grave',ins:1,no:'red',ti:'Reacción alérgica grave (anafilaxia) → 911',ps:[
    'Llama al 911 INMEDIATAMENTE.',
    'Si tiene un autoinyector de adrenalina (lo habrán recetado antes, como EpiPen), aplícalo en el muslo exterior ahora mismo, incluso a través de la ropa.',
    'Acuéstala con las piernas elevadas (a menos que le cueste respirar — en ese caso, siéntala).',
    'Si deja de respirar, inicia RCP (ver guía RCP).',
    'No la dejes sola hasta que llegue la ambulancia.'
  ],w:'La anafilaxia puede matar en minutos. No esperes a ver si mejora — llama al 911 ya.',s911:1}
]},
 
panico:{n:'yellow',ic:'😰',nm:'Crisis de pánico',kw:['pánico','ataque de pánico','ansiedad','crisis','corazón acelerado','no puedo respirar ansiedad'],A:[
  {id:'i',q:'¿Estás seguro de que es una crisis de pánico y no una emergencia física?',h:'Señales de alarma que indican emergencia real (no pánico): dolor en el pecho que se irradia al brazo, mandíbula o espalda; labios o dedos azules; persona mayor de 40 años con primer episodio; síntomas nuevos que nunca había tenido.',op:[{t:'No estoy seguro / puede ser algo físico real',s:'descartar'},{t:'Sí, ya le ha pasado antes y los médicos lo han confirmado',s:'panico_c'}]},
  {id:'descartar',ins:1,no:'red',ti:'Primero descarta emergencia médica',ps:[
    'Ve a urgencias o llama al 911 para descartar infarto, embolia u otras causas físicas.',
    'Un ataque de pánico y un infarto pueden sentirse muy similares — solo el médico puede distinguirlos con certeza.'
  ],w:'Nunca asumir que es pánico sin haberlo descartado médicamente antes, especialmente si es la primera vez o si la persona tiene factores de riesgo cardíaco.',s911:1},
  {id:'panico_c',ins:1,ps:[
    'Lleva a la persona a un lugar tranquilo y seguro.',
    'Habla con voz calmada: "Estás bien, esto va a pasar, estoy aquí contigo".',
    'Pídele que respire junto contigo: inhala contando 4 segundos, aguanta 2, exhala contando 6. Repite.',
    'Anclaje a la realidad: pídele que nombre 5 cosas que puede VER, 4 que puede TOCAR, 3 que puede OÍR.',
    'No la dejes sola hasta que el episodio pase (dura entre 5 y 20 minutos generalmente).'
  ],tip:'Una crisis de pánico no es peligrosa físicamente aunque se sienta aterrador. Si se repiten frecuentemente, buscar apoyo psicológico hace una gran diferencia.'}
]},
 
/* ─── EMERGENCIAS ─── */
atragantamiento:{n:'red',ic:'😮',nm:'Atragantamiento',kw:['atragantamiento','asfixia','Heimlich','garganta','no puede respirar','atragantado','objeto garganta'],A:[
  {id:'i',q:'¿Puede toser con fuerza o emitir algún sonido?',op:[{t:'Sí, tose fuerte o puede hablar aunque sea débil',s:'leve'},{t:'No puede toser, no emite sonido y no respira — silencio total',s:'grave'}]},
  {id:'leve',ins:1,ps:[
    'Anímala a seguir tosiendo — la tos fuerte es el mejor mecanismo para expulsar el objeto.',
    'No le metas los dedos a la boca ni le pegues en la espalda si tose con fuerza — puede empujar el objeto más adentro.',
    'Si la tos se debilita y ya no puede toser: pasa inmediatamente a la maniobra Heimlich.',
    'Llama al 911 si no mejora en pocos segundos.'
  ],w:'No introduzcas los dedos a ciegas en la boca — puedes empujar más el objeto.'},
  {id:'grave',ins:1,no:'red',ti:'Obstrucción total → Actúa AHORA',ps:[
    'Llama al 911 o pide a alguien que llame mientras actúas.',
    'Párate detrás de la persona.',
    'Rodea su cintura con tus brazos.',
    'Haz un puño con una mano y ponlo justo arriba del ombligo y abajo del esternón (el hueso del pecho).',
    'Cubre tu puño con la otra mano.',
    'Da empujones hacia adentro y hacia arriba con fuerza — como intentando levantar a la persona. Hasta 5 veces seguidas.',
    'Repite hasta que salga el objeto o la persona pierda el conocimiento.',
    'Si pierde el conocimiento: acuéstala y empieza RCP (ver guía RCP).'
  ],w:'En bebés menores de 1 año NO uses la maniobra Heimlich. Usa 5 golpes fuertes en la espalda con la palma (entre los omóplatos) alternados con 5 presiones en el pecho.',s911:1}
]},
 
inconsciente:{n:'red',ic:'😴',nm:'Persona inconsciente',kw:['inconsciente','desmayo','no reacciona','no responde','perdió el conocimiento'],A:[
  {id:'i',q:'¿La persona respira?',h:'Para verificar: pon tu mejilla cerca de su boca y nariz, y observa si el pecho sube y baja. Máximo 10 segundos.',op:[{t:'Sí, respira aunque sea lento',s:'respira'},{t:'No respira o no estoy seguro/a',s:'no_respira'}]},
  {id:'respira',ins:1,ps:[
    'Llama al 911 de inmediato.',
    'Coloca en posición de recuperación (de lado): dobla su pierna de arriba, estira el brazo de abajo, inclina su cabeza hacia atrás suavemente para que la vía aérea esté abierta.',
    'Afloja ropa apretada en cuello y pecho.',
    'Verifica cada 30 segundos que siga respirando.',
    'No le des nada de beber ni comer.',
    'Quédate con ella hasta la ambulancia.'
  ],w:'Una persona inconsciente aunque respire siempre requiere evaluación médica urgente.',s911:1},
  {id:'no_respira',ins:1,no:'red',ti:'No respira → RCP ahora mismo',ps:[
    'Llama al 911 o pide a alguien que llame mientras actúas.',
    'Acuéstala boca arriba sobre una superficie dura (piso).',
    'Entrelaza las manos y ponlas en el centro del pecho (sobre el esternón, el hueso del medio).',
    'Comprimes fuerte y rápido: al ritmo de la canción "Stayin\'  Alive" — unas 100 a 110 veces por minuto. Profundidad: unos 5 cm (como dos dedos).',
    'No pares hasta que respire o llegue la ambulancia.',
    'Para más detalles sobre RCP: toca el botón ❤️ RCP arriba.'
  ],w:'No temas hacerle daño — sin RCP la persona morirá. Actuar siempre es mejor que no hacer nada.',s911:1}
]},
 
respiracion:{n:'red',ic:'💨',nm:'Dificultad para respirar',kw:['dificultad respirar','falta de aire','asma','disnea','no puede respirar','ahogo'],A:[
  {id:'i',q:'¿La persona tiene diagnóstico de asma o EPOC y tiene su medicamento disponible?',op:[{t:'Sí, tiene su inhalador o medicamento a la mano',s:'asma'},{t:'No, o no sé la causa',s:'grave'}]},
  {id:'asma',ins:1,ps:[
    'Sienta a la persona inclinada ligeramente hacia adelante (apoyada en sus rodillas o en una mesa).',
    'Administra el inhalador broncodilatador (el de alivio rápido, generalmente azul): 1 o 2 puff.',
    'Espera 5 minutos. Si no mejora, dale 2 puff más.',
    'Anímala a respirar despacio: inhalar por la nariz, exhalar por la boca.',
    'Si no mejora en 15 minutos o empeora: llama al 911.'
  ],w:'Si los labios o las yemas de los dedos se ponen azules o morados (cianosis): llama al 911 INMEDIATAMENTE — es una señal de que no está llegando oxígeno suficiente.',s911:1},
  {id:'grave',ins:1,no:'red',ti:'Dificultad para respirar sin causa conocida → 911',ps:[
    'Llama al 911 inmediatamente.',
    'Sienta a la persona en la posición que le resulte más cómoda para respirar — generalmente inclinada hacia adelante. NO la acuestes.',
    'Afloja ropa apretada en cuello y pecho.',
    'Habla con calma para reducir la ansiedad — el miedo empeora la dificultad para respirar.',
    'No le des nada de beber.',
    'Observa continuamente hasta la llegada de la ambulancia.'
  ],w:'La dificultad para respirar puede ser señal de infarto, alergia grave, embolia pulmonar u otras emergencias. Siempre llama al 911.',s911:1}
]},
 
paro:{n:'red',ic:'❤️',nm:'Paro cardiorrespiratorio',kw:['paro cardíaco','infarto','corazón parado','RCP','resucitación','no respira no late'],A:[
  {id:'i',ins:1,no:'red',ti:'Paro cardiorrespiratorio → RCP inmediata',ps:[
    'Llama al 911 o pide a alguien que llame mientras actúas.',
    'Verifica: ¿no respira y no tiene pulso?',
    'Acuesta sobre el piso (superficie dura).',
    'Entrelaza las manos en el centro del pecho (sobre el esternón).',
    'Comprimes fuerte y rápido: al ritmo de "Stayin\'  Alive" — 100 a 110 por minuto, 5 cm de profundidad. Brazos rectos, usa tu peso.',
    'No pares hasta que respire o llegue la ambulancia.',
    'Para guía completa con animación: toca ❤️ RCP en la parte superior.'
  ],w:'Sin RCP la persona morirá en minutos. No esperes — actúa de inmediato. Si solo haces compresiones sin respiraciones, igual ayudas mucho.',s911:1}
]},
 
convulsiones:{n:'red',ic:'⚡',nm:'Convulsiones',kw:['convulsión','epilepsia','temblores','convulsiona','ataque epiléptico'],A:[
  {id:'i',ins:1,no:'red',ti:'Convulsiones — qué hacer',ps:[
    'Llama al 911.',
    'No sujetes a la persona ni intentes detener los movimientos — puede lesionarte a ti o a ella.',
    'Aleja objetos con los que pueda golpearse (sillas, mesas, objetos duros).',
    'Pon algo suave bajo su cabeza (una ropa doblada, una mochila blanda).',
    'Voltéala de lado si es posible — para que no se ahogue si vomita.',
    'Toma el tiempo: si la convulsión dura más de 5 minutos, es una emergencia mayor.',
    'Cuando termine, ponla de lado en posición de recuperación y quédate con ella — puede estar confundida.'
  ],w:'NUNCA metas nada en la boca durante una convulsión. Es un mito peligroso que las personas se tragan la lengua — es imposible. Meter objetos puede romper dientes o ahogarse.',s911:1}
]},
 
desmayo:{n:'red',ic:'🫥',nm:'Desmayo',kw:['desmayo','lipotimia','se desmayó','mareo extremo','perdió conocimiento','se fue'],A:[
  {id:'i',q:'¿Recuperó el conocimiento rápidamente (menos de 1 minuto)?',op:[{t:'Sí, ya está consciente y sabe dónde está',s:'rec'},{t:'No, sigue sin responder',s:'no_rec'}]},
  {id:'rec',ins:1,ps:[
    'Acuéstala y sube sus piernas unos 20 a 30 cm (apóyalas en una silla o almohadas).',
    'Afloja ropa apretada en el cuello y el pecho.',
    'Ofrece agua cuando esté completamente consciente y pueda tragar sin peligro.',
    'Ventila el espacio.',
    'Descansa al menos 15 minutos antes de intentar pararse, y hazlo muy despacio.'
  ],w:'Ve al médico si: el desmayo fue durante ejercicio intenso, hubo dolor en el pecho antes, o la persona tiene más de 50 años — puede indicar un problema del corazón.',
  tip:'Un desmayo que se repite sin causa clara siempre debe evaluarse médicamente.'},
  {id:'no_rec',ins:1,no:'red',ti:'Inconsciente → 911',ps:[
    'Llama al 911 de inmediato.',
    'Verifica si respira.',
    'Si respira: ponla de lado (posición de recuperación).',
    'Si no respira: inicia RCP (ver guía RCP).'
  ],s911:1}
]},
 
shock:{n:'red',ic:'🫀',nm:'Estado de shock',kw:['shock','choque','piel pálida','sudoración fría','presión baja','pulso débil'],A:[
  {id:'i',ins:1,no:'red',ti:'Estado de shock → 911 inmediato',ps:[
    'Llama al 911 INMEDIATAMENTE.',
    'Acuesta a la persona y sube sus piernas unos 30 cm (a menos que haya lesión en cabeza, cuello, espalda o las piernas).',
    'Cúbrela con una manta para que no baje su temperatura.',
    'No le des nada de beber ni comer.',
    'Controla cualquier sangrado visible presionando directamente con tela limpia.',
    'Habla con calma y tranquilidad.',
    'Observa su respiración continuamente.'
  ],w:'El shock puede ser mortal en minutos. Señales: piel pálida o azulada, sudoración fría y pegajosa, pulso muy rápido y débil, confusión o somnolencia extrema.',s911:1}
]},
 
electrocucion:{n:'red',ic:'⚡',nm:'Electrocución',kw:['electrocución','descarga eléctrica','corriente','electricidad','choque eléctrico'],A:[
  {id:'i',ins:1,no:'red',ti:'Electrocución → No toques a la persona',ps:[
    'NO toques a la persona si todavía está en contacto con la fuente eléctrica — puedes electrocutarte tú también.',
    'Apaga la corriente desde el interruptor o cortacircuitos principal si puedes hacerlo de forma segura.',
    'Si no puedes, usa un objeto NO conductor (madera seca, plástico duro, tela gruesa seca) para alejar a la persona de la fuente eléctrica.',
    'Llama al 911 de inmediato.',
    'Una vez que la fuente esté apagada y sea seguro acercarte: verifica si respira.',
    'Si no respira: inicia RCP.'
  ],w:'Una persona electrocutada puede tener quemaduras internas graves aunque la piel se vea bien por fuera. Siempre requiere evaluación médica urgente.',s911:1}
]},
 
ahogamiento:{n:'red',ic:'🌊',nm:'Ahogamiento',kw:['ahogamiento','ahogado','agua','casi ahogado','rescate acuático','se ahoga'],A:[
  {id:'i',ins:1,no:'red',ti:'Ahogamiento → Actúa de inmediato',ps:[
    'Saca a la persona del agua SOLO si puedes hacerlo de forma segura — no pongas tu propia vida en riesgo. Si no puedes, lanza algo que flote (tabla, pelota, soga, ropa) para que se sujete.',
    'Llama al 911 mientras actúas.',
    'Una vez fuera: verifica si respira.',
    'Si no respira: comienza con 5 respiraciones de rescate (boca a boca) y luego compresiones (RCP).',
    'Si hay posibilidad de que se haya clavado o golpeado la cabeza al caer: cuida el cuello al sacarla del agua.'
  ],w:'No pierdas tiempo intentando sacar agua de los pulmones — comienza RCP de inmediato. El tiempo es lo más crítico.',s911:1}
]},
 
hipotermia:{n:'red',ic:'🥶',nm:'Hipotermia / frío extremo',kw:['hipotermia','frío extremo','congelamiento','temperatura baja','frío'],A:[
  {id:'i',q:'¿Cómo está la persona?',op:[{t:'Tiembla mucho pero está consciente y responde',s:'leve'},{t:'Ya no tiembla, está muy confundida, inconsciente o no responde bien',s:'grave'}]},
  {id:'leve',ins:1,ps:[
    'Llévala a un lugar cálido y seco lo antes posible.',
    'Quita la ropa húmeda o mojada y envuelve con mantas secas.',
    'Cubre la cabeza — se pierde mucho calor por ahí.',
    'Si está completamente consciente, ofrece bebidas calientes como té o caldo (no alcohol ni café).',
    'El recalentamiento debe ser gradual — no uses agua muy caliente ni calor directo (estufas, bolsas de agua hirviendo).'
  ],w:'No frotes las extremidades con fuerza — puede dañar el tejido. El recalentamiento brusco también puede causar problemas al corazón.'},
  {id:'grave',ins:1,no:'red',ti:'Hipotermia severa → 911',ps:[
    'Llama al 911 inmediatamente.',
    'Mueve a la persona con mucho cuidado y suavidad — el corazón frío es muy frágil y los movimientos bruscos pueden provocar un paro.',
    'Envuelve con mantas para conservar el calor que le queda.',
    'No apliques calor directo en las extremidades.',
    'Si no respira: inicia RCP.'
  ],w:'Una persona con hipotermia severa puede parecer muerta pero ser rescatable. Continúa los esfuerzos hasta que llegue ayuda médica.',s911:1}
]},
 
golpe_calor:{n:'red',ic:'☀️',nm:'Golpe de calor',kw:['golpe de calor','insolación','calor extremo','insolado'],A:[
  {id:'i',q:'¿La piel está muy caliente y SECA (sin sudor), o la persona está confundida / no responde bien?',op:[{t:'Sí, piel muy caliente y seca, o hay confusión',s:'grave'},{t:'No, solo se siente mal y está sudando mucho',s:'leve'}]},
  {id:'grave',ins:1,no:'red',ti:'Golpe de calor → Emergencia',ps:[
    'Llama al 911 INMEDIATAMENTE.',
    'Lleva a la persona a un lugar fresco de inmediato (con aire acondicionado si es posible).',
    'Enfría rápido: moja con agua fría todo el cuerpo y abanica. Pon hielo o telas mojadas con agua fría en el cuello, las axilas y las ingles.',
    'No le des nada de beber si está confundida o no puede tragar bien.',
    'Si convulsiona: aleja objetos peligrosos y ponla de lado cuando termine.'
  ],w:'La piel muy caliente y SECA sin sudor es la señal de alarma más grave — el cuerpo ya no puede regular su temperatura. Sin tratamiento urgente puede causar daño cerebral permanente o muerte.',s911:1},
  {id:'leve',ins:1,ti:'Agotamiento por calor',ps:[
    'Lleva a un lugar fresco y ventilado.',
    'Acuesta con las piernas un poco elevadas.',
    'Afloja la ropa.',
    'Hidrata con agua o bebida con electrolitos (Gatorade, Pedialyte) en sorbos pequeños y frecuentes.',
    'Pon paños frescos en el cuello, frente y muñecas.',
    'Observa si mejora en 15 a 30 minutos.'
  ],w:'Si deja de sudar o se confunde: trata como golpe de calor y llama al 911.',
  tip:'La recuperación total puede tardar varias horas. Evita actividad física ese día y el siguiente.'}
]},
 
dolor_pecho:{n:'red',ic:'💗',nm:'Dolor en el pecho',kw:['dolor pecho','dolor corazón','opresión pecho','infarto','angina','me duele el pecho'],A:[
  {id:'i',ins:1,no:'red',ti:'Dolor en el pecho → 911 de inmediato',ps:[
    'Llama al 911 INMEDIATAMENTE — no esperes a ver si pasa solo.',
    'Sienta a la persona en posición cómoda, semi-recostada (espalda apoyada, no totalmente acostada).',
    'Afloja ropa apretada.',
    'Si tiene nitroglicerina recetada por su médico, adminístrala según le indicaron.',
    'Si el dolor no cede en 3 minutos y la persona no es alérgica a la aspirina: dale una aspirina de 500 mg para masticar (no tragar entera).',
    'Si pierde el conocimiento y no respira: inicia RCP (ver guía ❤️ RCP).'
  ],w:'Señales de infarto: dolor que se va al brazo izquierdo, a la mandíbula o a la espalda, acompañado de sudoración fría, náuseas o sensación de muerte. Cada minuto que pasa sin tratamiento destruye músculo cardíaco.',s911:1}
]},
 
acv:{n:'red',ic:'🧠',nm:'Derrame cerebral / ACV',kw:['ACV','derrame cerebral','stroke','parálisis','habla trabada','cara caída','derrame'],A:[
  {id:'i',ins:1,no:'red',ti:'Posible derrame cerebral → 911 ya',ps:[
    'Usa la prueba RÁPIDO para detectarlo:',
    'R — ROSTRO: Pídele que sonría. ¿Un lado de la cara cae o queda torcido?',
    'Á — ÁPÉNDICES (brazos): Pídele que suba ambos brazos. ¿Uno cae o no puede subirlo?',
    'P — PALABRAS: Pídele que repita una oración simple. ¿Las palabras salen confusas o no puede hablar?',
    'I — INMEDIATAMENTE: Si alguna de las anteriores es sí — llama al 911 YA y anota la hora exacta en que empezaron los síntomas.',
    'D — DATOS: Dile al operador del 911 y al médico la hora exacta de inicio. Es crucial para el tratamiento.',
    'No le des nada de comer ni beber. Quédate con ella.'
  ],w:'Un derrame cerebral tiene tratamiento efectivo solo en las primeras 4.5 horas. No lo lleves tú en coche — cada semáforo cuenta. Llama al 911.',s911:1}
]},
};
 
/* ═══════════════════════════════════════
   POBLAR GRIDS
═══════════════════════════════════════ */
const GG = document.getElementById('GG');
const GY = document.getElementById('GY');
const GR = document.getElementById('GR');
 
Object.entries(D).forEach(([id, e]) => {
  const b = document.createElement('button');
  const cls = e.n === 'green' ? 'cg' : e.n === 'yellow' ? 'cy' : 'cr';
  b.className = `card ${cls}`;
  b.innerHTML = `<span class="card-ic">${e.ic}</span>${e.nm}`;
  b.onclick = () => openM(id);
  (e.n === 'green' ? GG : e.n === 'yellow' ? GY : GR).appendChild(b);
});
 
/* ═══════════════════════════════════════
   BÚSQUEDA
═══════════════════════════════════════ */
const QSI = document.getElementById('QSI');
const QSR = document.getElementById('QSR');
 
QSI.addEventListener('input', () => {
  const q = QSI.value.toLowerCase().trim();
  QSR.innerHTML = '';
  if (!q) { QSR.classList.remove('vis'); return; }
 
  const res = Object.entries(D).filter(([id, e]) =>
    e.nm.toLowerCase().includes(q) || (e.kw && e.kw.some(k => k.includes(q)))
  ).slice(0, 10);
 
  if (!res.length) {
    QSR.innerHTML = '<div style="padding:.75rem 1rem;color:#64748b;font-size:.83rem">No se encontró nada. Prueba con otra palabra.</div>';
    QSR.classList.add('vis');
    return;
  }
 
  res.forEach(([id, e]) => {
    const d = document.createElement('div');
    d.className = 'srch-hit';
    const dot = e.n === 'green' ? 'sdg' : e.n === 'yellow' ? 'sdy' : 'sdr';
    d.innerHTML = `<span class="srch-dot ${dot}"></span><span>${e.ic}</span><span>${e.nm}</span>`;
    d.onclick = () => { closeQS(); openM(id); };
    QSR.appendChild(d);
  });
  QSR.classList.add('vis');
});
 
function closeQS() {
  QSI.value = '';
  QSR.innerHTML = '';
  QSR.classList.remove('vis');
}
 
/* ═══════════════════════════════════════
   OVERLAY EMERGENCIAS
═══════════════════════════════════════ */
function openEM()  { document.getElementById('EMOVL').classList.add('act'); }
function closeEM() { document.getElementById('EMOVL').classList.remove('act'); }
document.getElementById('EMOVL').addEventListener('click', e => {
  if (e.target === document.getElementById('EMOVL')) closeEM();
});
 
/* ═══════════════════════════════════════
   OVERLAY RCP + ANIMACIÓN
═══════════════════════════════════════ */
let rcpInterval = null;
let rcpRunning  = false;
let rcpCount    = 0;
const rcpBPM = 110;
const rcpMs  = Math.round(60000 / rcpBPM);
 
function openRCP()  { document.getElementById('RCPOVL').classList.add('act'); }
function closeRCP() { document.getElementById('RCPOVL').classList.remove('act'); stopRCP(); }
document.getElementById('RCPOVL').addEventListener('click', e => {
  if (e.target === document.getElementById('RCPOVL')) closeRCP();
});
 
function toggleRCP() {
  if (rcpRunning) stopRCP();
  else startRCP();
}
 
function startRCP() {
  rcpRunning = true;
  document.getElementById('RCPBTN').textContent = '⏸ Pausar';
  document.getElementById('RCPBTN').classList.add('active');
  updateRCPDisplay();
 
  rcpInterval = setInterval(() => {
    rcpCount++;
    updateRCPDisplay();
 
    // Animación del corazón
    const heart = document.getElementById('RCPHEART');
    if (heart) {
      heart.classList.remove('beat');
      void heart.offsetWidth; // fuerza reflow para reiniciar animación
      heart.classList.add('beat');
    }
 
    // Sonido
    try {
      const ctx  = new (window.AudioContext || window.webkitAudioContext)();
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = rcpCount % 30 === 0 ? 880 : 440;
      gain.gain.setValueAtTime(.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .08);
      osc.start();
      osc.stop(ctx.currentTime + .1);
    } catch (err) {}
  }, rcpMs);
}
 
function stopRCP() {
  rcpRunning = false;
  clearInterval(rcpInterval);
  document.getElementById('RCPBTN').textContent = '▶ Iniciar ritmo';
  document.getElementById('RCPBTN').classList.remove('active');
}
 
function resetRCPCount() {
  stopRCP();
  rcpCount = 0;
  updateRCPDisplay();
}
 
function updateRCPDisplay() {
  const rounds  = Math.floor(rcpCount / 30);
  const inRound = rcpCount % 30;
  let msg = rcpCount === 0
    ? 'Presiona "Iniciar" para ver el ritmo con sonido'
    : `Compresión ${rcpCount} | Ronda ${rounds + 1} — ${inRound}/30`;
  if (rcpCount > 0 && rcpCount % 30 === 0)
    msg = `✅ ${rounds} rondas completas — ahora 2 respiraciones de rescate`;
  document.getElementById('RCPCTR').textContent = msg;
}
 
/* ═══════════════════════════════════════
   MODAL PRINCIPAL
═══════════════════════════════════════ */
const OVL = document.getElementById('OVL');
const MH  = document.getElementById('MH');
const MB  = document.getElementById('MB');
let curE = null;
let hist = [];
 
function openM(id)  { curE = id; hist = []; renderM('i'); OVL.classList.add('act'); document.body.style.overflow = 'hidden'; }
function closeM()   { OVL.classList.remove('act'); document.body.style.overflow = ''; }
 
OVL.addEventListener('click', e => { if (e.target === OVL) closeM(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeM(); closeEM(); closeRCP(); }
});
 
function getN(nid) { return D[curE].A.find(n => n.id === nid); }
 
function renderM(nid) {
  const e    = D[curE];
  const node = getN(nid);
  const lv   = node.no || e.n;
  const lvTxt = lv === 'green' ? 'Atención en casa' : lv === 'yellow' ? 'Atención cuidadosa' : '⚠ Emergencia — llama al 911';
  const lvCls = lv === 'green' ? 'lvl-g' : lv === 'yellow' ? 'lvl-y' : 'lvl-r';
 
  MH.innerHTML = `
    <div class="m-ico">${e.ic}</div>
    <div>
      <div class="m-title">${node.ti || e.nm}</div>
      <div class="m-lvl ${lvCls}">${lvTxt}</div>
    </div>
    <button class="m-cls" onclick="closeM()">✕</button>
  `;
 
  MB.innerHTML = '';
 
  // Botón volver
  if (hist.length) {
    const bk = document.createElement('button');
    bk.className = 'btn-bk';
    bk.innerHTML = '← Volver';
    bk.onclick = () => { const p = hist.pop(); renderM(p); };
    MB.appendChild(bk);
  }
 
  if (node.ins) {
    // Pasos
    const w = document.createElement('div');
    w.className = 'instr';
    node.ps.forEach((p, i) => {
      const s = document.createElement('div');
      s.className = 'step';
      s.style.animationDelay = `${i * 0.05}s`;
      s.innerHTML = `<span class="snum">${i + 1}</span><span>${p}</span>`;
      w.appendChild(s);
    });
    MB.appendChild(w);
 
    if (node.w) {
      const b = document.createElement('div');
      b.className = 'warn';
      b.innerHTML = `<strong>⚠ No hagas esto:</strong> ${node.w}`;
      MB.appendChild(b);
    }
    if (node.tip) {
      const b = document.createElement('div');
      b.className = 'tip';
      b.innerHTML = `<strong>💡 Ten en cuenta:</strong> ${node.tip}`;
      MB.appendChild(b);
    }
    if (node.s911) {
      const a = document.createElement('a');
      a.href = 'tel:911';
      a.className = 'btn-911-m';
      a.innerHTML = '📞 Llamar al 911 ahora';
      MB.appendChild(a);
    }
 
  } else if (node.q) {
    const qb = document.createElement('div');
    qb.className = 'q-block';
    let h = `<div class="q-txt">${node.q}</div>`;
    if (node.h) h += `<div class="q-hint">ℹ️ ${node.h}</div>`;
    h += '<div class="opts">';
    node.op.forEach(op => {
      h += `<button class="opt" onclick="goTo('${nid}','${op.s}')"><span>▶</span><span>${op.t}</span><span class="opt-arrow">›</span></button>`;
    });
    h += '</div>';
    qb.innerHTML = h;
    MB.appendChild(qb);
  }
}
 
function goTo(from, nid) {
  hist.push(from);
  renderM(nid);
  document.getElementById('MOD').scrollTop = 0;
}