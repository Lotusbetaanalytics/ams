import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clockin } from "../redux/actions/userActions";
import Header from "../components/Header";
import { Input, Button, CircularProgress } from "@chakra-ui/react";

const EnterPin = ({ history }) => {
  const [identity, setIdentity] = useState("");
  const [status, setStatus] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const dispatch = useDispatch();
  const userClockin = useSelector((state) => state.userClockin);
  const { loading, error, success } = userClockin;

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (!latitude && !longitude) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      const media1 = localStorage.getItem("media");
      dispatch(clockin(identity, latitude, media1, longitude));
    }
  };

  if (success) {
    history.push("/success");
  }

  if (error) {
    history.push("/error");
  }

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          {status && <div className="alert alert-info">{status}</div>}
          {loading ? (
            <div>
              <CircularProgress isIndeterminate color="green.300" />
            </div>
          ) : (
            <form onSubmit={login}>
              <div className={styles.formContainer}>
                <Input
                  type="password"
                  className="form-control"
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="Pin"
                  value={identity}
                  readOnly
                />
              </div>
              <div className={styles.formContainer}>
                <div className={`col-md-12`}>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    value="Next"
                    isFullWidth
                    style={{ padding: "2rem" }}
                  >
                    Clockin
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className={styles.tab}>
        <Link to="/">
          <div className={styles.square}>Home</div>
        </Link>
        <Link to="/clockout">
          <div className={styles.square}>Clockout</div>
        </Link>
      </div>
    </>
  );
};

export default EnterPin;
