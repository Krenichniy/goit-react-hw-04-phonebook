const { default: styled } = require('styled-components');

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.15;
  letter-spacing: 0.05em;
  color: #fff;
`;
export const StyledNumber = styled.span`
  margin-right: 50px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.15;
  letter-spacing: 0.05em;
  color: #fff;
`;
export const StyledBtn = styled.button`
  min-width: 60px;
  max-height: 30px;
  border: 1px solid #ff6c00;
  border-radius: 25px;
  padding: 6px 10px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.09em;
  color: #fff;
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #000;
    background-color: #ff6c00;
  }
`;
