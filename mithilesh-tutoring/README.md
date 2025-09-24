# Mithilesh Tutoring

A premium tutoring website for Mithilesh Kumar Yadav, an IIT Kanpur graduate with 8+ years of experience in IIT JEE and Mathematics coaching. The website features a modern dark glassmorphism design with AI integration for personalized learning paths, session booking, testimonials, and more.

## 🌟 Features

- **Dark Glassmorphism UI**: Sleek, modern design with glass-like elements and subtle neon glow effects
- **AI-Powered Learning**: Personalized learning paths and intelligent FAQ bot via Magic MCP Server
- **Session Booking**: Interactive calendar for booking tutoring sessions
- **Student Progress Tracking**: Dashboard for monitoring learning progress
- **Payment Integration**: Support for both Razorpay and Stripe
- **Responsive Design**: Fully responsive for all device sizes
- **Testimonials**: Carousel of student success stories

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion (for animations)
- **Styling**: Custom glassmorphism effects with Tailwind
- **Database**: Firebase and Supabase (configurable)
- **AI Integration**: Magic MCP Server (21st.dev) for learning path generation and FAQ
- **Payments**: Razorpay and Stripe integration
- **Icons**: React Icons
- **Routing**: React Router DOM

## 📁 Project Structure

```
mithilesh-tutoring/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── ai/             # AI integration files
│   ├── db/             # Database integration files
│   ├── styles/         # CSS files
│   ├── utils/          # Utility functions
│   ├── app/            # Main application file
│   └── App.jsx
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mithilesh-tutoring.git
   cd mithilesh-tutoring
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   # Firebase configuration
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

   # Supabase configuration (alternative to Firebase)
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Stripe configuration
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # Razorpay configuration
   REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
   REACT_APP_RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # MCP Server API key (for AI integration)
   MCP_API_KEY=your_mcp_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 🔧 Configuration

### Database Setup

The application supports both Firebase and Supabase. You can configure either based on your preference:

- For Firebase: Add your Firebase configuration in `.env` file
- For Supabase: Add your Supabase URL and Anon Key in `.env` file

### Payment Setup

The application supports both Razorpay and Stripe. Add the respective API keys in your `.env` file.

### AI Integration

The AI features use Magic MCP Server. Configure the MCP API key in your `.env` file.

## 🧩 Components

The application is built with modular, reusable components:

- **Navbar**: Glassmorphic navigation with mobile responsiveness
- **HeroSection**: Eye-catching introduction with CTA buttons
- **AboutCard**: Personal story and credentials of the tutor
- **ExperienceTimeline**: Chronological display of teaching experience
- **TutorProfile**: Detailed profile with subjects, skills, and achievements
- **TestimonialsCarousel**: Rotating student testimonials
- **BookingCalendar**: Interactive session booking with time slots
- **Footer**: Multi-column footer with contact information
- **ChatWidget**: AI-powered chat assistant

## 📊 Analytics & Success Metrics

- Session bookings per month
- Repeat student ratio
- AI feature adoption rate
- Positive feedback ratings

## 🤖 AI Features

1. **Personalized Learning Paths**: AI generates custom learning paths based on student goals and proficiency
2. **FAQ Bot**: Intelligent bot answering common questions about tutoring services
3. **Conversational Onboarding**: Interactive student onboarding experience

## 📱 Responsive Design

The website is fully responsive and optimized for all device sizes, from mobile phones to desktop computers. The glassmorphism design elements adapt appropriately to different screen sizes while maintaining visual appeal.

## 🎨 Styling

The application uses a combination of Tailwind CSS and custom CSS for the glassmorphism effect:

- Custom glass container classes
- Neon text and border effects
- Smooth animations and transitions
- Carefully chosen color palette with dark background and neon accents

## 🚀 Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

This creates an optimized build in the `build` folder that can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Mithilesh Kumar Yadav - contact@mithilesh-tutoring.com

Project Link: [https://github.com/your-username/mithilesh-tutoring](https://github.com/your-username/mithilesh-tutoring)

---

Made with ❤️ for aspiring IITians