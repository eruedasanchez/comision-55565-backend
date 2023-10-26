import dotenv from 'dotenv';

dotenv.config({path:"./.env", override:true}); // override:true permite sobreescribir alguna variable de entorno existente 

export const config={
    PORT:process.env.PORT || 3000,
    MONGO_URL:process.env.MONGO_URL,
    DB_NAME:process.env.DB_NAME
}