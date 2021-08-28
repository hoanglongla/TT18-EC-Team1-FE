import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Component = styled.div`
  padding: 0px 10px;
  padding-bottom: 15px;
  background-color: white;
  margin-top: 10px;

  input,
  label,
  .chooseSalon {
    width: 100% !important;
    padding: 12px 20px;

    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  // .ant-select-selection ant-select-selection--single {
  //   border : none!important;
  //   padding-left : 0!important;
  // }
  // .ant-select-single{
  //   padding-left : 20px!important;
  // }

  // .ant-picker{
  //   padding : 0!important;
  //   // border : none!important;
  // }

  // .ant-picker-input > input{
  //   border : none!important;
  // }

  .ant-select-selection--single {
    border: none !important;
    padding: 0 !important;
  }

  .ant-select-enabled {
    // padding : 0px!important;
    // border : none!important;
  }

  .ant-select-selection__rendered {
    margin: 0 !important;
    padding: 0px !important;
  }

  // .ant-select-selection__rendered>div{
  //   margin : 0!important;
  // }

  .ant-calendar-picker-input {
    border: none;
    padding: 0 !important;
  }
`;

export const styles = {
  width: "100%",
  padding: "6px 20px",
  display: "outline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  // boxSizing: "border-box",
};

export const colourStyles = {
  control: (styles) => ({ width: "100%", backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      backgroundColor: isDisabled ? "red" : "blue",
      color: "#FAF",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const ServiceOrderWrapper = styled.div`
  background-color: rgb(252, 252, 252);
  padding: 0px 10px;
  position: absolute;
  margin: auto;
  top: 300px;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 500px;
  box-shadow: 5px 10px 18px #888888;
  button {
    width: 100%;
    padding: 12px 20px;
    right: 10;
    left: 20;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;
export const Title = styled.div`
  font-size: 22px;
  font-family: Oswald;
  text-align: center;

  font-weight: 900;
  padding: 15px 0px;
`;
export const SubTitle = styled.div`
  padding: 10px 15px 10px 0px;
  font-size: 20px;
  font-family: Oswald;
  font-weight: 900;
  text-transform: uppercase;
`;
export default ServiceOrderWrapper;
