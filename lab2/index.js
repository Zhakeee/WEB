const inputWrappers = document.querySelectorAll('.input-wrapper');

inputWrappers.forEach((inputWrapper) => {
    const input = inputWrapper.querySelector('input');
    const placeholder = inputWrapper.querySelector('.placeholder');
    
    input.addEventListener('input', function() {
        const text = input.value;
        if(text.length > 0) {
            placeholder.classList.add('active');
        } else {
            placeholder.classList.remove('active');
        }
    })
});