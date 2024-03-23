import curriculum from "../pdf/curriculum.pdf";

function About() {

  return (
    <article className="start__about" id="about">
      <div className="start__about--photo">
        <div className="start__about--photo-container"></div>
      </div>
      <ul className="start__about--info">
        <li className="start__about--info-title">
          <h2>
            Hola, soy <span>Frey</span>
          </h2>
        </li>
        <li className="start__about--info-description">
          Analista de Sistemas y Desarrollador Frontend,
          <span>con 1 mes de experiencia</span>.
        </li>
        <li className="start__about--info-buttons">
          <a
            href={curriculum}
            download="curriculum"
            className="start__about--info-buttons-button"
          >
            Curriculum
          </a>
          <a
            href="mailto:fausuga673@gmail.com"
            className="start__about--info-buttons-button"
          >
            Contacto
          </a>
        </li>
      </ul>
    </article>
  );
}

export default About;
