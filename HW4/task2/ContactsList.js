import React from "react";
import LoaderHOC from "./LoaderHOC";
import Contact from "./Contact";

const ContactsList = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <Contact props={contact}/>
                </div>
            ))}
        </div>
    )
}

export default LoaderHOC(ContactsList);