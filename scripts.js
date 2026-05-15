
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