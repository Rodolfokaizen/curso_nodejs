import express, { response } from 'express';

const servidor = express();


servidor.get('/helloword' , (req, resp) => {
    //codigo do endpoint
    resp.send('Hello word!!! ;)');

})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, seja bem-vindos e bem-vindas!');
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
    resp.send('Que bom que você esta aqui! ;)');
})

servidor.get('/mensagem/ocupado', (req, resp) => {
    resp.send('Estou ocupado no momento.');
})

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send('Estou ocupado, deixe uma mensagem no emial rodolfokaizen@gmail.com');
})


servidor.listen(5001,  () =>  console.log(' API subida com sucesso!'));

