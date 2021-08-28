  import React from "react";
  import { useState , useEffect} from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useRouteMatch, useParams, useLocation, Link } from "react-router-dom";
  import EditInvoice from "./EditInvoice";
  import ViewInvoice from "./ViewInvoice";
  import Button from "@iso/ui/Antd/Button/Button";
 import { API_URL } from "../../config/url/url";
  const SingleInvoice = _ => {
    
    const { state } = useLocation();
    
    
    // const { invoiceId } = useParams();
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    const tailid = localStorage.getItem("tail_id");
    const [editing, setEditing] = useState(0);
    const {id_customer}= state;
    const [data,setData] = useState([]);
    // componentWillReceiveProps(nextProps) {
    //   this.toggleCreatedInvoice(nextProps);
    // }
    // const redirectPath = match.url.replace(invoiceId, '');
    function GetOneUser(id_number) {
      return axios
        .get(
          `${API_URL}/g/user/${id_number}`,
  
        
        )
        .then((res) => {
          const data = res.data.data;
          setData(data);
        });
    }
    React.useEffect(() => {
      async function fetchData(){
        await GetOneUser(id_customer)
        
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
            <ViewInvoice customer={data} />
          </>
        )}
      </>
    );
  };
  export default SingleInvoice;
