import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectaDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri);
        console.log("✅ Conectado ao MongoDB via variáveis de ambiente");
    } catch (error) {
        console.log("❌ Erro na conexão:", error.message);
    }
}

export default ConnectaDB;


//mongodb+srv://intablete:qHvv0dgIwKgQDMth@cluster0.zgsksoc.mongodb.net/?appName=Cluster0