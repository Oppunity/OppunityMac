/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCity = `subscription OnCreateCity {
  onCreateCity {
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
export const onUpdateCity = `subscription OnUpdateCity {
  onUpdateCity {
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
export const onDeleteCity = `subscription OnDeleteCity {
  onDeleteCity {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    name
    description
    address
  }
}
`;
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
    id
    name
    description
    address
  }
}
`;
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
    id
    name
    description
    address
  }
}
`;
