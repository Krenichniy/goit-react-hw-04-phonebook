const { default: styled } = require('styled-components');

export const Container = styled.div`
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 15px;
  background: #555555;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Header = styled.h1`
  margin-top: 0;
  color: #fff;
`;
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  color: #fff;
`;
export const UserInput = styled.input`
        width: 100%;
        height: 40px;
        margin-top:10px;
        padding: 14px 0px 14px 5px;
        font-size: 18px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        border-radius: 4px;
        outline: none;
        transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            border-color: #ff6c00;
        
`;

export const StyledBtn = styled.button`
  min-width: 160px;
  max-height: 40px;
  border: 1px solid #ff6c00;
  border-radius: 25px;
  padding: 12px 20px;

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
