window.addEventListener("load", function(event) {
  console.log('contentScript.js load success');
  console.log('event:', event);
  localStorage.setItem('stackoverflow', window.location.href);
});
