import React, { FC } from "react";
import { PostType } from "common/types";
import styles from "@styles/PostDesc.module.css";
import { CommentSVG, HeartNotLikedSVG } from "components/Icons";

interface Props {
  post: PostType;
}
const PostDesc: FC<Props> = ({ post }) => {
  return (
    <article>
      <p className={styles.timestamp}>{post.timestamp}</p>
      <div className={styles.anotherContainer}>
        <HeartNotLikedSVG />
        <CommentSVG />
      </div>
      <div className={styles.container}>
        <h3>{post.username}</h3>
        <p className={styles.description}>{post.description}</p>
      </div>
    </article>
  );
};

export default PostDesc;
