import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class AIXray extends Component {
    render() {
        return (
            <div>
                <div className="cover gray-bg row justify-content-center">
                    <img className="coverImage" src="/images/project3-cover.png" />
                    <div className="col-4 vertical-center">
                        <h5 className="pink-text">Dentall</h5>
                        <h4>AI Image Classification</h4>
                        <h5 className="gray-text">
                            March 2020 - Octobor 2020
                        </h5>
                    </div>
                </div>

                <div className="section">
                    Nowadays, dentists need to manually sort through many unordered images, limiting the time and quality spent on explaining the tooth condition to the patient. As a result, we decide to automize this tedious work with machine learning. In the end, our service successfully reduces dentists' time on classifying one image from 1 second to 0.2 seconds, helping dentists to focus more on their patients.
                </div>

                <div className="section">
                    <h5>MY ROLE</h5>
                    <p>
                        Machine Learning Engineer
                        <br/>
                        Backend Engineer
                    </p>
                </div>

                <div className="section">
                    <h5>TECHNIQUE</h5>
                    <p>
                        Programming language: Python
                        <br/>
                        Convolutional Neural Network
                        <br/>
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
                        We went to clinics to observe how dentists interact with patients. Later, we found out that whenever a dentist is explaining the patient’s teeth condition, he needs to first open the folder containing many unordered tooth images, manually sort through these images, and later select those that can help the patient understand the teeth’s condition better.
                    </p>
                    <div className="row justify-content-center">
                        <img className="center-img-space-3" src="/images/Xray/ProblemProcess.png"/>
                    </div>
                    <p>
                        However, dentists have limited time on treating each patient. Therefore, many dentists will explain the teeth’s condition while sorting and selecting images. The time spent on organizing images will reduce the quality for patients to understand what dentists tell them. These patients may be confused, ending up asking the same questions repeatedly.
                    </p>
                </div>

                <div className="section">
                    <p className="section-subtitle blue-text">Our Focus</p>
                    <div className="div-box" style={{margin: "1.5rem 0rem"}}>
                        <p className="vertical-center">
                            We want to optimize the image sorting step to enhance the quality for dentists to explain patients’ teeth condition, helping them focus more on the interaction with patients.                        
                        </p>
                    </div>
                    <p>
                        As the technique of using artificial intelligence to classify images is fully developed, it shows a guaranteeing accuracy in other medical applications such as the classification of Alzheimer’s disease with brain tissue images. Hence, we decided to develop our own AI service aiming to sort through images automatically.
                    </p>
                </div>

                {/* ---- 2. Develop the Image Classification Algorithm ---- */}
                <div className="section">
                    <p className="secondary-title">2. Develop the Image Classification Algorithm</p>
                    <p className="section-subtitle blue-text">Define the classes</p>
                    <p>
                        Since we want the machine to learn how to classify images on its own, we have to teach it first. We start with defining mutually exclusive classes, in which we want an image to be categorized.
                    </p>
                    <div className="row justify-content-center">
                        <img className="col-5" style={{margin: "1.5rem 0rem"}} src="/images/Xray/XrayTemplate.png"/>
                        <p className="gray-text text-center">The x-ray template with each position’s corresponding class name</p>
                    </div>
                </div>
                
                <div className="section">
                    <p className="section-subtitle blue-text">Gather Data</p>
                    <p>
                        The rule of thumb in machine learning is that the more data we have, the higher possibility the algorithm can find the feature particular to each class. The variety of images in each class will also contribute to the robustness of the final prediction. As a result, we cooperated with several dentists and Taipei Medical University to derive x-ray images, recently having <b>383 ~ 1525 images</b> in each class.
                    </p>
                </div>

                <div className="section">
                    <p className="section-subtitle blue-text">Machine Learning</p>
                    <div className="row justify-content-center">
                        <img className="center-img-space-3" src="/images/Xray/MLProcess.png"/>
                    </div>
                    <p>
                        As images are transformed into numerical matrices based on their pixel-wise RGB values, the machine will take the matrices as input. We later use convolutional neural networks to extract features in these transformed matrices by performing specific mathematical operations such as convolution and pooling. In the training process, the network will update the prediction result of an image after comparing it with the image’s ground truth. After updating several times, the output of the network will be a class along with the possibility that the given image belongs to that class. 
                    </p>
                </div>
            </div>
        )
    }
}

export default AIXray;