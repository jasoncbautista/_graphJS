
var mockData = {
    players: [
        {name: "Kobe", value: 89}
    ,   {name: "Michael", value: 189}
    ,   {name: "Magic", value: 100}
    ]
}

var drawPlayer = function(player) {
    // Getting our template:
    var templateString = $("#playerBubble").html();

    console.log(player);
    console.log(templateString);
    var playerCardEl = _.template(templateString)(player)

    return $(playerCardEl);

};

$(document).ready(function() {
    var players = mockData.players;

    _.each(players, function(player) {
        var playerHTML = drawPlayer(player);
        $('body').append(playerHTML);
    });

});


