import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import "../../css/Projects/pdogs.css";
import { NavLink, Banner, Role } from "../../components";
import { GApageView } from "../../ga.js";

export default function PDOGS() {
  useEffect(() => {
    GApageView("Work/PDOGS", "PDOGS");
  }, []);

  const imagBasePath = "/images/Pdogs/";

  const roleTasks = [
    {
      role: "UX Researcher and Designer",
      tasks: [
        "Interview users, qualitative & quantitative data analytics",
        "Wireframe & prototype design, A/B testing, usability testing",
      ],
    },
    {
      role: "Design Lead",
      tasks: [
        "Weekly design reviews with UI designers",
        "Discuss design ideas with the engineering team",
      ],
    },
    {
      role: "Frontend Engineer",
      tasks: ["React.js framework, Redux state management, Material UI"],
    },
    {
      role: "Quality Assurance Lead",
      tasks: [
        "Wrote 127 test cases (edge cases included)",
        "Directed 3 major QA testings before each launch",
      ],
    },
  ];

  return (
    <div>
      <Banner
        imgUrl="/images/project4-cover-center.png"
        title="Programming Design Online Grading System"
        company="National Taiwan University"
        period="June 2021 - September 2021"
      />

      <div className="section">
        I led a team of engineers and designers to create a new online grading
        system in 3 months. The new design has a more flexible role structure
        and a better integrated user experience, enabling it to{" "}
        <b className="dark-pink-text">
          serve 10 times more users (1000+ users)
        </b>
        , and <b className="dark-pink-text">cut down 90% of time</b> on routine
        tasks compared to the legacy ones.
      </div>

      <div className="section">
        <Role roleTasks={roleTasks} textClass="dark-pink-text" />
      </div>

      <div className="section">
        <h2>My Teammates</h2>
        <ul>
          <li>
            Project Manager:
            <a
              href="https://www.linkedin.com/in/yunchi-cheng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Yun-Chi Cheng
            </a>
          </li>
          <li>
            UI Designer:
            <a
              href="https://www.linkedin.com/in/wpbag"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Chien-Yin Wu
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/derekdylu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Derek Lu
            </a>
          </li>
          <li>
            Frontend Engineer:
            <a
              href="https://www.linkedin.com/in/tmcn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Yi-Tong Chen
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/gary-hu-2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Gary Hu
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/li-hsiang-huang-fu-0b1825184"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Li Hsiang Huang Fu
            </a>
            , Ray Lee, Po-Chun Wu, Erica Cheng, Daphne Hou, Amber liu, Wilson
            Hsu, Duge Lu
          </li>
          <li>
            Backend Engineer:
            <a
              href="https://www.linkedin.com/in/yangcheng1229"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Yang Cheng
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/chessyhsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Chessy Hsu
            </a>
            , Polly Ho, Benson Wang
          </li>
          <li>DevOps: Fredred Chu, Jtong Chen</li>
        </ul>
      </div>

      <div className="section">
        <h2>Timeline</h2>
        <img
          className="full-img"
          src={`${imagBasePath}Timeline.png`}
          alt="The project timeline. 8 weeks for design. 10 weeks for development. And 5 weeks for quality assurance."
        />
      </div>

      <div className="section">
        <h2>Background</h2>
        <p>
          PDOGS (Programming Design Online Grading System) is a platform for
          teaching assistants to publish programming assignments. Students will
          later submit their code in the platform and receive automatic grading.
        </p>
        <img
          className="md:w-[70%] mx-auto my-4"
          src={`${imagBasePath}background.png`}
          alt="TA will upload assignments while students submit their code and get auto-graded."
        />
        <p>
          It was originally built to serve the programming design course that
          has no more than 50 students each semester. However, with the
          increasing number of enrolled students, the problems root from its
          scrappy design become more significant and raise greater security
          concerns.
        </p>
      </div>

      <div className="section">
        <h2>The Problems</h2>
        <p>
          In the past, the platform’s developers only focused on adding new
          features and maintaining its functionality. After several generations,
          the system became very hard to use.
        </p>
        <p className="section-subtitle">1. Complex user roles</p>
        <p>
          The legacy system only has 2 roles, namely a teaching assistant or a
          student. The teaching assistant role has the highest access rights
          because the system was initially built by several teaching assistants.
          However, the system now has its own dedicated system admin, enabling
          teaching assistants to better focus on lecture materials. What’s more,
          I realized there are now 6 additional roles after user interviews.
        </p>
        <img
          className="md:w-[70%] mx-auto my-4"
          src={`${imagBasePath}role-scope.png`}
          alt="Besides a teaching assistant and a student, there are 6 more roles in reality, including system admin, guest students, team leader, etc."
        />
        <p className="dark-pink-text center-text">
          "As teaching assistants has the highest system permissions, I
          always need to warn them what sections they should not edit in case
          they accidentally delete a whole class." -- System Admin
        </p>
        <br />
        <p>
          Also, the legacy system fails to handle situations where a user can
          have different roles. For example, a person can be a teaching
          assistant in class A and a student in class B. However, the role
          assignment is global in the legacy system. If a user is a TA in any
          class, his role will be TA in all classes.
        </p>
        <img
          className="md:w-[60%] mx-auto my-4"
          src={`${imagBasePath}cjm-role-old.png`}
          alt="Students with TA roles will be TA globally"
        />

        <p className="section-subtitle">2. Disjointed user experience</p>
        <p className="dark-pink-text center-text">
          "There are so many steps missing in the system!
          <br /> To create an assignment, I need to type its description in the
          system, later use file transfer protocol to upload testing data, then
          publish the assignment back in the system."
          <br /> -- Teaching Assistant
        </p>
        <p>
          A user may need to type in the system, upload file via the File
          Transfer Protocol, and use ssh to connect to the database server for
          advance settings to complete a task.
        </p>
        <img
          className="full-img"
          src={`${imagBasePath}problem-flow.png`}
          alt="Teaching assistants will use ssh to create a new class in the database, hope in the system to create an assignment, hope off to upload testing data via file transfer protocol, then finally publish the assignment back in the system."
        />
      </div>

      <div className="section">
        <h2>DESIGN & DEVELOPMENT PROCESS</h2>
        <div className="flex flex-wrap">
          <div className="big-number-section">
            <b className="big-title">
              <b className="dark-pink-text big-number">6</b> Interviews
            </b>
            <p className="number-description">
              1-1 online interview with
              <br />
              different roles in each class
            </p>
          </div>

          <div className="big-number-section">
            <b className="big-title">
              <b className="dark-pink-text big-number">5</b> Iterations
            </b>
            <p className="number-description">
              1 paper wireframe
              <br />4 lo-fi prototypes
            </p>
          </div>

          <div className="big-number-section">
            <b className="big-title">
              <b className="dark-pink-text big-number">22</b> User testings
            </b>
            <p className="number-description">
              Each prototype was tested by
              <br />
              at least 5 people
            </p>
          </div>
        </div>

        <div>
          <p className="section-subtitle">1. Understanding users</p>
          <p>
            To understand each user type's responsibilities and define proper
            system roles, I interviewed system admins, students, and teaching
            assistants of three different classes. After observing how they
            complete their tasks in the current system, I discussed the
            necessary system roles and corresponding access rights with the
            project manager and development team.
          </p>
          <img
            className="half-full-img"
            src={`${imagBasePath}role.png`}
            alt="There are 3 scopes, namely system, class, and team. Under different scope, there are managers, normal users, and guest users."
          />
        </div>
        <br />

        <div>
          <p className="section-subtitle">2. Prototyping & User testing</p>
          <p>
            After clarifying the different user roles and analyzing the missing
            processes in the legacy system, I created multiple prototype
            versions for user testing to validating which design solution works
            best.
          </p>
          <img
            className="half-full-img"
            src={`${imagBasePath}wireframe-flow.png`}
            alt="There are 4 versions of prototypes in total. The first two ones are used to verify binding roles under different scope is needed. The last two ones are used to test different ways to include missing flows."
          />
        </div>
        <br />

        <div>
          <p className="section-subtitle">3. Designing Mockup</p>
          <div className="flex flex-wrap">
            <p className="side-text">
              When the final wireframes is defined, I consolidated the design
              solutions and discussed the final user interface with the UI
              designers.
            </p>
            <img
              className="right-side-img"
              src={`${imagBasePath}mockup.png`}
              alt="The mockup"
            />
          </div>
        </div>
        <br />

        <div>
          <p className="section-subtitle">4. Development & Quality Assurance</p>
          <div className="flex flex-wrap">
            <img
              className="left-side-img"
              src={`${imagBasePath}qa.png`}
              alt="For each test case, there are detailed steps to reproduce"
            />
            <p className="side-text">
              I worked as a front-end developer throughout the development
              process. I also wrote{" "}
              <b className="dark-pink-text">127 test cases </b>to ensure that
              the new system functioned as expected even with edge cases.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>
          <b className="dark-pink-text">Redesigned </b>Programming Design Online
          Grading System
        </h2>
        <img
          className="full-img"
          src={`${imagBasePath}pdogs.gif`}
          alt="The P-DOGS launched in 2021 Fall"
        />
        <br />

        <p className="section-subtitle">1. Flexible and Safer Role</p>
        <p>
          Users have well-defined access rights under different scopes. This
          prevents teaching assistants from modifying class contents they are
          not in charge of. Additionally, separating the system administrator
          role increases the website's data security.
        </p>
        <div className="flex flex-wrap img-row">
          <img
            className="left-side-img"
            src={`${imagBasePath}old-role.png`}
            alt="A user can only be either a teaching assistant or a student in the old system."
          />
          <img
            className="right-side-img"
            src={`${imagBasePath}new-role.png`}
            alt="There are 3 scopes, namely system, class, and team. In each scope, a user can be a manager, a normal user, or a guest."
          />
        </div>
        <br />

        <p className="section-subtitle">2. Integrated user flow</p>
        <p>
          Users can complete a task without leaving the system. For teaching
          assistants, this cuts down the time to create an assignment from 5
          minutes to 30 seconds.
        </p>
        <img
          className="full-img"
          src={`${imagBasePath}old-flow.png`}
          alt="In the legacy system, when creating an assignment, teaching assistants need to use file transfer protocol to upload file, which is a disjointed user experience."
        />
        <img
          className="full-img"
          src={`${imagBasePath}new-flow.png`}
          alt="Now teaching assistants can finish all steps within the system."
        />
      </div>

      <div className="section">
        <h2>RESULT</h2>
        <div className="flex flex-wrap">
          <div className="big-number-section">
            <b className="dark-pink-text big-number">200+</b>
            <p className="number-description">Potential error prevented</p>
          </div>
          <div className="big-number-section">
            <b className="big-title dark-pink-text">
              <b className="big-number">90</b>%
            </b>
            <p className="number-description">
              Weekly time saved for teaching assistants
            </p>
          </div>
          <div className="big-number-section">
            <b className="big-title dark-pink-text">
              <b className="big-number">80</b>%
            </b>
            <p className="number-description">Improvement on site efficiency</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>REFLECTION</h2>
        <p className="section-subtitle">
          1. Comparing new and legacy systems with low-fidelity prototypes
          reduces bias in feedback
        </p>
        <p>
          Experienced users may prefer a system similar to the legacy one, but
          that doesn't mean the legacy system is better. To get more genuine
          user feedback, I created two low-fidelity prototypes for user testing:
          one of the existing system and one of our new designs. This approach
          enabled users to share their thoughts on both designs as if they were
          both new.
        </p>
        <div className="flex flex-wrap img-row-equal">
          <img
            className="left-side-img"
            src={`${imagBasePath}lo-fi1.png`}
            alt="lo-fi prototype version 1 is similar to legacy system"
          />
          <img
            className="right-side-img"
            src={`${imagBasePath}lo-fi2.png`}
            alt="lo-fi prototype version 2 is a new design"
          />
        </div>
        <p className="section-subtitle">
          2. Co-creation workshops can prevent misunderstandings
        </p>
        <p>
          During our design team meetings, we would discuss how to modify the
          mockup internally. However, people might feel disrespected when their
          ideas were not adopted. Therefore, I learned that a co-creation
          workshop might be a better approach. If everyone could share ideas and
          prioritize things together, there would be fewer misunderstandings and
          people would feel more respected.
        </p>
        <p className="section-subtitle">
          3. It's important to consider all stakeholders in design
        </p>
        <p>
          Designers should consider the needs of all stakeholders, even those
          who use the system infrequently. In this project, I only interviewed
          the main users (system managers, teaching assistants, and students),
          which resulted in an urgent request from the project's sole supporter,
          the professor, at the very last moment. This experience taught me that
          a complete stakeholder map is essential for all projects.
        </p>
      </div>
      <NavLink
        pageUrl="/Work/RedesignBLI"
        project="Redesign Website of Bureau of Labor Insurance"
      />
    </div>
  );
}
