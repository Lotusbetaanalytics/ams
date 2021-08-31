import React from "react";
import ParticlesComponent from "../components/ParticlesComponent";
import styles from "./styles.module.css";
import { FaWalking } from "react-icons/fa";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  let today = new Date();
  let date = new Date().toUTCString().slice(0, 16);
  let time = today.getHours() + ":" + today.getMinutes();
  return (
    <>
      <ParticlesComponent />
      <div className={styles.app}>
        <Header styles={styles} />

        <div className={styles.center}>
          <Center>
            <h1>
              <b>{time}</b>
            </h1>
          </Center>
          <Center>
            <h4>
              <b>{date}</b>
            </h4>
          </Center>
          <Link to="/clockin">
            <div className={styles.circle}>
              <Center>
                <FaWalking />
              </Center>
              <h3>Clockin</h3>
            </div>
          </Link>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className={styles.header}>
          <Center>
            <h5>&copy; Lotus Beta Analytics</h5>
          </Center>
        </div>
      </div>
      <div className={styles.tab}>
        <Link to="/enrol">
          <div className={styles.square}>Enrol</div>
        </Link>
        <Link to="/clockout">
          <div className={styles.square}>Clockout</div>
        </Link>
      </div>
    </>
  );
};

export default Home;
