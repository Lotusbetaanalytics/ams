import React, { useEffect } from "react";
import ParticlesComponent from "../components/ParticlesComponent";
import Header from "../components/Header";
import { Center } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { FiX } from "react-icons/fi";
import {
  USER_CLOCKIN_RESET,
  USER_REGISTER_RESET,
} from "../redux/constants/userConstants";
import { useDispatch, useSelector } from "react-redux";

const ClockinError = ({ history }) => {
  const dispatch = useDispatch();

  const userClockin = useSelector((state) => state.userClockin);
  const { error } = userClockin;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: USER_CLOCKIN_RESET });
      dispatch({ type: USER_REGISTER_RESET });
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
                <b>{error}</b>
              </h4>
            </Center>

            <div className={`${styles.circle} ${styles.error}`}>
              <Center>
                <FiX />
              </Center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockinError;
