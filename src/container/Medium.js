import React, { useEffect } from 'react';
import { Card } from "../components";
import { GApageView } from "../ga.js";

function Medium() {
    useEffect(() => {
        GApageView("Medium", "Medium");
    }, []);

    const posts = [{
        title: "Build a Pix2Pix GAN With Python",
        subtitle: "Machine Learning",
        imgUrl: "https://miro.medium.com/max/1400/1*SGAMwfdkpv9TpnGkDHoLWg.png",
        pageUrl: "http://medium.com/swlh/6db841b302c7"
    }, {
        title: "Draw a draggable line chart in Angular with Chart.js",
        subtitle: "Front-end",
        imgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*n47kP3C-780lfMqlAGMWNw.gif",
        pageUrl: "https://wendeehsu.medium.com/1364b1193c98"
    }, {
        title: "Google Analytics in React.js",
        subtitle: "Front-end, Data Analytics",
        imgUrl: "https://miro.medium.com/max/1400/1*SQXY-ker6mSvffwOBnBW9w.png",
        pageUrl: "https://wendeehsu.medium.com/c1b78dc1bbda"
    }, {
        title: "Web Crawling with Scrapy",
        subtitle: "Data Acquisition",
        imgUrl: "https://miro.medium.com/max/1400/1*7KVe2szj1rjt1_Jlmdznkw.png",
        pageUrl: "https://medium.com/analytics-vidhya/f4d93c1bfcc7"
    }];

    return (
        <div>
            <h1 className="title">
                My Medium
            </h1>
            {
                posts.map((post,i) => (
                    <Card
                        key={`post-${i}`}
                        title={post.title}
                        subtitle={post.subtitle}
                        imgUrl={post.imgUrl}
                        pageUrl={post.pageUrl}
                        isExternal={true}
                    />
                ))
            }
        </div>
    )
}

export default Medium;