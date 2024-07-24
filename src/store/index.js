import { createStore } from 'vuex';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

export default createStore({
  state: {
    bookings: [],
  },
  mutations: {
    SET_BOOKINGS(state, bookings) {
      state.bookings = bookings;
    },
    ADD_BOOKING(state, booking) {
      state.bookings.push(booking);
    },
  },
  actions: {
    async fetchBookings({ commit }) {
      try {
        const response = await axios.get(`${baseUrl}bookings`);
        commit('SET_BOOKINGS', response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    },
    async bookWorkshop({ commit }, workshopId) {
      try {
        const response = await axios.post(`${baseUrl}book`, { workshop_id: workshopId });
        commit('ADD_BOOKING', { id: response.data.id, workshop_id: workshopId });
      } catch (error) {
        console.error('Error booking workshop:', error);
      }
    },
  },
  getters: {
    allBookings: state => state.bookings,
  },
});
