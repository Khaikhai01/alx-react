import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
    const filteredId = notificationsData.filter(obj => { obj.author.id === userId
        return filteredId;
    });
}


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

export { normalizedData };