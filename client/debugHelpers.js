show_bug = function () { days.set([0, 1]) }

// helper for running show_bug() when pressing 'b' on the keyboard
$(function ($) {
  $(document.body).on('keypress', function (e) {
    if (String.fromCharCode(e.charCode) === "b") {
      console.log('show_bug()')
      show_bug()
    }
  })
})
