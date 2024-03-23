import "../css/skills.css";

const skills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "python",
  "c",
  "php",
  "mysql",
  "git",
]; 

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Habilidades</h2>
      <article className="skills__container">
        {skills.map((skill) => (
          <img
          key={skill}
            className={`skills__container--skill ${skill}`}
            src={`https://skillicons.dev/icons?i=${skill}`}
          />
        ))}
      </article>
    </section>
  );
}

export default Skills;
