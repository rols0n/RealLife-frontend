//             top-navbar
// sidebar // post creator // sidebar //
// sidebar // activity    // sidebar //
// sidebar // activity    // sidebar //

import PCredirector from "@/components/UI/creators/posts/PCredirector";
import TopNavbar from "@/components/UI/navbars/main/topNavbar";
import BottomNavbar from "@/components/UI/navbars/mobile-only/BottomNavbar";

import Post from "@/components/UI/post/Post";

const MainPage: React.FC = () => {
  return (
    <>
      <TopNavbar /> {/* PC - Post Creator */}
      <PCredirector />
      {/* <UserStatusBar /> */}
      <div style={{ marginBottom: "60px" }}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <BottomNavbar page="home" />
    </>
  );
};
export default MainPage;
