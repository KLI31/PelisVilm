document.addEventListener("DOMContentLoaded", () => {});

const result = document.querySelector("#result");

// Arreglo que contiene todas las peliculas disponibles, simulando una respuesta de una api
const HERO_CONTENT = [
  {
    title: "Deadpool2",
    description:
      "La pelicula de Deadpool es muy divertida ya que tiene escenas graciosas y muy buenas para las personas que son fans de marvel, ademas de que con su ultima pelicula ha roto toda taquilla y sigue siendo un exitaso mundial.",
    image: "/image.png",
    rating: 4.5,
    visitaTotales: 4000,
  },
  {
    title: "La Colombiana",
    description:
      "La pelicula de Deadpool es muy divertida ya que tiene escenas graciosas y muy buenas para las personas que son fans de marvel, ademas de que con su ultima pelicula ha roto toda taquilla y sigue siendo un exitaso mundial.",
    image: "/image2.png",
    rating: 4.4,
    visitaTotales: 4000,
  },
  {
    title: "Hollow Knight",
    description:
      "La pelicula de Deadpool es muy divertida ya que tiene escenas graciosas y muy buenas para las personas que son fans de marvel, ademas de que con su ultima pelicula ha roto toda taquilla y sigue siendo un exitaso mundial.",
    image: "/image.png",
    rating: 4.2,
    visitaTotales: 4000,
  },
];

// Inyeccion del js al html
HERO_CONTENT.forEach((content) => {
  const { title, description, image, rating, visitaTotales } = content;
  const slider = document.createElement("div");
  slider.classList.add("section_container", "swiper-slide");
  slider.innerHTML = `
            <div class="hero_content">
                            <div class="content transition_all">
                                <div class="image_container">
                                    <img src=${image} alt=${title} width="100%" height="100%">
                                </div>
                                <div class="background background_gradient"></div>
                                <div class="info_content">
                                    <div class="info">
                                        <h1>${title}</h1>
                                        <p class="line_clamp_3">${description}</p>
                                        <div class="section_movie">
                                            <span class="info_content_span">Rating:  ${rating}⭐</span>
                                            <span class="info_content_span">|</span>
                                            <span class="info_content_span">Total vistas: ${visitaTotales}</span>
                                        </div>
                                        <div class="btn_container">
                                            <button class="btn">Ver la pelicula <svg xmlns="http://www.w3.org/2000/svg"  width="17"  height="17"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
  result.appendChild(slider);
});

// Manejo del slider del hero
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
});
