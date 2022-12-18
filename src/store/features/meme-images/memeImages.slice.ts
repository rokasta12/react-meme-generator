import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MemeImage {
  artist_href: string;
  artist_name: string;
  source_url: string;
  url: string;
}

interface MemeImageState {
  memeImages: MemeImage[];
  selectedImage: MemeImage | null;
}

const initialState: MemeImageState = {
  memeImages: [],
  selectedImage: null,
};

const memeImageSlice = createSlice({
  name: "memeImage",
  initialState,
  reducers: {
    setMemeImages(state, action: PayloadAction<MemeImage[]>) {
      state.memeImages = action.payload;
    },
  },
});

export const { setMemeImages } = memeImageSlice.actions;
export default memeImageSlice.reducer;
