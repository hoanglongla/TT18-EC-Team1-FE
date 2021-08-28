import React from "react";
import { useState,useEffect } from "react";
import { useLocation } from "react-router";
import { Link, useRouteMatch } from 'react-router-dom';
import clone from "clone";
import { Row, Col } from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import basicStyle, { colors } from "@iso/assets/styles/constants";
import IsoWidgetsWrapper from "./WidgetsWrapper";
import IsoWidgetBox from "./WidgetBox";
import CardWidget from "./Card/CardWidget";
import ProgressWidget from "./Progress/ProgressWidget";
import SingleProgressWidget from "./Progress/ProgressSingle";
import ReportsWidget from "./Report/ReportWidget";
import StickerWidget from "./Sticker/StickerWidget";
import SaleWidget from "./Sale/SaleWidget";
import VCardWidget from "./vCard/vCardWidget";
import SocialWidget from "./SocialWidget/SocialWidget";
import SocialProfile from "./SocialWidget/SocialProfileIcon";
import userpic from "@iso/assets/images/user1.png";
import { isServer } from "@iso/lib/helpers/isServer";
import { DatePicker } from "antd";
import { API_URL } from "../../config/url/url";
import {
  TableViews,
  tableinfos,
  dataList,
} from "../Tables/AntTables/AntTables";
import * as rechartConfigs from "../Charts/Recharts/config";
import StackedAreaChart from "../Charts/Recharts/Charts/StackedAreaChart";
import GoogleChart from "react-google-charts";
import * as googleChartConfigs from "../Charts/GoogleChart/config";
import IntlMessages from "@iso/components/utility/intlMessages";
import { StickerWidgetWrapper } from "./Sticker/StickerWidget.styles";

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
  wisgetPageStyle: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    overflow: "hidden",
  },
};
const SIGNLE_PROGRESS_WIDGET = [
  {
    label: "widget.singleprogresswidget1.label",
    percent: 70,
    barHeight: 7,
    status: "active",
    info: true,
  },
  {
    label: "widget.singleprogresswidget2.label",
    percent: 80,
    barHeight: 7,
    status: "active",
    info: true,
  },
  {
    label: "widget.singleprogresswidget3.label",
    percent: 40,
    barHeight: 7,
    status: "active",
    info: true,
  },
  {
    label: "widget.singleprogresswidget4.label",
    percent: 60,
    barHeight: 7,
    status: "active",
    info: true,
  },
];

const STICKER_WIDGET = [
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget4.text",
    icon: "ion-android-cart",
    fontColor: "#ffffff",
    bgColor: "#F75D81",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "Customer",
    icon: "ion-android-people",
    fontColor: "#ffffff",
    bgColor: "#7266BA",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "Revenue",
    icon: "ion-android-camera",
    fontColor: "#ffffff",
    bgColor: "#42A5F6",
  },
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget3.text",
    icon: "ion-chatbubbles",
    fontColor: "#ffffff",
    bgColor: "#7ED320",
  },
];

const SALE_WIDGET = [
  {
    label: "widget.salewidget1.label",
    price: "widget.salewidget1.price",
    details: "widget.salewidget1.details",
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget2.label",
    price: "widget.salewidget2.price",
    details: "widget.salewidget2.details",
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget3.label",
    price: "widget.salewidget3.price",
    details: "widget.salewidget3.details",
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget4.label",
    price: "widget.salewidget4.price",
    details: "widget.salewidget4.details",
    fontColor: "#F75D81",
  },
];

const CARD_WIDGET = [
  {
    icon: "ion-android-chat",
    iconcolor: "#42A5F5",
    number: "widget.cardwidget1.number",
    text: "widget.cardwidget1.text",
  },
  {
    icon: "ion-music-note",
    iconcolor: "#F75D81",
    number: "widget.cardwidget2.number",
    text: "widget.cardwidget2.text",
  },
  {
    icon: "ion-trophy",
    iconcolor: "#FEAC01",
    number: "widget.cardwidget3.number",
    text: "widget.cardwidget3.text",
  },
];

const PROGRESS_WIDGET = [
  {
    label: "widget.progresswidget1.label",
    details: "widget.progresswidget1.details",
    icon: "ion-archive",
    iconcolor: "#4482FF",
    percent: 50,
    barHeight: 7,
    status: "active",
  },
  {
    label: "widget.progresswidget2.label",
    details: "widget.progresswidget2.details",
    icon: "ion-pie-graph",
    iconcolor: "#F75D81",
    percent: 80,
    barHeight: 7,
    status: "active",
  },
  {
    label: "widget.progresswidget3.label",
    details: "widget.progresswidget3.details",
    icon: "ion-android-download",
    iconcolor: "#494982",
    percent: 65,
    barHeight: 7,
    status: "active",
  },
];

const SOCIAL_PROFILE = [
  {
    url: "#",
    icon: "ion-social-facebook",
    iconcolor: "#3b5998",
  },
  {
    url: "#",
    icon: "ion-social-twitter",
    iconcolor: "#00aced",
  },
  {
    url: "#",
    icon: "ion-social-googleplus",
    iconcolor: "#dd4b39",
  },
  {
    url: "#",
    icon: "ion-social-linkedin-outline",
    iconcolor: "#007bb6",
  },
  {
    url: "#",
    icon: "ion-social-dribbble-outline",
    iconcolor: "#ea4c89",
  },
];
export default function() {
  const { rowStyle, colStyle } = basicStyle;

  const chartEvents = [
    {
      eventName: "select",
      callback(Chart) {},
    },
  ];

  const stackConfig = {
    ...rechartConfigs.StackedAreaChart,
    width: !isServer && window.innerWidth < 450 ? 300 : 500,
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const widgetStyle = {
    backgroundColor: '#808080',
    width: '400px',
    margin:'10px'
  };
  const [data,setData]=useState({});
  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const { state } = useLocation();
  function getReport(){
  return axios.get(`${API_URL}/admin/reportByTail?tail_id=${state.id_tail}`,
     { headers: { Authorization: AuthStr,'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS','Access-Control-Allow-Origin' : '*' }}  
    ).then(res=>setData(res.data.data));
    
  }
  useEffect(()=>{
    async function fetchData(){
      await getReport();
    }
    fetchData();
  },[]);
  return (
    <LayoutWrapper>
      <div style={styles.wisgetPageStyle}>
        <StickerWidgetWrapper className="isoStickerWidget" style={widgetStyle}>
          {/* Sticker Widget */}
          <div className="isoIconWrapper">
            <i className="ion-android-calendar" style={{ color: "#FFFFFF" }} />
          </div>

          <div className="isoContentWrapper">
            <h3
              className="isoStatNumber"
              style={{ color:'white',paddingLeft:"10px" }}
            >
              Chọn tháng
            </h3>
            <span className="isoLabel" style={{ color: "#ffffff" }}>
              <DatePicker
                mode="month"
                style={{ margin: "15px" }}
                placeholder="Chọn tháng"
              />
            </span>
          </div>
        </StickerWidgetWrapper>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id={`${data.total_count_order}`} />}
                text={<IntlMessages id="Số đơn hàng đặt" />}
                icon="ion-android-cart"
                fontColor="#ffffff"
                bgColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id={`${data.total_count_book}`} />}
                text={<IntlMessages id="Số dịch vụ đặt" />}
                icon="ion-android-cart"
                fontColor="#ffffff"
                bgColor="#42A5F6"
              />
            </IsoWidgetsWrapper>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id="2101" />}
                text={<IntlMessages id="Customer" />}
                icon="ion-android-people"
                fontColor="#ffffff"
                bgColor="#7266BA"
              />
            </IsoWidgetsWrapper>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sticker Widget */}
              <StickerWidget
                number={<IntlMessages id={`${data.total_revenue_order}`}/>}
                text={<IntlMessages id="Doanh thu tổng" />}
                icon="ion-cash"
                fontColor="#ffffff"
                bgColor="#7ED320"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
        <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="Dịch vụ thu về" />}
                  price={<IntlMessages id={`${data.total_revenue_service}`} />}
                  
                 
                />
              </IsoWidgetsWrapper>
            </Col>
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="Đơn hàng thu về" />}
                  price={<IntlMessages id={`${data.total_revenue_order}`} />}
                  
                  
                />
              </IsoWidgetsWrapper>
            </Col>
        </Row>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470} style={{ overflow: "hidden" }}>
                <GoogleChart
                  {...googleChartConfigs.ServiceBarChart}
                  chartEvents={chartEvents}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470} style={{ overflow: "hidden" }}>
                <GoogleChart
                  {...googleChartConfigs.BarChart}
                  chartEvents={chartEvents}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

       

       
      </div>
    </LayoutWrapper>
  );
}
