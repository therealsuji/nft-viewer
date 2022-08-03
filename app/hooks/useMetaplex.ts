import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const useMetaplex = () => {
  let connection;
  const [metaplex, setMetaplex] = useState<Metaplex>();
  useEffect(() => {
    connection = new Connection(clusterApiUrl("mainnet-beta"));
    setMetaplex(new Metaplex(connection));
  }, []);

  return { metaplex };
};
