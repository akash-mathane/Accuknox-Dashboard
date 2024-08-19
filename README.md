# Accuknox Dashboard

This is a dynamic dashboard web application built using React. The dashboard allows users to add, remove, and search widgets within different categories. The application also includes features like refreshing the categories and filtering recently added widgets.

## Features

- **Dynamic Categories and Widgets**: Users can dynamically add and remove widgets within predefined categories.
- **Widget Management**: Widgets can have custom names, texts, and chart types (e.g., bar, circle, donut, graph).
- **Search Functionality**: Users can search for widgets across all categories.
- **UI/UX Enhancements**: Includes a top bar with a search bar, notification icons, and user profile icons.
- **Refresh and Filter**: Categories can be refreshed, and widgets added in the last two days can be filtered.


## Installation and Setup

### Prerequisites

- Node.js
- npm

### Steps to Run the Application Locally

1. **Clone the repository**:
   bash
   git clone https://github.com/your-username/accuknox-dashboard.git
   cd accuknox-dashboard

2. **Install dependencies**:
   npm install

3. **Run the application**:
    npm start

# This will start the application on http://localhost:3000.

## Adding and Removing Widgets

**Adding a Widget**: Click on the + Add Widget button in the top right of the dashboard. A modal will appear where you can specify the widget name, text, and chart type. You can also choose which category the widget should be added to.

**Removing a Widget**: Click on the Remove button on the widget you wish to remove.

**Refreshing Categories**
**Refresh**: Click on the refresh icon in the dashboard's top bar. The categories will blink, indicating that they have been refreshed.

**Filtering Widgets**
**Filter Last 2 Days**: Click on the Filter Last 2 Days button to show only the widgets added in the last two days.


