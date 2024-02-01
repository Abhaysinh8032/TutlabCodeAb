import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Image20 from "../images/bg.jpg";
import Image21 from "../images/i1.webp";
import Image22 from "../images/i2.png";
import Image23 from "../images/i3.webp";
import Image24 from "../images/i4.avif";
import Image25 from "../images/i5.jpeg";
import Image26 from "../images/i4.avif";
import Image27 from "../images/a1.png";
import Image28 from "../images/a2.png";
import Image29 from "../images/a3.png";
import Image30 from "../images/a4.png";
import Image31 from "../images/i11.png";
import Image32 from "../images/i22.png";
import Image33 from "../images/i33.png";


function Internship() {
  return (
    <div>
    <main>
      <div className="intern">
        <h5 className="card-title-head" >GET BEST INTERSHIP FOR YOURSELF AT</h5>
      <h2 >TUT<span className="danger">LABS</span></h2>
      <h3 >
        Discover a dynamic internship opportunity designed to elevate your
        skills and career prospects. <br />Join us for hands-on experience,
        mentorship, and real-world impact.<br />Apply now to shape your future.
      </h3>

      </div>

      <div className="container">
        {/* Your internship image */}
        <img src={Image20} id="bg" alt="" ></img>
      </div>
      <h2>Available Internships</h2>
      <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4"  id="aval" >
        <div className="col">
          <div className="card">
            <img
              src={Image21}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Backend Developer</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 3</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Image22}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Graphics Designer</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 5</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Image23}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Frontend Developer</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 7</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Image24}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Graphics Designer</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 8</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Image25}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Marketing & Sales</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 8</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={Image26}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Graphics Designer</h5>
              <p className="card-text">Position: Research Intern</p>
              <p className="card-text">Internship Type: Office Internship</p>
              <p className="card-text">Location: Navi Mumbai</p>
              <p className="card-text">No. of Opening: 8</p>
              <button className="enroll">Apply</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="journey">
        <h2 >Internship Journey</h2>
      </div>

      <div className="application-process">
        <div className="row row-cols-1 row-cols-md-3 g-4" id="ap" >
          <div className="cols">
            <div className="card-app h-100">
              <h1 id="h">01</h1>
              <img
                src={Image27}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">REGISTRATION</h5>
                <p className="card-text">
                  Our application form is created to help us get to know you better and allow you to explore your potentials, skill set, and ability that you will bring to the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="card-app h-100">
              <h1 id="h">02</h1>
              <img
                src={Image28}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">ADMINISTRATION</h5>
                <p className="card-text">
                  Internships are important as they broaden a student's knowledge and prepares them for real-world work experience. Internships are crucial for students if the colleges offer credit scores for it.
                </p>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="card-app h-100">
              <h1 id="h">03</h1>
              <img
                src={Image29}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">INTERVIEW</h5>
                <p className="card-text">
                  Attending interviews is a great way to know about your strengths and the areas that you can improve upon. Read about the company, what they do, their employee profiles, and job descriptions.
                </p>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="card-app h-100">
              <h1 id="h">04</h1>
              <img
              src={Image30}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">ON JOB</h5>
              <p className="card-text">
                Career fests and job fairs are platforms where aspirants meet
                potential employers. You can meet company representatives and
                find out about suitable opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div classNameName="container">

<div classNameName="container-2">

  <div className="items">
    <div className="item-1">
      <img
        src={Image31}
        alt=""
      />
      <h4>Make The difference</h4>
      <p>
        We ensure our interns have substantial projects that make a lasting
        impact even after they’ve left TutLabs.
      </p>
    </div>

    <div className="item-1">
      <img
        src={Image32}
        alt=""
      />
      <h4>Make The difference</h4>
      <p>
        You will be encouraged to network with team members, stakeholders,
        and leaders to build connections that last a lifetime.
      </p>
    </div>

    <div className="item-1">
      <img
        src={Image33}
        alt=""
      />
      <h4>Make The difference</h4>
      <p>
        Whether it be a personal branding workshop or an introduction to
        finance, we host a variety of events to help you grow as a person
        and as an employee.
      </p>
    </div>
  </div>
</div>
</div>
      </main>
    </div>
    
  );
}

export default Internship;
