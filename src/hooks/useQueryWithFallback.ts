import { useQuery } from '@apollo/client'
import type { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client/core'
import type { NoInfer, QueryHookOptions, QueryResult } from '@apollo/client/react/types/types';

export const useQueryWithFallback = <TData = any, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  fallback: (variables: Record<string, any>) => TData,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
): QueryResult<TData, TVariables> => {
  const result = useQuery(query, options)

  if (result.error) {
    result.data = fallback(options?.variables ?? {})
    result.error = undefined
  }

  return result
}
