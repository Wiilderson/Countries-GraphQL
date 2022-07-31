import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import "./App.css";
import Paises from "./components/Countries/paises";
import Pagination from "./components/Pagination";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

// const LIST_COUNTRIES = gql`
//   {
//     continents {
//       code
//       name
//       countries {
//         code
//         name
//         capital
//         emoji
//         currency
//         languages {
//           code
//           name
//         }
//       }
//     }
//   }
// `;

const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

// create a component that renders a select input for coutries
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  const countries = data.countries;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <Paises data={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={countries.length}
        paginate={paginate}
      />
    </div>
  );
}
export default App;

// const LIST_COUNTRIES = gql`
//   {
//     countries {
//       code
//       name
//       capital
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `;

// const teste1 = data.continents;
// console.log(teste1);

// const filter = teste1.filter((teste) => teste.name === "Africa");
// console.log(filter);

// const filtercountry = filter.map((country) =>
//   country.countries.map((country) => country.code)
// );
// console.log(filtercountry);
// const objets = teste1.map((continet) =>
//   continet.countries.map((country) => country)
// );
// console.log(objets);

// const testando = objets.map((o) => o.map((country) => country.capital));
// console.log(testando);
