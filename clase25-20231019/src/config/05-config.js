import dotenv from 'dotenv';

let entorno = "production";
dotenv.config({path:entorno === "production" ? "./.env.production" : "./.env.development", override:true});

export const config = {
    PORT:process.env.PORT || 3000
}