import React from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";

import config from "../../data/SiteConfig";
import "./index.css";

const theme = {
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  fonts: {
    sans: "Menlo, monospace",
    mono: "Menlo, monospace"
  }
};

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </div>
    );
  }
}
