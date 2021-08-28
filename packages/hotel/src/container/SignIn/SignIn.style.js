import styled from "styled-components";

const SignInWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  vertical-align: middle;

  .logo {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

export const SignInFormWrapper = styled.div`
  vertical-align: middle;
  .input-feedback {
    color: red;
  }
  .error {
    border: 1px solid red !important;
  }
  form {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    flex-direction: column;
  }
`;

export default SignInWrapper;
