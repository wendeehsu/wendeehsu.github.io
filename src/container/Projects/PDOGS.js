import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import "../../css/Projects/pdogs.css";
import { NavLink, Banner, Role, Number, Label } from "../../components";
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

  const numbers = [
    {
      figure: 6,
      unit: "Interviews",
      detail: ["TAs and students from 3 different courses"],
    },
    {
      figure: 4,
      unit: "Iterations",
      detail: ["4 versions of lo-fi prototype"],
    },
    {
      figure: 22,
      unit: "User testings",
      detail: [
        "v1-3 are each tested by 3-4 users.",
        "v4 is tested by 12 users.",
      ],
    },
  ];

  const results = [
    {
      figure: "60%",
      detail: ["Potential error prevented"],
    },
    {
      figure: "90%",
      detail: ["Weekly time saved for teaching assistants"],
    },
    {
      figure: "80%",
      detail: ["Improvement on site efficiency"],
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
          "As teaching assistants has the highest system permissions, I always
          need to warn them what sections they should not edit in case they
          accidentally delete a whole class." -- System Admin
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
        <p>
          In the legacy system, a user may need to type in the system, upload
          files via the File Transfer Protocol, and switch back to the system to
          publish a task.
        </p>

        <img
          className="md:w-[80%] mx-auto my-4"
          src={`${imagBasePath}cjm-flow-old.png`}
          alt="TA needs both FTP and the system to finish a task."
        />

        <p className="dark-pink-text center-text">
          "There are so many steps missing in the system! To create an
          assignment, I need to switch between different tools. It’s so easy to
          forget what I’ve done!" -- Teaching Assistant
        </p>
      </div>

      <div className="section">
        <h2>Design Process</h2>

        <div className="flex flex-wrap mb-4">
          {numbers.map((num, i) => (
            <Number
              key={`num-${i}`}
              figure={num.figure}
              unit={num.unit}
              detail={num.detail}
              color="dark-pink"
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Understanding and defining the users</h2>
        <p>
          To understand each user type's responsibilities and define proper
          system roles, I interviewed system admins, students, and teaching
          assistants of three different classes. After observing how they
          complete their tasks in the current system, I discussed the necessary
          system roles and corresponding access rights with the project manager
          and development team.
        </p>
        <img
          className="md:w-[80%] mx-auto my-4"
          src={`${imagBasePath}job-to-be-done.png`}
          alt="Job to be done."
        />
        <img
          className="mx-auto h-16"
          src={`${imagBasePath}arrow-down.svg`}
          alt="translate to"
        />
        <img
          className="md:w-[90%] mx-auto my-4"
          src={`${imagBasePath}role.png`}
          alt="Role access as functional requirement"
        />
        <p>
          As the system has a complicated role structure, I reference similar
          products like Google Classroom and NTU Cool. I also studied platforms
          focusing on coding challenges (e.g. Leetcode) to understand how the UI
          is designed.
        </p>
        <img
          className="md:w-[60%] mx-auto my-4"
          src={`${imagBasePath}competitive_analysis.png`}
          alt="competitive analysis"
        />
      </div>

      <div className="section">
        <h2>Design Iterations</h2>
        <div>
          <p className="section-subtitle">
            Phase 1. Verify new role structure is needed
          </p>
          <p>
            When I proposed the new role structure, the engineering team
            strongly disapproved of it as it would increase development effort
            under the tight time frame. Therefore, I created 2 prototypes, one
            keeps the legacy system’s role settings and the other applies the
            new role structure.
          </p>
          <img
            className="md:w-[80%] mx-auto my-4"
            src={`${imagBasePath}lo-fi1.png`}
            alt="wireframe 1 screenshot"
          />
          <img
            className="md:w-[80%] mx-auto my-4"
            src={`${imagBasePath}lo-fi2.png`}
            alt="wireframe 2 screenshot"
          />

          <div className="lg:flex flex-wrap">
            <img
              className="lg:w-[50%] mx-auto"
              src={`${imagBasePath}version-flow.png`}
              alt="version flow"
            />
            <div className="flex-1">
              <p className="dark-pink-text">
                "I'm confused by the Add button (in v1). If I have 2 TA classes,
                where will I be redirected to after I click 'Add Homework'?" --
                Tester B
              </p>
              <p>
                By inviting some engineers to participate in user testings and
                showing each version’s success rate, I convinced the team on
                implementing the new role structure.
              </p>
            </div>
          </div>
        </div>

        <br />
        <p className="section-subtitle">Phase 2. Integrate missing steps</p>
        <div className="md:flex flex-wrap">
          <img
            className="md:w-[50%] md:mr-4"
            src={`${imagBasePath}lo-fi3.png`}
            alt="wireframe 3 screenshot"
          />
          <p className="flex-1">
            I experimented on different ways to upload testing files within the
            system. As teaching assistants shared that they need extra setting
            on time and memory usage for each test case, I updated the design
            with a "Upload data tool" that can set default values and customize
            later in the table.
          </p>
        </div>
        <img
          className="md:w-[90%] mx-auto my-4"
          src={`${imagBasePath}lo-fi4.png`}
          alt="wireframe 4 screenshot"
        />
      </div>

      <div className="section">
        <h2>
          <b className="dark-pink-text">Redesigned </b>Programming Design Online
          Grading System
        </h2>

        <p className="section-subtitle">
          60% usability improvement with the flexible and safer role structure
        </p>
        <div className="lg:flex flex-wrap">
          <div className="lg:w-[40%] bg-gray-100 p-4 rounded-lg">
            <Label text="Before" textColor="text-white" bgColor="bg-gray-400" />
            <img
              className=""
              src={`${imagBasePath}old-role-structure.png`}
              alt="old role structure"
            />
            <ul>
              <li>
                When a user is granted the teaching assistant role, he has the
                TA rights in all classes. He can see the assignment answers in
                class B where he in fact is a student.
              </li>
              <li>
                Teaching assistants can remove an entire course as they have the
                same right as a system admin.
              </li>
            </ul>
          </div>
          <div className="flex-1 p-4">
            <Label text="After" textColor="" bgColor="bg-gray-100" />
            <img
              className="mt-2"
              src={`${imagBasePath}new-role-structure.png`}
              alt="new role structure"
            />
            <ul>
              <li>
                <b>More flexible: </b>A user can be both a teaching assistant in
                class A and a student in class B. This prevents potential
                dishonest behaviors.
              </li>
              <li>
                <b>Enhance security: </b> We added system admin in the system
                level, increasing the platform’s data security.
              </li>
            </ul>
          </div>
          <img
            className="lg:w-[60%] mx-auto my-4"
            src={`${imagBasePath}cjm-role-new.png`}
            alt="with the new role structure, user's role is assigned under each scope"
          />
        </div>

        <p className="section-subtitle">
          Cut down 90% time on routine tasks by integrated user flows
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <Label text="Before" textColor="text-white" bgColor="bg-gray-400" />
          <img
            className=""
            src={`${imagBasePath}ta-flow-old.png`}
            alt="old flow for TA to upload assignment"
          />
          <ul>
            <li>
              The need to switch between PDOGS and FTP client disrupts the TAs'
              workflow. It increases the time required to create an assignment.
              Some TA may even forget to upload testing files.
            </li>
            <li>
              FTP servers have weaker access controls compared to PDOGS. This
              could increase the risk of unauthorized users gaining access to
              all data stored in the server.
            </li>
          </ul>
        </div>
        <div className="p-4">
          <Label text="After" textColor="" bgColor="bg-gray-100" />
          <img
            className=""
            src={`${imagBasePath}ta-flow-new.png`}
            alt="New flow for TA to upload assignment"
          />
          <ul>
            <li>
              <b>Increased efficiency: </b>The new workflow cuts down the time
              to create an assignment from 5 minutes to 30 seconds.
            </li>
            <li>
              <b>Stricter access control: </b>As the only way to access testing
              files is through PDOGS now, chances of data leak is reduced.
            </li>
            <li>
              <b>Better maintainability: </b>Teaching users to use two separate
              systems, PDOGS and FTP, is complex and expensive. The integrated
              workflow enhanced TA’s onboarding efficiency and decreased
              maintenance overhead.
            </li>
          </ul>
          <p className="dark-pink-text center-text my-4">
            "The new system is so much more maintainable. <br />
            No more warnings for teaching assistants on what to avoid!"" --
            System admin
          </p>
        </div>
        <img
          className="lg:w-[80%] mx-auto mb-4"
          src={`${imagBasePath}cjm-flow-new.png`}
          alt="TA can use the system to finish a task."
        />
      </div>

      <div className="section">
        <h2>Result</h2>
        <div className="flex flex-wrap mb-4">
          {results.map((result, i) => (
            <Number
              key={`result-${i}`}
              figure={result.figure}
              detail={result.detail}
              color="dark-pink"
            />
          ))}
        </div>
        <img
          className="full-img"
          src={`${imagBasePath}pdogs.gif`}
          alt="The P-DOGS launched in 2021 Fall"
        />
      </div>

      <div className="section">
        <h2>Reflection</h2>
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
        <div className="lg:flex flex-wrap">
          <p className="flex-1">
            Designers should consider the needs of all stakeholders, even those
            who use the system infrequently. In this project, I only interviewed
            the main users (system managers, teaching assistants, and students),
            which resulted in an urgent request from the project's sole
            supporter, the professor, at the very last moment. This experience
            taught me that a complete stakeholder map is essential for all
            projects.
          </p>
          <img
            className="lg:w-[40%]"
            src={`${imagBasePath}mobile.png`}
            alt="screenshot of mobile version"
          />
        </div>
      </div>
      <NavLink
        pageUrl="/Work/RedesignBLI"
        project="Redesign Website of Bureau of Labor Insurance"
      />
    </div>
  );
}
