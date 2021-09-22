import React, { FC } from "react";
import styles from "@styles/Card.module.css";

const Card: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
