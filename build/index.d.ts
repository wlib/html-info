export type ElementsTableData = {
  [element: string]: {
    specLink: string,
    descriptionText: string,
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
      descriptionText: string,
      type: string
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
  [element: string]: {
    specLink: string,
    descriptionText: string,
    specificAttributes: {
      [attribute: string]: {
        specLinks: ReadonlyArray<string>,
        descriptionText: string,
        type: string
      }
    }
  }
}
