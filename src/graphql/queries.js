/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCity = `query GetCity($id: ID!) {
  getCity(id: $id) {
    id
    name
    country
    locations {
      items {
        id
        name
        description
        address
      }
      nextToken
    }
  }
}
`;
export const listCitys = `query ListCitys(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      country
      locations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    name
    description
    address
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      address
    }
    nextToken
  }
}
`;
