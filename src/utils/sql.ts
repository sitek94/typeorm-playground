import sqlTemplateTag, {type RawValue} from 'sql-template-tag'

export function sql(
  strings: readonly string[],
  ...values: readonly RawValue[]
) {
  return sqlTemplateTag(strings, ...values).sql
}
