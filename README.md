# Team Bliss — React

React (Vite) conversion of the Team Bliss "Empowering Women, Securing Lives"
hackathon site — same design, animations, and content, rebuilt as
components instead of a single HTML/CSS/JS bundle.

## Structure

```
src/
  components/
    StarBackground.jsx   canvas starfield (was the #bg-canvas script)
    Header.jsx            orbit logo, nav, scroll-shrink, mobile hamburger
    Hero.jsx               headline + floating particles
    About.jsx               "Who We Are" + stat cards
    Portfolio.jsx           project grid (opens the chat widget for the AI card)
    Team.jsx                 team cards with image-fails-to-initial fallback
    Contact.jsx              contact chips
    Footer.jsx
    ChatWidget.jsx           floating chat button + Chatbase iframe window
  hooks/
    useReveal.js           IntersectionObserver hook (replaces the old
                             .reveal / .stagger-children scroll-reveal script)
  App.jsx
  main.jsx
  index.css                 the original stylesheet, unchanged
public/images/               team avatars
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Notes on the conversion

- All the vanilla-JS behaviour from the old `script.js` (header shrink on
  scroll, hamburger/mobile nav, smooth-scroll anchors, scroll-reveal
  animations, chat toggle/outside-click/escape-to-close) is now plain
  React state + `useEffect`, split one concern per component.
- `style.css` was carried over as-is (`src/index.css`) — the class names
  in every component match it exactly, so the visuals are unchanged.
- Portfolio and team data are plain arrays at the top of their components
  — edit those arrays to add/change projects or teammates instead of
  touching markup.
- The Chatbase iframe URL is the one from the original site; swap it in
  `ChatWidget.jsx` if you spin up your own bot.
