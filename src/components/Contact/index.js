import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa-brands fa-github text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Github</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">/hak9292</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa-brands fa-linkedin text-primary mb-2" />
                  <h4 className="text-uppercase m-0">LinkedIn</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">/heehoonkim<a href="#!"></a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa-brands fa-stack-overflow text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Stack Overflow</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">/hhak92</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact;