<template>
  <form id="bookings-form" v-on:submit="addBooking" method="post">
      <h2>Add a Booking</h2>
      <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required/>
      </div>
      <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required/>
      </div>
      <div>
          <label for="checkIn">Checked In:</label>
          <input type="checkbox" id="checkIn" v-model="checkIn"/>
      </div>

      <input type="submit" value="save" id="save"/>
  </form>
</template>

<script>
import BookingService from '@/services/BookingService.js'
import {eventBus} from '@/main.js'

export default {
    name: 'bookings-form',
    data() {
        return {
            name: '',
            email: '',
            checkIn: null
        }
    },
    methods: {
        addBooking(e){
            e.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                checkIn: this.checkIn
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }
    }
}
</script>

<style>

</style>