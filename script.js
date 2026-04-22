const studyData = [
  {
    id: "matematica",
    title: "Matemática",
    group: "Exatas",
    topics: [
      "4 operações",
      "MMC e MDC",
      "Notação científica",
      "Frações",
      "Números decimais e dízimas periódicas",
      "Porcentagem",
      "Regra de três (simples e composta)",
      "Equação e função do 1º grau",
      "Equação e função do 2º grau",
      "Fatoração",
      "Produtos notáveis",
      "Razão e proporção (escala)",
      "Conjuntos numéricos",
      "Juros simples e compostos",
      "Estatística",
      "Probabilidade",
      "Análise combinatória",
      "PA e PG",
      "Inequações",
      "Sistemas lineares",
      "Lógica proposicional",
      "Matrizes, determinantes e matriz inversa",
      "Polinômios",
      "Números complexos",
    ],
  },
  {
    id: "geometria",
    title: "Geometria",
    group: "Exatas",
    topics: [
      "Ângulos e retas",
      "Triângulos e semelhança",
      "Polígonos",
      "Prismas, cubos e paralelepípedos",
      "Cones, cilindros, esfera e pirâmides",
      "Troncos e sólidos",
      "Geometria plana",
      "Geometria analítica (reta e circunferência)",
      "Cônicas",
    ],
  },
  {
    id: "trigonometria",
    title: "Trigonometria",
    group: "Exatas",
    topics: [
      "Triângulo retângulo",
      "Círculo trigonométrico",
      "Funções trigonométricas",
      "Redução de quadrantes",
    ],
  },
  {
    id: "quimica",
    title: "Química",
    group: "Natureza",
    topics: [
      "Propriedades da matéria",
      "Estados físicos",
      "Separação de misturas",
      "Atomística e modelos atômicos",
      "Tabela periódica",
      "Ligações químicas (iônica, covalente, metálica)",
      "Forças intermoleculares",
      "Cálculos químicos",
      "Estequiometria",
      "NOX",
      "Ácidos, bases, sais e óxidos",
      "pH e pOH",
      "Hidrólise",
      "Eletroquímica",
      "Termoquímica",
      "Cinética química",
      "Equilíbrio químico e iônico",
      "Radioatividade",
      "Propriedades coligativas",
      "Soluções (concentração, diluição, titulação)",
      "Química orgânica (hidrocarbonetos, funções orgânicas, isomeria, polímeros, reações orgânicas)",
    ],
  },
  {
    id: "fisica",
    title: "Física",
    group: "Natureza",
    topics: [
      "Unidades de medida",
      "Cinemática (MU, MUV, vetorial)",
      "Lançamentos",
      "Leis de Newton",
      "Trabalho e energia",
      "Impulso e quantidade de movimento",
      "Movimento circular",
      "Gravitação",
      "Estática",
      "Hidrostática e hidrodinâmica",
      "Gases perfeitos",
      "Termologia (termometria, calorimetria, termodinâmica)",
      "Óptica (espelhos e lentes)",
      "Eletrostática",
      "Circuitos elétricos",
      "Potência elétrica",
      "Resistores",
      "Geradores e receptores",
      "Capacitores",
      "Eletromagnetismo",
      "Ondas",
      "Física moderna",
      "Astrofísica",
    ],
  },
  {
    id: "biologia",
    title: "Biologia",
    group: "Natureza",
    topics: [
      "Origem da vida",
      "Teorias evolutivas",
      "Citologia (membrana, citoplasma, núcleo)",
      "Mitose e meiose",
      "Histologia",
      "Reino Monera, Protista, Fungi, Plantae e Animalia",
      "Filos (poríferos até cordados)",
      "Vírus",
      "Genética (Leis de Mendel, linkage, genética do sexo, interação gênica)",
      "Sistema ABO",
      "Biotecnologia",
      "Ecologia (relações ecológicas, cadeias alimentares, sucessão, biomas, poluição)",
      "Fisiologia humana (todos os sistemas)",
      "Fisiologia vegetal",
      "Embriogênese",
    ],
  },
  {
    id: "geografia",
    title: "Geografia",
    group: "Humanas",
    topics: [
      "Ordem mundial",
      "Geopolítica",
      "Globalização",
      "Industrialização",
      "Agricultura e Revolução Verde",
      "Migrações",
      "População e teorias demográficas",
      "Energia",
      "Climas e fatores climáticos",
      "Vegetação",
      "Relevo",
      "Hidrografia",
      "Cartografia e fuso horário",
      "Impactos ambientais",
      "Modelos produtivos (Fordismo, Taylorismo, Toyotismo)",
      "Geografias regionais (UERJ, UFRGS, UFSC, UNICAMP, etc.)",
    ],
  },
  {
    id: "historia",
    title: "História",
    group: "Humanas",
    topics: [
      "Pré-história",
      "Antiguidade",
      "Idade Média",
      "Absolutismo",
      "Expansão marítima",
      "Reforma e Renascimento",
      "Revoluções (Industrial, Francesa, Inglesa, Russa)",
      "Independência dos EUA",
      "1ª e 2ª Guerra Mundial",
      "Guerra Fria",
      "Brasil (Colônia → Império → República → Ditadura → Redemocratização)",
      "Movimentos sociais",
      "Neocolonialismo",
      "Descolonização",
    ],
  },
  {
    id: "literatura",
    title: "Literatura",
    group: "Linguagens",
    topics: [
      "Trovadorismo",
      "Quinhentismo",
      "Barroco",
      "Arcadismo",
      "Romantismo (3 gerações)",
      "Realismo/Naturalismo",
      "Parnasianismo",
      "Simbolismo",
      "Pré-Modernismo",
      "Modernismo (3 fases)",
      "Vanguardas Europeias",
      "Tendências contemporâneas",
      "Obras obrigatórias (UFRGS, UNICAMP, FUVEST, UERJ, etc.)",
    ],
  },
  {
    id: "portugues",
    title: "Português",
    group: "Linguagens",
    topics: [
      "Fonética",
      "Figuras de linguagem",
      "Funções da linguagem",
      "Semântica",
      "Variações linguísticas",
      "Classes gramaticais",
      "Verbos e advérbios",
      "Conjunções",
      "Formação de palavras",
      "Período simples e composto",
      "Concordância nominal e verbal",
      "Regência nominal e verbal",
      "Crase",
      "Pontuação",
      "Ortografia",
      "Tipos textuais (narrativo, descritivo, expositivo, argumentativo, injuntivo)",
      "Textos jornalísticos",
    ],
  },
  {
    id: "filosofia",
    title: "Filosofia",
    group: "Humanas",
    topics: [
      "Pré-Socráticos",
      "Sócrates e Sofistas",
      "Platão",
      "Aristóteles",
      "Filosofia medieval",
      "Iluminismo",
      "Kant",
      "Nietzsche",
      "Existencialismo",
      "Filosofia contemporânea",
      "Pensadores modernos (Locke, Hobbes, Rousseau, Marx, Freud, Foucault, Bauman, etc.)",
    ],
  },
  {
    id: "sociologia",
    title: "Sociologia",
    group: "Humanas",
    topics: [
      "Comte",
      "Durkheim",
      "Marx",
      "Weber",
      "Sociologia brasileira (Gilberto Freyre, Darcy Ribeiro, Sérgio Buarque, etc.)",
      "Estratificação social",
      "Movimentos sociais",
      "Indústria cultural",
      "Gênero e sexualidade",
      "Políticas públicas",
      "Juventude e violência",
      "Trabalho",
    ],
  },
];

const studyPlan = [
  {
    week: 1,
    title: "Base e aquecimento",
    theme: "Comece estruturando fundamentos matemáticos, leitura textual e contexto histórico.",
    subjects: ["Matemática", "Português", "História", "Biologia"],
  },
  {
    week: 2,
    title: "Ciências em movimento",
    theme: "Entre em química básica, leitura geográfica e repertório literário com reforço de cálculo.",
    subjects: ["Química", "Geografia", "Literatura", "Matemática"],
  },
  {
    week: 3,
    title: "Ritmo de natureza",
    theme: "Aprofunde física e biologia enquanto mantém português e filosofia em circulação.",
    subjects: ["Física", "Biologia", "Português", "Filosofia"],
  },
  {
    week: 4,
    title: "Consolidação analítica",
    theme: "Retome exatas com mais intensidade e intercale humanas para manter revisão viva.",
    subjects: ["Matemática", "Química", "História", "Sociologia"],
  },
  {
    week: 5,
    title: "Virada geométrica",
    theme: "Abra espaço para geometria, leitura de mundo e escolas literárias.",
    subjects: ["Geometria", "Português", "Geografia", "Literatura"],
  },
  {
    week: 6,
    title: "Força de revisão",
    theme: "Reforce física e biologia com apoio de matemática e história do Brasil e geral.",
    subjects: ["Física", "Biologia", "Matemática", "História"],
  },
  {
    week: 7,
    title: "Ângulos e argumentos",
    theme: "Trabalhe trigonometria ao lado de química, filosofia e gramática.",
    subjects: ["Trigonometria", "Química", "Filosofia", "Português"],
  },
  {
    week: 8,
    title: "Humanas em expansão",
    theme: "Faça um bloco forte de interpretação, atualidades e repertório social.",
    subjects: ["Matemática", "Geografia", "Sociologia", "Literatura"],
  },
  {
    week: 9,
    title: "Natureza aplicada",
    theme: "Misture física, biologia e linguagem com uma nova passagem por história.",
    subjects: ["Física", "Biologia", "História", "Português"],
  },
  {
    week: 10,
    title: "Química e leitura crítica",
    theme: "Ganhe tração em química e geografia sem perder literatura nem matemática.",
    subjects: ["Química", "Geografia", "Literatura", "Matemática"],
  },
  {
    week: 11,
    title: "Bloco estratégico",
    theme: "Semana boa para cruzar geometria, física, filosofia e interpretação histórica.",
    subjects: ["Geometria", "Física", "Filosofia", "História"],
  },
  {
    week: 12,
    title: "Linguagens e vida",
    theme: "Português e biologia lideram enquanto sociologia e matemática mantêm consistência.",
    subjects: ["Português", "Biologia", "Sociologia", "Matemática"],
  },
  {
    week: 13,
    title: "Segunda aceleração",
    theme: "Volte a química e geografia com um giro literário e reforço quantitativo.",
    subjects: ["Química", "Geografia", "Literatura", "Matemática"],
  },
  {
    week: 14,
    title: "Ajuste fino",
    theme: "Use trigonometria e física para treinar resolução enquanto português e história calibram base.",
    subjects: ["Trigonometria", "Física", "Português", "História"],
  },
  {
    week: 15,
    title: "Integração final",
    theme: "Semana para unir cálculo, biologia, filosofia e leitura espacial em um ciclo forte.",
    subjects: ["Matemática", "Biologia", "Filosofia", "Geografia"],
  },
  {
    week: 16,
    title: "Fechamento e revisão",
    theme: "Feche o ciclo revisando disciplinas de maior peso e ajustando pendências.",
    subjects: ["Matemática", "Química", "Português", "História"],
  },
];

const storageKey = "plataforma-estudos-progresso-v1";
const savedProgress = readProgress();
const weeklyAssignments = buildWeeklyAssignments();
let activeWeekSelection = null;

const scheduleGrid = document.querySelector("[data-schedule-grid]");
const weekDetail = document.querySelector("[data-week-detail]");
const subjectsGrid = document.querySelector("[data-subjects-grid]");
const focusList = document.querySelector("[data-focus-list]");
const searchInput = document.querySelector("[data-search-input]");
const resetAllButton = document.querySelector("[data-reset-all]");

renderSchedule();
renderWeekDetail();
renderSubjects();
refreshDashboard();

searchInput.addEventListener("input", () => {
  renderSubjects(searchInput.value.trim().toLowerCase());
});

resetAllButton.addEventListener("click", () => {
  const confirmed = window.confirm("Deseja limpar todas as marcações de progresso?");

  if (!confirmed) {
    return;
  }

  Object.keys(savedProgress).forEach((key) => {
    delete savedProgress[key];
  });

  persistProgress();
  rerender();
});

function renderSchedule() {
  const template = document.getElementById("schedule-card-template");
  scheduleGrid.innerHTML = "";

  studyPlan.forEach((week) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const progress = calculateWeekProgress(week.subjects);

    node.querySelector(".week-card__eyebrow").textContent = `Semana ${week.week}`;
    node.querySelector("h3").textContent = week.title;
    node.querySelector(".week-card__progress").textContent = `${progress}% concluído`;
    node.querySelector(".week-card__theme").textContent = week.theme;

    const subjectsList = node.querySelector(".week-card__subjects");
    week.subjects.forEach((subject) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = subject;
      button.addEventListener("click", () => {
        activeWeekSelection = { week: week.week, subjectTitle: subject };
        renderWeekDetail();
        weekDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      item.appendChild(button);
      subjectsList.appendChild(item);
    });

    scheduleGrid.appendChild(node);
  });
}

function renderWeekDetail() {
  if (!activeWeekSelection) {
    weekDetail.innerHTML = `
      <div class="week-detail__placeholder">
        Clique em uma matéria dentro de qualquer semana para ver os conteúdos planejados e marcar o progresso por aqui.
      </div>
    `;
    return;
  }

  const { week, subjectTitle } = activeWeekSelection;
  const subject = studyData.find((item) => item.title === subjectTitle);
  const selectedWeek = studyPlan.find((item) => item.week === week);
  const topics = getWeeklyTopics(week, subjectTitle);
  const completedTopics = topics.filter((item) =>
    Boolean(savedProgress[getTopicKey(subject.id, item.index)])
  ).length;

  weekDetail.innerHTML = `
    <div class="week-detail__card">
      <div class="week-detail__header">
        <div>
          <p class="week-detail__eyebrow">Semana ${week} • ${subject.group}</p>
          <h3>${subjectTitle}</h3>
          <p class="week-detail__theme">${selectedWeek.title}: ${selectedWeek.theme}</p>
        </div>
        <div class="week-detail__meta">
          <span>${completedTopics}/${topics.length} concluídos</span>
          <a href="#${subject.id}">Abrir checklist completo</a>
        </div>
      </div>
      <div class="week-detail__actions">
        <button type="button" class="mini-button" data-week-action="complete-all">
          Concluir conteúdos da semana
        </button>
        <button type="button" class="mini-button mini-button--ghost" data-week-action="clear-all">
          Limpar marcações da semana
        </button>
      </div>
      <ul class="week-detail__topics"></ul>
    </div>
  `;

  const topicsList = weekDetail.querySelector(".week-detail__topics");

  topics.forEach((item) => {
    const isChecked = Boolean(savedProgress[getTopicKey(subject.id, item.index)]);
    const topicNode = document.createElement("li");
    topicNode.className = "week-detail__topic";

    if (isChecked) {
      topicNode.classList.add("week-detail__topic--checked");
    }

    topicNode.innerHTML = `
      <div>
        <strong>${item.topic}</strong>
        <span>${subjectTitle}</span>
      </div>
      <button type="button" class="week-detail__toggle">
        ${isChecked ? "Concluído" : "Marcar como concluído"}
      </button>
    `;

    topicNode.querySelector("button").addEventListener("click", () => {
      toggleTopicProgress(subject.id, item.index, !isChecked);
    });

    topicsList.appendChild(topicNode);
  });

  weekDetail
    .querySelector('[data-week-action="complete-all"]')
    .addEventListener("click", () => {
      topics.forEach((item) => {
        savedProgress[getTopicKey(subject.id, item.index)] = true;
      });
      persistProgress();
      rerender();
    });

  weekDetail
    .querySelector('[data-week-action="clear-all"]')
    .addEventListener("click", () => {
      topics.forEach((item) => {
        delete savedProgress[getTopicKey(subject.id, item.index)];
      });
      persistProgress();
      rerender();
    });
}

function renderSubjects(filter = "") {
  const template = document.getElementById("subject-card-template");
  subjectsGrid.innerHTML = "";

  studyData.forEach((subject) => {
    const totalTopics = subject.topics.length;
    const completedTopics = subject.topics.filter((_, index) =>
      Boolean(savedProgress[getTopicKey(subject.id, index)])
    ).length;

    const matchesSubject =
      filter === "" ||
      subject.title.toLowerCase().includes(filter) ||
      subject.group.toLowerCase().includes(filter) ||
      subject.topics.some((topic) => topic.toLowerCase().includes(filter));

    if (!matchesSubject) {
      return;
    }

    const node = template.content.firstElementChild.cloneNode(true);
    const progress = Math.round((completedTopics / totalTopics) * 100) || 0;

    node.dataset.subjectId = subject.id;
    node.id = subject.id;
    node.querySelector(".subject-card__eyebrow").textContent = subject.group;
    node.querySelector("h3").textContent = subject.title;
    node.querySelector(".subject-card__count").textContent = `${completedTopics}/${totalTopics}`;
    node.querySelector(".subject-card__summary").textContent = `${progress}% do checklist concluído`;
    node.querySelector(".subject-card__progressbar span").style.width = `${progress}%`;

    node.querySelector('[data-action="complete"]').addEventListener("click", () => {
      subject.topics.forEach((_, index) => {
        savedProgress[getTopicKey(subject.id, index)] = true;
      });

      persistProgress();
      rerender();
    });

    node.querySelector('[data-action="clear"]').addEventListener("click", () => {
      subject.topics.forEach((_, index) => {
        delete savedProgress[getTopicKey(subject.id, index)];
      });

      persistProgress();
      rerender();
    });

    const topicsList = node.querySelector(".topic-list");

    subject.topics.forEach((topic, index) => {
      const searchableText = `${subject.title} ${subject.group} ${topic}`.toLowerCase();

      if (filter && !searchableText.includes(filter)) {
        return;
      }

      const item = document.createElement("li");
      item.className = "topic-item";

      const checkboxId = `${subject.id}-${index}`;
      const isChecked = Boolean(savedProgress[getTopicKey(subject.id, index)]);

      if (isChecked) {
        item.classList.add("topic-item--checked");
      }

      item.innerHTML = `
        <label for="${checkboxId}">
          <input id="${checkboxId}" type="checkbox" ${isChecked ? "checked" : ""} />
          <span>
            <span class="topic-item__title">${topic}</span>
            <span class="topic-item__subject">${subject.title}</span>
          </span>
        </label>
      `;

      item.querySelector("input").addEventListener("change", (event) => {
        toggleTopicProgress(subject.id, index, event.target.checked);
      });

      topicsList.appendChild(item);
    });

    subjectsGrid.appendChild(node);
  });
}

function refreshDashboard() {
  const flattenedTopics = studyData.flatMap((subject) =>
    subject.topics.map((topic, index) => ({
      subjectId: subject.id,
      subjectTitle: subject.title,
      topic,
      completed: Boolean(savedProgress[getTopicKey(subject.id, index)]),
    }))
  );

  const totalTopics = flattenedTopics.length;
  const completedTopics = flattenedTopics.filter((item) => item.completed).length;
  const completedSubjects = studyData.filter((subject) =>
    subject.topics.every((_, index) => Boolean(savedProgress[getTopicKey(subject.id, index)]))
  ).length;
  const progressRate = Math.round((completedTopics / totalTopics) * 100) || 0;

  setStat("total-topics", totalTopics);
  setStat("completed-topics", completedTopics);
  setStat("progress-rate", `${progressRate}%`);
  setStat("completed-subjects", completedSubjects);

  const nextTopics = flattenedTopics.filter((item) => !item.completed).slice(0, 8);
  focusList.innerHTML = "";

  if (nextTopics.length === 0) {
    const item = document.createElement("li");
    item.className = "focus-item";
    item.innerHTML = "<strong>Checklist completo</strong><span>Agora é hora de revisar e fazer simulados.</span>";
    focusList.appendChild(item);
    return;
  }

  nextTopics.forEach((item, index) => {
    const focusItem = document.createElement("li");
    focusItem.className = "focus-item";
    focusItem.innerHTML = `
      <div>
        <strong>${item.topic}</strong>
        <span class="topic-item__subject">${item.subjectTitle}</span>
      </div>
      <span>#${index + 1}</span>
    `;
    focusList.appendChild(focusItem);
  });
}

function calculateWeekProgress(subjectTitles) {
  const targets = studyData.filter((subject) => subjectTitles.includes(subject.title));

  if (targets.length === 0) {
    return 0;
  }

  const percentage = targets.reduce((accumulator, subject) => {
    const completed = subject.topics.filter((_, index) =>
      Boolean(savedProgress[getTopicKey(subject.id, index)])
    ).length;

    return accumulator + completed / subject.topics.length;
  }, 0);

  return Math.round((percentage / targets.length) * 100);
}

function getTopicKey(subjectId, topicIndex) {
  return `${subjectId}-${topicIndex}`;
}

function getWeeklyTopics(weekNumber, subjectTitle) {
  const subjectId = getSubjectIdByTitle(subjectTitle);
  return weeklyAssignments[`${weekNumber}-${subjectId}`] || [];
}

function getSubjectIdByTitle(subjectTitle) {
  const subject = studyData.find((item) => item.title === subjectTitle);
  return subject ? subject.id : "";
}

function buildWeeklyAssignments() {
  const assignments = {};

  studyData.forEach((subject) => {
    const weeksForSubject = studyPlan.filter((week) => week.subjects.includes(subject.title));
    let startIndex = 0;
    let remainingTopics = subject.topics.length;

    weeksForSubject.forEach((week, index) => {
      const weeksLeft = weeksForSubject.length - index;
      const sliceSize = Math.ceil(remainingTopics / weeksLeft);
      const chunk = subject.topics.slice(startIndex, startIndex + sliceSize).map((topic, offset) => ({
        topic,
        index: startIndex + offset,
      }));

      assignments[`${week.week}-${subject.id}`] = chunk;
      startIndex += sliceSize;
      remainingTopics -= sliceSize;
    });
  });

  return assignments;
}

function toggleTopicProgress(subjectId, topicIndex, isCompleted) {
  if (isCompleted) {
    savedProgress[getTopicKey(subjectId, topicIndex)] = true;
  } else {
    delete savedProgress[getTopicKey(subjectId, topicIndex)];
  }

  persistProgress();
  rerender();
}

function setStat(statName, value) {
  const element = document.querySelector(`[data-stat="${statName}"]`);

  if (element) {
    element.textContent = String(value);
  }
}

function readProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
}

function persistProgress() {
  window.localStorage.setItem(storageKey, JSON.stringify(savedProgress));
}

function rerender() {
  renderSchedule();
  renderWeekDetail();
  renderSubjects(searchInput.value.trim().toLowerCase());
  refreshDashboard();
}
