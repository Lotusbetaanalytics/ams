import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { FiCheckCircle } from "react-icons/fi";
import { USER_CLOCKOUT_RESET } from "../redux/constants/userConstants";
import { useDispatch, useSelector } from "react-redux";
import ParticlesComponent from "../components/ParticlesComponent";
import Header from "../components/Header";
import { Center } from "@chakra-ui/react";

const ClockoutSuccess = ({ history }) => {
  const dispatch = useDispatch();

  const userClockout = useSelector((state) => state.userClockout);
  const { clockout } = userClockout;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: USER_CLOCKOUT_RESET });
      history.push("/");
    }, 5000);
  }, [history, dispatch]);
  return (
    <>
      <ParticlesComponent />
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          <div className={styles.center}>
            <Center>
              <h4>
                <b>{clockout}</b>
              </h4>
            </Center>

            <div className={`${styles.circle} ${styles.green}`}>
              <Center>
                <FiCheckCircle />
              </Center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockoutSuccess;
