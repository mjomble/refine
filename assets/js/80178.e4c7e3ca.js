"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80178],{80178:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/devtools-internal/src/use-query-subscription.tsx","description":"","displayName":"useQuerySubscription","props":{"queryCache":{"defaultValue":null,"description":"","name":"queryCache","required":true,"type":{"name":"any"},"tags":{}},"mutationCache":{"defaultValue":null,"description":"","name":"mutationCache","required":true,"type":{"name":"any"},"tags":{}},"logger":{"defaultValue":null,"description":"","name":"logger","required":true,"type":{"name":"any"},"tags":{}},"defaultOptions":{"defaultValue":null,"description":"","name":"defaultOptions","required":true,"type":{"name":"any"},"tags":{}},"queryDefaults":{"defaultValue":null,"description":"","name":"queryDefaults","required":true,"type":{"name":"any"},"tags":{}},"mutationDefaults":{"defaultValue":null,"description":"","name":"mutationDefaults","required":true,"type":{"name":"any"},"tags":{}},"mountCount":{"defaultValue":null,"description":"","name":"mountCount","required":true,"type":{"name":"any"},"tags":{}},"unsubscribeFocus":{"defaultValue":null,"description":"","name":"unsubscribeFocus","required":false,"type":{"name":"any"},"tags":{}},"unsubscribeOnline":{"defaultValue":null,"description":"","name":"unsubscribeOnline","required":false,"type":{"name":"any"},"tags":{}},"mount":{"defaultValue":null,"description":"","name":"mount","required":true,"type":{"name":"() => void"},"tags":{}},"unmount":{"defaultValue":null,"description":"","name":"unmount","required":true,"type":{"name":"() => void"},"tags":{}},"isFetching":{"defaultValue":null,"description":"","name":"isFetching","required":true,"type":{"name":"{ (filters?: QueryFilters | undefined): number; (queryKey?: QueryKey | undefined, filters?: QueryFilters | undefined): number; }"},"tags":{}},"isMutating":{"defaultValue":null,"description":"","name":"isMutating","required":true,"type":{"name":"(filters?: MutationFilters | undefined) => number"},"tags":{}},"getQueryData":{"defaultValue":null,"description":"","name":"getQueryData","required":true,"type":{"name":"<TQueryFnData = unknown>(queryKey: QueryKey, filters?: QueryFilters | undefined) => TQueryFnData | undefined"},"tags":{}},"ensureQueryData":{"defaultValue":null,"description":"","name":"ensureQueryData","required":true,"type":{"name":"{ <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: WithRequired<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>, \\"queryKey\\">): Promise<...>; <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey..."},"tags":{}},"getQueriesData":{"defaultValue":null,"description":"","name":"getQueriesData","required":true,"type":{"name":"{ <TQueryFnData = unknown>(queryKey: QueryKey): [QueryKey, TQueryFnData | undefined][]; <TQueryFnData = unknown>(filters: QueryFilters): [QueryKey, TQueryFnData | undefined][]; }"},"tags":{}},"setQueryData":{"defaultValue":null,"description":"","name":"setQueryData","required":true,"type":{"name":"<TQueryFnData>(queryKey: QueryKey, updater: Updater<TQueryFnData | undefined, TQueryFnData | undefined>, options?: SetDataOptions | undefined) => TQueryFnData | undefined"},"tags":{}},"setQueriesData":{"defaultValue":null,"description":"","name":"setQueriesData","required":true,"type":{"name":"{ <TQueryFnData>(queryKey: QueryKey, updater: Updater<TQueryFnData | undefined, TQueryFnData | undefined>, options?: SetDataOptions | undefined): [...][]; <TQueryFnData>(filters: QueryFilters, updater: Updater<...>, options?: SetDataOptions | undefined): [...][]; }"},"tags":{}},"getQueryState":{"defaultValue":null,"description":"","name":"getQueryState","required":true,"type":{"name":"<TQueryFnData = unknown, TError = undefined>(queryKey: QueryKey, filters?: QueryFilters | undefined) => QueryState<TQueryFnData, TError> | undefined"},"tags":{}},"removeQueries":{"defaultValue":null,"description":"","name":"removeQueries","required":true,"type":{"name":"{ (filters?: QueryFilters | undefined): void; (queryKey?: QueryKey | undefined, filters?: QueryFilters | undefined): void; }"},"tags":{}},"resetQueries":{"defaultValue":null,"description":"","name":"resetQueries","required":true,"type":{"name":"{ <TPageData = unknown>(filters?: ResetQueryFilters<TPageData> | undefined, options?: ResetOptions | undefined): Promise<void>; <TPageData = unknown>(queryKey?: QueryKey | undefined, filters?: ResetQueryFilters<...> | undefined, options?: ResetOptions | undefined): Promise<...>; }"},"tags":{}},"cancelQueries":{"defaultValue":null,"description":"","name":"cancelQueries","required":true,"type":{"name":"{ (filters?: QueryFilters | undefined, options?: CancelOptions | undefined): Promise<void>; (queryKey?: QueryKey | undefined, filters?: QueryFilters | undefined, options?: CancelOptions | undefined): Promise<...>; }"},"tags":{}},"invalidateQueries":{"defaultValue":null,"description":"","name":"invalidateQueries","required":true,"type":{"name":"{ <TPageData = unknown>(filters?: InvalidateQueryFilters<TPageData> | undefined, options?: InvalidateOptions | undefined): Promise<void>; <TPageData = unknown>(queryKey?: QueryKey | undefined, filters?: InvalidateQueryFilters<...> | undefined, options?: InvalidateOptions | undefined): Promise<...>; }"},"tags":{}},"refetchQueries":{"defaultValue":null,"description":"","name":"refetchQueries","required":true,"type":{"name":"{ <TPageData = unknown>(filters?: RefetchQueryFilters<TPageData> | undefined, options?: RefetchOptions | undefined): Promise<void>; <TPageData = unknown>(queryKey?: QueryKey | undefined, filters?: RefetchQueryFilters<...> | undefined, options?: RefetchOptions | undefined): Promise<...>; }"},"tags":{}},"fetchQuery":{"defaultValue":null,"description":"","name":"fetchQuery","required":true,"type":{"name":"{ <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<...>; <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, opt..."},"tags":{}},"prefetchQuery":{"defaultValue":null,"description":"","name":"prefetchQuery","required":true,"type":{"name":"{ <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<...>; <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, opt..."},"tags":{}},"fetchInfiniteQuery":{"defaultValue":null,"description":"","name":"fetchInfiniteQuery","required":true,"type":{"name":"{ <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<...>; <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQuery..."},"tags":{}},"prefetchInfiniteQuery":{"defaultValue":null,"description":"","name":"prefetchInfiniteQuery","required":true,"type":{"name":"{ <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<...>; <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQuery..."},"tags":{}},"resumePausedMutations":{"defaultValue":null,"description":"","name":"resumePausedMutations","required":true,"type":{"name":"() => Promise<unknown>"},"tags":{}},"getQueryCache":{"defaultValue":null,"description":"","name":"getQueryCache","required":true,"type":{"name":"() => QueryCache"},"tags":{}},"getMutationCache":{"defaultValue":null,"description":"","name":"getMutationCache","required":true,"type":{"name":"() => MutationCache"},"tags":{}},"getLogger":{"defaultValue":null,"description":"","name":"getLogger","required":true,"type":{"name":"() => Logger"},"tags":{}},"getDefaultOptions":{"defaultValue":null,"description":"","name":"getDefaultOptions","required":true,"type":{"name":"() => DefaultOptions<unknown>"},"tags":{}},"setDefaultOptions":{"defaultValue":null,"description":"","name":"setDefaultOptions","required":true,"type":{"name":"(options: DefaultOptions<unknown>) => void"},"tags":{}},"setQueryDefaults":{"defaultValue":null,"description":"","name":"setQueryDefaults","required":true,"type":{"name":"(queryKey: QueryKey, options: QueryObserverOptions<unknown, any, any, any, QueryKey>) => void"},"tags":{}},"getQueryDefaults":{"defaultValue":null,"description":"","name":"getQueryDefaults","required":true,"type":{"name":"(queryKey?: QueryKey | undefined) => QueryObserverOptions<any, any, any, any, any> | undefined"},"tags":{}},"setMutationDefaults":{"defaultValue":null,"description":"","name":"setMutationDefaults","required":true,"type":{"name":"(mutationKey: MutationKey, options: MutationObserverOptions<any, any, any, any>) => void"},"tags":{}},"getMutationDefaults":{"defaultValue":null,"description":"","name":"getMutationDefaults","required":true,"type":{"name":"(mutationKey?: MutationKey | undefined) => MutationObserverOptions<any, any, any, any> | undefined"},"tags":{}},"defaultQueryOptions":{"defaultValue":null,"description":"","name":"defaultQueryOptions","required":true,"type":{"name":"<TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey>(options?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> | DefaultedQueryObserverOptions<...> | undefined) => DefaultedQueryObserverOptions<...>"},"tags":{}},"defaultMutationOptions":{"defaultValue":null,"description":"","name":"defaultMutationOptions","required":true,"type":{"name":"<T extends MutationOptions<any, any, any, any>>(options?: T | undefined) => T"},"tags":{}},"clear":{"defaultValue":null,"description":"","name":"clear","required":true,"type":{"name":"() => void"},"tags":{}}},"generatedAt":1698675976539}')}}]);