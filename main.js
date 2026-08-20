document.addEventListener('DOMContentLoaded', () => {
    // Ação do botão "Preciso de Ajuda Agora"
    const helpBtn = document.getElementById('help-btn');

    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            alert(
                "Você não está sozinho(a)!\n\n" +
                "• CVV (Apoio Emocional): Ligue 188 (ligação gratuita)\n" +
                "• Jogadores Anônimos: www.jogadoresanonimos.com.br\n" +
                "• Procure apoio psicológico no CAPS ou na unidade de saúde mais próxima."
            );
        });
    }

    // Rolagem suave ao clicar nos links do menu e botão Hero
    const links = document.querySelectorAll('header nav a, .hero .btn-primary');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});