console.log("helloworld");


var ITEM_LIST = [{
        title: ""
    }, {},

];
$(function() {
    // initialize!
    var option = {
        speed: 10,
        duration: 10,
        rollCount: 10,
        stopImageNumber: Math.floor(Math.random() * 10),
    };
    // #e63803
    var r = $('div.roulette').roulette(option);

    // START!
    $('#start').click(function() {
        r.roulette('start');
    });
    $(".roulette-slot").click(function() {
        //$(this).addClass("soldout");
        $(this).find("img")[0].src += "?text=hello"
            //r = $("div.roulette").roulette(option);
    });
    // STOP!
    $('#stop').click(function() {
        $('div.roulette').roulette('stop');
    });
});
