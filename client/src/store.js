import Vue from "vue";
import Vuex from "vuex";
import authentication from "./authentication";
import projects from "./modules/projects";
import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
  	baseUrl: '/api',
  },
  modules: {
  	authentication,
  	projects,
  	tasks,
  },  
  mutations: {

  },
  actions: {

  }
});
