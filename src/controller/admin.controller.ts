import Admin from "@/model/admin";
import { AdminRegisterType } from "@/types/types";
import bcrypt from "bcryptjs";

export const register = async (data: AdminRegisterType) => {
  const { firstName, lastName, email, password } = data;

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    return {
      success: false,
      message: "Email already exist",
    };
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  const registerAdmin = await admin.save();
  return {
    success: true,
    data: registerAdmin,
  };
};

interface loginData {
  email: string;
  password: string;
}
export const login = async (data: loginData) => {
  const { email, password } = data;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    return {
      success: false,
      message: "Invalid Credential",
    };
  }
  const hashPassword = await bcrypt.compare(password, admin.password);
  if (!hashPassword) {
    return {
      success: false,
      message: "Invalid Credential",
    };
  }
  return {
    success: true,
    data: {
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
    },
  };
};
