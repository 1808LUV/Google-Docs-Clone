import mongoose from "mongoose";

const Connection = async (username = 'user1' , password = 'Aayush1808') => {
  const URL =
    `mongodb://${username}:${password}@ac-zdcvvij-shard-00-00.ckxrtjl.mongodb.net:27017,PROJECT 0-shard-00-01.ckxrtjl.mongodb.net:27017,ac-zdcvvij-shard-00-02.ckxrtjl.mongodb.net:27017/?ssl=true&replicaSet=atlas-rvxns9-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Databse connected Succesfully');
    }catch(error){
        console.log('Error while connecting with the database ',error);
    }
};

export default Connection;