import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    proyectos: [
      {
        id: "1",
        nombre: "Let's play thgther",
        descripcion:
          "App creada por hobby, un reproductor de YouTube online para ver videos junto a amigos, etc. Conexión por websockets usando Socket.io de NodeJS.",
        imagenes: [
          "https://i.imgur.com/NbhMy4s.png",
          "https://i.imgur.com/yGbl9zR.png",
          "https://i.imgur.com/QzzHuwd.png",
        ],
        url: "https://letsplaytgther.herokuapp.com/",
        gitRepo: "https://github.com/Joyfer/letsplaytgther",
        caracteristicas: [
          { icono: "nodejs", nombre: "Nodejs" },
          { icono: "bootstrap", nombre: "Bootstrap 4.5" },
          { icono: "web", nombre: "Socket.io" },
          { icono: "language-html5", nombre: "Templates EJS" },
        ],
        tags: [
          { icono: "nodejs", nombre: "nodejs" },
          { icono: "bootstrap", nombre: "bootstrap" },
          { icono: "web", nombre: "Socket.io" },
          { icono: "forum", nombre: "chat" },
          { icono: "youtube", nombre: "youtube" }
        ],
      },
      {
        id: "2",
        nombre: "Portafolio diseñador",
        descripcion:
          "Portafolio sencillo estilo cartas de Facebook para mostrar imagenes, potenciado con tags para filtrar su contenido.",
        imagenes: ["https://i.imgur.com/mAok9VK.png", "https://i.imgur.com/D9Y8dmK.png", "https://i.imgur.com/vl772Tj.png"],
        caracteristicas: [
          { icono: "language-html5", nombre: "HTML" },
          { icono: "bootstrap", nombre: "Bootstrap 5" },
          { icono: "language-javascript", nombre: "Vanilla Javascript" },
          { icono: "tag", nombre: "Filtrado de contenido dinámico" },
        ],
        tags: [
          { icono: "language-javascript", nombre: "javascript" },
          { icono: "bootstrap", nombre: "bootstrap" },
          { icono: "language-html5", nombre: "html" },
          { icono: "language-html5", nombre: "Portafolio" },
        ],
      },
      {
        id: "3",
        nombre: "Reproductor Youtube",
        descripcion:
          "Un Reproductor sencillo en Vue 2, con el poder de crear listas de reproducción.",
        imagenes: ["https://i.imgur.com/bCxqBhR.png", "https://i.imgur.com/ZRDzVr4.png", "https://i.imgur.com/QnmGvmi.png"],
        url: "https://reproductor-joy.herokuapp.com/#/",
        caracteristicas: [
          { icono: "vuejs", nombre: "Vue 2" },
          { icono: "vuetify", nombre: "Vuetify" },
        ],
        tags: [
          { icono: "language-javascript", nombre: "javascript" },
          { icono: "vuejs", nombre: "vuejs" },
          { icono: "vuetify", nombre: "vuetify" },
          { icono: "youtube", nombre: "Youtube" },
        ],
      },
    ],
    tagFiltrado: "",
  },
  mutations: {
    TagFiltradoM(state, data) {
      state.tagFiltrado = data;
    },
  },
  actions: {
    HandleTagFiltrado({ commit }, data) {
      commit("TagFiltradoM", data);
    },
  },
  modules: {},
});
