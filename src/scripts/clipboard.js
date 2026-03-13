document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cmd[data-copy]').forEach(el => {
    el.addEventListener('click', async () => {
      const text = el.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      const tooltip = el.querySelector('.copied-tooltip');
      if (tooltip) {
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 1200);
      }
    });
  });
});
