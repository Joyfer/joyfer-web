import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    proyectos: [
      {
        id :"1",
        nombre: "Let's play thgther",
        descripcion: "Aplicación para ver Youtube online con otras personas.",
        imagenes: ["https://placeimg.com/640/480/any", "https://placeimg.com/640/480/any"],
        url: "https://letsplaytgther.herokuapp.com/",
        tags: [
          { icono: "nodejs", nombre: "nodejs" },
          { icono: "language-javascript", nombre: "javascript" },
        ],
      },
      {
        id: "2",
        nombre: "Let's play thgther",
        descripcion:
          "Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.Aplicación para ver Youtube online con otras personas.",
          imagenes: ["https://placeimg.com/640/480/any"],
          tags: [
          { icono: "nodejs", nombre: "marciano" },
          { icono: "language-javascript", nombre: "nodejs" },
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
