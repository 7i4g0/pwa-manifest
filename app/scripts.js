if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/app/sw.js')
    .then(serviceWorker => {
      console.log('Service Worker registered: ' + serviceWorker);
    })
    .catch(error => {
      console.log('Error registering the Service Worker: ' + error);
    });
}