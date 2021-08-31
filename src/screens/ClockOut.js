import React, { useState } from "react";
import Header from "../components/Header";
import {
  Input,
  Button,
  CircularProgress,
  Center,
  Alert,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { clockout } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const ClockOut = ({ history }) => {
  const [identity, setIdentity] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(clockout(identity));
  };
  const userClockout = useSelector((state) => state.userClockout);
  const { loading, error, success } = userClockout;

  if (success) {
    history.push("/clockoutsuccess");
  }

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        ) : (
          <div className={styles.form}>
            {error && <Alert colorScheme="red">{error}</Alert>}
            <form onSubmit={submitHandler}>
              <div className={styles.formContainer}>
                <Input
                  type="password"
                  className="form-control"
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="Pin"
                  value={identity}
                />
              </div>
              <div className={styles.formContainer}>
                <div className="col-md-3 float-end">
                  <Button type="submit" colorScheme="blue" value="Next">
                    ClockOut
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className={styles.tab}>
        <Link to="/enrol">
          <div className={styles.square}>Enrol</div>
        </Link>
        <Link to="/clockin">
          <div className={styles.square}>Clockin</div>
        </Link>
      </div>
    </>
  );
};

export default ClockOut;
