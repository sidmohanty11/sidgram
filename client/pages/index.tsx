import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/UI";
import { Post } from "../components/Posts";
import styles from "@styles/Home.module.css";
import posts_data from "../assets/posts";
import { useEffect, useState } from "react";
import { PostType } from "common/types";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<PostType[]>(posts_data);
  return (
    <>
      <Head>
        <title>sidgram</title>
      </Head>
      <Header />
      <div className={styles.grid}>
        <main className={styles.gridA}>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
