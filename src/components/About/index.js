import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">About Me</h2>
              <p className="text-white-50">
                My name is Alex Kim and I am currently enrolled in the Georgia Tech Full-Stack Program. I have always been intrigued by the world of technology, and coding has provided me an outlet to express my creativity. Welcome.
                {/* <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a> */}
              </p>
            </div>
          </div>
          <img className="img-fluid"/>
        </div>
      </section>
    )
}

export default About;