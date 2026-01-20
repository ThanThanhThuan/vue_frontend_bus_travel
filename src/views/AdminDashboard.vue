<template>
  <div class="admin-container">
    <div class="admin-header">
      <h2>Admin Dashboard</h2>
      <router-link to="/" class="btn-link">Back to Home</router-link>
    </div>

    <div v-if="loading">Loading bookings...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <table v-else class="booking-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking._id">
          <td>{{ new Date(booking.date).toLocaleDateString() }}</td>
          <td>{{ booking.name }}</td>
          <td>{{ booking.email }}</td>
          <td>{{ booking.phone }}</td>
          <td>{{ booking.destination }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const bookings = ref([]);
const loading = ref(true);
const error = ref(null);
const API_BASE = import.meta.env.VITE_API_BASE_URL;

axios.defaults.baseURL = API_BASE;

onMounted(async () => {
  try {
    const res = await axios.get('/api/bookings');
    bookings.value = res.data;
  } catch (err) {
    error.value = 'Failed to load data. Is the server running?';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.admin-container {
  max-width: 1000px; margin: 2rem auto; padding: 1rem;
}
.admin-header {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;
}
.booking-table {
  width: 100%; border-collapse: collapse; margin-top: 1rem; box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.booking-table th, .booking-table td {
  padding: 1rem; text-align: left; border-bottom: 1px solid #ddd;
}
.booking-table th { background-color: var(--primary-color); color: white; }
.btn-link {
  text-decoration: none; color: var(--primary-color); font-weight: bold; border: 1px solid var(--primary-color); padding: 0.5rem 1rem; border-radius: 5px;
}
</style>