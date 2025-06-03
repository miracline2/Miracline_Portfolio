import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";

const ProfileBanner = () => {
  return (
    <div className="w-full h-screen flex justify-center" id="about">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-4 mt-20">
        <Profile />
        <ProfileDetails />
      </div>
      
    </div>
  );
};

export default ProfileBanner;
