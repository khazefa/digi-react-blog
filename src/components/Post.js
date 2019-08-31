import React, { Component } from 'react'

class Post extends Component {

    render() {
        const post = this.props.postDetail

        return (
            <div>
                <span>{post.dateString}</span>
                <h1>{post.title}</h1>
                <img src={post.image} />
                <p dangerouslySetInnerHTML={{__html:post.text}}></p>
            </div>
        )
    }

}

export default Post