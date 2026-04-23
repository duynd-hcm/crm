---
name: Administrative Excellence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5e7f'
  primary: '#031633'
  on-primary: '#ffffff'
  primary-container: '#1a2b49'
  on-primary-container: '#8293b6'
  inverse-primary: '#b6c7ec'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#241300'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f2500'
  on-tertiary-container: '#cc8200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7ec'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#364766'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style

The brand personality of this design system is centered on academic authority and operational efficiency. It serves as the backbone for an English Language Center, where administrative staff manage complex student data, faculty schedules, and enrollment pipelines. The aesthetic is **Corporate / Modern**, emphasizing a high degree of organization and clarity.

The visual direction prioritizes a "data-first" mentality. By utilizing ample whitespace and a restrained color palette, the UI reduces cognitive load for users performing repetitive tasks. The emotional response is one of reliability and calm control, ensuring that the software feels like a sophisticated tool rather than a decorative interface.

## Colors

The color palette is anchored by **Trustworthy Navy Blue (#1A2B49)**, which provides a strong sense of institutional stability. This primary color is used for navigation sidebars, headers, and primary action buttons to establish a clear hierarchy.

**Soft Teal (#14B8A6)** serves as the primary accent, used for success states, progress indicators, and "active" UI elements. It offers a modern, refreshing contrast to the navy without being visually overwhelming. An auxiliary **Energetic Orange (#F59E0B)** is reserved for warning states or high-priority notifications, ensuring important alerts are immediately visible against the professional backdrop. The neutral scale is strictly cool-toned to maintain a clean, laboratory-like atmosphere for data entry.

## Typography

This design system utilizes **Inter** for all typographic needs. Chosen for its exceptional legibility in data-dense environments and high-density screens, it ensures that student IDs, dates, and financial figures are readable at a glance.

The type scale is strictly functional. Headlines use a heavier weight and tighter letter-spacing to create a sense of structure. Body text is optimized for long-form data reading with a generous line height of 1.5–1.6. Labels and utility text use a medium weight with slight tracking increases to maintain legibility at smaller sizes (12px), crucial for form fields and table headers.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with a standard 12-column system for dashboard layouts. This allows the CRM to scale across various desktop resolutions used by administrative staff.

The spacing rhythm is built on a **4px base unit**. Component padding and margins should always be multiples of this unit (8, 16, 24, 32). Gutters are fixed at 16px to ensure data columns remain distinct but integrated. Sidebars are fixed-width (240px or 280px) to provide a stable anchor for global navigation, while the main content area expands to utilize the full width of the browser, ensuring maximum visibility for large data tables.

## Elevation & Depth

To maintain a professional and "flat" corporate aesthetic, elevation is communicated primarily through **Tonal Layers** and **Low-contrast Outlines**. 

The background of the application uses a subtle off-white or very light grey. Primary containers (cards, data tables) are pure white with a 1px border (#E2E8F0). Depth is reserved for interactive states: when a user clicks a dropdown or a modal appears, a soft, diffused shadow is applied (0px 4px 12px rgba(26, 43, 73, 0.08)). This "elevation-as-function" approach ensures the focus remains on the information rather than the interface embellishments.

## Shapes

The shape language is **Soft**, utilizing a 0.25rem (4px) corner radius for most standard elements like input fields, buttons, and small containers. This subtle rounding removes the harshness of sharp corners while maintaining a disciplined, professional appearance.

Larger components, such as dashboard cards or modal containers, may use the `rounded-lg` (8px) token to provide a clear distinction between background and foreground content. Buttons and interactive chips never exceed 8px rounding; pill-shapes are avoided to maintain the system's alignment with traditional academic and corporate document structures.

## Components

### Buttons
Primary buttons utilize the Trustworthy Navy background with white text. Secondary buttons use the Soft Teal as an outline or light tint to denote secondary actions. Hover states should involve a subtle darkening of the base color.

### Data Tables
Tables are the heart of the CRM. Use a zebra-striping pattern with very low-contrast greys. Table headers should be set in the `label-sm` style with a solid bottom border. Cell padding should be tight vertically (8px) but generous horizontally (16px) to maximize row density.

### Status Chips
Use chips to indicate student enrollment status (e.g., "Active," "Withdrawn," "Graduated"). These use the primary or secondary colors with a 10% opacity background and a 100% opacity text color for high readability without visual clutter.

### Input Fields
Inputs should be clearly defined with 1px borders and a focus state that utilizes the Soft Teal color. Error states must use a red variant with an accompanying icon to ensure accessibility.

### Progress Indicators
For student language level tracking (A1 to C2), use horizontal bar components utilizing the Soft Teal accent color. These should be clean, without gradients, and accompanied by percentage or level labels.