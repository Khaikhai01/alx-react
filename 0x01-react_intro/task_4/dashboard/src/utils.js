export function getFullYear() {
    const currentData = new Date();
    return currentData.getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}