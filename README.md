# OctaveClock 🕰️

A unique, minimalist 8-hour cycle clock built with React, TypeScript, and Tailwind CSS.

## 🌟 The Concept

Traditional clocks divide the day into two 12-hour cycles or one 24-hour cycle. **OctaveClock** reimagines timekeeping by dividing the 24-hour day into **three 8-hour cycles**:
- **00** (00:00:00 to 07:59:59)
- **08** (08:00:00 to 15:59:59)
- **16** (16:00:00 to 23:59:59)

The dial features **64 ticks** instead of the traditional 60. Each tick represents exactly **7.5 minutes** (450 seconds). The single hand completes a full revolution every 8 hours, offering a fresh perspective on the passage of time.

## ✨ Features

- **Custom 8-Hour Dial:** A single hand that completes a 360° rotation every 8 hours.
- **64-Tick System:** Precision markers where each tick equals 7.5 minutes.
- **Cycle Indicator:** A sleek, neon-styled digital window indicating the current 8-hour cycle (00, 08, or 16).
- **Smooth SVG Rendering:** Crisp, scalable, and lightweight vector graphics.
- **Responsive Design:** Adapts perfectly to any screen size.
- **Dark Mode UI:** A beautiful slate/neon color palette inspired by modern technical dashboards.

## 🚀 Quick Start

Get your own OctaveClock running locally in seconds.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/OctaveClock.git
   cd OctaveClock
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port provided by Vite).

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
