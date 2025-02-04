lottie.loadAnimation({
    container: document.getElementById('whatsapp-icon'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'JSON/left_whatsapp.json'
  });

  document.getElementById('whatsapp-icon').addEventListener('click', function() {
    const phoneNumber = '+919304187853';
    const message = 'Hello Shekhar';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });