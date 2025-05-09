import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const initialContacts = [
  { name: "Alice Johnson", email: "alice@example.com", phone: "123-456", cpf: "123.456.789-01" },
  { name: "Bob Smith", email: "bob@example.com", phone: "987-654",  cpf: "123.456.789-02" },
  { name: "Charlie Brown", email: "charlie@example.com", phone: "555-333",  cpf: "123.456.789-03" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(initialContacts);

  // Filtra contatos de acordo com o texto digitado
  const handleFilter = () => {
    const filtered = initialContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setContacts(filtered);
  };

  // Adiciona um novo contato à lista
  const handleAddContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  // Exclui contato pelo index
  const handleDeleteContact = (indexToDelete) => {
    const updatedContacts = contacts.filter((_, index) => index !== indexToDelete);
    setContacts(updatedContacts);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Contatos</h1>

      <input
        type="text"
        placeholder="Buscar contato..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Filtrar</button>

      {/* Formulário para adicionar novo contato */}
      <ContactForm onAddContact={handleAddContact} />

      {/* Lista de contatos */}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}


export default App;