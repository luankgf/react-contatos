import React, { useState } from 'react';

//Componente para adicionar um novo contato
const ContactForm = ({ onAddContact}) => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[cpf, setCpf] = useState('');

    //Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validação simples
        if (!name || !email || !phone || !cpf) {
            alert("Preencha todos os campos.");
            return;
        }

        //Envia o novo contato para o componente App
        onAddContact ({ name, email, phone, cpf });

        //Limpa o forumlário
        setName('');
        setEmail('');
        setPhone('');
        setCpf('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Adicionar Contato</h2>
            <input className="border p-2 w-full mb-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            <input className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="border p-2 w-full mb-2" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
            <input className="border p-2 w-full mb-2" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Adicionar</button>
        </form>
    );
};

export default ContactForm;