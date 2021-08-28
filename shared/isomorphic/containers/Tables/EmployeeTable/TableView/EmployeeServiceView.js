import React, { useEffect, useState } from "react";
import TableWrapper from "../../AntTables/AntTables.styles";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { FormWrapper, ViewWrapper } from "../../AntTables/AntTables.styles";
import {
  Drawer,
  Descriptions,
  Badge,
  Modal,
  Tag,
  Input,
  Form,
  Select,
} from "antd";
import { useSelector } from "react-redux";
import DrawerEmployee from "./DrawerEmployeeService";
import service_employee from "../../service_employee";
import axios from "axios";
import { API_URL } from "../../../../config/url/url";
const { Search } = Input;
const { TextArea } = Input;
export default function() {
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const tail_id = localStorage.getItem("tail_id");
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [data1, setData1] = useState([]);
  const [state, setState] = React.useState({
    dataList: service_employee.data.data,
    searchText: "",
    employee: {},
    employee_id: null,
    employee_name: null
  });
  
  
  
  // Get Employee Service

  function getEmployeeService() {
    axios
      .get(`${API_URL}/sub_admin/staff?role=3`, {
        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if(response.data.status==true){
          const total_pages = response.data.data.meta["last_page"];

        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/sub_admin/staff?role=3&page=${page}`, {
              headers: {
                Authorization: AuthStr,
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {

                const employee= res.data.data.data
               
                setData(old => [...old, ...res.data.data.data]);
                setData1(old => [...old, ...res.data.data.data]);

            }
          );
          page++;
        }
        }
      });
  }
  useEffect(() => {
    
    async function fetchData() {
     
      // You can await here
      await getEmployeeService();
      // ...
    }
   fetchData();
  },[]);
  //Add Employee
  const [name,setName]=useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [fullname,setFullname] = useState();
  const [phone,setPhone] = useState();
  async function AddEmployee(){
    return axios.post(`${API_URL}/sub_admin/staff`,
    {
      "username" : name, 
      "email" : email,
      "password" : password, 
      "fullname" : fullname,
      "phone" : phone,
      "role" : 3
  } ,{ headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }}  
    ).then(res=>res.data.status);
    
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setConfirmLoading(true);
    const statusAdd =  await AddEmployee();
    console.log(statusAdd);
    if(statusAdd == true){
    form.resetFields();
    setData([]);

    await getEmployeeService();

    setVisible(false);
    setConfirmLoading(false);
    
    }
    else{
      
        Modal.error({
          title: 'Lỗi',
          content: 'Kiểm tra các thông tin nhập',
        });
        setConfirmLoading(false);
      
    }

  }
  // Delete Employee
  async function DeleleEmployee(employee_id) {  
    return axios.get(`${API_URL}/sub_admin/staff/${employee_id}/delete`,
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(res=>res.data.status);

  }
  const handleOkDeleteModal = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusDelete = await DeleleEmployee(state.employee_id);
    if(statusDelete==true){
      setTimeout(() => {
        
        setVisibleDeleteModal(false);
        setConfirmLoading(false);
        setData([])
        getEmployeeService()
        
        
        
      }, 2000);
    }
  };
  
  let { searchText } = state;
  searchText = searchText.toUpperCase();
  const filterdData = searchText // based on text, filter data and use filtered data
    ? data.filter((branch) =>
    branch["username"].toUpperCase().includes(searchText))
    : data;
  function onInputChange(event) {
    setState({ ...state, searchText: event.target.value });
  }
  const { initialInvoices, invoices } = useSelector((state) => state.Invoices);
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  const showDrawerInfo = () => {
    setVisibleInfo(true);
  };
  const handleCancelDrwerInfo = () => {
    setVisibleInfo(false);
  };
  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);
  const showModalDelete = () => {
    setVisibleDeleteModal(true);
  };

  

  const handleCancelDeleteModal = () => {
    console.log("Clicked cancel button");
    setVisibleDeleteModal(false);
  };
  //
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const columns = [
    {
      title: "Tên đăng nhập",
      dataIndex: "username",
      key: "name",
      width: "20%",
    },
    {
      title: "Tài khoản email",
      dataIndex: "email",
      key: "price",
      width: "20%",
      ellipsis: true,
    },

    {
      title: "Vị trí",
      dataIndex: "role",
      key: "description",
      width: "20%",
      ellipsis: true,
    },
    {
      title: "Tình trạng",

      key: "status",
      width: "20%",
      render: () => {
        return <Tag color="blue">Đang làm</Tag>;
      },
    },

    {
      title: "",
      dataIndex: "action",
      width: "15%",
      render: (_, record) => (
        <>
          {record.name === "initial" && <Button icon="plus" shape="circle" />}
          {record.name !== "initial" && (
            <>
              <Button
                className="button-detail"
                key={`${record.id}`}
                onClick={() => {
                  showDrawerInfo(record.name);
                  state.employee = record;
                }}
                shape="round"
                style={{
                  marginRight: "10px",
                  color: "#1BC5BD",
                  backgroundColor: "#C9F7F5",
                  border: "none",
                }}
              >
                Chi tiết
              </Button>

              <Button
                  onClick={() => {
                    showModalDelete();
                    state.employee_id = record.id;
                    state.employee_name = record.username;
                  }}
                  shape="circle"
                  type="danger"
                >
                  <i className="ion-android-delete" />
                </Button>
              
            </>
          )}
        </>
      ),
    },
  ];
  const handleResetFilter = () =>{
      
    setData([]);
    setData(data1);
}
  return (
    <>
      <ViewWrapper>
        <div className="a">
          <div>
          <Search placeholder="Nhập tên nhân viên" style={{ width: 200 }} onChange={onInputChange}  />
          
          </div>

          <Button
            shape="round "
            onClick={showModal}
            style={{
              marginBottom: "3%",
              color: "whitesmoke",
              backgroundColor: "#22D3EE",
              border: "none",
              float: "right",
            }}
          >
            <span>Thêm nhân viên dịch vụ   <i className="ion-person-add" /></span>
          </Button>
        </div>
        <TableWrapper dataSource={filterdData} columns={columns} />
      </ViewWrapper>
      <Modal
                title="Xác nhận"
                visible={visibleDeleteModal}
                onOk={handleOkDeleteModal}
                onCancel={handleCancelDeleteModal}
                okText="Xác nhận"
                cancelText="Hủy"
                okType="danger"
              >
                Xóa nhân viên {state.employee_name}?
              </Modal>
      <Modal
        title="Thêm nhân viên"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <FormWrapper>
          <Form form={form} name="basic" layout="vertical" hideRequiredMark>
            <Form.Item label="Tên nhân viên" name="name" rules={[{ required: true }]}>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="password">
              <Input.Password
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Tên đầy đủ" name="fullname">
              <Input
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
              <Input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Item>
            
          </Form>
        </FormWrapper>
      </Modal>
      <Drawer
        closable={false}
        title="Thông tin  Nhân viên"
        width={720}
        visible={visibleInfo}
        onClose={handleCancelDrwerInfo}
        bodyStyle={{ paddingBottom: 80 }}
      >
        
        <DrawerEmployee employee={state.employee} />
      </Drawer>
    </>
  );
}
