const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* 
    @route POST api/auth/register
    @desc register user
    @access public
*/
router.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let user = new User({ name, email });

    //hash password before save
    let hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;

    //save user
    await user.save();
    //201 - success and new data was added
    res.status(201).json({ message: "user registered successfully!" });
  } catch (error) {
    //   500 internal server error
    res
      .status(500)
      .json({ message: "oh no!!!  user not registered successfully!" });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    //search db for user with email
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "user not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Aiyo!! you tryna hack me wah?" });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      "seifewdaystogo",
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err; //if error go to catch

        res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "hmm... dunno what happened man!" });
  }
});

module.exports = router;