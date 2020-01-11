/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = `query GetUserInfo($id: ID!) {
  getUserInfo(id: $id) {
    id
    clientId
    firstname
    lastname
    age
  }
}
`;
export const listUserInfos = `query ListUserInfos(
  $filter: ModelUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clientId
      firstname
      lastname
      age
    }
    nextToken
  }
}
`;
