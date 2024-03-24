import maniMonkey from '../assets/img/manimonkey.jpg';

function Experience() {
  return (
    <article className="start__experience" id="experience">
      <h2 className="start__experience--title">Experiencia</h2>
      <p className="start__experience--description">
        Aplicación desarrollada con Python para la IPS{" "}
        <span>Calidad Médica</span>.
      </p>
      <ul className="start__experience--project">
        <li className="start__experience--project-photo">
          <img src={maniMonkey} alt="interfaz de maniMonkey" />
        </li>
        <li className="start__experience--project-description">
          <p>
            Esta IPS maneja unos archivos que contienen la fecha de expedición,
            nombre del paciente y la cantidad de residuos desechados por paciente
            atendido.
            <br />
            <br />
            La aplicación renombra los archivos con la fecha de expedición y
            nombre del paciente, los envia a las carpetas del mes
            correspondiente y pasa los datos a un archivo excel.
          </p>
        </li>
      </ul>
    </article>
  );
}

export default Experience;
