/* ~mw.dockmenu.js
 *
 * @verson : 1.0
 * @contact : via mickesweb.se
 * @author :  Mikael Andersson <mikael@mickesweb.se>
 * @credTo: Henrik Håkansson
 * @copyright (c) 2011, Mikael Andersson. All Rights Reserved.  
 * @license : http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Last Updated: 2011-12-15
 * INFO: Function for menu that mimics mac dock menu using images.
 * NOTE: Need jquery, test with jquery.1.7
*/

$(document).ready(function() {
    // Set image standard size
    var minHight = 62;
    // Set maximum values
    var maxHight = 100;
    var maxRadius = 140;
    // Add mousemove event.
    $(document).on("mousemove", function(event) {
        // Get the menu objects
        var menuObjects = $("#imagemenu").children();
        // Go through each item
        for(var i in menuObjects) {
            if(i<=(menuObjects.length-1)) {
                var menuObject = $(menuObjects[i]).children();
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
                var menuHight = minHight + ((maxHight-minHight)-(((maxHight-minHight)/maxRadius) * radius));
                // Change the menu object font-size
                $(menuObject).css({"height" : menuHight+"px"});
            }
        }  
    });
});
