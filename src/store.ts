import create from 'zustand'

export const subRedditList = [
  'battlestations',
  'gamingsetups',
  'macsetups',
  'setups',
  'desksetup',
  'Minimal_Setups'
]

interface PostState {
  filterString: string
  handleChooseFilterString: (filter: string) => void
  subReddits: string[]
  handleChooseSubReddits: (subReddit: string) => void
}

export const useStore = create<PostState>((set) => ({
  filterString: 'hot',
  handleChooseFilterString: (filter) => {
    set((state) => ({ ...state, filterString: filter }))
  },

  subReddits: [...subRedditList],
  handleChooseSubReddits: (subReddit) =>
    set((state) => {
      if (!state.subReddits.includes(subReddit)) {
        return { ...state, subReddits: [...state.subReddits, subReddit] }
      }
      if (state.subReddits.length <= 1) {
        return
      }
      return {
        ...state,
        subReddits: state.subReddits.filter((sub) => sub !== subReddit)
      }
    })
}))
