import React, { useEffect } from "react";
import "../../css/Projects/shared.css";
import "../../css/Projects/colorTuning.css";
import { NavLink, Banner, Role, Number } from "../../components";
import { GApageView } from "../../ga.js";

export default function ColorTuning() {
  const imagBasePath = "/images/ColorTuning/";
  const roleTasks = [
    {
      role: "UX researcher and designer",
      tasks: [
        "interview, wireframe, prototype, A/B testing, usability testing",
      ],
    },
    {
      role: "Fullstack engineer",
      tasks: ["Frontend: Angular.js", "Backend: Python"],
    },
  ];

  const results = [
    {
      figure: 7,
      unit: "Iterations",
      detail: ["3 versions of lo-fi prototype", "4 versions of product"],
    },
    {
      figure: 16,
      unit: "User Testings",
      detail: ["Each version is tested by 2 or 3 users."],
    },
    {
      figure: 12,
      unit: "Weeks",
      detail: [
        "4 weeks on research & design",
        "8 weeks on development & testing",
      ],
    },
  ];

  useEffect(() => {
    GApageView("Work/ColorTuning", "Color Tuning");
  }, []);

  return (
    <div>
      <Banner
        imgUrl="/images/project5-cover.png"
        title="Color Optimization Tuning Tool"
        company="Google"
        period="May 2023 - August 2023"
      />

      <div className="section">
        Color tuning engineers optimize the colors displayed on different
        devices. In this project, I built a highly interactive website that
        results in a<b className="blue-text"> 99% improvement</b> in the time it
        takes to initiate tuning settings for new devices.
      </div>

      <div className="section">
        <Role roleTasks={roleTasks} textClass="blue-text" />
      </div>

      <div className="section">
        <h2>Background</h2>
        <p>
          When the photograph closely resembles what people saw, it strengthens
          the emotional connection to the scene more vividly. Hence, the color
          optimization team is in charge of removing potential differences
          between the actual object and the one displayed on a device.
        </p>
        <img
          className="md:w-[70%] mx-auto my-4"
          src={`${imagBasePath}background.png`}
          alt="color looks different than reality on the device without color optimization"
        />
        <p>
          To fine-tune the color on a device, the team first measures the
          difference between its colors and those of a reference device, which
          has already been optimized for accurate color. Based on these
          comparisons, they adjust settings on the target device to bring its
          colors closer to the reference standard.
        </p>
        <img
          className="md:w-[70%] mx-auto my-4"
          src={`${imagBasePath}tuningFlow.png`}
          alt="Tuning flow"
        />
      </div>

      <div className="section">
        <h2>The Challenge</h2>
        <p>
          New devices are launched<b> every 3 months</b>. For each device
          launched, color tuning engineers needs to follow the process above to
          initiate the settings for a new device. Nevertheless, they do not have
          an efficient way right now.
        </p>
        <p className="my-4 blue-text text-center">
          "I want to compare the color changes among different devices. <br />
          However, simply looking up the value of each color already costs me{" "}
          <b>1~3 days</b>."
        </p>
        <p>
          To learn their current process of initiating tuning settings and
          figure out how it can be improved, I<b> interviewed</b> 2 senior
          tuning engineers and found<b> 3 main problems</b>.
        </p>
      </div>

      <div className="section">
        <h2>Why is the Current Process so Inefficient?</h2>
        <div>
          <p className="section-subtitle blue-text">
            1. Manual Color Value Search
          </p>
          <div className="flex flex-wrap">
            <p className="flex-1">
              Color information is embedded in each picture, but engineers do
              not have the tools to extract the values. As a result, they must
              manually look up the numbers, which is very time-consuming.
            </p>
            <img
              className="sm:w-[30%]"
              src={`${imagBasePath}checker.png`}
              alt="color information is embedded in each picture"
            />
          </div>
        </div>
        <div>
          <p className="section-subtitle blue-text">
            2. Lack of Systematic Analysis
          </p>
          <div className="flex flex-wrap">
            <img
              className="sm:w-[30%]"
              src={`${imagBasePath}system-colors.png`}
              alt="same hue can look different under different brightness"
            />
            <p className="flex-1">
              There are many factors that can affect a color's final appearance.
              Without a systematic analyzing approach, the engineers rely
              heavily on trial and error, which is often biased and inaccurate.
            </p>
          </div>
        </div>
        <div>
          <p className="section-subtitle blue-text">
            3. Error-prone data manipulation
          </p>
          <p>
            The color optimization team opens the setting files in a text editor
            to update values one by one. As the file can be more than 1000
            lines, this is a tedious and error-prone process. The team often
            make mistakes that require extra time to fix.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>User Archetypes</h2>
        <div className="flex flex-wrap">
          <img
            className="py-0 sm:w-[15%]"
            src={`${imagBasePath}captain.png`}
            alt="captain"
          />
          <div className="flex-1">
            <h3 className="bold-text">Captain</h3>
            <p className="blue-text italic">
              "To reach our destination, I need a map, a compass, a telescope,
              and food for 10 days."
            </p>
            <ul>
              <li>
                <b>Experienced</b> color tuning engineers
              </li>
              <li>
                Prefer <b>large amounts of data</b> because they clearly know
                how to combine different numbers to achieve their goals.
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="flex flex-wrap">
          <div className="flex-1">
            <h3 className="bold-text">Sailor</h3>
            <p className="blue-text italic">
              "Let me try the tools on the ship. This map will be helpful! Oh,
              they have a compass! Great!"
            </p>
            <ul>
              <li>
                <b>Junior</b> color tuning engineers
              </li>
              <li>
                They check what data is provided first and try to combine tools
                later. They can be{" "}
                <b>overwhelmed if there is too much information</b> shown at the
                same time.
              </li>
            </ul>
          </div>
          <img
            className="py-0 sm:w-[15%]"
            src={`${imagBasePath}sailor.png`}
            alt="sailor"
          />
        </div>
      </div>

      <div className="section">
        <div className="p-4 rounded-lg bg-sky-50">
          <p className="text-center bold-text">
            How might we create a tool to generate new tuning settings for new
            devices
            <br /> in an{" "}
            <b className="blue-text">
              efficient, insightful, and flexible{" "}
            </b>{" "}
            way?
          </p>
        </div>
      </div>

      <div className="section">
        <div className="flex flex-wrap mb-4">
          {results.map((result, i) => (
            <Number
              key={`result-${i}`}
              figure={result.figure}
              unit={result.unit}
              detail={result.detail}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Design Iterations</h2>
        <p>
          In this project, I invited color tuning engineers with different
          experience levels to each round of usability testings to understand if
          their needs are fulfilled by the design.
        </p>
        <img
          className="my-4 px-0"
          src={`${imagBasePath}core-concept.png`}
          alt="User uploads images and setting files. Next, the tool displays color value changes extracted by computer vision. Lastly, user adjusts the reference device's settings to fit the target device."
        />
        <p className="gray-text">
          *As I signed the NDA, all screenshots are only used to demonstrate the
          functionality. The user interface and data are not the same as the
          actual web tool.
        </p>

        <h3>
          Wireframe 1
        </h3>
        <div className="md:flex">
          <img
            className="md:pl-0 md:w-[50%]"
            src={`${imagBasePath}wireframeV1.png`}
            alt="wireframe version 1"
          />
          <div className="flex-1 sm:ml-2">
            <p className="blue-text mt-4 mb-1">
              "This design only allows us to upload one image pair, but we
              actually compare colors in multiple pairs of images."
            </p>
            <p>
              &#x2192; Engineers need to compare colors under
              <b> different conditions (derived from each image pair) </b>and
              adjust the setting file accordingly.
            </p>
          </div>
        </div>

        <h3>
          Wireframe 2
        </h3>
        <div className="md:flex">
          <div className="flex-1">
            <p>
              The line chart is the color values’ change calculated by the tool.
            </p>
            <p className="blue-text my-1">
              "The line charts help me understand if the changes are smooth.
              However, before knowing what region the new setting covers and
              whether it needs further adjustment, I won’t consider smoothness
              at this stage."
            </p>
            <p>
              &#x2192; Testees confirmed that the upload page now meet their
              needs better, but the chart can be improved since the new setting
              values for the target device is more important than smoothness
              among each color value.
            </p>
          </div>
          <div className="md:w-[50%]">
            <img
              className="sm:pt-0"
              src={`${imagBasePath}wireframeV2_1.png`}
              alt="upload page of wireframe version 2"
            />
            <img
              src={`${imagBasePath}wireframeV2_2.png`}
              alt="adjusting page of wireframe version 2"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h5>The final color optimization tuning tool</h5>
        <div>
          <p className="section-subtitle blue-text">
            1. Auto data extraction with systematic analysis
          </p>
          <p>
            After color tuning engineers upload images into the website, the
            website automatically extracts each color's information and displays
            it under different conditions. This drastically cuts down engineers'
            time to analyze color changing trends from <b>3 days to 1 hour</b>.
          </p>
          <img
            className="full-img"
            src={`${imagBasePath}condition_slider.gif`}
            alt="when switching conditions, the color extracted will be shown on the graph."
          />
        </div>
        <br />
        <div>
          <p className="section-subtitle blue-text">2. Realtime preview</p>
          <p>
            An engineer could spend up to a week finding the best value for a
            new device previously. With previewing the impact of number changes
            on settings in real time, the website now saves them up to{" "}
            <b>80% of the time</b>.
          </p>
          <img
            className="full-img"
            src={`${imagBasePath}live_render.gif`}
            alt="when dragging a point in one graph, the other graph will shown its corresponding effect on the tuning settings."
          />
        </div>
        <br />
        <div className="flex flex-wrap">
          <div className="w-[60%]">
            <p className="section-subtitle blue-text">
              3. Flexible interaction
            </p>
            <p>
              To service users with different information consumption behaviors,
              I added zoom-in functionality so people can focus on a specific
              part in each chart.{" "}
            </p>
          </div>
          <img
            className="zoom-img"
            src={`${imagBasePath}zoom.gif`}
            alt="Users can zoom in to a region of interest by dragging a bounding box on the graph."
          />
        </div>
      </div>

      <div className="section">
        <h5>RESULT</h5>
        <div className="flex flex-wrap">
          <div className="big-number-section">
            <b className="big-title blue-text">
              <b className="big-number">99</b>%
            </b>
            <p className="number-description">
              Reduction in value searching time
            </p>
          </div>
          <div className="big-number-section">
            <b className="blue-text big-number">32</b>
            <p className="number-description">
              Hours saved on optimizing initial parameters for a new device
            </p>
          </div>
          <div className="big-number-section">
            <b className="blue-text big-number">500+</b>
            <p className="number-description">Potential errors are prevented</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h5>REFLECTION</h5>
        <div className="flex flex-wrap">
          <div className="w-[60%]">
            <p className="section-subtitle blue-text">
              1. Create prototypes that communicate
            </p>
            <p>
              This is the first time I tried{" "}
              <b>Tableau to mimic my web data visualization plans</b> as a
              prototype. The fast and interactive graphs stimulated users to
              provide constructive feedback. This made me realize that the core
              of prototyping is to <b>foster understanding and communication</b>
              , regardless of the tool or approach used.
            </p>
          </div>
          <img
            className="zoom-img"
            src={`${imagBasePath}tableau.png`}
            alt="Use tableau for mimic data visualization outcome"
          />
        </div>
        <br />

        <p className="section-subtitle blue-text">
          2. Having knowledge of both design and development can make the
          project more efficient
        </p>
        <p>
          With limited time, I simultaneously performed design and development.
          When users came up with new ideas, I could switch to my engineer role
          to check their feasibility. If I encountered issues that I couldn't
          solve, I later built prototypes to present alternative solutions. This
          allowed me to efficiently and effectively test and validate the
          deliverables.
        </p>
        <img
          className="full-img"
          src={`${imagBasePath}workflow.png`}
          alt="My workflow is switching between design and development."
        />

        <br />
        <p className="section-subtitle blue-text">
          3. It's important to prioritize user needs
        </p>
        <p>
          When a user raised a request, I would ask them about their needs
          behind the request. However, I didn't prioritize these needs in terms
          of importance in this project. This caused me a lot of stress in the
          end, as there were many needs to consider. I think it would be better
          to involve the whole team in <b>prioritizing the needs together</b>,
          so that we can reach a consensus.
        </p>
      </div>

      <div className="section">
        <h6>IMAGE SOURCE</h6>
        <ul>
          <li>
            <a
              className="gray-text"
              href="https://www.flaticon.com/free-icons/captain"
              title="captain icons"
            >
              Captain icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              className="gray-text"
              href="https://www.flaticon.com/free-icons/sailor"
              title="sailor icons"
            >
              Sailor icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </div>
      <NavLink
        pageUrl="/Work/PDOGS"
        project="Programming Design Online Grading System"
      />
    </div>
  );
}
