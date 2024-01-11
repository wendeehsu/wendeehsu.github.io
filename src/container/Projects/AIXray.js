import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import { NavLink, Banner, Role, Reflection } from "../../components";
import { GApageView } from "../../ga.js";

export default function AIXray() {
  useEffect(() => {
    GApageView("Work/AIXray", "AI Xray");
  }, []);

  const imageBaseUrl = "/images/Xray/";

  const roleTasks = [
    {
      role: "Machine Learning Engineer",
      tasks: ["Image Classification Model Training"],
    },
    {
      role: "Backend Engineer",
      tasks: ["Flask API, Google Cloud Storage"],
    },
  ];

  const reflections = [
    {
      imgUrl: imageBaseUrl + "Reflection1.png",
      title:
        "1. Behind each excellent result, there is always a lot of tiring tasks to do",
      detail:
        "Same as many outsiders, in the past, I was fascinated by the incredible achievements done by artificial intelligence. However, after being a machine learning engineer, I realized that 80 percent of my time was spent on collecting and labeling data. This step is tedious and exhausted, but it is the first and most important step in machine learning. Otherwise, we will face a rubbish-in-rubbish-out situation when there is not enough training data. I believe this spirit applies to every field. It is those who can bear the hard-works that paves their way to excellency.",
    },
    {
      imgUrl: imageBaseUrl + "Reflection2.png",
      title:
        "2. Technology is powerful only when it is applied in the right place",
      detail:
        "At the beginning of this project, we spent many weeks exploring how AI can be applied in the dental industry. However, after conducting several interviews with dentists, we figured out none of the applications meet their needs. Fortunately, the idea of using AI to sort through images is also found during the conversation with dentists. As a result, I think we may start with “What is the problem?” instead of “What solutions can we provide?” in future works. It will not only save us time but also maximize the impact technology can bring.",
    },
    {
      imgUrl: imageBaseUrl + "Reflection3.png",
      title:
        "3. AI is a black box, making it hard to figure out how to improve its performance",
      detail:
        "After training our artificial neural network, we will look at the result, discussing how its performance can be improved. In a traditional human-constructed algorithm, this part is simple because we only need to trace the code line by line. When it comes to AI, we do not know how it derives the result since we can only control the input. The rest remains a black box. As a result, performance improvement turns out to be more like a wild guess. For example, we may randomly change some parameters or studying other research to get more ideas. The fact that results obtained by AI are not explainable is the hardest part of machine learning.",
    },
  ];

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
        <Role roleTasks={roleTasks} textClass="blue-text" />
      </div>

      <div className="section">
        <h2>My Teammates</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/zern.r"
              target="_blank"
              rel="noreferrer"
            >
              Zern Rau
            </a>{" "}
            - Frontend Engineer, Image Labeler
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100001377161319"
              target="_blank"
              rel="noreferrer"
            >
              Egg Lee
            </a>{" "}
            - Image Labeler
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Process Overview</h2>
        <img src={`${imageBaseUrl}Process.png`} alt="process" />
      </div>

      <div className="section">
        <h2>Develop Process</h2>

        {/* ---- 1. Define Problem ---- */}
        <h3>1. Define Problem</h3>
        <p className="section-subtitle blue-text">Observation</p>
        <p>
          We went to clinics to observe how dentists interact with patients.
          Later, we found out that whenever a dentist is explaining the
          patient’s teeth condition, he needs to first open the folder
          containing many unordered tooth images, manually sort through these
          images, and later select those that can help the patient understand
          the teeth’s condition better.
        </p>
        <div className="justify-center">
          <img
            className="md:w-[60%] mx-auto my-4"
            src={`${imageBaseUrl}ProblemProcess.png`}
            alt="open, sort, explain"
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
        <div className="p-4 mb-4 rounded-lg bg-sky-50">
          <p>
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
        <h3>2. Develop the Image Classification Algorithm</h3>
        <p className="section-subtitle blue-text">Define the classes</p>
        <p>
          Since we want the machine to learn how to classify images on its own,
          we have to teach it first. We start with defining mutually exclusive
          classes, in which we want an image to be categorized.
        </p>
        <div className="justify-center">
          <img
            className="md:w-[50%] mx-auto my-4"
            src={`${imageBaseUrl}XrayTemplate.png`}
            alt="template"
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
        <div className="justify-center">
          <img
            className="md:w-[60%] mx-auto my-4"
            src={`${imageBaseUrl}MLProcess.png`}
            alt="machine learning process"
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
        <h3>
          3. Developing the Backend Application Programming Interface (API)
        </h3>
        <p>
          After we finished training our machine learning algorithm, we could
          include the algorithm into our web application using Flask, a micro
          web framework written in Python. When the web front-end calls the API,
          our platform will then take that image as the input of our trained
          network and show the resulting prediction to the user.
        </p>
        <div className="justify-center">
          <video
            src={`${imageBaseUrl}Mock.mp4`}
            autoPlay="true"
            loop="true"
            alt="demo"
          />
        </div>
      </div>

      {/* ---- Problems encountered during Development  ---- */}
      <div className="section">
        <h3>Problems encountered during Development</h3>
        <img src={`${imageBaseUrl}DevelopTable.png`} alt="problems" />
      </div>

      <div className="section">
        <h2>
          <b>Final Product</b>
        </h2>
        <p>
          Dentists can open a folder and upload the patient’s x-ray images and
          have the images sorted.
        </p>
        <img src={`${imageBaseUrl}Product.png`} alt="product" />
      </div>

      <div className="section">
        <h2>Result</h2>
        <p>
          It only takes <b>0.2 seconds</b> with <b>94% accuracy</b> for our
          service to classify an image, while dentists need to spend 1 second
          per image before.
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
          />
        ))}
      </div>
      <NavLink
        pageUrl="/Work/PDOGS"
        project="Programming Design Online Grading System"
      />
    </div>
  );
}
