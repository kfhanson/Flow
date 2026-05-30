## 1. Creative Direction
Flow should feel like a luxury fashion campaign translated into an ecommerce experience: dark, deliberate, cinematic, and sharp. The visual identity is anchored by a black base, graphite layering, and a saturated red reserved for the `Flow` wordmark, active states, progress indicators, and critical CTAs.

## 2. Brand Expression
- Brand tone: premium, confident, modern, Indonesian, fashion-forward
- Emotional goals: obsession, desire, velocity, confidence, reassurance
- Signature memory: users should remember the red `Flow` mark hovering over a black cinematic scroll sequence of shoes rotating through dramatic perspectives

## 3. Global Design Tokens
### 3.1 Colors
| Token | Usage | Suggested Value |
|-------|-------|-----------------|
| `--bg-primary` | Main background | `#060606` |
| `--bg-panel` | Section surfaces | `#101010` |
| `--bg-elevated` | Cards and overlays | `#171717` |
| `--text-primary` | Main text | `#f5f5f4` |
| `--text-muted` | Supporting text | `#a1a1aa` |
| `--brand-red` | Wordmark, active accents, key CTA | `#d0111b` |
| `--brand-red-soft` | Gradients and glows | `rgba(208, 17, 27, 0.18)` |
| `--border-strong` | Sharp borders | `rgba(255,255,255,0.12)` |

### 3.2 Typography
- Display font role: high-contrast editorial serif with strong luxury attitude for hero headings and quote moments
- UI/body font role: refined neo-grotesk sans for navigation, product details, support answers, and cart UI
- Scale guidance:
  - Hero headline: `clamp(4rem, 7vw, 8rem)`
  - Section heading: `clamp(2rem, 3vw, 3.5rem)`
  - Card title: `1rem` to `1.25rem`
  - Body copy: `0.95rem` to `1rem`
  - Meta labels: `0.72rem` to `0.8rem`

### 3.3 Surfaces and Effects
- Panels use layered charcoal surfaces with fine borders and subtle inner highlights
- Red glow is applied sparingly to active states, not as a constant wash
- Use a low-opacity grain/noise layer to keep black areas from feeling flat
- Shadows should feel dense and cinematic rather than soft and playful

## 4. Page-Level Experience
### 4.1 Home Page
#### Header
- Transparent to solid transition on scroll
- Left: `Flow` wordmark in red
- Center/right: links to Story, Variants, Reviews, Related, Cart, Support
- Utility detail: compact cart item count and total

#### Hero Sequence
- Full-screen stacked scene with sticky viewport behavior
- Left or center: editorial copy introducing hero product drops
- Right or full bleed: PixVerse video stage with changing product angles
- Red vertical or horizontal progress rail tied to scroll position
- Product metadata updates per shot: model name, category, material callout, price
- Microcopy line under headline: premium Indonesian craft meets street velocity

#### Story Section
- Split grid with one oversized quote block and one descriptive narrative block
- Supporting visual texture: stitched line motif or schematic-inspired product marks
- Copy should frame Flow as a fictional but believable premium Indonesian label

#### Variants Section
- Featured cards for 3 to 5 hero products
- Each card includes:
  - product name
  - colorway
  - material tags
  - price
  - angle selector or detail thumbnails
  - add-to-cart CTA
- Hover behavior reveals additional product detail or alternate angle preview

#### Reviews Section
- Mix of aggregate score, editorial pull quote, and customer cards
- Ratings presented cleanly, avoiding generic marketplace styling
- Layout resembles a magazine review wall, not a commodity testimonial carousel

#### Related Section
- Horizontal release strip or asymmetric grid
- Intended to feel like a curated drop list rather than algorithmic recommendations

#### Cart Section
- Sticky summary panel near the bottom of the flow
- Selected items, quantities, subtotal, and a strong checkout intent button
- Include reassurance copy: secure checkout, premium packaging, authentic release

### 4.2 Support Page
#### Hero Block
- Full-height opening view with support host video framed inside a sharp luxury console
- Intro copy promises quick answers to common questions

#### Question Selector
- Templated questions displayed as large selectable chips/cards
- Suggested prompts:
  - Shipping in Indonesia
  - Size guidance
  - Authenticity guarantee
  - Returns and exchanges
  - Payment options

#### Answer Panel
- Selected answer appears alongside or beneath the support host video
- Content includes a concise title, spoken-style response, and key bullet highlights
- Transition between questions should feel smooth and editorial, not chat-like

## 5. Scroll and Motion Choreography
- Hero scroll behavior is the centerpiece: every major viewport interval advances a new PixVerse shot and related text state
- Use text masking, fade-up transitions, and subtle panel parallax rather than exaggerated motion
- Product cards respond on hover with small lifts, red edge glows, and thumbnail shifts
- Support page uses calmer, more reassuring transitions than the sales-focused home page

## 6. PixVerse Asset Planning
### 6.1 Product Hero Shot Types
- Front three-quarter studio rotation
- Low-angle sole detail pass
- Heel counter close-up with reflective light sweep
- Lateral side profile with soft camera orbit
- Top-down lace and tongue macro
- Multi-product lineup reveal on black reflective floor

### 6.2 Support Host Shot Types
- Mid-shot speaking directly to camera
- Slight side-angle emphasis for answer transitions
- Controlled hand gesture moments for reassurance
- Neutral luxury studio background with subtle brand-red light accent

## 7. Content Direction
- Product naming should sound premium and modern, with Indonesian-rooted confidence
- Copy should avoid generic marketplace phrasing and instead feel like fashion-editorial commerce
- Reviews should balance aspiration with functional trust: comfort, build quality, materials, and fit

## 8. Responsive Adaptation
- On tablet, the hero remains cinematic but shifts to shorter sticky windows
- On mobile, hero shots become stacked chapters with simplified overlay copy
- Product cards collapse into swipeable modules
- Support question chips become full-width touch targets with the answer panel directly below
