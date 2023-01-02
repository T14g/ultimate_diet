import styled from "styled-components";

const DietListStyles = styled.table`
    list-style: none;
    padding: 0;
    margin: 0 auto;

    tr {
        display: flex;
        justify-content: start;
        margin-bottom: 15px;
        border: 2px #000 solid;
        
        td {
            line-height: 35px;
            font-size: 25px;
            font-weight: 600;
            padding-left: 10px;
        }

        button {
            margin: 0 0 0 10px;
        }
    }
`;

export default DietListStyles;