window.onload = function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for Android or KaiOS in user agent string
    if (/android/i.test(userAgent) || /kaios/i.test(userAgent)) {
        window.location.href = "mdownload.html";
    }
};
