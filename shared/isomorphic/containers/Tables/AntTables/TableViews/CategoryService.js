import React, { useState } from "react";
import { useEffect } from "react";
import { Component } from "react";
import TableWrapper from "../AntTables.styles";
import { Button } from "antd";
import categories from "../../category";
import { Drawer, Descriptions, Badge, Modal,Form,Input } from "antd";
import { FormWrapper } from "../AntTables.styles";
import DrawerCategoryService from "./DrawerCategoryService";
import { API_URL } from "../../../../config/url/url";
const {TextArea} = Input
export default function() {
  const [state, setState] = React.useState({
    category_service: {},
  });
  const url=`${API_URL}/admin/service_category`
  const [data, setData] = useState([]);
  const [add,setAdd]= useState(0);
  const USER_TOKEN=localStorage.getItem('token');
  const AuthStr = 'Bearer '.concat(USER_TOKEN); 
  const [name,setName] = useState();
  const [description,setDescription] = useState();
  function getCategoryService(){
    axios.get(`${API_URL}/admin/service_category`,{ headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
    .then(response=>{
        const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/admin/service_category?page=${page}`, {
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
      // const category_service=response.data.data.data
      // setData(category_service)
    })
  }
  useEffect(() => {
    
    getCategoryService();
    
  }, [add]);
  
    async function AddCategory(){
      return axios.post(url,
      {
        "name" : name,
        "note" : description
    },{ headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }}  
      ).then(res=>res.data);
      
    }
    const handleSubmit = async e => {
      e.preventDefault();
      const statusAdd =  await AddCategory();
      console.log(statusAdd);
      if(statusAdd.status == true){
      
      setAdd(1);
      setData([]);
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

  const handleOkDeleteModal = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleDeleteModal(false);
      setConfirmLoading(false);
    }, 2000);
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
      title: "Tên thể loại",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      width: "30%",
      ellipsis: true,
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
                key={`a-${record.name}`}
                onClick={() => {
                  showDrawerInfo();
                  state.category_service = record;
                }}
                type="primary"
            shape="round"
            style={{marginRight: "10px",border:'none'}}
              >
                Chi tiết
              </Button>

              <Button  shape="circle" type="danger" ><i className="ion-android-delete" /></Button>
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
      <Button shape="round"
          onClick={showModal}
          style={{ marginBottom: "3%" ,backgroundColor:"#22D3EE",color:'whitesmoke'  }}>
        Thêm thể loại mới +
      </Button>
      <TableWrapper dataSource={data} columns={columns} />
      <Modal
        title="Thêm thể loại"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleSubmit}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <FormWrapper>
          <Form name="basic" layout="vertical" hideRequiredMark>
            <Form.Item
              label="Tên sản phẩm"
              name="name"
              
            >
              <Input onChange={(e) => {setName(e.target.value)}} />
            </Form.Item>
            <Form.Item
              label="Mô tả"
              name="price"
              
            >
              <TextArea onChange={(e) => setDescription(e.target.value)} />
            </Form.Item>
            
            
          </Form>
        </FormWrapper>
      </Modal>
      <Drawer
        closable={false}
        title="Thông tin  dịch vụ"
        width={720}
        visible={visibleInfo}
        
        onClose={handleCancelDrwerInfo}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <DrawerCategoryService category = {state.category_service}/>
      </Drawer>
    </>
  );
}
