import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Input, Button } from "@chakra-ui/react";

const Enrollment = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    history.push("/capture");
  };

  return (
    <>
      <div className={styles.app}>
        <Header styles={styles} />
        <div className={styles.form}>
          <div className={styles.formContainer}>
            <Link to="/">
              <Button colorScheme="teal">Go Back</Button>
            </Link>
          </div>
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
              <div className={`col-md-12`}>
                <Button
                  type="submit"
                  colorScheme="teal"
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
    </>
  );
};

export default Enrollment;
