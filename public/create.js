// api/create.js
const express = require('express');
const cors = require('cors');
const User = require('./config');  // Adjust the path accordingly
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
    const data = req.body;
    console.log("Data of Users", data);
    // await User.add(data)
    res.send({ msg: "User Added!" });
});

app.listen(3000, () => console.log("Up and running 3000"));