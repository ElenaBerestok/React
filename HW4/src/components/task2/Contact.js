import React from "react";

const Contact = ({contact}) => {
   
    return (
        <div>
            <div>{contact.name}</div>
            <img src={contact.thumbnail} />
        </div>
    )
}

export default Contact;