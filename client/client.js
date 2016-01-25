days = new ReactiveVar([0, 2])

Template.a_dropdown.onRendered(function () {
  var dropdown = this.$('.ui.dropdown')
  dropdown.dropdown()
})

Template.body.helpers({
  h: function () {
    var dates = days.get()
    var rows = []
    for (var i = dates[0]; i < dates[1]; i++) {
      var row = Math.round(i / 2) // Two numbers per line
      var value = Math.round(100 * Math.random())
      if (!rows[row]) rows[row] = []
      rows[row].push(value)
    }
    return {rows: rows}
  }
})
