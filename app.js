import express, { response } from 'express';

const servidor = express();


servidor.get('/helloword' , (req, resp) => {
    //codigo do endpoint
    resp.send('Hello word!!! ;)');

})

servidor.listen(5001,  () =>  console.log(' API subida com sucesso!'));

