import React from "react"
import { Drawer,Descriptions,Badge , Modal} from 'antd';
export default function DrawerDetailService(props,visible) {
    return(
    <Drawer
       
        title="Thông tin nhân viên"
        width={720}
        visible={visible}
        
        bodyStyle={{ paddingBottom: 80 }}
        >
          <Descriptions title="" layout="vertical" bordered>
          <Descriptions.Item label="Tên">{props.record.name}</Descriptions.Item>
          <Descriptions.Item label="Tài khoản">{props.record.price} </Descriptions.Item>
          <Descriptions.Item label="Vị trí">Nhân viên bán hàng</Descriptions.Item>
          <Descriptions.Item label="Thời gian làm việc">18:00:00 - 21:00:00</Descriptions.Item>
          <Descriptions.Item label="Thời gian nghỉ" span={1}>
            19:00:00-19:15:00
          </Descriptions.Item>
          <Descriptions.Item label="Tình trạng" span={3}>
            <Badge status="processing" text="Đang làm việc" />
          </Descriptions.Item>
         
        </Descriptions>

        </Drawer>);
}