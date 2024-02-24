const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

//Import Router de Libros
const routerLibros = require('./routes/libros')

//Import middleware errorHandler
const errorHandler = require('./middlewares/errorHandler')


app.use('/libros', routerLibros)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto: ${port}`)
})