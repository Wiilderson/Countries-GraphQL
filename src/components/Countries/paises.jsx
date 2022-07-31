import React from "react";
import { Container, InfosCountr } from "./styled";

function Paises({ data }) {
  return (
    <Container>
      <div className="container">
        {data.map((country) => (
          <>
            <div key={country.code} className="card">
              <div className="card-header">
                <img
                  src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                  width="320"
                  alt={country.name}
                />
              </div>
              <div className="card-body" key={country.code}>
                <div>
                  <span className="tag tag-teal">{country.name}</span>
                </div>
                <InfosCountr key={country.code}>
                  <h4>Capital: {country.capital}</h4>
                  <img
                    src={`https://flagcdn.com/28x21/${country.code.toLowerCase()}.png`}
                    width="28"
                    height="21"
                    alt={country.name}
                  />
                  <p>Moeda: {country.currency}</p>

                  {country.languages.map((lang) => (
                    <p key={lang.code}>Idiomas: {lang.name}</p>
                  ))}
                </InfosCountr>
              </div>
            </div>
          </>
        ))}
      </div>
    </Container>
  );
}

export default Paises;
