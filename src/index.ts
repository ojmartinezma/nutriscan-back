import express from "express";
import { sequelize } from "./database/database";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors())
app.use('/api', require('./routes/router'));

const PORT = 3000;
// import './models/usuario';
// import './models/clasificacion';
// import './models/factura';
// import './models/historial';
// import './models/producto';
// import './models/tag';
// import './models/tienda';
// import './models/vistas';



async function main(){
    try {
        await sequelize.sync({force:false});
        app.listen(PORT, () =>  {
            console.log('Server running on port ',PORT)
        });
    } catch {
        console.error("unable to connect to database");
    }
    
}

main();

