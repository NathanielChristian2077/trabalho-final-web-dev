import { create } from 'zustand'


type SessionState = { token: string | null, setToken: (t: string | null) => void }
export const useSession = create<SessionState>((set) => ({ token: null, setToken: (t) => set({ token: t }) }))