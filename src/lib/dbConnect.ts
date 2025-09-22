import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        //already connected
        console.log("already connected to database")
        return ;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected =  db.connections[0].readyState

        console.log("Db connected Successfully!!!");

    } catch (error) {
        console.log("database connection failed", error);
        process.exit(1)
    }
}

export default dbConnect;