<template>
  
  <div class="header">
    <div class="cont">
      <nav class="navbar">
        <div class="logo">
          <img src="https://i.ibb.co/G7XDnNQ/Sharenet-Logo-transparent.png" alt="Sharenet Logo">
        </div>
        <div class="menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
            <li><router-link to="/Workshops">Bookings</router-link></li>
     
          </ul>
        </div>
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('active');
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  
}

.cont {
  max-width: 1800px;
  max-height: 900px;

  margin-bottom: 0.3%;
  margin-top: -2%;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
}

.header {
  width: 100%;
  margin-top:3% ;
  
  opacity: 0.9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar {
margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
}

.logo img {
  height: 50px;
  padding: 5px;
}

.menu {
  display: flex;
}

.menu ul {
  display: flex;
  list-style: none;
}

.menu ul li {
  margin-right: 1rem;
}

.menu ul li a {
  text-decoration: none;
  padding: 1em;
  display: inline-block;
  transition: all .5s;
  position: relative;
  color: black;
}

.menu ul li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #eef0f0;
  transform: scaleX(0);
  transform-origin: left;
  transition: all .5s;
}

.menu ul li a:hover::before {
  transform: scaleX(1);
  
}

.menu ul li a:hover {
  background: #17a2b8;
  color: white;
  text-align: center;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
}

.menu-toggle .bar {
  background: black;
  height: 3px;
  width: 25px;
  margin: 3px 0;
  transition: all 0.3s;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu {
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: #f8f9fa;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .menu.active {
    display: flex;
  }

  .menu ul {
    display: block;
    width: 100%;
  }

  .menu ul li {
    margin: 0;
    width: 100%;
  }

  .menu ul li a {
    display: block;
    padding: 1rem;
    text-align: left;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (max-width: 640px) {
  .menu ul li a {
    padding: .5em;
  }

  .menu ul li a::before {
    content: '';
    width: 0;
  }
}
</style>
