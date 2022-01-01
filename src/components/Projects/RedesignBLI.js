import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class RedesignBLI extends Component {
    componentDidMount() {
        GApageView("BLI");
    }

    render() {
        return (
            <div>
                <div className="cover gray-bg row justify-content-center">
                    <img className="coverImage" src="/images/project1-cover.png" />
                    <div className="col-4 vertical-center">
                        <h5 className="pink-text">PDIS</h5>
                        <h4>Redesign Website of Bureau of Labor Insurance</h4>
                        <h5 className="gray-text">
                            July 2020 - September 2020
                        </h5>
                    </div>
                </div>
                
                <div className="section">
                    In 10 weeks, we assisted the Bureau of Labor Insurance to redesign its website (e-service platform), aiming to provide adequate assistance when users encounter difficulties in different stages. Our new design scored 85.94 in the final SUS usability testing, a 40% improvement on the original website’s score of 61.25.                
                </div>

                <div className="section">
                    <h5>MY ROLE</h5>
                    <p>
                        UX Researcher, UI Designer                    
                    </p>
                </div>

                <div className="section">
                    <h5>MY TEAMMATES</h5>
                    <p>
                        <a href="https://www.linkedin.com/in/ping-ju-huang-aa0b10174/" target="_blank">Ping-Ju Huang</a> - UX Researcher <br/>
                        <a href="https://www.linkedin.com/in/jennifer-chueh-chen-l-218533195/" target="_blank">Chueh-Chen Lai</a> - UX Researcher, UI Designer <br/>
                        <a href="https://medium.com/@as964119/about" target="_blank">Nuan-Ting Lin</a> - UX Researcher, UI Designer <br/>
                    </p>
                </div>

                <div className="section">
                    <h5>METHOD & TOOL</h5>
                    <p>
                        Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing
                        <br/>
                        Tools: Miro, Figma 
                    </p>
                </div>

                <div className="section">
                    <h5>TIMEFRAME</h5>
                    <p>
                        10 weeks
                    </p>
                </div>

                <div className="section">
                    <h5>BACKGROUND</h5>
                    <p>
                        We have a limited time to redesign the website of the Bureau of Labor Insurance, which provides a variety of services to more than millions of workers, including farmers, fishermen, and so on. Users are required to prepare a card reader and insert their Citizen Digital Certificate to log in to the website, which made it more challenging for first-time users. Besides, these people do not visit the website more than twice a year because their need for insurance-related issues does not happen frequently.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col">
                            <img className="restriction-icon" src="/images/BLI/Background1.png" />
                            <div>
                                <p className="gray-text">
                                    The redesign project has to be completed in 10 weeks.
                                </p>
                                <p>
                                    &#8594; Although the website serves people from all walks, we need to select our target audience to narrow down the project scope.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/BLI/Background2.png" />
                            <div>
                                <p className="gray-text">
                                    Users need to prepare a card reader and Citizen Digital Certificate to log in.
                                </p>
                                <p>
                                    &#8594; We have to consider more kinds of failure cases to enhance its user experience.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/BLI/Background3.png" />
                            <div>
                                <p className="gray-text">
                                    Users do not visit the website frequently.
                                </p>
                                <p>
                                    &#8594; We need to treat people as first-time users and design clear guidance for the website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h5>PROCESS OVERVIEW</h5>
                    <img className="full-width-img" src="/images/BLI/Process.png" />
                </div>

                <div className="section">
                    <h5>DESIGN PROCESS</h5>

                    {/* ---- 1. User Reasearch ---- */}
                    <p className="secondary-title">1. User Reasearch</p>
                    <p className="section-subtitle blue-text">Interview</p>
                    <div className="row">
                        <p className="col-6">
                            To find current users of the e-service platform of the Bureau of Labor Insurance, we released questionnaires asking about people’s experience of using the website. We later selected 5 users and conducted semi-structured interviews with them. To include thoughts from our stakeholders into the new design, we also arranged meetings with 4 staff working in the Information Technology Division of the Bureau of Labor Insurance.
                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/Test.png" />
                    </div>
                    <p className="section-subtitle blue-text">Affinity Diagram</p>
                    <div className="row">
                        <p className="col-6">
                            After interviewing each user and stakeholders, we sorted more than 100 user quotes, derived 25 insights, and generated 3 personas.
                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/AffinityDiagram.png" />
                    </div>
                    <p className="section-subtitle blue-text">User Types</p>
                    <p>
                        Based on whether these users are familiar with their goal on the website and their degree of attention they pay to their right of labor insurance, we made 3 personas corresponding to each group we want to target.
                    </p>
                    <img className="full-width-img" src="/images/BLI/UserVector.png" />
                    <p>
                        For each group, we identified their needs and pain points:
                    </p>
                    <img className="full-width-img" src="/images/BLI/UserTable.png" />
                </div>

                <div className="section">
                    {/* ---- 2. Define Problem ---- */}
                    <p className="secondary-title">2. Define Problem</p>
                    <div className="div-box background-green">
                        <p className="vertical-center">
                            How Might We provide adequate assistance when users encounter difficulties in different stages?
                        </p>
                    </div>
                    <p className="section-subtitle blue-text">User Need</p>
                    <p>
                        Users expect the website to provide a clear guide and immediate feedback when searching or applying for a service.
                    </p>
                    <p className="section-subtitle blue-text">Limitation</p>
                    <p>
                        Bureau of Labor Insurance supports a wide variety of services for people facing different incidences, but the website has a barely low rate of usage. A person may visit the website no more than twice a year. As a result, we should regard each person as first-time users when designing guidance.                    
                    </p>
                </div>

                <div className="section">
                    {/* ---- 3. Design Wireframe ---- */}
                    <p className="secondary-title">3. Design Wireframe</p>
                    <p className="section-subtitle blue-text">Using different information architecture to design two versions of wireframe</p>
                    <p>
                        Since the Bureau of Labor Insurance provides a wide variety of services, we made two versions of wireframe using different information architecture to categorize each service. The <b>“Stage of Life”</b> version divides services into “working, retired, disabled, unemployed, giving birth, dead”. As for the <b>“Function”</b> version, we simply labeled each service into “making inquiries, applying, paying, changing data, printing”.
                    </p>
                    <img className="full-width-img" src="/images/BLI/IaCompare.png" />
                    <p className="section-subtitle blue-text">Usability Testing on Information Architecture</p>
                    <p>
                        We conducted 5 usability testing, carefully selected users with diverse backgrounds. Besides testing our current user flow, we were more interested in which information architecture do they prefer.
                    </p>
                    <div className="row">
                        <p className="col-6">
                            Surprisingly, users found it difficult to search for the service they want in the “Stage of Life” version. For example, there is a subsidy that can only be applied when one was unemployed but later got a new job in 3 months. In this case, some may categorize it as “unemployed”, while others think it should belong to “working”. 
                            <br/>
                            &#8594; Due to the <b>lower degree of confusion</b> raised in classifying each service, we decided to use the <b>“Function”</b> version in our future iteration.                        
                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/Wireframe.png" />
                    </div>
                </div>

                <div className="section">
                    {/* ---- 4. Creating Propotype ---- */}
                    <p className="secondary-title">4. Creating Propotype</p>
                    <p className="section-subtitle blue-text">Login</p>
                    <img className="flow-img" src="/images/BLI/Prototype_Login.png"/>
                    <p className="section-subtitle blue-text">Applying for a service</p>
                    <img className="full-width-img" src="/images/BLI/Prototype_Apply.png"/>
                </div>

                <div className="section">
                    {/* ---- 5. Usability Testing ---- */}
                    <p className="secondary-title">5. Usability Testing</p>
                    <p>
                        After designing our low-fi prototype, we arranged 3 one-to-one usability testing to see how the current design can be improved. We later iterated the low-fi prototype into our high-fi prototype, conducting 8 usability testing with both first-time users and experienced users of the website.
                    </p>
                    <div className="row justify-content-center">
                        <img className="center-img-space" src="/images/BLI/TestingFlow.png"/>
                    </div>

                </div>
            
                <div className="section">
                    <h5>FINAL DESIGN</h5>

                    {/* ---- 1. Login ---- */}
                    <p className="secondary-title">1. Login</p>
                    <div className="full-width-inner-section gray-bg">
                        <img className="label-img" src="/images/BLI/OldLabel.png" />
                        <img className="full-width-img" src="/images/BLI/OldLogin.png" />
                        <p>
                            Users will not know whether their login equipment is successfully detected before pressing the login button.
                        </p>
                    </div>
                    <div className="full-width-inner-section">
                        <img className="label-img" src="/images/BLI/NewLabel.png" />
                        <img className="full-width-img" src="/images/BLI/NewLogin.png" />
                        <p>
                            Since the Bureau of Labor Insurance is going to support different ways to log in, we enable users to choose a suitable option based on the login equipment they have. Besides, the filling fields are disabled before the website successfully detected all the required login equipment. This will reduce users’ time wasted on filling in the fields again and again.
                        </p>
                    </div>
                    <br />

                    {/* ---- 2. Inquiry Main Page ---- */}
                    <p className="secondary-title">2. Inquiry Main Page</p>
                    <div className="full-width-inner-section gray-bg">
                        <img className="label-img" src="/images/BLI/OldLabel.png" />
                        <img className="full-width-img" src="/images/BLI/OldInquiry.png" />
                        <p>
                            The dropdown list is shown when hovering, which is not friendly for the website’s elder users since they are used to clicking buttons. Besides, the nested display and small service titles add to the difficulty when searching for a service. 
                        </p>
                    </div>
                    <div className="full-width-inner-section">
                        <img className="label-img" src="/images/BLI/NewLabel.png" />
                        <img className="full-width-img" src="/images/BLI/NewInquiry.png" />
                        <p>
                            To shorten user’s time spend searching for a service, we use a side menu with cards showing each service in the main space.                    
                        </p>
                    </div>
                    <br />

                    {/* ---- 3. Qualification Check ---- */}
                    <p className="secondary-title">3. Qualification Check</p>
                    <div className="full-width-inner-section gray-bg">
                        <img className="label-img" src="/images/BLI/OldLabel.png" />
                        <img className="full-width-img" src="/images/BLI/OldQualification.png" />
                        <p>
                            On the current website, the agreement contains many important details like rules about qualification. However, most users will not read the content. They may end up finishing the whole application process but later found out they were not qualified.                        
                        </p>
                    </div>
                    <div className="full-width-inner-section">
                        <img className="label-img" src="/images/BLI/NewLabel.png" />
                        <img className="full-width-img" src="/images/BLI/NewQualification.png" />
                        <p>
                            As users may not be sure of whether they are qualified to apply for a service, we added a qualification check helper before each application.                    
                        </p>
                    </div>
                    <br />

                    {/* ---- 4. Application Process ---- */}
                    <p className="secondary-title">4. Application Process</p>
                    <div className="full-width-section">
                        <img className="label-img" src="/images/BLI/NewLabel.png" />
                        <img className="full-width-img" src="/images/BLI/NewApplicationProcess.png" />
                        <p>
                            On the current website, users have no clues about the progress after applying for a service. They will only receive an official letter if their application was declined. As users want to know at which step their application is, we designed a new page to disclose the dates about when the status of the application has been changed.                    
                        </p>
                    </div>
                    <br />
                </div>

                <div className="section">
                    <h5>RESULT</h5>
                    <p>
                        SUS usability score of our redesign: <b>85.94</b> (score of the current website: 61.25)
                        <br/><br/>
                        In the end, our new website was showered with compliments on its clear interface and simplified operation. We also wrote a detailed report to give the Bureau of Labor Insurance suggestions on how their e-service platform can become more user-friendly.                    
                    </p>
                </div>

                <div className="section">
                    <h5>REFLECTION</h5>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/BLI/Reflection1.png" />
                        <div className="col">
                            <p className="bold-text">
                                1. Testing scenario may affect our result
                            </p>
                            <p>
                                As mentioned above, we figured out users prefer the functional version of categorizing service during wireframe’s usability testing. However, reflecting on this decision, our team think the testing scenario may affect users’ preference. Some users were heavily aware that they were doing a test, as they told us “I finished this question.” instead of “I finished the application service.” Not being able to put themselves in the scenario can result in behaving differently in comparison with real-life scenarios. In the future, besides acknowledging each tool has its limitation, we may also add more descriptions to help testers get into the scenario.                            
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/BLI/Reflection2.png" />
                        <div className="col">
                            <p className="bold-text">
                                2. It is important to point out the value of UX                     
                            </p>
                            <p>
                                To be frank, no matter how unfriendly the user experience is, people have no other choice but to keep using governmental websites. Hence, integrating users’ thoughts or demands in the website’s designing phase will not be considered crucial. Therefore, it will be better to elaborate on why we made these design changes and how these modifications can reduce the stress of the staff at the counter when cooperating with public sectors next time. Otherwise, the suggestions may not be seriously taken into discussion.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/BLI/Reflection3.png" />
                        <div className="col">
                            <p className="bold-text">
                                3. We should consider regulations and limitations to enhance the viability                            
                            </p>
                            <p>
                                In this project, we redesigned the information architecture, categorizing services based on their function after wireframe testing. However, we later realized that although this structure is preferred by most users, the guideline for public sector's websites writes that it is required to categorize services based on people's stage of life (Giving birth, working, retired, etc.) If we have more time, we will try to cooperate with the Bureau’s staff closer in the early stage to know about regulations and limitations, enhancing the viability of our final design.                            
                            </p>
                        </div>
                    </div>
                </div>
                <NavLink pageUrl="/Work/ARLens" project="AR Contact Lens Wearing App" />
            </div>
        )
    }
}

export default RedesignBLI;