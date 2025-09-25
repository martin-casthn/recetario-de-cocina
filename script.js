document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if(toggle) toggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            if(toggle) toggle.checked = false;
        }
    };

    // Al cargar la página, aplicar el tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Cuando se hace clic en el interruptor
    if(toggle) {
        toggle.addEventListener('change', () => {
            let newTheme = 'light';
            if (toggle.checked) {
                newTheme = 'dark';
            }
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
