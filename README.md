# Teacher Platform for Student Projects

This project is a web-based platform that allows students to upload ZIP files containing their web projects (HTML, CSS, and JavaScript). Teachers can then view the students' projects within an iframe, with all assets correctly linked and displayed.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Teacher Platform simplifies the process of collecting, viewing, and evaluating student projects. Students can upload their ZIP files containing HTML, CSS, and JS files, which are then stored in a Supabase storage bucket. Teachers can view each student's website in an iframe, ensuring all assets are connected correctly.

## Features

- **User Authentication**: Students and teachers can sign up, sign in, and sign out using Supabase authentication.
- **Project Uploads**: Students can upload ZIP files containing their website projects.
- **Project Display**: Teachers can view students' projects within an iframe, with all CSS and JS assets properly linked.
- **Multi-Page Support**: Projects with multiple HTML files are supported and displayed correctly.

## Demo

[Link to live demo](#) (Add link if you deploy it on platforms like Netlify, Vercel, or GitHub Pages)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gabriel-Dalton/student-dashboard.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd teacher-platform
   ```
3. **Open the `index.html` file** in your browser to run the application locally.

### Prerequisites

- You will need a [Supabase](https://supabase.io) account and project set up.
- Ensure that you've created a bucket in Supabase named `projects` and configured public access correctly.
  
### Configuring Supabase

1. **Get your Supabase URL and API Key** from your Supabase project dashboard.
2. Replace the `SUPABASE_URL` and `SUPABASE_KEY` values in the `index.html` file:
   ```javascript
   const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
   const SUPABASE_KEY = 'your-supabase-key';
   ```

## Usage

1. **Student Registration/Login**: Students can sign up or log in using the provided form.
2. **Uploading a Project**: Once logged in, students can upload a ZIP file containing their website.
3. **Viewing Projects**: Teachers can view a list of uploaded projects and click "View" to see the project in the iframe.

## How It Works

1. **Uploading**: 
   - When a student uploads a ZIP file, it gets extracted using JSZip.
   - Files are uploaded to Supabase storage, maintaining their structure.

2. **Displaying Projects**:
   - When a teacher clicks "View," the HTML content is fetched, and paths are adjusted for CSS/JS/image assets.
   - The content is injected into an iframe using `srcdoc`, ensuring all assets are correctly displayed.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend/Storage**: [Supabase](https://supabase.io) (Authentication and Storage)
- **File Handling**: [JSZip](https://stuk.github.io/jszip/) for extracting ZIP files

## Future Improvements

- **Real-Time Updates**: Implement real-time updates to show when a student uploads a project.
- **Project Feedback**: Allow teachers to leave comments/feedback on student projects.
- **CodePen Integration**: Integrate with CodePen for viewing single-page projects.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added a new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License.
