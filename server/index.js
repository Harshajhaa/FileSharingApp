import express from  'express'; //to import express acc to latest syntax instead of require
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express(); //to initialize express

app.use(cors());
app.use('/', router);

const PORT = 8000;   //taaki  jo server hai vo pott 8000 pe chale

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));  //to start server. using listen function it can be done
         // listen takes two arguments first is port no. and second id call back function, jab server run ho jata hai fr uske baad kuch kaam
         // karna hai toh vo yaha pe kar skte hai