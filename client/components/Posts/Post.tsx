import { PostType } from "common/types";
import { Card } from "components/UI";
import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";
import PostDesc from "./PostDesc";
import PostHeader from "./PostHeader";
import Comment from "../Comments";

interface Props {
  post: PostType;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <Card>
      <PostHeader />
      <img
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
          margin: "auto",
        }}
        src={post.photo_url}
        alt=""
      />
      <PostDesc post={post} />
      {post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Card>
  );
};

export default Post;
