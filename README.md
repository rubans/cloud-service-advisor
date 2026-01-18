# Cloud Service Advisor

A React Single Page Application (SPA) that acts as an interactive advisor to recommend Google Cloud products based on user requirements. This application helps users navigate the complex landscape of GCP services by asking a maximum of 5 targeted questions.

## Features

*   **Decision Tree Logic**: Uses a Direct Acyclic Graph (DAG) to dynamically determine the next question based on previous answers.
*   **Google Cloud Styling**: Themed with Google's official color palette and typography (Roboto).
*   **Interactive UI**: Smooth transitions and a clean, card-based interface.
*   **Path Visualization**: At the end of the flow, users can see exactly why a specific service was recommended.

## Prerequisites

*   Node.js (v14 or higher)
*   npm (v6 or higher)

## Installation

1.  Clone the repository or navigate to the project folder:
    ```bash
    cd cloud-service-advisor
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # If you encounter peer dependency warnings, you can try:
    # npm install --legacy-peer-deps
    ```

## Running the Application

To run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

*   `src/data/decisionTree.json`: Contains the graph logic (Nodes, Questions, Options, Results). Edit this file to modify the advisor's logic.
*   `src/components/`:
    *   `QuestionCard.jsx`: Renders the current question and options.
    *   `ResultView.jsx`: Displays the recommended service and the decision path.
    *   `Header.jsx`: Application header.

## Technologies

*   React 19
*   Tailwind CSS 3
