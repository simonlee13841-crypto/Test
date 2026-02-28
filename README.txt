Name: [YOUR NAME HERE]
Tools used: ChatGPT, Colab, Browser

Q1:
- Key finding (2-4 sentences):
Study hours shows a stronger positive correlation with exam scores, with a clear upward trend as study hours increase. The trendline slope of approximately 3.53 indicates that each additional hour of study adds about 3.53 points to exam scores. Sleep hours alone doesn't show a consistent pattern - students with similar sleep hours can have very different scores depending on their study time.

- Outlier:
Student F (10 study hours, 6 sleep hours, 90 score) stands out as a high achiever - they scored higher than others with similar sleep patterns. While most students with 6 hours of sleep scored between 68-80, Student F scored 90 by studying 10 hours, showing that high study time can compensate for moderate sleep.

Q2:
- What was broken:
The original code lacked proper responsive behavior: navigation didn't stack on mobile, hero section didn't switch between column and row layout, grid had fixed 4 columns at all screen sizes causing overflow on mobile, container lacked proper padding and max-width, and there were no hover effects.

- What I changed:
Added media queries for mobile (0-600px), tablet (601-900px), and desktop (901px+). Fixed header to stack on mobile and row on desktop. Made hero section stack on mobile with card below text. Added grid breakpoints (1 col mobile, 2 col tablet, 4 col desktop). Added container with max-width:1000px and padding. Added hover effects with transitions for buttons and cards.

Q3:
Prompt 1 (plan, no code):
"Give me a plan for implementing responsive breakpoints for a website with header navigation, hero section, and a 4-card grid. Include specific CSS techniques and media query breakpoints. Don't write code, just explain the approach."

Response snippet:
"Use mobile-first approach with base styles for mobile. Add media query at 601px for tablet styles: header becomes flex row with space-between, navigation horizontal with gap. For hero, use flex-direction column on mobile, row on desktop with hero-card aligned right. For grid, use grid-template-columns: 1fr at mobile, repeat(2,1fr) at tablet, repeat(4,1fr) at desktop. Container should have max-width:1000px and auto margins with horizontal padding."

Accepted:
- Mobile-first approach with progressive enhancement
- Three breakpoint system (mobile/tablet/desktop) at 600px and 900px
- Grid column count changing at each breakpoint

Rejected:
- Using fixed pixel widths for container (I used max-width with percentage instead)
- Reason: Fixed widths can cause overflow on smaller screens; max-width with auto margins is more flexible and maintains responsiveness

Prompt 2 (debug):
"I have a problem: My hero section is not stacking properly on mobile. On screens under 600px, I want the hero card to appear below the text, but it's staying side by side. Here's my CSS snippet:

.hero {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

@media (max-width: 600px) {
    .hero {
        flex-direction: column;
    }
}"

Response snippet:
"Your media query should use min-width for mobile-first approach, or ensure the default is column and override for larger screens. The issue is that max-width:600px might not be catching all mobile devices. Try mobile-first approach:
.hero {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
@media (min-width: 601px) {
    .hero {
        flex-direction: row;
    }
    .hero-card {
        margin-left: auto;
    }
}"

What I changed:
I switched from max-width to min-width media queries and used mobile-first approach. Now mobile is the default (column), and tablet/desktop override to row layout with hero-card aligned to the right.

What I verified:
- viewport sizes tested: 375px (iPhone SE), 768px (iPad), 1200px (desktop)
- what I checked visually: Header logo and nav stack on mobile, become row on desktop; hero text above card on mobile, side-by-side on desktop with card right-aligned; grid shows 1 column on mobile, 2 on tablet, 4 on desktop; hover effects work on buttons and cards; no horizontal scrolling at any size

Q4:
- Chart caption:
This scatter plot shows the relationship between study hours and exam scores for 12 students, with a trendline indicating a strong positive correlation where more study hours lead to higher exam scores.

- Decision based on chart:
Based on this data, I would recommend implementing a mandatory study hall or tutoring program for students studying less than 5 hours per week, as they consistently score below 70, while students studying 8+ hours achieve scores above 85.
