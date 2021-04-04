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
          "https://placeimg.com/640/480/any",
        ],
        url: "https://letsplaytgther.herokuapp.com/",
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
          { icono: "forum", nombre: "chat" }
        ],
      },
      {
        id: "2",
        nombre: "Let's play thgther",
        descripcion:
          "Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.",
        imagenes: ["https://placeimg.com/640/480/any"],
        tags: [
          { icono: "language-javascript", nombre: "nodejs" },
          { icono: "bootstrap", nombre: "bootstrap" },
          { icono: "language-javascript", nombre: "websockets.io" },
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
