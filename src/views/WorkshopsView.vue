<template>
  <div>
    <h1>Workshops</h1>
    <ul>
      <li v-for="workshop in availableWorkshops" :key="workshop.id">
        {{ workshop.date }} - {{ workshop.venue }}
        <button @click="bookWorkshop(workshop.id)" :disabled="workshop.booked">Book</button>
      </li>
    </ul>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      workshops: [
        { id: 1, date: '2024-08-01', venue: 'Venue 1', booked: false },
        { id: 2, date: '2024-08-05', venue: 'Venue 2', booked: true },
      
      ],
    };
  },
  computed: {
    availableWorkshops() {
      return this.workshops.filter(workshop => !workshop.booked);
    },
  },
  methods: {
    bookWorkshop(id) {
      axios.post('http://localhost:3000/book', { id })
        .then(response => {
          const workshop = this.workshops.find(w => w.id === id);
          if (workshop) {
            workshop.booked = true;
          }
        })
        .catch(error => {
          console.error('Error booking workshop', error);
        });
    },
  },
};
</script>

<style scoped>
button:disabled {
  background-color: #ddd;
}
</style>
