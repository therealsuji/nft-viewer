import { Connection, PublicKey } from "@solana/web3.js";

export const getNftsForAccount = async (
  connection: Connection,
  publicKey: PublicKey
) => {
  const accounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
    programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
  });
  const filteredAccounts = accounts.value.filter(
    (val) =>
      val.account.data.parsed?.info?.tokenAmount?.amount == 1 &&
      val.account.data.parsed?.info?.tokenAmount?.decimals == 0
  );

  const filteredMintPublicKeys: string[] = filteredAccounts.map(
    (val) => val.account.data.parsed?.info?.mint
  );

  return filteredMintPublicKeys;
};
