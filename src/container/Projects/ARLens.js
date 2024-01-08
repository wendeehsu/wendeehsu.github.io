import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import {
  NavLink,
  Banner,
  Role,
  Restriction,
  Reflection,
} from "../../components";
import { GApageView } from "../../ga.js";

export default function ARLens() {
  useEffect(() => {
    GApageView("Work/ARLens", "AR Lens");
  }, []);

  const imageBaseUrl = "/images/AR/";

  const roleTasks = [
    {
      role: "Frontend Engineer",
      tasks: [
        "iOS App Development, SQLite, Computer Vision Algorithm embedment",
      ],
    },
  ];

  const backgrounds = [
    {
      imgUrl: imageBaseUrl + "Background1.png",
      need: "The owner has finished designing all the interfaces and user flows.",
      solution: "They do not want us to modify their designs.",
    },
    {
      imgUrl: imageBaseUrl + "Background2.png",
      need: "The app is designed for iPad6 only because there is at least one iPad6 in each store.",
      solution: "The app does not need to fit different resolutions.",
    },
    {
      imgUrl: imageBaseUrl + "Background3.png",
      need: "The owner has a limited budget.",
      solution:
        "We cannot buy well-known software development kits, so we need to implement most of the algorithm on our own.",
    },
  ];

  const restrictions = [
    {
      imgUrl: imageBaseUrl + "Restriction1.png",
      need: "iPad6 does not have a true depth camera that natively captures face data.",
    },
    {
      imgUrl: imageBaseUrl + "Restriction2.png",
      need: "Apple's ARkit cannot produce a contact lens wearing experience that is true enough.",
    },
    {
      imgUrl: imageBaseUrl + "Restriction3.png",
      need: "The contact lens wearing service needs to be executable offline.",
    },
  ];

  const reflections = [
    {
      imgUrl: imageBaseUrl + "Reflection3.png",
      title: "1. We should only start a project when the contract is completed",
      detail:
        "Having no experience in working for people outside the school, our team jumped into development before any contract was done. We later realized the owner kept demanding new functions and requirements during our cooperation. The suffering of project creeping was real, using up extra time and effort but not receiving any additional payments. From this experience, we found out how important a contract was as it will serve as protection under this situation.",
    },
    {
      imgUrl: imageBaseUrl + "Reflection2.png",
      title: "2. Don’t be afraid to show “I need help”",
      detail:
        "After my team member finished the computer vision algorithm using C++, I was in charge of reproducing it on iOS. Having little knowledge of computer vision and iOS development, I struggled for months but still in vain. After I finally decided to ask my team members for help and posted questions on the developer’s forum, issues were easily solved. I not only learned how computer vision worked but was also able to solve similar questions posted on the forum. I thus realize most people are willing to help, so I shouldn’t keep problems on my shoulders for such a long time. If I reached out for help earlier, our team could have saved months of development time.",
    },
    {
      imgUrl: imageBaseUrl + "Reflection1.png",
      title: "3. It is important to ask for resources",
      detail:
        "Since I do not have an iPad6, the device that will run our final product, I borrowed an iPad mini and tested my code on it. However, I later realized the capacity and screen resolution are different between these two devices. Some technical problems only showed up in iPad6, leaving me clueless to reproduce them on iPad mini. After our team finally asked Formosa Optical to lend us an iPad6, I spent extra weeks later on troubleshooting. In this experience, I learned that after a project starts, the first step should be listing and asking for the resources we need.",
    },
  ];

  return (
    <div>
      <Banner
        imgUrl="/images/project2-cover-center.png"
        title="AR Contact Lens Wearing App"
        company="Formosa Optical"
        period="March 2019 - January 2020"
      />

      <div className="section">
        Since users are not able to try on the color contact lens before buying,
        their hesitation about whether the color suits them may set them back
        while purchasing. As a result, we cooperated with Formosa Optical, one
        of the largest glass retailer in Taiwan, to develop an iOS app that
        enables users to virtually wear color contact lens.
      </div>

      <div className="section">
        <Role roleTasks={roleTasks} textClass="dark-pink-text" />
      </div>

      <div className="section">
        <h2>My Teammates</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/timmatt-lee/"
              target="_blank"
              rel="noreferrer"
            >
              Timmatt Lee
            </a>{" "}
            - Project Manager
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/%E5%AE%9C%E8%87%BB-%E4%BD%95-90a726199/"
              target="_blank"
              rel="noreferrer"
            >
              I-Chen Ho
            </a>{" "}
            - Computer Vision Algorithm Developer, Backend Engineer
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Background</h2>
        <p>
          Formosa Optical, the owner of this project, planned to create an AR
          color contact lens wearing app to assist customers to choose a lens.
          The app is designed for iPad6 because each of their stores has at
          least one iPad6. They finished designing the entire app, including the
          user interface of each page and the user flow. With a limited budget,
          they contacted us, a group of three students, to develop this app.
        </p>
        <div className="sm:flex flex-wrap justify-center">
          {backgrounds.map((background, i) => (
            <Restriction
              key={`background-${i}`}
              imgUrl={background.imgUrl}
              need={background.need}
              solution={background.solution}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Process Overview</h2>
        <img src={`${imageBaseUrl}Process.png`} alt="process" />
      </div>

      <div className="section">
        <h2>Develop Process</h2>

        {/* ---- 1. Develop Len-wearing Algorithm ---- */}
        <h3>1. Develop Len-wearing Algorithm</h3>
        <h4 className="dark-pink-text">Restriction</h4>
        <p>
          We should seek an offline approach on iPad 6 to imitate the real
          experience of trying on a color contact lens.
        </p>
        <div className="sm:flex flex-wrap justify-center">
          {restrictions.map((restriction, i) => (
            <Restriction
              key={`restriction-${i}`}
              imgUrl={restriction.imgUrl}
              need={restriction.need}
            />
          ))}
        </div>

        <h4 className="dark-pink-text">Solution</h4>
        <p>
          We bought an offline executable software development kit that captures
          face data perfectly, combining it to implement the customized
          Len-wearing algorithm with OpenCV, an open-source computer vision
          library.
        </p>
        <div className="justify-center">
          <video
            src={`${imageBaseUrl}mock.mp4`}
            autoPlay="true"
            loop="true"
            alt="demo"
          />
        </div>
        <p className="gray-text">
          The len-wearing algorithm was developed on a Windows 10 laptop by my
          teammate Jenny Ho using C++, while I was in charge of reproducing it
          on iPad 6.
        </p>
      </div>

      {/* ---- 2. Develop iOS App ---- */}
      <div className="section">
        <h3>2. Develop iOS App</h3>
        <p>
          After we finished the main algorithm, Formosa Optical, the owner of
          this project, sent us the user interface design for each page. When
          developing the iOS app, we encountered several technical problems as
          listed below.
        </p>
        <img
          src={`${imageBaseUrl}DevelopTable.png`}
          alt="problems and solutions"
        />
      </div>

      <div className="section">
        <h2 className="my-4">Final Product</h2>
        <p>
          At the store, the staff will login with his/her account. They will
          later let customers try the contact lens wearing service.
        </p>
        <img src={`${imageBaseUrl}FinalProduct.png`} alt="Final Product" />
      </div>

      <div className="section">
        <h2>Result</h2>
        <p>
          Our app is able to render a color contact lens on users’ iris in
          almost real-time. Customers can try on more than <b>10 lenses</b> in
          one minute.
        </p>
      </div>

      <div className="section">
        <h2>Reflection</h2>
        {reflections.map((reflection, i) => (
          <Reflection
            key={`reflection-${i}`}
            imgUrl={reflection.imgUrl}
            title={reflection.title}
            detail={reflection.detail}
            textColor="dark-pink-text"
          />
        ))}
      </div>
      <NavLink pageUrl="/Work/AIXray" project="AI Image Classification" />
    </div>
  );
}
