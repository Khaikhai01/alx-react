import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entry(
    "messages",
    {
        idAttribute: "guid"
    });
const notification = new schema.Entry("notifactions", {
    author: user,
    context: message
});

const normalizedData = normalize(notificationsData, [notification]);

export default function getAllNotificationsByUser(userId) {
    const userNotifications = normalizedData.entities.notifications;
    const resultArray = [];

    for (const notifactionId in userNotifications) {
        const notification = userNotifications[notifactionId];
        if (notification.author === userId) {
            resultArray.push(notification);
        }
    }
    return resultArray;
}

export { normalizedData };