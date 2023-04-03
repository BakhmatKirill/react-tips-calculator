import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    min-height: 61px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    :disabled {
        opacity: 0.5;
    }
    background-color: #2ed2c9;
    border: none;
    cursor: pointer;
`;

export {StyledButton};