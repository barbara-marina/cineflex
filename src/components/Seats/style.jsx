import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px 30px;
`;
export const ContainerSeats = styled.div`
    width: 100vw;
    max-width: 371px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px;
    gap: 18px 7px;

    section {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 16px;

        article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                font-size: 13px;
                color: #4E5A65;
                margin-top: 10px;
            }
        }
    }
`;
export const Seat = styled.div`
    width: 26px;
    height: 26px;
    color: #000000;
    background-color: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
    background-color: ${props => props.isSelected && "#8DD7CF"};
    border: ${props => props.isAvailable ? "1px solid #808F9D" : "1px solid #F7C52B"};
    border: ${props => props.isSelected && "1px solid #1AAE9E"};
    box-sizing: border-box;
    border-radius: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    text-align: center;
    pointer-events: ${props => props.legend && "none"};
    cursor: pointer;
`;