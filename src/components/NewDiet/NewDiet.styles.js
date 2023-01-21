import styled from "styled-components";

const NewDietStyles = styled.div`
  padding: 20px;
`;

export const Label = styled.label`
  font-weight: 800;
  font-size: 24px;
`;

export const DietRow = styled.div`
  display: flex;
  justify-content: space-between;

  &.align-start {
    justify-content: start;
  }
`;

export const DietColumn = styled.div`
  background: #E2E6E9;
  padding: 15px 10px;
  border-radius: 11px;
  text-align: left;

  select {
    display: block;
  }

  &.no-bg{
    background: none;
  }

  &.white-text {
    color: #fff;
  }

  &.no-padding-left {
    padding-left :0;
  }
`;

export default NewDietStyles;
