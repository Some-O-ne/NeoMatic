import express from 'express'
import routers from './routes/routes.js'
import cors from 'cors'
const PORT = 3000
const HOSTNAME = 'localhost'

const app = express()
app.use(cors({
    credentials: true
  }));


app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}, ip: ${req.ip}`)
    next();})
app.use('/api/v1',routers)

app.use(express.json())

app.listen(PORT,HOSTNAME,()=>{
    console.log(`Server has been started on port http://${HOSTNAME}:${PORT}`)
})