function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
  return script;
}

export { loadScript };
