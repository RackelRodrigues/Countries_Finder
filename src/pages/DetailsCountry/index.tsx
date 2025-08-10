import {
  Container,
  Name,
  InfoCountry,
  Button,
  ImgCountry,
  BackIcon,
  Tag,
  ContainerInfo,
  ContainerTagName,
  ContainerLoading,
} from "./styles";
import type { CountryDTO } from "../../DTO/CountryDTO";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../server/api";
import { Riple } from "react-loading-indicators";

const DetailsCountry = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryDTO>();
  const [currencyName, setCurrencyName] = useState();
  const [isDark, setIsDark] = useState(false);

  const handleChangeTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const fetchCountryByName = async (name: string) => {
    try {
      const response = await api.get(`/name/${name}?fullText=true`);

      const countryData = response.data[0];
      const currencyKey =
        countryData.currencies && Object.keys(countryData.currencies)[0];
      const currencyName = currencyKey
        ? countryData.currencies[currencyKey].name
        : "";
      setCountry(response.data[0]);
      setCurrencyName(currencyName);
    } catch (error) {
      console.error("Erro:", error);
    }
  };
  useEffect(() => {
    if (name) {
      fetchCountryByName(name);
    }
  }, [name]);

  if (!country) {
    return (
      <ContainerLoading>
        <Riple color="#32cd32" size="medium" text="" textColor="" />
      </ContainerLoading>
    );
  }

  return (
    <>
      <Header theme={isDark} onChangeTheme={handleChangeTheme} />
      <Container isDark={isDark}>
        <Button isDark={isDark} onClick={() => window.history.back()}>
          <BackIcon />
          Back
        </Button>

        <ContainerInfo>
          <ImgCountry src={country.flags.png} alt={country.name.common} />
          <div className="Container-info">
            <Name>{country.name.common}</Name>
            <div className="ContainerDetails">
              <div>
                <InfoCountry>
                  <span> Native Name:</span>
                  {country.name.official}
                </InfoCountry>
                <InfoCountry>
                  <span> Population:</span>
                  {country.population.toLocaleString()}
                </InfoCountry>

                <InfoCountry>
                  <span> Region:</span>
                  {country.region}
                </InfoCountry>
                <InfoCountry>
                  <span> Sub Region:</span>
                  {country.subregion}
                </InfoCountry>
                <InfoCountry>
                  <span> Capital:</span>
                  {country.capital}
                </InfoCountry>
                {country.area && (
                  <InfoCountry>
                    <span>Área:</span> {country.area.toLocaleString()} km²
                  </InfoCountry>
                )}
              </div>
              <div>
                {country.tld?.[0] && (
                  <InfoCountry>
                    <span>Top-level domain:</span> {country.tld[0]}
                  </InfoCountry>
                )}
                <InfoCountry>
                  <span> Curriencies:</span>
                  {currencyName || ""}
                </InfoCountry>
                <InfoCountry>
                  <span> Languages:</span>
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </InfoCountry>
                {country.maps?.googleMaps && (
                  <InfoCountry>
                    <span>Link do Maps:</span>
                    <a
                      href={country.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no Google Maps
                    </a>
                  </InfoCountry>
                )}
              </div>
            </div>
            <ContainerTagName>
              <h3>Border Countries:</h3>
              <div>
                {country?.borders?.slice(0, 4).map((code) => (
                  <Tag key={code} isDark={isDark}>
                    {code}
                  </Tag>
                ))}
              </div>
            </ContainerTagName>
          </div>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default DetailsCountry;
