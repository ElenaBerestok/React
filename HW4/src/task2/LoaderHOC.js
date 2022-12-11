import React from "react";

const withDelay = (delay) => (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
};

const LoaderHOC = (WrappedComponent) => {
    return class extends React.Component{
        state = {
            contacts: [],
            loaded : false,
        }

        filterContacts(array){
            const filterContacts = array.results;
            const contacts = [];

            filterContacts.map((filterContact) => {
                filterContact = {
                    name: `${filterContact.name.first} ${filterContact.last}`,
                    thumbnail: `${filterContact.picture.thumbnail}`,
                    id: `${filterContact.id.value}`
                }

                contacts.push(filterContact)
                console.log(filterContact)
            })

            return contacts;
        }

        componentDidMount(){
            fetch('https://api.randomuser.me/?nat=us,gb&results=10')
            .then((response) => {
                if (response.ok){
                    return response.json()
                } else {
                    throw new Error ('error')
                }
            })
            .then ((results) => {
                this.filterContacts(results)
            })
            .then((contacts) => {
                withDelay(2000)(contacts)
                this.setState({loaded : true})
            })
            .then((result) => {
                this.setState({contacts: result})
            })
            .catch((err) => {
                alert(err.message)
            })
        }

       
        render() {

            const loaded  = this.state.loaded ;
            const contacts = this.state.contacts;

            return (
                loaded  ? <div>...Loading</div> :  <WrappedComponent {...contacts} />
            )
        }
    }
}

export default LoaderHOC;