import mongoose from 'mongoose';
const DBConnection = async () =>{
    const MONGODB_URI = `mongodb://harshajhaa:Universe123@ac-c5ltkbs-shard-00-00.xtikncb.mongodb.net:27017,ac-c5ltkbs-shard-00-01.xtikncb.mongodb.net:27017,ac-c5ltkbs-shard-00-02.xtikncb.mongodb.net:27017/?ssl=true&replicaSet=atlas-130xa8-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log('DataBase Connected Successfully');
     } catch(error){
        console.error('Error while connection with the dataBase', error.message); 
     }
}

export default DBConnection;