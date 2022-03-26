import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 11px 30px;
`;
export const Header = styled.header`
    width: 100vw;
    font-size: 20px;
    margin: 0 24px 22px 24px;
    color: #293845;
`;
export const Showtimes = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 24px 22px 24px;
    gap: 8px;

`;
export const Showtime = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    cursor: pointer;
`;