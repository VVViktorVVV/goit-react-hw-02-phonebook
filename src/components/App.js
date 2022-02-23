import React, { Component } from 'react';
import shortid from 'shortid';

import Section from './Section'
import Form from './Form';
import ContactsList from './Contacts';

class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  formSubmit = data => {
    
    const contact = { ...data, id: shortid.generate()}

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));    
  
  }

  

  render() {
    console.log(this.state.contacts)
   

    return (
      <div>
        <Section
          title='Phonebook'>
          <Form onSubmit={this.formSubmit}/>
        </Section>
        <Section
          title='Contacts'>
          <ContactsList contacts={this.state.contacts}
          
          />
        </Section>

      </div>
    )
  }

};


export default App;

