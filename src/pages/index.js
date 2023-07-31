import Head from "next/head";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export async function getStaticProps() {
  const res = await fetch("https://gmp.einzelwerk.io/api/en/resource/index");
  const data = await res.json();

  const menuRes = await fetch("https://gmp.einzelwerk.io/api/en/config");
  const menuData = await menuRes.json();
  return {
    props: {
      data,
      menuData,
    },
  };
}

const index = ({ data, menuData }) => {
  return (
    <>
      <Head>
        <title>{data.pagetitle}</title>
      </Head>
      <Hero data={data} />
      <Header menuData={menuData} />
    </>
  );
};

export default index;
