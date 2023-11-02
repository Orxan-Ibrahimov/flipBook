$(document).ready(function () {
    let count = 0;
    $(".next-btn").each( function (indexInArray, valueOfElement) { 
        let element = this;
        $(element).click(function(e) {
            e.preventDefault();
            $(element).parent().parent().css({
                "transform": "rotateY(-180deg)",
                "z-index": indexInArray                
            });
        });
    });

    $(".back-btn").each( function (indexInArray, valueOfElement) { 
        let element = this;
        $(element).click(function(e) {
            console.log(indexInArray);
            e.preventDefault();
            $(element).parent().parent().css({
                "transform": "rotateY(0deg)",
                "z-index": count                
            });
            count++;
        });
    });
    $()
//   $(".next-btn").click(function (e,index) {
//     e.preventDefault();
//     $(this).parent().parent().css({
//       transform: "rotateY(-180deg)"     
//     });
//     console.log($(e));
//   });
//   $(".back-btn").click(function (e) {
//     e.preventDefault();
//     $(this).parent().parent().css({
//         transform: "rotateY(0deg)"
//       });
//   });
});
