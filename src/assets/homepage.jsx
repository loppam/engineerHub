import React from "react";
import JobPoster from '../img/jobposter.svg'
const homepage = () => {
  return (
    <div className="homepage">
        <div className="header-text">
      <h1>We are Hiring !!</h1>
      <p>
        Engineerhub is hiring students to encourage their efforts & help them
        excel in the following domains.
      </p>
        </div>
        <div className="card">
            <div className="row">
                <div className="job-poster">
                    <img src={JobPoster} alt="Job-Poster" />
                    <div className="tag">@engineerHUB</div>
                </div>
                <div className="job-name">Hiring for Backend developer</div>
                <ul className="incard">
                    <li>TechStack: Node.js</li>
                    <li>Experience: 0 - 2 Years</li>
                    <li>Eligibilty: Min 60% in 10th and 12th class</li>
                </ul>
                <div className="card-text">
                <h6>Location: Ghaziabad</h6>
                <h6>Last Date: 24-02-2023</h6>
                </div>
                <button>Apply</button>
            </div>
            <div className="row">
                <div className="job-poster">
                    <img src={JobPoster} alt="Job-Poster" />
                    <div className="tag">@engineerHUB</div>
                </div>
                <div className="job-name">Hiring for Node.js Developer Intern</div>
                <ul className="incard">
                    <li>TechStack:</li>
                    <li>Experience: 0 - 2 Years</li>
                    <li>Eligibilty: Min 6 CGPA</li>
                </ul>
                <div className="card-text">
                <h6>Location: Ghaziabad</h6>
                <h6>Last Date: 24-02-2023</h6>
                </div>
                <button>Apply</button>
            </div>
            <div className="row">
                <div className="job-poster">
                    <img src={JobPoster} alt="Job-Poster" />
                    <div className="tag">@engineerHUB</div>
                </div>
                <div className="job-name">Hiring for Campus Ambassador</div>
                <ul className="incard">
                    <li>TechStack:</li>
                    <li>Experience: 0 - 1 Years</li>
                    <li>Eligibilty: Min 5 CGPA</li>
                </ul>
                <div className="card-text">
                <h6>Location: Ghaziabad</h6>
                <h6>Last Date: 24-02-2023</h6>
                </div>
                <button>Apply</button>
            </div>
            <div className="row">
                <div className="job-poster">
                    <img src={JobPoster} alt="Job-Poster" />
                    <div className="tag">@engineerHUB</div>
                </div>
                <div className="job-name">Hiring for DevOps Mentor</div>
                <ul className="incard">
                    <li>TechStack:</li>
                    <li>Experience: 0 - 1 Years</li>
                    <li>Eligibilty: Min 6 CGPA</li>
                </ul>
                <div className="card-text">
                <h6>Location: Ghaziabad</h6>
                <h6>Last Date: 24-02-2023</h6>
                </div>
                <button>Apply</button>
            </div>
            <div className="row">
                <div className="job-poster">
                    <img src={JobPoster} alt="Job-Poster" />
                    <div className="tag">@engineerHUB</div>
                </div>
                <div className="job-name">Node.js Developer Intern</div>
                <ul className="incard">
                    <li>TechStack:</li>
                    <li>Experience: 0 - 2 Years</li>
                    <li>Eligibilty: Min 6 CGPA</li>
                </ul>
                <div className="card-text">
                <h6>Location: Ghaziabad</h6>
                <h6>Last Date: 24-02-2023</h6>
                </div>
                <button>Apply</button>
            </div>
        </div>
    </div>
  );
};

export default homepage;
