export type Branch = {
  id: number
  name: string
}

export const DEFAULT_BRANCHES: Branch[] = [
  { id: 1, name: 'NRA' },
  { id: 2, name: 'MAIN OFFICE' },
  { id: 3, name: 'WAREHOUSE A' },
]

// Alias used by departments page
export const BRANCHES = DEFAULT_BRANCHES
