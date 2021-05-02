import React from "react";
import Container from "react-bootstrap/Container";

const Footer = props => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
      If you have any questions feel free to ask me and stay connected with me
        <br/>
      Designed & Developed By Sagor Bhadro
      <p>
          <small className="text-muted">
          facebook twitter linkedIn github
          </small>
        </p>
        <p>
          <small className="text-muted">
          Copyright © 2021
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
