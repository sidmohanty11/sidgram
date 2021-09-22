import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Formik } from "formik";
import styles from "../styles/Login.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>sidgram | register</title>
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
          initialValues={{ username: "", password: "", name: "", imageURL: "" }}
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
              <input
                type="name"
                name="name"
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="name"
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
              <input
                type="text"
                name="imageURL"
                className={styles.input}
                placeholder="profilepicURL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageURL}
              />
              <button
                className={styles.submit}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <p style={{ textAlign: "center" }}>
                Already have an account?{" "}
                <span className={styles.link}>
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
