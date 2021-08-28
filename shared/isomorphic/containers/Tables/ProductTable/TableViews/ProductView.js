import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TableWrapper from "../AntTables.styles";
import { FormWrapper } from "../../AntTables/AntTables.styles";

import { Button, Select } from "antd";

import { backgroundColor, color, marginRight } from "styled-system";
import { ViewWrapper } from "../../../CustomerSinglePage/AntTables/AntTables.styles";
import { Drawer, Descriptions, Badge, Modal, Form, Input, Radio } from "antd";
import DrawerProduct from "../DrawerDetailProduct/DrawerDetailProduct";
import products from "../../product";

import { API_URL } from "../../../../config/url/url";

//import AddEmployeeView from "../../EmployeeTable/TableView/ModalView/AddEmployeeView";
const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;
export default function(props) {
  let history = useHistory();
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [price_discount, setPriceDiscount] = useState();
  const [description, setDescription] = useState();
  const [picture, setPicture] = useState();
  const [stock, setStock] = useState();
  const [amount, setAmount] = useState();
  const [categoryid, setCategoryId] = useState();

  const [category, setCategory] = useState([]);
  const [unit, setUnit] = React.useState();
  const [state, setState] = React.useState({
    dataList: products.data.data,
    filterDropdownVisible: false,
    searchText: "",
    filtered: false,
    product: {},
    product_id: null,
    product_name: null,
  });

  const [visibleInfo, setVisibleInfo] = React.useState(false);

  const showDrawerInfo = (name) => {

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

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      width: "10%",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Giá ưu đãi",
      dataIndex: "price_discount",
      key: "price_discount",
      width: "7%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      width: "20%",
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "10%",
      render: (text, record) => (
        <>
          <Button
            key={`${record.id}`}
            onClick={() => {
              showDrawerInfo(record.name);
              state.product = record;
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
              state.product_id = record.id;
              state.product_name = record.name;
            }}
            shape="circle"
            type="danger"
          >
            <i className="ion-android-delete" />
          </Button>
        </>
      ),
    },
  ];
  const myColTitleStyle = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  const [data, setData] = useState([]);
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
        while (page <= total_pages) {
          axios
            .get(

              `${API_URL}/admin/product_category?page=${page}`,

              {
                headers: {
                  Authorization: AuthStr,
                  "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => {
              setCategory((old) => [...old, ...res.data.data.data]);
            });
          page++;
        }
        // const category_service=response.data.data.data
        // setData(category_service)
      });
  }
  function getProduct() {
    axios
      .get(`${API_URL}/admin/product`, {
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
        while (page <= total_pages) {
          axios

            .get(`${API_URL}/admin/product?page=${page}`, {

              headers: {
                Authorization: AuthStr,
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              setData((old) => [...old, ...res.data.data.data]);
            });
          page++;
        }
        //const product = response.data.data.data;
        //setData(product);
      });
  }
  useEffect(() => {
    getProduct();
    getCategoryProduct();
  }, []);
  // Delete Product
  async function DeleteProduct(productID) {
    return axios

      .get(`${API_URL}/admin/product/${productID}/delete`, {

        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => res.data.status);
  }
  //search
  let { searchText } = state;
  searchText = searchText.toUpperCase();

  function onInputChange(event) {
    setState({ ...state, searchText: event.target.value });
  }
  const filterdData = searchText // based on text, filter data and use filtered data
    ? data.filter((branch) => branch["name"].toUpperCase().includes(searchText))
    : data;
  const handleOkDeleteModal = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusDelete = await DeleteProduct(state.product_id);
    if (statusDelete == true) {
      setTimeout(() => {
        setVisibleDeleteModal(false);
        setConfirmLoading(false);
        setData([]);
        getProduct();
      }, 2000);
    }
  };
  async function AddProduct() {
    return axios
      .post(

        `${API_URL}/admin/product`,

        {
          name: name,
          price: parseInt(`${price}`),
          price_discount: parseInt(`${price_discount}`),
          description: `${description}`,
          picture: null,
          stock: parseInt(`${stock}`),
          amount: parseInt(`${amount}`),
          unit: "gam",
          products_categories_id: categoryid,
        },
        {
          headers: {
            Authorization: AuthStr,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data.status);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const statusAdd = await AddProduct();
    console.log(statusAdd);
    if (statusAdd == true) {
      setData([]);
      getProduct();
      setVisible(false);
    } else {
      Modal.error({
        title: 'Lỗi',
        content: 'Kiểm tra các thông tin nhập',
      });
      setConfirmLoading(false);
    }
  };
  function handleChange(value) {
    setCategoryId(value);
  }
  return (
    <>
      <ViewWrapper>
        <div className="a">
          <Search
            placeholder="Tìm dịch vụ"
            style={{ width: 200 }}
            onChange={onInputChange}
          />
          <Button
            shape="round"
            onClick={showModal}
            style={{
              marginBottom: "3%",
              backgroundColor: "#22D3EE",
              color: "whitesmoke",
            }}
          >
            Thêm sản phẩm mới +
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
        Xóa sản phẩm {state.product_name}?
      </Modal>
      <Modal
        title="Thêm nhân viên"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      ></Modal>
      <Drawer
        closable={false}
        title="Thông tin  sản phẩm"
        width={720}
        visible={visibleInfo}
        onClose={handleCancelDrwerInfo}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <DrawerProduct service={state.product} />
      </Drawer>
      <Modal
        title="Thêm sản phẩm"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <FormWrapper>
          <Form name="basic" layout="vertical" hideRequiredMark>
            <Form.Item label="Tên sản phẩm" name="name">
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Giá" name="price">
              <Input onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item label="Giá ưu đãi" name="price_discount">
              <Input onChange={(e) => setPriceDiscount(e.target.value)} />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <TextArea
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Hình ảnh" name="picture">
              <Input onChange={(e) => setPicture(e.target.value)} />
            </Form.Item>
            <Form.Item label="Stock" name="stock">
              <Input onChange={(e) => setStock(e.target.value)} />
            </Form.Item>
            <Form.Item label="Số lượng" name="amount">
              <Input onChange={(e) => setAmount(e.target.value)} />
            </Form.Item>

            <Form.Item label="Đơn vị" name="unit">
              <Input onChange={(e) => setUnit(e.target.value)} />
            </Form.Item>
            <Form.Item label="Loại dịch vụ" name="category">
              <Select
                defaultValue={1}
                style={{ width: 200 }}
                onChange={handleChange}
              >
                {category.map((category) => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Modal>
    </>
  );
}
