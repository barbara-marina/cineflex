import styled from "styled-components";

export const Container = styled.h1`
    width: 100vw;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-weight: ${props => props.sucess===true ? '700' : '400'};
    font-size: 24px;
    text-align: center;
    color: ${props => props.sucess===true ? '#247A6B' : '#293845'};
    margin: ${props => props.sucess===true ? '0 25vw' : '0'};
    margin-top: 67px;
    flex-shrink: 0;
    
`;