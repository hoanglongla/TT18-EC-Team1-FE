import styled from "styled-components";

const OrderDetailWrapper = styled.div`
  background-color: rgb(252, 252, 252);
  padding: 0px 10px;
  position: absolute;
  margin-top: 10%;
  margin-bottom: 50px;
  top: 210px;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80vh;
  box-shadow: 5px 10px 18px #888888;

  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-grid;
  z-index: 100;
`;

export default OrderDetailWrapper;
