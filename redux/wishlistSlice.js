import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to load the Wishlist from AsyncStorage
const loadWishlistFromAsyncStorage = async () => {
  try {
    const savedWishlist = await AsyncStorage.getItem("Wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);
    return [];
  }
};

// Function to save the Wishlist to AsyncStorage
const saveWishlistToAsyncStorage = async (wishlistItems) => {
  try {
    await AsyncStorage.setItem("Wishlist", JSON.stringify(wishlistItems));
  } catch (error) {
    console.error("Failed to save wishlist:", error);
  }
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    setWishlist: (state, action) => {
      state.items = action.payload;
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product._id);

      if (!existingItem) {
        state.items.push(product);
        saveWishlistToAsyncStorage(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
      saveWishlistToAsyncStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToAsyncStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, setWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;

// Selector to calculate total items in the Wishlist
export const selectTotalItems = (state) => state.wishlist.items.length;

// Load Wishlist when the app starts
export const loadWishlist = () => async (dispatch) => {
  const wishlist = await loadWishlistFromAsyncStorage();
  dispatch(setWishlist(wishlist));
};
