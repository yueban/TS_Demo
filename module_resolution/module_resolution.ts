import * as $ from "jquery";
console.log($.fn.jquery);

onload = () => {
    $("#p1").get(0).innerHTML = "jQuery";
};