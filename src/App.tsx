import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnviroment from "./relay/RelayEnviroment";
import { Loading } from "./components/reusable/Loading";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
        <GlobalStyle />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
