# Flow Page Design

## 1. Creative Direction
Flow should feel like a premium shoe shop with a sharp conversational concierge. The design is direct and commerce-focused: dark surfaces, crisp product cards, red accents, and clear assistant-led actions.

The first screen must show that users can shop by asking Flow what they need. The assistant is the main experience; the product grid supports it.

## 2. Brand Expression
- Brand tone: premium, helpful, confident, modern Indonesian, commerce-led
- Emotional goals: clarity, confidence, speed, trust
- Signature memory: a red `Flow` wordmark above a dark assistant-driven shopping interface that turns a user prompt into polished shoe cards

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
| `--brand-red-soft` | Subtle glow and focus states | `rgba(208, 17, 27, 0.18)` |
| `--border-strong` | Sharp borders | `rgba(255,255,255,0.12)` |

### 3.2 Typography
- Display font role: confident editorial heading for brand moments
- UI/body font role: clean sans for chat, product data, prices, and controls
- Hero headline: `clamp(2.75rem, 5vw, 5.75rem)`
- Section heading: `clamp(1.75rem, 2.5vw, 3rem)`
- Card title: `1rem` to `1.25rem`
- Body copy: `0.95rem` to `1rem`
- Meta labels: `0.72rem` to `0.8rem`

## 4. Page-Level Experience

### 4.1 Home Page
The home page should combine a premium storefront intro with immediate assistant access.

Required elements:
- Fixed or sticky header
- Red Flow wordmark
- Category links: Sneakers, Running, Daily, New Drops
- Bag summary indicator
- Primary assistant CTA
- Suggested prompt strip
- Featured mock product preview cards

Hero layout:
- Left: headline and supporting copy
- Right or center: assistant launch panel with suggested prompts
- Below first viewport: product results or curated featured shoes

Avoid:
- Generic marketplace density on first view
- Full-screen video dependency
- Decorative UI that hides the shopping task

### 4.2 Assistant Panel
The assistant may be a modal, right drawer, or large centered panel.

Required elements:
- Header with assistant name, status, and close button
- Scrollable message list
- Suggested prompt chips
- Text input
- Send button
- Loading state
- Structured response renderer

Behavior:
- First open shows a welcome message and examples.
- User prompts appear as right-aligned message bubbles.
- Assistant responses appear as left-aligned message areas.
- Structured responses render as cards inside the assistant stream.
- Loading state should be calm and short to preserve the mock illusion.

### 4.3 Response Renderers

#### Product List
Render each product as a compact premium card:
- Image
- Product name
- Category
- Price in `Rp`
- Colorway
- Why it matches the prompt
- Available size chips
- "View details" and "Add to bag" actions

#### Product Detail
Render a larger card:
- Product image
- Name and price
- Material tags
- Colorways
- Sizes
- Fit note
- Short product story
- Store stock cue
- Add-to-bag controls

#### Bag Summary
Render:
- Item rows with name, size, color, quantity, price
- Subtotal
- Suggested next actions: find store, delivery options, place mock order

#### Store List
Render:
- Store name
- Address
- Distance
- Pickup availability
- Matching stock count
- Delivery options action

A real map is optional. For the first implementation, store cards are enough.

#### Delivery Methods
Render three method cards:
- Store Pickup
- Standard Delivery
- Express Delivery

Each card should show description, cost, and estimated delivery time.

#### Order Status
Render:
- Order ID
- Status badge
- Store
- Delivery or pickup method
- Item list
- Total
- Demo-state disclaimer in small supporting text

## 5. Mock Interaction Copy

Initial greeting:
"Welcome to Flow. Tell me what kind of shoes you need, or choose a prompt below."

Fallback:
"I can help with shoe recommendations, product details, your bag, store pickup, delivery options, or mock order status. Try asking for black sneakers, red accent shoes, or stores near Jakarta."

Clarification examples:
- "Which size should I add? Available sizes are 40, 41, 42, and 43."
- "Which color do you want: black/red, graphite, or white?"
- "Which store should I use for pickup: Flow Senayan, Flow Kemang, or Flow PIK?"

## 6. Motion And Feedback
- Use short fades and subtle slide transitions.
- Product cards may lift slightly on hover.
- Red focus rings must be visible for keyboard navigation.
- Avoid noisy bouncing or excessive animation.
- Respect reduced-motion preferences.

## 7. Responsive Adaptation
- Desktop: assistant can sit beside product results or open as a large modal.
- Tablet: assistant uses most of the viewport width with product cards in one or two columns.
- Mobile: assistant becomes full-screen; prompt chips wrap; product cards become single column; input stays accessible at the bottom.

## 8. Accessibility
- All buttons must have clear labels.
- Product cards must not rely only on color.
- Input must submit on Enter and support button submission.
- Response cards must be readable without images.
- Loading states should be announced through accessible text where practical.
- Color contrast must remain strong on dark backgrounds.
