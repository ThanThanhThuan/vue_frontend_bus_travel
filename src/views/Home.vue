<script setup>
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';
import BookingModal from '../components/BookingModal.vue';

// --- State ---
const isMenuOpen = ref(false);
const isModalOpen = ref(false);

// --- Actions ---
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const openBooking = () => {
  isModalOpen.value = true;
};

// --- Animations (ScrollReveal) ---
onMounted(() => {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  const sr = ScrollReveal();

  sr.reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
  sr.reveal(".header__content p", { ...scrollRevealOption, delay: 500 });
  sr.reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
  sr.reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
  sr.reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
  sr.reveal(".showcase__image img", { ...scrollRevealOption, origin: "left" });
  sr.reveal(".showcase__content h4", { ...scrollRevealOption, delay: 500 });
  sr.reveal(".showcase__content p", { ...scrollRevealOption, delay: 1000 });
  sr.reveal(".showcase__btn", { ...scrollRevealOption, delay: 1500 }); // Fixed selector typo
  sr.reveal(".banner__card", { ...scrollRevealOption, interval: 500 });
  sr.reveal(".discover__card", { ...scrollRevealOption, interval: 500 });
});
</script>

<template>
  <nav>
    <div class="nav__header">
      <div class="nav__logo">
        <a href="#" class="logo">BusTraveller- THAN THANH THUAN</a>
      </div>
      <div class="nav__menu__btn" id="menu-btn" @click="toggleMenu">
        <i :class="isMenuOpen ? 'ri-close-line' : 'ri-menu-line'"></i>
      </div>
    </div>
    <ul class="nav__links" :class="{ open: isMenuOpen }" @click="closeMenu">
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#tour">TOUR</a></li>
      <li><a href="#package">PACKAGE</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <!-- Mobile only Booking button link -->
      <li @click.stop="openBooking"><a href="#">BOOK TRIP</a></li>
    </ul>
    <div class="nav__btns">
      <button class="btn" @click="openBooking">BOOK TRIP</button>
    </div>
  </nav>

  <header id="home">
    <div class="header__container">
      <div class="header__content">
        <p>BUS YOUR TRAVEL JOURNEY</p>
        <h1>Where Every Bus Ride Feels Magical!</h1>
        <div class="header__btns">
          <button class="btn" @click="openBooking">Book A Trip Now</button>
          <a href="#">
            <span><i class="ri-play-circle-fill"></i></span>
          </a>
        </div>
      </div>
      <div class="header__image">
        <img src="/img/bus.png" alt="header" />
      </div>
    </div>
  </header>

  <section class="section__container destination__container" id="about">
    <h2 class="section__header">Popular Destination</h2>
    <p class="section__description">
      Discover the Most Loved Destination Around the Globe
    </p>
    <div class="destination__grid">
      <div class="destination__card">
        <img src="/img/card.jpg" alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>Sacred Calm at Badrinath Temple.</h4>
            <p>Badrinath, Uttarakhand, India</p>
          </div>
          <div class="destination__ratings">
            <span><i class="ri-star-fill"></i></span> 4.7
          </div>
        </div>
      </div>
      <div class="destination__card">
        <img src="/img/card2.jpg" alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>Divine Majesty at Jagannath Temple.</h4>
            <p>Puri, Odisha, India</p>
          </div>
          <div class="destination__ratings">
            <span><i class="ri-star-fill"></i></span> 4.8
          </div>
        </div>
      </div>
      <div class="destination__card">
        <img src="/img/card3.webp" alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>Spiritual Serenity at Neem Karoli Temple.</h4>
            <p>Dehradun, India</p>
          </div>
          <div class="destination__ratings">
            <span><i class="ri-star-fill"></i></span> 4.5
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section__container journey__container" id="tour">
    <h2 class="section__header">Bus Travel, the Easy Way!</h2>
    <p class="section__description">Effortless planning for Your Next Adventure</p>
    <div class="journey__grid">
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-bookmark-3-line"></i></span>
          <h4>Seamless Booking Process</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-bookmark-3-line"></i></span>
          <h4>Seat Booking, one Click Away</h4>
          <p>From booking tickets to tracking your bus in real-time, everything is just a click away.</p>
        </div>
      </div>
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-landscape-fill"></i></span>
          <h4>Tailored Itineraries</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-landscape-fill"></i></span>
          <h4>Customized Plans Just for You</h4>
          <p>Everyone travels differently — that’s why we create plans just for you.</p>
        </div>
      </div>
      <div class="journey__card">
        <div class="journey__card__bg">
          <span><i class="ri-map-2-line"></i></span>
          <h4>Expert Local Insights</h4>
        </div>
        <div class="journey__card__content">
          <span><i class="ri-map-2-line"></i></span>
          <h4>Insider Tips and Recommendations</h4>
          <p>Our insights are powered by real people who know the roads.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section__container showcase__container" id="package">
    <div class="showcase__image">
      <img src="/img/showcase.webp" alt="showcase" />
    </div>
    <div class="showcase__content">
      <h4>Ignite Your Wanderlust with Every Bus Ride</h4>
      <p>Traveling by bus offers comfort and stunning views on your way to amazing destinations.</p>
      <p>Explore the World by Bus with Ease Hop on a bus and experience the joy of travel.</p>
      <div class="showcase__btn">
        <button class="btn" @click="openBooking">
          BOOK A Bus Now
          <span><i class="ri-arrow-right-line"></i></span>
        </button>
      </div>
    </div>
  </section>

  <section class="section__container banner__container">
    <div class="banner__card"><h4>10+</h4><p>Years Experience</p></div>
    <div class="banner__card"><h4>12k</h4><p>Happy Clients</p></div>
    <div class="banner__card"><h4>4.8</h4><p>Overrall Ratings</p></div>
  </section>

  <section class="section__container discover__container">
    <h2 class="section__header">Discover Peace, Culture, and Devotion</h2>
    <p class="section__description">Witness Stunning Landscapes from the Comfort of Your Bus Seat</p>
    <div class="discover__grid">
      <div class="discover__card">
        <span><i class="ri-camera-lens-line"></i></span>
        <h4>Your Road, Your Story</h4>
        <p>Experience the freedom of travel with our comfortable and reliable bus trips.</p>
      </div>
      <div class="discover__card">
        <span><i class="ri-ship-line"></i></span>
        <h4>Coastal Wonders</h4>
        <p>Embark on a journey through the mesmerizing coastal wonders.</p>
      </div>
      <div class="discover__card">
        <span><i class="ri-landscape-line"></i></span>
        <h4>Historic Landmarks</h4>
        <p>Explore the charm of historic landmarks on our specially curated bus tours.</p>
      </div>
    </div>
  </section>

  <footer id="contact">
    <div class="section__container footer__container">
      <div class="footer__col">
        <div class="footer__logo"><a href="#" class="logo">BusTraveller</a></div>
        <p>Explore the world with ease and excitement.</p>
        <ul class="footer__socials">
          <li><a href="#!"><i class="ri-facebook-fill"></i></a></li>
          <li><a href="#!"><i class="ri-instagram-line"></i></a></li>
          <li><a href="#!"><i class="ri-youtube-line"></i></a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Quick Links</h4>
        <ul class="footer__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Bus</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Cruise</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Contact Us</h4>
        <ul class="footer__links">
          <li><a href="#"><span><i class="ri-phone-fill"></i></span>+91 12345 67890</a></li>
          <li><a href="#"><span><i class="ri-record-mail-line"></i></span>info@BusTraveller</a></li>
          <li><a href="#"><span><i class="ri-map-pin-2-fill"></i></span> Agra, India</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Subscribe</h4>
        <form action="#!"><input type="text" placeholder="Enter your email" /><button class="btn">Subscribe</button></form>
      </div>
    </div>
    <div class="footer__bar">
  Copyright © 2025 Code Prashtt. All rights reserved. | 
  <router-link to="/admin">Admin Login</router-link>
</div>
  </footer>

  <!-- Booking Modal Component -->
  <BookingModal :isOpen="isModalOpen" @close="isModalOpen = false" />
</template>