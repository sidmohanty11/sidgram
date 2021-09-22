import React, { FC } from "react";
import { CommentType } from "../../common/types";
import styles from "@styles/PostDesc.module.css";

interface Props {
  comment: CommentType;
}

const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className={styles.container} style={{ fontSize: "12px" }}>
      <p style={{ fontWeight: "bold" }}>{comment.username}</p>
      <p style={{ marginLeft: "7px" }}>{comment.comment}</p>
    </div>
  );
};

export default Comment;
