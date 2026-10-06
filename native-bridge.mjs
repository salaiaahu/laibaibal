import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';

if (Capacitor.isNativePlatform()) {
    window.__laiBaibalShare = options => Share.share(options);
}

if (Capacitor.getPlatform() === 'android') {
    window.__laiBaibalExitApp = () => {
        void App.exitApp().catch(error => {
            console.error('Unable to exit Lai Baibal.', error);
        });
    };
    App.addListener('backButton', () => {
        window.history.back();
    }).catch(error => {
        console.error('Unable to register the native back-button handler.', error);
    });
}
