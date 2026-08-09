---
name: Academic Distinction
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5f7b'
  primary: '#04162e'
  on-primary: '#ffffff'
  primary-container: '#1a2b44'
  on-primary-container: '#8292b0'
  inverse-primary: '#b6c7e7'
  secondary: '#005bbf'
  on-secondary: '#ffffff'
  secondary-container: '#4f91ff'
  on-secondary-container: '#002a60'
  tertiary: '#211400'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a2703'
  on-tertiary-container: '#aa8d5f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b6c7e7'
  on-primary-fixed: '#091c34'
  on-primary-fixed-variant: '#374762'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#acc7ff'
  on-secondary-fixed: '#001a40'
  on-secondary-fixed-variant: '#004492'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#e2c290'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#59431c'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
  slate-bg: '#F8F9FA'
  citation-blue: '#1A0DAB'
  border-subtle: '#E5E7EB'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  margin-page: 40px
  gutter: 24px
  section-gap: 80px
  max-width: 1140px
---

## Brand & Style

This design system is built for the PhD scholar, emphasizing intellectual authority, research impact, and professional clarity. The brand personality is **scholarly, meticulous, and sophisticated**, moving away from the utilitarian look of standard citation engines toward a curated, editorial aesthetic.

The design style is **Minimalism with a High-Contrast Editorial lean**. It utilizes expansive whitespace to allow complex research data to breathe, paired with sharp typography to establish a clear information hierarchy. The emotional response should be one of "effortless credibility"—where the interface recedes to let the scholarly contributions take center stage.

## Colors

The palette is anchored by a deep **Scholarly Navy** (#1A2B44), chosen for its association with institutional stability and trust. This is supported by a functional **Research Blue** (#4D90FE) for interactive elements and a legacy **Citation Blue** (#1A0DAB) used exclusively for hyperlinked paper titles to maintain mental models familiar to the academic community.

The background uses a "Paper White" approach (#FFFFFF) with sections occasionally distinguished by a very faint **Slate Gray** (#F8F9FA) to separate biography from the publication ledger. Text contrast is kept high to ensure readability across long-form abstracts and data-heavy tables.

## Typography

The system employs a sophisticated pairing of **Playfair Display** for headings and **Inter** for all functional and body text. 

- **Headlines:** Use Playfair Display to evoke the feel of high-end academic journals. Tracking is tightened slightly for large display titles to maintain a modern edge.
- **Body:** Inter provides the necessary neutrality and legibility for dense citations and abstracts. 
- **Metrics:** Citation counts and years should use Inter's medium weight to ensure they remain scannable without being visually heavy.

## Layout & Spacing

This design system follows a **Fixed Grid** model on desktop to mimic the structured feel of a printed curriculum vitae. 

- **Desktop (1140px):** A 12-column grid with generous margins. Content is centered.
- **Sectioning:** Use an 80px vertical gap between major sections (e.g., Biography to Publications) to emphasize the minimalist, airy intent.
- **Reading Width:** Abstracts and biography text should be constrained to a maximum of 8 columns (approx. 720px) to ensure optimal line lengths for reading.
- **Mobile:** Transition to a single-column fluid layout with 24px side margins.

## Elevation & Depth

To maintain the clean, "flat-ink-on-paper" aesthetic, this system avoids heavy shadows. 

- **Tonal Layers:** Depth is achieved through color blocks rather than shadows. Elements like "Metric Cards" use a subtle light-gray background (#F5F5F5) instead of an elevated shadow.
- **Borders:** Use thin, low-contrast outlines (#E5E7EB) to define publication rows or card boundaries. 
- **Active States:** Subtle transitions in background color (e.g., a paper row highlighting to a very pale blue on hover) indicate interactivity without breaking the flat plane.

## Shapes

The shape language is **Soft (Level 1)**. Given the academic context, overly rounded or pill-shaped buttons feel too casual.

- **Standard Elements:** Buttons, input fields, and metric cards use a 4px (0.25rem) radius.
- **Profile Images:** Should be contained in a soft-square (rounded) or circular frame, depending on the formality of the headshot, but consistent across the site.
- **Tags/Chips:** Research interest tags use the same 4px radius to maintain a structural, architectural feel.

## Components

### Buttons
Primary buttons use the Scholarly Navy background with white text. Secondary buttons should be "Ghost" style with a thin border and the Navy text.

### Publication List
A vertical list of papers where the title is the most prominent element (Headline-MD in Citation Blue). Meta-data (authors, journal, year) follows in Body-SM. Each row is separated by a 1px subtle border.

### Citation Metrics
Large numerical displays for H-index and Total Citations. Use Playfair Display for the numbers and Label-Caps for the descriptor. These should be housed in simple, non-elevated "Metric Boxes" with a light slate background.

### Research Interest Chips
Small, non-interactive (or filter-enabled) chips using a light gray background and Body-SM text. These serve as organizational labels for the scholar’s expertise.

### Bio Section
Feature a large display headline for the scholar's name. Use Body-LG for the introductory paragraph to distinguish the personal narrative from the technical publication data below.