import React from "react";


const ContactsList = ({ contacts }) => {
    return (
     <>
        <ul>
            {contacts.map(elem => <li key={elem.id}>{elem.name}</li>)}
        </ul>
    </>
        
    )
}
    

export default ContactsList;