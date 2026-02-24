## TCSD-Project: BluePrint

**Universal Engineering EdTech & Developer Community Hub**

Project BluePrint is an integrated digital library and social ecosystem designed for engineering students and developers. The platform bridges the gap between static academic repositories and real-time collaborative learning by combining a structured knowledge base with a developer community interface. It allows users to manage technical summaries and diagrams while engaging in peer-to-peer discussions to solve academic and development queries.


### Core Features

* Knowledge Management:** A structured digital library organized by departmental hierarchy and year-wise subjects to prevent information loss between semesters.
* Community Discussion Feed:** A real-time hub where students post queries regarding technical summaries or mathematical derivations to receive help from peers.
* Developer Ecosystem:** Expansion beyond traditional engineering curriculum into functional fields such as Web Development, AI, and DevOps.
* Peer-Review and Voting:** A quality control system where contributors provide answers and a peer-voting mechanism ensures the accuracy of information.
* Cross-Platform Consistency:** A unified experience maintained across a React-based website and a React Native mobile application.
* Identity and Security:** Secure access managed via Google Login (OAuth 2.0) for both web and mobile platforms.

### Technical Stack

* Frontend (Web):** React.js with Vite for high performance and Tailwind CSS for responsive styling.
* Mobile Application:** React Native using Expo and NativeWind, allowing for approximately 80% code reuse from the web frontend.
* Backend:** Node.js (TypeScript) with Express or Python (FastAPI) to handle secure accounts and heavy file uploads.
* Database and Real-time:** PostgreSQL for note metadata and student records, managed via Supabase for real-time database capabilities.
* Cloud Storage:** Files are stored in AWS S3 or Supabase Storage to ensure the application remains fast as the library scales.

### Team Responsibilities

* Backend and Auth:** Development of Google Login integration, file storage systems, and PostgreSQL schemas for threads, comments, and status tags.
* Web Frontend:** Development of the React dashboard, community feed components, forum posts, and developer profiles.
* Mobile Development:** Management of the Expo application, ensuring seamless mobile interaction and implementing push notifications for real-time alerts.

### Deployment Infrastructure

* Backend:** Hosted on Render or Railway.
* Frontend (Web):** Deployed via Vercel or Netlify.
* Mobile Testing:** Shared internally and with beta testers using Expo Go.
