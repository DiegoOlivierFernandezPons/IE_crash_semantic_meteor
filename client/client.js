values = new ReactiveVar([1, 2])

$(function () {
  $('.ui.dropdown').dropdown()
})

Template.body.helpers({
  values: function () {
    return values.get()
  }
})
