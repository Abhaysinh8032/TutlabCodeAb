import React from 'react';
import CounterComponent from '../components/Counter.jsx';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../js/darkmode.js';
import video from '../video/video.mp4'
import Image33 from '../images/faq_graphic.jpg';
import Image34 from '../images/a.png';
import Image35 from '../images/b.png';
import Image36 from '../images/c.png';
import Image37 from '../images/d.png';
import Image38 from '../images/e.png';
import Image39 from '../images/f.png';



const AboutUs = () => {
  return (
    <div>
      <main>
        {/* Video Section */}
        <div className="video-container">
          <video src={video} autoPlay muted loop className="about-tutlab-madewith-clipchamp1"></video>
        </div>

        {/* FAQ Section */}
        <section className="faq-section section-padding" id="section_4">
          <div className="container">
            <div className="row">
    
    <div className="col-lg-6 col-12">
        <h2 className="mb-4">Frequently Asked Questions</h2>
    </div>

    <div className="clearfix"></div>

    <div className="col-lg-5 col-12">
        <img src={Image33} className="img-fluid" alt="FAQs"/>
    </div>

    <div className="col-lg-6 col-12 m-auto">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='aaa'>
                    What is Tutlabs?
                    </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id='bbb'>
                    <p>Tutlabs is a perfect destination for student who want to study . We provide you India's best Tutors for your child</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item" id='ac'>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id='aaa'>
                    How we will find tutor?
                </button>
                </h2>

                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id='bbb'>
                    <p>We will provide best tutor according to your capabilities and it will reshape your future..</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id='aaa'>
                    Does it need to paid?
                </button>
                </h2>

                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id='bbb'>
                        <p>You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
        </section>

        {/* Tutors Section */}
        <section>
          <h2 >Our Tutors</h2>
          <div className="teachers">
            <img src={Image34} alt="Mentorimage"/>
<h4>Bhavika Jobanputra</h4>
</div>
<div className="teachers">
<img src={Image35} alt="Mentorimage1"/>
<h4>Vidhi Verma</h4>
</div >
<div className="teachers">
<img src={Image36} alt="Mentorimage2"/>
<h4>Roshni Jethwani</h4>
</div>
<div className="teachers">
<img src={Image37} alt="Mentorimage3"/>
<h4>Eniya Tapo</h4>
</div>
<div className="teachers">
<img src={Image38} alt="Mentorimage4"/>
<h4>Abhishek Kanade</h4>
</div>
<div className="teachers">
<img src={Image39} alt="Mentorimage5"/>
<h4>Dinky Mirani</h4>
</div>


    </section>
    <CounterComponent/>

      </main>
    </div>
  );
};

export default AboutUs;
