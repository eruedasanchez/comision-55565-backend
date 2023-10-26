import express from 'express';
import cookieParser from 'cookie-parser' // importacion de cookie parser para el grabado del token del usuario que se realiza en sessions.router (line 38) 
import { router as heroesRouter} from './routes/heroes.router.js';
import { UsuariosRouter } from './routes/usuarios.router.js';
import { SessionsRouter } from './routes/sessions.router.js'; // añado el sessions-router


const PORT=3000;

const app=express();
const usuariosRouter=new UsuariosRouter()
const sessionsRouter=new SessionsRouter() // añado el router de sesiones

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/api/heroes',heroesRouter)
app.use('/api/usuarios',usuariosRouter.getRouter())
app.use('/api/sessions', sessionsRouter.getRouter())

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));