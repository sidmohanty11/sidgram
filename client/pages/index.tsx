import type { NextPage } from "next";
import Head from "next/head";
import { Header, Modal } from "../components/UI";
import { Post } from "../components/Posts";
import styles from "@styles/Home.module.css";
import posts_data from "../assets/posts";
import { useEffect, useState } from "react";
import { PostType } from "common/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Home: NextPage = () => {
  const [posts, setPosts] = useState(posts_data);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>sidgram</title>
      </Head>
      <Header setOpenModal={setOpenModal} />
      <>
        <Modal showModal={openModal} setOpenModal={setOpenModal} />
      </>
      <div className={styles.grid}>
        <main className={styles.gridA}>
          {posts ? (
            posts?.map((post: PostType) => <Post key={post.id} post={post} />)
          ) : (
            <Skeleton
              style={{ display: "block", margin: "20px" }}
              count={4}
              width={600}
              height={400}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
