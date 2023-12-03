const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mateen.nizamani0@gmail.com", // Replace with your Gmail address
    pass: "$SettingChange", // Replace with your Gmail password or app password
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: to,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
