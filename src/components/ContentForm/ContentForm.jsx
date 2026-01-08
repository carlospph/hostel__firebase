import React from 'react'
import Field from '../Field/Field'
import Hotels from '../Hotels/Hotels'

const ContentForm = () => {
    return (

        <div>
            <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center pt-5 pb-[28px]">
                    <i className="fa-regular fa-calendar-days"></i>
                    <h1>Faça sua reserva</h1>
                </div>
                <div className="flex flex-col gap-2 flex-wrap">
                    <Field id="cpf" label="CPF" type="text" placeholder="000.000.000-00" />
                    <Field id="nome" label="Nome completo" type="text" placeholder="Seu nome completo" />
                    <Field id="data" label="Data da reserva" type="date" />
                    <Field type="number" id="qntperson" label="Quant.hóspedes" placeholder="00" />


                    <Hotels />
                </div>
            </div>
        </div>
    )
}

export default ContentForm
