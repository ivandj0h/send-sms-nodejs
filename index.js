import dotenv from "dotenv";
import Vonage from "@vonage/server-sdk";
import express from "express";
dotenv.config();

const { json, urlencoded } = express;

const app = express();

app.use(json());
app.use(
	urlencoded({
		extended: true,
	})
);

app.listen(3000, () => {
	console.log("Server listening at http://localhost:3000");
});

const vonage = new Vonage({
	apiKey: process.env.VONAGE_API_KEY,
	apiSecret: process.env.VONAGE_API_SECRET,
});

app.post("/send", (req, res) => {
	// Send SMS
	vonage.message.sendSms(
		process.env.YOUR_VIRTUAL_NUMBER,
		req.body.toNumber,
		req.body.message,
		{ type: "unicode" },
		(err, responseData) => {
			if (err) {
				console.log(err);
			} else {
				if (responseData.messages[0]["status"] === "0") {
					console.log(responseData);
				} else {
					console.log(
						`Message failed with error: ${responseData.messages[0]["error-text"]}`
					);
				}
			}
		}
	);
    res.end();
});
