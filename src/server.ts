import express, {Express} from 'express'
import cors from 'cors'



const app: Express = express()


const PORT: number = Number(process.env.PORT) || 8000

const HOST: string = process.env.HOST || "localhost"

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json())


app.listen(PORT, HOST, ()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`)
})