import styled from "styled-components";
import Hambuguer from "../../assets/imgFront.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    background-image: ${Hambuguer};
    margin-top: 11px;
`;
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;

    color: #EEEEEE;

    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;flex: none;
    order: 0;
    flex-grow: 0;
    padding-left: 16px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin-bottom: 46px;
`;

export const OrderItens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 342px;
    height: 101px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 20px;

    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .classOrder{
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
         }

        .className {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;

         }

    }
 

`;

export const Order = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

`;

export const ImgTrash = styled.img`
    cursor: pointer;
`;