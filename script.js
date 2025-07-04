function handleSubmit(event) 
{
    event.preventDefault();
    const email = event.target.querySelector('.email-input').value;
    
    const button = event.target.querySelector('.cta-button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => 
    {
        button.textContent = '✓ Cadastrado';
        button.style.background = '#10b981';
        
        setTimeout(() => 
        {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            event.target.reset();
        }, 2000);
    }, 1000);
}

function handleSubmitREAL(event) 
{
    event.preventDefault();

    const email = event.target.querySelector('.email-input').value;
    const button = event.target.querySelector('.cta-button');
    const originalText = button.textContent;

    button.textContent = 'Enviando...';
    button.disabled = true;

    emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', { email: email })
    .then(() => 
    {
        button.textContent = '✓ Cadastrado';
        button.style.background = '#10b981';

        setTimeout(() => 
        {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            event.target.reset();
        }, 1000);
    })
    .catch((error) => 
    {
        console.error('Erro ao enviar:', error);
        button.textContent = 'Erro';
        button.style.background = '#ef4444';

        setTimeout(() => 
        {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 1500);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => 
{
    anchor.addEventListener('click', function (e) 
    {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => 
{
    entries.forEach(entry => 
    {
        if (entry.isIntersecting) 
        {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .capture-box').forEach(el => { observer.observe(el); });
