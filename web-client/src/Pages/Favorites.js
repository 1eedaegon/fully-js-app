import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_FAVORITES } from "../gql/query";
import Loading from "../Components/Loading";

import ErrorText from "../Components/Error";
import NoteFeed from "../Components/NoteFeed";
const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites - Note App";
  });
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);
  if (loading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (data.me.favorites.length !== 0)
    return <NoteFeed notes={data.me.favorites} />;
  return <ErrorText>{{ message: "Not found favorites!" }}</ErrorText>;
};

export default Favorites;
