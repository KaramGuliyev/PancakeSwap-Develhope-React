function removeScripts() {
  // Select the head element
  var head = document.getElementsByTagName("head")[0];

  // Select all script elements within the head
  var scripts = head.getElementsByTagName("script");

  // Remove each script element
  for (var i = scripts.length - 1; i >= 0; i--) {
    console.log(scripts[i]);
    head.removeChild(scripts[i]);
  }
}

function loadScript(src) {
  removeScripts();
  setTimeout(() => {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
    return script;
  }, 500);
}

export { loadScript };
