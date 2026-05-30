import { create } from 'zustand'

export type BackdropSceneId = 'hero' | 'story' | 'commerce' | 'ambient'

type ShowcaseState = {
  heroProgress: number
  activeHeroSceneIndex: number
  activeBackdropScene: BackdropSceneId
  setHeroProgress: (progress: number, activeSceneIndex: number) => void
  setActiveBackdropScene: (scene: BackdropSceneId) => void
}

export const useShowcaseStore = create<ShowcaseState>((set) => ({
  heroProgress: 0,
  activeHeroSceneIndex: 0,
  activeBackdropScene: 'hero',
  setHeroProgress: (progress, activeSceneIndex) =>
    set({
      heroProgress: progress,
      activeHeroSceneIndex: activeSceneIndex,
    }),
  setActiveBackdropScene: (scene) => set({ activeBackdropScene: scene }),
}))
