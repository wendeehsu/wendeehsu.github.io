import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import "../../css/Projects/pdogs.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class PDOGS extends Component {
    componentDidMount() {
        GApageView("PDOGS");
    }

    imagBasePath = "/images/Pdogs/";

    render() {
        return(
        <div>
            <div className="cover gray-bg justify-content-center">
                <img className="coverImage" src="/images/project4-cover-center.png" alt="pdogs"/>
                <div className="col-4 vertical-center">
                    <h5 className="pink-text">National Taiwan University</h5>
                    <h4>Programming Design Online Grading System</h4>
                    <h5 className="gray-text">
                        June 2021 - September 2021
                    </h5>
                </div>
            </div>

            <div className='section'>
                PDOGS (Programming Design Online Grading System) is a platform for teaching assistants to publish programming assignments and for students to submit their code and receive automatic grading. I led the design team to transform the loosely organized legacy system into an<b className='dark-pink-text'> easy-to-use, intuitive </b>new system that can scale to <b className='dark-pink-text'>serve 1000+ users </b>while reducing potential operational errors and enhancing the user experience.
            </div>

            <div className="section">
                <h5>MY ROLE</h5>
                <p>
                    Design Lead, UX Researcher, Frontend Engineer, Quality Assurance Lead                    
                </p>
            </div>

            <div className="section">
                <h5>MY TEAMMATES</h5>
                <ul>
                    <li>Project Manager: 
                        <a href="https://www.linkedin.com/in/yunchi-cheng/" target="_blank" rel="noopener noreferrer"> Yun-Chi Cheng</a>
                    </li>
                    <li>
                        UI Designer: 
                        <a href="https://www.linkedin.com/in/wpbag" target='_blank' rel="noopener noreferrer"> Chien-Yin Wu</a>,
                        <a href="https://www.linkedin.com/in/derekdylu" target='_blank' rel="noopener noreferrer"> Derek Lu</a>
                    </li>
                    <li>
                        Frontend Engineer: 
                        <a href="https://www.linkedin.com/in/tmcn" target='_blank' rel="noopener noreferrer"> Yi-Tong Chen</a>,
                        <a href="https://www.linkedin.com/in/gary-hu-2000" target='_blank' rel="noopener noreferrer"> Gary Hu</a>,
                        <a href="https://www.linkedin.com/in/li-hsiang-huang-fu-0b1825184" target='_blank' rel="noopener noreferrer"> Li Hsiang Huang Fu</a>
                        , Ray Lee, Po-Chun Wu, Erica Cheng, Daphne Hou, Amber liu, Wilson Hsu, Duge Lu
                    </li>
                    <li>
                        Backend Engineer: 
                        <a href="https://www.linkedin.com/in/yangcheng1229" target='_blank' rel="noopener noreferrer"> Yang Cheng</a>,
                        <a href="https://www.linkedin.com/in/chessyhsu" target='_blank' rel="noopener noreferrer"> Chessy Hsu</a>
                        , Polly Ho, Benson Wang
                    </li>
                    <li>
                        DevOps: Fredred Chu, Jtong Chen
                    </li>
                </ul>
            </div>

            <div className="section">
                <h5>METHOD & TOOL</h5>
                <ul>
                    <li>
                        Methods: interview, qualitative & quantitative data analytics, wireframe, mockup, prototype, usability testing
                    </li>
                    <li>
                        Tools: Figma, Qase (Quality Assurance)
                    </li>
                    <li>
                        Frontend Framework: React.js
                    </li>
                </ul>
            </div>

            <div className="section">
                <h5>TIMELINE</h5>
                <img
                    className='full-img'
                    src={`${this.imagBasePath}Timeline.png`}
                    alt="The project timeline. 8 weeks for design. 10 weeks for development. And 5 weeks for quality assurance."
                />
            </div>

            <div className="section">
                <h5>THE PROBLEMS</h5>
                <p>
                    In the past, the platform’s developers only focused on adding new features and maintaining its functionality. After several generations, the system became very hard to use.
                </p>
                <p className="section-subtitle">1. Complex user roles</p>
                <p className="dark-pink-text center-text">
                    "As teaching assistants are granted the highest right in the system, I always need to warn them what sections they should not edit in case they accidentally delete a whole class."
                    <br/> -- System Admin
                </p>
                <p>
                    The legacy system only has 2 roles, a teaching assistant or a student. However, during user interviews I realized there are <b className="dark-pink-text">8 roles </b>in fact. What’s more, a user can have different roles under different situation.
                </p>
                <img
                    className='half-full-img'
                    src={`${this.imagBasePath}role-scope.png`}
                    alt="Besides a teaching assistant and a student, there are 6 more roles in reality, including system admin, guest students, team leader, etc."
                />
                
                <p className="section-subtitle">2. Disjointed user experience</p>
                <p className="dark-pink-text center-text">
                    "There are so many steps missing in the system!
                    <br/> To create an assignment, I need to type its description in the system, later use file transfer protocol to upload testing data, then publish the assignment back in the system."
                    <br/> -- Teaching Assistant
                </p>
                <p>
                    A user may need to type in the system, upload file via the File Transfer Protocol, and use ssh to connect to the database server for advance settings to complete a task.
                </p>
                <img
                    className='full-img'
                    src={`${this.imagBasePath}problem-flow.png`}
                    alt="Teaching assistants will use ssh to create a new class in the database, hope in the system to create an assignment, hope off to upload testing data via file transfer protocol, then finally publish the assignment back in the system."
                />
            </div>

            <div className="section">
                <h5>DESIGN & DEVELOPMENT PROCESS</h5>
                <div className='horizontal-display'>                    
                    <div className='big-number-section'>
                        <b className='big-title'><b className='dark-pink-text big-number'>6</b> Interviews</b>
                        <p className='number-description'>
                            1-1 online interview with
                            <br/>
                            different roles in each class
                        </p>
                    </div>

                    <div className='big-number-section'>
                        <b className='big-title'><b className='dark-pink-text big-number'>5</b> Iterations</b>
                        <p className='number-description'>
                            1 paper wireframe
                            <br/>
                            4 lo-fi prototypes
                        </p>
                    </div>

                    <div className='big-number-section'>
                        <b className='big-title'><b className='dark-pink-text big-number'>22</b> User testings</b>
                        <p className='number-description'>
                            Each prototype was tested by
                            <br/>
                            at least 5 people
                        </p>
                    </div>
                </div>

                <div>
                    <p className="section-subtitle">1. Understanding users</p>
                    <p>
                        To understand each user type's responsibilities and define proper system roles, I interviewed system admins, students, and teaching assistants of three different classes. After observing how they complete their tasks in the current system, I discussed the necessary system roles and corresponding access rights with the project manager and development team.
                    </p>
                    <img
                        className='full-img'
                        src={`${this.imagBasePath}role.png`}
                        alt="There are 3 scopes, namely system, class, and team. Under different scope, there are managers, normal users, and guest users."
                    />
                </div>
                <br/>

                <div>
                    <p className="section-subtitle">2. Prototyping & User testing</p>
                    <p>
                        After clarifying the different user roles and analyzing the missing processes in the legacy system, I created multiple prototype versions for user testing to validating which design solution works best.
                    </p>
                    <img
                        className='half-full-img'
                        src={`${this.imagBasePath}wireframe-flow.png`}
                        alt="There are 4 versions of prototypes in total. The first two ones are used to verify binding roles under different scope is needed. The last two ones are used to test different ways to include missing flows."
                    />
                </div>
                <br/>

                <div>
                    <p className="section-subtitle">3. Designing Mockup</p>
                    <div className='horizontal-display'>
                        <p className='side-text'>
                            When the final wireframes is defined, I consolidated the design solutions and discussed the final user interface with the UI designers.
                        </p>
                        <img
                            className='right-side-img'
                            src={`${this.imagBasePath}mockup.png`}
                            alt="The mockup"
                        />
                    </div>
                </div>
                <br/>

                <div>
                    <p className="section-subtitle">4. Development & Quality Assurance</p>
                    <div className='horizontal-display'>
                        <img
                            className='left-side-img'
                            src={`${this.imagBasePath}qa.png`}
                            alt="The mockup"
                        />
                        <p className='side-text'>
                            I worked as a front-end developer throughout the development process. I also wrote <b className='dark-pink-text'>127 test cases </b>to ensure that the new system functioned as expected even with edge cases.
                        </p>
                    </div>
                </div>
            </div>

            <div className='section'>
                <h5>RESULT</h5>
                <p>
                    After launch, many users feedbacked that the new system is easier to use. A new user told us that, “It's really straightforward.” “This semester, there are far fewer emails asking me where is xxx in the system, what does xxx mean, etc.” said a teaching assistant. “It's so convenient that I no longer need to ssh to our server!”
                </p>
            </div>
        
            <div className='section'>
                <h5>REFLECTION</h5>
                <div className="row">
                    <img className="reflection-icon col" src="/images/Pdogs/Reflection1.png" />
                    <div className="col">
                        <p className="bold-text">
                            1. Usability testing should also be done on mockups
                        </p>
                        <p>
                            With limited time, whenever UI designers finished the mockup, we only discussed feasibility with the engineering team without any usability testing. I thought those testings on four versions of wireframes should cover most feedbacks. However, in this project, I was surprised to find out people do not like the color (Mockup version 1 uses black, gray, and blue). “When struggling on coding assignments, the cold color will make me feel even more frustrated.” We ended up spending an extra three weeks to change the CI with the frontend team, which could be saved if we also conduct testings on mockups.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <img className="reflection-icon col" src="/images/Pdogs/Reflection2.png" />
                    <div className="col">
                        <p className="bold-text">
                            2. Co-creating can bring better solutions
                        </p>
                        <p>
                            As PDOGS is a system initially built to serve students in the department of information management, the whole development team was its user before. Hence, when my design team provided a new design, many people will give feedback. In each design team's internal meeting, we will then discuss how to modify the mockup. Nevertheless, as the discussion is not open, those whose ideas are not accepted did not feel well. I learned that maybe a co-creating workshop can be a better approach. If everyone can share ideas and prioritize things together, there will be fewer misunderstandings.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <img className="reflection-icon col" src="/images/Pdogs/Reflection3.png" />
                    <div className="col">
                        <p className="bold-text">
                            3. Every stakeholder's needs should be considered
                        </p>
                        <p>
                            In our user study, I only interviewed system managers, teaching assistants, and students since they are the main users. One week before the launch, our project manager emergently arranged a meeting on creating a mobile version for our professor. As the professor is the one and only supporter of this project, although he seldom uses the system, we should still put his demand with great priority. This experience showed me that a complete stakeholder map is essential to all projects.
                        </p>
                    </div>
                </div>
            </div>
            <NavLink pageUrl="/Work/RedesignBLI" project="Redesign Website of Bureau of Labor Insurance" />
        </div>
        )
    }
}

export default PDOGS;