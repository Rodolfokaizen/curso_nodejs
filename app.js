import express, { response } from 'express';

const servidor = express();
servidor.use(express.json() );


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

servidor.get('/calculadora/somar/:n1/:n2' , (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send('A soma é ' + soma); 
})

servidor.get('/calculadora/somar2' , (req, resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;

    resp.send('A soma é ' + soma); 
})

servidor.get('/mensagem/ola' , (req, resp) => {
    let pessoa = req.query.nome ?? 'você';

    resp.send('Olá ' + pessoa);
})


servidor.post('/media' , (req, resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1 + n2 + n3) / 3;

    resp.send('A média é ' + media );

})

servidor.post('/dobros', (req, resp) => {
    let nums = req.body.numeros;

    let nums2 = [];
    for (let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }

    resp.send('Os doboros dos números são ' + nums2);
})



servidor.listen(
    5001,  () =>  console.log(' API subida com sucesso!'));

