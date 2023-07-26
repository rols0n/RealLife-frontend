import useRegPopup from "./useRegPopup";

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

const useNavPopups = () => {
  const {
    html: MsgPopup,
    state: msgState,
    toggle: toggleMsg,
  } = useRegPopup({
    previews: previewsMsgs,
    heading: "Messages",
    placeholder: "Search for conversation",
    inputID: "msg-searcher",
  });

  const {
    html: NotiPopup,
    state: notiState,
    toggle: toggleNoti,
  } = useRegPopup({
    previews: previewNotifications,
    heading: "Notifications",
    placeholder: "Search for notification",
    inputID: "noti-searcher",
  });

  const {
    html: SearchPopup,
    state: searchState,
    toggle: toggleSearch,
  } = useRegPopup({
    previews: previewNotifications,
    heading: "Real Life",
    placeholder: "Browse Real Life",
    inputID: "rl-searcher",
  });

  const popups = (
    <>
      {MsgPopup}
      {NotiPopup}
      {SearchPopup}
    </>
  );

  return { popups, toggleSearch, toggleNoti, toggleMsg };
};
export default useNavPopups;
