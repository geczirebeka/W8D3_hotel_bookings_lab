<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import BookingsForm from './components/BookingsForm.vue';
import BookingsGrid from './components/BookingsGrid.vue';
import BookingService from './services/BookingService.js';

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    };
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }


}
</script>

<style>

</style>
