import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const { title, img, live, github } = value;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col md={4}>
        <Card
          className="card shadow-lg p-3 mb-5 bg-white rounded"
          onClick={handleShow}
        >
          <Card.Body>
            <Card.Title as="h6">{title || <Skeleton />} </Card.Title>
            <div className="thumb-con">
              <img src={img} className="thumb" />
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Modal
        dialogClassName="modal-90w"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>My Works</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} className="thumb"></img>
          <br/>
          <br/>
          <a
            className="btn btn-outline-dark btn-lg"
            href={live}
            target="_blank"
            rel="noreferrer noopener"
            role="button"
            aria-label="live"
          >
            Live
          </a>
          
          <a style={{ widt: "100%", marginBottom: "50"}}
            className="btn btn-outline-dark btn-lg md-6"
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            role="button"
            aria-label="github"
            
          >
            Github
          </a>

          {/* <Button variant="secondary" onClick={handleClose}>
            url: "https://github.com/SagorBhadro" 
          </Button> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
