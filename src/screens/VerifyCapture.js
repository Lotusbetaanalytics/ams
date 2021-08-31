import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../redux/actions/userActions";
import Header from "../components/Header";
import { Button, Center, Box, useToast } from "@chakra-ui/react";

const VerifyScreen = ({ history }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, error, success } = userRegistration;

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const identity = localStorage.getItem("identity");
    const media1 = localStorage.getItem("media1");
    localStorage.setItem("media2", imageSrc);
    const media = localStorage.getItem("media2");
    const media2 = media.substring(23);
    dispatch(
      registration(firstName, lastName, identity, email, media1, media2)
    );
  }, [webcamRef, dispatch]);
  if (success) {
    history.push("/success");
  }
  if (error) {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          {loading ? (
            <div></div>
          ) : (
            <>
              <form onSubmit={capture}>
                <div className={`${styles.formContainer} text-center`}>
                  <Center>
                    <h3>Take another Picture</h3>
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
                      Enrol
                    </Button>
                  </Box>
                </Center>
              </form>
            </>
          )}
        </div>
      </div>
      <div className={styles.tab}>
        <Link to="/capture">
          <div className={styles.square}>Capture Screen</div>
        </Link>
        <Link to="/clockout">
          <div className={styles.square}>Clockout</div>
        </Link>
      </div>
    </>
  );
};

export default VerifyScreen;
