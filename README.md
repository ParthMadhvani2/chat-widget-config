# Chat Widget Configuration Tool

A Single Page Application (SPA) that enables real-time customization of chat widget appearances with live preview functionality.

A config file is added in the folder to upload and test it. named : congig-2.json

## Features

- **Live Configuration Panel** with customization options for:
  - Widget naming and configuration management
  - Bot name and appearance settings
  - Font family selection
  - Color scheme customization (header, background, text)
  - Avatar and launcher image customization

- **Real-time Preview** showing immediate visual feedback of configuration changes
- **Configuration Management:**
  - Download current settings as JSON
  - Load and apply saved configurations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ParthMadhvani2/chat-widget-config.git
cd chat-widget-config
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Customize Widget:**
   - Use the configuration panel on the left to modify widget appearance
   - Watch changes reflect immediately in the preview panel
   - Experiment with different color combinations and settings

2. **Save Configuration:**
   - Enter a name for your configuration
   - Click "Download Config" to save your settings as a JSON file

3. **Load Configuration:**
   - Click "Load Config" to upload a previously saved configuration file
   - The widget and form will update automatically to reflect the loaded settings

## Architecture and Design Decisions

### Component Structure

The application follows a modular component-based architecture:

- `ConfigurationForm/`: Handles all user inputs and form logic
- `FormComponents/`: All Components used are stored in it
- `PreviewWidget/`: Renders the live chat widget preview
- `FileHandler/`: Manages configuration file operations
- `common/`: Shared utilities and components

### State Management

- Utilized React's Context API for global state management
- Implemented custom hooks for configuration logic separation
- Maintained single source of truth for widget settings

### Design Patterns

- Adopted Container/Presenter pattern for better separation of concerns
- Implemented Observer pattern for real-time preview updates
- Used Strategy pattern for file handling operations

## Technical Choices

- **Framework**: React with JavaScript for type safety and better developer experience
- **Styling**: Tailwind CSS for utility-first styling approach
- **File Handling**: Native File API for configuration import/export
- **Color Management**: React Color for color picker implementation

## Known Limitations

1. Image uploads currently limited to URL inputs (local file upload to be implemented)
2. Font family selection limited to system fonts
3. Configuration validation needs enhancement
4. Mobile responsiveness requires optimization

## Future Improvements

- Add support for local image file uploads
- Implement configuration templates
- Add undo/redo functionality
- Expand font family options with Google Fonts integration
- Add configuration sharing capabilities


## License

This project is licensed under the MIT License - see the LICENSE file for details.