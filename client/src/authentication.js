import HTTP from './http';
import router from './router';

export default {
	namespaced: true,
	state: {
		registerEmail: null,
		registerPassword: null,
		registerError: null,
		token: null,
		loginEmail: null,
		loginPassword: null,
		loginError: null,
	},
	actions: {
		logout({commit}) {
			commit('setToken', null);
			router.push('/login');
		},
		register({commit, state}) {
			return HTTP().post('auth/register', {
				email: state.registerEmail,
				password: state.registerPassword,
			})
			.then(({ data }) => {
				commit('setToken', data.token);
				router.push('/');
			})
			.catch(() => {
				commit('setRegisterError', 'An Error Occured during Registration!');
			});
		},
		login({commit, state}) {
			return HTTP().post('auth/login', {
				email: state.loginEmail,
				password: state.loginPassword,
			})
			.then(({ data }) => {
				commit('setToken', data.token);
				router.push('/');
			})
			.catch(() => {
				commit('setLoginError', 'An Error Occured during Login!');
			});
		}
	},
	getters: {
		isLoggedIn (state) {
			return state.token;
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
		},
		setLoginError (state, error) {
			state.loginError = error;
		},
		setLoginEmail (state, email) {
			state.loginEmail = email;
		},
		setLoginPassword (state, password) {
			state.loginPassword = password
		},
	}
}