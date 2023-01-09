import styled from "styled-components";

const NewDietStyles = styled.div``;

export const Label = styled.label`
  font-weight: 800;
`;

export const DietRow = styled.div`
  display: flex;
  justify-content: space-between;

  &.align-start {
    justify-content: start;
  }
`;

export const DietColumn = styled.div`
  select {
    display: block;
  }
`;

export default NewDietStyles;
