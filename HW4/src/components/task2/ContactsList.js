import React from "react";
import LoaderHOC from "../../HOCs/LoaderHOC";
import Contact from "./Contact";

const ContactsList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <Contact contact={contact} key={contact.id}/>
            ))}
        </div>
    )
}

export default LoaderHOC(ContactsList);