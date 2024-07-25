<template>
  <div>
    <!-- Hero Section -->
    <section class="hero1">
      <img src="https://i.ibb.co/pd8JkXf/2020-10-21.jpg" alt="Banner Image" class="hero-banner1">
    </section>

    <!-- Company Heritage Section -->
    <section class="history">
      <h2>A LEADING <span class="blue-text">FINANCIAL SERVICES</span> AND DATA PROVIDER</h2>
      
      <div class="timeline">
        <p class="josefin-font">Sharenet, established in 1988, has grown from providing real-time JSE share prices to becoming a trusted household name with over 150,000 clients. 
          By investing in technology, Sharenet now offers tools for successful trading and investing in South African and international stock markets.
           Our award-winning platform provides access to over 70,000 financial instruments. Proud of our South African heritage, we continually strive for excellence.
            Sharenet operates through three divisions: Sharenet Wealth, Sharenet Securities, 
          and Sharenet Labs, serving individuals and companies across South Africa and Africa.</p>
      </div>
    </section>

    <!-- Spot Prices Table -->
    <section class="spot-prices">
      <h2>SPOT <span class="red-text">PRICES</span></h2>
      <div class="sort-buttons">
        <button @click="sortTable('price')">Sort by Price</button>
        <button @click="sortTable('fullName')">Sort A-Z</button>
      </div>
      <table>
        <thead>
          <tr>
            <th @click="sortTable('fullName')">FullName</th>
            <th @click="sortTable('price')">Price</th>
            <th @click="sortTable('move')">Move</th>
            <th @click="sortTable('pmove')">Percentage Move</th>
            <th @click="sortTable('datetime')">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spot in sortedSpots" :key="spot.fullName">
            <td :data-label="'FullName'">{{ spot.fullName }}</td>
            <td :data-label="'Price'">{{ spot.price }}</td>
            <td :data-label="'Move'">{{ spot.move }}</td>
            <td :data-label="'Percentage Move'" :class="{'negative': spot.pmove < 0, 'positive': spot.pmove > 0}">
              {{ spot.pmove ? spot.pmove.toFixed(2) : 'N/A' }}%
            </td>
            <td :data-label="'Time'">{{ spot.datetime }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="contact" id="contact">
    <div class="container">
      <div class="heading text-center">
        <h2>Contact
          <span> Us </span></h2>
        <p>Contact our support centre and we'll get back to you as soon as possible.
          <br> During business hours, we will respond within 48 hours.</p>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="title">
            <h2>FIND US
              <span style="color: #17a2b8;"> HERE </span></h2>
          </div>
          <div class="content">
            <div class="info">
              <i class="fas fa-mobile-alt"></i>
              <h4 class="d-inline-block">PHONE :
                <br>
                <span>(021) 700 4800
                  <br>
                  +27 21 700 4800 (International)</span></h4>
            </div>
            <div class="info">
              <i class="far fa-envelope"></i>
              <h4 class="d-inline-block">EMAIL :
                <br>
                <span>support@sharenet.co.za</span></h4>
            </div>
            <div class="info">
              <i class="fas fa-map-marker-alt"></i>
              <h4 class="d-inline-block">ADDRESS :<br>
                <span>301, 3rd Floor Imperial Terraces
                Tyger Waterfront
                <br>
                Carl Cronje Drive
                Bellville, Cape Town
                7530</span></h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4949556039032!2d18.627532675508647!3d-33.876904473223405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1721815420033!5m2!1sen!2sza"
              width="90%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-md-7">
          <form>
            <div class="row">
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder="Name">
              </div>
              <div class="col-sm-6">
                <input type="email" class="form-control" placeholder="Email">
              </div>
              <div class="col-sm-12">
                <input type="text" class="form-control" placeholder="Subject">
              </div>
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
            </div>
            <button class="btn btn-block" type="submit">Send Now!</button>
          </form>
        </div>
      </div>
    </div>
    </section>
    <section  class="orkshops" id="contact">
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

    <!-- Banner -->
    <section class="hero">
      <img src="https://i.postimg.cc/tJK8BhHs/unnamed.png" alt="Banner Image" class="hero-banner">
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
            <router-link class="nav-link" to="/workshops">
              Bookings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              Contact
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
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

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
      spots: [],
      sortKey: '',
      sortAsc: true,
    };
  },
  computed: {
    filteredBookings() {
      return this.showAvailable ? this.bookings.filter(booking => !booking.booked) : this.bookings;
    },
    sortedSpots() {
      if (!this.spots.length) return [];

      const sorted = [...this.spots].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
      const latestSpots = sorted.slice(0, 5);

      if (this.sortKey) {
        return latestSpots.sort((a, b) => {
          const aValue = typeof a[this.sortKey] === 'string' ? a[this.sortKey].toLowerCase() : a[this.sortKey];
          const bValue = typeof b[this.sortKey] === 'string' ? b[this.sortKey].toLowerCase() : b[this.sortKey];
          
          return this.sortAsc ? (aValue > bValue ? 1 : (aValue < bValue ? -1 : 0)) : (aValue < bValue ? 1 : (aValue > bValue ? -1 : 0));
        });
      }

      return latestSpots;
    },
  },
  methods: {
    bookSlot(id) {
      axios.post('http://localhost:3000/book', { booking_id: id })
        .then(response => {
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
        })
        .catch(error => {
          console.error('Error booking slot', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to book the slot.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });
    },
    filterAvailable() {
      this.showAvailable = true;
    },
    showAll() {
      this.showAvailable = false;
    },
    fetchData() {
      axios.get('https://api.sharenet.co.za/api/v1/px2/spots')
        .then(response => {
          console.log('API Response:', response.data);
          this.spots = Array.isArray(response.data.spots) ? response.data.spots : [];
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
    },
    sortTable(key) {
      this.sortKey = key;
      this.sortAsc = !this.sortAsc;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

body {
  font-family: 'Josefin Sans', sans-serif;
}
h2 {
  font-size: 40px;
  font-weight: 700;
}

/* Hero Section */
.hero1 {
  position: relative;
  text-align: center;
  color: white;
}

.hero-banner1 {
  width: 100%;
  height: 60vh;
  margin-top: 0.1%;
}

/* Banner */
.hero {
  position: relative;
  text-align: center;
  color: white;
}

.hero-banner {
  margin-top: 2%;
  width: 100%;
  height: 15vh;
  display: block;
}

/* Company Heritage Section */
.history {
  padding: 40px;
}

.history h2 {
  text-align: center;
}

.history .blue-text {
  color: #007bff;
  font-family: 'Josefin Sans', sans-serif;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.timeline-item {
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Spot Prices Table */
.spot-prices h2 {
  margin-top: -1%;
  margin-bottom: 2%;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

.table-container {
  overflow-x: auto;
  display: flex;
  justify-content: center;
  padding: 0 10px;
}

table {
  width: 100%;
  max-width: 1000px; 
  border-collapse: collapse;
  margin: 0 auto; 
  margin-bottom: 4%;
}

thead {
  background-color: #17a2b8;
  color: white; 
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  cursor: pointer;
}

th:hover {
  background-color: #f1f1f1;
}

.red-text {
  color: red;
}

.josefin-font {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  justify-content: center;
}

.sort-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.sort-buttons button {
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
}

.sort-buttons button:hover {
  background-color: #138496;
}

.negative {
  color: red;
}

.positive {
  color: green;
}

/* Footer */
footer {

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


.contact {
  padding: 50px 0;
}

.contact .heading h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.contact .heading h2 span {
  color: #17a2b8;
}

.contact .heading p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: #999999;
  margin: 20px 0 60px;
  padding: 0;
}

.contact .form-control {
  padding: 25px;
  font-size: 13px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border: 0;
  border-radius: 10px;
}

.contact button.btn {
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  background: #17a2b8;
  color: #ffffff;
}

.contact .title h3 {
  font-size: 18px;
  font-weight: 600;
}

.contact .title p {
  font-size: 14px;
  font-weight: 400;
  color: #999;
  line-height: 1.6;
  margin: 0 0 40px;
}

.contact .content .info {
  margin-top: 30px;
}

.contact .content .info i {
  font-size: 30px;
  padding: 0;
  margin: 0;
  color: #02434b;
  margin-right: 20px;
  text-align: center;
  width: 20px;
}

.contact .content .info h4 {
  font-size: 13px;
  line-height: 1.4;
}

.contact .content .info h4 span {
  font-size: 13px;
  font-weight: 300;
  color: #999999;
}

.contact-icons {
  margin-left: 20px;
}

.contact-icons a {
  height: 50px;
  width: 50px;
  background-color: #17a2b8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.contact-icons a:hover {
  background-color: black;
}
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
</style>
