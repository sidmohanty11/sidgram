import { PostType } from "common/types";
import { Card } from "components/UI";
import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";
import PostDesc from "./PostDesc";
import PostHeader from "./PostHeader";

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
    </Card>
  );
};

export default Post;
