const router = require("express").Router();

router.get("/usertest", (req,res) => {
    res.send("User Test is Sucessfull");
});

router.post("/userposttest", (req,res) => {
    const username = req.body.username;

    console.log(username);
});

module.exports = router;