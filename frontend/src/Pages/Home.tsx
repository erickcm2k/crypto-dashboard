import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import CryptosTable from "../Components/Tables/CryptosTable";
import { CryptosInterface } from "../Components/Tables/cryptosInterface";

const Home = () => {
  const [data, setdata] = useState<CryptosInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCryptos = async () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => {
        if (res.data) setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getCryptos();
    setIsLoading(false);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <h2>Cargando</h2>
      ) : (
        <>{data.length > 0 && <CryptosTable cryptos={data} />}</>
      )}
    </Container>
  );
};

export default Home;
