import React from "react";
import { Center } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Header = ({ styles }) => {
  return (
    <div className={styles.header}>
      <Center>
        <div className={styles.miniCircle}>
          <img src={logo} alt="LBAN" />
        </div>
        <h5>Lotus Beta Analytics Nigeria Limited</h5>
      </Center>
    </div>
  );
};

export default Header;
