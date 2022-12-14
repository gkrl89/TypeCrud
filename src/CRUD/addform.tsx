import React, { useState, useEffect } from "react";
import { IEmp } from "./interface";
import "./empdetails.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const EmpForm = () => {
  const [sidebar, setSidebar] = useState(true);

  const [emp, setEmp] = useState({
    name: "",
    desgn: "",
    exp: 0,
    id: 0,
  });

  const [empdetails, setEmpdetails] = useState<IEmp[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setEmp(() => {
      return {
        ...emp,
        [name]: value,
      };
    });
  };

  const ClickAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const newEmp = {
      name: emp.name,
      desgn: emp.desgn,
      exp: emp.exp,
      id: emp.id + 1,
    };
    setEmpdetails([...empdetails, newEmp]);

    axios
      .post("https://62fb40bbabd610251c040f32.mockapi.io/Employee", emp)
      .then((response: any) => {
        console.log(response, "2");
      })
      .catch((err: number | string) => {
        console.log(err);
      });

    setEmp({
      name: "",
      desgn: "",
      exp: 0,
      id: emp.id,
    });
  };

  return (
    <>
      <div className="body">
        <div className="header">
          <h1>Add Employee</h1>
        </div>{" "}
   
        <div className="form">
          <label> Enter Name : </label>
          <input
            type="text"
            name="name"
            value={emp.name}
            placeholder="Please enter name ..... "
            onChange={handleChange}
          />
          <label> Enter Designation :</label>
          <input
            type="text"
            name="desgn"
            value={emp.desgn}
            placeholder="Ex:Clerk..... "
            onChange={handleChange}
          />
          <label> Enter Experience :</label>
          <input
            type="text"
            name="exp"
            value={emp.exp}
            placeholder="Please enter years of experience ..... "
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={(e) => {
              ClickAdd(e);
            }}
          >
            Add Employee
          </button>
        </div>
      </div>
    </>
  );
};

export default EmpForm;
