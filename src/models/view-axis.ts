import { Subset } from './subset'

class ViewAxisSelection {
  public subset: Subset;
  constructor (subset: Subset) {
    this.subset = subset
  }

  static fromJson (data: any) {
    return new ViewAxisSelection(Subset.fromJson(data.Subset))
  }

  get body () {
    return this.constructBody()
  }

  constructBody () {
    const body = { Subset: null }

    if (this.subset.name) {
      body['Subset'] = {
        'Subset@odata.bind':
          `Dimensions('${this.subset.dimensionName}')/Hierarchies('${this.subset.hierarchyName}')/Subsets('${this.subset.name}')`
      }
    } else {
      body['Subset'] = this.subset.body
    }

    return body
  }
}

class ViewAxisTitle {
  public subset: Subset;
  public selected: string;

  constructor (subset: Subset, selected: string) {
    this.subset = subset
    this.selected = selected
  }

  static fromJson (data: any) {
    return new ViewAxisTitle(Subset.fromJson(data.Subset), data.Selected.Name ?? '')
  }

  get body () {
    return this.constructBody()
  }

  constructBody () {
    const body = { Subset: null, 'Selected@odata.bind': null }

    if (this.subset.name) {
      body['Subset'] = {
        'Subset@odata.bind':
          `Dimensions('${this.subset.dimensionName}')/Hierarchies('${this.subset.hierarchyName}')/Subsets('${this.subset.name}')`
      }
    } else {
      body['Subset'] = this.subset.body
    }

    body['Selected@odata.bind'] =
      `Dimensions('${this.subset.dimensionName}')/Hierarchies('${this.subset.hierarchyName}')/Elements('${this.selected}')`

    return body
  }
}

export { ViewAxisSelection, ViewAxisTitle }
