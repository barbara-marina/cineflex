import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DataTitle = styled.header`
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.04em;
    padding: 25px 29px 5px 29px;
    color: #293845;
`;
export const Data = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.04em;
    padding: 5px 29px;
    color: #293845;
`;
export const Button = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 18px;
    margin: 65px 0;
`;
