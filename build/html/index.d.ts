export type ElementsTableData = {
  [element: string]: {
    specLink: string,
    description: string,
    specificAttributes: {
      [attribute: string]: {
        specLink: string
      }
    }
  }
}

export type AttributesTableData = {
  [attribute: string]: ReadonlyArray<
    {
      description: string,
      type: string,
      elements: {
        global?: {
          specLink: string
        },
        "form-associated custom elements"?: {
          specLink: string
        },
        byName?: {
          [element: string]: {
            specLink: string
          }
        }
      }
    }
  >
}

export type MergedData = {
  globalAttributes: {
    [attribute: string]: {
      specLink: string,
      description: string,
      type: string
    }
  },
  tagToAttributes: {
    [element: string]: {
      specLink: string,
      description: string,
      specificAttributes: {
        [attribute: string]: {
          specLinks: ReadonlyArray<string>,
          description: string,
          type: string
        }
      }
    }
  }
}
