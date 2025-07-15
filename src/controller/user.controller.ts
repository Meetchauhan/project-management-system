import bcrypt from "bcryptjs";
import { generateToken } from "../util/jwt";
import { cookies } from "next/headers";
import { getAuthUser } from "../lib/auth/auth";
import User from "../model/user";
import { updateProfileType, userLoginType, userRegisterType } from "@/types/types";

export const register = async (data: userRegisterType) => {
  const { firstName, lastName, email, password } = data;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return {
      success: false,
      message: "User already exists",
    };
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  const registerUser = await user.save();
  return {
    success: true,
    data: registerUser,
    message: `${firstName} ${lastName} Registered successfully`,
  };
};

export const login = async (data: userLoginType) => {
  const { email, password } = data;
  const user = await User.findOne({ email });

  if (!user) {
    return {
      success: false,
      message: "Invalid Credential",
    };
  }
  const hashPassword = await bcrypt.compare(password, user.password);
  if (!hashPassword) {
    return {
      success: false,
      message: "Invalid Credential",
    };
  }
  const token = await generateToken(user?._id);
  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return {
    success: true,
    message: `${user.firstName} ${user.lastName} login successfully`,
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: token,
    },
  };
};

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  return {
    success: true,
    message: "Logged out successfully",
  };
};

export const profile = async () => {
  const user = await getAuthUser();
  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }
  const getProfile = await User.findById(user?.userId);
  const userProfile = {
    _id: getProfile?._id,
    firstName: getProfile?.firstName,
    lastName: getProfile?.lastName,
    email: getProfile?.email,
  };

  return {
    success: true,
    data: userProfile,
  };
};

export const updateProfile = async (data: updateProfileType) => {
  const { firstName, lastName, email } = data;
  const user = await getAuthUser();
  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  if (!user || !user.userId) {
    throw new Error("Unauthorized or user not found");
  }
  const existingUser = await User.findById(user.userId);
  if (!existingUser) {
    throw new Error("User not found");
  }
  const updatedProfile = await User.findByIdAndUpdate(
    user.userId,
    {
      firstName: firstName ?? existingUser.firstName,
      lastName: lastName ?? existingUser.lastName,
      email: email ?? existingUser.email,
    },
    { new: true }
  );
  await updatedProfile.save();
  
  return {
    success: true,
    data: updatedProfile,
    message: "Profile updated successfully",
  };
};
