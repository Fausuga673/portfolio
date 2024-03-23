import '../css/header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__nav--item" href="#about">Inicio</a>
        <a className="header__nav--item" href="#experience">Experiencia</a>
        <a className="header__nav--item" href="#projects">Proyectos</a>
        <a className="header__nav--item" href="#skills">Habilidades</a>
      </nav>
    </header>
  );
}

export default Header;
