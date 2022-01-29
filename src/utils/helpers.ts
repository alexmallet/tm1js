
const extractComponentsFromUniqueName = (uniqueName: string): { dimension: string, hierarchy: string, object: string } => {
  const separator = '].['

  const segments = (uniqueName.match(/\]\.\[/g) ?? []).length

  let dimension: string, hierarchy: string, object: string

  dimension = uniqueName.substring(1, uniqueName.indexOf(separator))

  if (segments === 1) {
    hierarchy = dimension
  } else {
    hierarchy = uniqueName.substring(uniqueName.indexOf(separator) + 3, uniqueName.lastIndexOf(separator))
  }

  object = uniqueName.substring(uniqueName.lastIndexOf(separator) + 3, uniqueName.length - 1)

  return {
    dimension,
    hierarchy,
    object
  }
}

const removeSpacesAndLower = (str: string): string => {
  return str.replace(/\s/g, '').toLowerCase()
}

const caseAndSpaceInsensitiveEquals = (str1: string, str2: string): boolean => {
  return removeSpacesAndLower(str1) === removeSpacesAndLower(str2)
}

const fixedEncodeURIComponent = (str: string): string => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16)
  })
}

export {
  extractComponentsFromUniqueName,
  removeSpacesAndLower,
  caseAndSpaceInsensitiveEquals,
  fixedEncodeURIComponent
}
