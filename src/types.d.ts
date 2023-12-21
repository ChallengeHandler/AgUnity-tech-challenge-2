type CountryPopulation = {
  country: string,
  population: string,
}

type CategoryPopulation = {
  total: string,
  countries: CountryPopulation[]
}

type StyleType = 'green'|'violet'|'blue';

type CategoryType = 'men'|'women'|'youth';