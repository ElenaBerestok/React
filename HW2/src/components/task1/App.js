import React from "react";


const UserCard = ({name, surname, age}) => {
    return (<div>
        <div>User information:
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
        </div>  
    </div>)
}

const User = ({name, surname, age}) => {

    return (<div>
        <div>User information:
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
        </div>  
    </div>)
}

const UserCardText = ({name, surname, age}) => {

    return (
        <div>
           My info: {name} {surname} {age}
        </div>
    )
}

const UserQuestionAboutAlcohol= ({name, age}) => {

    return (
        <div>
            Привет, {name}, тебе {age} , я {age <= 18 ? 'не могу ' : 'могу'} налить тебе выпить
        </div>
    )
}



export default class App extends React.Component {
    state = {
        name : 'Elena',
        surname: 'Berestok',
        age: '26',
    }

    render (){
        return (
            <div>
                {/* 2. Опробовать возможные способы передачи props в компонент
                        с. Каждый prop по отдельности */}
                <UserCard name={this.state.name} surname={this.state.surname} age={this.state.age}/>

                {/*     b.Прокидывания state целиком */}
                <User data={this.state}/>
                
                <UserCardText data={this.state}/>
                
                <UserQuestionAboutAlcohol data={this.state}/>
            </div>
        )
    }
}