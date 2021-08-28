import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@iso/ui/Antd/Button/Button';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useParams } from 'react-router-dom';
import EditInvoice from './EditInvoice'
import ViewInvoice from './ViewInvoice';
import Loader from '@iso/components/utility/loader';
import invoiceActions from '@iso/redux/invoice/actions';
import { API_URL } from '../../config/url/url';
const { initData, selectCurrentInvoice, toggleView } = invoiceActions;
export default function SingleInvoice() {
    const invoices = useSelector(state => state.Invoices);
    const { state } = useLocation();

    const [data,setData] = useState([]);
    const [name,setName] = useState();
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    const tailid = localStorage.getItem("tail_id");
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const { invoiceId } = useParams();
    const { initialInvoices, currentInvoice, enableEditView } = invoices;
    const [editing,setEditing] = useState(false)
    function GetOneUser(id_number) {
      return axios
        .get(
          `${API_URL}/g/user/${id_number}`,
  
        
        )
        .then((res) => {
          const data = res.data.data.username;
          setName(data);
        });
    }
    function GetOneOrder(id_number) {
      return axios
        .get(
          `${API_URL}/sub_admin/order/${id_number}`,
  
          {
            headers: {
              Authorization: AuthStr,
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          const data = res.data.data;
          setData(data);
        });
    }
  React.useEffect(() => {
    async function fetchData(){
      await GetOneOrder(state.id_order);
      
      await GetOneUser(state.id_user)
      
    }
    fetchData();
  },[]);
  // componentWillReceiveProps(nextProps) {
  //   this.toggleCreatedInvoice(nextProps);
  // }
  
  const redirectPath = match.url.replace(invoiceId, '');
  if (editing== true) {
    return (
      <>
      {/* <Link to={redirectPath}>
              <Button className="isoGoInvoBtn" style={{marginLeft: '20px'}}>
                <span>Go To Invoices</span>
              </Button>
            </Link> */}
      <Button color="secondary" style={{marginLeft: '35px'}} onClick={() => setEditing(false)}>
        <span>Hủy</span>
      </Button>
      <EditInvoice
        order={data}
        username={name}
        toggleView={data => dispatch(toggleView(data))}
        redirectPath={redirectPath}
      />
      </>
    );
  } else {
    return (
      <>
      <Link to={redirectPath}>
              <Button className="isoGoInvoBtn" style={{marginLeft: '20px'}}>
                <span>Về lại trang trước</span>
              </Button>
            </Link>
      <Button color="secondary" style={{marginLeft: '35px'}} onClick={() => setEditing(true)}>
        <span>Thay đổi</span>
      </Button>
      <ViewInvoice
        order={data}
        username={name}
        toggleView={data => dispatch(toggleView(data))}
        redirectPath={redirectPath}
      />
      </>
    );
  }
}