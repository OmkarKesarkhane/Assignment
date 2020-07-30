import React, { useEffect, useState } from "react";
import styles from "./StudentResultBoard.module.css";
import api from "../../Api.json";
import { useHistory } from "react-router-dom";

const StudentResultBoard = () => {
  const [data, setData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setData(api);
  }, []);

  let sorted = data.sort((a, b) => a.name.localeCompare(b.name));

  sorted.forEach((student) => {
    if (
      parseInt(student.marks.Maths) > 20 &&
      parseInt(student.marks.Science) > 20 &&
      parseInt(student.marks.English) > 20
    ) {
      student.status = "Pass";
      student.totalMarks =
        parseInt(student.marks.Maths) +
        parseInt(student.marks.Science) +
        parseInt(student.marks.English);
    } else {
      student.status = "Fail";
      student.totalMarks =
        parseInt(student.marks.Maths) +
        parseInt(student.marks.Science) +
        parseInt(student.marks.English);
    }
  });

  const addmissionForm = () => {
    history.push("/addmissionform");
  };
  console.log(sorted);
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button onClick={() => addmissionForm()} className={styles.btn}>
          Admission Form
        </button>
      </div>
      <div>
        <table className={styles.table}>
          <caption className={styles.title}>Student Result Board</caption>
          <thead>
            <tr className={styles.head}>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Total Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((student, index) => (
              <tr
                className={styles.row}
                style={
                  student.status === "Fail"
                    ? { color: "red" }
                    : { color: "green" }
                }
                key={index}
              >
                <td className={styles.name}>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.totalMarks}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentResultBoard;
