import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import img from '../../public/Screenshot_2025-04-11_193306-removebg-preview.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
                  AOS.init({
                    duration: 1000, // animation duration in ms
                    once: true,     // whether animation should happen only once
                  });
                }, []);
    return (
        <>
            <footer class="footer-section" >
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30" data-aos='fade-up' >
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30" data-aos='fade-up' data-aos-delay={300}>
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30" data-aos='fade-up' data-aos-delay={300}>
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50" data-aos='fade-up' data-aos-delay={300}>
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src={img} style={{
                                            height: '80px',
                                            objectFit: 'contain'
                                        }} class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30" data-aos='fade-up' data-aos-delay={300}>
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link className='footer_link' >Home</Link></li>
                                        <li><Link className='footer_link' >about</Link></li>
                                        <li><Link className='footer_link' >courses</Link></li>
                                        <li><Link className='footer_link' >Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50" data-aos='fade-up' data-aos-delay={300}>
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left" >
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2025, All Right Reserved by Develosoft</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right" > 
                                <div class="footer-menu">
                                    <ul>
                                        <li><Link>Home</Link></li>
                                        <li><Link>About</Link></li>
                                        <li><Link>Courses</Link></li>

                                        <li><Link>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
