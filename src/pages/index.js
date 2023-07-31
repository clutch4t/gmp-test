import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://gmp.einzelwerk.io/api/en/resource/index");
  const data = await res.json();

  const menuRes = await fetch("https://gmp.einzelwerk.io/api/en/config");
  const menuData = await menuRes.json();

  const languageRes = await fetch("https://gmp.einzelwerk.io/api/languages");
  const languageData = await languageRes.json();
  return {
    props: {
      data,
      menuData,
      languageData
    },
  };
}

const index = ({ data, menuData, languageData }) => {
  return (
    <>
      <Head>
        <title>{data.pagetitle}</title>
      </Head>
      <Layout menuData={menuData} data={data} languageData={languageData} />
    </>
  );
};

export default index;
