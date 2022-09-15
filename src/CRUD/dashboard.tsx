import React, { useState, useEffect } from "react";
import { IEmp } from "./interface";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SidebarData } from "./sidebardata";

const Empdashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  const [empdetails, setEmpdetails] = useState<IEmp[]>([]);
  const [emp, setEmp] = useState({
    name: "",
    desgn: "",
    exp: "",
    id: 0,
  });
  const [formModal, setFormModal] = useState<boolean>(false);
  const [editid, setEditid] = useState<number>(0);
  const [update, setUpdate] = useState<number>(0);

  useEffect(() => {
    axios
      .get("https://62fb40bbabd610251c040f32.mockapi.io/Employee")
      .then((response: any) => {
        console.log("response", response.data);
        setEmpdetails(response.data);
      });
  }, [update]);

  const handleClose = () => setFormModal(false);

  useEffect(() => {
    axios
      .get(`https://62fb40bbabd610251c040f32.mockapi.io/Employee/${editid}`)
      .then((response: any) => {
        console.log("response", response.data);
        setEmp(response.data);
      });
  }, [editid]);

  const ClickEdit = (num: number) => {
    setFormModal(true);
    setEditid(num);
  };

  const ClickUpdate = (num: number) => {
    console.log(editid, "func called");
    setEditid(num);

    setFormModal(false);

    axios
      .put(`https://62fb40bbabd610251c040f32.mockapi.io/Employee/` + editid, {
        name: emp.name,
        desgn: emp.desgn,
        exp: emp.exp,
      })

      .then((response) => {
        setUpdate(Math.random());
        console.log(response, "put");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setEmp(() => {
      return {
        ...emp,
        [name]: value,
      };
    });
  };

  const ClickDelete = (id: number) => {
    axios
      .delete(`https://62fb40bbabd610251c040f32.mockapi.io/Employee/${id}`)
      .then((response) => {
        console.log("response", response.data);
      });

    setEmpdetails(empdetails.filter((emp) => emp.id !== id));
  };

  return (
    <>
      <div className="header">
        <h1> Employee Dashboard</h1>
      </div>
      
      <div className="dashboard">
        <br />
        <br />
        <table className="tablebody" >
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Desgination</th>
              <th>Years of Experience </th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {empdetails.map((emp, key: number) => {
              const num: number = emp.id;

              return (
                <tr key={key}>
                  <td>{emp.name}</td>
                  <td>{emp.desgn}</td>
                  <td>{emp.exp}</td>
                  <td>
                    <button
                      onClick={() => {
                        ClickEdit(num);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        ClickDelete(num);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <>
        <Modal show={formModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <ModalTitle>Employee Info Update Form </ModalTitle>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Employee Name: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={emp.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Designation: </Form.Label>
              <Form.Control
                type="text"
                name="desgn"
                value={emp.desgn}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Experience: </Form.Label>
              <Form.Control
                type="text"
                name="exp"
                value={emp.exp}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                ClickUpdate(emp.id);
              }}
            >
              Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default Empdashboard;
