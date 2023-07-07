import mongoose from "mongoose";
const connectDataBase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/Tekisky", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Connected To The Database :${data.connection.host}`);
    });
};

export default connectDataBase;
