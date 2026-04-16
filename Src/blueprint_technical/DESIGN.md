# Design System Specification: Technical Elegance

## 1. Overview & Creative North Star: "The Blueprint Precision"
This design system is built upon the concept of **The Blueprint Precision**. For engineering students, the environment must reflect the subject matter: structured, intentional, and impeccably clear. 

We are moving away from "standard" EdTech layouts that feel cluttered or overly academic. Instead, we embrace a **High-End Editorial** approach. Our North Star is the intersection of a technical schematic and a luxury architectural magazine. We break the "template" look by utilizing intentional asymmetry—where large typographic headlines are offset by vast amounts of whitespace—and layered tonal surfaces that suggest depth without the clutter of lines.

---

## 2. Color & Surface Architecture
The palette transitions from sterile whites to deep, professional blues. This system rejects the "flat" web; it focuses on perceived physical layers.

### The "No-Line" Rule
**Explicit Instruction:** Sectioning via 1px solid borders is strictly prohibited. Boundaries must be defined through background color shifts or subtle tonal transitions. Use `surface-container-low` for large section backgrounds to distinguish them from the main `surface` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked technical sheets.
- **Base Layer:** `surface` (#f8f9fa)
- **Content Zones:** `surface-container-low` (#f3f4f5)
- **Interactive Cards:** `surface-container-lowest` (#ffffff) for maximum "lift" against the background.
- **Overlays:** `surface-container-highest` (#e1e3e4) for modals and menus.

### The "Glass & Gradient" Rule
To inject "soul" into the technical aesthetic:
- **Glassmorphism:** Use semi-transparent `surface` colors with a 20px backdrop-blur for sticky headers and floating role-selection toggles.
- **Signature Gradients:** Apply a subtle linear gradient from `primary` (#003ec7) to `primary-container` (#0052ff) on main Action Buttons and Hero Typography to mimic the depth of blue-print ink.

---

## 3. Typography: Technical Authority
We pair the geometric precision of **Space Grotesk** with the high-utility legibility of **Inter**.

| Level | Token | Font Family | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Space Grotesk | 3.5rem | Bold, technical, rhythmic. |
| **Headline** | `headline-md` | Space Grotesk | 1.75rem | Used for module titles. |
| **Title** | `title-lg` | Inter | 1.375rem | Semibold for navigational cues. |
| **Body** | `body-lg` | Inter | 1rem | Balanced for long-form engineering docs. |
| **Label** | `label-md` | Inter | 0.75rem | Uppercase with 0.05em tracking for metadata. |

**Editorial Note:** Use `display-lg` with generous leading and negative letter-spacing (-0.02em) to create a premium, "magazine" feel in headers.

---

## 4. Elevation & Depth: Tonal Layering
We convey hierarchy through material weight rather than structural lines.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a natural, soft lift.
- **Ambient Shadows:** For floating elements, use "The Engineering Shadow": `0px 12px 32px rgba(25, 28, 29, 0.06)`. This mimics soft, natural studio lighting.
- **The "Ghost Border" Fallback:** If a container lacks contrast, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
- **Glassmorphism:** Navigation bars should use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `md` (0.375rem) roundedness. No border.
- **Secondary:** `surface-container-high` background with `on-secondary-container` text.
- **Tertiary:** Ghost style. No background; `primary` text. Transitions to a subtle `surface-variant` on hover.

### Role Selection Toggles
- **Interaction:** Avoid standard radio buttons. Use large-format "Role Cards" with `surface-container-lowest` backgrounds. Selection is indicated by a 2px `primary` ghost-border and a subtle scale transform (1.02x).

### Input Fields
- **State:** Fields use `surface-container-highest` with a bottom-only `outline` of 1px to mimic a drafting table aesthetic.
- **Focus:** On focus, the field transitions to a `primary` bottom border and a very soft `primary-fixed` subtle glow.

### Cards & Lists
- **The Divider Ban:** Lists must never use horizontal lines. Separate list items using `1.5rem` of vertical white space or by alternating background tones (`surface` to `surface-container-low`).

### Social Login Buttons
- **Style:** Minimalist. Use `surface-container-lowest` with a "Ghost Border" (15% `outline-variant`). Icons should be monochrome `on-surface` until hovered, where they take on their brand color.

---

## 6. Do’s and Don’ts

### Do
- **Use White Space as a Tool:** Treat empty space as a structural element, not "missing" content.
- **Align to a Grid, then Break It:** Use a 12-column grid but allow featured images or quotes to bleed across 1-2 columns for an editorial look.
- **Prioritize "Inter" for Data:** Any numerical engineering data must use Inter for its high legibility and tabular spacing features.

### Don’t
- **Don't use pure black:** Use `on-surface` (#191c1d) for text to maintain a high-end, softer contrast.
- **Don't use standard drop-shadows:** Avoid any shadow that feels "heavy" or "dirty." If you can clearly see the shadow, it’s too dark.
- **Don't use 1px dividers:** If you feel the need for a line, try using a 16px gap or a background color shift instead.