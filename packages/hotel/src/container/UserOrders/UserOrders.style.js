import styled from "styled-components";

const DetailWrapper = styled.div`
  background-color: rgb(252, 252, 252);
  padding: 0px 10px;
  position: absolute;
  margin-top: 10%;
  margin-bottom: 50px;
  top: 250px;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 60vh;
  box-shadow: 5px 10px 18px #888888;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    cursor: pointer;
  }

  li:hover {
    color: green;
  }
`;

export default DetailWrapper;
