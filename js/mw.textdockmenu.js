/* ~mw.textdockmenu.js
 *
 * @verson : 1.0
 * @contact : via mickesweb.se
 * @author :  Mikael Andersson <mikael@mickesweb.se>
 * @credTo: Henrik Håkansson
 * @copyright (c) 2011, Mikael Andersson. All Rights Reserved.  
 * @license : http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Last Updated: 2011-12-15
 * INFO: Function for menu that mimics mac dock menu using text.
 * NOTE: Need jquery, test with jquery.1.7
*/

$(document).ready(function() {
    // Get the font-size for menu
    var startFontSize = parseFloat($("#menu").css("font-size"));
    // Set maximum values
    var maxFontSize = 40;
    var maxRadius = 140;

    // Add mousemove event.
    $(document).on("mousemove", function(event) {
        // Get the menu objects
        var menuObjects = $("#menu").children();
        // Go through each item
        for(var i in menuObjects) {
            if(i<=(menuObjects.length-1)) {
                var menuObject = menuObjects[i];
                // Get postition for menu object
                var position = $(menuObject).position();
                var menuXposition = position.left + ($(menuObject).width() / 2);
                var menuYposition = position.top + ($(menuObject).height() / 2);
                // Get position for mouse
                var mouseCoordsX = event.pageX;
                var mouseCoordsY = event.pageY;
                // Calculate how far the mouse is from the menu object
                var differensX = Math.abs(mouseCoordsX - menuXposition);
                var differensY = Math.abs(mouseCoordsY - menuYposition);
                var cathetus = differensX * differensX + differensY * differensY;
                var radius = Math.sqrt(cathetus);
                if(radius>=maxRadius) {
                    radius = maxRadius;
                }
                // Fix the menu font-size
                var menuFontSize = maxFontSize - (radius/(maxRadius/startFontSize));
                // Change the menu object font-size
                $(menuObject).css({"font-size" : menuFontSize});
            }
        }  
    });
    // Run if the mouse leaves the document and set font-size to the starting value with an animation effect.
    $(document).on("mouseleave", function(event) {
        var menuObjects = $("#menu").children();
        for(var i in menuObjects) {
            if(i<=(menuObjects.length-1)) {
                var menuObject = menuObjects[i];
                $(menuObject).animate({"font-size" : startFontSize});
            }
        }
    });
});
