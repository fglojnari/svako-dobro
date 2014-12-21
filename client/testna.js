  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.calendar.helpers({
    days: function () {
      var array = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja" ];
      return array;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });