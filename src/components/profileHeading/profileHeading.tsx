import useProfile from "@/customHooks/useProfile/useProfile";

const ProfileHeading = () => {
  const profile = useProfile();
  return (
    profile?.data?.success && (
      <div className="">
        <h2>
          {profile.data?.data?.firstName} {profile?.data?.data?.lastName}
        </h2>
      </div>
    )
  );
};
export default ProfileHeading;
