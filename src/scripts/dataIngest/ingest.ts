import { definedSets, GroupingTypeMap, IIngestFormatV2 } from '../../types/ingest/ingestTypes'

export const useGroupingsForV3Data = <T extends keyof GroupingTypeMap>(
  data: IIngestFormatV2,
  set: T
): GroupingTypeMap[T] => {
  const groupings = definedSets[set]
  return groupings(data) as GroupingTypeMap[T]
}
