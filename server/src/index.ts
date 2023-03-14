import express from "express"

const PORT = 8080
const app = express()

app.get("/", (req, res) => {
  res.send("Hellow world!")
})

app.listen(PORT, () => console.log(`⚡ server is running on port ${PORT}`))