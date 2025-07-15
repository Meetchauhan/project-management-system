const Profile = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-gray-700">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-2">
        <span className="font-semibold">Name:</span> {'Meet Chauhan'}
      </div>
      <div>
        <span className="font-semibold">Email:</span> {'meet@gmail.com'}
      </div>
    </div>
  );
};

export default Profile;
