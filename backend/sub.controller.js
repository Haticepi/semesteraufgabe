import webpush from 'web-push';

const publicVapidKey = 'BMy2kPtmaUJYALeHBRnV-a6y_bxAit1fCs32Hq7ecVD66HVJzeLAZjQ2b5FMvSje03RnrxsNnvNwPtv1EEdrhDg\n';
const privateVapidKey = 'pE7Y8iaz6xvO0r2kamc5v0ypcWHTExdN-AfsgUwf57E\n';

export const SubscriptionController = {

    subscribe: (req, res) => {
        const subscription = req.body;
        console.log('subscription', subscription);
        res.status(201).json({ message: 'subscription received'});

        webpush.setVapidDetails('mailto:hatice-pinar@outlook.de', publicVapidKey, privateVapidKey);
    },

    sendNotification: () => {
        webpush.setVapidDetails('mailto:hatice-pinar@outlook.de', publicVapidKey, privateVapidKey);
        const payload = JSON.stringify({
            title: 'New Push Notification',
            content: 'New data in database!'
        });
        webpush.sendNotification(pushSubscription,payload)
            .catch(err => console.error(err));
        console.log('push notification sent');
        // res.status(201).json({ message: 'push notification sent'});
    }
}
