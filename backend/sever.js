const express = require('express');
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to my Class API</h1>
    <p>/api/teacher</p>
    <p>/api/students</p>
    `);
})


app.get("/api/teacher", cors(), (req, res) => {
    res.json({
        "teacher": "Drew"
    })
})

app.get("/api/students", cors(), (req, res) => {
    res.json({
        "students": [
            {
                name: "Jeremy"
            },
            {
                name: "Victor"
            },
            {
                name: "Raz"
            },
            {
                name: "Amit"
            },
            {
                name: "Manny"
            }
        ]
    })
})



app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})