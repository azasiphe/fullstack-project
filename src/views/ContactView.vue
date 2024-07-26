<template>
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
  <footer>
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/workshops">Bookings</router-link>
        </li>
     
      </ul>
    </nav>
    <div class="contact-icons d-flex justify-content-center gap-2 mt-1">
      <a href="https://www.linkedin.com/company/sharenet-pty-ltd/" target="_blank" class="fab fa-linkedin rounded-circle d-flex align-items-center justify-content-center"></a>
      <a href="support@sharenet.co.za" class="fas fa-envelope rounded-circle d-flex align-items-center justify-content-center" title="Email"></a>
      <a href="https://www.facebook.com/sharenetsa" target="_blank" class="fab fa-facebook rounded-circle d-flex align-items-center justify-content-center" title="Facebook"></a>
      <a href="https://x.com/SharenetSA" target="_blank" class="fab fa-twitter rounded-circle d-flex align-items-center justify-content-center" title="Twitter"></a>
    </div>
    <p>© 2024 Sharenet. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');

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

footer {
  background-color: #17a2b8;
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

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2em;
  }

  .hero-text p {
    font-size: 1em;
  }

  th, td {
    padding: 3px;
  }
}
</style>
