import mongoose from "mongoose";

export async function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return Promise.resolve();
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
