import React from "react";
import Helmet from "react-helmet";
import { Box, Heading, Flex, Text } from "rebass";

import Layout from "../layout";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <Text fontFamily="mono" style={{ position: "absolute", top: 30, left: 30 }}>
          {config.userName}
        </Text>

        <Flex alignItems="center" justifyContent="center" style={{ height: "calc(100vh - 121px)" }}>
          <Box>
            <Heading fontFamily="mono" style={{ width: "80vw", maxWidth: 600 }} textAlign="center">
              {config.userDescription}
            </Heading>

            <Text
              fontFamily="mono"
              mt={30}
              style={{ width: "80vw", maxWidth: 600 }}
              textAlign="center"
            >
              {config.userSubdescription}
            </Text>
          </Box>
        </Flex>

        <Footer config={config} />
      </Layout>
    );
  }
}

export default Index;
