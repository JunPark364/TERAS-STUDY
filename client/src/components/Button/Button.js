import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "10rem")};
  height: ${(props) => (props.height ? props.height : "2.5rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  background-color: ${(props) => (props.bc ? props.bc : "#1d995d")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  border: none;
  font-weight: 600;
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  font-family: "Noto Sans KR", sans-serif;
  transition: 0.2s;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#216F49"};
  }
  &:disabled {
    background-color: whitesmoke;
    cursor: no-drop;
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      {props.name}
    </StyledButton>
  );
};

export default Button;
