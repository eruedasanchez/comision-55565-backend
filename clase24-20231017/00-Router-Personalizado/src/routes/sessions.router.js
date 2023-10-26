// Archivo creado en la clase 24. 00-router-personalizado

import { MiRouter } from "./router.js";
import jwt from 'jsonwebtoken';

let usuarios=[
    {
        nombre:'Diego', email:'diego@test.com',
        password: '123', rol: 'usuario'
    },
    {
        nombre:'Juan', email:'juan@test.com',
        password: '123', rol: 'comprador'
    },
    {
        nombre:'Romina', email:'romina@test.com',
        password: '123', rol: 'admin'
    },
]

export class SessionsRouter extends MiRouter{

    init(){
        this.post('/login', ['PUBLIC'], (req, res)=>{
            // ['PUBLIC'] representa un arreglo de los roles que pueden acceder
            // al endpoint
            let {email, password}=req.body
            if(!email || !password) return res.errorCliente('Complete email y password')

            let usuario=usuarios.find(u=>u.email===email && u.password===password)
            
            // se verifica existencia del usuario
            if(!usuario) return res.errorAutenticacion('Credenciales incorrectas')

            // Los datos del usuario fueron ingresados correctamente y se crea el token del usuario
            let token=jwt.sign({usuario}, "coder123", {expiresIn:'1h'})

            // se graba el token en una cookie
            res.cookie('coderCookie', token, {httpOnly:true})
            return res.success(`Usuario ${usuario.nombre} logeado con rol ${usuario.rol}`)
        })
    }

}
