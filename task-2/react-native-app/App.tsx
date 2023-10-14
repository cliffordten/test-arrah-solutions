import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductItem from "./src/components/product";
import { useEffect, useRef, useState } from "react";
import { Colors } from "./src/config/colors";
import Constants from "expo-constants";
import { ApolloProvider } from "@apollo/client";
import { useApolloClientInstance } from "./src/hooks/useApolloClient";
import {
  Product,
  useGetAllProductsLazyQuery,
} from "./src/graphql/generated/schema";
import { makeArrayUnique } from "./src/utils/functions";

const SubAppRoot = () => {
  const [loadingMore, setLoadingMore] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const stopFetching = useRef(true);

  const [getAllProduct, { data, loading }] = useGetAllProductsLazyQuery();

  const handleGetAllProducts = async (page: number) => {
    try {
      return await getAllProduct({
        variables: {
          paginateProductInput: {
            page,
          },
        },
      });
    } catch (error) {
      console.log("error getting all products", error);
    }
  };

  useEffect(() => {
    if (!data) {
      handleGetAllProducts(currentPage);
    }

    if (currentPage == 1 && data?.getAllProducts.length) {
      setProducts(data.getAllProducts);
    }

    return () => {};
  }, [data]);
  // useEffect(() => {
  //   const loadMore = async () => {

  //     const result = await handleGetAllProducts(currentPage);
  //     if (data?.getAllProducts) {
  //       setProducts((prev) => [...prev, ...data?.getAllProducts]);
  //       console.log(result?.data?.getAllProducts[0].name);
  //     }
  //   };

  //   if (currentPage > 1) {
  //     loadMore();
  //   }

  //   return () => {};
  // }, [currentPage, data]);

  const handleOnEndReached = async () => {
    setLoadingMore(true);
    if (!stopFetching.current) {
      setCurrentPage((prev) => prev + 1);
      const result = await handleGetAllProducts(currentPage + 1);
      if (result?.data?.getAllProducts?.length) {
        setProducts((prev) => [
          ...prev,
          ...(result?.data?.getAllProducts as Product[]),
        ]);
        console.log(result?.data?.getAllProducts[0].name);
      }

      stopFetching.current = true;
    }
    setLoadingMore(false);
  };

  if (!products.length && loading) {
    return <ActivityIndicator color={Colors.secondary} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Arrah Solution Test!</Text>
      <StatusBar style="auto" />
      <FlatList
        data={makeArrayUnique(products)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem {...item} />}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.05}
        onScrollBeginDrag={() => {
          stopFetching.current = false;
        }}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={() =>
          loadingMore && <ActivityIndicator color={Colors.secondary} />
        }
      />
    </View>
  );
};

export default function App() {
  const client = useApolloClientInstance();

  return client ? (
    <ApolloProvider client={client}>
      <SubAppRoot />
    </ApolloProvider>
  ) : (
    <ActivityIndicator color={Colors.secondary} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    paddingVertical: 20,
  },
  text: {
    textAlign: "center",
    paddingVertical: 20,
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
});
