import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class PDOGS extends Component {
    componentDidMount() {
        GApageView("BLI");
    }

    render() {
        return(
        <div>
            <div className="cover gray-bg row justify-content-center">
                <img className="coverImage" src="/images/project4-cover-center.png" alt="pdogs"/>
                <div className="col-4 vertical-center">
                    <h5 className="pink-text">NTUIM</h5>
                    <h4>Programming Design Online Grading System</h4>
                    <h5 className="gray-text">
                        June 2021 - September 2021
                    </h5>
                </div>
            </div>

            <div className='section'>
                With the surge increase of users, the existing Programming Design Online Grading System (PDOGS) can no longer afford the rising traffic due to its loosely organized code structure and user interface. Therefore, we spend 14 weeks researching, designing, and implementing an easy-to-use, frontend backend separated new system, enhancing both its user experience and site efficiency.
            </div>

            <div className="section">
                <h5>MY ROLE</h5>
                <p>
                    Design Lead, UX Researcher, Frontend Engineer, QA Lead                    
                </p>
            </div>

            <div className="section">
                <h5>MY TEAMMATES</h5>
                <p>
                    Project Manager - 
                    <a href="https://www.linkedin.com/in/yunchi-cheng/" target="_blank" rel="noopener noreferrer"> Yun-Chi Cheng</a><br/>
                    UI Designer - 
                    <a href="https://www.linkedin.com/in/wpbag" target='_blank' rel="noopener noreferrer"> Chien-Yin Wu</a>,
                    <a href="https://www.linkedin.com/in/derekdylu" target='_blank' rel="noopener noreferrer"> Derek Lu</a><br/>
                    Frontend Engineer - 
                    <a href="https://www.linkedin.com/in/tmcn" target='_blank' rel="noopener noreferrer"> Yi-Tong Chen</a>,
                    <a href="https://www.linkedin.com/in/gary-hu-2000" target='_blank' rel="noopener noreferrer"> Gary Hu</a>,
                    <a href="https://www.linkedin.com/in/li-hsiang-huang-fu-0b1825184" target='_blank' rel="noopener noreferrer"> Li Hsiang Huang Fu</a>
                    , Ray Lee, Po-Chun Wu, Erica Cheng, Daphne Hou, Amber liu, Wilson Hsu, Duge Lu<br/>
                    Backend Engineer - 
                    <a href="https://www.linkedin.com/in/yangcheng1229" target='_blank' rel="noopener noreferrer"> Yang Cheng</a>,
                    <a href="https://www.linkedin.com/in/chessyhsu" target='_blank' rel="noopener noreferrer"> Chessy Hsu</a>
                    , Polly Ho, Benson Wang<br/>
                    DevOps - Fredred Chu, Jtong Chen
                </p>
            </div>

            <div className="section">
                <h5>METHOD & TOOL</h5>
                <p>
                    Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing<br/>
                    Tools: Figma, Qase<br/>
                    Frontend Framework: React.js
                </p>
            </div>

            <div className="section">
                <h5>TIMEFRAME</h5>
                <p>
                    14 weeks
                </p>
            </div>

            <div className="section">
                <h5>BACKGROUND</h5>
                <p>
                    PDOGS (Programming Design Online Grading System) is a system once designed to serve people in the department of Information Management, but now gradually open to all students in the University. With the surge increase of users, the old system, written in PHP, cannot handle mass requests as there is no separation in the frontend and backend. When it comes to user experience, previous developers only focus on functionality to build the system in the shortest time. As a result, the existing system misleads users by squeezing operations of different roles in the same interface. To enhance system stability and reduce confusion in actions, we recruited a team of 20 people to reconstruct the system during the summer break.
                </p>
                <div className="row justify-content-center">
                    <div className="col">
                        <img className="restriction-icon" src="/images/Pdogs/Background2.png" />
                        <div>
                            <p className="gray-text">
                            Teaching Assistants used to command directly with the database instead of the website.
                            </p>
                            <p>
                                &#8594; When integrating the skipped interactions into the new system, we need to put effort into its convenience to convince teaching assistants.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <img className="restriction-icon" src="/images/Pdogs/Background3.png" />
                        <div>
                            <p className="gray-text">
                                Users may have more than one role in the system.                            </p>
                            <p>
                                &#8594; Distinguishing the operation of a student, a guest student, and a teaching assistant based on the user's role in different classes is required.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <img className="restriction-icon" src="/images/Pdogs/Background1.png" />
                        <div>
                            <p className="gray-text">
                                Since there is no pay, half of the recruited members have zero experience in web development.
                            </p>
                            <p>
                                &#8594; We need to squeeze the training process in a limited timeframe, also maintaining the code quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h5>PROCESS OVERVIEW</h5>
                <img className="full-width-img" src="/images/Pdogs/Process.png" />
            </div>

            <div className="section">
                <h5>DESIGN PROCESS</h5>

                {/* ---- 1. User Research ---- */}
                <p className="secondary-title">1. User Research</p>
                <p className="section-subtitle pink-text">Online Interview</p>
                <p>
                    The system is mainly used in 3 courses, namely Programming Design, Data Structure, and Programming for Business Computing. After interviewing 2 teaching assistants and 1 student in each course, I also arranged online meetings with 2 system managers, who are developers and maintainers of the legacy system, to understand their design rationals and challenges encountered.
                </p>
                <img className="full-width-img" src="/images/Pdogs/Online_Interview.png" />
                <p>
                    Users’ may have different roles in different classes. However, through observation, we realized that the old system fails to separate action restricted to certain classes and roles. This will hamper the site’s security and stability, putting the database and server in danger.
                </p>
                <img className="full-width-img" src="/images/Pdogs/oldRoles.png" />
                <p className="gray-text center-text">
                    Actions for different roles and classes are mixed in the same interface
                </p>
            </div>
            <div className="section">
                <p className="section-subtitle pink-text">Define Problem</p>
                <div className="div-box background-pink">
                    <p className="vertical-center">
                        How Might We guide users under different roles in different situations?
                    </p>
                </div>
                <p className="section-subtitle">User Need</p>
                <p>
                    Users consider the system to be an online classroom. The functions they have in each class should be clear in the way same as the real world, that they don’t even need to specify their role when walking into a classroom.
                </p>
                <p className="section-subtitle">Limitation</p>
                <p>
                    Roles not only vary between classes but also in different team projects (e.g. team leader and team members). Besides, the online system will be more complicated than the physical world because users also have different rights based on their login status. The redesigned solution should take all among into consideration to reduce confusion.
                </p>
            </div>

            <div className='section'>
                {/* ---- 2. Design Wireframe ---- */}
                <p className="secondary-title">2. Design Wireframe</p>
                <p className="section-subtitle pink-text">Define roles under scopes</p>
                <p>
                    After categorizing each user’s demand, We sorted out actions into 3 clearly defined scopes: System, Class, and Team. Under each scope, the user can be a manager, a normal user, or a guest. Applying this rule, users can enjoy a more flexible role setting. (e.g. Alice can be a class manager in Programming Design, a class normal in Data Structure, and a team manager in Data Structure’s final project.)
                </p>
                <img className="full-width-img" src="/images/Pdogs/Role.png" />
                <p className="section-subtitle pink-text">Create 2 wireframes to verify whether scope-role separation is needed</p>
                <p>
                    In the legacy system, although showing all functions on the same screen is misleading, it can also be very convenient to those who are clear about what they want to do. With scope-role separation, the convenience may be sacrificed in exchange for a cleaner interface. To make sure the change is on the right track, I created 2 wireframes. One is similar to the old system, which has an “Add” button to quickly add courses, classes, and assignments. The other shows “Add” buttons under different scopes and roles (e.g. Class Manager will find the “Add Homework” button in the class they are responsible for.)
                </p>
                <img className="full-width-img" src="/images/Pdogs/wireframe_v1v2.png" />
                <p className="section-subtitle pink-text">Usability Testing on scope-role separation</p>
                <p>
                    I invited 1 system manager, 2 teaching assistants, and 3 students for wireframe v1 and v2’s usability testing. After completing assigned tasks like adding a new class in a course and adding a new homework in a class, 5 of them all preferred the scope-role separation version. “I have no clue about where the Add button in the menu bar will bring me. I don’t even know what will happen to the current page I am viewing after I click ‘Add’” a teaching assistant shared.
                </p>
                <p className="section-subtitle pink-text">Iterating wireframes to optimize score-role separation experience</p>
                <p>
                    In wireframe v3, I was experimenting on enhancing the user experience when switching among different roles. A teaching assistant from Programming Design Class once mentioned, “After I created a new assignment, I would like to know how it looks like for students.” I thus added a view mode switch to make identity change more convenient.
                </p>
                <img className="full-width-img" src="/images/Pdogs/wireframe_v3.png" />
                <p>
                    Later in 5 usability testings, I figured out that some people found the switch handy, while others did not know how to use it or even neglected it. From their feedback, I realized that TA (Class Manager) and students (Class Normal, Class Guest) are under the same scope (Class), so the changes in the user interface are straightforward for testers. However, the system manager is defined under the scope “System”. Actions a system manager can do are completely different from those roles in class scope, so it is not suitable to bundle this role with two others.
                    <br/>
                    After brainstorming with the team, we decided to create a special account for the system manager. At the moment a user logs in, the authentication server will determine whether this user is a system manager, system normal, or system guest. The website will then guide users to pages corresponding to their roles under system scope.
                </p>
                <img className="full-width-img" src="/images/Pdogs/Identity_ui.png" />
                <p className='gray-text center-text'>Flow chart to explain how to guide roles under system scope</p>
            </div>
        </div>
        )
    }
}

export default PDOGS;