use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "James Clarkson",
        email: "jamesclarkson@here.com",
        checkIn: true
    },

    {
        name: "Rebeka Geczi",
        email: "rebekageczi@there.com",
        checkIn: false
    }
]);