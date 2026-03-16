import express, {Express} from 'express'
import cors from 'cors'
import postRouter from './postApp/post.router'


const app: Express = express()


const PORT: number = Number(process.env.PORT) || 0

const HOST: string = process.env.HOST || ""

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
app.use(express.json({ limit: "50mb" }))

app.use("/api/post", postRouter)


app.listen(PORT, HOST, ()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`)
})