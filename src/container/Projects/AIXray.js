import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import { NavLink, Banner } from "../../components";
import { GApageView } from "../../ga.js";

export default function AIXray() {
  useEffect(() => {
    GApageView("Work/AIXray", "AI Xray");
  }, []);

  return (
    <div>
      <Banner
        imgUrl="/images/project3-cover.png"
        title="AI Image Classification"
        company="Dentall"
        period="March 2020 - October 2020"
      />

      <div className="section">
        Nowadays, dentists need to manually sort through many unordered images,
        limiting the time and quality spent on explaining the tooth condition to
        the patient. As a result, we decide to automize this tedious work with
        machine learning. In the end, our service successfully reduces dentists'
        time on classifying one image from 1 second to 0.2 seconds, helping
        dentists to focus more on their patients.
      </div>

      <div className="section">
        <h5>MY ROLE</h5>
        <p>Machine Learning Engineer, Backend Engineer</p>
      </div>

      <div className="section">
        <h5>MY TEAMMATES</h5>
        <p>
          <a href="https://www.facebook.com/zern.r" target="_blank">
            Zern Rau
          </a>{" "}
          - Frontend Engineer, Image Labeler
          <br />
          <a
            href="https://www.facebook.com/profile.php?id=100001377161319"
            target="_blank"
          >
            Egg Lee
          </a>{" "}
          - Image Labeler
          <br />
        </p>
      </div>

      <div className="section">
        <h5>TECHNIQUE</h5>
        <p>
          Programming language: Python
          <br />
          Convolutional Neural Network
          <br />
          Flask backend api
        </p>
      </div>

      <div className="section">
        <h5>PROCESS OVERVIEW</h5>
        <img className="full-width-img" src="/images/Xray/Process.png" />
      </div>

      <div className="section">
        <h5>DEVELOP PROCESS</h5>

        {/* ---- 1. Define Problem ---- */}
        <p className="secondary-title">1. Define Problem</p>
        <p className="section-subtitle blue-text">Observation</p>
        <p>
          We went to clinics to observe how dentists interact with patients.
          Later, we found out that whenever a dentist is explaining the
          patient’s teeth condition, he needs to first open the folder
          containing many unordered tooth images, manually sort through these
          images, and later select those that can help the patient understand
          the teeth’s condition better.
        </p>
        <div className="row justify-content-center">
          <img
            className="center-img-space-3"
            src="/images/Xray/ProblemProcess.png"
          />
        </div>
        <p>
          However, dentists have limited time on treating each patient.
          Therefore, many dentists will explain the teeth’s condition while
          sorting and selecting images. The time spent on organizing images will
          reduce the quality for patients to understand what dentists tell them.
          These patients may be confused, ending up asking the same questions
          repeatedly.
        </p>
      </div>

      <div className="section">
        <p className="section-subtitle blue-text">Our Focus</p>
        <div className="div-box" style={{ margin: "1.5rem 0rem" }}>
          <p className="vertical-center">
            We want to optimize the image sorting step to enhance the quality
            for dentists to explain patients’ teeth condition, helping them
            focus more on the interaction with patients.
          </p>
        </div>
        <p>
          As the technique of using artificial intelligence to classify images
          is fully developed, it shows a guaranteeing accuracy in other medical
          applications such as the classification of Alzheimer’s disease with
          brain tissue images. Hence, we decided to develop our own AI service
          aiming to sort through images automatically.
        </p>
      </div>

      {/* ---- 2. Develop the Image Classification Algorithm ---- */}
      <div className="section">
        <p className="secondary-title">
          2. Develop the Image Classification Algorithm
        </p>
        <p className="section-subtitle blue-text">Define the classes</p>
        <p>
          Since we want the machine to learn how to classify images on its own,
          we have to teach it first. We start with defining mutually exclusive
          classes, in which we want an image to be categorized.
        </p>
        <div className="row justify-content-center">
          <img
            className="col-5"
            style={{ margin: "1.5rem 0rem" }}
            src="/images/Xray/XrayTemplate.png"
          />
        </div>
        <p className="gray-text text-center">
          The x-ray template with each position’s corresponding class name
        </p>
      </div>

      <div className="section">
        <p className="section-subtitle blue-text">Gather Data</p>
        <p>
          The rule of thumb in machine learning is that the more data we have,
          the higher possibility the algorithm can find the feature particular
          to each class. The variety of images in each class will also
          contribute to the robustness of the final prediction. As a result, we
          cooperated with several dentists and Taipei Medical University to
          derive x-ray images, recently having <b>383 ~ 1525 images</b> in each
          class.
        </p>
      </div>

      <div className="section">
        <p className="section-subtitle blue-text">Machine Learning</p>
        <div className="row justify-content-center">
          <img
            className="center-img-space-3"
            src="/images/Xray/MLProcess.png"
          />
        </div>
        <p>
          As images are transformed into numerical matrices based on their
          pixel-wise RGB values, the machine will take the matrices as input. We
          later use convolutional neural networks to extract features in these
          transformed matrices by performing specific mathematical operations
          such as convolution and pooling. In the training process, the network
          will update the prediction result of an image after comparing it with
          the image’s ground truth. After updating several times, the output of
          the network will be a class along with the possibility that the given
          image belongs to that class.
        </p>
      </div>

      {/* ---- 3. Develope the Backend Application Programming Interface (API) ---- */}
      <div className="section">
        <p className="secondary-title">
          3. Developing the Backend Application Programming Interface (API)
        </p>
        <p>
          After we finished training our machine learning algorithm, we could
          include the algorithm into our web application using Flask, a micro
          web framework written in Python. When the web front-end calls the API,
          our platform will then take that image as the input of our trained
          network and show the resulting prediction to the user.
        </p>
        <div className="row justify-content-center">
          <video src="/images/Xray/Mock.mp4" autoPlay="true" loop="true" />
        </div>
      </div>

      {/* ---- Problems encountered during Development  ---- */}
      <div className="section">
        <p className="secondary-title">
          Problems encountered during Development
        </p>
        <img className="full-width-img" src="/images/Xray/DevelopTable.png" />
      </div>

      <div className="full-width-section">
        <h5>
          <b>FINAL PRODUCT</b>
        </h5>
        <p className="section-subtitle blue-text">Scenario</p>
        <p>
          Dentists can open a folder and upload the patient’s x-ray images and
          have the images sorted.
        </p>
        <div className="full-width-inner-section gray-bg">
          <img className="full-width-img" src="/images/Xray/Product.png" />
        </div>
      </div>

      <div className="section">
        <h5>RESULT</h5>
        <p>
          It only takes <b>0.2 seconds</b> with <b>94% accuracy</b> for our
          service to classify an image, while dentists need to spend 1 second
          per image before.{" "}
        </p>
      </div>

      <div className="section">
        <h5>REFLECTION</h5>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/Xray/Reflection1.png"
          />
          <div className="col">
            <p className="bold-text">
              1. Behind each excellent result, there is always a lot of tiring
              tasks to do{" "}
            </p>
            <p>
              Same as many outsiders, in the past, I was fascinated by the
              incredible achievements done by artificial intelligence. However,
              after being a machine learning engineer, I realized that 80
              percent of my time was spent on collecting and labeling data. This
              step is tedious and exhausted, but it is the first and most
              important step in machine learning. Otherwise, we will face a
              rubbish-in-rubbish-out situation when there is not enough training
              data. I believe this spirit applies to every field. It is those
              who can bear the hard-works that paves their way to excellency.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/Xray/Reflection2.png"
          />
          <div className="col">
            <p className="bold-text">
              2. Technology is powerful only when it is applied in the right
              place
            </p>
            <p>
              At the beginning of this project, we spent many weeks exploring
              how AI can be applied in the dental industry. However, after
              conducting several interviews with dentists, we figured out none
              of the applications meet their needs. Fortunately, the idea of
              using AI to sort through images is also found during the
              conversation with dentists. As a result, I think we may start with{" "}
              <b>
                “What is the problem?” instead of “What solutions can we
                provide?”
              </b>{" "}
              in future works. It will not only save us time but also maximize
              the impact technology can bring.
            </p>
          </div>
        </div>
        <div className="row">
          <img
            className="reflection-icon col"
            src="/images/Xray/Reflection3.png"
          />
          <div className="col">
            <p className="bold-text">
              3. AI is a black box, making it hard to figure out how to improve
              its performance{" "}
            </p>
            <p>
              After training our artificial neural network, we will look at the
              result, discussing how its performance can be improved. In a
              traditional human-constructed algorithm, this part is simple
              because we only need to trace the code line by line. When it comes
              to AI, we do not know how it derives the result since we can only
              control the input. The rest remains a black box. As a result,
              performance improvement turns out to be more like a wild guess.
              For example, we may randomly change some parameters or studying
              other research to get more ideas. The fact that results obtained
              by AI are not explainable is the hardest part of machine learning.
            </p>
          </div>
        </div>
      </div>
      <NavLink
        pageUrl="/Work/PDOGS"
        project="Programming Design Online Grading System"
      />
    </div>
  );
}
