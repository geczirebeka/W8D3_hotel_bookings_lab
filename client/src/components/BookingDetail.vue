<template>
  <div class="booking">
      <h2>{{booking.name}}</h2>
      <p>Email: {{booking.email}}</p>
      <p v-if="booking.checkIn" >Checked In</p>
      <p v-if="!booking.checkIn" >Not Checked In</p>
      
      <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js';

export default {
    name: 'booking-detail',
    props: ['booking'],
   
    methods: {
        deleteBooking() {
            BookingService.deleteBooking(this.booking._id)
                .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }

}
</script>

<style>

</style>