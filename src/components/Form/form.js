import React, { Component } from 'react';

// import PropTypes from 'prop-types';
// import s from './form.module.css'

class Form extends Component {
    state = {
        name: '',
        number:''
    };

    // contactId = shortid.generate();

    inputChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value })
        
    }

    // creatID = () => {
    //     this.setState({ id: shortid.generate() })
    // }



    creatContact = e => {
        e.preventDefault();
      
        this.props.onSubmit(this.state)
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }


    render() {
        return (
            <form onSubmit={this.creatContact}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.inputChange}
                        value={this.state.name}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.inputChange}
                        value={this.state.number}
                    />
                </label>
                <button type='submit' className='btn' >Add contact</button>
            </form>
        )
    }
    
}


export default Form;