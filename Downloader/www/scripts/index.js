// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString("#333");
        }

        window.addEventListener('filePluginIsReady', function () {
            window.requestFileSystem(window.PERSISTANT, 0, function (fs) {
                fs.root.getFile('log.txt', { create: true, exclusive: true }, function (fileEntry) {
                    console.log('File creation successfull!')
                }, function (e) { console.log(e) })
            }, function (e) { console.log(e) });
        }, function (e) { console.log(e) })

        //fs.root.getFile('/sdcard/log.txt', { create: true }, function (fileEntry) {

        //    fileEntry.createWriter(function (fileWriter) {
        //        fileWriter.onwriteend = function (e) {
        //            alert('Write completed.');
        //        };

        //        fileWriter.onerror = function (e) {
        //            alert('Write failed: ' + e.toString());
        //        };

        //        var blob = new Blob(['Lorem Ipsum'], { type: 'text/plain' });
        //        fileWriter.write(blob);
        //    }, errorCallback);
        //}, errorCallback);

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function errorCallback(error) {
        alert("ERROR: " + error.code)
    };
})();