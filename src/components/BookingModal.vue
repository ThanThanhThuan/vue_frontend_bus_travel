<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <span class="close-btn" @click="$emit('close')"><i class="ri-close-line"></i></span>
      <h3>Book Your Trip</h3>
      <form @submit.prevent="submitBooking">
        <input v-model="form.name" type="text" placeholder="Full Name" required />
        <input v-model="form.email" type="email" placeholder="Email Address" required />
        <input v-model="form.phone" type="tel" placeholder="Phone Number" required />
        <select v-model="form.destination" required>
          <option value="" disabled selected>Select Destination</option>
          <option value="Badrinath">Badrinath</option>
          <option value="Puri">Puri</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" class="btn">Confirm Booking</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;
axios.defaults.baseURL = API_BASE;  
const props = defineProps(['isOpen']);
const emit = defineEmits(['close']);

const form = reactive({
  name: '',
  email: '',
  phone: '',
  destination: ''
});

const submitBooking = async () => {
  try {
    await axios.post('/api/book', form);
    alert('Booking Successful!');
    emit('close');
    // Reset form
    Object.assign(form, { name: '', email: '', phone: '', destination: '' });
  } catch (error) {
    alert('Error booking trip. Please try again.');
    console.error(error);
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  position: relative;
  text-align: center;
}
.close-btn {
  position: absolute; top: 1rem; right: 1rem;
  font-size: 1.5rem; cursor: pointer;
}
input, select {
  width: 100%; padding: 0.8rem; margin-bottom: 1rem;
  border: 1px solid #ddd; border-radius: 5px;
}
h3 { margin-bottom: 1.5rem; color: var(--text-dark); }
</style>