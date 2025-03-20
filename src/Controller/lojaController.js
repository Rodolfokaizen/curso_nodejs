import { Router } from "express";
const endpoints = Router();


endpoints.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if (parcelas > 1) {
        let juros = total * 0.05;
        total += juros;
    }

    if (cupom == 'QUERO100') { 
        total -= 100;
    }
    let valorParcela = total/parcelas; 

    resp.send({
        total: total,
        valorParcela: valorParcela
    });
})


endpoints.post('/loja/pedido/completo', (req, resp) => {

    try {
        if (!req.body.parcelas || isNaN(req.body.parcelas)) throw new Error('O parâmetro parcelas está invalido.')
        if (!req.body.itens) throw new Error('O parâmetro itens está invalido.')    

        let parcelas = req.body.parcelas;
        let itens = req.body.itens;
        let cupom = req.query.cupom;

        let total = 0;
        for (let produto of itens) {
            total+= produto.preco;
        }

        if (parcelas > 1) {
            let juros = total * 0.05;
            total += juros;
        }

        if (cupom == 'QUERO100') {
            total -= 100;
        }

        let valorParcela = total / parcelas; 


        resp.send({

            total: total,
            qtdParcelas: parcelas,
            valorParcela: valorParcela

        });
        
        } catch (error) {
            resp.status(400).send({
                erro: error.message 
            })
        }


})

export default endpoints;