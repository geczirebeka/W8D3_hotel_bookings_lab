<template>
  <div id="bookingsGrid">
      <booking-detail v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import BookingDetail from './BookingDetail.vue'

export default {
    name: 'bookings-grid',
    components: {
        'booking-detail': BookingDetail
    },
    props: ['bookings']
}
</script>

<style>

</style>