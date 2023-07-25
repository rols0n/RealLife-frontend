//             top-navbar
// sidebar // post creator // sidebar //
// sidebar // activity    // sidebar //
// sidebar // activity    // sidebar //

import PCredirector from "@/components/UI/creators/posts/PCredirector";
import TopNavbar from "@/components/UI/navbars/main/topNavbar";
import UserStatusBar from "@/components/UI/users-status/bar/UsersStatusBar";
import RegularPopup from "@/components/UI/popups/regular/Index";
import Post from "@/components/UI/post/Post";
import PopupPreview from "@/components/UI/popups/components/Preview";
import { useState } from "react";

const previewsMsgs = [
  {
    image: "./icons/face.png",
    heading: "Eguardo Roll",
    description: "You: Whats popping?",
  },
];

const previewNotifications = [
  {
    image: "./icons/face.png",
    heading: "Eguardo Roll",
    description: "Liked your post!",
  },
  {
    image: "./imgs/realLife-logo.pmg",
    heading: "Real Life",
    description: "Disliked your post!",
  },
];

const MainPage: React.FC = () => {
  const [displayMsgs, setDisplayMsgs] = useState(false);
  const [displayNoti, setDisplayNoti] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <>
      {displayMsgs && (
        <RegularPopup
          setDisplay={setDisplayMsgs}
          heading="Messages"
          placeholder="Search for conversation"
          inputID="conv-searcher"
          previews={previewsMsgs}
        />
      )}

      {displayNoti && (
        <RegularPopup
          setDisplay={setDisplayNoti}
          heading="Notifications"
          placeholder="Search for notification."
          inputID="noti-searcher"
          previews={previewNotifications}
        />
      )}
      {displaySearch && (
        <RegularPopup
          setDisplay={setDisplaySearch}
          heading="Real Life"
          placeholder="Browse Real Life."
          inputID="rl-searcher"
        />
      )}

      <TopNavbar
        setDisplayMsgs={setDisplayMsgs}
        setDisplayNoti={setDisplayNoti}
        setDisplaySearch={setDisplaySearch}
      />
      {/* PC - Post Creator */}
      <PCredirector />
      {/* <UserStatusBar /> */}
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default MainPage;
