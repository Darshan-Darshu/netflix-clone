import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <div className="profileScreen_plansBody">
                <p>Renewal date: 04/03/2021</p>
                <div className="profileScreen_subscribe">
                  <div className="profileScreen_subscribeDetails">
                    <h4>Netflix Standard</h4>
                    <p>1080p</p>
                  </div>
                  <button>Subscribe</button>
                </div>
                <div className="profileScreen_subscribe">
                  <div className="profileScreen_subscribeDetails">
                    <h4>Netflix Basic</h4>
                    <p>480p</p>
                  </div>
                  <button>Subscribe</button>
                </div>
                <div className="profileScreen_subscribe">
                  <div className="profileScreen_subscribeDetails">
                    <h4>Netflix Standard</h4>
                    <p>1080p</p>
                  </div>
                  <button>Subscribe</button>
                </div>
              </div>
              <button
                className="profileScreen_signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
