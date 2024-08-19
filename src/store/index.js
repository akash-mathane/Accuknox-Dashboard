// src/store/index.js
import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random Text 1" },
        { id: 2, name: "Widget 2", text: "Random Text 2" },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [],
    },
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets.push({
          id: Date.now(),
          name: action.payload.name,
          text: action.payload.text,
        });
      }
    },
    removeWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          widget => widget.id !== action.payload.widgetId
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWidget, removeWidget } = dashboardSlice.actions;

// Selector to get all widgets across all categories
export const selectAllWidgets = (state) => {
  return state.dashboard.categories.flatMap(category => category.widgets);
};

// Selector to filter widgets based on a search term
export const selectFilteredWidgets = (searchTerm) => 
  createSelector(
    [selectAllWidgets],
    (widgets) => widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});

export default store;
