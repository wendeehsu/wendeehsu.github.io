import React, { Component } from 'react';
import MediumCard from "./MediumCard";
import "../css/Medium.css";
import { GApageView } from "../ga.js";

class Medium extends Component {
    componentDidMount() {
        GApageView("Medium");
    }

    render() {
        const post1 = new Post(
            "Build a Pix2Pix GAN With Python",
            "Machine Learning",
            "https://miro.medium.com/max/1400/1*SGAMwfdkpv9TpnGkDHoLWg.png",
            "http://medium.com/swlh/6db841b302c7"
        );

        const post2 = new Post(
            "Instance segmentation with Detectron2",
            "Machine Learning",
            "https://miro.medium.com/max/1400/1*ui7_rt6uboRrh-BvpqQlEg.png",
            "http://medium.com/@wendeehsu/127fbe01b20b"
        );

        const post3 = new Post(
            "Web Crawling with Scrapy",
            "Data Acquisition",
            "https://miro.medium.com/max/1400/1*7KVe2szj1rjt1_Jlmdznkw.png",
            "https://medium.com/analytics-vidhya/f4d93c1bfcc7"
        );

        const post4 = new Post(
            "Google Analytics in React.js",
            "Front-end, Data analytics",
            "https://miro.medium.com/max/1400/1*SQXY-ker6mSvffwOBnBW9w.png",
            "https://medium.com/@wendeehsu/c1b78dc1bbda"
        );

        return (
            <div>
                <h3 className="title">
                    My Medium
                </h3>
                <MediumCard post={post1} />
                <MediumCard post={post2} />
                <MediumCard post={post3} />
                <MediumCard post={post4} />
            </div>
        )
    }
}

class Post {
    constructor(name, description, imgUrl, pageUrl) {
      this.name = name;
      this.description = description;
      this.imgUrl = imgUrl;
      this.pageUrl = pageUrl;
    }
};

export default Medium;