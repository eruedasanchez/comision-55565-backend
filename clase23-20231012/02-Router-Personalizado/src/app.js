import express from 'express';
import { router as heroesRouter} from './routes/heroes.router.js';
import { UsuariosRouter } from './routes/usuarios.router.js';


const PORT=3000;

const app=express();
const usuariosRouter=new UsuariosRouter(); // se crea un objeto de tipo usuarios router

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/heroes',heroesRouter)
app.use('/api/usuarios',usuariosRouter.getRouter()) // todos los endpoints '/api/usuarios' los resuelve usuarios Router 

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));