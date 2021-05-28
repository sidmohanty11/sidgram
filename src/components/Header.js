import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { UserContext } from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  return (
    <div className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg  h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD}>
                <img
                  className="mt-2 w-2/12"
                  src="./images/instagram-logo1.png"
                  alt="Instagram"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {user ? (
              <>
                <div className="mr-2">
                  <Link to={ROUTES.DASHBOARD}>
                    <img src="./images/home.png" alt="" />
                  </Link>
                </div>
                <div className="mr-2">
                  <Link to={ROUTES.MESSAGE}>
                    <img src="./images/send.png" alt="" />
                  </Link>
                </div>
                <div className="mr-2">
                  <button
                    type="button"
                    title="SignOut"
                    onClick={() => firebase.auth().signOut()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        firebase.auth().signOut();
                      }
                    }}
                  >
                    <img src="./images/logout.png" alt="" />
                  </button>
                </div>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/sidharth`}>
                    <img
                      src={`/images/avatars/iphone.jpeg`}
                      alt=""
                      className="rounded-full h-10 w-32 flex"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
