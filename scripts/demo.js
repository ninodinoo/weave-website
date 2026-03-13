document.addEventListener('DOMContentLoaded', () => {
  const demoBody = document.getElementById('demo-terminal');
  if (!demoBody) return;

  // Show idle cursor before animation starts
  const idleCursor = document.createElement('span');
  idleCursor.className = 'demo-prompt';
  idleCursor.innerHTML = '$ <span class="cursor"></span>';
  demoBody.appendChild(idleCursor);

  const lines = [
    { type: 'prompt', text: '$ /weave:onboarding' },
    { type: 'pause', ms: 600 },
    { type: 'output', text: '' },
    { type: 'output', text: "Hey! I'm Weave. Let's build your perfect workflow." },
    { type: 'output', text: "Tell me about yourself \u2014 what do you do?" },
    { type: 'pause', ms: 800 },
    { type: 'input', text: "I'm a fullstack dev, mostly TypeScript and Go." },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'output', text: 'Nice. What are you building here?' },
    { type: 'pause', ms: 800 },
    { type: 'input', text: 'A SaaS app \u2014 Next.js frontend, Go API, Postgres.' },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'output', text: 'How do you like to work with AI?' },
    { type: 'pause', ms: 800 },
    { type: 'input', text: 'Plan first, then execute. Terse responses. Tests always.' },
    { type: 'pause', ms: 600 },
    { type: 'output', text: '' },
    { type: 'output', text: 'Got it. Generating your workflow now...' },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'check', text: '\u2713 4 agents created' },
    { type: 'check', text: '\u2713 2 agent teams configured' },
    { type: 'check', text: '\u2713 CLAUDE.md personalized' },
    { type: 'check', text: '\u2713 3 custom skills generated' },
    { type: 'check', text: '\u2713 Evolve hooks active' },
    { type: 'pause', ms: 2000 },
  ];

  function getClass(type) {
    const map = { prompt: 'demo-prompt', input: 'demo-input', output: 'demo-output', check: 'demo-check' };
    return map[type] || 'demo-output';
  }

  async function typeText(container, text, className, speed) {
    const span = document.createElement('span');
    span.className = className;
    container.appendChild(span);
    for (let i = 0; i < text.length; i++) {
      span.textContent += text[i];
      await sleep(speed);
    }
    container.appendChild(document.createTextNode('\n'));
  }

  function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function runDemo() {
    demoBody.textContent = '';
    for (const line of lines) {
      if (line.type === 'pause') {
        await sleep(line.ms);
        continue;
      }
      const speed = line.type === 'input' ? 30 : 18;
      await typeText(demoBody, line.text, getClass(line.type), speed);
    }
    // pause then loop
    await sleep(3000);
    runDemo();
  }

  // Start when demo section is visible
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        runDemo();
      }
    },
    { threshold: 0.3 }
  );

  const demoSection = document.getElementById('demo');
  if (demoSection) observer.observe(demoSection);
});
