const express = require("express");
//const serverless = require('serverless-http')
const path = require("path");
const app = express();
const hbs = require("hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./db/connect");

const Contact = require("./models/contact");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
//..const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", template_path);


// ... Your routes here
app.get("/", (req, res) =>{
    res.render("index")
});
app.get("/data", (req, res) =>{
    res.render("data")
});


app.get("/resume", (req, res) =>{
    res.render("resume")
});

app.get("/program", (req, res) =>{
    res.render("program")
});

app.get("/read", (req, res) =>{
    res.render("read")
});

app.get("/developer", (req, res) =>{
    res.render("developer")
});

app.get("/weather", (req, res) =>{
    res.render("weather")
});

app.post("/message", async (req, resp) => {
    try {
        // Check if the email already exists
        const existingContact = await Contact.findOne({ email: req.body.email });

        if (existingContact) {
            // Update the existing contact instead of creating a new one
            existingContact.name = req.body.name;
            existingContact.subject = req.body.subject;
            existingContact.message = req.body.message;

            let result = await existingContact.save();
            result = result.toObject();
            delete result.password;
            resp.redirect("/"); // Redirect to the home page
            return;
        }

        // If the email doesn't exist, proceed with saving the new contact
        let contact = new Contact(req.body);
        let result = await contact.save();
        result = result.toObject();
        delete result.password;
        resp.redirect("/"); // Redirect to the home page
    } catch (err) {
        console.error("Error saving contact:", err);

        // Check for validation errors
        if (err.errors) {
            const validationErrors = Object.values(err.errors).map(error => error.message);
            resp.status(400).json({ errors: validationErrors });
        } else {
            resp.status(500).json({ error: "Something went wrong", details: err.message });
        }
    }
});



app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});






