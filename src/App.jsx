import './App.css'

const STEPS = [
  {
    number: 1,
    title: 'Change the page heading',
    description: 'Open src/App.jsx and find the <h1> tag inside the hero section. Replace the text with your name or team name.',
    code: `// src/App.jsx  →  find this line and update it
<h1 className="hero-title">Hello, <span>Your Name Here</span></h1>`,
    hint: 'Save the file — the page will hot-reload instantly in dev mode.',
  },
  {
    number: 2,
    title: 'Pick your theme color',
    description: 'Open src/App.css and change the --accent CSS variable to any hex color you like.',
    code: `/* src/App.css  →  change this value */
--accent: #your-color-here;   /* e.g. #e85d04, #7209b7, #06d6a0 */`,
    hint: 'Try a color from coolors.co or just type your favourite hex code.',
  },
  {
    number: 3,
    title: 'Add your bio card',
    description: 'Below the steps section in App.jsx, fill in the <BioCard> component with your real details.',
    code: `// src/App.jsx  →  update these props
<BioCard
  name="Your Name"
  role="Your Role"
  fun="One fun fact about you"
/>`,
    hint: 'The card is already rendered on the page — just update the props.',
  },
  {
    number: 4,
    title: 'Commit & push',
    description: 'Stage your changes, write a meaningful commit message, and push to main.',
    code: `git add src/App.jsx src/App.css
git commit -m "feat: personalize my app"
git push origin main`,
    hint: 'Check the Actions tab on GitHub — your push triggers the build pipeline.',
  },
  {
    number: 5,
    title: 'See your app live',
    description: 'Once the pipeline finishes (~ 2 min), open your deployed URL and verify your changes are live.',
    code: `# Your app URL was shown when the template was scaffolded.
# You can also find it in the GitHub repo → About → Website`,
    hint: 'If the pipeline fails, read the red step in GitHub Actions for the error.',
  },
]

function StepCard({ step }) {
  return (
    <div className="step-card">
      <div className="step-number">{step.number}</div>
      <div className="step-body">
        <h2 className="step-title">{step.title}</h2>
        <p className="step-desc">{step.description}</p>
        <pre className="step-code"><code>{step.code}</code></pre>
        <p className="step-hint">💡 {step.hint}</p>
      </div>
    </div>
  )
}

function BioCard({ name = 'Your Name', role = 'Your Role', fun = 'One fun fact about you' }) {
  return (
    <div className="bio-card">
      <div className="bio-avatar">{name.charAt(0).toUpperCase()}</div>
      <div className="bio-info">
        <strong>{name}</strong>
        <span>{role}</span>
        <em>"{fun}"</em>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-badge">Hands-on Assignment</div>
        <h1 className="hero-title">Make it <span>yours</span></h1>
        <p className="hero-sub">
          Follow the 5 steps below to personalize this app and ship your first change through the full CI/CD pipeline.
        </p>
      </header>

      <section className="steps">
        {STEPS.map(step => <StepCard key={step.number} step={step} />)}
      </section>

      <section className="bio-section">
        <h2>Your Bio Card (Step 3 result)</h2>
        <p className="section-sub">Update the props in App.jsx — this card will reflect your changes.</p>
        <BioCard
          name="Your Name"
          role="Your Role"
          fun="One fun fact about you"
        />
      </section>

      <footer className="footer">
        <p>Service scaffolded via <strong>Gruve IDP</strong> · React 19 + Vite 7 + Nginx + Docker</p>
      </footer>
    </div>
  )
}

export default App
