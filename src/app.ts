import * as express from "express"
const app = express()
import users from './usuario'

app.use(express.json())
app.use("/user", users)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`executando em http://localhost:${PORT}`)
})