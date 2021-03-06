const express = require('express')
const tripController = require('./controller')
const router = express.Router()
router.get("/", tripController.getTrips)
router.get("/:id", tripController.getTripById)
router.post("/", tripController.createTrip)
// router.put("/:id", tripController.replaceTripById)
// router.patch("/:id", tripController.updateTripsById)
// router.delete("/:id", tripController.deleteTripsById)
module.exports = router