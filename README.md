# SequenceFlow Animated Tile

## Description
This project features a standalone, high-performance React component (`EmailSeqTile`) that visualizes an email marketing funnel in a vertical "ladder" style. It uses staggered entrance animations, growing gradient connectors, and counting numbers to display campaign statistics (Sent -> Opened -> Clicked -> ROAS). The component is fully responsive but optimized for a 600x600px square container, using glassmorphism aesthetics to match a premium dark-mode dashboard.

## Tech Stack
- **React 18+**: Component architecture and state management.
- **TypeScript**: Type safety for props and data structures.
- **Tailwind CSS**: Utility-first styling for layout, gradients, and glassmorphism.
- **Framer Motion**: Complex staggered animations and spring physics.
- **Lucide React**: Modern SVG icons.

## Color Palette & Styles

The application uses a high-contrast dark mode theme with vibrant gradients.

| Color Name | Hex Code | Tailwind Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Orange** | `#f97415` | `bg-[#f97415]` | Brand accent, primary buttons, highlights |
| **Deep Slate** | `#0f172a` | `bg-slate-900` | Main background (Dark Mode) |
| **Off-White** | `#f8f7f5` | `bg-[#f8f7f5]` | Main background (Light Mode) |
| **Glass Panel** | `#231810` (40% Opacity) | `bg-[#231810]/40` | Card backgrounds, headers |
| **Success Green** | `#4ade80` | `text-green-400` | Growth stats, positive indicators |
| **Ocean Blue** | `#3b82f6` | `bg-blue-500` | Secondary gradients |
| **Premium Fuchsia**| `#c026d3` | `bg-fuchsia-600`| Financial/ROAS highlights |

### Gradients used
- **Sent Step**: `from-[#f97415] to-orange-600`
- **Opened Step**: `from-blue-500 to-indigo-600`
- **Clicked Step**: `from-emerald-500 to-teal-600`
- **ROAS Step**: `from-fuchsia-600 to-purple-600`

## Usage
1. **Integration**: Import `EmailSeqTile` into any React page.
   ```tsx
   import EmailSeqTile from './EmailSeqTile';

   function MyDashboard() {
     return (
       <div className="w-[600px] h-[600px]">
         <EmailSeqTile />
       </div>
     );
   }
   ```
2. **Customization**: The component is self-contained. You can adjust the `StepCard` props inside `EmailSeqTile.tsx` to change data points, colors, or icons.
3. **Responsive**: While designed for a square tile, it adapts flex-wise to its parent container height/width.

## App Name
SequenceFlow Dashboard