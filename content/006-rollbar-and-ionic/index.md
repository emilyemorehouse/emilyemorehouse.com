---
title: Integrating Rollbar with Ionic
cover: 'https://images.unsplash.com/photo-1504648942819-979a70e29d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3427&q=80'
date: '2016-12-09'
description: The long and short of integrating Rollbar with Ionic to catch native and Javascript errors.
slug: 'blog/006-rollbar-and-ionic'
category: 'tutorial'
tags:
  - ionic
  - rollbar
---

No software is error-free. One of the most frustrating things for me is when a user comes to me and says "I have this error but I don't know how I caused it and I can't reproduce it, but here's a screenshot of a blank screen proving that it happened!". This is entirely not the user's fault and I'm always grateful when I know that errors exist in the wild that I haven't caught via testing. It's disconcerting when I know that somewhere out in the digital ether, a console error was lost into deep iPhone space; a signal lost that can never be retrieved. Well. Not anymore.

[Rollbar](https://rollbar.com) is a product that allows developers to create "full-stack error monitoring for all apps in any language". Essentially, Rolllbar catches all error and crashes that occur in any app (web, mobile, or otherwise) and logs the error along with any available stack trace information. It notifies you via email when an error occurs based on your notification thresholds and also has some awesome inteagrations with products that I use on a daily basis, namely Slack and Pivotal Tracker. Slack notifications are killer for organizations that have unified their team communications and ops monitoring into that stream, but my favorite is the Tracker integration. You can configure exactly when to create, reopen or resolve a story based on how many times an error is thrown (I have mine set to the 1st occurance of every error, but that may be daunting in larger projects that are prone to errors).

Enough about why Rollbar is awesome (that should be clear by now), and onto how to use it with Ionic. Since Ionic is a hybrid framework, there are three areas that we need to integrate Rollbar in order to cover all of our possible places that errors can be thrown from: native iOS code, native Android code, and our javascript code. Luckily, there are two plugins that make our lives incredibly easy: a [Cordova plugin to catch native errors](https://github.com/emilyemorehouse/cordova-plugins-rollbar) and an [AngularJS plugin to catch our Ionic application errors](https://github.com/tandibar/ng-rollbar).

The first (and easiest) to set up is the Cordova plugin, so let's knock that out first. I'm assuming that you've already created an account and project on Rollbar's site but if you haven't, go do that first.

---

## Catching Native Errors:

Simply install the plugin::

    cordova plugin add https://github.com/emilyemorehouse/cordova-plugins-rollbar.git --variable ROLLBAR_ACCESS_TOKEN="<ROLLBAR_ACCESS_TOKEN>" --variable ROLLBAR_ENVIRONMENT="<ROLLBAR_ENVIRONMENT>"

And add the following code, probably in your run function and definitely after the device is ready.
To use the Ionic platform ready trigger::

    $ionicPlatform.ready(function() {
    	window.cordova.plugins.Rollbar.init();
    });

Or to use the Cordova device ready listener::

    document.addEventListener('deviceready', function () {
    	window.cordova.plugins.Rollbar.init();
    });

Either works fine, but I'm a fan of the former.

I'm not a huge fan of using variables through command line arguments for a variety of reasons (security of course, but also that running 'ionic platform reset' can completely mess up your project setup as variables are not always persisted in your configuration files), so be aware of the caveats with this approach.

And that's it! All native crashes and errors will now be reported. It should be noted that native crashes are typically not caused by your application, but are super helpful if you're developing or using a plugin that could have issues.

---

## Catching Javascript errors:

To catch Javascript errors (the most important ones and ones that you're usually the most responsible for), you have a bit more setup and a lot more control over when and how these errors are caught.

First off, let's get the dependencies installed::

    bower install ng-rollbar --save

And included (I have bower setup so it installs to `lib`, so adjust as necessary::

    <script type="text/javascript" src="lib/ng-rollbar/ng-rollbar.min.js"></script>

Remember to include the module::

    angular
    .module('myApp', [
    	'ionic',
    	'tandibar/ng-rollbar'
    ]);

Initialization must occur in your config function, though I find that it would make more sense to keep it in my run function as that's where literally every other initialization occurs. But the earlier the initialization is called, the better since any exceptions that occur prior to initialization won't be caught and configuration happens before running, so I suppose I'll let this one slide. Place this in your config function::

    myApp.config(['RollbarProvider', function(RollbarProvider) {
    	RollbarProvider.init({
    		accessToken: '<YOUR-APPLICATION-TOKEN>',
    		captureUncaught: true,
    		payload: {
    			environment: '<ROLLBAR_ENVIRONMENT>'
    		}
    	});
    }]);

And that's it! Any error that's thrown will now be caught. This does not, however, work automatically with "console.error"s. If you'd like to manually throw a Rollbar exception, you can use any of the following severities as long as you inject 'Rollbar'::

    // Rollbar severities
    Rollbar.critical("some critical error");
    Rollbar.error("some error");
    Rollbar.warning("some warning");
    Rollbar.info("some info");
    Rollbar.debug("some debug message");

Another trick I like to use is to simply override the `console.\*` functions and replace them with the Rollbar functions. Toss this into your run function if you want to convert all console logs into Rollbar messages, though I only use the error override in production and all others in development::

    console.error = Rollbar.error;
    console.warn = Rollbar.warning;
    console.log = Rollbar.info;		// Duplicated use of Rollbar.info for console.log since an equivalent does not exist
    console.info = Rollbar.info;
    console.debug = Rollbar.debug;
