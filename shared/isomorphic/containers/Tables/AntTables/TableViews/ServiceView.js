import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TableWrapper from "../../AntTables/AntTables.styles";
import { FilterDropdown } from "@iso/components/Tables/HelperCells";

import { Icon,Select } from "antd";
import DrawerService from "../DrawerService/DrawerService";
import { FormWrapper, ViewWrapper } from "../../AntTables/AntTables.styles";
import {
  Drawer,
  Descriptions,
  Modal,
  Radio,
  Form,
  Input,
  Button,
  Popconfirm,
} from "antd";
import services_1 from "../../services";

import { API_URL } from "../../../../config/url/url";

import axios from "axios";
const { Search } = Input;
const { TextArea } = Input;
const {Option} = Select;
export default function() {
  let history = useHistory();

  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [price_discount, setPriceDiscount] = useState();
  const [description, setDescription] = useState();
  const [stock, setStock] = useState();
  const [picture, setPicture] = useState();
  const [timeEstimate, setTimeEstimate] = useState();
  const [book_online, setBookOnline] = React.useState(true);
  const [value, setValue] = React.useState(1);
  const [categoryif,setCategoryId] = useState();
  const [data, setData] = useState([]);
  const [category,setCategory] = useState([])
  const service = [];
  async function DeleleService(serviceID) {
    return axios
      .get(`${API_URL}/admin/service/${serviceID}/delete`, {
        headers: {
          Authorization: AuthStr,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => res.data.status);
  }
  async function AddService() {
    return axios
      .post(
      `${API_URL}/admin/service`,
        {
          name: name,
          price: parseInt(`${price}`),
          price_discount: parseInt(`${price_discount}`),
          description: `${description}`,
          
          picture: picture,
          time_estimate: parseInt(`${timeEstimate}`),
          can_book_online: book_online,
          sex_type: value,
          services_categories_id: categoryif,
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

  function getService() {
    axios

      .get(`${API_URL}/admin/service`, {

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

            .get(`${API_URL}/admin/service?page=${page}`, {

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
      });
  }
  function getCategoryService() {
    axios

      .get(`${API_URL}/admin/service_category`, {

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

              `${API_URL}/admin/service_category?page=${page}`,


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
  useEffect(() => {
    getService();
    getCategoryService();
  }, []);
  const [state, setState] = React.useState({
    dataList: services_1.data.data,
    
    searchText: "",
    filtered: false,
    service: {},
    service_id: null,
    service_name: null,
  });

  
  function onInputChange(event) {
    setState({ ...state, searchText: event.target.value });
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

  const handleOkDeleteModal = async () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const statusDelete = await DeleleService(state.service_id);
    if (statusDelete == true) {
      setTimeout(() => {
        setVisibleDeleteModal(false);
        setConfirmLoading(false);
        setData([]);
        getService();
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
  let { searchText } = state;
  searchText = searchText.toUpperCase();
  const filterdData = searchText // based on text, filter data and use filtered data
    ? data.filter((branch) =>
    branch["name"].toUpperCase().includes(searchText))
    : data;
 
  function handleChange(value) {
    setCategoryId(value);
  }
  const columns = [
    {
      title: "T??n d???ch v???",
      dataIndex: "name",
      key: "name",
      width: "12%",
      
    },
    {
      title: "Gi??",
      dataIndex: "price",
      key: "price",
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Gi?? ??u ????i",
      dataIndex: "price_discount",
      key: "price_discount",
      width: "7%",
    },
    {
      title: "M?? t???",
      dataIndex: "description",
      key: "description",
      width: "20%",
      ellipsis: true,
    },
    {
      title: "Th???i gian th???c hi???n",
      dataIndex: "time_estimate",
      key: "time-estimate",
      width: "10%",
    },
    {
      title: "D??nh cho",
      dataIndex: "sex_type",
      key: "sex_type",
      width: "10%",

      ellipsis: true,
      render: (sextype) => {
        if (sextype == 1) {
          return <td>N???</td>;
        } else {
          return <td>Nam</td>;
        }
      },
    },
    {
      title: "",
      dataIndex: "action",
      width: "15%",
      render: (text, record) => (
        <>
          <Button
            key={`a-${record.name}`}
            onClick={() => {
              showDrawerInfo();
              state.service = record;
            }}
            type="primary"
            shape="round"
            style={{ marginRight: "10px", border: "none" }}
          >
            Chi ti???t
          </Button>

          <Button
            onClick={() => {
              showModalDelete();
              state.service_id = record.id;
              state.service_name = record.name;
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

  const onChangeBookOnline = (e) => {
    console.log("radio checked", e.target.value);
    setBookOnline(e.target.value);
  };
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const statusAdd = await AddService();
    console.log(statusAdd);
    if (statusAdd == true) {
      setData([]);
      getService();
      setVisible(false);
      setConfirmLoading(false);
    } else {
      Modal.error({
        title: 'L???i',
        content: 'Ki???m tra c??c th??ng tin nh???p',
      });
      setConfirmLoading(false);
    }
  };
  return (
    <>
      {console.log(data)}
      <ViewWrapper>
        <div className="a">
        <Search placeholder="T??m d???ch v???" style={{ width: 200 }}  onChange={onInputChange} />
        <Button
          shape="round"
          onClick={showModal}
          style={{
            marginBottom: "3%",
            backgroundColor: "#22D3EE",
            color: "whitesmoke",
          }}
        >
          Th??m d???ch v??? m???i +
        </Button>
        </div>
        <TableWrapper dataSource={filterdData} columns={columns} />
      </ViewWrapper>

      <Drawer
        closable={false}
        title="Th??ng tin  d???ch v???"
        width={720}
        visible={visibleInfo}
        onClose={handleCancelDrwerInfo}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <DrawerService service={state.service} />
        {/* <Descriptions title="" layout="vertical" bordered>
          <Descriptions.Item label="T??n d???ch v???" span={12}>
            {state.service.name}
          </Descriptions.Item>
          <Descriptions.Item label="Gi??" span={1}>
            {state.service.price}
          </Descriptions.Item>
          <Descriptions.Item label="Gi?? ??u ????i" span={1}>
            {state.service.price_discount}
          </Descriptions.Item>
          <Descriptions.Item label="D??nh cho" span={1}>
            {state.service.sex_type}
          </Descriptions.Item>
          <Descriptions.Item label="?????t online" span={1}>
            {state.service.can_book_online}
          </Descriptions.Item>
          <Descriptions.Item label="T??nh tr???ng" span={3}></Descriptions.Item>
          <Descriptions.Item label="M?? t???">
            {state.service.description}
          </Descriptions.Item>
        </Descriptions> */}
      </Drawer>
      <Modal
        title="X??c nh???n"
        visible={visibleDeleteModal}
        onOk={handleOkDeleteModal}
        onCancel={handleCancelDeleteModal}
        okText="X??c nh???n"
        cancelText="H???y"
        okType="danger"
      >
        X??a d???ch v??? {state.service_name}?
      </Modal>
      <Modal
        title="Th??m d???ch v???"
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Th??m"
        cancelText="H???y"
      >
        <FormWrapper>
          <Form name="basic" layout="vertical" hideRequiredMark>
            <Form.Item label="T??n d???ch v???" name="name">
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Gi??" name="price">
              <Input onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item label="Gi?? ??u ????i" name="price_discount">
              <Input onChange={(e) => setPriceDiscount(e.target.value)} />
            </Form.Item>
            
            <Form.Item label="M?? t???" name="description">
              <TextArea
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="H??nh ???nh" name="picture">
              <Input onChange={(e) => setPicture(e.target.value)} />
            </Form.Item>
            <Form.Item label="Th???i gian th???c hi???n" name="time_estimate">
              <Input onChange={(e) => setTimeEstimate(e.target.value)} />
            </Form.Item>
            <Form.Item label="C?? ?????t ???????c online" name="bookonline">
              <Radio.Group onChange={onChangeBookOnline} value={book_online}>
                <Radio value={true}>C??</Radio>
                <Radio value={false}>Kh??ng</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="D??nh cho" name="sex_type">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={0}>Nam</Radio>
                <Radio value={1}>N???</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Lo???i d???ch v???" name="category">
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
