const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>")
})

app.get("/people", (req, res) => {
	res.status(200).json( data )
})

const data = [{
	person1: {
		name: "John Doe",
		email: "John@Doe.com"
	},
	person2: {
		name: "Jenny Webber",
		email: "Jenny@Webber.com"
	}
}]

app.listen(5000, () => {
	console.log("Server running on port 5000!")
})
