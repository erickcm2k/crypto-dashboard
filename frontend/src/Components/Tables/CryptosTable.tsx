import React from "react";
import CryptoCard from "../Cards/CryptoCard";
import { CryptosInterface } from "./cryptosInterface";

interface Props {
  cryptos: CryptosInterface[];
}

// const CryptosTable: React.FC<Props> = ({ cryptos }) => {
// const CryptosTable = (props: Props) => {
// const CryptosTable = (props: { cryptos: CryptosInterface[] }) => {
// const CryptosTable = ({ cryptos }: Props) => {

const CryptosTable = ({ cryptos }: Props) => {
  return (
    <div>
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.id} {...crypto}></CryptoCard>
      ))}
    </div>
  );
};

export default CryptosTable;
