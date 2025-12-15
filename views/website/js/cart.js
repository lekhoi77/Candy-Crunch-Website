
    const promoInput = document.querySelector('.promo-input input');
    const promoWrapper = document.querySelector('.promo-input');

    promoInput.addEventListener('input', () => {
        promoWrapper.classList.toggle('has-value', promoInput.value.trim() !== '');
    });

