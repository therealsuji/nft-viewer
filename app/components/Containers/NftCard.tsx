import { Skeleton } from "@chakra-ui/react";
import { useConnection } from "@solana/wallet-adapter-react";
import { toPublicKey } from "helper/utils";
import { useMetaplex } from "hooks/useMetaplex";
import React, { useEffect, useState } from "react";

interface NftCardProps {
  address: string;
}

export const NftCard: React.FC<NftCardProps> = ({ address }) => {
  const [content, setContent] = useState();
  const { metaplex } = useMetaplex();
  useEffect(() => {
    const publicKey = toPublicKey(address);
    if (!publicKey || !metaplex) return;
//     (async () => {
//       const mint = await metaplex.nfts().findByMint(publicKey).run();
//       console.log(mint);
//     })();
  }, [metaplex]);

  return (
    <div className="border-2 border-gray-400 max-w-[150px] h-[150px] w-full rounded-md">
      <Skeleton height="full" />
    </div>
  );
};
