---
id: Troubleshooting
title: Getting Troubleshooting
hide_title: "true"
sidebar_label: Troubleshooting
keywords: 
 - phonein
 - phonein intercom
 - mobile app
 - smart keys
 - smart intercom system
---

## Secondary provisioning method:

If the Primary provisioning method doesn’t work for you for some reason, please follow this guide to provision your Phonein device.

1. Download the app called ESP SoftAP Prov!

    ![Espressif provisioning app](/img/prov_app.jpg)
2. Switch provisioning modes on your Phonein by holding the wifi button on your Phonein device for 10 seconds!
    *   The LED should be off now, with 2 blinks every 10 seconds.
3. Press and hold the wifi button for 5 seconds!
    *   The LED should be on now, with 2 “negative blinks” every 10 seconds. This means that your Phonein is ready to be provisioned.
4. Start the ESP SoftAP Prov app.
5. Follow the steps in the app
    *   When it asks for a QR code, press “I don’t have a QR code”
        ![I don't have a QR code](/img/prov_qr.jpg)

    *   When it first asks you to connect to your device, the SSID of your Phonein device should look similar to Phonein_123456.

        ![image](/img/prov_ap.jpg)
    *   When it asks for the proof of possession PIN, use the default “abcd1234”!

        ![Pop pin](/img/prov_pin.jpg)
6. When the provisioning succeeds, the LED will turn off.

    ![Provisioning done](/img/prov_done.jpg)

Your device is now ready to be used!

## Push Notifications

We saw, that the push notifications don't always arrive on a locked screen. We're working on it, but in the meantime, check these links, to make sure, your phone settings don't block the notifications:
 - https://stackoverflow.com/questions/19459824/android-push-notifications-not-being-received-when-app-closed
 - https://innov8tiv.com/how-to-stop-my-android-from-killing-app-in-the-background/amp/
 - https://www.theverge.com/platform/amp/2019/11/26/20983697/android-lock-screen-notifications-app-manage-ambient-mode
