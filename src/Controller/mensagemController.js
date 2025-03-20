import { Router } from "express";
const endpoints = Router();



endpoints.get('/helloword' , (req, resp) => {
    //codigo do endpoint
    resp.send({
        mensagem: 'Hello word!'
    });

})

endpoints.get('/mensagem/boasvindas', (req, resp) => {
    resp.send({
        mensagem: 'Olá, seja bem-vindos e bem-vindas!'
    });
})

endpoints.get('/v2/mensagem/boasvindas', (req, resp) => {
    resp.send({
        mensagem: 'Que bom que você esta aqui! ;)'
    });
})

endpoints.get('/mensagem/ocupado', (req, resp) => {
    resp.send({
        mensagem: 'Estou ocupado no momento.'
    });
})

endpoints.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send({
        mensagem: 'Estou ocupado, deixe uma mensagem no emial rodolfokaizen@gmail.com'
    });
})

endpoints.get('/mensagem/ola' , (req, resp) => {
    if (!req.query.nome) {
        resp.status(400).send({
            erro: 'O parâmetro query (nome) é obrigatorio'
        })
        return;
    }
    let pessoa = req.query.nome ?? 'você';

    resp.send({
        mensagem: 'Olá ' + pessoa
    });
})

export default endpoints;