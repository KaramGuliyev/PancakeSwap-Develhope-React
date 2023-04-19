function loadScript(src) {
  setTimeout(() => {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
    return script;
  }, 500);
}

export { loadScript };
