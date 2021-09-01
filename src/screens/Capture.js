import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Header from "../components/Header";
import {
  Button,
  Center,
  Box,
  Alert,
  AlertIcon,
  Divider,
} from "@chakra-ui/react";

const CaptureScreen = ({ history }) => {
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const slice = imageSrc.substring(23);
    localStorage.setItem("media1", slice);
    history.push("/verify");
  }, [webcamRef, history]);

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          <div className={`${styles.formContainer}`}>
            <Link to="/enroll">
              <Button colorScheme="teal">Go Back</Button>
            </Link>
          </div>
          <form onSubmit={capture}>
            <div className={`${styles.formContainer}`}>
              <Center>
                <h3>Take a Picture</h3>
              </Center>
              <Center>
                <Alert status="warning">
                  <AlertIcon />
                  Make sure your face is visible
                </Alert>
                <Alert status="info">
                  <AlertIcon />
                  Take off your Face Mask
                </Alert>
                <Alert status="error">
                  <AlertIcon />
                  Do not take Picture in a dark place
                </Alert>
              </Center>
              <Divider />
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
                  colorScheme="teal"
                  value="Next"
                  isFullWidth
                >
                  Next
                </Button>
              </Box>
            </Center>
          </form>
        </div>
      </div>
    </>
  );
};

export default CaptureScreen;
