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
    { type: 'output', text: "Hey! I'm Weave. Let me learn about your project." },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'prompt', text: '> What kind of project is this?' },
    { type: 'pause', ms: 800 },
    { type: 'input', text: 'A SaaS app \u2014 Next.js frontend, Python API, Postgres' },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'prompt', text: '> How do you like to work?' },
    { type: 'pause', ms: 800 },
    { type: 'input', text: 'Small PRs, tests first, keep it simple' },
    { type: 'pause', ms: 400 },
    { type: 'output', text: '' },
    { type: 'prompt', text: '> Any rules or conventions?' },
    { type: 'pause', ms: 800 },
    { type: 'input', text: 'No ORMs, raw SQL only. Conventional commits.' },
    { type: 'pause', ms: 600 },
    { type: 'output', text: '' },
    { type: 'check', text: '\u2713 Workflow generated' },
    { type: 'check', text: '\u2713 3 agent teams configured' },
    { type: 'check', text: '\u2713 Rules personalized' },
    { type: 'check', text: '\u2713 Ready to work' },
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
