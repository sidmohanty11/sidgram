import React, { useContext, useState, useRef } from "react";
import { FirebaseContext } from "../../context/firebase";
import { UserContext } from "../../context/user";
import propTypes from "prop-types";

const AddComment = ({ docId, comments, setComments, commentInput }) => {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (e) => {
    e.preventDefault();

    //? give me a new array -> put the new array in there and add the old comments
    setComments([{ displayName, comment }, ...comments]);
    setComment("");
    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };
  return (
    <div className="border-t border-gray-primary">
      <form
        className="flex justify-between pl-0 pr-5"
        method="post"
        onSubmit={(e) =>
          comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 outline-none"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  docId: propTypes.string,
  comments: propTypes.array,
  setComments: propTypes.func,
  commentInput: propTypes.object,
};
