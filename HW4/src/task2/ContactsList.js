import React from "react";
import LoaderHOC from "../HOCs/LoaderHOC";
import Contact from "./Contact";

const ContactsList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <Contact contact={contact}/>
                </div>
            ))}
        </div>
    )
}

export default LoaderHOC(ContactsList);