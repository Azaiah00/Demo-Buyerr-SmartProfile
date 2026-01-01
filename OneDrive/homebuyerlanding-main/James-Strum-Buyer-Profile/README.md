# 🏠 Home Buyer Smart Profile

A stunning, high-conversion landing page for James Strum - Real Estate Agent. This single-page website is designed to convert potential buyer clients by building trust and excitement about working with James and The Strum Group.

## 🎯 Project Overview

This is a modern, responsive landing page that serves as a "Home Buyer Smart Profile" for James Strum. The page is designed to:

- **Convert** potential buyer clients
- **Build trust** through social proof and expertise
- **Educate** buyers about the homebuying process
- **Excite** prospects about working with James Strum and The Strum Group

## ✨ Features

- 🎨 **Stunning Visual Design** - Modern gradient backgrounds, smooth animations, and engaging visuals
- 📱 **Fully Responsive** - Looks incredible on both mobile and desktop devices
- 🚀 **High Conversion** - Strategically placed CTAs and trust-building elements
- 💼 **Professional & Fun** - Energetic tone that's both professional and engaging
- 📊 **Value-Packed Content** - Comprehensive information about the homebuying process
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times

## 📋 Sections

1. **Hero Section** - Compelling headline with clear value proposition
2. **4-Step Winning Game Plan** - Visual timeline of the homebuying process
3. **Money Talk** - Clear, jargon-free financial breakdown
4. **Priority Access Program** - Exclusive off-market home access
5. **Wealth Building** - ROI calculations showing real estate investment power
6. **Why Work With Me** - Awards, proof, and team advantages
7. **Welcome to the Family** - Post-closing relationship benefits
8. **Contact CTA** - Strategic call-to-action with contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Azaiah00/homebuyer.git
cd homebuyer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `out` directory (static export).

## 📁 Project Structure

```
homebuyer/
├── app/
│   ├── page.jsx         # Main landing page component
│   ├── layout.jsx       # Root layout with metadata and SEO
│   ├── App.css          # Landing page styles
│   └── globals.css      # Global styles
├── src/
│   └── data/
│       └── realtor.json # Single source of truth for all realtor data
├── public/
│   └── images/          # Static images
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Design Features

- **Modern Gradients** - Purple/blue gradient theme throughout
- **Smooth Animations** - Hover effects, fade-ins, and transitions
- **Card-Based Layout** - Clean, scannable information cards
- **Visual Hierarchy** - Clear typography and spacing
- **Interactive Elements** - Engaging hover states and animations

## 💼 About James Strum

- **Title**: President-Team Leader-REALTOR®
- **Team**: The Strum Group
- **Brokerage**: Long & Foster Real Estate
- **License**: 0225175558
- **Service Area**: Richmond, VA and surrounding areas
- **Awards**: 
  - No. 1 Best Real Estate Agent (Richmond Times-Dispatch, 2024)
  - No. 1 Best Real Estate Team (Richmond Times-Dispatch, 2024)

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library for component-based architecture
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JSON Config** - Single source of truth for all realtor-specific content

## 📝 Customization

To customize this landing page for a new realtor:

1. **Update the config file** - Edit `src/data/realtor.json` with the new realtor's information:
   - Name, title, team, brokerage
   - Contact information (phone, email, address)
   - Service areas
   - Bio bullets
   - Award/proof information
   - Asset URLs (headshot, logo, award badge)

2. **Verify all content** - Run a search to ensure no old branding remains:
   ```bash
   # Search for old realtor name
   rg -i "old-realtor-name"
   
   # Search for old locations
   rg -i "old-location-names"
   ```

3. **Update images** - Replace or update image URLs in the config file

4. **Test the site** - Verify all CTAs, forms, and links work correctly

All realtor-specific content is driven from the single config file at `src/data/realtor.json`, making it easy to create new profiles by simply updating that file.

## 📄 License

MIT

## 🤝 Contributing

This is a client-specific landing page. For questions or modifications, please contact the project owner.

