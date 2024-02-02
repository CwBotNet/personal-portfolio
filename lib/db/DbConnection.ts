import mongoose from "mongoose";
import DB_NAME from "../../app/constants/database";

// DB connection

const Connect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connection! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Db Connection Error :${error}`);
    process.exit(1);
  }
};

export { Connect };
