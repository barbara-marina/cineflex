import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 11px 30px;
`;
export const Movie = styled.div`
    width: 145px;
    height: 209px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const Image = styled.img`
    width: 129px;
    height: 193px;
`;