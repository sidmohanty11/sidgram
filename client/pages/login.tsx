import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Formik } from "formik";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>sidgram | login</title>
      </Head>
      <div className={styles.container}>
        <Image
          layout="responsive"
          src="/logo.png"
          width={200}
          height={200}
          alt="Instagram Logo"
        />
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {}}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="username"
                name="username"
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="username"
              />
              {/* {errors.username && touched.username && errors.username} */}
              <input
                type="password"
                name="password"
                className={styles.input}
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <button
                className={styles.submit}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <p style={{ textAlign: "center" }}>
                Don&apos;t have an account yet?{" "}
                <span className={styles.link}>
                  <Link href="/register">Register</Link>
                </span>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
