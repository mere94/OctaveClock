# OctaveClock 🕰️

A unique, minimalist 8-hour cycle clock built with React, TypeScript, and Tailwind CSS.

![OctaveClock Preview](https://via.placeholder.com/800x400.png?text=OctaveClock+Preview)

## 🌟 The Concept

Traditional clocks divide the day into two 12-hour cycles or one 24-hour cycle. **OctaveClock** reimagines timekeeping by dividing the 24-hour day into **three 8-hour cycles**:
- **Cycle 1:** 00:00:00 to 07:59:59
- **Cycle 2:** 08:00:00 to 15:59:59
- **Cycle 3:** 16:00:00 to 23:59:59

The dial features **64 ticks** instead of the traditional 60. Each tick represents exactly **7.5 minutes** (450 seconds). The single hand completes a full revolution every 8 hours, offering a fresh, technical perspective on the passage of time.

## ✨ Features

- **Custom 8-Hour Dial:** A single hand that completes a 360° rotation every 8 hours.
- **64-Tick Precision System:** Precision markers where each tick equals 7.5 minutes.
- **Dynamic Cycle Indicator:** A sleek, neon-styled digital window indicating the current 8-hour cycle (08, 16, or 24).
- **Toggleable Detailed View:** Switch between a minimalist clean dial and a highly technical detailed view featuring concentric hour rings and minute markers (15, 30, 45).
- **Smooth SVG Rendering:** Crisp, scalable, and lightweight vector graphics ensuring perfect rendering on any display.
- **Responsive Design:** Adapts perfectly to any screen size, maintaining its pristine aspect ratio.
- **Dark Mode UI:** A beautiful slate/neon color palette inspired by modern technical dashboards and German minimalist design.

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
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 🎨 Design Philosophy

OctaveClock is designed with a focus on **technical precision** and **minimalism**. 
- The **detailed view** uses concentric circles to display the three 8-hour cycles, with the active cycle highlighted in a vibrant blue.
- The **minute markers** (15, 30, 45) are dynamically rotated to follow the curvature of the outer dial, ensuring perfect readability at any angle.
- The **ticks** are carefully calibrated to extend slightly beyond the inner rings, creating a sophisticated "measuring instrument" aesthetic.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/OctaveClock/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
