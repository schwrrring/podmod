declare const self: ServiceWorkerGlobalScope;

export class NotificationBridge {
    async showNotification(title: string, opts: NotificationOptions) {
        return self.registration.showNotification(title, opts);
    }
}

export const NotificationBridgeInstance = new NotificationBridge();
