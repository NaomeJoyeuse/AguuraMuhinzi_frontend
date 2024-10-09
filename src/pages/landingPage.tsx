import { FunctionComponent } from 'react';
import './landingPage.css';
import './choose.css';
import vegan from '../images/logo-6.png';
import auca from '../images/auca 1.png';
import food from '../images/logo-3.png';
import our_logo from '../images/logo-muhinzi.png';
import mastercard from '../images/mastercard_logo-removebg-preview 1.png';
import phone from '../images/image-removebg-preview (2) 1.png';
import pc from '../images/pc_img-removebg-preview 1.png';
import organic_img from '../images/organic.png';
import tomato_img from '../images/tomato.jpg';
import grain_img from '../images/grain.jpg';
import agri_png from '../images/agri_logo.png';
// import lemon_img from '../images/yellow.png';
import farmer from '../images/farmer1.jpg';
import cloud_img from '../images/__before.png';
import organic_png from '../images/23.png.png';
import veg_png from '../images/22.png.png';
import plant1 from '../images/plantx.png';
import plant2 from '../images/plant 2.png';
import frme16 from '../images/Frame 16.png';
import Line from '../images/Line 1 (1).svg';
import React from 'react';

const LandingPage:FunctionComponent = () => {
  	return (
    		<div className="landing-page">
      			<div className="offer-frame">
        				<div className="title">
          					<b className="what-we-offer-container">
            						<span>
              							<span>What</span>
              							<span className="we-offer"> We Offer</span>
            						</span>
          					</b>
          					<img className="title-child" alt="" src={Line} />
        				</div>
        				<div className="lorem-ipsum-dolor">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a. Tempus aliquet quisque quam sed. Egestas laoreet sapien mattis convallis feugiat sed. Id at nunc bibendum neque urna. Pellentesque integer volutpat non diam felis. Ut tellus urna elementum platea.</div>
        				<div className="offer-card">
          					<img className="offer-card-child" alt="" src={frme16} />
          					<b className="crop-farming">Buy Fresh Products</b>
          					<div className="lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</div>
          					<div className="button-active">
            						<div className="state2-layer">
              							<b className="crop-farming">Check it Out</b>
            						</div>
          					</div>
        				</div>
        				<div className="offer-card1">
          					<img className="offer-card-child" alt="" src={frme16} />
          					<b className="crop-farming">Sell your Harvest</b>
          					<div className="lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</div>
          					<div className="button-active">
            						<div className="state2-layer">
              							<b className="crop-farming">Check it Out</b>
            						</div>
          					</div>
        				</div>
        				<div className="offer-card-wrapper">
          					<div className="offer-card2">
            						<img className="offer-card-child" alt="" src={frme16} />
            						<b className="crop-farming">Crop Yield Forecast</b>
            						<div className="lorem-ipsum-dolor1">Lorem ipsum dolor sit amet consectetur. Id augue a in ornare vulputate amet a.</div>
            						<div className="button-active">
              							<div className="state2-layer">
                								<b className="crop-farming">Check it Out</b>
              							</div>
            						</div>
          					</div>
        				</div>
        				<img className="plant-2-icon" alt="" src={plant1} />
        				<img className="plant-1-icon" alt="" src={plant2} />
      			</div>

      			<div className="choose-us-frame">
    <div className="rectangle_div">
        <div className="rectangle-div2"> 
			<div className="rectangle-div3">
            <div className="title1">
                <div className="title2">
                    <b className="crop-farming">
                        <span>Why</span>
                        <span className="span">{` `}</span>
                        <span className="choose-us">Choose Us?</span>
                    </b>
                    <div className="title-item" />
                </div>
				</div>
            </div>
            <img className="subtract-icon" alt="" src="Subtract.png" />
            <div className="choose-us-card">
                <div className="plant-icon">
                    <img className="plant-icon1" alt="" src="plant.svg" />
                </div>
                <b className="crop-farming3">Data-Driven Decisions:</b>
                <div className="tempus-aliquet-quisque">
                    Leverage real-time data and analytics to maximize productivity helping you plan for success in every season.
                </div>
            </div>
            <div className="choose-us-card1">
                <div className="plant-icon">
                    <img className="plant-icon1" alt="" src="plant.svg" />
                </div>
                <b className="crop-farming4">Trusted Pricing Standards</b>
                <div className="tempus-aliquet-quisque">
                    Our prices are transparently set by NAEB, ensuring that you receive fair and competitive rates
                </div>
            </div>
            <div className="choose-us-card2">
                <div className="plant-icon4">
                    <img className="plant-icon1" alt="" src="plant.svg" />
                </div>
                <b className="crop-farming5">Empowering Farmers and Cooperatives</b>
                <div className="tempus-aliquet-quisque">
                    We are dedicated to supporting local farmers and cooperatives by providing access to markets and resources
                </div>
            </div>
        </div>
    </div>
</div>
                								<div className="join-news">
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
                        												<div className="state-layer">
                          													<b className="crop-farming">Submit</b>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="be-the-first">Be the first to know about our products and services. We will deliver it into your mail box.</div>
                  									<img className="decor-orange-icon" alt="" src={farmer} />
                								</div>
                								<div className="footer-fram">
                  									<img className="image-14-icon" alt="" src="logo-muhinzi.png" />
                  									<div className="footer-quick-link">
                    										<b className="crop-farming">Quick Links</b>
                    										<div className="footer-menu">
                      											<div className="home">
                        												<b className="service">Home</b>
                      											</div>
                      											<div className="farm">
                        												<b className="crop-farming">About Us</b>
                      											</div>
                      											<div className="market">
                        												<b className="service">Service</b>
                      											</div>
                      											<b className="contact">Contact</b>
                      											<div className="home2" />
                      											<div className="medicine">
                        												<b className="service">Medicine</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="footer-contact">
                    										<b className="crop-farming">Contacts</b>
                    										<div className="contact1">
                      											<div className="crop-farming">
                        												<b>{`Address: `}</b>
                        												<span className="plot-5">Plot 5,  kigali, Rwanda</span>
                      											</div>
                      											<div className="crop-farming">
                        												<b>{`Phone Numbers: `}</b>
                        												<span className="plot-5">   0123456789</span>
                      											</div>
                      											<div className="crop-farming">
                        												<b>{`Email: `}</b>
                        												<span className="helloaguuramuhinzicom">hello@aguuramuhinzi.com</span>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="before-parent">
                  									<img className="before-icon" alt="" src={cloud_img} />
                  									<div className="after" />
                  									<div className="divcontainer">
                    										<div className="heading-2-container">
                      											<span className="heading-2-container1">
                        												<p className="healthy-life-with">Healthy life with</p>
                        												<p className="healthy-life-with">fresh products</p>
                      											</span>
                    										</div>
                    										<div className="divservice-style-two-carousel">
                      											<img className="group-1-4-2jpg" alt="" src={grain_img} />
                      											<div className="group-1-4">
                        												<img className="png-icon" alt="" src={agri_png} />
                      											</div>
                      											<div className="group-1-41">
                        												<div className="after1" />
                        												<div className="heading-4">Agriculture</div>
                        												<div className="spanh2d-3b12b41c">
                          													<div className="products">Products</div>
                        												</div>
                      											</div>
                      											<img className="group-2-4-3jpg" alt="" src={tomato_img} />
                      											<div className="group-2-4">
                        												<img className="png-icon" alt="" src={veg_png} />
                      											</div>
                      											<div className="group-2-41">
                        												<div className="after1" />
                        												<div className="heading-41">Fresh</div>
                        												<div className="spanh2d-9f3fdc5d">
                          													<div className="vegetable">Vegetable</div>
                        												</div>
                      											</div>
                      											<img className="group-3-4-4jpg" alt="" src={organic_img} />
                      											<div className="group-3-4">
                        												<img className="png-icon" alt="" src={organic_png} />
                      											</div>
                      											<div className="group-3-41">
                        												<div className="after1" />
                        												<div className="heading-42">Organic</div>
                        												<div className="spanh2d-3b12b41c">
                          													<div className="products">Products</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="partners-frame">
                  									<img className="blob-shape-icon" alt="" src="Blob Shape.svg" />
                  									<img className="blob-shape-icon1" alt="" src="Blob Shape.svg" />
                  									<div className="powered-by-parent">
                    										<div className="powered-by">Powered By</div>
                    										<div className="agri-tech">AGRI TECH</div>
                  									</div>
                								</div>
                								<div className="image-removebg-preview-2-1-parent">
                  									<img className="image-removebg-preview-2-1" alt="" src={phone} />
                  									<img className="pc-img-removebg-preview-1-icon" alt="" src={pc} />
                								</div>
                								<div className="logo-6-parent">
                  									<img className="logo-6-icon" alt="" src={food} />
                  									<img className="mastercard-logo-removebg-previ-icon" alt="" src={mastercard}/>
                  									<img className="logo-6-icon" alt="" src={vegan} />
                  									<img className="auca-1-icon" alt="" src={auca} />
                								</div>
                								<div className="navvbar">
                  									<img className="image-14-icon" alt="" src={our_logo} />
                  									<div className="navbar">
                    										<div className="home-wrapper">
                      											<div className="login">
                        												<span>Home</span>
                        												<span className="span2">{` `}</span>
                      											</div>
                    										</div>
                    										<div className="home-wrapper">
                      											<div className="About">About us</div>
                    										</div>
                    										<div className="home-wrapper">
                      											<div className="services">Services</div>
                    										</div>
                    										<div className="home-wrapper">
                      											<div className="login">Contact</div>
                    										</div>
                    										<div className="login-wrapper">
                      											<div className="login">Login</div>
                    										</div>
                  									</div>
                								</div>
                								{/* <div className="hero-frame">
                  									<img className="subtract-icon1" alt="" src="" />
                  									<div className="text-holder-frame">
                    										<div className="headline">
                      											<b className="get-all-farm">Get All Farm Produce</b>
                      											<div className="fresh-fast-on-agromarket-wrapper">
                        												<b className="fresh-fast-on-container">
                          													<span className="heading-2-container1">
                            														<p className="healthy-life-with">Fresh</p>
                            														<p className="healthy-life-with">Fast</p>
                            														<p className="healthy-life-with">on AguuraMuhinzi</p>
                          													</span>
                        												</b>
                      											</div>
                    										</div>
                    										<div className="connecting-farmers-cooperativ"> Connecting Farmers, Cooperatives, and Buyers for a Thriving Marketplace</div>
                    										<div className="state-layer4">
                      											<b className="crop-farming">Learn More</b>
                    										</div>
                  									</div>

													
                  									<div className="elements">
                    										<div className="aguura-muhinzi-container">
                      											<span className="heading-2-container1">
                        												<p className="healthy-life-with">
                          													<span className="span">{`AGUURA `}</span>
                          													<span>{`&`}</span>
                        												</p>
                        												<p className="healthy-life-with">Muhinzi</p>
                      											</span>
                    										</div>
                    										<img className="leaf-01webp-icon" alt="" src="leaf-01.webp.png" />
                  									</div>
                								</div> */}

<div className="hero-frame">
      			<img className="subtract2-icon" alt="" src="sub-rect.png" />
      			<div className="elements">
        				<div className="group-parent">
          					<div className="aguura-muhinzi-parent">
            						<div className="aguura-muhinzi-container">
              							<span className="aguura-muhinzi-container1">
                								<p className="aguura">
                  									<span className="aguura1">{`AGUURA `}</span>
                  									<span>{`&`}</span>
                								</p>
                								<p className="aguura">Muhinzi</p>
              							</span>
            						</div>
            						<img className="leaf-01webp-icon" alt="" src="leaf-01.webp.png" />
          					</div>
          					<div className="text-holder-frame">
            						<div className="headline">
              							<b className="get-all-farm">Get All Farm Produce</b>
              							<div className="fresh-fast-on-agromarket-wrapper">
                								<b className="fresh-fast-on-container">
                  									<span className="aguura-muhinzi-container1">
                    										<p className="aguura">Fresh</p>
                    										<p className="aguura">Fast</p>
                    										<p className="aguura">on AgroMarket</p>
                  									</span>
                								</b>
              							</div>
            						</div>
            						<div className="connecting-farmers-cooperativ"> Connecting Farmers, Cooperatives, and Buyers for a Thriving Marketplace</div>
            						<div className="state-layer">
              							<b className="label-text">Learn More</b>
            						</div>
          					</div>
        				</div>
						</div>
				</div>

                								<div className="glass-card-frame">
                  									<div className="glass-card">
                    										<b className="farm1">FARM</b>
                    										<b className="lorem-ipsum-dolor4">Discover local farms that prioritize quality and sustainability. Our featured farms grow a variety of crops, ensuring fresh, organic produce is always available. Join us in supporting local agriculture and enjoy farm-to-table freshness right from your community!</b>
                    										<div className="button-active4">
                      											<div className="state-layer">
                        												<b className="crop-farming">Read More</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="glass-card1">
                    										<b className="farm2">COOPERATIVE</b>
                    										<b className="lorem-ipsum-dolor4">Join a vibrant community of innovative farmers! Gain access to resources, market insights, and support from peers. Together, we can boost yields and ensure fair compensation for your hard work!</b>
                    										<div className="button-active4">
                      											<div className="state-layer">
                        												<b className="crop-farming">Read More</b>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="glass-card2">
                    										<b className="farm3">FARMER</b>
                    										<b className="lorem-ipsum-dolor4">Become part of a thriving cooperative! Unlock tools to streamline your operations, enhance collaboration, and access broader markets. Together, we can amplify our voices, share resources, and build a sustainable future for all in the agricultural community</b>
                    										<div className="button-active4">
                      											<div className="state-layer">
                        												<b className="crop-farming">Read More</b>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								</div>);
              							};
              							
              							export default LandingPage;
              							
              							