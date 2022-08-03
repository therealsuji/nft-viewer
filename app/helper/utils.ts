import { PublicKey } from "@solana/web3.js";

export const toPublicKey = (key: string) => {
  try {
    return new PublicKey(key);
  } catch (error) {
    return null;
  }
};
