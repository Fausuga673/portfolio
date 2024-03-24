import tetris from '../assets/videos/tetris.mp4';
import rockPaperScissor from '../assets/videos/piedra-papel-tijeras.mp4';
import fakeStore from '../assets/videos/fake-store.mp4';
import flappyBird from '../assets/videos/flappy-bird.mp4';
import pokedex from '../assets/videos/pokedex.mp4';
import cardgame from '../assets/videos/card-game.mp4';
import todo from '../assets/videos/lista-de-tareas.mp4';
import memorygame from '../assets/videos/juego-de-memoria.mp4';


const projectsList = [
  {
    id: "a",
    title: "Tetris",
    github: "https://github.com/Fausuga673/tetris",
    link: "https://fausuga673.github.io/tetris/",
    video: tetris,
    technologies: ["html", "css", "javascript"],
  },
  {
    id: "b",
    title: "Piedra papel tijeras",
    github: "https://github.com/Fausuga673/piedra-papel-tijera",
    link: "https://fausuga673.github.io/piedra-papel-tijera/",
    video: rockPaperScissor,
    technologies: ["html", "css", "javascript"],
  },
  {
    id: "c",
    title: "Tienda online",
    github: "https://github.com/Fausuga673/fake-store-app",
    link: "https://inquisitive-haupia-4552c1.netlify.app/",
    video: fakeStore,
    technologies: ["react", "typescript", "css"],
  },

  {
    id: "d",
    title: "Flappy Bird Clon",
    github: "https://github.com/Fausuga673/flappy-bird",
    link: "https://fausuga673.github.io/flappy-bird/",
    video: flappyBird,
    technologies: ["html", "css", "javascript"],
  },
  {
    id: "e",
    title: "Poke Api",
    github: "https://github.com/Fausuga673/Pokemon-api",
    link: "https://endearing-fairy-2e4827.netlify.app",
    video: pokedex,
    technologies: ["react", "typescript", "css"],
  },
  {
    id: "f",
    title: "Juego de cartas",
    github: "https://github.com/Fausuga673/card-game",
    link: "https://fausuga673.github.io/card-game/",
    video: cardgame,
    technologies: ["html", "css", "javascript"],
  },
  {
    id: "g",
    title: "To do",
    github: "https://github.com/Fausuga673/lista-de-tareas",
    link: "https://fausuga673.github.io/lista-de-tareas/",
    video: todo,
    technologies: ["html", "css", "javascript"],
  },
  {
    id: "h",
    title: "Juego de memoria",
    github: "https://github.com/Fausuga673/juego-de-memoria-V2",
    link: "https://fausuga673.github.io/juego-de-memoria-V2/",
    video: memorygame,
    technologies: ["html", "css", "javascript"],
  },
];

export default projectsList;