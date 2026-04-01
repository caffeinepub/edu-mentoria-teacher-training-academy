# Edu Mentoria Teacher Training Academy

## Current State
The EnrolPage (`src/frontend/src/pages/EnrolPage.tsx`) has:
- Hero section: dark navy (#0d1945) with grid pattern, lime badge, bold heading — matches main site
- Section 2 (form area): light background (#F2F5FF), white form card with blue labels — does NOT match the main site's dark aesthetic
- Why Choose card: navy — matches
- Office Hours card: lime — matches
- Overall: inconsistent, lower half feels like a generic light-theme page

## Requested Changes (Diff)

### Add
- Full dark navy (#0d1945 / #0a1235) background for the entire page body to match the main landing page
- Subtle texture/grain and grid-line overlays on section 2 matching the main site's layered depth style
- Decorative glowing orbs / radial teal and lime glow blobs in the background of section 2
- Diagonal SVG section divider between the hero and the form section (matching main site dividers)
- A left-side editorial label/accent strip for the form section heading (like the ghost labels on main sections)
- Glassmorphism / dark-card style for the form card: semi-transparent dark with border glow
- Accent lime line/border detail on the form card (like the main site's left-border accents)
- Dark teal-tinted input fields that feel part of the dark theme

### Modify
- Page background: from #F2F5FF → deep navy/dark matching the main site
- Form card: from white with light border → dark glassmorphism card (rgba(255,255,255,0.04) bg, teal/lime border glow)
- Form field labels: from #1A2B8C → lime or off-white to match dark background
- Form inputs: from #F2F5FF bg with navy text → dark navy bg with off-white text, subtle border
- Submit button: keep navy but now add lime accent hover (or invert to lime+navy text to pop on dark bg)
- Success state card: from light teal tint → dark with teal border glow matching dark theme
- "Send an Enquiry" heading: from blue → white/lime to match dark card
- Section 2 subtext: from dark blue → off-white/muted
- Privacy note text color: lighter to be readable on dark
- error spans: keep red but adjust for dark bg contrast

### Remove
- Light #F2F5FF outer page background
- White form card background
- Light box-shadow on form card (replace with glow-style shadow)

## Implementation Plan
1. Change the root page div background from #F2F5FF to #0a1235 (slightly deeper navy than hero)
2. Add a diagonal SVG divider after the hero section
3. Add grain overlay + grid texture + 2-3 radial glow blobs in section 2 background
4. Restyle the form card to dark glassmorphism matching the site's dark aesthetic
5. Update all text colors inside the form card to work on dark background (labels: lime, body: off-white)
6. Restyle inputs: dark navy bg, off-white text, teal-tinted border on focus
7. Restyle submit button to lime background with navy text (high contrast accent CTA on dark card)
8. Update success state to dark card with teal border
9. Keep Why Choose (navy) and Office Hours (lime) cards exactly as-is — they already match
10. Ensure mobile responsive styles still apply
