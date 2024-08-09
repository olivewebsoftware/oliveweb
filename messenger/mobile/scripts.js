function downloadAPK() {
    window.location.href = "https://olivewebsoftware.com/messenger/Messenger.apk";
}

function openKaiStore() {
    window.open("https://www.kaiostech.com/store/apps/?bundle_id=com.olivewebsoftware.olivewebmessenger", "_blank");
}

// Check if the user is on a KaiOS device
function isKaiOS() {
    return navigator.userAgent.includes('KaiOS');
}

// Automatically redirect KaiOS users to the KaiStore
if (isKaiOS()) {
    openKaiStore();
}
