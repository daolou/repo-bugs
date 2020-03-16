export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        // 注意service-woker的缓存问题
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
          alert('yes')
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
