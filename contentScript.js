window.addEventListener("load", function(event) {
  console.log('contentScript.js load success');
  console.log('event:', event);
  let {host, href} = window.location;
  let body = document.body.innerText;
  let d = {};
  let v = {timestamp: Date.now()};
  v[href] = body;
  d[host] = v;
  chrome.storage.sync.set(
    d,
    function() {
      console.log(host, 'add successfully')
    })
});
