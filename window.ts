export const isServer = () => typeof window === 'undefined';
export const isClient = () => typeof window !== 'undefined';
export const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.navigator !== 'undefined';
