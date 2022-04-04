import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/generic-coder.jpeg';

function Homepage() {
    return (
        <div>
        <img
        className="card-img-top"
        src={img}
        alt="Card cap"
      />
        </div>

    )
}

export default Homepage;