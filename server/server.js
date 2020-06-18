require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const post = require('./routes/api/post');

app.use("/api/post", post);

const port = process.env.PORT || 3000;

async function start() {
    try {
        await mongoose.connect
            (process.env.CONNECTION_STRING, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
