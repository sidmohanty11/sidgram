import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "@styles/Modal.module.css";

type PropType = {
  showModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<PropType> = ({ showModal, setOpenModal }) => {
  return (
    <>
      {showModal && (
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            <h1>Write your story!</h1>
            <label>
              <input placeholder="photo_url" className={styles.photoUrl} />
            </label>
            <label>
              <textarea
                placeholder="your story here..."
                className={styles.storyContent}
              />
            </label>
            <button
              onClick={() => setOpenModal((prevState) => !prevState)}
              className={styles.modalFooter}
            >
              Close
            </button>
            <button
              onClick={() => setOpenModal((prevState) => !prevState)}
              className={styles.modalFooter}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
