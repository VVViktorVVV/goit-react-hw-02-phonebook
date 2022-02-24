import React from "react";


const ContactsList = ({ contacts }) => {
    return (
     <>
        <ul>
                {contacts.map(elem => <li key={elem.id}>{elem.name}:{elem.number}</li>)}
        </ul>
    </>
        
    )
}
    

export default ContactsList;