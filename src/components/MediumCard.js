import React, { Component } from 'react';

class MediumCard extends Component {
    render() {
        return (
            <a href={this.props.post.pageUrl} target="_blank">
                <div className="row justify-content-center projectCard">
                    <div className="col-3 postName">
                        <h5>{this.props.post.name}</h5>
                        <p className="gray-text">{this.props.post.description}</p>
                    </div>
                    <div 
                        className="postImage" 
                        style={{backgroundImage: "url(" + this.props.post.imgUrl + ")"}}>
                    </div>
                </div>
            </a>
        )
    }
}

export default MediumCard;