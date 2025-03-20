import express from 'express';

import calculadoraController from './Controller/calculadoraController.js';
import exerciciosController from './Controller/exerciciosController.js';
import lojaController from './Controller/lojaController.js';
import mensagemController from './Controller/mensagemController.js';
import usuarioController from './Controller/usuarioController.js';


export default function adicionarRotas(servidor) {

    // controllers 
servidor.use(calculadoraController);
servidor.use(exerciciosController);
servidor.use(lojaController);
servidor.use(mensagemController);
servidor.use(usuarioController);

// arquivos estáticos 
servidor.use('/storage/perfil', express.static('./storage/perfil'))
servidor.use('/storage/album', express.static('./storage/album'))
}