import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "Secret key not define";

export const generateToken = async (userId: string | number) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const verify = jwt.verify(token, JWT_SECRET);
    return verify;
  } catch (e) {
    return e;
  }
};
