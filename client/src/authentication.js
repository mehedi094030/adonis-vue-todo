import HTTP from './http';
import Router from './router';

export default {
	namespaced: true,
	state: {
		registerEmail: null,
		registerPassword: null,
		registerError: null,
		token: null,
	},
	actions: {
		register({commit, state}) {
			return HTTP().post('auth/register', {
				email: state.registerEmail,
				password: state.registerPassword,
			})
			.then(({ data }) => {
				commit('setToken', data.token);
				Router.push('/');
			})
			.catch(() => {
				commit('setRegisterError', 'An Error Occured!');
			});
		}
	},
	getters: {
		isLoggedIn (state) {
			return !!state.token;
		}
	},
	mutations: {
		setToken (state, token) {
			state.token = token;
		},
		setRegisterError (state, error) {
			state.registerError = error;
		},
		setRegisterEmail (state, email) {
			state.registerEmail = email;
		},
		setRegisterPassword (state, password) {
			state.registerPassword = password
		}
	}
}