// Alternar tema claro/escuro
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Salvar preferência no localStorage
  if(body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Aplica tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark') {
    body.classList.add('dark');
  }
});

// Toggle das habilidades
document.querySelectorAll('.toggle-habilidades-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    if(target.style.display === 'flex') {
      target.style.display = 'none';
      btn.textContent = 'Clique aqui para ver as habilidades';
    } else {
      target.style.display = 'flex';
      btn.textContent = 'Ocultar habilidades';
    }
  });
});

// Canvas de pixels com código binário azul (fundo animado)
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');

let width, height;
const pixelSize = 10;
const columns = [];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Inicializa colunas
  columns.length = 0;
  for(let i = 0; i < Math.floor(width / pixelSize); i++) {
    columns[i] = 0;
  }
}

function draw() {
  ctx.fillStyle = body.classList.contains('dark') ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = body.classList.contains('dark') ? '#3399ff' : '#0047b3'; // azul claro/escuro

  for(let i = 0; i < columns.length; i++) {
    const x = i * pixelSize;
    const y = columns[i] * pixelSize;

    const char = Math.random() > 0.5 ? '0' : '1';

    ctx.fillText(char, x, y);

    if(y > height && Math.random() > 0.975) {
      columns[i] = 0;
    } else {
      columns[i]++;
    }
  }
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener('resize', resize);
resize();
ctx.font = `${pixelSize}px monospace`;
loop();


document.querySelectorAll('.toggle-projetos-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    const isAtivo = target.classList.contains('ativo');

    if(isAtivo) {
      target.classList.remove('ativo');
      btn.textContent = 'Ver projetos';
    } else {
      target.classList.add('ativo');
      btn.textContent = 'Ocultar projetos';
    }
  });
});

document.querySelectorAll('.toggle-projetos-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);

    if (target.style.display === 'flex') {
      target.style.display = 'none';
      btn.textContent = 'Clique aqui para ver os projetos';
    } else {
      target.style.display = 'flex';
      btn.textContent = 'Ocultar projetos';
    }
  });
});



