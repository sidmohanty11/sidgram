import React, { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import { AddSVG, HomeSVG } from "../../Icons";

type PropType = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Header: FC<PropType> = ({ setOpenModal }) => {
  return (
    <header className={styles.header}>
      <div>
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li
            className={styles.liTag}
            onClick={() => setOpenModal((prevState) => !prevState)}
          >
            <AddSVG />
          </li>
          <li className={styles.liTag}>
            <HomeSVG />
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
