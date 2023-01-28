const express = require('express');
const routerApi = require('./routes');

const cors = require('cors')

const app = express();
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handle')

const port = 3000;
const info = require('./info/index')

app.use(express.json());

// links con permiso de hacer request, se enviaría al cors
// const whiteList = ['http://127.0.0.1:5500', 'https://myapp.co']
// const options = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin)){

//       // null: no hay error, true: el acceso es permitido
//       callback(null, true)
//     }else{
//       callback(new Error('No permitido'))
//     }
//   }
// }

// app.use(cors(options));

app.use(cors());

app.get('//api/v1', (req, res) => {
  res.json(info)
})

routerApi(app);

// los middlewares se utilizan despues d edefinir el routerApi
// el orden en que ponga los middlewares es importante
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port);

