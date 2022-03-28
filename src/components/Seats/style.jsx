import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px 30px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 24px 120px 24px;;
        gap: 5px;
        
        label{
            width: 100%;
            font-size: 18px;
            color: #293845;
        }

        input {
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
        }

        button {
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
        }
    }
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