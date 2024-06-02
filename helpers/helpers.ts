export enum SortTypeEnum {
  AB = 'ab',
  BA = 'ba',
}

export function sort(a: any, b: any, sortType: SortTypeEnum) {
  if (a > b) {
    if (sortType === SortTypeEnum.AB) {
      return 1
    }
    return -1;
  }

  if (a < b) {
    if (sortType === SortTypeEnum.AB) {
      return -1
    }
    return 1;
  }

  return 0;
}