import { create } from 'zustand';

export const useAppStore = create((set) => ({
  homeData: null,       // data for homepage posts
  userData: null,       // user data
  loading: false,       // loading state for fetch
  error: null,          // error message

  fetchHomeData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://192.168.0.102:3000/post/getAllPost');
      const data = await res.json();
      set({ homeData: data, loading: false });
    } catch (error) {
      set({ error: error.message || 'Error fetching data', loading: false });
    }
  },

  fetchUserData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://192.168.0.102:3000/user/getAllUser'); // your API endpoint for users
      const data = await res.json();
      set({ userData: data, loading: false });
    } catch (error) {
      set({ error: error.message || 'Error fetching user data', loading: false });
    }
  },
  addUser: async (user) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://192.168.0.102:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        const updatedUsers = [...(get().userData || []), data];
        set({ userData: updatedUsers, loading: false });
      } else {
        set({ error: data.message || 'Failed to add user', loading: false });
      }
    } catch (error) {
      set({ error: error.message || 'Error adding user', loading: false });
    }
  },
}));
