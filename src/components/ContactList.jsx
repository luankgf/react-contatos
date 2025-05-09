import React from "react";
import ContactCard from "./ContactCard";


// Componente para exibir lista de contatos ou mensagem de vazio
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            cpf={contact.cpf}
            onDelete={() => onDeleteContact(index)} // função para excluir
          />
        ))
      ) : (
        <p className="text-red-500 font-semibold">Nenhum contato encontrado.</p>
      )}
    </div>
  );
};

export default ContactList;