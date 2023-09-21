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
                    Users' may have different roles in different classes. However, through observation, we realized that the old system fails to separate action restricted to certain classes and roles. This will hamper the site's security and stability, putting the database and server in danger.
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
                    Users consider the system to be an online classroom. The functions they have in each class should be clear in the way same as the real world, that they don't even need to specify their role when walking into a classroom.
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
                    After categorizing each user's demand, We sorted out actions into 3 clearly defined scopes: System, Class, and Team. Under each scope, the user can be a manager, a normal user, or a guest. Applying this rule, users can enjoy a more flexible role setting. (e.g. Alice can be a class manager in Programming Design, a class normal in Data Structure, and a team manager in Data Structure's final project.)
                </p>
                <img className="full-width-img" src="/images/Pdogs/Role.png" />
                <p className="section-subtitle pink-text">Create 2 wireframes to verify whether scope-role separation is needed</p>
                <p>
                    In the legacy system, although showing all functions on the same screen is misleading, it can also be very convenient to those who are clear about what they want to do. With scope-role separation, the convenience may be sacrificed in exchange for a cleaner interface. To make sure the change is on the right track, I created 2 wireframes. One is similar to the old system, which has an “Add” button to quickly add courses, classes, and assignments. The other shows “Add” buttons under different scopes and roles (e.g. Class Manager will find the “Add Homework” button in the class they are responsible for.)
                </p>
                <img className="full-width-img" src="/images/Pdogs/wireframe_v1v2.png" />
                <p className="section-subtitle pink-text">Usability Testing on scope-role separation</p>
                <p>
                    I invited 1 system manager, 2 teaching assistants, and 3 students for wireframe v1 and v2's usability testing. After completing assigned tasks like adding a new class in a course and adding a new homework in a class, 5 of them all preferred the scope-role separation version. “I have no clue about where the Add button in the menu bar will bring me. I don't even know what will happen to the current page I am viewing after I click ‘Add'” a teaching assistant shared.
                </p>
                <p className="section-subtitle pink-text">Iterating wireframes to optimize scope-role separation experience</p>
                <p>
                    In wireframe v3, I was experimenting on enhancing the user experience when switching among different roles. A teaching assistant from Programming Design Class once mentioned, “After I created a new assignment, I would like to know how it looks like for students.” I thus added a view mode switch to make identity change more convenient.
                </p>
                <img className="full-width-img" src="/images/Pdogs/wireframe_v3.png" />
                <p className='gray-text center-text'>
                    v3 (add identity switch on the top right corner)
                </p>

                <p>
                    Later in 5 usability testings, I figured out that some people found the switch handy, while others did not know how to use it or even neglected it. From their feedback, I realized that TA (Class Manager) and students (Class Normal, Class Guest) are under the same scope (Class), so the changes in the user interface are straightforward for testers. However, the system manager is defined under the scope “System”. Actions a system manager can do are completely different from those roles in class scope, so it is not suitable to bundle this role with two others.
                    <br/><br/>
                    After brainstorming with the team, we decided to create a special account for the system manager. At the moment a user logs in, the authentication server will determine whether this user is a system manager, system normal, or system guest. The website will then guide users to pages corresponding to their roles under system scope.
                </p>
                <img className="full-width-img" src="/images/Pdogs/Identity_ui.png" />
                <p className='gray-text center-text'>Flow chart to explain how to guide roles under system scope</p>
            </div>

            <div className='section'>
                <p className="secondary-title">3. Creating Propotype</p>
                <p className="section-subtitle pink-text">System Manager - Add a new class</p>
                <img className="full-width-img" src="/images/Pdogs/SM_Prototype.png" />
                <p className="section-subtitle pink-text">Class Normal - Submiting a coding problem</p>
                <img className="full-width-img" src="/images/Pdogs/CN_Prototype.png" />
            </div>

            <div className='section'>
                <p className="secondary-title">4. Usability Testing</p>
                <p>
                    After finishing wireframe/prototype v4, I invited our UI designers to conduct 12 one-to-one online usability testings. In each testing, I assigned tasks based on testers' experience to gain constructive feedback. The final wireframe was also discussed with the engineering team to ensure feasibility.    
                </p>
                <img className="full-width-img" src="/images/Pdogs/Usability_testing.png" />
            </div>

            <div className='full-width-section'>
                <p className="secondary-title">5. Mockup</p>
                <p className="secondary-title pink-text">Restructure System Normal Layout</p>
                <div className="full-width-inner-section gray-bg">
                    <img className="label-img" src="/images/BLI/OldLabel.png" />
                    <img className="full-width-img" src="/images/Pdogs/OldFeature1.png" />
                    <p>
                        Menubar lacks categorization. Items that belong to a class, a contest, or personal records are scattered in different places.
                    </p>
                </div>
                <div className="full-width-inner-section">
                    <img className="label-img" src="/images/Pdogs/pinkNewLabel.png" />
                    <img className="full-width-img" src="/images/Pdogs/NewFeature1.png" />
                    <p>
                        By adding a sidebar, we can better categorize items and create a clearer information architecture.
                    </p>
                </div>
                <br />
                
                <p className="secondary-title pink-text">Restrict functions for different roles</p>
                <div className="full-width-inner-section gray-bg">
                    <img className="label-img" src="/images/BLI/OldLabel.png" />
                    <img className="full-width-img" src="/images/Pdogs/OldFeature2.png" />
                    <p>
                        In the old system, there are only 2 roles: admin and normal users. As a result, a teaching assistant (which is role “Admin” defined in the old system) in Class A can modify assignments for Class B.
                    </p>
                </div>
                <div className="full-width-inner-section">
                    <img className="label-img" src="/images/Pdogs/pinkNewLabel.png" />
                    <img className="full-width-img" src="/images/Pdogs/NewFeature2.png" />
                    <p>
                        Enabling different roles in each class, the redesigned version gives users a more flexible role setting and better protects data security.
                    </p>
                </div>
                <br />

                <p className="secondary-title pink-text">Create Interface for System Manager</p>
                <p>
                    There is no user interface for the system manager in the legacy system. As a result, system managers always need to use ssh to connect with the server to change settings. This method will make the server vulnerable.
                </p>
                <div className="full-width-inner-section">
                    <img className="label-img" src="/images/Pdogs/pinkNewLabel.png" />
                    <img className="full-width-img" src="/images/Pdogs/NewFeature3.png" />
                    <p>
                        We designed pages for the system manager to manage courses, accounts, and system-wise configurations, providing a safer and easier way to change settings.
                    </p>
                </div>
            </div>

            <div className='section'>
                <h5>IMPLEMENTATION PROCESS</h5>
                <p>
                    As we need to finish the new system in 7 sprints (14 weeks), leaders of each subteam created a project timeline and control progresses through weekly meetings. As a design lead, my team is required to be one sprint ahead of all others, while other leaders can use an extra sprint to train their members with coding skills.
                </p>
                <img className="full-width-img" src="/images/Pdogs/Timeline.png" />
            </div>

            <div className='section'>
                <p className="secondary-title">6. Coding</p>
                <p>
                    Working in an 18-people-team,  I joined the team to turn mockups into a real website using React.js. Each function, mockup, bug are recorded in gitlab as an issue. Team leaders will later add labels, set milestones, then assign them to members. Every merge request will undergo the code review process.
                </p>
                <img className="full-width-img" src="/images/Pdogs/gitlab.png" />
                <p className='gray-text center-text'>
                    We use Gitlab for issue management
                </p>
            </div>

            <div className='section'>
                <p className="secondary-title">7. Quality Assurance</p>
                <p>
                    For quality assurance, I wrote 127 test cases with detailed steps to follow. We arranged 3 exhaustive QA tests before the system was officially launched.
                </p>
                <img className="full-width-img" src="/images/Pdogs/qa.png" />
                <p className='gray-text center-text'>
                    All QA testcase are recorded in Qase
                </p>
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