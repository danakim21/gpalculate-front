import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <Link to="/">gpalculate</Link>
      <a
        href="https://github.com/danakim21/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by danakim21
      </a>
    </footer>
  );
}

export default Footer;
