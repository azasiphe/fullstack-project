<template>
  <div>
  
    <!-- Hero Section -->
    
    <!-- Company Heritage Section -->
    <section class="history">
      <h2>A LEADING <span class="blue-text">FINANCIAL SERVICES</span> AND DATA PROVIDER</h2>
      
      <div class="timeline">
        
       
      
          <p>Sharenet, established in 1988, has grown from providing real-time JSE share prices to becoming a trusted household name with over 150,000 clients. 
            By investing in technology, Sharenet now offers tools for successful trading and investing in South African and international stock markets.
             Our award-winning platform provides access to over 70,000 financial instruments. Proud of our South African heritage, we continually strive for excellence.
              Sharenet operates through three divisions: Sharenet Wealth, Sharenet Securities, 
            and Sharenet Labs, serving individuals and companies across South Africa and Africa.</p>
       
      
      </div>
    </section>

   
    

    <!-- Spot Prices Table -->
    <section class="spot-prices">
      <h2 class="josefin-font">SPOT <span class="red-text">PRICES</span></h2>
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
            <td :data-label="'Percentage Move'">{{ spot.pmove ? spot.pmove.toFixed(2) : 'N/A' }}%</td>
            <td :data-label="'Time'">{{ spot.datetime }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Client Testimonials and Success Stories -->
    <section class="testimonials">
      <h2 class="josefin-font">OUR <span class="blue-text">CLIENTS</span></h2>
      <div class="logo-grid">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
          <img :src="logo.src" :alt="logo.alt" class="logo"/>
        </div>
      </div>
    </section>

  
    <section class="hero">
      <img src="https://i.postimg.cc/tJK8BhHs/unnamed.png" alt="Banner Image" class="hero-banner">
  
    </section>
    <!-- Footer -->
    <footer>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="contact-icons d-flex justify-content-center gap-2 mt-1">
            <a href="https://www.linkedin.com/in/azasiphe-ndoro-01918827a/" target="_blank" class="fab fa-linkedin rounded-circle d-flex align-items-center justify-content-center"></a>
            <a href="mailto:azasiphendoro@gmail.com" class="fas fa-envelope rounded-circle d-flex align-items-center justify-content-center" title="Email"></a>
            <a href="https://www.facebook.com/azasiphe.ndoro" target="_blank" class="fab fa-facebook rounded-circle d-flex align-items-center justify-content-center" title="Facebook"></a>
            <a href="https://twitter.com/azasiphe_ndoro" target="_blank" class="fab fa-twitter rounded-circle d-flex align-items-center justify-content-center" title="Twitter"></a>
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
      logos: [
        { src: 'https://i.ibb.co/kcbXtqC/download-17.png', alt: 'Client 1' },
        { src: 'https://i.ibb.co/fdKXQ0Y/download-16.png', alt: 'Client 2' },
        { src: 'https://i.ibb.co/X8MDsLp/download-14.png', alt: 'Client 3' },
        { src: 'https://i.ibb.co/VtbJ47r/download-8.png', alt: 'Client 4' },
        { src: 'https://i.ibb.co/bWzKB1d/download-12.png',  alt: 'Client 5' },
        { src: 'https://i.ibb.co/6NYvtJj/download-18.png', alt: 'Client 6' },
        { src: 'https://i.ibb.co/Ph7R63B/download-13.png', alt: 'Client 7' },
        { src: 'https://i.ibb.co/G7XDnNQ/Sharenet-Logo-transparent.png', alt: 'Client 8' },
        { src: 'https://i.ibb.co/WnCYWDT/download-15.png', alt: 'Client 9' },
        { src: 'https://i.ibb.co/SB1VpVw/download-19.png', alt: 'Client 10' },
      ],
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
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
h2{
  font-size: 40px;
  font-weight: 700;
}
/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  color: white;
}

.hero-banner {
  width: 100%;
  height: auto;
  display: block;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.hero-text h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.hero-text p {
  font-size: 1.2em;
}

.hero-text button {
  background-color: #17a2b8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;
}

.hero-text button:hover {
  background-color: #138496;
}

/* Company Heritage Section */
.history {
  padding: 70px;
  
}

.history h2 {
  text-align: center;
}
.testimonials  .blue-text {
  color: #007bff;
  font-family: 'Josefin Sans', sans-serif;
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
  max-width: 1000px; /* Adjust as needed */
  border-collapse: collapse;
  margin: 0 auto; /* Centers the table */
}

thead {
  background-color: #17a2b8;
  color: white; /* Ensure text is readable on the blue background */
}

th, td {
  border: 1px solid #ddd;
  padding: 12px; /* Increased padding for better readability */
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
}

@media (max-width: 768px) {
  table {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
  
  th, td {
    padding: 8px; /* Reduce padding for smaller screens */
  }
}

@media (max-width: 480px) {
  table {
    font-size: 12px; /* Further reduce font size for very small screens */
  }
}

/* Testimonials Section */

.testimonials h2{
  font-size: 40px;
  font-weight: 700;
}
.testimonials {
  padding: 70px;
  
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
}

.logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.logo:hover {
  filter: grayscale(0%);
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2em;
  }

  .hero-text p {
    font-size: 1em;
  }

  th, td {
    padding: 4px;
  }
}
</style>
