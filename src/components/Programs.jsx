import React from 'react';
import Image15 from "../images/program.svg";
import Image16 from "../images/p3.avif";
import Image17 from "../images/9-10.avif";
import Image18 from "../images/11-12.avif";
import Image19 from "../images/p1.avif";


const Main = () => {
  return (
    <div>
    <main>
      <section className="session">
        <div>
          <h2>
            Book your <span>FREE</span> Demo Session today
          </h2>
          <h3>Get a free academic Counselling Session</h3>
          <a className="button" href="/#">Enroll Now</a>
        </div>
        <img src={Image15} height="400px" alt="" />
      </section>
      <section className="batch">
        <h2 >Our Batches</h2>
        <div className="card mb-3" id='aaaaa'>
          <div class="row g-0">
        <div class="col-md-4">
          <img src={Image16} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8 ">
          <div class="card-body">
            <h5 class="card-title">Junior Batch (4-5 Standard):</h5>
            <p class="card-text">
            <li>Math Basics:
              <ul>
                <li>Counting and number recognition activities.
                  </li>
                <li> Introduction to addition, subtraction, and basic shapes.</li>
                <li>Interactive math games for learning.</li>
              </ul>
            </li>
            <li>Language Skills:
              <ul>
                <li>Alphabet learning with interactive exercises.</li>
                <li> Simple vocabulary building and basic grammar rules.</li>
                <li>Storytime with animated stories and reading comprehension activities.</li>
              </ul>
            </li>
            <li>Science Exploration:
              <ul>
                <li>Introduction to the natural world: plants, animals, and the environment.</li>
                <li>Simple experiments demonstrating scientific concepts (e.g., buoyancy, magnetism).</li>
           
              </ul>
            </li>
          </p>
          <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" class="enroll">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
    <br></br>
        <div className="card mb-3" id='aaaaa'>
          <div class="row g-0">
        <div class="col-md-4 ">
          <img src={Image17}class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Defenders Batch (6-8 Standard):</h5>
            <p class="card-text">
            <li>Mathematics & Logic:
              <ul>
                <li>Intermediate math lessons: multiplication, division, fractions, and decimals.
                  </li>
                <li> Logic puzzles and problem-solving exercises.</li>
              </ul>
            </li>
            <li>Science Adventures:
              <ul>
                <li>Deeper dive into scientific principles with experiments and explanations.</li>
                <li> Introduction to concepts like forces, energy, and the scientific method.</li>
              </ul>
            </li>
            <li>History & Geography:
              <ul>
                <li>Engaging history lessons on different civilizations or key historical events..</li>
                <li>Basics of geography: countries, continents, and cultures.</li>
           
              </ul>
            </li>
            <li>Coding for Beginners:
              <ul>
                <li>Introduction to block-based coding or simple programming concepts.
                </li>
                <li>Interactive coding tutorials and basic project creation.</li>
           
              </ul>
            </li>
          </p>
          <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" class="enroll">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
    <br/>
        <div className="card mb-3" id='aaaaa'>
          <div class="row g-0">
        <div class="col-md-4">
          <img src={Image18} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8 ">
          <div class="card-body">
            <h5 class="card-title">Seniors Batch (9-10 Standard):</h5>
            <p class="card-text">
            <li>Advanced Math & Sciences:
              <ul>
                <li>Algebra, geometry, trigonometry, and calculus tutorials.
                 
                  </li>
                <li> Advanced science topics: chemistry, physics, and biology lessons.</li>

              </ul>
            </li>
            <li>Language Arts:
              <ul>
                <li>Literature analysis, writing prompts, and grammar lessons.</li>
                <li> Vocabulary expansion and essay writing tips.</li>
              </ul>
            </li>
            <li>Exam Preparation:
              <ul>
                <li>Mock tests and practice papers for standardized tests.</li>
                <li>Tips and strategies for time management during exams</li>
           
              </ul>
            </li>
            <li>Career Guidance:
              <ul>
                <li>Resources on various career paths and educational opportunities.</li>
                <li>Tips for choosing majors, colleges, and future career prospects.</li>
           
              </ul>
            </li>
          </p>
          <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" class="enroll">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
    <br/>
        <div className="card mb-3"id='aaaaa'>
          <div class="row g-0">
        <div class="col-md-4 ">
          <img src={Image19} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8 ">
          <div class="card-body">
            <h5 class="card-title">Achievers Batch (11-12 Standard):</h5>
            <p class="card-text">
            <li>Specialized Subjects:
              <ul>
                <li>Subject-specific tutorials tailored for competitive exams (engineering, medical, etc.).
                 
                  </li>
                <li> Advanced topics in math, science, literature, and other subjects.</li>
              </ul>
            </li>
            <li>Exam Strategies:
              <ul>
                <li>Intensive exam preparation resources with past papers and expert advice.</li>
                <li> Techniques for acing competitive exams and university entrance tests.</li>
              </ul>
            </li>
            <li>College Readiness:
              <ul>
                <li>Guides for college applications, admission essays, and interviews.</li>
                <li>Information on scholarships, internships, and extracurricular activities.</li>
           
              </ul>
            </li>
            <li>Skill Development:
              <ul>
                <li>Advanced skill-building resources for specialized fields (coding, design, etc.).</li>
                <li>Leadership workshops, soft skill development, and career workshops.</li>
           
              </ul>
            </li>
          </p>
          <a href="https://forms.gle/zY127AmtyWQdJ8sZ9" class="enroll">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
      </section>
    </main>
    </div>
   
  );
};

export default Main;
