<template>
  <div class="booking">
      <h2>{{booking.name}}</h2>
      <p>Email: {{booking.email}}</p>
      <p>Checked In: {{booking.checkIn}}</p>
      
      <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js';

export default {
    name: 'booking-detail',
    props: ['booking'],
    // data() {
    //     return {
    //         checkedIn: ''
    //     }
    // },
    methods: {
        deleteBooking() {
            BookingService.deleteBooking(this.booking._id)
                .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    //     if (this.booking.checkIn === true) {
    //         this.checkedIn = "Checked In";
    //     } else {
    //         this.checkedIn = "Not Checked In";
    //     }
    }

}
</script>

<style>

</style>