export interface CountryDTO {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  capital: string[];
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  borders?: string[];
  altSpellings?: string[];
  area?: number;
  capitalInfo?: {
    latlng?: number[];
  };
  car?: {
    side?: string;
    signs?: string[];
  };
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  coatOfArms?: Record<string, any>;
  continents?: string[];
  currencies?: {
    [key: string]: {
      symbol?: string;
      name?: string;
    };
  };
  demonyms?: {
    eng?: {
      f?: string;
      m?: string;
    };
    fra?: {
      f?: string;
      m?: string;
    };
  };
  flag?: string;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  independent?: boolean;
  landlocked?: boolean;
  languages?: {
    [key: string]: string;
  };
  latlng?: number[];
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  postalCode?: {
    format?: string;
    regex?: string;
  };
  startOfWeek?: string;
  status?: string;
  subregion?: string;
  timezones?: string[];
  tld?: string[];
  translations?: {
    [key: string]: {
      official?: string;
      common?: string;
    };
  };
  unMember?: boolean;
}
