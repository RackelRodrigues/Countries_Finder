import { useEffect, useState } from "react";
import { Background, Container, ContainerInput } from "./App.ts";
import Header from "./components/Header";
import api from "./server/api";
import Input from "./components/Input";
import Select from "./components/Select";
import Card from "./components/Card";
import type { CountryDTO } from "./DTO/CountryDTO";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [dados, setDados] = useState<CountryDTO[]>([]);
  const [searchName, setSearchName] = useState("");
  const [regions, setRegions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    api
      .get("/all?fields=name,flags,population,region,capital")
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => console.error("Erro:", err));
  }, []);

  useEffect(() => {
    api
      .get("/all?fields=region")
      .then((response) => {
        const regioesUnicas = Array.from(
          new Set(response.data.map((pais: any) => pais.region).filter(Boolean))
        );
        const options = regioesUnicas.map((regiao) => ({
          label: String(regiao),
          value: String(regiao).toLowerCase(),
        }));

        setRegions(options);
      })
      .catch((err) => console.error("Erro:", err));
  }, []);

  const handleClick = (Country: any) => {
    navigate(`/country/${Country.name.common}`);
  };

  const handleChangeTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const handleSearchName = async (e: any) => {
    const Name = e.target.value;
    try {
      const response = await api.get(`/name/${Name}`);
      setDados(response.data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };
  const handleFilterRegion = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    try {
      const response = await api.get(`/region/${selectedRegion}`);
      setDados(response.data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <Background isDark={isDark}>
      <Header theme={isDark} onChangeTheme={handleChangeTheme} />

      <div className="search-container">
        <ContainerInput>
          <Input
            isDark={isDark}
            placeholder="Search for country..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onKeydown={(e) => {
              if (e.key === "Enter") handleSearchName(e);
            }}
          />
        </ContainerInput>

        <Select
          isDark={isDark}
          value={selectedRegion}
          options={regions}
          onChange={handleFilterRegion}
          placeholder="Filter by Region"
        />
      </div>

      <Container>
        <Card data={dados} onClick={handleClick} isDark={isDark} />
      </Container>
    </Background>
  );
}

export default App;
