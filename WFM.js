// ==UserScript== 
// @name            Wykop - Fullscreen Mikro
// @description     Mikroblog na całą szerokość ekranu.
// @author          Patryk "Linux__Shines" N oraz P0lip.
// @version         1.0.0.0
// @include         http://www.wykop.pl/tag/*
// @include         http://www.wykop.pl/mikroblog/*
// @include         http://www.wykop.pl/wpis/*
// @include         http://www.wykop.pl/moj/*
// @include         http://www.wykop.pl/ludzie/*
// @grant           none
// @license         BSD
// ==/UserScript==

var vis             = "visible";
var invis           = "invisible";
var title           = "Przełącz belkę";
var action          = "click";
var bar_title       = "ChangeBar";
var click_type      = "a";
var wrap_size       = "4px";
var optional        = "href = ''";

var main            = $('<li><' + click_type /* + optional + */ + ' id=\'' + bar_title + '\' title=\'' + title + '\'>' + 
                        "<svg xmlns='http://www.w3.org/2000/svg' width = '22' height = '12'>" +
                        "<g transform = 'scale(0.13, 0.134)'>" +
                        "<rect id='svg_1' ry='5' rx='5' height='25' width='140' y='5' x='5' stroke-width='2' stroke='#000000' fill='#ffffff'/>" +
                        "<rect id='svg_2' ry='5' rx='5' height='25' width='140' y='35' x='5' stroke-width='2' stroke='#000000' fill='#ffffff'/>" +
                        "<rect id='svg_3' ry='5' rx='5' height='25' width='140' y='65' x='5' stroke-width='2' stroke='#000000' fill='#ffffff'/>" +
                        "<rect id='svg_5' ry='5' rx='5' height='25' width='25' y='5' x='145' stroke-width='2' stroke='#000000' fill='#ffffff'/>" +
                        "<rect id='svg_6' ry='5' rx='5' height='25' width='25' y='35' x='145' stroke-width='2' stroke='#000000' fill='#ffffff'/>" +
                        "<rect id='svg_7' ry='5' rx='5' height='25' width='25' y='65' x='145' stroke-width='2' stroke='#000000' fill='#ffffff'/> " +
                        "</g>" +
                        "</svg>" + 
                    "</" + click_type + '></li>').insertBefore($('#openNaturalSearch').parent());

var bar             = $(".grid-right");
var grid            = $(".grid-main");
var wrap            = grid.parent();

var steering        = {
    Show: function() {
        bar.show();
        grid.css("width", "auto");
        wrap.css("padding-right", wrap_size);
        localStorage.BarStatus = vis;
    },
    Hide: function() {
        bar.hide();
        grid.css("width", "100%");
        wrap.css("padding-right", 0);
        localStorage.BarStatus = invis;
    }
};
localStorage.BarStatus = localStorage.BarStatus || vis;

if(localStorage.BarStatus == invis) {
    steering.Hide();
}

main.on(action, function() {
    localStorage.BarStatus == vis? steering.Hide(): steering.Show();
});
