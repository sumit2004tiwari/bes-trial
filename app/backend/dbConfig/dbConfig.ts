import mongoose from "mongoose";
import { MONGODB_URI } from "../config/constant";
const connection = {
  isConnected: 0,
};
export async function connect() {
  if (connection.isConnected) {
    return;
  }
  try {
    await mongoose?.connect(MONGODB_URI as string);
    const connectionState = mongoose.connection;
    connection.isConnected = connectionState.readyState;
    connectionState.on("connected", () => {});
    connectionState.on("error", (e) => {
      console.log(e);
      process.exit(500);
    });
  } catch (e) {
    console.log("something went wrong in connecting to wrong");
    console.log(e);
  }
}
