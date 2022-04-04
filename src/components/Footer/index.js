import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/generic-coder.jpeg';

function Footer() {
  return (
    <div>
      <div class="footer-copyright text-center py-3">
        <a href="https://github.com/hak9292/">
          <i class="fa-brands fa-github">
          </i> Github
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/heehoonkim/">
          <i class="fa-brands fa-linkedin">
          </i> LinkedIn
        </a>
      </div>
    </div>

  )
}

export default Footer;