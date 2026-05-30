import { create } from 'zustand'

type ShowcaseState = {
  heroProgress: number
  activeHeroSceneIndex: number
  setHeroProgress: (progress: number, activeSceneIndex: number) => void
}

export const useShowcaseStore = create<ShowcaseState>((set) => ({
  heroProgress: 0,
  activeHeroSceneIndex: 0,
  setHeroProgress: (progress, activeSceneIndex) =>
    set({
      heroProgress: progress,
      activeHeroSceneIndex: activeSceneIndex,
    }),
}))
