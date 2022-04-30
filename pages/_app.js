import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
