import React, { useEffect } from "react";
import ParticlesComponent from "../components/ParticlesComponent";
import styles from "./styles.module.css";
import { FaSpinner, FaWalking, FaSignOutAlt } from "react-icons/fa";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import {
  USER_CLOCKOUT_RESET,
  USER_REGISTER_RESET,
} from "../redux/constants/userConstants";

const Home = () => {
  let today = new Date();
  let date = new Date().toUTCString().slice(0, 16);
  let time = today.getHours() + ":" + today.getMinutes();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: USER_CLOCKOUT_RESET });
    dispatch({ type: USER_REGISTER_RESET });
  }, [dispatch]);
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
          <div className={styles.circleGrid}>
            <Link to="/enroll">
              <div className={`${styles.circle} ${styles.green}`}>
                <Center>
                  <FaSpinner />
                </Center>
                <h3>Enrollment</h3>
              </div>
            </Link>

            <Link to="/clockin">
              <div className={`${styles.circle} ${styles.blue}`}>
                <Center>
                  <FaWalking />
                </Center>
                <h3>Clockin</h3>
              </div>
            </Link>

            <Link to="/clockout">
              <div className={`${styles.circle} ${styles.red}`}>
                <Center>
                  <FaSignOutAlt />
                </Center>
                <h3>Clockout</h3>
              </div>
            </Link>
          </div>
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
    </>
  );
};

export default Home;
