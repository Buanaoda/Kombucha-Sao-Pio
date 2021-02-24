/* JMJ */
import React from 'react';
import { Link } from 'react-router-dom';

const MiniAbout = () => (
  <div className="about-outer">
    <div>
      <div className="about-float">
        <img src="/images/kombucha-icon.jpg" />
      </div>
      <p>
        <b>Carlos Roberto</b>, Kombucha brewer profissional. Qualidade em primeiro lugar, Criador da
      <b> Kombucha São Pio</b> e ciclista extremo.
    </p>
      <div className="about-social-links">
        <ul className="list-inline">
          <li>
            <a href="https://www.facebook.com/carlos.robertodasilva.180" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/carlosrobertodasilva2001?igshid=8t1yg24ctwn8" target="_blank">
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



// <div className="about-float">
//         <img src="https://firebasestorage.googleapis.com/v0/b/kombucha-sao-pio.appspot.com/o/pictures%2Fabout-mini.jpg?alt=media&token=9844bd84-a6a5-43fc-8cbf-2fc219e19bd3" />
//       </div>