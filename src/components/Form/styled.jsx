import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 24px 120px 24px;;
    gap: 5px;
`;
export const Label = styled.label`
    width: 100%;
    font-size: 18px;
    color: #293845;
`;
export const Input = styled.input`
    width: 100%;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 18px;

    &::placeholder {
        font-size: 18px;
        color: #AFAFAF;
        font-style: italic;
    }
`;
export const Button = styled.button`
    width: 225px;
    height: 42px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    margin: 57px 0 30px 0;
    cursor: pointer;
`;