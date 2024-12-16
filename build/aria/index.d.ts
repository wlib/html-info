export interface RolesData {
  [roleName: string]: {
    description: string
    specLink: string
  }
}

export interface AriaAttributesData {
  [attributeName: string]: {
    description: string
    type: string
    specLink: string
  }
}
