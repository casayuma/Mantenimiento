importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCgq_mr3XN-CkF_j81LON4DB8MvShhul18",
  authDomain: "casa-yuma.firebaseapp.com",
  projectId: "casa-yuma",
  storageBucket: "casa-yuma.firebasestorage.app",
  messagingSenderId: "939297040370",
  appId: "1:939297040370:web:fee2bb729b487345022d6b"
});

const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'Casa Yuma', {
    body: body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'casa-yuma-notif',
    renotify: true,
  });
});
