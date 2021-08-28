import React from "react";
import { useState, useEffect } from "react";
import TableWrapper from "../AntTables.styles";
import { Link } from "react-router-dom";

import { Button } from "antd";
import { Modal } from "antd";
import { FormWrapper, ViewWrapper } from "../AntTables.styles";
import { Form, Input, Drawer} from "antd";
import DrawerBranch from "./DrawerBranch";
import { API_URL } from "../../../../config/url/url";
const { Search } = Input;
export default function() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone]= useState();
  const [address,setAddress] = useState();
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const [branch,setBranch] =useState({
    branch_id:null,
    branch_name:null,
    searchText:'',
  });
  const [form] = Form.useForm();
  function getBranch() {
    axios
      .get(`${API_URL}/admin/tail`, {
        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if(response.data.status == true ){

        const total_pages = response.data.data.meta["last_page"];

        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/admin/tail?page=${page}`, {
              headers: {
                Authorization: AuthStr,
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
               
                setData(old => [...old, ...res.data.data.data]);
            }
          );
          page++;
        }
        }
        //const branch = response.data.data.data;
        //setData(branch);
      });
  }
  useEffect(() => {
    getBranch();
  }, []);
  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);
  const showModalDelete = () => {
    setVisibleDeleteModal(true);
  };
  async function AddBranch(){
    return axios.post(`${API_URL}/admin/tail`,
    {
      "name" : name, 
      "phone" : phone,
      "address" : address, 
      
  } ,{ headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }}  
    ).then(res=>res.data.status);
    
  }
  const handleOk = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusAdd = await AddBranch();
    if(statusAdd == true){
      form.resetFields();
      setTimeout(() => {
        setData([]);
        getBranch();
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };
  //Delete 
  async function DeleleBranch() {  
    return axios.get(`${API_URL}/admin/tail/${branch.branch_id}/delete`,
    { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(res=>res.data.status);

  }
  //Search
  let { searchText } = branch;
  searchText = searchText.toUpperCase();
  const filterdData = searchText // based on text, filter data and use filtered data
    ? data.filter((branch) =>
    branch["name"].toUpperCase().includes(searchText))
    : data;
  
  function onInputChange(event) {
    setBranch({ ...branch, searchText: event.target.value });
  }
  const handleOkDeleteModal = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusDelete = await DeleleBranch(branch.branch_id);
    if(statusDelete==true){
      setTimeout(() => {
        setData([]);  
        setVisibleDeleteModal(false);
        setConfirmLoading(false);
        getBranch();
        
        
        
      }, 2000);
    }
  };

  const handleCancelDeleteModal = () => {
    console.log("Clicked cancel button");
    setVisibleDeleteModal(false);
  };
  //
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  const showDrawerInfo = () => {
    setVisibleInfo(true);
  };
  const handleCancelDrwerInfo = () => {
    setVisibleInfo(false);
  };
  const showModal = () => {
    setVisible(true);
  };

  

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "10%",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "20%",
    },

    {
      title: "",
      dataIndex: "action",
      width: "25%",
      render: (_, record) => (
        <>
          {record.name === "initial" && <Button icon="plus" shape="circle" />}
          {record.name !== "initial" && (
            <>
              
              <Link to="/dashboard/table_ant">
                <Button
                  type="primary"
                  style={{
                    marginRight: "5px",
                    height: "auto",
                    
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  Xem các dịch vụ hiện có
                </Button>
              </Link>
              <Button
              key={`${record.id}`}
              onClick={() => {
                showDrawerInfo(record.name);
                branch.branch_id = record.id;
              }}
              
              type="text"
              style={{ marginRight: "10px",color:'white',backgroundColor:'#9C9696',border:'none' }}
            >
              Chi tiết
            </Button>
              <Button
                  onClick={() => {
                    showModalDelete();
                    branch.branch_id = record.id;
                    branch.name = record.name;
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
  const myColTitleStyle = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <ViewWrapper>
        <div className="a">
          <Search placeholder="Tìm chi nhánh" style={{ width: 200 }}  onChange={onInputChange} />

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
            Thêm chi nhánh mới
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
              <p>Xóa chi nhánh này {branch.branch_name}</p>
            </Modal>
      <Modal
        title="Thêm chi nhánh"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <FormWrapper>
          <Form form={form} name="basic" layout="vertical" hideRequiredMark>
            <Form.Item label="Tên chi nhánh" name="name">
              <Input
                onChange={(e) => {
                  setName(e.target.value);
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
           
            <Form.Item label="Địa chỉ" name="address">
              <Input
                onChange={(e) => {
                  setAddress(e.target.value);
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
        <DrawerBranch id={branch.branch_id}/>
      </Drawer>
    </>
  );
}
