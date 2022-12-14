import React, { Component } from "react";
import styles from "../../styles/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "#EFC81A" }}>
        <div className="row">
          <div className="col-sm-12 mt-5">
            <h1 className="text-center">Eat, Cook, Repeat</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-12">
            <h6 className="text-center" style={{ color: "#707070" }}>
              Share your best recipe by uploading here !
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1 offset-lg-4 mt-5 col-sm-1">
            <h6 style={{ color: "#707070" }} className="text-product">
              Product
            </h6>
          </div>
          <div className="col-lg-1  mt-5 col-sm-1 offset-lg-0">
            <h6 style={{ color: "#707070" }} className="text-company">
              Company
            </h6>
          </div>
          <div className="col-lg-1  mt-5 col-sm-1 offset-lg-0">
            <h6 style={{ color: "#707070" }} className="text-learn">
              Learn More
            </h6>
          </div>
          <div className="col-lg-1  mt-5 col-sm-8  offset-lg-0">
            <h6 style={{ color: "#707070" }} className="text-get">
              Get In Touch
            </h6>
          </div>
          {/* <div className="col-lg-1 offset-2 mt-5">
            <h6>© Arcademy</h6>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Footer;
