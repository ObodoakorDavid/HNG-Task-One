import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const port = 3000;

app.set("trust proxy", true);
app.use(cors());

app.get("/", (req, res) =>
  res.send("Kindly head to /api/hello to view the task")
);

app.get("/api/hello", async (req, res) => {
  const { visitor_name } = req.query;
  try {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const response = await axios.get(`http://ip-api.com/json/${clientIp}`);
    const { city } = response.data;

    const response1 = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${city}`
    );

    const { data } = response1;
    res.status(200).json({
      client_ip: clientIp, // The IP address of the requester
      location: city, // The city of the requester
      greeting: `Hello, ${
        visitor_name ? visitor_name : "Anon"
      }!, the temperature is ${data.current.temp_c} degrees Celcius in ${city}`,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ message: "Something went wrong" });
  }
});

const startServer = () => {
  app.listen(port, () => console.log(`Server is listening at PORT: ${port}`));
};

startServer();
