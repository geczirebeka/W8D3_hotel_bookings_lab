<template>
  <div class="booking">
      <h2>{{booking.name}}</h2>
      <p>{{booking.email}}</p>
      <p>{{booking.checkIn}}</p>
      
      <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService.js'

export default {
    name: 'booking-detail',
    props: ['booking']


}
</script>

<style>

</style>