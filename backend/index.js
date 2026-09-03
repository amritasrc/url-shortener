const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter')

const URL = require('./models/url')
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRouter);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send('Short URL not found');
    }

    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server started at PORT: http://localhost:${PORT} `);

});