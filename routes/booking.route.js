const router = require("express").Router();
const Booking = require("../models/booking.model");
const checkToken = require("../config/config");


router.post("/new", async (req, res) => {
    try {
      let booking = new Booking(req.body);
  
      let savedBooking = await booking.save();
  
      res.status(201).json({
        message: "booking created sukcess",
      });
    } catch (error) {
      res.status(500).json({
        message: "失败",
        statuscode: "EB500",
      });
    }
  });

  /* 
    @route GET api/bookings
    @desc Gets all items
    @access public
*/
router.get("/all", checkToken, async (req, res) => {
    try {
      let bookings = await Booking.find();
  
      res.status(200).send({
        count: bookings.length,
        bookings,
      });
    } catch (error) {
      res.status(500).json({
        message: "1010101001111000111",
        statuscode: "EB500",
      });
    }
  });

  /* 
    @route GET api/items/:id
    @desc Gets one item
    @access public
*/
router.get("/:id", checkToken, async (req, res) => {
    try {
      let booking = await Booking.findById(req.params.id);
  
      res.status(200).json({
        message: "booking found",
        booking,
      });
    } catch (err) {
      res.status(500).json({
        message: "oh non je ne sais pas ce qui s’est passé",
        statuscode: "EB500",
      });
    }
  });
module.exports = router;