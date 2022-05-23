import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { UserContext } from "../App";

export default function MenuBar() {
    let navigate = useNavigate()
    const {user} =useContext(UserContext);
    return (
    <Menu theme="dark" mode="horizontal">
    <Menu.Item
     key="home" onClick={() => navigate('/')}
    icon={<HomeOutlined style={{ fontSize: "1.8em" }} />}
            />
    <Menu.Item
      key="add" onClick={() => navigate('/add')}
      icon={<PlusCircleOutlined style={{ fontSize: "1.8em" }} />}
    />
  { user && <Menu.Item
      key="random"
      icon={<QuestionCircleOutlined style={{ fontSize: "1.8em" }} />}
    />}

  </Menu>

    )

}