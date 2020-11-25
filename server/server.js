require('./config/config');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('<h1>Bienvenido a rest con mi servidor</h1>')
})

app.get('/usuario', function (req, res) {
  res.json({
    ok: "200",
    mensaje: "usuarios consultados con resty"
  });
})

app.post('/usuario', function (req, res) {
  let nombre=req.body.nombre
  let body = req.body;
  if(nombre===undefined){
      res.status(400).json({
        ok: 400,
        mensaje: "Favor de enviar el valor del nombre"
      })
  }else{
      res.json({
      ok: "200",
      mensaje: "usuario insertado con exito",
      body: body
    });
  }  
})

app.put('/usuario/:id/:nombre', function (req, res) {
  let id=req.params.id;
  let nombre=req.params.nombre;
 
  res.json({
    ok: "200",
    mensaje: "usuario Actualizado con exito", 
    id: id,
    nombre: nombre
  });
})

app.delete('/usuario/:id', function (req, res) {
  let id=req.params.id;
  res.json({
    ok: "200",
    mensaje: "usuario eliminado con exito", 
    id: id
  });
})
 

app.listen(process.env.PORT, ( )=> {
  console.log('La aplicacion esta en linea por el puerto', process.env.PORT)
});