import { Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import { SearchContainer } from "components/Containers/SearchContainer";
import { AppLayout } from "layouts/AppLayout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app.page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SearchContainer />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
