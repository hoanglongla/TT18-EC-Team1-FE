import Modal from "react-bootstrap/Modal";
import { HOME_PAGE } from "../../settings/constant";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const MyModal = ({ show, onClose }) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      style={{ marginTop: "25vh" }}
    >
      {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header> */}
      <Modal.Body>Booking success !!!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Link to={HOME_PAGE}>
          <Button variant="primary">Okay</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
