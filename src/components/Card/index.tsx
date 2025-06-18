import {
  Container,
  InfoCountry,
  ImgCountry,
  Name,
  ContainerDetails,
} from "./styles";
import type { CountryDTO } from "../../DTO/CountryDTO";

interface CardProps {
  data: CountryDTO[];
  onClick?: (country: CountryDTO) => void;
  isDark?: boolean;
}

const Card = ({ data, onClick, isDark }: CardProps) => {
  if (!Array.isArray(data)) return null;
  return (
    <>
      {data.map((country) => (
        <Container
          key={country.name.official}
          onClick={() => onClick?.(country)}
          isDark={isDark}
        >
          <ImgCountry src={country.flags.png} alt={country.name.common} />
          <Name>{country.name.common}</Name>
          <ContainerDetails>
            {country.population && (
              <InfoCountry>
                <span>Population:</span>
                {country.population.toLocaleString()}
              </InfoCountry>
            )}
            {country.region && (
              <InfoCountry>
                <span>Region:</span>
                {country.region}
              </InfoCountry>
            )}
            {country.capital?.[0] && (
              <InfoCountry>
                <span>Capital:</span> {country.capital[0]}
              </InfoCountry>
            )}
          </ContainerDetails>
        </Container>
      ))}
    </>
  );
};

export default Card;
