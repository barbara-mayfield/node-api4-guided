const express = require("express")
// const dotenv = require("dotenv")
//
// dotenv.config()


const app = express()
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		cohort: provess.env.LAMBDA_COHORT,
		// secret:"hfaiwoehfo94032u4hnkljhbf"
		secret: process.env.SUPER_SECRET_API_KEY
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})