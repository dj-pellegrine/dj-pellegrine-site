const FALLBACK_THUMBNAIL = "pics/pellegrine_logo.jpeg";

const DEFAULT_SITE_CONTENT = {
  heroButtons: {
    contato: {
      label: "Contato",
      url: "https://wa.me/qr/FJO37YAQYRELN1",
    },
    midiaKit: {
      label: "Mídia Kit",
      url: "https://drive.google.com/drive/folders/1-zR6fXtp0LHKSF4hG47Sb6MN-mBJzjxo",
    },
  },
  stats: [
    { label: "Público", value: "50k+" },
    { label: "Shows", value: "100+" },
    { label: "Streams", value: "230k+" },
  ],
  sessions: {
    title: "SESSIONS",
    items: [
      {
        title: "Live Set - DJ Pellegrine Funk Sub Mundo",
        subtitle: "Gravado em São Paulo",
        url: "https://youtu.be/lh19orJjJo0?si=ZV8aCDr-DFvt4moB",
      },
      {
        title: "Set - Doca Session Funk Sub Mundo",
        subtitle: "Sessão Exclusiva",
        url: "https://youtu.be/aJPHglItl08?si=6hfIk8Bm7Oqih9L4",
      },
    ],
  },
  agenda: {
    title: "AGENDA",
    events: [
      { name: "FESTIVAL FUNK", place: "DOKA BAR", date: "21/03" },
      { name: "CALOURADA UNIMAX", place: "DOKA BAR", date: "27/03" },
      { name: "BAILÃO DO FIKA", place: "FIKA BAR", date: "28/03" },
    ],
  },
  musicasSection: {
    title: "MÚSICAS",
    items: [
      {
        type: "album",
        title: "O Mais Brabo da Putaria",
        url: "https://youtube.com/playlist?list=OLAK5uy_k7GIDleMSnyu3-GSJE6BScQAcoU2reWWA&si=pldZS7a8l8qiWG2v",
      },
      {
        type: "album",
        title: "Sessão de Grave",
        url: "https://youtube.com/playlist?list=OLAK5uy_lnVOrfGLrjMlWwrhmqSoeFUSUfeR9Is3s&si=yC4IxcCMkAvee2Tn",
      },
      {
        type: "album",
        title: "Duas Faces do Mandelão",
        url: "https://youtube.com/playlist?list=OLAK5uy_mkFuRHluGZQHS7R9BnAdv6E40Q6Tag2dI&si=yv8-jvHsydWezciY",
      },
      {
        type: "musica",
        title: "Explode Técnico de Som",
        url: "https://youtube.com/playlist?list=OLAK5uy_mvcMyxCATVyAJVJgiAxv3EfCuDzXMQNtE&si=jjwOOI_hu25KGv_G",
      },
      {
        type: "musica",
        title: "Tropa do 100 Carinho",
        url: "https://youtube.com/playlist?list=OLAK5uy_kq-DcP3okZDiDJ44nnTWSkw67-0uNGtos&si=znGXEKRtyhCe9yOL",
      },
      {
        type: "musica",
        title: "Trava por Cima do Pau",
        url: "https://youtube.com/playlist?list=OLAK5uy_mHpqldpC5gKA83SWmiW2OC7ZWqaaLJwnE&si=CT5sR1iOIMLvBH7u",
      },
      {
        type: "musica",
        title: "Fika de 4 pra Tropa",
        url: "https://youtube.com/playlist?list=OLAK5uy_krXjVzN5fwkxPiGfbIMaww6rfq1w3QOHM&si=H-I_5Dpsd2Ic5cgh",
      },
      {
        type: "musica",
        title: "Bolha e Rock",
        url: "https://youtube.com/playlist?list=OLAK5uy_mM7JlU_70fq2acvdgw9iZseuwwnyZWk7s&si=e3OLeFE05eYBALa1",
      },
      {
        type: "musica",
        title: "Mandelão",
        url: "https://youtube.com/playlist?list=OLAK5uy_l7ILCs274uHn5hjbnfYMoebANps4Nsao8&si=6M3R8mKC8cTAy7CN",
      },
      {
        type: "musica",
        title: "Tá de Baixo da Calcinha",
        url: "https://youtube.com/playlist?list=OLAK5uy_kXmyjPsgAAvPJ_aEAuXFCIu2kOeBNgPwU&si=KkJQ9TPbWV4YjGbz",
      },
      {
        type: "musica",
        title: "Vai Piranha no Pau",
        url: "https://youtube.com/playlist?list=OLAK5uy_kBn4CNbkE1hUYpPLYvLxvqcEHItA_WbTE&si=qle3Aok9Vec0pM3o",
      },
    ],
  },
  socials: {
    instagram:
      "https://www.instagram.com/djpellegrine?igsh=MWpxaGo1N2UyYTk3MQ==",
    spotify:
      "https://open.spotify.com/artist/5YRuZbhTIox6qO4EpQraWM?si=W7euD44dQY-bg05yNUE2zA",
    youtube: "https://youtube.com/@djpellegrine?si=KGBt3YOiprZ3rdY5",
  },
};

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const loadSiteContent = async () => {
  try {
    const response = await fetch("data/site-content.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const remoteContent = await response.json();
    const mergedContent = {
      ...deepClone(DEFAULT_SITE_CONTENT),
      ...remoteContent,
      heroButtons: {
        ...deepClone(DEFAULT_SITE_CONTENT.heroButtons),
        ...(remoteContent.heroButtons || {}),
      },
      sessions: {
        ...deepClone(DEFAULT_SITE_CONTENT.sessions),
        ...(remoteContent.sessions || {}),
      },
      agenda: {
        ...deepClone(DEFAULT_SITE_CONTENT.agenda),
        ...(remoteContent.agenda || {}),
      },
      musicasSection: {
        ...deepClone(DEFAULT_SITE_CONTENT.musicasSection),
        ...(remoteContent.musicasSection || {}),
      },
      socials: {
        ...deepClone(DEFAULT_SITE_CONTENT.socials),
        ...(remoteContent.socials || {}),
      },
    };
    console.log("[content] JSON loaded");
    return mergedContent;
  } catch (error) {
    console.warn("[content] JSON failed; using fallback", error);
    return deepClone(DEFAULT_SITE_CONTENT);
  }
};

const setExternalLink = (element, url) => {
  if (!element) return;
  const normalizedUrl = typeof url === "string" ? url.trim() : "";

  if (!normalizedUrl || normalizedUrl === "#") {
    element.setAttribute("href", "#");
    element.removeAttribute("target");
    element.removeAttribute("rel");
    return;
  }

  element.setAttribute("href", normalizedUrl);
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
};

const setButtonLabel = (button, label) => {
  if (!button || !label) return;
  const labelEl = button.querySelector(".button-label");
  if (labelEl) {
    labelEl.textContent = label;
    return;
  }

  const icon = button.querySelector(".material-symbols-outlined");
  if (!icon) {
    button.textContent = label;
    return;
  }

  while (icon.nextSibling) {
    icon.nextSibling.remove();
  }
  button.append(document.createTextNode(` ${label}`));
};

const setText = (selectorOrEl, value) => {
  if (!value) return;
  const element =
    typeof selectorOrEl === "string"
      ? document.querySelector(selectorOrEl)
      : selectorOrEl;
  if (element) {
    element.textContent = value;
  }
};

const extractYouTubeId = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const path = parsed.pathname.replace(/^\//, "").split("/")[0];
      return path || null;
    }

    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
    }

    const pathMatch = parsed.pathname.match(/\/shorts\/([^/?#]+)/);
    if (pathMatch) {
      return pathMatch[1];
    }
  } catch (error) {
    return null;
  }

  return null;
};

const buildYouTubeThumbnailCandidates = (url) => {
  if (!url || url === "#") return [];
  const videoId = extractYouTubeId(url);
  if (!videoId) {
    return [];
  }

  return [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ];
};

const applyThumbnail = (img, url, thumbnail) => {
  if (!img) return;

  const manualThumbnail =
    typeof thumbnail === "string" && thumbnail.trim() ? thumbnail.trim() : "";
  const youtubeCandidates = manualThumbnail
    ? []
    : buildYouTubeThumbnailCandidates(url);
  const candidates = manualThumbnail
    ? [manualThumbnail, FALLBACK_THUMBNAIL]
    : [...youtubeCandidates, FALLBACK_THUMBNAIL];

  let index = 0;
  img.onerror = () => {
    index += 1;
    if (index < candidates.length) {
      img.src = candidates[index];
      return;
    }

    img.onerror = null;
    img.src = FALLBACK_THUMBNAIL;
  };

  img.src = candidates[0] || FALLBACK_THUMBNAIL;
};

const createIcon = (name) => {
  const icon = document.createElement("span");
  icon.className = "material-symbols-outlined";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = name;
  return icon;
};

const renderStats = (stats) => {
  const statsList = document.getElementById("statsList");
  if (!statsList) return;

  statsList.textContent = "";
  (Array.isArray(stats) ? stats : []).forEach((item) => {
    const stat = document.createElement("div");
    stat.className = "stat";

    const value = document.createElement("span");
    value.className = "stat-value";
    value.textContent = item?.value || "-";

    const label = document.createElement("span");
    label.className = "stat-label";
    label.textContent = item?.label || "-";

    stat.append(value, label);
    statsList.append(stat);
  });
};

const createSetCard = (rawItem) => {
  const item = rawItem && typeof rawItem === "object" ? rawItem : {};
  const article = document.createElement("article");
  article.className = "set-card";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("data-link", item.url || "#");
  article.setAttribute("data-youtube", item.url || "#");

  const thumb = document.createElement("div");
  thumb.className = "set-thumb";

  const img = document.createElement("img");
  img.alt = item.title || "Sessão";
  applyThumbnail(img, item.url, item.thumbnail);

  const overlay = document.createElement("div");
  overlay.className = "set-overlay";

  const play = document.createElement("div");
  play.className = "set-play";
  play.append(createIcon("play_arrow"));

  thumb.append(img, overlay, play);

  const title = document.createElement("h3");
  title.className = "set-title";
  title.textContent = item.title || "Session";

  const meta = document.createElement("p");
  meta.className = "set-meta";
  meta.textContent = item.subtitle || "";

  article.append(thumb, title, meta);
  return article;
};

const renderSessions = (sessions) => {
  setText("#sessionsTitle", sessions?.title || "SESSIONS");

  const list = document.getElementById("sessionsList");
  if (!list) return;

  list.textContent = "";
  const items = Array.isArray(sessions?.items) ? sessions.items : [];
  items.forEach((item) => {
    list.append(createSetCard(item));
  });
};

const createAgendaItem = (rawEvent) => {
  const event = rawEvent && typeof rawEvent === "object" ? rawEvent : {};
  const wrapper = document.createElement("div");
  wrapper.className = "timeline-item agenda-item";

  const dot = document.createElement("div");
  dot.className = "timeline-dot";

  const content = document.createElement("div");
  content.className = "timeline-content";

  const head = document.createElement("div");
  head.className = "timeline-head";

  const title = document.createElement("h3");
  title.textContent = event.name || "Evento";

  const date = document.createElement("span");
  date.className = "timeline-date";
  date.textContent = event.date || "--/--";

  head.append(title, date);

  const foot = document.createElement("div");
  foot.className = "timeline-foot";

  const location = document.createElement("span");
  location.className = "timeline-location";
  location.append(createIcon("location_on"), document.createTextNode(` ${event.place || "Local"}`));

  foot.append(location);

  if (event.url && event.url !== "#") {
    const link = document.createElement("a");
    link.className = "timeline-link";
    link.textContent = "Ingressos";
    setExternalLink(link, event.url);
    foot.append(link);
  }

  content.append(head, foot);
  wrapper.append(dot, content);

  return wrapper;
};

const setupAgendaToggle = () => {
  const agendaSection = document.getElementById("agenda");
  const agendaList = document.getElementById("agendaList");
  const toggleAgendaBtn = document.getElementById("toggleAgendaBtn");

  if (!agendaSection || !agendaList || !toggleAgendaBtn) return;

  const agendaItems = Array.from(agendaList.querySelectorAll(".agenda-item"));
  const hasExtraItems = agendaItems.length > 3;

  toggleAgendaBtn.classList.remove("is-disabled");
  toggleAgendaBtn.removeAttribute("aria-disabled");
  toggleAgendaBtn.disabled = false;
  toggleAgendaBtn.onclick = null;

  if (!hasExtraItems) {
    agendaSection.classList.remove("agenda-collapsed");
    toggleAgendaBtn.textContent = "Sem mais datas";
    toggleAgendaBtn.classList.add("is-disabled");
    toggleAgendaBtn.setAttribute("aria-disabled", "true");
    toggleAgendaBtn.disabled = true;
    return;
  }

  agendaSection.classList.add("agenda-collapsed");
  toggleAgendaBtn.textContent = "Ver agenda completa";

  toggleAgendaBtn.onclick = () => {
    const isCollapsed = agendaSection.classList.toggle("agenda-collapsed");
    toggleAgendaBtn.textContent = isCollapsed ? "Ver agenda completa" : "Ver menos";

    if (isCollapsed) {
      agendaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
};

const renderAgenda = (agenda) => {
  setText("#agendaTitle", agenda?.title || "AGENDA");

  const list = document.getElementById("agendaList");
  if (!list) return;

  list.textContent = "";
  (Array.isArray(agenda?.events) ? agenda.events : []).forEach((event) => {
    list.append(createAgendaItem(event));
  });

  setupAgendaToggle();
};

const createTrackItem = (rawItem) => {
  const item = rawItem && typeof rawItem === "object" ? rawItem : {};
  const article = document.createElement("article");
  article.className = "track";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("data-link", item.url || "#");
  article.setAttribute("data-youtube", item.url || "#");

  const thumb = document.createElement("div");
  thumb.className = "track-thumb";

  const img = document.createElement("img");
  img.alt = `Capa de ${item.title || "item"}`;
  applyThumbnail(img, item.url, item.thumbnail);

  const overlay = document.createElement("div");
  overlay.className = "track-overlay";
  overlay.append(createIcon("play_arrow"));

  thumb.append(img, overlay);

  const info = document.createElement("div");
  info.className = "track-info";

  const title = document.createElement("h3");
  title.textContent = item.title || "Titulo";

  const typeLabel = document.createElement("p");
  typeLabel.textContent = item.type === "album" ? "Álbum" : "Música";

  info.append(title, typeLabel);

  const action = document.createElement("span");
  action.className = "track-action";
  action.append(createIcon("play_arrow"));

  article.append(thumb, info, action);
  return article;
};

const renderMusicas = (musicasSection) => {
  setText("#musicasTitle", musicasSection?.title || "MÚSICAS");

  const albunsList = document.getElementById("albunsList");
  const musicasList = document.getElementById("musicasList");
  if (!albunsList || !musicasList) return;

  albunsList.textContent = "";
  musicasList.textContent = "";

  const items = Array.isArray(musicasSection?.items) ? musicasSection.items : [];
  const safeItems = items.filter((item) => item && typeof item === "object");
  const albuns = safeItems.filter((item) => (item.type || "").toLowerCase() === "album");
  const musicas = safeItems.filter((item) => (item.type || "").toLowerCase() === "musica");

  albuns.forEach((item) => albunsList.append(createTrackItem(item)));
  musicas.forEach((item) => musicasList.append(createTrackItem(item)));
};

const applyLinksToHeroAndSocial = (content) => {
  const contato = content?.heroButtons?.contato || {};
  const midiaKit = content?.heroButtons?.midiaKit || {};

  const linkListenSets = document.getElementById("linkListenSets");
  const linkMediaKit = document.getElementById("linkMediaKit");

  setExternalLink(linkListenSets, contato.url || "#");
  setButtonLabel(linkListenSets, contato.label || "Contato");

  setExternalLink(linkMediaKit, midiaKit.url || "#");
  setButtonLabel(linkMediaKit, midiaKit.label || "Mídia Kit");

  setExternalLink(document.getElementById("linkInstagram"), content?.socials?.instagram || "#");
  setExternalLink(document.getElementById("linkSpotify"), content?.socials?.spotify || "#");
  setExternalLink(document.getElementById("linkYouTube"), content?.socials?.youtube || "#");
};

const initializeSiteContent = async () => {
  const content = await loadSiteContent();
  try {
    applyLinksToHeroAndSocial(content);
    renderStats(content.stats);
  } catch (error) {
    console.error("Erro ao renderizar links/estatisticas.", error);
  }

  try {
    renderSessions(content.sessions);
  } catch (error) {
    console.error("Erro ao renderizar sessoes.", error);
  }

  try {
    renderAgenda(content.agenda);
  } catch (error) {
    console.error("Erro ao renderizar agenda.", error);
  }

  try {
    renderMusicas(content.musicasSection);
  } catch (error) {
    console.error("Erro ao renderizar musicas.", error);
  }
};

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const openMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.hidden = false;
  menuBtn?.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.hidden = true;
  menuBtn?.setAttribute("aria-expanded", "false");
};

menuBtn?.addEventListener("click", () => {
  if (!mobileMenu) return;
  mobileMenu.hidden ? openMenu() : closeMenu();
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!mobileMenu || mobileMenu.hidden) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  const clickedMenu = mobileMenu.contains(target);
  const clickedButton = menuBtn?.contains(target);
  if (!clickedMenu && !clickedButton) {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const clickable = target.closest("[data-link]");
  if (!clickable || !(clickable instanceof HTMLElement)) return;

  const url = clickable.dataset.link;
  if (!url || url === "#") return;

  window.open(url, "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!target.matches("[data-link]")) return;

  const url = target.dataset.link;
  if (!url || url === "#") return;

  event.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
});

const sectionIds = ["home", "sobre", "liveset", "agenda", "musica"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll(".nav-link"))
  .map((link) => ({
    el: link,
    target: link.getAttribute("href"),
  }))
  .filter((item) => item.target && item.target.startsWith("#"));

const setActiveLink = (id) => {
  navLinks.forEach(({ el, target }) => {
    el.classList.toggle("is-active", target === `#${id}`);
  });
};

if (sections.length) {
  const navHeight = menuBtn?.closest(".site-header")?.offsetHeight ?? 72;
  const updateActiveFromScroll = () => {
    const offsetY = window.scrollY + navHeight + 24;
    let activeId = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= offsetY) {
        activeId = section.id;
      }
    });

    if (activeId) setActiveLink(activeId);
  };

  const observer = new IntersectionObserver(
    () => updateActiveFromScroll(),
    { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
  );

  sections.forEach((section) => observer.observe(section));
  window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
  window.addEventListener("resize", updateActiveFromScroll);
  updateActiveFromScroll();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    const clickedId = href.replace("#", "");
    if (clickedId) setActiveLink(clickedId);

    closeMenu();
  });
});

initializeSiteContent();
