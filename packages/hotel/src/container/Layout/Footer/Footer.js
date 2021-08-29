import React from "react";
import Logo from "@iso/ui/Logo/Logo";
import Footers from "@hotel/components/Footer/Footer";
import { Link } from "react-router-dom";
import FooterMenu from "./FooterMenu";
import LogoImage from "../Header/logo_transparent.png";

const Footer = () => {
  return (
    <Footers
      // logo={
      //   <Link to="/">
      //     <Logo style={{ width: "30px" }} src={LogoImage} title="hotel" />
      //   </Link>
      // }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} ReaQ, Inc.`}
    />
  );
};

export default Footer;
