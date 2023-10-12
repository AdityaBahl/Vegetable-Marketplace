const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoURL = "mongodb+srv://adityabahl:I3gFTBr38Qa2yM7S@cluster0.e47ph4l.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
    useNewURLParser: true
}).then(() => { console.log("Connected to the database"); })
    .catch((e) => console.log(e));

app.listen(5000, () => {
    console.log("Server Started");
})
app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;

    try {
        if (data == "aditya") {
            res.send({ status: "ok" });
        } else {
            res.send({ status: "User Not Found" });
        }
    }
    catch (error) {
        res.send({ status: "Error" });
    }

});