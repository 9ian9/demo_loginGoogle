import { convertKeyToTitle } from './helperComponents/convertKeyToTitle';

export function GetColumnsFromData(dataSource) {
  if (!Array.isArray(dataSource) || dataSource.length === 0 || !dataSource[0]) {
    return [];
  }

  const keys = Object.keys(dataSource[0]).filter((key) => key !== 'id');

  return keys.map((key) => ({
    key,
    title: convertKeyToTitle(key),
  }));
}
