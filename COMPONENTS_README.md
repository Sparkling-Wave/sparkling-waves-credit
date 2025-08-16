# Sparkling Waves Credit - Components Documentation

## Overview
This document outlines the updated Header, Footer, and Button components with custom primary and secondary color schemes.

## Custom Color Palette

### Primary Colors (Purple Theme)
- **Primary 50-900**: A comprehensive purple color scale
- **Main Primary**: `#500480` (Primary-500)
- **Usage**: Main brand color, primary buttons, links, and accents

### Secondary Colors (Gold Theme)
- **Secondary 50-900**: A comprehensive gold/yellow color scale
- **Main Secondary**: `#ffd700` (Secondary-500)
- **Usage**: Secondary buttons, highlights, and complementary elements

## Components

### 1. Header Component (`components/Header.tsx`)

#### Features:
- Fixed positioning with backdrop blur
- Responsive navigation with dropdown menus
- Mobile-friendly hamburger menu
- Custom color scheme integration
- Smooth hover animations

#### Key Updates:
- ✅ Replaced hardcoded blue colors with custom primary colors
- ✅ Added backdrop blur and improved shadows
- ✅ Enhanced hover effects and transitions
- ✅ Better mobile menu with CTA button
- ✅ Improved dropdown styling

#### Usage:
```tsx
import Header from "@/components/Header";

// In your layout or page
<Header />
```

### 2. Footer Component (`components/Footer.tsx`)

#### Features:
- Four-column responsive layout
- Social media links with hover effects
- Newsletter subscription form
- Contact information
- Custom color scheme

#### Key Updates:
- ✅ Enhanced hover animations and transitions
- ✅ Improved social media button interactions
- ✅ Better form input styling
- ✅ Added FAQ link
- ✅ Enhanced visual hierarchy

#### Usage:
```tsx
import Footer from "@/components/Footer";

// In your layout or page
<Footer />
```

### 3. Button Component (`components/ui/Button.tsx`)

#### Variants:
- **Primary**: Purple background with white text
- **Secondary**: Gold background with purple text
- **Outline**: Purple border with purple text
- **Ghost**: Transparent with purple text

#### Sizes:
- **Small**: `px-3 py-1.5 text-sm`
- **Medium**: `px-4 py-2.5 text-base` (default)
- **Large**: `px-6 py-3 text-lg`

#### Props:
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  // ... all standard button props
}
```

#### Usage Examples:
```tsx
import Button from "@/components/ui/Button";

// Basic usage
<Button>Default Button</Button>

// With variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// With sizes
<Button size="sm">Small Button</Button>
<Button size="lg">Large Button</Button>

// With states
<Button isLoading>Loading...</Button>
<Button disabled>Disabled Button</Button>
<Button fullWidth>Full Width Button</Button>

// Custom styling
<Button 
  variant="primary" 
  className="bg-gradient-to-r from-primary-500 to-primary-700"
>
  Custom Button
</Button>
```

## Tailwind Configuration

### Custom Colors
The `tailwind.config.ts` file includes:
- Extended primary color palette (50-900)
- Extended secondary color palette (50-900)
- Custom animations and keyframes

### Custom Animations
- `fade-in`: Smooth fade-in effect
- `slide-up`: Slide up with fade effect
- `bounce-gentle`: Subtle bouncing animation

## Demo Page

Visit `/demo` to see all components in action:
- Header with navigation
- Button examples with all variants
- Footer with full layout
- Color palette showcase

## Best Practices

### Color Usage:
1. **Primary**: Use for main actions, links, and brand elements
2. **Secondary**: Use for highlights, secondary actions, and accents
3. **Primary-50 to Primary-100**: Use for subtle backgrounds and borders
4. **Primary-800 to Primary-900**: Use for dark text on light backgrounds

### Component Styling:
1. Always use the custom color classes (`bg-primary`, `text-secondary`, etc.)
2. Leverage the color scale for variations (`bg-primary-100`, `text-secondary-600`)
3. Use the custom animations for enhanced user experience
4. Maintain consistent spacing and typography

### Accessibility:
1. Ensure sufficient color contrast ratios
2. Use focus states for keyboard navigation
3. Provide loading states for async actions
4. Include proper ARIA labels where needed

## File Structure
```
components/
├── Header.tsx          # Main navigation component
├── Footer.tsx          # Footer component
└── ui/
    ├── Button.tsx      # Button component with variants
    └── ButtonExample.tsx # Button showcase component

app/
└── demo/
    └── page.tsx        # Demo page showcasing all components

tailwind.config.ts      # Custom color configuration
```

## Getting Started

1. **Install dependencies**: `npm install`
2. **Run development server**: `npm run dev`
3. **View demo page**: Navigate to `http://localhost:3000/demo`
4. **Customize colors**: Modify `tailwind.config.ts` as needed

## Customization

### Adding New Colors:
```ts
// In tailwind.config.ts
colors: {
  custom: {
    50: "#f0f9ff",
    500: "#0ea5e9",
    900: "#0c4a6e",
  }
}
```

### Adding New Button Variants:
```tsx
// In Button.tsx
const variants = {
  // ... existing variants
  custom: "bg-custom-500 text-white hover:bg-custom-600",
};
```

## Support

For questions or issues with the components, please refer to:
- Component source code for implementation details
- Tailwind CSS documentation for utility classes
- Demo page for visual examples

