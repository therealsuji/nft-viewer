import { Container } from "@chakra-ui/react";
import { AppHeader } from "components/AppHeader";
import React from "react";
import { FCC } from "types";

export const AppLayout: FCC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Container>{children}</Container>
    </>
  );
};
