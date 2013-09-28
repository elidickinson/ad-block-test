# ABT - Ad Block Tester
##Simple script to test if the browser is blocking ads.

Introduction to project and interactive demo on my blog: http://esd.io/blog/detecting-adblock-javascript.html

See test/ directory for other usage examples.

Should work against any ad blocking plugin that subscribes to EasyList (or similar) and collapses ad elements.

Tested against:
 - AdBlock For Chrome and AdBlock Plus for Chrome
 - AdBlock Plus for Firefox


Script Goals:
 - Be able to gather general statistics about how many visitors are actively blocking ads via Google Analytics, Mixpanel, or other similar system.
 - Minimal performance impact on visitors, whether they're blocking ads or not. Script doesn't make any additional network requests.
 - Be conservative. Better to miss some ad blockers (false negative) than to incorrectly flag some browsers as having an ad blocker (false positive).
 - Minimal prerequisites. Does not require JQuery. Does not require a particular ad serving platform or even any actual ads on the page.
