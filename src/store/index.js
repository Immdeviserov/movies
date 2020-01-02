import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex, 'vuex');

export default new Vuex.Store({
	state: {
		film: {
			name: 'test name'
		}
	},
	mutations: {
		setFilm(state, payload) {
			state.film = payload;
		}
	},
	actions: {
		setMessage({ commit }) {
			let film = {
				name: 'new name'
			};
			commit('setFilm', film);
		}
	},
	getters: {
		getFilm(state) {
			return state.film;
		}
	}
});
