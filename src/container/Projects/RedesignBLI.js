import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import { NavLink, Banner, Role, Restriction, Label, Reflection } from "../../components";
import { GApageView } from "../../ga.js";

export default function RedesignBLI() {
  useEffect(() => {
    GApageView("Work/RedesignBLI", "BLI");
  }, []);

  const imageBaseUrl = "/images/BLI/";

  const roleTasks = [
    {
      role: "UX researcher and designer",
      tasks: [
        "interview, reconstruct information architecture, wireframe, prototype, usability testing",
      ],
    },
  ];

  const restrictions = [
    {
      imgUrl: imageBaseUrl + "Background1.png",
      need: "The redesign project has to be completed in 10 weeks.",
      solution:
        "Although the website serves people from all walks, we need to select our target audience to narmd:flex flex-wrap down the project scope.",
    },
    {
      imgUrl: imageBaseUrl + "Background2.png",
      need: "Users need to prepare a card reader and Citizen Digital Certificate to log in.",
      solution:
        "We have to consider more kinds of failure cases to enhance its user experience.",
    },
    {
      imgUrl: imageBaseUrl + "Background3.png",
      need: "Users do not visit the website frequently.",
      solution:
        "We need to treat people as first-time users and design clear guidance for the website.",
    },
  ];

  const reflections = [{
    imgUrl: imageBaseUrl + "Reflection1.png",
    title: "1. Testing scenario may affect our result",
    detail: "As mentioned above, we figured out users prefer the functional version of categorizing service during wireframe’s usability testing. However, reflecting on this decision, our team think the testing scenario may affect users’ preference. Some users were heavily aware that they were doing a test, as they told us “I finished this question.” instead of “I finished the application service.” Not being able to put themselves in the scenario can result in behaving differently in comparison with real-life scenarios. In the future, besides acknowledging each tool has its limitation, we may also add more descriptions to help testers get into the scenario."
  }, {
    imgUrl: imageBaseUrl + "Reflection2.png",
    title: "2. It is important to point out the value of UX",
    detail: "To be frank, no matter how unfriendly the user experience is, people have no other choice but to keep using governmental websites. Hence, integrating users’ thoughts or demands in the website’s designing phase will not be considered crucial. Therefore, it will be better to elaborate on why we made these design changes and how these modifications can reduce the stress of the staff at the counter when cooperating with public sectors next time. Otherwise, the suggestions may not be seriously taken into discussion."
  }, {
    imgUrl: imageBaseUrl + "Reflection3.png",
    title: "3. We should consider regulations and limitations to enhance the viability",
    detail: "In this project, we redesigned the information architecture, categorizing services based on their function after wireframe testing. However, we later realized that although this structure is preferred by most users, the guideline for public sector's websites writes that it is required to categorize services based on people's stage of life (Giving birth, working, retired, etc.) If we have more time, we will try to cooperate with the Bureau’s staff closer in the early stage to know about regulations and limitations, enhancing the viability of our final design."
  }];

  return (
    <div>
      <Banner
        imgUrl="/images/project1-cover.png"
        title="Redesign Website of Bureau of Labor Insurance"
        company="PDIS"
        period="July 2020 - September 2020"
      />

      <div className="section">
        In 10 weeks, we assisted the Bureau of Labor Insurance to redesign its
        website (e-service platform), aiming to provide adequate assistance when
        users encounter difficulties in different stages. Our new design scored
        85.94 in the final SUS usability testing, a 40% improvement on the
        original website’s score of 61.25.
      </div>

      <div className="section">
        <Role roleTasks={roleTasks} textClass="blue-text" />
      </div>

      <div className="section">
        <h2>My Teammates</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ping-ju-huang-aa0b10174/"
              target="_blank"
            >
              Ping-Ju Huang
            </a>{" "}
            - UX Researcher
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jennifer-chueh-chen-l-218533195/"
              target="_blank"
            >
              Chueh-Chen Lai
            </a>{" "}
            - UX Researcher, UI Designer
          </li>
          <li>
            <a href="https://medium.com/@as964119/about" target="_blank">
              Nuan-Ting Lin
            </a>{" "}
            - UX Researcher, UI Designer
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Background</h2>
        <p>
          We have a limited time to redesign the website of the Bureau of Labor
          Insurance, which provides a variety of services to more than millions
          of workers, including farmers, fishermen, and so on. Users are
          required to prepare a card reader and insert their Citizen Digital
          Certificate to log in to the website, which made it more challenging
          for first-time users. Besides, these people do not visit the website
          more than twice a year because their need for insurance-related issues
          does not happen frequently.
        </p>
        <div className="sm:flex flex-wrap justify-center">
          {restrictions.map((restriction, i) => (
            <Restriction
              key={`restriction-${i}`}
              imgUrl={restriction.imgUrl}
              need={restriction.need}
              solution={restriction.solution}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Process Overview</h2>
        <img
          className="full-width-img"
          src={`${imageBaseUrl}Process.png`}
          alt="research, define, design, test"
        />
      </div>

      <div className="section">
        <h2>Design Process</h2>

        {/* ---- 1. User Reasearch ---- */}
        <h3>1. User Reasearch</h3>
        <h4 className="blue-text">Interview</h4>
        <div className="md:flex flex-wrap">
          <p className="md:flex-1">
            To find current users of the e-service platform of the Bureau of
            Labor Insurance, we released questionnaires asking about people’s
            experience of using the website. We later selected 5 users and
            conducted semi-structured interviews with them. To include thoughts
            from our stakeholders into the new design, we also arranged meetings
            with 4 staff working in the Information Technology Division of the
            Bureau of Labor Insurance.
          </p>
          <img
            className="md:w-[50%]"
            src={`${imageBaseUrl}Test.png`}
            alt="Observing a man using the platform"
          />
        </div>
        <h4 className="blue-text">Affinity Diagram</h4>
        <div className="md:flex flex-wrap">
          <p className="md:flex-1">
            After interviewing each user and stakeholders, we sorted more than
            100 user quotes, derived 25 insights, and generated 3 personas.
          </p>
          <img
            className="md:w-[50%]"
            src={`${imageBaseUrl}AffinityDiagram.png`}
            alt="affinity diagram"
          />
        </div>
        <h4 className="blue-text">User Types</h4>
        <p>
          Based on whether these users are familiar with their goal on the
          website and their degree of attention they pay to their right of labor
          insurance, we made 3 personas corresponding to each group we want to
          target.
        </p>
        <img
          className="full-width-img"
          src={`${imageBaseUrl}UserVector.png`}
          alt="two vectors of dividing users: familiarity to the system and the amount of attention to their right of labor insurance"
        />
        <p>For each group, we identified their needs and pain points:</p>
        <img
          className="full-width-img"
          src={`${imageBaseUrl}UserTable.png`}
          alt="different users have different needs"
        />
      </div>

      <div className="section">
        {/* ---- 2. Define Problem ---- */}
        <h3>2. Define Problem</h3>
        <div className="p-4 rounded-lg bg-sky-50">
          <p className="text-center bold-text">
            How Might We provide adequate assistance when users encounter
            difficulties in different stages?
          </p>
        </div>
        <br />
        <h4 className="blue-text">User Need</h4>
        <p>
          Users expect the website to provide a clear guide and immediate
          feedback when searching or applying for a service.
        </p>
        <br />
        <h4 className="blue-text">Limitation</h4>
        <p>
          Bureau of Labor Insurance supports a wide variety of services for
          people facing different incidences, but the website has a barely low
          rate of usage. A person may visit the website no more than twice a
          year. As a result, we should regard each person as first-time users
          when designing guidance.
        </p>
      </div>

      <div className="section">
        {/* ---- 3. Design Wireframe ---- */}
        <h3>3. Design Wireframe</h3>
        <h4 className="blue-text">
          Using different information architecture to design two versions of
          wireframe
        </h4>
        <p>
          Since the Bureau of Labor Insurance provides a wide variety of
          services, we made two versions of wireframe using different
          information architecture to categorize each service. The{" "}
          <b>“Stage of Life”</b> version divides services into “working,
          retired, disabled, unemployed, giving birth, dead”. As for the{" "}
          <b>“Function”</b> version, we simply labeled each service into “making
          inquiries, applying, paying, changing data, printing”.
        </p>
        <img
          className="full-width-img"
          src={`${imageBaseUrl}IaCompare.png`}
          alt="Comparing Information architecture"
        />
        <h4 className="blue-text">
          Usability Testing on Information Architecture
        </h4>
        <p>
          We conducted 5 usability testing, carefully selected users with
          diverse backgrounds. Besides testing our current user flow, we were
          more interested in which information architecture do they prefer.
        </p>
        <div className="md:flex flex-wrap">
          <p className="md:flex-1">
            Surprisingly, users found it difficult to search for the service
            they want in the “Stage of Life” version. For example, there is a
            subsidy that can only be applied when one was unemployed but later
            got a new job in 3 months. In this case, some may categorize it as
            “unemployed”, while others think it should belong to “working”.
            <br />
            &#8594; Due to the <b>lower degree of confusion</b> raised in
            classifying each service, we decided to use the <b>“Function”</b>{" "}
            version in our future iteration.
          </p>
          <img
            className="md:w-[50%]"
            src={`${imageBaseUrl}Wireframe.png`}
            alt="wireframe"
          />
        </div>
      </div>

      <div className="section">
        {/* ---- 4. Creating Propotype ---- */}
        <h3>4. Creating Propotype</h3>
        <h4 className="blue-text">Login</h4>
        <img
          className="md:w-[65%]"
          src={`${imageBaseUrl}Prototype_Login.png`}
          alt="Login page in prototype"
        />
        <h4 className="blue-text">Applying for a service</h4>
        <img
          className="full-width-img"
          src={`${imageBaseUrl}Prototype_Apply.png`}
          alt="Applying page in prototype"
        />
      </div>

      <div className="section">
        {/* ---- 5. Usability Testing ---- */}
        <h3>5. Usability Testing</h3>
        <p>
          After designing our low-fi prototype, we arranged 3 one-to-one
          usability testing to see how the current design can be improved. We
          later iterated the low-fi prototype into our high-fi prototype,
          conducting 8 usability testing with both first-time users and
          experienced users of the website.
        </p>
        <div className="md:flex flex-wrap justify-center">
          <img
            className="md:w-[80%] mx-auto my-4"
            src={`${imageBaseUrl}TestingFlow.png`}
            alt="Testing flow"
          />
        </div>
      </div>

      <div className="mx-auto w-[70%] mt-8">
        <h2>
          <b>Final Design</b>
        </h2>
        <h3 className="my-4">
          <b>1. Login</b>
        </h3>
      </div>

      <div className="full-width-inner-section gray-bg">
        <Label text="Old" textColor="text-white" bgColor="bg-gray-400" />
        <img className="full-width-img" src={`${imageBaseUrl}OldLogin.png`} alt="Old Login" />
        <p>
          Users will not know whether their login equipment is successfully
          detected before pressing the login button.
        </p>
      </div>
      <div className="full-width-inner-section">
        <Label text="New" textColor="" bgColor="bg-sky-100" />
        <img className="full-width-img" src={`${imageBaseUrl}NewLogin.png`} alt="New Login" />
        <p>
          Since the Bureau of Labor Insurance is going to support different ways
          to log in, we enable users to choose a suitable option based on the
          login equipment they have. Besides, the filling fields are disabled
          before the website successfully detected all the required login
          equipment. This will reduce users’ time wasted on filling in the
          fields again and again.
        </p>
      </div>

      <div className="mx-auto w-[70%] mt-8">
        <h3 className="my-4">
          <b>2. Inquiry Main Page</b>
        </h3>
      </div>
      <div className="full-width-inner-section gray-bg">
        <Label text="Old" textColor="text-white" bgColor="bg-gray-400" />
        <img className="full-width-img" src={`${imageBaseUrl}OldInquiry.png`} alt="old inquiry" />
        <p>
          The dropdown list is shown when hovering, which is not friendly for
          the website’s elder users since they are used to clicking buttons.
          Besides, the nested display and small service titles add to the
          difficulty when searching for a service.
        </p>
      </div>
      <div className="full-width-inner-section">
        <Label text="New" textColor="" bgColor="bg-sky-100" />
        <img className="full-width-img" src={`${imageBaseUrl}NewInquiry.png`} alt="new inquiry" />
        <p>
          To shorten user’s time spend searching for a service, we use a side
          menu with cards showing each service in the main space.
        </p>
      </div>

      <div className="mx-auto w-[70%] mt-8">
        <h3 className="my-4">
          <b>3. Qualification Check</b>
        </h3>
      </div>
      <div className="full-width-inner-section gray-bg">
        <Label text="Old" textColor="text-white" bgColor="bg-gray-400" />
        <img
          className="full-width-img"
          src={`${imageBaseUrl}OldQualification.png`}
          alt="Old Qualification"
        />
        <p>
          On the current website, the agreement contains many important details
          like rules about qualification. However, most users will not read the
          content. They may end up finishing the whole application process but
          later found out they were not qualified.
        </p>
      </div>
      <div className="full-width-inner-section">
        <Label text="New" textColor="" bgColor="bg-sky-100" />
        <img
          className="full-width-img"
          src={`${imageBaseUrl}NewQualification.png`}
          alt="New Qualification"
        />
        <p>
          As users may not be sure of whether they are qualified to apply for a
          service, we added a qualification check helper before each
          application.
        </p>
      </div>

      <div className="mx-auto w-[70%] mt-8">
        <h3 className="my-4">
          <b>4. Application Process</b>
        </h3>
      </div>
      <div className="full-width-inner-section">
        <Label text="New" textColor="" bgColor="bg-sky-100" />
        <img
          className="full-width-img"
          src={`${imageBaseUrl}NewApplicationProcess.png`}
          alt="New Application Process"
        />
        <p>
          On the current website, users have no clues about the progress after
          applying for a service. They will only receive an official letter if
          their application was declined. As users want to know at which step
          their application is, we designed a new page to disclose the dates
          about when the status of the application has been changed.
        </p>
      </div>

      <div className="section">
        <h2>Result</h2>
        <p>
          SUS usability score of our redesign: <b>85.94</b> (score of the
          current website: 61.25)
          <br />
          <br />
          In the end, our new website was showered with compliments on its clear
          interface and simplified operation. We also wrote a detailed report to
          give the Bureau of Labor Insurance suggestions on how their e-service
          platform can become more user-friendly.
        </p>
      </div>

      <div className="section">
        <h2>Reflection</h2>
        {
          reflections.map((reflection, i) => 
          <Reflection
            key={`reflection-${i}`}
            imgUrl={reflection.imgUrl}
            title={reflection.title}
            detail={reflection.detail}
          />)
        }
      </div>
      <NavLink pageUrl="/Work/ARLens" project="AR Contact Lens Wearing App" />
    </div>
  );
}
