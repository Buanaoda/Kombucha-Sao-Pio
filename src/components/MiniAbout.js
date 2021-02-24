/* JMJ */
import React from 'react';
import { Link } from 'react-router-dom';

const MiniAbout = () => (
  <div className="about-outer">
    <div>
      <div className="about-float">
        <Link to="/about">
          <img src="/images/about-mini.jpg" />
        </Link>
      </div>
      <p>
        <b>Carlos Roberto</b>, Kombucha brewer profissional. Qualidade em primeiro lugar, Criador da
      <b> Kombucha São Pio</b> e ciclista extremo.
    </p>
      <div className="about-social-links">
        <ul className="list-inline">
          <li>
            <a href="https://www.linkedin.com/in/carlos-roberto-da-silva-8a566313/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carlos-roberto-da-silva-8a566313/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default MiniAbout;