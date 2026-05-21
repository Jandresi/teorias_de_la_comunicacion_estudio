
// La data estructurada de los dos PDFs
const conjuntoDeInformacion = [
  {
    pdf: "1. Introducción a las teorías de la comunicación y teorías del paradigma funcionalista",
    descripcion: "Un recorrido por la evolución de los medios y cómo el funcionalismo analiza su impacto en la estabilidad social.",
    ideas: [
      {
        titulo: "¿Qué son las teorías de la comunicación?",
        icono: "📡",
        contenido: "No son solo conceptos académicos; son el reflejo de cómo pensaba la sociedad en cada época sobre el poder de los medios. Estudian el contexto histórico, quiénes participan y qué papel juegan los medios en la política.<br><br>Se dividen en cuatro etapas:<br>1. 1910-20: La prensa y la opinión pública.<br>2. 1920-50: La radio y la propaganda en regímenes totalitarios.<br>3. 1960-80: El filtro de la personalidad y lo que la gente necesita de los medios.<br>4. 1990-Hoy: Redes sociales, emociones y audiencias que participan activamente.",
        ejemplo: "En los años 30 se temía que la radio manipulara mentes; hoy estudiamos cómo un hilo de Twitter puede cambiar la percepción de una marca."
      },
      {
        titulo: "El Paradigma Funcionalista",
        icono: "🧱",
        contenido: "Ve a la sociedad como un sistema equilibrado (como un organismo) donde cada parte tiene una función para mantener la paz. Los medios no están para romper el sistema, sino para ayudarlo a funcionar.<br><br>Sus funciones principales son:<br>1. <b>Movilizadora</b>: Ajustar la oferta a lo que la gente pide.<br>2. <b>Manipulativa</b>: Servir como herramienta de poder.<br>3. <b>Control social</b>: Vigilar los intereses de las élites.<br>4. <b>Reproductiva</b>: Mantener la cultura y las normas sociales.",
        ejemplo: "Un programa de televisión educativa que enseña valores ciudadanos está cumpliendo una función de socialización o reproductiva."
      },
      
      {
        titulo: "Modelo de la Influencia Personal",
        icono: "🗣️",
        contenido: "Propone que los mensajes no nos llegan 'crudos' desde la tele o el radio, sino que pasan por un mediador: el <b>Líder de Opinión</b>.<br><br>Este líder tiene tres claves:<br>- Se especializa en un área (tecnología, política, etc.).<br>- Es carismático y tiene acceso a mucha información.<br>- Actúa como un filtro que explica y traduce el mensaje para su círculo cercano.",
        ejemplo: "Antes era el párroco o el profesor del pueblo; hoy es el experto en tech que te explica en un video si vale la pena comprar un nuevo procesador."
      },
      
      {
        titulo: "Teoría de los Usos y Gratificaciones",
        icono: "🎮",
        contenido: "Aquí el jefe es la audiencia. Los medios no nos 'hacen' cosas, nosotros <b>usamos</b> los medios para sentirnos bien o resolver algo.<br><br>Nuestras necesidades se dividen en:<br>1. <b>Estructurales</b>: Usar la radio como ruido de fondo mientras trabajas o para marcar tu rutina.<br>2. <b>Relacionales</b>: Ver una serie para tener tema de conversación, para escapar de la soledad o para aprender habilidades sociales.",
        ejemplo: "Poner un podcast de crímenes reales no es solo por la info, es por el entretenimiento y la 'compañía' que te hace mientras lavas los platos."
      },
      {
        titulo: "Modelo de la Propaganda",
        icono: "🕶️",
        contenido: "Dice que los medios nos venden una 'libertad' falsa porque en realidad están controlados por cinco filtros que censuran lo que no le conviene al poder:<br>1. <b>Propiedad</b>: Los dueños son mega-corporaciones.<br>2. <b>Publicidad</b>: Viven de lo que pagan los anunciantes.<br>3. <b>Sourcing</b>: Solo usan fuentes oficiales (Gobierno/Policía).<br>4. <b>Flak</b>: El miedo a las represalias o críticas fuertes.<br>5. <b>Ideología</b>: Se rechaza todo lo que vaya contra el sistema establecido.",
        ejemplo: "Cuando un medio grande no profundiza en un escándalo ambiental de una minera porque esa minera es su principal patrocinador."
      },
      
      {
        titulo: "Conceptos Clave para el Examen",
        icono: "📋",
        contenido: "<b>Paradigma</b>: Es la 'lente' o el marco mental que un grupo de científicos comparte para investigar.<br><br><b>Investigación Cualitativa</b>: Busca entender el 'por qué' y el significado detrás de las acciones de la gente, no solo contar números.<br><br><b>Etnografía</b>: Es cuando el investigador se sumerge en la comunidad que estudia para vivir su día a día y entender su cultura desde adentro.",
        ejemplo: "Hacer una encuesta es cuantitativo; irte a vivir un mes con una comunidad gamer para entender sus códigos de honor es etnografía."
      }
    ]
  },
  {
    pdf: "2. Materialismo histórico y teoría crítica",
    descripcion: "Análisis de cómo la economía moldea nuestra cultura y cómo la industria del entretenimiento nos mantiene conformes.",
    ideas: [
      {
        titulo: "Materialismo Histórico",
        icono: "⚙️",
        contenido: "Propuesto por Marx y Engels. Básicamente dice que la historia no la cambian las ideas mágicas o la 'suerte', sino la forma en que los seres humanos producen lo que necesitan para vivir.<br><br>Lo que comemos, cómo trabajamos y quién es el dueño de las máquinas determina cómo pensamos, qué leyes tenemos y qué tipo de arte consumimos.",
        ejemplo: "En el feudalismo pensábamos en 'honor' y 'reyes' porque la economía era la tierra; hoy pensamos en 'éxito' y 'emprendimiento' porque nuestra economía es el capital."
      },
      {
        titulo: "Infraestructura vs. Superestructura",
        icono: "🏗️",
        contenido: "Imagina un edificio:<br>1. <b>Infraestructura</b>: Es el sótano (la base). Son las fuerzas de producción (máquinas) y las relaciones de clase. Si el sótano es capitalista, todo lo de arriba cambia.<br>2. <b>Superestructura</b>: Son los pisos de arriba. Aquí está el Estado, las leyes, la religión, la educación y los medios de comunicación que justifican la base.",
        ejemplo: "Si la economía (base) necesita gente que trabaje 12 horas, la educación y los medios (superestructura) te dirán que 'madrugar es de ganadores'."
      },
      
      {
        titulo: "La Ideología",
        icono: "🎭",
        contenido: "Es un conjunto de ideas que nos hacen ver el mundo de una forma 'natural', pero que en realidad solo benefician a los que tienen el poder. Es como un filtro que nos impide ver la explotación real.<br><br>Su función es lograr que aceptemos la realidad tal cual es sin cuestionarla, creyendo que 'así han sido siempre las cosas'.",
        ejemplo: "La idea de que 'el pobre es pobre porque quiere' es una ideología que protege el sistema para que no se cuestionen las fallas económicas."
      },
      {
        titulo: "Teoría Crítica (Escuela de Frankfurt)",
        icono: "🎓",
        contenido: "Un grupo de pensadores (como Adorno y Horkheimer) que dijeron: 'Oigan, la razón ya no se usa para liberar al hombre, sino para dominarlo'.<br><br>A diferencia de otras teorías que solo describen el mundo, la <b>Teoría Crítica</b> busca transformarlo y denunciar cómo la cultura nos vuelve esclavos del consumo.",
        ejemplo: "Cuestionar por qué nos sentimos obligados a comprar el último teléfono cada año es hacer teoría crítica sobre el consumo."
      },
      {
        titulo: "La Industria Cultural",
        icono: "🎬",
        contenido: "A diferencia del arte antiguo, la cultura hoy se fabrica en masa como si fueran salchichas. El cine, la música y la TV no buscan hacernos pensar, sino entretenernos para que estemos cansados y no nos quejemos.<br><br>Características:<br>- <b>Estandarización</b>: Todo suena igual y sigue la misma fórmula.<br>- <b>Consumo pasivo</b>: No requiere esfuerzo mental.",
        ejemplo: "Esa canción de pop que tiene exactamente el mismo ritmo y estructura que las otras 10 del ranking está diseñada para ser un producto, no una obra de arte."
      },
      
      {
        titulo: "Aura y Cultura de Masas",
        icono: "✨",
        contenido: "Walter Benjamin explicaba que una obra de arte original tenía un 'aura' (algo único y místico). Con la llegada de la fotografía y el cine, el arte se puede reproducir mil veces.<br><br>Esto hace que el arte sea accesible para todos, pero al mismo tiempo pierde su 'alma' y se convierte en una mercancía barata.",
        ejemplo: "Ver una pintura original en un museo tiene 'aura'; tener la misma imagen impresa en un cuaderno de supermercado es cultura de masas."
      }
    ]
  },
  {
    pdf: "3. Introducción a los estudios culturales y la escuela de los estudios culturales ingleses",
    descripcion: "El giro hacia la audiencia activa: cómo la cultura popular se convierte en un espacio de resistencia y disputa política.",
    ideas: [
      {
        titulo: "Origen: La Escuela de Birmingham",
        icono: "🏫",
        contenido: "Surgida en Inglaterra en los años 50, esta escuela rompe con la idea de que los medios nos manipulan como zombis. Propone que <b>la audiencia es activa, crítica y creativa</b>; no recibimos los mensajes de forma lineal, sino que los adaptamos a nuestra propia realidad.",
        ejemplo: "Mientras otras teorías dicen que la publicidad nos obliga a comprar, Birmingham analiza cómo usamos esa publicidad para crear estilos propios que a veces van en contra de la marca."
      },
          {
        titulo: "La Cultura como Disputa Política",
        icono: "⚔️",
        contenido: "Stuart Hall plantea que la cultura no son solo hábitos, sino un <b>ámbito de disputa de poder</b>. En lo que consumimos a diario hay jerarquías y mecanismos de inclusión o exclusión. Por eso, estudiar la moda o la música popular es estudiar política.",
        ejemplo: "El surgimiento de una subcultura juvenil (como los punk o los raperos) no es solo música, es una forma de pelear por un espacio político en la sociedad."
      },
      {
        titulo: "Richard Hoggart: Resistencia Obrera",
        icono: "✊",
        contenido: "Hoggart analizó cómo la clase obrera mantenía una <b>resistencia interior</b> frente a la cultura de masas. Aunque la industria cultural intenta homogeneizar todo, la gente conserva sus ritos, actitudes y modos de vida del 'viejo orden' para no perder su identidad.",
        ejemplo: "Una familia que mantiene sus tradiciones culinarias y reuniones de barrio a pesar de la presión de las grandes cadenas de entretenimiento masivo."
      },
          {
        titulo: "Raymond Williams: Todo un Modo de Vida",
        icono: "🌍",
        contenido: "Para Williams, la cultura es la <b>totalidad comunicativa</b> de una época: es todo un modo de vida. Defiende que los medios no solo son comerciales, sino que tienen un <b>poder educativo</b> enorme para despertar el pensamiento crítico e independiente.",
        ejemplo: "Proyectos como Radio Sutatenza en Colombia, que usaron los medios para educar y alfabetizar al campesinado, reflejan la visión de Williams sobre los medios como herramientas de progreso social."
      },
      {
        titulo: "Sujetos como Productores de Contenido",
        icono: "📱",
        contenido: "Williams adelantó una idea muy moderna: los medios son medios de producción y <b>los consumidores también pueden ser productores</b>. No hay una jerarquía donde el emisor es el único que manda; la comunicación es socialmente productiva por ambas partes.",
        ejemplo: "El uso de WhatsApp por parte de migrantes para gestionar la educación de sus hijos a distancia: transforman una herramienta de mensajería en un sistema de soporte familiar y educativo."
      },
          {
        titulo: "Conceptos Clave (Glosario)",
        icono: "📋",
        contenido: "<b>Alta Cultura vs. Popular</b>: Birmingham elimina esta división; lo popular (cine, publicidad, moda) es tan importante de estudiar como la literatura clásica.<br><br><b>Subjetividad</b>: Los medios son dispositivos que ayudan a construir quiénes somos, nuestros valores y nuestra identidad social.",
        ejemplo: "Analizar un hilo de Twitter o una tendencia de TikTok hoy es tan válido académicamente como analizar una obra de Shakespeare."
      }
    ]
  },
  {
    pdf: "4. Estudios culturales norteamericanos y latinoamericanos",
    descripcion: "La evolución de los estudios culturales hacia la audiencia, la cultura popular y la identidad en contextos locales.",
    ideas: [
      {
        titulo: "Estudios Culturales Norteamericanos",
        icono: "🇺🇸",
        contenido: "A diferencia de la escuela inglesa (más enfocada en el marxismo y la lucha de clases), esta variante se centró en la <b>reacción de la audiencia</b> y los usos prácticos de los medios. Surgieron en los años 70 interesados por cómo la cultura popular y de masas funcionaba en una sociedad capitalista como Estados Unidos.",
        ejemplo: "Investigar por qué un programa de televisión específico es un éxito rotundo en los suburbios estadounidenses y qué papel juega en la vida cotidiana de esas familias."
      },
      {
        titulo: "Estudios Culturales Latinoamericanos",
        icono: "🌎",
        contenido: "Esta vertiente no estudia los medios como algo aislado, sino como parte de la <b>complejidad social y política de América Latina</b>. Se enfocan en la comunicación mediada por la identidad, la desigualdad, la resistencia y los procesos de democratización de la región.",
        ejemplo: "Analizar cómo los movimientos sociales en América Latina utilizan la radio comunitaria para defender sus territorios frente a grandes corporaciones."
      },
      
      {
        titulo: "El giro hacia la audiencia",
        icono: "👥",
        contenido: "Ambas corrientes comparten un interés profundo por la audiencia. Ya no se trata de preguntar qué hacen los medios con la gente (como en el funcionalismo), sino <b>qué hace la gente con los medios</b> y cómo los interpretan según su propio contexto cultural.",
        ejemplo: "El estudio de cómo diferentes grupos sociales (indígenas, jóvenes, sectores urbanos) decodifican un mismo mensaje televisivo de formas totalmente distintas."
      },
      {
        titulo: "La Cultura como campo de batalla",
        icono: "🏟️",
        contenido: "Tanto en el norte como en el sur, se entiende que la cultura popular (TV, música, redes) no es solo entretenimiento, sino un terreno donde se disputan significados. Es donde se construye, negocia o resiste la hegemonía cultural.",
        ejemplo: "Cuando un grupo minoritario usa las redes sociales para desafiar un estereotipo que los medios tradicionales han impuesto sobre ellos."
      },
      
      {
        titulo: "Conceptos para el análisis",
        icono: "🔍",
        contenido: "<b>Decodificación</b>: La forma en que cada persona interpreta un mensaje mediático basada en su experiencia, clase social y cultura.<br><br><b>Cultura popular</b>: El objeto de estudio principal, visto como un espacio creativo y político, no como un producto simple o trivial.",
        ejemplo: "Si una empresa lanza una publicidad, el estudio cultural analiza no solo el anuncio, sino cómo la audiencia lo 'lee', lo cuestiona o lo ignora en su vida diaria."
      }
    ]
  }
];

function initialize() {
  const pdfTabs = document.getElementById('pdfTabs');
  let navItems = '';

  conjuntoDeInformacion.forEach((info, i) => {
    navItems += `
    <li class="nav-item">
      <button class="nav-link ${i===0 ? 'active' : ''}" onclick="cambiarPDF(${i}, this)">📄 ${info.pdf}</button>
    </li>`;
  });

  pdfTabs.innerHTML = navItems;
  renderizar(0)
}

function renderizar(index) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  const pdfData = conjuntoDeInformacion[index];

  pdfData.ideas.forEach(idea => {
    const cardHtml = `
      <div class="col-md-6 col-lg-4">
        <div class="card p-3">
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <div class="icon-box">${idea.icono}</div>
              <h5 class="card-title fw-bold text-info">${idea.titulo}</h5>
            </div>
            <p class="card-text text-light">${idea.contenido}</p>
            <hr style="border-color: #444">
            <p class="small text-secondary">
                <strong>💡 Ejemplo:</strong> ${idea.ejemplo}
            </p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHtml;
  });
}

function cambiarPDF(index, element) {
  // Manejo de UI de pestañas
  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Renderizar nueva info
  renderizar(index);
}