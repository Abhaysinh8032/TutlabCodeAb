import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Image1 from "../images/18734348_Young woman reading book in library interior.jpg";
import Image2 from "../images/girl-diary-woman-write-journal-student-studying-vector-28849006.jpg";
import Image3 from "../images/4-6.jpg";
import Image4 from "../images/29808798_7618695.jpg";
import Image5 from "../images/Picture1.jpg";
import Image6 from "../images/Picture2.jpg";
import Image7 from "../images/Picture3.jpg";
import Image8 from "../images/Picture3.jpg";
import Image9 from "../images/feature1.png";
import Image10 from "../images/feature2.png";
import Image11 from "../images/feature3.jpg";
import Image12 from "../images/feature4.png" ;
import Image13 from "../images/feature5.jpeg";
import Image14 from "../images/feature6.png";


function Home() {
  return (
    <div>
      <main>
      <section className="hero-section" id="section_1">
        <div className="discover">
          <h1 >Discover. Learn. Achieve</h1>
          <h6 >Platform for Education around the world</h6>
        </div>
      </section>
      <div className="container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={Image1} className="d-block w-100" alt="Image1" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Image2} className="d-block w-100" alt="Image2" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Image3} className="d-block w-100" alt="Image3" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={Image4} className="d-block w-100" alt="Image4" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      <h2 >Our Tutoring Programs</h2>
      <div className="courses">
        <div className="cardcourse">
          <h2>JUNIORS<br />4th & 5th</h2>
        </div>
        {/* Add other cardcourse elements similarly */}
        <div class="cardcourse">
            <h2>DEFENDERS <br/>
               6th to 8th </h2>
        </div>
        <div class="cardcourse">
            <h2>SENIORS <br/>   
              9th & 10th </h2>
        </div>
        <div class="cardcourse">
            <h2>ACHIEVERS <br/> 
              11th & 12th </h2>
        </div>
      </div>
      <div className="container">
        <div>
          <section className="aboutme">
            <h2 id="sub">Subjects and Grade Levels</h2>
            <h4 id="subs">
              TUTLABS offers comprehensive tutoring services across a wide range of subjects and grade levels. Whether your child needs assistance in mathematics, science, language arts, or exam preparation, we have a dedicated team ready to help.
            </h4>
            
          </section>
        </div>
        </div>

            <section className="container" id="section_2">
                        <h2>Pricing</h2>
                        <div className="card mb-3 p-lg-4" id="pricing">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={Image5} className="img-fluid rounded-start" alt="Image4"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">JUNIORS</h4>
                                  <p className="card-text">Best Tutor for your child from <span> ₹ 3899</span>ONLY</p>
                                  <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" className="enroll">Enroll Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-3 p-lg-4" id="pricing">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={Image6} className="img-fluid rounded-start" alt="Image5"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">DEFENDERS</h4>
                                  <p className="card-text">Best Tutor for your child for <span>₹ 4799</span>ONLY</p>
                                  <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" className="enroll">Enroll Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-3 p-lg-4" id="pricing">
                            <div className="row g-0">
                              <div className="col-md-4">
                              <img src={Image7} className="img-fluid rounded-start" alt="Image6"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">SENIORS</h4>
                                  <p className="card-text">Best Tutor for your child for <span>₹ 5899</span>ONLY</p>
                                  <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" className="enroll">Enroll Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-3 p-lg-4" id="pricing">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={Image8} className="img-fluid rounded-start" alt="Image7"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h4 className="card-title">ACHIEVERS</h4>
                                  <p className="card-text">Best Tutor for your child for <span>₹ 6999</span>ONLY</p>
                                  <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" className="enroll">Enroll Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                    </section>

                       
                                


            <section className="timeline-section section-padding" id="section_3">
        

                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h2 >How does it work?</h2>
                        </div>

                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="timeline-container">
                                <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                    <div className="list-progress">
                                        <div className="inner"></div>
                                    </div>

                                    <li>
                                        <h4>Choose your class</h4>

                                        <p>Choose class between 4th to 12th </p>

                                        <div className="icon-holder">
                                          <i className="bi-search"></i>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <h4>Choose Subjects according to your choice</h4>

                                        <p>You can see the subjects list from our subjects menu</p>

                                        <div className="icon-holder">
                                          <i className="bi-bookmark"></i>
                                        </div>
                                    </li>

                                    <li>
                                        <h4>Best Tutor will be provided</h4>

                                        <p>Our Best Tutors help you excellence in your studies.</p>

                                        <div className="icon-holder">
                                          <i className="bi-book"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


          
            <section className="tutlabs-advantages bj-section" id="section_4">
                                        <div className="container">
                                            <h2 className="section-header" data-aos="fade-up">Get the TUTLABS'S
                                                advantage</h2>
                                            <div className="row justify-content-between section-content bj-adv-list ">
                                                <div className="col-sm-12 col-md-4 bj-adv-item"  data-aos="fade-up">
                                                    <h3
                                                        id="ad">
                                                        Flexible Scheduling</h3>
                                                    <img className="lazyload" src={Image9} loading="lazy" alt="image9"
                                                        />
                                                    <p className="ads">
                                                        Promote flexibility in scheduling to accommodate the student's
                                                        availability, making it convenient for busy families.</p>
                                                </div>
                                                <div className="col-sm-12 col-md-4 " data-aos="fade-up">
                                                    <h3
                                                       id="ad">
                                                        Personalized Learning</h3>
                                                    <img className="lazyload" src={Image10} loading="lazy" alt="image10"
                                                      />
                                                    <p className="ads">
                                                        Emphasize the ability to tailor lessons to the individual
                                                        student's needs and learning style.</p>
                                                </div>
                                                <div className="col-sm-12 col-md-4 bj-adv-item" data-aos="fade-up">
                                                    <h3
                                                        id="ad">
                                                        One-on-One Attention</h3>
                                                    <img className="lazyload" src={Image11} loading="lazy" alt="image11"
                                                        />
                                                    <p
                                                      className="ads">
                                                        Emphasize the advantage of providing undivided attention to the
                                                        student, enabling better understanding and progress.</p>
                                                </div>
                                                
                                                <div className="col-sm-12 col-md-4 bj-adv-item" data-aos="fade-up">
                                                    <h3
                                                       id="ad">
                                                        Interactive Teaching</h3>
                                                    <img className="lazyload" src={Image12} loading="lazy" alt="image12"
                                                       />
                                                    <p
                                                       className="ads">
                                                        Highlight engaging and interactive teaching methods to keep the
                                                        student interested and motivated to learn.</p>
                                                </div>
                                                <div className="col-sm-12 col-md-4 bj-adv-item" data-aos="fade-up">
                                                    <h3
                                                        id="ad">
                                                        Highly Qualified Tutors</h3>
                                                    <img className="lazyload" src={Image13} loading="lazy" alt="image13"
                                                        />
                                                    <p
                                                        className="ads">
                                                        Tutors having Advanced Academic Background, Extensive Teaching Experience and Expertise in Specific Subjects.</p>
                                                </div>
                                                <div className="col-sm-12 col-md-4 bj-adv-item" data-aos="fade-up">
                                                    <h3
                                                        id="ad">
                                                        AIR India Ranking</h3>
                                                    <img class="lazyload" src={Image14} loading="lazy" alt="image14" 
                                                        />
                                                    <p
                                                       className="ads">
                                                        Excellence in Education, Top-tier Performance & Consistent Progress.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="container">
        <div>
        <h6 className="card-title" style={{ color: 'coral' }}>
          <a href="termsConditions.html#terms">Terms & Condition</a>
        </h6>
        <p className="card-text" style={{ color: 'green' }}>Last updated: 28th Nov, 2023</p>
        <p>
          These Terms and Conditions outline the rules and regulations for the use of tutlabs.in's website and services. By accessing this website and using our services, you accept these terms and conditions. If you disagree with any part of these terms, please Contact us at <b>info@tutlabs.in.</b>
        </p>
        <a href="termsConditions.html#terms">Read More</a>

        <h6 className="card-title" style={{ color: 'coral' }}>
          <a href="termsConditions.html#refund">Refund Policy</a>
        </h6>
        <p className="card-text" style={{ color: 'green' }}>Last updated: 28th Nov, 2023</p>
        <p>
          Thank you for choosing tutlabs.in for your educational needs. We strive to provide high-quality services and resources to support your learning journey. If you have any questions regarding our Refund Policy, please don't hesitate to reach out to us.
        </p>
        <p>
          tutlabs.in provides educational services and materials with a commitment to quality and customer satisfaction. To maintain our standards and ensure fairness to all users, certain situations are considered non-refundable. By using our services, you acknowledge and agree to the following non-refundable conditions:
        </p>
        <p>
          By using our services and accessing our materials, you agree and acknowledge the non-refundable conditions outlined above.
        </p>
        <a href="termsConditions.html#refund">Read More</a>
        </div>
        </div>
                                    </main>
       
    </div>
  );
};

export default Home;
