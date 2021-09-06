import { useState } from "react";
import { faAdjust, faSpinner } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import { Button } from "../components/Layout/index";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        children="Clicou"
        scheme="blue"
        size="medium"
        icon={faAdjust}
        loading={loading}
        onClick={() => setLoading(!loading)}
      />
    </>
  );
};

export default Home;
