import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                {/* Featured Project Row*/}
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Dinner and a Movie</h4>
                            <p className="text-black-50 mb-0">Got into a fight with your significant other recently about never being able to find a place to eat? Yeah, me too. I wish I had a significant other. Enter your zip code, and figuring out your next date will be a problem of the past.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">&#123;two&#125;rdle</h4>
                                    <p className="mb-0 text-white-50">Heard of that "Wordle" game? Me neither, but here's &#123;two&#125;rdle: a six-letter-seven-tries-edition for the Scrabble champion inside of you.</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Re-Reddit</h4>
                                    <p className="mb-0 text-white-50">Reddit, but better... Okay, fine. "Better different in a different, but better way."</p>
                                    <p className="mb-0 text-white-50">-Coach Phil Weston</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;