# ABT - Ad Block Test
##Simple script to test if the browser is blocking ads.

```
[...]
<script>
// We inline abt.min.js rather than link to it so that it's harder for an Ad Blocker to whitelist 
// it. (don't worry it's short!)

// ^^^^ Paste contents of abt.min.js here ^^^^

ad_block_text(function(is_blocked){
 // Note this function may not run until some time later.
 if(is_blocked) {
  // if blocker detected, log a Google Analytics event
  var _gaq = _gaq || [];
  _gaq.push(['_trackEvent', 'AdTracking', 'AdBlockerDetected', 'ABT detected Ad Blocker in use']);
 }
});
</script>
</body>
</html>
```

See test/ directory for other usage examples and notes

Should work against any ad blocking plugin that subscribes to EasyList (or similar) and collapses ad elements.

Tested against:
 - AdBlock For Chrome and AdBlock Plus for Chrome
 - AdBlock Plus for Firefox


Script Goals:
 - Be able to gather general statistics about how many visitors are actively blocking ads via Google Analytics, Mixpanel, or other similar system.
 - Minimal performance impact on visitors, whether they're blocking ads or not. The current script does not make any network requests.
 - Be conservative. Better to miss some ad blockers (false negative) than to incorrectly flag some browsers as having an ad blocker (false positive).
 - Minimal prerequisites. Does not require JQuery. Does not require a particular ad serving platform or even any actual ads on the page.
