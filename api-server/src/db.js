import mongoose from "mongoose";
export default {
  connect: (CONN_URI) => {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true); 
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(CONN_URI);
    mongoose.connection.on("error", (err) => {
      console.error(err);
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running"
      );
      process.exit(1);
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
