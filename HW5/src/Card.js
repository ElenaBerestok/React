import React from "react";
import chip from './assets/chip.png'
import visa from './assets/VISA1.png'
import mastercard from './assets/Mastercard.png'

import styled from "styled-components";

const CardWrapper  =styled.div`
    // background: #232343;
    background: ${(props) => (props.visa === 'visa' ? `#232343` :  `#97708D`)};
    position: relative;
    width: 534px;
    height: 333px;
    border-radius: 48.6px;
    transform: rotate(-180deg);
    margin-bottom: 30px;

    &::last-child{
        margin-bottom: 0;
    }
`;

const Chip = styled.img`
    position: absolute;
    right: 63px;
    top: 200px;
`;

const CardNumberDiv = styled.div`
    position: absolute;
    width: 339px;
    height: 41px;
    top: 103px;
    right: 64px;

    // background: red;
`;

const CardNumber = styled.p`
    position: absolute;
    top: -19px;
    right: 0px;
    font-size: 29px;
    color: white;
    transform: rotate(180deg);
    
    line-height: 38px;
    letter-spacing: 4.17391px;
`;

const OwnerCard = styled.p`
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    transform: rotate(180deg);
    top: -75px;
    right: 0px;
    position: absolute;
`;

const CardType = styled.img`
    transform: rotate(180deg);
    position: absolute;
    top: -53px;
    left: -70px;
`;

const Card = (props) => {

    return (
        <>
            {props.props.map(({id, number, owner, type}) => (
                <CardWrapper  
                    key = {id} 
                    visa = {type}
                >
                    <Chip src={chip} />
                    <CardNumberDiv>
                        <CardNumber>{number}</CardNumber>
                        <OwnerCard>{owner}</OwnerCard>
                        <CardType 
                            src={type === 'visa' ? `${visa}` : `${mastercard}`} 
                        ></CardType>
                    </CardNumberDiv>
                </CardWrapper>
            ))}
        </>
    )
    
}

// const Card = () => {

//     return (
//         <>
//             {CardDataList.map((card) => (
//                 <CardWrapper  
//                     key = {card.id} 
//                     visa = {card.type}
//                 >
//                     <Chip src={chip} />
//                     <CardNumberDiv>
//                         <CardNumber>{card.number}</CardNumber>
//                         <OwnerCard>{card.owner}</OwnerCard>
//                         <CardType 
//                             src={card.type === 'visa' ? `${visa}` : `${mastercard}`} 
//                         ></CardType>
//                     </CardNumberDiv>
//                 </CardWrapper>
//             ))}
//         </>
//     )
    
// }

export default Card;