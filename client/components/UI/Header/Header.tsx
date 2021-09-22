import React, { FC } from "react";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import { AddSVG, HomeSVG } from "../../Icons";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.liTag}>
            <HomeSVG />
          </li>
          <li className={styles.liTag}>
            <AddSVG />
          </li>
          <li className={styles.liTag}>
            <Image
              className={styles.rounded}
              src="/pp.jpg"
              alt="logo"
              width={33}
              height={33}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
