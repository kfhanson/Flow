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
- Display typeface (headings only): `Fraunces`
- Body/UI typeface: `Plus Jakarta Sans`
- Hero headline role: `Fraunces` SemiBold with tight line height, large scale, and strong contrast against the black stage
- Section heading role: `Fraunces` SemiBold, editorial scale
- UI/body role: `Plus Jakarta Sans` Medium to SemiBold for navigation, product details, support answers, and cart UI
- Scale guidance:
  - Hero headline: `clamp(3rem, 7vw, 7.5rem)`
  - Section heading: `clamp(2rem, 3vw, 3.5rem)`
  - Card title: `1rem` to `1.25rem`
  - Body copy: `0.95rem` to `1rem`
  - Meta labels: `0.72rem` to `0.8rem`
- Usage guidance:
  - Use 800 for the hero headline and major numeric/stat moments
  - Use 700 for section titles and product names
  - Use 600 for navigation, labels, CTAs, and key metadata
  - Use 500 for paragraph copy and supporting product descriptions

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
- Center/right: links to Story, Variants, Reviews, Cart, Support
- Utility detail: compact cart item count and total

#### Hero Sequence
- Full-screen stacked scene with sticky viewport behavior
- Left or center: editorial copy introducing hero product drops
- Right or full bleed: PixVerse video stage with changing product angles
- Red vertical or horizontal progress rail tied to scroll position
- Product metadata updates per shot: model name, category, materials (minimal), price
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

#### Cart
- Cart lives as a navbar popup panel, not a separate page section
- Selected items, quantities, subtotal, and an intent-focused CTA
- Keep the cart surface solid so it reads clearly over the shared video backdrop

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

### 6.2 Featured Hero Product Direction
- Hero product name: `Flow Velocity 01`
- Product type: premium performance running shoe
- Shape language: aerodynamic, sharp, fast, and slightly futuristic
- Material direction: engineered black mesh upper, sculpted performance midsole, premium rubber outsole, deep red accent details
- Color balance: mostly black and graphite, with crimson used in controlled trims, edge details, outsole accents, or light reflections
- Product goal: feel exclusive, desirable, elite, and suitable for the first impression of the homepage

### 6.3 Hero Scroll Shot List
#### Shot 1: Shadow Reveal
- Framing: front three-quarter angle emerging from darkness
- Camera: slow dolly-in with tiny left-to-right drift
- Focus: overall silhouette and first red accent hit
- Purpose: establish mystery and premium presence

#### Shot 2: Power Profile
- Framing: low-angle lateral side profile
- Camera: smooth horizontal tracking move
- Focus: aerodynamic shape, speed lines, sculpted sole
- Purpose: communicate motion, performance, and authority

#### Shot 3: Material Macro
- Framing: extreme close-up on mesh, lace cage, and stitch transitions
- Camera: precise slow glide across the upper
- Focus: craftsmanship, texture, and premium construction
- Purpose: sell quality and Indonesian-made detail storytelling

#### Shot 4: Heel Signature
- Framing: macro close-up on heel counter and rear branding zone
- Camera: short orbital move with reflective light sweep
- Focus: rear construction, structure, and red edge highlight
- Purpose: create a memorable signature product moment

#### Shot 5: Outsole Strike
- Framing: low-angle underside and midsole detail
- Camera: controlled tilt and push with shallow depth of field
- Focus: traction geometry, sole sculpting, performance feel
- Purpose: reinforce the running-shoe identity

#### Shot 6: Top-Down Precision
- Framing: top-down beauty shot
- Camera: subtle rotation or locked composition with moving light
- Focus: lacing, tongue, shape symmetry, and upper patterning
- Purpose: give the hero sequence one clean editorial fashion frame

#### Shot 7: Final Hero Lockup
- Framing: centered beauty composition on a reflective black floor
- Camera: mostly still, with atmospheric movement and soft glow shifts
- Focus: full product identity, premium finish, final red accents
- Purpose: land the hero with a strong conversion-ready product state

### 6.4 PixVerse Prompt Base
- Prompt intent: cinematic luxury product commercial for `Flow Velocity 01`, a premium Indonesian running shoe
- Required visual cues: dark reflective studio, graphite environment, deep red accent lighting, photoreal detail, clean atmosphere, no people, no text overlays, no clutter
- Camera behavior: slow orbit, dolly, macro glides, low-angle power shots, controlled motion blur, shallow depth of field
- Mood keywords: premium, cinematic, editorial, modern, elite, fast, desirable, refined

### 6.5 PixVerse Master Prompt
```text
Cinematic luxury product commercial for Flow Velocity 01, a fictional premium Indonesian running shoe for the Flow brand. The shoe is sleek, modern, performance-driven, and fashion-forward, with a matte black engineered mesh upper, sculpted graphite midsole, premium outsole geometry, and deep crimson red accents. Dark luxury studio environment, reflective black floor, subtle graphite background, dramatic high-contrast lighting, controlled red edge light, polished highlights, soft haze, photorealistic premium sportswear campaign aesthetic.

Camera language: slow front three-quarter orbit, low-angle side-profile tracking shot, close-up detail passes on mesh texture, laces, heel counter, and outsole, elegant macro transitions, smooth cinematic dolly movement, shallow depth of field, controlled motion blur, premium editorial framing.

Mood and tone: bold, premium, modern, cinematic, fast, confident, elite, desirable, refined. The shoe must feel exclusive and suitable for a homepage hero section.

Constraints: single hero shoe only, no people, no clutter, no packaging, no storefront UI, no floating text, no captions, no watermark, no extra props, no colorful background, no cartoon look.

Color direction: mostly black and graphite with restrained deep red accents only.

Output: photorealistic cinematic product ad, luxury sportswear commercial, polished studio finish, smooth premium motion.
```

### 6.6 PixVerse Negative Prompt
- no people
- no text
- no watermark
- no logo overlay
- no extra shoes
- no colorful set
- no messy reflections
- no exaggerated CGI look
- no busy background

### 6.7 Support Host Shot Types
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
