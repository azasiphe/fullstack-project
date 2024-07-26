<template>
  <section class="Workshops">
  <div>
    <h2>Salon <span class="blue-text">BOOKINGS</span></h2>
    
    <!-- Filter Button -->
    <div class="filter-buttons">
      <button @click="filterAvailable" :class="{ 'active-filter': showAvailable }">
        Show Available Bookings
      </button>
      <button @click="showAll">
        Show All Bookings
      </button>
    </div>

    <div class="booking-cards">
      <div 
        v-for="booking in filteredBookings" 
        :key="booking.id" 
        class="card"
        :class="{ 'sold-out': booking.booked, 'available': !booking.booked }"
      >
        <div class="card-content">
          <h1>{{ booking.venue }}</h1>
          <p>{{ booking.date }}</p>
          <p>Category: {{ booking.category }}</p>
          <button 
            @click="bookSlot(booking.id)" 
            :disabled="booking.booked"
            :class="{ 'btn-book': !booking.booked, 'btn-sold-out': booking.booked }"
          >
            {{ booking.booked ? 'Sold Out' : 'Book' }}
          </button>
          <p v-if="booking.booked" class="status">Unavailable</p>
        </div>
      </div>
    </div>
  </div>
  </section>
    <!-- Footer -->
    <footer>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bookings">
              Bookings
            </router-link>
          </li>
       
        </ul>
      </nav>
      <div class="contact-icons d-flex justify-content-center gap-2 mt-1">
        <a href="https://www.linkedin.com/company/sharenet-pty-ltd/" target="_blank" class="fab fa-linkedin rounded-circle d-flex align-items-center justify-content-center"></a>
        <a href="mailto:support@sharenet.co.za" class="fas fa-envelope rounded-circle d-flex align-items-center justify-content-center" title="Email"></a>
        <a href="https://www.facebook.com/sharenetsa" target="_blank" class="fab fa-facebook rounded-circle d-flex align-items-center justify-content-center" title="Facebook"></a>
        <a href="https://x.com/SharenetSA" target="_blank" class="fab fa-twitter rounded-circle d-flex align-items-center justify-content-center" title="Twitter"></a>
      </div>
      <p>© 2024 Sharenet. All rights reserved.</p>
    </footer>
 
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://fullstackproject-9o85.onrender.com/';

export default {
  data() {
    return {
      bookings: [
        { id: 1, date: '2024-08-01', venue: 'Montague', category: 'Haircut', booked: false },
        { id: 2, date: '2024-08-05', venue: 'Parklands', category: 'Makeup', booked: true },
        { id: 3, date: '2024-08-10', venue: 'Khayelitsha', category: 'Nails', booked: false },
        { id: 4, date: '2024-08-15', venue: 'Claremont', category: 'Haircut', booked: true },
        { id: 5, date: '2024-08-20', venue: 'Montague', category: 'Makeup', booked: false },
        { id: 6, date: '2024-08-25', venue: 'Mandalay', category: 'Haircut', booked: true },
        { id: 7, date: '2024-09-01', venue: 'Paris', category: 'Nails', booked: false },
        { id: 8, date: '2024-09-05', venue: 'Cape Town', category: 'Makeup', booked: false },
        { id: 9, date: '2024-09-10', venue: 'Wynberg', category: 'Haircut', booked: false },
        { id: 10, date: '2024-09-15', venue: 'Knysna', category: 'Nails', booked: false },
      ],
      showAvailable: true,
    };
  },
  computed: {
    filteredBookings() {
      return this.showAvailable ? this.bookings.filter(booking => !booking.booked) : this.bookings;
    },
  },
  methods: {
    async bookSlot(id) {
      try {
        const response = await axios.post(`${baseUrl}book`, { workshop_id: id });
        const booking = this.bookings.find(b => b.id === id);
        if (booking) {
          booking.booked = true;
          Swal.fire({
            title: 'Success!',
            text: 'Slot successfully booked!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error booking slot', error.response ? error.response.data : error.message);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to book the slot. ' + (error.response ? error.response.data.message : error.message),
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    },
    filterAvailable() {
      this.showAvailable = true;
    },
    showAll() {
      this.showAvailable = false;
    },
  },
};
</script>


<style scoped>
/* Button Styles */
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-buttons button {
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.filter-buttons button.active-filter {
  background-color: #0056b3;
}
h2{
  margin-top: 3%;
  margin-bottom: 2%;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
.blue-text {
  color: #007bff;
  font-family: 'Josefin Sans', sans-serif;
}
.booking-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

button {
  background-color: #5161ce;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.sold-out {
  opacity: 0.6;
}

.available {
  border: 2px solid #28a745;
}

.status {
  color: #ff0000;
  font-weight: bold;
}

@media (max-width: 1200px) {
  .booking-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .booking-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .booking-cards {
    grid-template-columns: 1fr;
  }
}

/* Footer */
footer {
  margin-top: 2%;
  background-color:#17a2b8;
  color: white;
  text-align: center;
  padding: 10px;
}

footer nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

footer nav a {
  color: white;
  text-decoration: none;
}

footer nav a:hover {
  text-decoration: underline;
}

footer p {
  margin: 5px;
}

footer .contact-icons a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

footer .contact-icons a:hover {
  color: black;
}
</style>
