import React from "react";
import Head from "next/head";
import Sidenav from "../components/sidenav";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        src="https://kit.fontawesome.com/af801ed5a5.js"
        crossorigin="anonymous"
      ></script>
    </Head>

    <Nav />
    <Sidenav />
  </div>
);

export default Home;
