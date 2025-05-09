import React from "react";
import { DeleteOutlined } from "@ant-design/icons";


//Componente para exibir informações de um contato
const ContactCard = ({ name, email, phone, cpf, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow mb-2 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <p>CPF: {cpf}</p>
      </div>

      {/* Botão de excluir com ícone */}
      <button onClick={onDelete} className="text-red-500 hover:text-red-700">
        <DeleteOutlined style={{ fontSize: '20px' }} />
      </button>
    </div>
  );
};

export default ContactCard;