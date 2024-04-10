import { Request, Response } from "express";
import { ArtistaRepositorio } from "../../src/business/repositories/ArtistaRepositorio";
import { ArtistaController } from "../../src/controllers/ArtistaController"
import { ArtistaService } from "../../src/services/ArtistaService";
import { Artista } from "../../src/business/entities/Artista";

describe('ArtistaController criaArtista', () => { 

    let artistaController: ArtistaController;
    let artistaService: ArtistaService;
    let res = {} as unknown as Response;

    beforeEach(() => {
        
        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();
        artistaService = {
            criaArtista : jest.fn(),
            listaArtista: jest.fn(),
            deletaArtista: jest.fn(),
            pegaArtista: jest.fn()
        };
    })

    test("criacao de Artista com parametro errado", async () => {
        
        artistaController = new ArtistaController(artistaService);

        const req = {
            body: {
                name: "Teste"
            }
        } as unknown as Request;
        const res = {} as unknown as Response;

        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();


        await artistaController.criaArtista(req, res )
        expect(res.status).toHaveBeenCalledWith(400); // 400 erro de validacao
    })

    test("criacao de artista com apenas o email incorreto", async () => {
        
        artistaController = new ArtistaController(artistaService);

        const req = {
            body: {
                name: "Teste",
                email: "joana@mail.com",
            }
        } as unknown as Request;
       


        await artistaController.criaArtista(req, res )
        expect(res.status).toHaveBeenCalledWith(400); // 400 erro de validacao
    })

    test("criacao de artista correta", async () => {
        artistaService.criaArtista = async () => 
        { return Promise.resolve(new Artista()) },
           
      
        artistaController = new ArtistaController(artistaService);

 
        const req = {
            body: {
                email:"test@mail.com",
                name: "Teste",
                
            }
        } as unknown as Request;
        

        await artistaController.criaArtista(req, res )
        expect(res.status).toHaveBeenCalledWith(201); // 201 codigo de criacao
    })


 })

 describe('artistaController encontra Artista', () => { 
    let artistaController: ArtistaController;
    let artistaService: ArtistaService;
    let res = {} as unknown as Response;

    beforeEach(() => {
        
        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();
        artistaService = {
            criaArtista : jest.fn(),
            listaArtista: jest.fn(),
            deletaArtista: jest.fn(),
            pegaArtista: jest.fn()
        };
    })

    test("pega um Artista existente", async () => {
        artistaService.pegaArtista = async (id) => { return Promise.resolve(new Artista()) },

        artistaController = new ArtistaController(artistaService);

        const req = {
            params: {
                id: "1234"
            }
        } as unknown as Request;
        

        await artistaController.pegaArtista(req, res )
        expect(res.status).toHaveBeenCalledWith(200);

    })

    test("pega Artista nao existente", async () => {
        artistaService.pegaArtista = async (id) => { return Promise.resolve(undefined) },

        artistaController = new ArtistaController(artistaService);

        const req = {
            params: {
                id: "1234"
            }
        } as unknown as Request;
        
        await artistaController.pegaArtista(req, res )
        expect(res.status).toHaveBeenCalledWith(404);

    })

 })
