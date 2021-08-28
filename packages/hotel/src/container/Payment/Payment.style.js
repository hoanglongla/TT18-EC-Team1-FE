import styled from "styled-components";

import InputBox from "./InputBox";

const PaymentWrapper = styled.div`
  background-color: rgb(252, 252, 252);
  padding: 0px 10px;
  position: absolute;
  margin-top: 10%;
  margin-bottom: 50px;
  top: 300px;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 100%;
  box-shadow: 5px 10px 18px #888888;

  display: flex;

  BillingForm {
    background-color: #000;
    height: "50%";
  }
`;

export const BillingFormWrapper = styled.div`
  width: 60%;
  padding: 20px;
  .align-right {
    margin-right: 20px;
  }
`;
//border: 1px solid #d68b6b;
export const OrderInfoWrapper = styled.div`
  width: 40%;
  padding: 20px;
`;

export const InputBoxWrapper = styled.div`
  margin: 10px 0px 0px 0px;
`;

export const ItemsBoxWrapper = styled.div`
  margin-top: 10px;
`;

// const SelectContaner = styled(InputBox)``;

export default PaymentWrapper;
