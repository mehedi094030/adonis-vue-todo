import Vue from 'vue';
import HTTP from '../http';
//import router from './router';

export default {
	namespaced: true,
	state: {
		projects: [],
		newProjectName: null,
	},
	actions: {
		fetchProjects({commit, state}) {
				return HTTP().get('/projects')
				.then(({ data }) => {
					commit('setProjects', data);
				});
			},	
		createProject({commit, state}) {
				return HTTP().post('/projects', {
					title: state.newProjectName,
				})
				.then(({ data }) => {
					commit('appendProject', data);
					commit('setNewProjectName', null);
				});
			},	
		},
	getters: {
		
	},
	mutations: {
		setNewProjectName(state, name) {
			state.newProjectName = name;
		},
		appendProject(state, project) {
			state.projects.push(project);
		},
		setProjects(state, projects) {
			state.projects = projects;
		},
		setProjectTitle(state, {project, title}) {
			project.title = title;
		},
		setEditMode(state, project) {
			Vue.set(project, 'isEditMode', true);
		},
		unsetEditMode(state, project) {
			Vue.set(project, 'isEditMode', false);
		},
	}
}