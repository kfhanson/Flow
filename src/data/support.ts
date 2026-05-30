import type { SupportQuestion } from './types'

export const supportQuestions: SupportQuestion[] = [
  {
    id: 'shipping-indonesia',
    label: 'Shipping in Indonesia',
    shortPrompt: 'How long does shipping take within Indonesia?',
    answerTitle: 'Fast delivery across Indonesia',
    answerBody:
      'Flow orders are prepared within 1 business day, then shipped across Indonesia using trusted courier partners. Delivery time depends on destination, but major cities typically arrive faster than remote regions. Once your order is confirmed, you will receive tracking details so you can follow every stage of the shipment.',
    keyPoints: [
      'Orders are prepared within 1 business day',
      'Delivery speed depends on destination',
      'Tracking information is shared after confirmation',
    ],
    videoCue: 'Warm, confident explanation focused on speed and reliability',
    cta: 'Track your order once confirmed',
  },
  {
    id: 'international-shipping',
    label: 'International Shipping',
    shortPrompt: 'Do you ship outside Indonesia?',
    answerTitle: 'Selected international delivery is available',
    answerBody:
      'Flow is built around an Indonesian premium retail identity, but selected international shipping can be supported depending on destination and courier coverage. Shipping cost, customs timing, and local import policies vary by region. For international requests, customers should confirm destination availability before purchase.',
    keyPoints: [
      'Selected destinations may be supported',
      'Rates and customs timing vary by country',
      'Destination confirmation is recommended before ordering',
    ],
    videoCue: 'Measured and helpful tone with a slightly more formal delivery',
    cta: 'Check destination availability before checkout',
  },
  {
    id: 'size-guidance',
    label: 'Size Guidance',
    shortPrompt: 'How do I choose the right size?',
    answerTitle: 'Choose your size with confidence',
    answerBody:
      'Flow footwear is designed to deliver a secure performance fit with everyday comfort. We recommend comparing your usual sneaker size with the product size guide and paying attention to fit notes for each silhouette. If you are between sizes, the best choice depends on whether you prefer a close running fit or a little more room for daily wear.',
    keyPoints: [
      'Use the product size guide as your baseline',
      'Review fit notes for each silhouette',
      'Between sizes depends on your preferred fit feel',
    ],
    videoCue: 'Reassuring tone with precise hand gestures',
    cta: 'Check the size guide before adding to cart',
  },
  {
    id: 'authenticity-guarantee',
    label: 'Authenticity Guarantee',
    shortPrompt: 'How do I know the shoes are authentic?',
    answerTitle: 'Every Flow pair is guaranteed authentic',
    answerBody:
      'Every Flow product is presented as an official release from the brand and is handled with premium packaging and quality control standards. Materials, finishing details, and release presentation are treated as part of the product experience. Customers receive the exact product configuration shown in the selected listing and variant state.',
    keyPoints: [
      'Each pair is treated as an official brand release',
      'Packaging and presentation are part of the premium experience',
      'Customers receive the selected variant configuration',
    ],
    videoCue: 'Direct eye contact and calm confidence',
    cta: 'Review the selected variant before checkout',
  },
  {
    id: 'returns-exchanges',
    label: 'Returns and Exchanges',
    shortPrompt: 'Can I return or exchange my order?',
    answerTitle: 'Returns and exchanges are handled carefully',
    answerBody:
      'Flow supports return or exchange requests for eligible orders within the stated return window, provided the product remains unworn and in its original condition with complete packaging. Exchanges are subject to stock availability. If an item arrives with a verified issue, our support flow prioritizes a fast resolution.',
    keyPoints: [
      'Items must remain unworn and complete',
      'Exchanges depend on stock availability',
      'Verified issues are prioritized for resolution',
    ],
    videoCue: 'Empathetic and solution-oriented delivery',
    cta: 'Contact support within the return window',
  },
  {
    id: 'payment-options',
    label: 'Payment Options',
    shortPrompt: 'What payment methods do you accept?',
    answerTitle: 'Flexible payment options',
    answerBody:
      'Flow supports common checkout payment methods suitable for premium ecommerce, including card-based payments and selected digital payment options. Available methods can vary depending on region and implementation phase. Customers should see the final available methods clearly before confirming an order.',
    keyPoints: [
      'Card-based payments are supported',
      'Selected digital payment options may be available',
      'Final payment options are shown during checkout',
    ],
    videoCue: 'Clear and concise explanation with confident pacing',
    cta: 'Review available methods at checkout',
  },
  {
    id: 'order-tracking',
    label: 'Order Tracking',
    shortPrompt: 'How can I track my order?',
    answerTitle: 'Tracking is shared after confirmation',
    answerBody:
      'As soon as your order is processed and prepared for shipment, Flow provides tracking information so you can monitor progress from dispatch to delivery. Tracking visibility depends on the courier service used for your destination. If a tracking link does not update immediately, it usually becomes active shortly after handoff.',
    keyPoints: [
      'Tracking is sent after processing and dispatch preparation',
      'Courier systems may take time to refresh',
      'Progress can be followed from dispatch to delivery',
    ],
    videoCue: 'Helpful explanatory tone with reassuring cadence',
    cta: 'Use the courier tracking link after dispatch',
  },
  {
    id: 'product-care',
    label: 'Product Care',
    shortPrompt: 'How should I take care of my shoes?',
    answerTitle: 'Care keeps the finish premium',
    answerBody:
      'To keep your Flow pair looking sharp, clean the upper gently with a soft brush or cloth and avoid harsh cleaning chemicals. Let the shoes dry naturally after exposure to moisture, and store them in a cool dry place. Premium materials keep their shape and finish longer when handled with consistent care.',
    keyPoints: [
      'Use gentle cleaning methods',
      'Avoid harsh chemicals and direct heat',
      'Store in a cool dry place',
    ],
    videoCue: 'Softer and more lifestyle-oriented delivery',
    cta: 'Follow the care guidance to extend product life',
  },
]
