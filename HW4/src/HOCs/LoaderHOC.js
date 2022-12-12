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

            return filterContacts.map((filterContact) => {
                return {
                    name: `${filterContact.name.first} ${filterContact.name.last}`,
                    thumbnail: `${filterContact.picture.thumbnail}`,
                    id: `${filterContact.id.value}`
                }
            })
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
                let contacts = this.filterContacts(results)
                return contacts
            })
            .then((contacts) => {
                return withDelay(2000)(contacts)
            })
            .then((contacts) => {
                this.setState({
                    contacts: contacts,
                    loaded : true
                })
            })
            .catch((err) => {
                alert(err.message)
            })
        }

       
        render() {

            const loaded  = this.state.loaded ;

            return (
                <>
                    {!loaded  ? <div>...Loading</div> : <WrappedComponent {...this.state} {...this.props}/>}
                </>
                
            )
        }
    }
}

export default LoaderHOC;