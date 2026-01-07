import mongoose, { model } from "mongoose";

const AgendaSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuarios", 
        required: true
    },
    dataReserva: {
        type: Date,
        required: true
    },
    quartoReserva: {
        type: String,
        required: true
    }
}, { timestamps: true }); 

const Agendamentos = model("Agendamentos", AgendaSchema);

export default Agendamentos;