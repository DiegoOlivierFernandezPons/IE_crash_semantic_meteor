show_bug = function () { values.set([1]) }

// helper for running show_bug() when pressing 'b' on the keyboard
$(function ($) {
  $(document.body).on('keypress', function (e) {
    var keyPressed = String.fromCharCode(e.charCode)
    if (keyPressed === "b") {
      console.log('show_bug()')
      show_bug()
    }
  })
})
