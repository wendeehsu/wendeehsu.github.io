import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class RedesignBLI extends Component {
    render() {
        return (
            <div>
                <div className="cover gray-bg row justify-content-center">
                    <img className="coverImage" src="/images/project1-cover.png" />
                    <div className="col-4 vertical-center">
                        <h6 className="pink-text">PDIS</h6>
                        <h4>Redesign Website of Bureau of Labor Insurance</h4>
                        <h6 className="gray-text">
                            July 2020 - September 2020
                        </h6>
                    </div>
                </div>
                
                <div className="section">
                    In 10 weeks, we assisted the Bureau of Labor Insurance to redesign its website (e-service platform) based on users’ needs. As our design aims to provide adequate assistance when users encounter difficulties in different stages, our new design scored 85.94 in the final SUS usability testing, which was way higher than the original website’s score of 61.25.
                </div>

                <div className="section">
                    <h6>MY ROLE</h6>
                    <p>
                        Participant in both UX research and UI design                    
                    </p>
                </div>

                <div className="section">
                    <h6>METHOD & TOOL</h6>
                    <p>
                        Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing
                        <br/>
                        Tools: Miro, Figma 
                    </p>
                </div>

                <div className="section">
                    <h6>PROCESS OVERVIEW</h6>
                    <img className="full-width-img" src="/images/BLI/Process.png" />
                </div>

                <div className="section">
                    <h6>DESIGN PROCESS</h6>

                    {/* ---- 1. User Reasearch ---- */}
                    <p className="secondary-title">1. User Reasearch</p>
                    <p className="section-subtitle">Interview</p>
                    <div className="row">
                        <p className="col-6">
                            To find current users of the e-service platform of the Bureau of Labor Insurance, we released questionnaires asking about people’s experience of using the website. We later selected 5 users and conducted semi-structured interviews with them. To include thoughts from our stakeholders into the new design, we also arranged meetings with 4 staff working in the Information Technology Division of the Bureau of Labor Insurance.
                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/Test.png" />
                    </div>
                    <p className="section-subtitle">Affinity Diagram</p>
                    <div className="row">
                        <p className="col-6">
                            After interviewing each user and stakeholders, we sorted more than 100 user quotes, derived 25 insights, and generated 3 personas.
                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/AffinityDiagram.png" />
                    </div>
                    <p className="section-subtitle">User Types</p>
                    <p>
                        Based on whether these users are familiar with their goal on the website and their degree of attention they pay to their right of labor insurance, we made 3 personas corresponding to each group we want to target.
                    </p>
                    <img className="full-width-img" src="/images/BLI/UserVector.png" />
                    <p>
                        For each group, we identified their needs and pain points:
                    </p>
                    <img className="full-width-img" src="/images/BLI/UserTable.png" />

                    {/* ---- 2. Define Problem ---- */}
                    <p className="secondary-title">2. Define Problem</p>
                    <div className="div-box">
                        <p className="vertical-center">
                            How Might We provide adequate assistance when users encounter difficulties in different stages?
                        </p>
                    </div>
                    <p className="section-subtitle">User Need</p>
                    <p>
                        Users expect the website to provide a clear guide and immediate feedback when searching or applying for a service.
                    </p>
                    <p className="section-subtitle">Limitation</p>
                    <p>
                        Bureau of Labor Insurance supports a wide variety of services for people facing different incidences, but the website has a barely low rate of usage. A person may visit the website no more than twice a year. As a result, we should regard each person as first-time users when designing guidance.                    
                    </p>

                    {/* ---- 3. Design Wireframe ---- */}
                    <p className="secondary-title">3. Design Wireframe</p>
                    <p className="section-subtitle">Using different information architecture to design two versions of wireframe</p>
                    <p>
                        Since the Bureau of Labor Insurance provides a wide variety of services, we made two versions of wireframe using different information architecture to categorize each service. The “Stage of Life” version divides services into “working, retired, disabled, unemployed, giving birth, dead”. As for the “Function” version, we simply labeled each service into “making inquiries, applying, paying, changing data, printing”.
                    </p>
                    <img className="full-width-img" src="/images/BLI/IaCompare.png" />
                    <p className="section-subtitle">Usability Testing on Information Architecture</p>
                    <p>
                        We conducted 5 usability testing, carefully selected users with diverse backgrounds. Besides testing our current user flow, we were more interested in which information architecture do they prefer.
                    </p>
                    <div className="row">
                        <p className="col-6">
                            Surprisingly, users found it difficult to search for the service they want in the “Stage of Life” version. For example, there is a subsidy that can only be applied when one was unemployed but later got a new job in 3 months. In this case, some may categorize it as “unemployed”, while others think it should belong to “working”. Due to the lower degree of confusion raised in classifying each service, we decided to use the “Function” version in our future iteration.                        </p>
                        <img className="full-width-img col-6" src="/images/BLI/Wireframe.png" />
                    </div>

                    {/* ---- 4. Creating Propotype ---- */}
                    <p className="secondary-title">4. Creating Propotype</p>
                    <p className="section-subtitle">Login</p>
                    <img className="flow-img" src="/images/BLI/Prototype_Login.png"/>
                    <p className="section-subtitle">Applying for a service</p>
                    <img className="full-width-img" src="/images/BLI/Prototype_Apply.png"/>

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
                    <h6>FINAL DESIGN</h6>

                    <p className="secondary-title">1. Login</p>
                    <p>
                        Since the Bureau of Labor Insurance is going to support different ways to log in, we enable users to choose a suitable option based on the login equipment they have. Besides, the filling fields are disabled before the website successfully detected all the required login equipment. This will reduce users’ time wasted on filling in the fields again and again.
                    </p>
                </div>

                {/* ---- 1. Login ---- */}
                <div className="full-width-section gray-bg">
                    <img className="label-img" src="/images/BLI/OldLabel.png" />
                    <img className="full-width-img" src="/images/BLI/OldLogin.png" />
                </div>
                <div className="full-width-section">
                    <img className="label-img" src="/images/BLI/NewLabel.png" />
                    <img className="full-width-img" src="/images/BLI/NewLogin.png" />
                </div>

                {/* ---- 2. Inquiry Main Page ---- */}
                <div className="section">
                    <p className="secondary-title">2. Inquiry Main Page</p>
                    <p>
                        To shorten user’s time spend searching for a service, we use a side menu with cards showing each service in the main space.                    
                    </p>
                </div>
                <div className="full-width-section gray-bg">
                    <img className="label-img" src="/images/BLI/OldLabel.png" />
                    <br/>
                    <div className="center-context">
                        <img className="full-width-img" src="/images/BLI/OldInquiry.png" />
                        <p>
                            The dropdown list is shown when hovering, which is not friendly for the website’s elder users since they are used to clicking buttons. Besides, the nested display and small service titles add to the difficulty when searching for a service. 
                        </p>
                    </div>
                </div>
                <div className="full-width-section">
                    <img className="label-img" src="/images/BLI/NewLabel.png" />
                    <br/>
                    <div className="center-context">
                        <img className="full-width-img" src="/images/BLI/NewInquiry.png" />
                    </div>
                </div>

                {/* ---- 3. Qualification Check ---- */}
                <div className="section">
                    <p className="secondary-title">3. Qualification Check</p>
                    <p>
                        As users may not be sure of whether they are qualified to apply for a service, we added a qualification check helper before each application.                    
                    </p>
                </div>
                <div className="full-width-section gray-bg">
                    <img className="label-img" src="/images/BLI/OldLabel.png" />
                    <br/>
                    <div className="center-context">
                        <img className="full-width-img" src="/images/BLI/OldQualification.png" />
                        <p>
                            On the current website, the agreement contains many important details like rules about qualification. However, most users will not read the content. They may end up finishing the whole application process but later found out they were not qualified.                        
                        </p>
                    </div>
                </div>
                <div className="full-width-section">
                    <img className="label-img" src="/images/BLI/NewLabel.png" />
                    <img className="full-width-img" src="/images/BLI/NewQualification.png" />
                </div>

                {/* ---- 4. Application Process ---- */}
                <div className="section">
                    <p className="secondary-title">4. Application Process</p>
                    <p>
                        On the current website, users have no clues about the progress after applying for a service. They will only receive an official letter if their application was declined. As users want to know at which step their application is, we designed a new page to disclose the dates about when the status of the application has been changed.                    
                    </p>
                </div>
                <div className="full-width-section">
                    <img className="label-img" src="/images/BLI/NewLabel.png" />
                    <br/>
                    <div className="center-context">
                        <img className="full-width-img" src="/images/BLI/NewApplicationProcess.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default RedesignBLI;