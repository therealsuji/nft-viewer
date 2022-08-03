import { useConnection } from "@solana/wallet-adapter-react";
import React, { ReactElement, useEffect, useState } from "react";
import { useMetaplex } from "hooks/useMetaplex";
import { getNftsForAccount } from "helper/accountHelper";
import { useRouter } from "next/router";
import { Container, SimpleGrid, Skeleton, useToast } from "@chakra-ui/react";
import { NextPageWithLayout } from "pages/_app.page";
import { AppLayout } from "layouts/AppLayout";
import { SearchContainer } from "components/Containers/SearchContainer";
import { toPublicKey } from "helper/utils";
import { NftCard } from "components/Containers/NftCard";
import { compact } from "lodash";

const SearchPage: NextPageWithLayout = () => {
  const { metaplex } = useMetaplex();
  const { connection } = useConnection();
  const { query, push } = useRouter();
  const searchPublicKey = query.id as string;
  const toast = useToast();
  const [nftList, setNftList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      if (!metaplex || !connection || !searchPublicKey) return;
      const publicKey = toPublicKey(searchPublicKey);
      if (!publicKey) {
        toast({
          title: "Invalid public key",
          status: "error",
          isClosable: true,
          duration: 2000,
        });
        return;
      }
      const accounts = await getNftsForAccount(connection, publicKey);
      const nftPublicKeys = compact(accounts.map((account) => toPublicKey(account)));
      const data = await metaplex.nfts().findAllByMintList(nftPublicKeys).run()
      
     })();
  }, [metaplex, connection, searchPublicKey]);

  return (
    <>
      <SearchContainer></SearchContainer>
      <SimpleGrid columns={3} spacing={10} mt="5">
        {nftList.map((publicKey: string, idx: number) => (
          <NftCard address={publicKey} key={idx} />
        ))}
      </SimpleGrid>
    </>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default SearchPage;
