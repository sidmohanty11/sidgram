import React, { useRef } from 'react'
import propTypes from 'prop-types';
//? header, image, actions(like,comment icons), footer, comments -> components!
const Post = ({content}) => {
    
    return (
        <div>
            
        </div>
    )
}

export default Post;

Post.propTypes = {
  content: propTypes.shape({
    username: propTypes.string,
    imageSrc: propTypes.string,
    caption: propTypes.string,
    docId: propTypes.string,
    userLikedPhoto: propTypes.bool,
    likes: propTypes.array,
    comments: propTypes.array,
    dateCreated: propTypes.number,
  }),
};