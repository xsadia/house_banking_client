import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = async (operation: any, variables: any) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzQ4Mjg4OTUsImV4cCI6MjQ5ODc0MjQ5NSwic3ViIjoiNjE3MGM4ZWJkMzg3NWEwYWRiNzUyZjIxIn0.kapO3mpenC_wMpach6VMapngIcHD-gcOD2ZwsVr4Ug4",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
};

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export default new Environment({
  network,
  store,
});
