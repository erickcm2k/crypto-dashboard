import React from "react";
import { CryptosInterface } from "../Tables/cryptosInterface";

const CryptoCard = ({
  id,
  symbol,
  image,
  current_price,
  market_cap_rank,
}: CryptosInterface) => {
  return (
    <>
      <div>{id}</div>
      <div>{symbol}</div>
      <div>{image}</div>
      <div>{current_price}</div>
      <div>{market_cap_rank}</div>
    </>
  );
};

export default CryptoCard;
