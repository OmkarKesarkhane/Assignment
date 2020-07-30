import React, { useState, useEffect } from "react";
import styles from "./AdmissionForm.module.css";
import { useHistory } from "react-router-dom";

const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [clas, setClas] = useState();
  const [year, setYear] = useState();
  const [percentage, setPercentage] = useState();
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let testName = /^[A-Za-z]+$/;
    let testClass = /^[A-Za-z0-9]+$/;
    if (
      name !== undefined &&
      lastname !== undefined &&
      clas !== undefined &&
      year !== undefined &&
      percentage !== undefined
    ) {
      if (!(testName.test(name) && name.length < 20)) {
        setValid(false);
      } else if (!(testName.test(lastname) && lastname.length < 20)) {
        setValid(false);
        setError("Name should contain only");
      } else if (!testClass.test(clas)) {
        setValid(false);
        setError("Name should contain only");
      } else if (year > 2017) {
        setValid(false);
        setError("Name should contain only");
        console.log("year");
      } else {
        setValid(true);
        setError("Name should contain only");
      }
    }
  }, [name, lastname, clas, percentage, year]);

  console.log(name.error);

  const submitForm = (e) => {
    e.preventDefault();
  };
  const studentBoard = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button onClick={() => studentBoard()} className={styles.btnStudent}>
          Student Results
        </button>
      </div>
      <form onSubmit={(e) => submitForm(e)} className={styles.form}>
        <label className={styles.head}>Admission Form</label>

        <label className={styles.label} for="name">
          Name
        </label>
        <input
          type="text"
          className={styles.input}
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <label className={styles.label} for="lastname">
          Last Name
        </label>
        <input
          type="text"
          className={styles.input}
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <label className={styles.label} for="class">
          Class
        </label>
        <input
          type="text"
          className={styles.input}
          id="class"
          onChange={(e) => setClas(e.target.value)}
          required
        ></input>
        <label className={styles.label} for="year">
          Year
        </label>
        <input
          type="number"
          className={styles.input}
          id="year"
          onChange={(e) => setYear(e.target.value)}
          required
        ></input>
        <label className={styles.label} for="per">
          Percentage
        </label>
        <input
          type="number"
          className={styles.input}
          id="for"
          onChange={(e) => setPercentage(e.target.value)}
          required
        ></input>
        <button type="submit" className={styles.btn} disabled={!valid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
