import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounceOut } from "react-animations";

import "./footer.styles.scss";

const Bounce = styled.div`
  animation: 20s ${keyframes`${bounceOut}`} infinite;
`;

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Note</h5>
              <Bounce>
                <p
                  className="grey-text text-lighten-4"
                  style={{
                    background: "lightblue",
                    padding: "3px",
                    border: "3px solid pink",
                    borderRadius: "8px"
                  }}
                >
                  Thank you for shopping with us.
                </p>
              </Bounce>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/hong-yi-lei-98180584/"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/henrylei80"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://movie-rater-fullstack-web.firebaseapp.com/auth"
                  >
                    Movies rating Website
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://amazingemail.herokuapp.com"
                  >
                    Email Marketing Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">
              MIT License
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
