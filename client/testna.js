  Template.calendar.helpers({
    days: function () {
      var days = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja" ];
      return days;
    }
  });
  Template.hours.helpers({
    hours: function () {
      var hours = _.range(8,21);
      hours=_.map(hours,function (value) {return value + ":00"})
      return hours;
    }
  });