import { create } from 'zustand';
import { CURRENT_VERSION } from '@/lib/constants';

const initialState = {
  current: CURRENT_VERSION,
  latest: null,
  hasUpdate: false,
  checked: true,
  releaseUrl: null,
};

const store = create(() => ({ ...initialState }));

export async function checkVersion() {
  // Update checks disabled for privacy
  return;
}

export const useVersion = store;
