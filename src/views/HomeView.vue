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
        <p class="josefin-font">Sharenet, established in 1988, has grown from providing real-time JSE share prices to becoming a trusted household name with over 150,000 clients. By investing in technology, Sharenet now offers tools for successful trading and investing in South African and international stock markets. Our award-winning platform provides access to over 70,000 financial instruments. Proud of our South African heritage, we continually strive for excellence. Sharenet operates through three divisions: Sharenet Wealth, Sharenet Securities, and Sharenet Labs, serving individuals and companies across South Africa and Africa.</p>
      </div>
    </section>
    <!-- Spot Prices Table -->
    <section class="spot-prices">
      <h2>SPOT <span class="red-text">PRICES</span></h2>
      <div class="sort-buttons">
        <button @click="sortTable('price')">Sort by Price</button>
        <button @click="sortTable('fullName')">Sort A-Z</button>
      </div>
      <div class="table-container">
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
              <td :data-label="'Percentage Move'" :class="{'negative': spot.pmove < 0, 'positive': spot.pmove > 0}"> {{ spot.pmove ? spot.pmove.toFixed(2) : 'N/A' }}% </td>
              <td :data-label="'Time'">{{ spot.datetime }}</td>
            </tr>
          </tbody>
        </table>
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
            <router-link class="nav-link" to="/"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact"> Contact </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/workshops"> Workshops </router-link>
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
export default {
  data() {
    return {
      spots: [],
      sortKey: '',
      sortAsc: true,
    };
  },
  computed: {
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
  margin-bottom: -2%;
  width: 100%;
  height: 13vh;
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
  color: #007BFF;
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
  background-color: #17A2B8;
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
  background-color: #F1F1F1;
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
  background-color: #17A2B8;
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
footer {
  background-color: #F8F9FA;
  padding: 20px;
  text-align: center;
}
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
}
.nav-item {
  display: inline;
  margin: 0 10px;
  color: white;
}
.nav-link {
  color: #007BFF;
  text-decoration: none;
  color: white;
}
.nav-link:hover {
  text-decoration: underline;
}
.contact-icons a {
  color: #007BFF;
  font-size: 24px;
  transition: color 0.3s;
}
.contact-icons a:hover {
  color: #0056B3;
}
footer p {
  margin: 0;
  font-size: 14px;
  color: white;
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
/* Responsive Table */
@media screen and (max-width: 600px) {
  .table-container {
    overflow-x: auto;
  }
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  table thead {
    display: none;
  }
  table tbody, table tr, table td {
    display: block;
    width: 100%;
  }
  table tr {
    margin-bottom: 15px;
  }
  table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }
  table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 10px;
    font-weight: bold;
    text-align: left;
  }
}
</style>