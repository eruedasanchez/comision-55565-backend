import mongoose from "mongoose";
import { usuariosModelo } from "./usuarios.model.js";

// conexion a la base de datos
try {
    await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26')
    console.log("MongoDB Online")
} catch (error) {
    console.log(error.message)
}

export class UsuariosMongoDAO{
    constructor(){}

    // obtener los datos (eventualmenteb puedo obtener un filtro.
    // De lo contrario se setea vacio)
    async get(filtro={}){
        if(filtro["_id"]){
            // si el filtro elegido es "_id" 
            if(!mongoose.Types.ObjectId.isValid(filtro["_id"])){
                // no se envia un object id de mongoose
                throw new Error('Id de usuario inválido');
            }
        }
        return await usuariosModelo.find(filtro);
    }

    // almacenar los datos
    async create(usuario){
        return await usuariosModelo.create(usuario);
    }
}