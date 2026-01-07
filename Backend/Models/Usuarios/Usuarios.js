import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        enum:['Masculino', 'Feminino', 'Outro'],
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
   
    telefone: {
        type: String,
        required: true
    },
    
    senha: {
        type: String,
        required: true
    },
})

const Usuarios = mongoose.model("Usuarios", usuarioSchema)

export default Usuarios;