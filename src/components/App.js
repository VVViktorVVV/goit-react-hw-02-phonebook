import React, { Component } from 'react';
import shortid from 'shortid';


import Form from './Form';
import ContactsList from './Contacts';
import Filter from './Filter';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  formSubmit = data => {
    
    const contact = { ...data, id: shortid.generate()}

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));    
  
  }

  onFilter = (e) => {
    this.setState({ filter: e.currentTarget.value})
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    );
  };

  

  render() {
    
   console.log(this.state.filter)

    return (
      <div>
      
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmit}/>
        
          
      
          <h2>Contacts</h2>
          <Filter
            onChange={this.onFilter}
            value={this.state.filter}
          />
          <ContactsList contacts={this.state.contacts}/>
      
              
         

      </div>
    )
  }

};


export default App;

