<template>
 <div class="background">
  <div class="container">
    <div class="screen">
    
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
            </div>
            <!-- <div class="con-det d-flex align-items-start mb-3">
              <div class="det-icon fs-1 d-flex justify-content-center align-items-center">
                <i class="fas fa-map-marker-alt text-orange"></i>
              </div>
              <div class="det-info d-flex flex-column ps-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4949556039032!2d18.627532675508647!3d-33.876904473223405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1721815420033!5m2!1sen!2sza"
                  width="90%"
                  height="300"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <span class="wht fw-bold">301, 3rd Floor Imperial Terraces<br>Tyger Waterfront<br>Carl Cronje Drive<br>Bellville, Cape Town<br>7530</span>
              </div>
            </div>
            <div class="con-det d-flex align-items-start mb-3">
              <div class="det-icon fs-1 d-flex justify-content-center align-items-center">
                <i class="fas fa-envelope-open text-orange"></i>
              </div>
              <div class="det-info d-flex flex-column ps-4">
                <span class="text-gray fw-bolder">EMAIL</span>
                <span class="wht fw-bold">support@sharenet.co.za</span>
              </div>
            </div>
            <div class="con-det d-flex align-items-start">
              <div class="det-icon fs-1 d-flex justify-content-center align-items-center">
                <i class="fas fa-phone-square-alt text-orange"></i>
              </div>
              <div class="det-info d-flex flex-column ps-4">
                <span class="text-gray fw-bolder">PHONE</span>
                <span class="wht fw-bold">(021) 700 4800<br>+27 21 700 4800 (International)</span>
              </div>
            
          </div> -->
          <div class="contact-icons d-flex justify-content-start gap-3 mt-4">
            <a href="https://www.linkedin.com/in/azasiphe-ndoro-01918827a/" target="_blank" class="fab fa-linkedin rounded-circle d-flex align-items-center justify-content-center"></a>
            <a href="mailto:azasiphendoro@gmail.com" class="fas fa-envelope rounded-circle d-flex align-items-center justify-content-center" title="Email"></a>
            <a href="https://www.facebook.com/azasiphe.ndoro" target="_blank" class="fab fa-facebook rounded-circle d-flex align-items-center justify-content-center" title="Facebook"></a>
            <a href="https://twitter.com/azasiphe_ndoro" target="_blank" class="fab fa-twitter rounded-circle d-flex align-items-center justify-content-center" title="Twitter"></a>
          </div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" value="Krisantus Wanandi">
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL">
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO">
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE">
            </div>
            <div class="app-form-group buttons">
              
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </div>
 </div>

</template>

<style scoped>
  *, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.background {
  background: black;
  font-size: 12px;
}

body, button, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 700px;
  
  margin: auto;
  padding:10px;
  
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #17a2b8;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #17a2b8;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #17a2b8;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #17a2b8;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #17a2b8;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #17a2b8;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
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

</style>