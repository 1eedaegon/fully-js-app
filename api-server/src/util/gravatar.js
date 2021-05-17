import md5 from "md5";

const genGravatar = async (email) =>
  await `https://www.gravatar.com/avatar/${md5(email)}.jpg?d=identicon`;

export default genGravatar;
