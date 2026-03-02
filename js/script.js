const LINKS = {
  booking: "#",
  contact: "https://wa.me/qr/FJO37YAQYRELN1",
  listenSets: "#",
  fullAgenda: "#",
  viewAllSets: "https://youtu.be/lh19orJjJo0?si=ZV8aCDr-DFvt4moB",
  instagram: "https://www.instagram.com/djpellegrine?igsh=MWpxaGo1N2UyYTk3MQ==",
  spotify: "https://open.spotify.com/artist/5YRuZbhTIox6qO4EpQraWM?si=W7euD44dQY-bg05yNUE2zA",
  youtube: "https://youtube.com/@djpellegrine?si=KGBt3YOiprZ3rdY5",
  mediaKit: "https://drive.google.com/drive/folders/1-zR6fXtp0LHKSF4hG47Sb6MN-mBJzjxo",
  set1: "https://youtu.be/lh19orJjJo0?si=ZV8aCDr-DFvt4moB",
  set2: "https://youtu.be/aJPHglItl08?si=6hfIk8Bm7Oqih9L4",
  set3: "#",
  albuns: [
    "https://youtube.com/playlist?list=OLAK5uy_k7GIDleMSnyu3-GSJE6BScQAcoU2reWWA&si=pldZS7a8l8qiWG2v",
    "https://youtube.com/playlist?list=OLAK5uy_lnVOrfGLrjMlWwrhmqSoeFUSUfeR9Is3s&si=yC4IxcCMkAvee2Tn",
    "https://youtube.com/playlist?list=OLAK5uy_mkFuRHluGZQHS7R9BnAdv6E40Q6Tag2dI&si=yv8-jvHsydWezciY",
  ],
  musicas: [
    "https://youtube.com/playlist?list=OLAK5uy_mvcMyxCATVyAJVJgiAxv3EfCuDzXMQNtE&si=jjwOOI_hu25KGv_G",
    "https://youtube.com/playlist?list=OLAK5uy_kq-DcP3okZDiDJ44nnTWSkw67-0uNGtos&si=znGXEKRtyhCe9yOL",
    "https://youtube.com/playlist?list=OLAK5uy_mHpqldpC5gKA83SWmiW2OC7ZWqaaLJwnE&si=CT5sR1iOIMLvBH7u",
    "https://youtube.com/playlist?list=OLAK5uy_krXjVzN5fwkxPiGfbIMaww6rfq1w3QOHM&si=H-I_5Dpsd2Ic5cgh",
    "https://youtube.com/playlist?list=OLAK5uy_mM7JlU_70fq2acvdgw9iZseuwwnyZWk7s&si=e3OLeFE05eYBALa1",
    "https://youtube.com/playlist?list=OLAK5uy_l7ILCs274uHn5hjbnfYMoebANps4Nsao8&si=6M3R8mKC8cTAy7CN",
    "https://youtube.com/playlist?list=OLAK5uy_kXmyjPsgAAvPJ_aEAuXFCIu2kOeBNgPwU&si=KkJQ9TPbWV4YjGbz",
    "https://youtube.com/playlist?list=OLAK5uy_kBn4CNbkE1hUYpPLYvLxvqcEHItA_WbTE&si=qle3Aok9Vec0pM3o",
  ],
  album1:
    "https://youtube.com/playlist?list=OLAK5uy_k7GIDleMSnyu3-GSJE6BScQAcoU2reWWA&si=pldZS7a8l8qiWG2v",
  album2:
    "https://youtube.com/playlist?list=OLAK5uy_lnVOrfGLrjMlWwrhmqSoeFUSUfeR9Is3s&si=yC4IxcCMkAvee2Tn",
  album3:
    "https://youtube.com/playlist?list=OLAK5uy_mkFuRHluGZQHS7R9BnAdv6E40Q6Tag2dI&si=yv8-jvHsydWezciY",
  musica1:
    "https://youtube.com/playlist?list=OLAK5uy_mvcMyxCATVyAJVJgiAxv3EfCuDzXMQNtE&si=jjwOOI_hu25KGv_G",
  musica2:
    "https://youtube.com/playlist?list=OLAK5uy_kq-DcP3okZDiDJ44nnTWSkw67-0uNGtos&si=znGXEKRtyhCe9yOL",
  musica3:
    "https://youtube.com/playlist?list=OLAK5uy_mHpqldpC5gKA83SWmiW2OC7ZWqaaLJwnE&si=CT5sR1iOIMLvBH7u",
  musica4:
    "https://youtube.com/playlist?list=OLAK5uy_krXjVzN5fwkxPiGfbIMaww6rfq1w3QOHM&si=H-I_5Dpsd2Ic5cgh",
  musica5:
    "https://youtube.com/playlist?list=OLAK5uy_mM7JlU_70fq2acvdgw9iZseuwwnyZWk7s&si=e3OLeFE05eYBALa1",
  musica6:
    "https://youtube.com/playlist?list=OLAK5uy_l7ILCs274uHn5hjbnfYMoebANps4Nsao8&si=6M3R8mKC8cTAy7CN",
  musica7:
    "https://youtube.com/playlist?list=OLAK5uy_kXmyjPsgAAvPJ_aEAuXFCIu2kOeBNgPwU&si=KkJQ9TPbWV4YjGbz",
  musica8:
    "https://youtube.com/playlist?list=OLAK5uy_kBn4CNbkE1hUYpPLYvLxvqcEHItA_WbTE&si=qle3Aok9Vec0pM3o",
};

const linkMap = [
  { id: "linkListenSets", key: "contact" },
  { id: "linkFullAgenda", key: "fullAgenda" },
  { id: "linkMediaKit", key: "mediaKit" },
  { id: "linkInstagram", key: "instagram" },
  { id: "linkSpotify", key: "spotify" },
  { id: "linkYouTube", key: "youtube" },
];

linkMap.forEach(({ id, key }) => {
  const el = document.getElementById(id);
  if (!el) return;
  const href = LINKS[key] ?? "#";
  el.setAttribute("href", href);
  if (href !== "#" && !href.startsWith("#")) {
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});

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

const resolveLink = (value) => {
  if (!value || value === "#") return "#";
  if (LINKS[value]) return LINKS[value];
  return value;
};

const extractYouTubeId = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }
    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
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
    // Playlist-only URLs (no video ID) cannot reliably provide thumbnails without API.
    return [];
  }
  return [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ];
};

const getSafeFallbackSrc = (img) => {
  const explicit = img.getAttribute("data-fallback-src");
  if (explicit) return explicit;

  const current = img.getAttribute("src") || "";
  const isPlaceholder =
    !current ||
    current.startsWith("data:") ||
    current.includes("placeholder") ||
    current.includes("dummy") ||
    current.includes("icon");

  if (isPlaceholder) return "pics/pellegrine_logo.jpeg";
  return current;
};

const applyYouTubeThumbnail = (img, url, fallbackSrc) => {
  const candidates = buildYouTubeThumbnailCandidates(url);
  if (!img) return;
  if (candidates.length === 0) {
    if (fallbackSrc) img.src = fallbackSrc;
    return;
  }
  let index = 0;
  img.onerror = () => {
    index += 1;
    if (index < candidates.length) {
      img.src = candidates[index];
      return;
    }
    if (fallbackSrc) {
      img.src = fallbackSrc;
    }
    img.onerror = null;
  };
  img.src = candidates[index];
};

document.querySelectorAll("[data-youtube]").forEach((card) => {
  const rawValue = card.getAttribute("data-youtube");
  const resolved = resolveLink(rawValue);
  const img = card.querySelector("img");
  if (!img) return;
  const fallbackSrc = getSafeFallbackSrc(img);
  applyYouTubeThumbnail(img, resolved, fallbackSrc);
});

document.querySelectorAll("[data-link]").forEach((el) => {
  const rawValue = el.getAttribute("data-link");
  const url = resolveLink(rawValue);
  if (!url || url === "#") return;

  const open = () => window.open(url, "_blank", "noopener,noreferrer");
  el.addEventListener("click", open);
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
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
