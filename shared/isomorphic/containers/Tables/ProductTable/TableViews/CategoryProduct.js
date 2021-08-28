  import React, { useState } from "react";
  import { useEffect } from "react";
  import { useHistory } from "react-router";
  import TableWrapper from "../AntTables.styles";
  import { Button } from "antd";
import { FormWrapper } from "../../AntTables/AntTables.styles";
  import { Drawer, Descriptions, Modal, Form,Input } from "antd";
  import category_product from "../category";
  import DrawerProduct from "../DrawerCategoryProduct/DrawerCategoryProduct";
  import { API_URL } from "../../../../config/url/url";
import category from "../category";
const {TextArea} = Input
  export default function() {
    let history = useHistory();
    const USER_TOKEN = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(USER_TOKEN);
    const [data, setData] = useState([]);
    const [state, setState] = React.useState({
      dataList: category_product.data.data,
      filtered: false,
      category: {},
      category_id : null,
      category_name: null
    });
    function getCategoryProduct() {
      axios
        .get(`${API_URL}/admin/product_category`, {
          headers: {
            Authorization: AuthStr,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          const total_pages = response.data.data.meta["last_page"];
        console.log(total_pages);
        let page = 1;
        while(page <= total_pages){
          axios.get(`${API_URL}/admin/product_category?page=${page}`, {
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
          //const category = response.data.data.data;
          //setData(category);
        });
    }
    async function DeleleCategoryProduct(categoryid) {  
      return axios.get(`${API_URL}/admin/product_category/${categoryid}/delete`,
      { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }})
      .then(res=>res.data.status);
  
    }
    //Add Category
    const [name,setName] = useState();
    const [description,setDescription] = useState();
    async function AddCategory(){
      return axios.post(`${API_URL}/admin/product_category`,
      {
        "name" : name,
        "note" : description
    },{ headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }}  
      ).then(res=>res.data.status);
      
    }
    const handleSubmit = async e => {
      e.preventDefault();
      const statusAdd =  await AddCategory();
      console.log(statusAdd);
      if(statusAdd == true){
      setData([]);
      getCategoryProduct()
      setVisible(false);
      
      }
      else{
        Modal.error({
          title: 'Lỗi',
          content: 'Kiểm tra các thông tin nhập',
        });
        setConfirmLoading(false);
      }
  
    }
    useEffect(() => {
      getCategoryProduct();
    },[]);

    

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

    const handleOkDeleteModal = async () => {
      setModalText("The modal will be closed after two seconds");
      setConfirmLoading(true);
      const statusDelete = await DeleleCategoryProduct(state.category_id)
      if(statusDelete==true){
        setTimeout(() => {
          
          setVisibleDeleteModal(false);
          setConfirmLoading(false);
          setData([])
          getCategoryProduct()
          
          
          
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

    const showModal = () => {
      setVisible(true);
    };

    
    const handleCancel = () => {
      console.log("Clicked cancel button");
      setVisible(false);
    };

    const columns = [
      {
        title: "Tên loại sản phẩm",
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
                  key={`${record.id}`}
                  onClick={() => {
                    showDrawerInfo(record.name);
                    state.category = record;
                  }}
                  type="primary"
                  shape="round"
                  style={{ marginRight: "10px", border: "none" }}
                >
                  Chi tiết
                </Button>

                <Button
                  onClick={() => {
                    showModalDelete();
                    state.category_id = record.id;
                    state.category_name = record.name;
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
        <Button
          shape="round"
          onClick={showModal}
          style={{
            marginBottom: "3%",
            backgroundColor: "#22D3EE",
            color: "whitesmoke",
          }}
        >
          Thêm loại mới +
        </Button>
        <TableWrapper dataSource={data} columns={columns} />
        <Modal
          title="Xác nhận"
          visible={visibleDeleteModal}
          onOk={handleOkDeleteModal}
          onCancel={handleCancelDeleteModal}
          okText="Xác nhận"
          cancelText="Hủy"
          okType="danger"
        >
          Xóa loại sản phẩm này?
        </Modal>
        <Modal
          title="Thêm loại sản phẩm"
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
          title="Thông tin loại sản phẩm"
          width={720}
          visible={visibleInfo}
          onClose={handleCancelDrwerInfo}
          bodyStyle={{ paddingBottom: 80 }}
        >
         <DrawerProduct category={state.category}/>
        </Drawer>
      </>
    );
  }
