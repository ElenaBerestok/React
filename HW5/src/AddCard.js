import React, { useState } from "react";
import Card from './Card'

import styled from "styled-components";

const Form = styled.form`

`;

export const Title = styled.h2`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
`;

const WrapperInput = styled.div`
    margin-top: 45px;
`;

const inputList = [
    {
        id: 1,
        title: 'Card number',
        name: 'number',
        type: 'number',
    },
    {
        id: '2',
        title: 'CVV',
        name: 'cvv',
        type: 'number',
    },
    {
        id: '3',
        title: 'Your fullname',
        name: 'fullname',
        type: 'string',
    },
    // {
    //     id: '4',
    //     title: 'VISA or MASTERCARD',
    //     name: 'typeCard',
    //     type: 'string',
    // },
];


const Input = styled.input`
    width: 514px;
    height: 76px;
    left: 79px;
    top: 611px;

    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    padding-left: 20px;

    background: #E7D7EF;
    border-radius: 25px;
    margin-bottom: 21px;

    &::last-child{
        margin-bottom: 0;
    }
`;

const InputTitle = styled.p`
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: black;
`;

const ButtonAddCart = styled.button`
    width: 514px;
    height: 76px;
    left: 79px;
    top: 1183px;
    margin-top: 85px;

    background: #AA24E9;
    border-radius: 25px;

    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;

    color: #FFFFFF;

    &:hover{
        cursor: pointer;
    }
`;

const Selector = styled.select`
    display: block;
    width: 534px;
    height: 76px;
    left: 79px;
    top: 611px;

    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;

    padding-left: 20px;

    background: #E7D7EF;
    border-radius: 25px;
    
`;

const Option = styled.option``;

const props = [{id: '1', number: '1111 1111 1111 1111', owner: 'HHHHH JJJJJ', type: 'visa'}]

const AddCard = () => {

    const [number, setNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [fullname, setFullname] = useState('');
    const [typeCard, setTypeCard] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const changeValue = (e) => {

        const name = [e.target.name];
        const value = e.target.value;

        if (name === number) {
            setNumber(value)
        }

        if (name === cvv){
            setCvv(value)
        }

        if (name === fullname){
            setFullname(value)
        }

        if (name === typeCard){
            setTypeCard(value)
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <Title>Create a new card</Title>
            <Card props={props} />
            <>
                {inputList.map(({title, id, type, name} ) => (
                    <WrapperInput key={id}>
                        <InputTitle>{title}</InputTitle> 
                        <Input
                            name={name}
                            type={type}
                            onChange={changeValue}>
                        </Input>
                    </WrapperInput>
                ))}
            </>
            <InputTitle>VISA or MASTERCARD</InputTitle>
            <Selector>
                <Option>VISA</Option>
                <Option>MASTERCARD</Option>
            </Selector>
            <ButtonAddCart type='submit'>Add cart</ButtonAddCart>
        </Form>
       
    )
}

export default AddCard;
