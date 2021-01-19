document.getElementById('promise-examples').addEventListener('change', function() {
  if (this.value) {
    import(`./examples/${this.value}.mjs`).then(example => {
      // Run example code
      example.default();

      // Print example code
      document.getElementById('example-code').innerHTML = example.default
        .toString()
        .match(/function[^{]+\{([\s\S]*)\}$/)[1]
        .replace('\r\n', '');
    });
  } else {
    document.getElementById('example-code').innerHTML = '';
  }
});
