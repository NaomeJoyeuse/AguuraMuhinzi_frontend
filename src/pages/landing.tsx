

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './land.css';


const LandingPage: React.FC = () => {

    return (
        <div className="container">
            <div className="container-fluid hero-frame d-flex align-items-center justify-content-center">
                <img className="subtract2-icon" alt="" src="sub-rect.png" />
                <div className="row justify-content-center elements">
                    <div className="col- first-card">
                        <div className="card bg-transparent text-white">
                            <div className="card-body text-center">
                                {/* AGUURA & Muhinzi title */}
                                <div className="aguura-muhinzi-container d-flex justify-content-center align-items-center">
                                    <span className="aguura-muhinzi-container1">
                                        <p className="aguura">
                                            <span className="aguura1">{`AGUURA `}</span>
                                            <span>{`&`}</span>
                                        </p>
                                        <p className="aguura2 d-flex align-items-center">
                                            <span>Muhinzi</span>
                                            <img src="leaf-01.webp.png" className="leaf-01webp-icon" alt="Leaf Icon" />
                                        </p>
                                    </span>
                                </div>

                                {/* Headline and text */}
                                <div className="text-holder-frame mt-3 p-4">
                                    <div className="headline">
                                        <b className="get-all-farm">Get All Farm Produce</b>
                                    </div>
                                    <div className="fresh-fast-on-agromarket-wrapper">
                                        <b className="fresh-fast-on-container">
                                            <p className="aguura word word-1">Fresh</p>
                                            <p className="aguura word word-2">Fast</p>
                                            <p className="aguura word word-3">on AguuraMuhinzi</p>
                                        </b>
                                    </div>

                                    <div className="connecting-farmers-cooperativ mt-2">
                                        Connecting Farmers, Cooperatives, and Buyers for a Thriving Marketplace
                                    </div>

                                    {/* Learn More button */}
                                    <div className="mt-3">
                                        <button className="btn btn-outline-light state-layer">
                                            <b className="label-text">Learn More</b>
                                        </button>
                                    </div>
                                </div> {/* text-holder-frame */}
                            </div> {/* card-body */}
                        </div> {/* card */}
                    </div> {/* first-card */}
                </div> {/* row */}
            </div> {/* hero-frame */}

            <div className="container mt-5 background-image">
            <div className="row">
        {/* Farm Card */}
                <div className="col-md-4">
                <div className="card glass-card mb-4">
                    <div className="card-body">
                        <h5 className="card-title farm">FARM</h5>
                        <p className="card-text lorem-ipsum-dolor">
                            Discover local farms that prioritize quality and sustainability. Our featured farms grow a variety of crops, ensuring fresh, organic produce is always available. Join us in supporting local agriculture and enjoy farm-to-table freshness right from your community!
                        </p>
                        </div>
                        <div className="state2-layer">
                        <a href="#" className="btn btn-primary label-text2">
                            Read More
                        </a>
                        </div>
                
                </div>
            </div>

        {/* Cooperative Card */}
        <div className="col-md-4">
            <div className="card glass-card1 mb-4">
                <div className="card-body">
                    <h5 className="card-title farm1">COOPERATIVE</h5>
                    <p className="card-text lorem-ipsum-dolor">
                        Join a vibrant community of innovative farmers! Gain access to resources, market insights, and support from peers. Together, we can boost yields and ensure fair compensation for your hard work!
                    </p>
                    </div>
                    <div className="state2-layer">
                    <a href="#" className="btn btn-primary label-text2">
                        Read More
                    </a>
                    </div>
                    
            </div>
        </div>

        {/* Farmer Card */}
        <div className="col-md-4">
            <div className="card glass-card2 mb-4">
                <div className="card-body">
                    <h5 className="card-title farm2">FARMER</h5>
                    <p className="card-text lorem-ipsum-dolor">
                        Become part of a thriving cooperative! Unlock tools to streamline your operations, enhance collaboration, and access broader markets. Together, we can amplify our voices, share resources, and build a sustainable future for all in the agricultural community.
                    </p>
                    </div>
                    <div className="state2-layer">
                    <a href="#" className="btn btn-primary label-text2">
                        Read More
                    </a>
                    </div>
               
            </div>
        </div>
    </div>
</div>


<div className="container offer-frame">
   
    <div className="row justify-content-center">
        <div className="col-md-8 text-center title">
            <b className="what-we-offer-container">
                <span>
                    <span>What</span>
                    <span className="we-offer"> We Offer</span>
                </span>
            </b>
            <img className="title-child" alt="Line" src="Line 1 (1).svg" />
        </div>
        <div className="col-md-8 text-center">
            <p className="lorem-ipsum-dolor5">
                Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a. Tempus aliquet quisque quam sed. Egestas laoreet sapien mattis convallis feugiat sed. Id at nunc bibendum neque urna. Pellentesque integer volutpat non diam felis. Ut tellus urna elementum platea.
            </p>
        </div>
    </div>

    
    <div className="row offer-cards">
       
        <div className="col-lg-4 col-md-6 mb-2">
            <div className="card h-100 offer-card">
                <img className="card-img-top offer-card-child" src="Frame 16.png" alt="Buy Fresh Products" />
                <div className="card-body text-center">
                    <h5 className="card-title crop-farming">Buy Fresh Products</h5>
                    <p className="card-text lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</p>
                    <a href="#" className="btn btn-primary button-active">Check it Out</a>
                </div>
            </div>
        </div>

      
        <div className="col-lg-4 col-md-6 mb-1">
            <div className="card h-100 offer-card1">
                <img className="card-img-top offer-card-child" src= "Frame 16.png" alt="Sell your Harvest" />
                <div className="card-body text-center">
                    <h5 className="card-title crop-farming">Sell your Harvest</h5>
                    <p className="card-text lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</p>
                    <a href="#" className="btn btn-primary button-active">Check it Out</a>
                </div>
            </div>
        </div>

      
        <div className="col-lg-4 col-md-6 mb-2">
            <div className="card h-100 offer-card2">
                <img className="card-img-top offer-card-child" src= "Frame 16.png" alt="Crop Yield Forecast" />
                <div className="card-body text-center">
                    <h5 className="card-title crop-farming">Crop Yield Forecast</h5>
                    <p className="card-text lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</p>
                    <a href="#" className="btn btn-primary button-active">Check it Out</a>
                </div>
            </div>
        </div>
    </div>

  
    <img className="plant-2-icon" alt="Plant 1" src="plant 1.png" />
    <img className="plant-1-icon" alt="Plant 2" src="plant 2.png" />
</div>

													{/* contact us */}
                                                    
													<div className="join-news">
                                                    <div className="contact-info me-md-4 mb-4">
                                                                <h5>Contact Us</h5>
                                                                <p>Email: support@aguuramuhinzi.com</p>
                                                                <p>Phone: +250 123 456 789</p>
                                                            </div>
                                                            <b className="join-our-mailing">Join Our Mailing List</b>
														<div className="newsletter-form">
																<div className="name">
																	<div className="input">
																			<b className="enter-your-first">Enter your first name</b>
																	</div>
																	<div className="input">
																			<b className="enter-your-first">Enter your last name</b>
																	</div>
																</div>
																<div className="name">
																	<div className="input">
																			<b className="enter-your-first">{`Enter your email `}</b>
																	</div>
																	<div className="button-active3">
																			<div className="state2-layer">
																				<b className="crop-farming">Submit</b>
																			</div>
																	</div>
																</div>
														</div>
														<div className="be-the-first">Be the first to know about our products and services. We will deliver it into your mail box.</div>
														<img className="decor-orange-icon" alt="" src="farmer1.jpg" />
                                                        <div className="copyright">
                    <p>&copy; 2024 AGUURA & Muhinzi. All rights reserved.</p>
                </div>
													</div>

        </div> /* Main container */
    );
};

export default LandingPage;
