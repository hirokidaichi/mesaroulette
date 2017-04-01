var unselect = function(array) {
    return array.filter(function(r) {
        return !r.selected;
    });

};

var pick = function(array) {
    var unselected = unselect(array);
    var len = unselected.length;
    var rand = Math.floor(Math.random() * len);
    return unselected[rand];
};

var left = function(array) {
    return unselect(array).length;
};
$(function() {
    var start = $("#start");
    var stop = $("#stop");
    var count = $("#count-num");
    stop.prop("disabled", true);
    var option = {
        speed: 14,
        duration: 20,
        stopImageNumber: null,
        stopCallback: function(e) {
            setTimeout(function() {
                e.addClass("soldout");
                setTimeout(function() {
                    e.addClass("animated jello");
                }, 400);
                count.text(left(result));
                start.removeClass("animated pulse");
                stop.removeClass("animated pulse");
                start.prop("disabled", false);
            }, 100);
        },
        slowDownCallback: function() {
            console.log("slowDown");
        }
    };
    // #e63803
    var result = $(".roulette-slot").map(function(i) {
        return {
            $elem: $(this),
            itemDesc: $(this).find(".item-desc").text(),
            id: i,
            selected: $(this).hasClass("soldout"),
            src: $(this).find("img")[0].src,
        };
    }).toArray();
    count.text(left(result));
    var r = $('div.roulette').roulette(option);
    $(window).keydown(function(e) {
        if (e.keyCode == 13) {
            start.trigger("click");
        }
        if (e.keyCode == 32) {
            stop.trigger("click");

        }
    });
    // START!
    $('#start').click(function() {
        if (start.prop("disabled")) {
            return;
        }
        var picked = pick(result);
        var num = picked.id;
        var desc = picked.itemDesc;
        picked.selected = true;
        console.log(desc);
        start.prop("disabled", true);
        stop.prop("disabled", false);
        start.addClass("animated pulse");
        setTimeout(function() {
            r.roulette('start', num);
        }, 300);

    });

    // STOP!
    $('#stop').click(function() {
        if (stop.prop("disabled")) {
            return;
        }
        stop.prop("disabled", true);
        stop.addClass("animated pulse");
        $('div.roulette').roulette('stop');
    });
});
