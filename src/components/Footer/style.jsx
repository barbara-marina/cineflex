import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 117px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 34px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 0 10px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
`;
export const Movie = styled.div`
    width: 64px;
    height: 89px; 
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-right: 14px; 
`;
export const Image = styled.img`
    width: 48px;
    height: 72px;
`;
export const Text = styled.h1`
    font-size: 22px;
    color: #293845;
`;
export const ContainerMovie = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;