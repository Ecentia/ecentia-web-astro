// src/scripts/cursor.js

// Lógica para inicializar el cursor
function initCursor() {
    const canvas = document.getElementById('cursor-canvas');
    const mainCursor = document.getElementById('main-cursor');

    if (canvas && mainCursor) {
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cursor = { x: width / 2, y: height / 2 };
        let particles = [];

        // Asegurar estilos iniciales
        mainCursor.style.borderRadius = '50%';
        mainCursor.style.transform = 'translate(-50%, -50%)';

        // Manejo de resize
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });
        canvas.width = width;
        canvas.height = height;

        // Movimiento
        const moveCursor = (x, y) => {
            mainCursor.style.left = `${x}px`;
            mainCursor.style.top = `${y}px`;
        };

        // Eventos
        document.addEventListener('mousemove', e => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            moveCursor(cursor.x, cursor.y);
            // Partículas originales
            if(Math.random() > 0.5) particles.push(new Particle(cursor.x, cursor.y));
        });

        // Clase Partícula Original
        class Particle {
            constructor(x, y) {
                this.x = x; this.y = y;
                this.size = Math.random() * 2 + 0.5;
                this.color = '168, 85, 247'; 
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 0.5;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.life = 1.0;
                this.decay = 0.02;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.life})`;
                ctx.fill();
            }
        }

        // Loop de animación
        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].life <= 0) { particles.splice(i, 1); i--; }
            }
            requestAnimationFrame(animate);
        }
        animate();

        // Hover Effects (Magnet Targets)
        const addHoverEffects = () => {
            const targets = document.querySelectorAll('.magnet-target, a, button, input, textarea, .project-visual');
            targets.forEach(target => {
                target.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                target.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });
        };
        addHoverEffects();
    }
}

// Ejecutar en navegación de Astro
document.addEventListener('astro:page-load', initCursor);