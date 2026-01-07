import express from 'express';
import cors from 'cors';
import ConnectaDB from './Config/DataBase.js';
import Usuarios from './Models/Usuarios/Usuarios.js';

const app = express();
const port = 3000;

ConnectaDB();

app.use(cors());
app.use(express.json());

// 1. Criando novo usuario
app.post("/usuarios", async (req, res) => {
    try {
        const novoUsuario = new Usuarios(req.body);
        await novoUsuario.save();
        // IMPORTANTE: Precisa enviar uma resposta!
        res.status(201).json(novoUsuario); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário", error: error.message });
    }
});

// 2. Listar usuarios
app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários", error: error.message });
    }
});  

// 3. Atualizar usuario
app.put("/usuarios/:id", async (req, res) => {
    try {
         const atualizado = await Usuarios.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(atualizado);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

// 4. Deletar usuario
app.delete("/usuarios/:id", async (req, res) => {
    try {
        await Usuarios.findByIdAndDelete(req.params.id);
        res.status(200).send("Usuario deletado com sucesso");
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));