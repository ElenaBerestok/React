import React from "react";
import { Title } from "./AddCard";
import plus from './assets/plus.png'
import AddCard from "./AddCard";

import styled from "styled-components";
import Card from "./Card";

const Section = styled.div`
    max-width: 675px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    max-width: 535px;
    display: flex;
    justify-content: space-between;
`;

const LinkPlus = styled.a`
    width: 47px;
    height: 47px;
    margin-top: 40px;
    border-radius: 36%;
    cursor: pointer;
    background-image: url('${plus}');
`;

const CardDataList = [
    {
        id: '1',
        number: '4111 1111 1110 0023',
        owner: 'Orran Motherwell',
        type: 'visa',
        validity: '	2023/12',
        CVV: '123',
    },
    {
        id: '2',
        number: '5486 7320 5886 4471',
        owner: 'Roxine	Skelhorne',
        type: 'mastercard',
        validity: '	2024/06',
        CVV: '975',
    },
    // {
    //     id: '3',
    //     number: '4111 ',
    //     owner: 'Chickie	Merlin',
    //     type: 'visa',
    //     validity: '	2025/02',
    //     CVV: '368',
    // },
]

const YourCards = () => {
    return (
        <Section>
            <Wrapper>
                <Title>Your cards</Title>
                <LinkPlus
                    href="/AddCard"
                />
            </Wrapper>
            <Card props={CardDataList}/>
        </Section>
    )
}

export default YourCards;