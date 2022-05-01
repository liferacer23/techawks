import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout>
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </LazyMotion>
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
