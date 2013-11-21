
var mockData = {
    players: [
        {name: "Kobe", value: 89}
    ,   {name: "Michael", value: 189}
    ,   {name: "Magic", value: 100}
    ]

}
$(document).ready(function() {
    var players = mockData.players;


    _.each(players, function(player) {
        console.log(player);
    });


});


