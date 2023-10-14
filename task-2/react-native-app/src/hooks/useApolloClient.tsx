import { useEffect, useState } from "react";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { byPlatform } from "../utils/functions";

export const useApolloClientInstance = (): ApolloClient<any> => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  useEffect(() => {
    const httpLink = createHttpLink({
      uri: byPlatform({
        ios: "http://localhost:4000/graphql",
        android: "http://10.0.2.2:4000/graphql",
      }),
    });
    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          "content-type": "application/json",
        },
      };
    });

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    console.log(" *********** apollo client created *********** ");

    setClient(apolloClient);

    return () => {};
  }, []);

  return client as ApolloClient<NormalizedCacheObject>;
};
