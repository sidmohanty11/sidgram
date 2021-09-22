import React from "react";
import styles from "@styles/PostHeader.module.css";

const PostHeader = () => {
  return (
    <div className={styles.container}>
      <img
        style={{ borderRadius: "100%", margin: "10px" }}
        width={40}
        height={40}
        src="./pp.jpg"
        alt="profile pic"
      />
      <h3>sid</h3>
    </div>
  );
};

export default PostHeader;
