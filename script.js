import { getPropertyWhatsAppUrl, properties } from "./properties.js";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      siteNav.classList.remove("is-open");
    }
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

const propertyList = document.querySelector("#property-list");
if (propertyList) {
  propertyList.innerHTML = properties
    .map((property, index) => {
      const detailsUrl = `./imoveis.html?id=${encodeURIComponent(property.id)}`;
      const facts = [property.area, ...property.characteristics]
        .map((fact) => `<span>${escapeHtml(fact)}</span>`)
        .join("");

      return `
        <article class="property ${index === 1 ? "property-reverse" : index === 2 ? "property-third" : "property-first"}">
          <a class="property-image" href="${detailsUrl}" aria-label="Ver detalhes de ${escapeHtml(property.name)}">
            <img
              src="${escapeHtml(property.image)}"
              alt="${escapeHtml(property.imageAlt)}"
              loading="lazy"
              width="1400"
              height="1000"
            >
            <span class="image-number">${String(index + 1).padStart(2, "0")} / ${String(properties.length).padStart(2, "0")}</span>
          </a>
          <div class="property-copy">
            <p class="property-type">${escapeHtml(property.type)} <span>·</span> Exemplo demonstrativo</p>
            <h3><a class="property-title-link" href="${detailsUrl}">${escapeHtml(property.name)}</a></h3>
            <p class="property-price">${escapeHtml(property.price)} <span>valor fictício</span></p>
            <div class="property-facts">${facts}</div>
            <div class="property-links">
              <a class="button button-property" href="${detailsUrl}">Ver detalhes <span aria-hidden="true">↗</span></a>
              <a class="button button-property" href="${getPropertyWhatsAppUrl(property)}" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>`;
    })
    .join("");
}

const propertyDetail = document.querySelector("#property-detail");
if (propertyDetail) {
  const propertyId = new URLSearchParams(window.location.search).get("id");
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    propertyDetail.innerHTML = `
      <div class="property-not-found" role="status">
        <p class="eyebrow"><span class="eyebrow-rule"></span> Imóvel não encontrado</p>
        <h1>Este imóvel não está disponível nesta demonstração.</h1>
        <a class="button button-property" href="./index.html#imoveis">Voltar aos imóveis <span aria-hidden="true">↗</span></a>
      </div>`;
  } else {
    document.title = `${property.name} | Ataupo Pereira`;
    const facts = [property.area, ...property.characteristics]
      .map((fact) => `<li>${escapeHtml(fact)}</li>`)
      .join("");
    const gallery = property.gallery?.length
      ? property.gallery
      : [{ image: property.image, imageAlt: property.imageAlt }];

    propertyDetail.innerHTML = `
      <a class="detail-back" href="./index.html#imoveis"><span aria-hidden="true">←</span> Voltar aos imóveis</a>
      <div class="property-detail-grid">
        <div class="property-detail-gallery">
          <p class="eyebrow detail-gallery-label"><span class="eyebrow-rule"></span> Galeria · ${gallery.length} imagens ilustrativas</p>
          <figure class="detail-photo">
            <div class="detail-photo-frame">
              <img class="detail-photo-image" src="${escapeHtml(gallery[0].image)}" alt="${escapeHtml(gallery[0].imageAlt)}" fetchpriority="high" width="1400" height="1400">
              <button class="detail-photo-button detail-photo-previous" type="button" aria-label="Ver foto anterior">←</button>
              <span class="detail-photo-count" aria-live="polite">01 / ${String(gallery.length).padStart(2, "0")}</span>
              <button class="detail-photo-button detail-photo-next" type="button" aria-label="Ver próxima foto">→</button>
            </div>
            <figcaption>Imagem ilustrativa; pode não representar um imóvel real.</figcaption>
          </figure>
        </div>
        <article class="property-detail-copy">
          <p class="property-type">${escapeHtml(property.type)} <span>·</span> Exemplo demonstrativo</p>
          <h1>${escapeHtml(property.name)}</h1>
          <p class="property-detail-price">${escapeHtml(property.price)} <span>valor fictício</span></p>
          <p class="property-location"><span>Localização demonstrativa</span>${escapeHtml(property.location)} <small>Localização específica não informada.</small></p>
          <div class="detail-divider"></div>
          <h2>Sobre o imóvel</h2>
          <p class="property-description">${escapeHtml(property.description)}</p>
          <h2>Características informadas</h2>
          <ul class="detail-facts">${facts}</ul>
          <a class="button button-detail-contact" href="${getPropertyWhatsAppUrl(property)}" target="_blank" rel="noopener noreferrer">
            Consultar pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>`;

    const photoImage = propertyDetail.querySelector(".detail-photo-image");
    const photoCount = propertyDetail.querySelector(".detail-photo-count");
    const previousButton = propertyDetail.querySelector(".detail-photo-previous");
    const nextButton = propertyDetail.querySelector(".detail-photo-next");
    let activePhoto = 0;

    function showPhoto(index) {
      activePhoto = (index + gallery.length) % gallery.length;
      photoImage.src = gallery[activePhoto].image;
      photoImage.alt = gallery[activePhoto].imageAlt;
      photoCount.textContent = `${String(activePhoto + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
    }

    previousButton.addEventListener("click", () => showPhoto(activePhoto - 1));
    nextButton.addEventListener("click", () => showPhoto(activePhoto + 1));
  }
}
