import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/iolk.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Pedda Golla Ganesh</h2>
            <h4 style={{ color: "grey" }}>Web Developer | Programmer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Pedda Golla Ganesh. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Gandimaisamma,Hyderabad</p>
            <h5>Phone</h5>
            <p>6305443421</p>
            <h5>Email</h5>
            <p>ganayadav369@gmail.com</p>
            
            <h5>Download Resume</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/160SbW42iDmydQ-sTQGGbT13u8J0g8ACb/view?usp=drivesdk"
            >
              My Update Resume
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
          
            <Experience
              startYear={"february 2023"}
              endYear={"March 2023"}
              duration= {1}
              jobName={"Internship (Remote)"}
              companyName={"Oasis Infobyte"}
              jobDesc={[
                "It is a 1 month internship on web development where i learnt",
                "the skills like html,cascading style sheets and javascript and",
                "its a great experience learning the web development and",
                "designing."

              ]
              }
            />
            

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2024}
              endYear={2020}
              collegeName={"Institute of Aeronautical Engineering"}
              degreeName={"Btech in Information Technology"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"DBMS"} progress={70} />
            <Skills skill={"Typing"} progress={90} />
            <Skills skill={"Javascript"} progress={90} />
            <Skills skill={"SQL Server"} progress={80} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>Data structures certfication in Great Learning (2022-04)</h6>
            <h6>Problem solving certificate in hackerank (2022-07)</h6>
            <h6>React js certificate in infosys springboard (2023-02)</h6>
            <h6>Java basic certificate (2021-11)</h6>
            <h6>DBMS certificate in coding ninjas (2023-02)</h6>
            <h6>Web Development course completion in pupilfirst (2023-01)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
