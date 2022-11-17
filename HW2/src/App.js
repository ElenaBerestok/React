import React from "react";


const UserCard = (props) => {
    return (<div>
        <div>User information:
            <div>Name: {props.name}</div>
            <div>Surname: {props.surname}</div>
            <div>Age: {props.age}</div>
        </div>  
    </div>)
}

const User = (prop) => {
    const {name, surname, age} = prop.dataUser;

    return (<div>
        <div>User information:
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
        </div>  
    </div>)
}

const UserCardText = (prop) => {
    const {name, surname, age} = prop.dataUser

    return (
        <div>
           My info: {name} {surname} {age}
        </div>
    )
}

const UserQuestionAboutAlcohol= (prop) => {
    const {name, age} = prop.dataUser;


    if (age <= 18) {
        return (
            <div>
               Привет, {name}, тебе {age} , я не могу налить тебе выпить
            </div>
        )
    }
    if (age > 18) {
        return (
            <div>
                Привет, {name}, тебе {age} , я могу налить тебе выпить
            </div>
        )
    }
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
                <UserCard name='Elena' surname='Berestok' age='26'/>

                {/*     b.Прокидывания state целиком */}
                <User dataUser={this.state}/>
                
                <UserCardText dataUser={this.state}/>
                
                <UserQuestionAboutAlcohol dataUser={this.state}/>
            </div>
        )
    }
}