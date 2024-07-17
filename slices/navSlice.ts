import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define types for the location and place
interface Location {
  lat: number;
  lng: number;
}

interface Place {
  location: Location;
  description: string;
}

// Define types for travel time information
interface TravelTimeInformation {
  distance: { text: string };
  duration: { text: string,
    value: number 
   };
}

// Define a type for the slice state
interface NavState {
  origin: Place | null;
  destination: Place | null;
  travelTimeInformation: TravelTimeInformation | null;
}

// Define the initial state using that type
const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<Place>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<Place>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<TravelTimeInformation>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation;

export default navSlice.reducer;
