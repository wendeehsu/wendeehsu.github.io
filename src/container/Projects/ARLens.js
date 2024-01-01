import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import { NavLink, Banner } from "../../components";
import { GApageView } from "../../ga.js";

export default function ARLens() {
  useEffect(() => {
    GApageView("Work/ARLens", "AR Lens");
  }, []);

  return (
    <div>
      <Banner
        imgUrl="/images/project2-cover.png"
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
        <h5>MY ROLE</h5>
        <p>Frontend Engineer</p>
      </div>

      <div className="section">
        <h5>MY TEAMMATES</h5>
        <p>
          <a href="https://www.linkedin.com/in/timmatt-lee/" target="_blank">
            Timmatt Lee
          </a>{" "}
          - Project Manager
          <br />
          <a
            href="https://www.linkedin.com/in/%E5%AE%9C%E8%87%BB-%E4%BD%95-90a726199/"
            target="_blank"
          >
            I-Chen Ho
          </a>{" "}
          - Computer Vision Algorithm Developer, Backend Engineer
          <br />
        </p>
      </div>

      <div className="section">
        <h5>TECHNIQUE</h5>
        <p>
          iOS app <br />
          Programming language: Swift and Objective C++
        </p>
      </div>

      <div className="section">
        <h5>TIMEFRAME</h5>
        <p>10 months</p>
      </div>

      <div className="section">
        <h5>BACKGROUND</h5>
        <p>
          Formosa Optical, the owner of this project, planned to create an AR
          color contact lens wearing app to assist customers to choose a lens.
          The app is designed for iPad6 because each of their stores has at
          least one iPad6. They finished designing the entire app, including the
          user interface of each page and the user flow. With a limited budget,
          they contacted us, a group of three students, to develop this app.
        </p>
        <div className="row justify-content-center">
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Background1.png"
            />
            <div>
              <p className="gray-text">
                The owner has finished designing all the interfaces and user
                flows.
              </p>
              <p>&#8594; They do not want us to modify their designs.</p>
            </div>
          </div>
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Background2.png"
            />
            <div>
              <p className="gray-text">
                The app is designed for iPad6 only because there is at least one
                iPad6 in each store.
              </p>
              <p>&#8594; The app does not need to fit different resolutions.</p>
            </div>
          </div>
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Background3.png"
            />
            <div>
              <p className="gray-text">The owner has a limited budget.</p>
              <p>
                &#8594; We cannot buy well-known software development kits, so
                we need to implement most of the algorithm on our own.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h5>PROCESS OVERVIEW</h5>
        <img className="full-width-img" src="/images/AR/Process.png" />
      </div>

      <div className="section">
        <h5>DEVELOP PROCESS</h5>

        {/* ---- 1. Develop Len-wearing Algorithm ---- */}
        <p className="secondary-title">1. Develop Len-wearing Algorithm</p>
        <p className="section-subtitle pink-text">Restriction</p>
        <p>
          We should seek an offline approach on iPad 6 to imitate the real
          experience of trying on a color contact lens.
        </p>
        <div className="row justify-content-center">
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Restriction1.png"
            />
            <p className="col text-center gray-text">
              iPad6 does not have a true depth camera that natively captures
              face data.{" "}
            </p>
          </div>
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Restriction2.png"
            />
            <p className="col text-center gray-text">
              Apple’s ARkit cannot produce a contact lens wearing experience
              that is true enough.
            </p>
          </div>
          <div className="col">
            <img
              className="restriction-icon"
              src="/images/AR/Restriction3.png"
            />
            <p className="col text-center gray-text">
              The contact lens wearing service needs to be executable offline.
            </p>
          </div>
        </div>

        <p className="section-subtitle pink-text">Solution</p>
        <p>
          We bought an offline executable software development kit that captures
          face data perfectly, combining it to implement the customized
          Len-wearing algorithm with OpenCV, an open-source computer vision
          library.
        </p>
        <div className="row justify-content-center">
          <video src="/images/AR/mock.mp4" autoPlay="true" loop="true" />
        </div>
        <p className="gray-text">
          The len-wearing algorithm was developed on a Windows 10 laptop by my
          teammate Jenny Ho using C++, while I was in charge of reproducing it
          on iPad 6.
        </p>
      </div>

      {/* ---- 2. Develop iOS App ---- */}
      <div className="section">
        <p className="secondary-title">2. Develop iOS App</p>
        <p>
          After we finished the main algorithm, Formosa Optical, the owner of
          this project, sent us the user interface design for each page. When
          developing the iOS app, we encountered several technical problems as
          listed below.
        </p>
        <img className="full-width-img" src="/images/AR/DevelopTable.png" />
      </div>

      <div className="full-width-section">
        <h5>
          <b>FINAL PRODUCT</b>
        </h5>
        <p className="section-subtitle pink-text">Scenario</p>
        <p>
          At the store, the staff will login with his/her account. They will
          later let customers try the contact lens wearing service.
        </p>
        <div className="full-width-inner-section gray-bg">
          <img className="full-width-img" src="/images/AR/FinalProduct.png" />
        </div>
      </div>

      <div className="section">
        <h5>RESULT</h5>
        <p>
          Our app is able to render a color contact lens on users’ iris in
          almost real-time. Customers can try on more than <b>10 lenses</b> in
          one minute.
        </p>
      </div>

      <div className="section">
        <h5>REFLECTION</h5>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/AR/Reflection3.png"
          />
          <div className="col">
            <p className="bold-text">
              1. We should only start a project when the contract is completed
            </p>
            <p>
              Having no experience in working for people outside the school, our
              team jumped into development before any contract was done. We
              later realized the owner kept demanding new functions and
              requirements during our cooperation. The suffering of project
              creeping was real, using up extra time and effort but not
              receiving any additional payments. From this experience, we found
              out how important a contract was as it will serve as protection
              under this situation.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/AR/Reflection2.png"
          />
          <div className="col">
            <p className="bold-text">
              2. Don’t be afraid to show “I need help”
            </p>
            <p>
              After my team member finished the computer vision algorithm using
              C++, I was in charge of reproducing it on iOS. Having little
              knowledge of computer vision and iOS development, I struggled for
              months but still in vain. After I finally decided to ask my team
              members for help and posted questions on the developer’s forum,
              issues were easily solved. I not only learned how computer vision
              worked but was also able to solve similar questions posted on the
              forum. I thus realize most people are willing to help, so I
              shouldn’t keep problems on my shoulders for such a long time. If I
              reached out for help earlier, our team could have saved months of
              development time.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/AR/Reflection1.png"
          />
          <div className="col">
            <p className="bold-text">3. It is important to ask for resources</p>
            <p>
              Since I do not have an iPad6, the device that will run our final
              product, I borrowed an iPad mini and tested my code on it.
              However, I later realized the capacity and screen resolution are
              different between these two devices. Some technical problems only
              showed up in iPad6, leaving me clueless to reproduce them on iPad
              mini. After our team finally asked Formosa Optical to lend us an
              iPad6, I spent extra weeks later on troubleshooting. In this
              experience, I learned that after a project starts, the first step
              should be listing and asking for the resources we need.
            </p>
          </div>
        </div>
      </div>
      <NavLink pageUrl="/Work/AIXray" project="AI Image Classification" />
    </div>
  );
}
