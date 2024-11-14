const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');

//vobjteto da api
const app = express();
//definindo a porta
const PORT = process.env.PORT || 3000;
//cors
app.use(cors());

//body parser na api
app.use(bodyParser.json());

//rota padrão
app.get('/',(req, res)=> {res.send('Servidor Node.js em execução!');     
});
//ligando a api, colocar o servidor
app.listen(PORT,()=>{console.log(`Servidor rodando na porta${PORT}`);
});