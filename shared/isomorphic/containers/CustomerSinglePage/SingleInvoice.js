import React from "react";
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useParams, useLocation, Link } from "react-router-dom";
import EditInvoice from "./EditInvoice";
import ViewInvoice from "./ViewInvoice";
import Button from "@iso/ui/Antd/Button/Button";
import Loader from "@iso/components/utility/loader";
import invoiceActions from "@iso/redux/invoice/actions";
import AntTable from "./AntTables/AntTables";
import axios from "axios";
import { API_URL } from "../../config/url/url";
const SingleInvoice = _ => {
  
  const { state } = useLocation();
  
  
  // const { invoiceId } = useParams();
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const tailid = localStorage.getItem("tail_id");
  const [editing, setEditing] = useState(0);
  const {id_customer}= state;
  const [order,setOrder] =useState([])
  const [data,setData] = useState({});
  const [info,setInfo] = useState({});
  const [user_id,SetID] = useState();
  // componentWillReceiveProps(nextProps) {
  //   this.toggleCreatedInvoice(nextProps);
  // }
  // const redirectPath = match.url.replace(invoiceId, '');
  function GetOneUser(id_number) {
    return axios
      .get(
        `${API_URL}/g/user/${id_number}`
        )
      .then((res) => {
        const data = res.data.data;
        setData(data);
        setInfo(data.user_information)
        
      });
  }
  function getOrder() {
    axios
      .get(`${API_URL}/sub_admin/order`,
      { headers: { Authorization: AuthStr,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin' : '*' }})
      .then((response) => {
        if(response.data.status == true ){
        const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/sub_admin/order?page=${page}`,
          { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
            .then((res) => {
               
              const order = res.data.data.data;
              const filteredProducts = order.filter(order => order.user_id === id_customer)
              setOrder(old => [...old, ...filteredProducts]);
            }
          );
          page++;
        }
        }
        //const branch = response.data.data.data;
        //setData(branch);
      });
  }
  React.useEffect(() => {
    async function fetchData(){
      await GetOneUser(id_customer)
      await getOrder();
    }
    fetchData();
  },[]);
  return (
    <>
      {editing == 1 ? (
        <>
          <Button color="secondary" onClick={() => setEditing(0)}>
            <span>Chỉnh sửa</span>
          </Button>
          <EditInvoice {...state.customer} />
        </>
      ) : (
        <>
          <Button color="secondary" onClick={() => setEditing(1)}>
            <span>Trở lại</span>
          </Button>
          <ViewInvoice customer={data} info={info} order={order} />
        </>
      )}
    </>
  );
};
export default SingleInvoice;
