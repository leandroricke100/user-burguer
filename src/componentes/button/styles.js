import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 68px;

    background: ${props => props.isback ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    flex: none;
    order: 0;
    flex-grow: 0;
    border: none;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    margin-top: ${props => props.isback && '85px'};

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
    `;