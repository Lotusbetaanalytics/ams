import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Input, Button } from "@chakra-ui/react";

const Enrollment = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [identity, setIdentity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("identity", identity);
    history.push("/capture");
  };

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          <form onSubmit={submitHandler}>
            <div className={styles.formContainer}>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                style={{ padding: "2rem" }}
              />
            </div>
            <div className={styles.formContainer}>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                style={{ padding: "2rem" }}
              />
            </div>
            <div className={styles.formContainer}>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                style={{ padding: "2rem" }}
              />
            </div>
            <div className={styles.formContainer}>
              <Input
                type="password"
                className="form-control"
                onChange={(e) => setIdentity(e.target.value)}
                placeholder="Pin"
                style={{ padding: "2rem" }}
                maxLength={4}
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
                  Next
                </Button>
              </div>
            </div>
          </form>
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

export default Enrollment;
