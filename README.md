# Past Papers Africa 📚🌍

An online exam preparation platform tailored to African countries, featuring AI-powered marking, intelligent filters, and a modern user interface to help students excel in their examinations.

## 🌟 Overview

Past Papers Africa is designed to bridge the educational gap by providing accessible, high-quality exam preparation resources specifically curated for African educational systems. Our platform combines traditional past paper resources with modern AI technology to create an engaging and effective learning experience.

## ✨ Features

### 🎯 Core Features

- **Comprehensive Past Papers Collection**: Extensive database of past examination papers from various African countries
- **AI-Powered Marking System**: Intelligent automated marking with detailed feedback and explanations
- **Smart Filtering**: Advanced search and filter capabilities by country, subject, year, and difficulty level
- **Country-Specific Content**: Tailored content matching local curricula and examination boards
- **Progress Tracking**: Monitor your preparation journey with detailed analytics
- **Mobile-Responsive Design**: Seamless experience across all devices

### 🤖 AI Features

- Automated essay and short-answer marking
- Intelligent feedback generation
- Performance analysis and recommendations
- Adaptive learning suggestions based on user performance

### 🔍 Filter & Search Capabilities

- Filter by country (Kenya, Uganda, South Sudan, Rwanda, etc.)
- Subject categorization (Mathematics, Sciences, Languages, etc.)
- Year-based filtering
- Difficulty level sorting
- Examination board specific content

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.0 or higher)
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lokosang-wani/Past-Papers-Africa.git
   cd Past-Papers-Africa
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration values:

   ```
   NEXT_PUBLIC_API_URL=your_api_url
   DATABASE_URL=your_database_url
   AI_SERVICE_API_KEY=your_ai_service_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **AI Integration**: OpenAI
- **Authentication**: Clerk
- **Deployment**: Vercel for now

## 📱 Supported Countries & Curricula

### Currently Supported:

- **Uganda**: PLE, UCE, UACE

### Coming Soon:

- 🇷🇼 Rwanda

## 🤝 Contributing

We welcome contributions from educators, developers, and students across Africa! Here's how you can help:

### Ways to Contribute:

1. **Content**: Submit past papers from your country/region
2. **Code**: Improve features, fix bugs, add new functionality
3. **Translation**: Help localize the platform for different languages
4. **Testing**: Report bugs and test new features
5. **Documentation**: Improve guides and documentation

### Development Guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing
