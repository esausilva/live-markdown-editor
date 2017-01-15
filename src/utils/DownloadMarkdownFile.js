(function(window) {
  // Will check if there is already a function hooked to the window.onload event and will run that before this function
  function checkWindowOnload(func) {
    var oldOnLoad = window.onload;

    if (typeof window.onload !== 'function') {
      window.onload = func
    } else { 
      window.onload = function () {
        oldOnLoad();
        func();
      }
    }
  }

  checkWindowOnload(function() {
    const mdArea = document.querySelector('textarea');
    let mdFile = null;

    const makeMdFile = function(code) {
      const blob = new Blob([code], {type: 'text/plain'});

      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (mdFile !== null) {
        window.URL.revokeObjectURL(mdFile);
      }

      mdFile = window.URL.createObjectURL(blob);

      return mdFile;
    }

    function handleDownloadMdFile (e) {
      //e.keyCode === 77 is 'm'
      if (e.ctrlKey && e.keyCode === 77) {
        const blob = makeMdFile(mdArea.textContent);
        const link = document.createElement('a');
        const event = new MouseEvent('click');
        
        link.setAttribute('href', blob);
        link.setAttribute('download', 'README.md');
        link.dispatchEvent(event);
      }
    }

    window.addEventListener('keyup', handleDownloadMdFile);
  });
})(window);
