# TravelTrucks

"TravelTrucks" is a web application for camper rental services. It allows users to browse available vehicles, filter them based on various criteria, view detailed information for each camper, and add them to favorites or book them directly.

## Key Features

- **Home Page:**

  - A banner with a call to action.
  - A button to navigate to the catalog.

- **Camper Catalog:**

  - Browse a list of vehicles with pagination support.
  - Filter vehicles by location, body type, and additional features (air conditioning, kitchen, etc.).
  - Add campers to a favorites list.
  - Load more cards with the "Load More" button.

- **Camper Details Page:**
  - Display camper features (transmission, engine, kitchen, TV, etc.).
  - Show details like dimensions (length, width, height), fuel consumption, and tank capacity.
  - Photo gallery of the camper.
  - User reviews with a star rating system.
  - A booking form with a success notification upon submission.

## Installation and Usage Instructions

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SergiiBartytskyi/TravelTrucks
   ```
2. Navigate to the project directory:
   ```bash
   cd traveltrucks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open http://localhost:5173 in your browser.

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```
2. The built files will be available in the dist folder.

### Deployment

To deploy the app on Vercel or Netlify:

- Connect the repository to the hosting service.
- Use the npm run build command for the build step.
- Set the dist folder as the deployment output directory.

### Technologies Used

- Framework: React
- State Management: Redux Toolkit
- Routing: React Router
- API Requests: Axios
- Styling: CSS Modules
- Bundler: Vite

### About the Author

Name: [SergiiBartytskyi]
Contact: [https://github.com/SergiiBartytskyi]
Other Projects: [[Links to other projects or portfolio](https://github.com/Anonymous-programmers-glitch/ProjectWaterTracker)]

### License

This project is licensed under the MIT License.
