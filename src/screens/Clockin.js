import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Input, Button, CircularProgress, Center, Box } from "@chakra-ui/react";
import Webcam from "react-webcam";
import { useSelector, useDispatch } from "react-redux";
import { clockin } from "../redux/actions/userActions";

const Clockin = ({ history }) => {
  const [identity, setIdentity] = useState("");
  const [status, setStatus] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [media1, setMedia1] = useState("");
  const [pix, setPix] = useState("");
  const [pixStatus, setPixStatus] = useState(false);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setMedia1(imageSrc.substring(23));
    setPixStatus(true);
    setPix(imageSrc);
  }, [webcamRef]);

  const dispatch = useDispatch();
  const userClockin = useSelector((state) => state.userClockin);
  const { loading, error, success } = userClockin;

  const login = (e) => {
    e.preventDefault();
    if (!latitude && !longitude) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      dispatch(clockin(identity, latitude, media1, longitude));
    }
  };

  if (success) {
    history.push("/success");
  }

  if (error) {
    history.push("/error");
  }

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

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        {status && <div className="alert alert-info">{status}</div>}
        <div className={styles.form}>
          {!pixStatus && (
            <form onSubmit={capture}>
              <div className={`${styles.formContainer}`}>
                <Center>
                  <h3>Take a Picture</h3>
                </Center>

                <Center>
                  <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    videoConstraints={videoConstraints}
                  />
                </Center>
              </div>
              <Center>
                <Box style={{ width: "50%" }}>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    value="Next"
                    isFullWidth
                  >
                    Take Picture
                  </Button>
                </Box>
              </Center>
            </form>
          )}
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="green.300" />
            </Center>
          ) : (
            pixStatus && (
              <>
                <Center>
                  <img src={pix} alt="User" width="300" height="300" />
                </Center>

                <form onSubmit={login}>
                  <div className={styles.formContainer}>
                    <Input
                      type="password"
                      className="form-control"
                      onChange={(e) => setIdentity(e.target.value)}
                      placeholder="Enter your Pin"
                      value={identity}
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
              </>
            )
          )}
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

export default Clockin;
