(function(){
  const root = document.documentElement;
  const key = 'resume_theme';

  function setTheme(t){
    if(t === 'light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
  }

  const saved = localStorage.getItem(key);
  if(saved) setTheme(saved);

  const btn = document.getElementById('toggleTheme');
  if(btn){
    btn.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = cur === 'light' ? 'dark' : 'light';
      setTheme(next === 'light' ? 'light' : 'dark');
      localStorage.setItem(key, next);
    });
  }

  const pdf = document.getElementById('downloadPdf');
  if(pdf){
    pdf.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }

  const last = document.getElementById('lastUpdated');
  if(last){
    const d = new Date();
    last.textContent = d.toISOString().slice(0,10);
  }
})();
