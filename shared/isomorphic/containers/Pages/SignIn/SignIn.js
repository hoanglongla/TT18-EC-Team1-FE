import React from 'react';
import { useState } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import FirebaseLoginForm from '../../FirebaseForm/FirebaseForm';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import Auth0 from '../../Authentication/Auth0/Auth0';
import { API_URL } from '../../../config/url/url';
import {Modal} from 'antd';
import useToken from '../../../../../packages/isomorphic/src/useToken';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithTwitter,
} from '@iso/lib/firebase/firebase.authentication.util';
import SignInStyleWrapper from './SignIn.styles';

const { login } = authAction;
const { clearMenu } = appAction;
async function loginUser(username,password) {
    const url=`${API_URL}/login?username=`+username+'&password='+password
    return axios.get(url)
    .then(res => res.data)
 }
export default function SignIn({setToken}) {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // React.useEffect(() => {
  //   if (isLoggedIn) {
  //     setRedirectToReferrer(true);
  //   }
  // }, [isLoggedIn]);
  
   const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser(username,password);
    if(response.status==true){
      const token = response.data.access_token;
      const role = response.data.scope;
      
      if(role == "admin"){
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        history.push('/dashboard');
       
      }
      else{
        const tail_id = response.data.user_record.tail_id;
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('tail_id', tail_id);
          history.push('/dashboard/employee_management');
        
      }
    }
    
  }
  function handleLogin(e, token = false) {
    e.preventDefault();
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    history.push('/dashboard');
  }
  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <Form>
              <Form.Item
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
                
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Username"
                  autoComplete="true"
                  onChange={e => setUserName(e.target.value)}
                  
                />
              </div>
              </Form.Item>

              <Form.Item
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                  onChange={e => setPassword(e.target.value)}

                />
              </div>
              </Form.Item>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={handleSubmit}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
            </Form>
            <div className="isoInputWrapper isoOtherLogin">
              <Button
                onClick={signInWithFacebook}
                type="primary"
                className="btnFacebook"
              >
                <IntlMessages id="page.signInFacebook" />
              </Button>
              <Button
                onClick={signInWithGoogle}
                type="primary"
                className="btnGooglePlus"
              >
                <IntlMessages id="page.signInGooglePlus" />
              </Button>

              <Button
                onClick={() => {
                  Auth0.login();
                }}
                type="primary"
                className="btnAuthZero"
              >
                <IntlMessages id="page.signInAuth0" />
              </Button>

              <FirebaseLoginForm
                history={history}
                login={token => dispatch(login(token))}
              />
            </div>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </SignInStyleWrapper>
  );
}
SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
};
