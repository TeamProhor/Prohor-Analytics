import { FILTER_COLUMNS, SESSION_COLUMNS } from './constants';

export function toPostgresLikeClause(column: string, arr: string[]) {
  return arr.map(val => `${column} ilike '%${val.replace(/'/g, "''")}%'`).join(' OR\n  ');
}

export function toPostgresPositionClause(column: string, arr: string[]) {
  return arr.map(val => `position('${val.replace(/'/g, "''")}' in ${column}) > 0`).join(' OR\n  ');
}

export function parseFields(fields: string[]) {
  return fields
    .map(name => {
      const column = FILTER_COLUMNS[name] || name;
      const table = SESSION_COLUMNS.includes(name) ? 'session' : 'website_event';
      return `${table}.${column} as "${name}"`;
    })
    .join(',');
}
