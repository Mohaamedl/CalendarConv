# Event Schedule to Calendar Converter

![Event Schedule to Calendar Converter Logo](public/calendar-icon.png)

## Description

The Event Schedule to Calendar Converter is a web application that allows users to easily convert their event schedules from PDF format to ICS calendar files. This tool is ideal for anyone who wants to quickly import various types of schedules (classes, meetings, conferences, etc.) into digital calendar applications.

## Live Demo

Check out the live demo: [Event Schedule to Calendar Converter](https://calendar-conv.vercel.app/)

## Features

- Upload event schedule PDF files
- Automatic event information extraction from PDF
- Generation of ICS files compatible with most calendar applications
- Preview of extracted events before download
- Intuitive and responsive user interface

## Technologies Used

- React.js
- Vite
- PDF.js
- Tailwind CSS
- React Icons

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Mohaamedl/CalendarConv.git
   ```

2. Navigate to the project directory:
   ```
   cd CalendarConv
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Usage

1. Click the "Select PDF" button to upload your event schedule PDF file.
2. Click "Extract and Create .ICS" to process the PDF.
3. Review the extracted events displayed on the screen.
4. Click the "Download .ics" button to download the generated calendar file.
5. For mobile users: Open the downloaded .ics file with your preferred calendar application.
6. For PC users: 
   - If your system is set up to handle .ics files, double-click the downloaded file to open it with your default calendar application.
   - If you can't open the .ics file directly, try importing it into your calendar application manually.
   - Alternatively, use the "Copy Events" button to copy the event details and manually add them to your calendar.

Note: The process of adding events to your calendar may vary depending on your device and calendar application. Some applications may require manual confirmation to add the events.

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Mohamed - [GitHub](https://github.com/Mohaamedl)

Project Link: [https://github.com/Mohaamedl/CalendarConv](https://github.com/Mohaamedl/CalendarConv)
