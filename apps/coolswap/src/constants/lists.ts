export const ARBITRUM_LIST = 'https://bridge.arbitrum.io/token-list-42161.json'
export const OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json'

const COOL_LIST = 'https://tokens.gincool.com/tokens.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...UNSUPPORTED_LIST_URLS, // need to load dynamic unsupported tokens as well
  COOL_LIST,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [COOL_LIST]
