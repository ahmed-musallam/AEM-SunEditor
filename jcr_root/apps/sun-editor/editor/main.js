(function() {
  $(document).on("dialog-ready", function() {
    var SUN = SUN || {};
    SUN.suneditor = SUNEDITOR.create((document.getElementById('suneditor') || 'suneditor'),{
      buttonList: [
        ['undo', 'redo'],
        ['fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['removeFormat'],
        ['fontColor', 'hiliteColor'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'table'],
        ['link'],
        ['fullScreen', 'showBlocks', 'codeView'],
    ]
    });
    SUN.suneditor.onChange = function (contents) { 
      console.log('change! ' + new Date())
      SUN.suneditor.save(); // save on change, always.
    }
  });
})();