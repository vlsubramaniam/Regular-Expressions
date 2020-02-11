//console.log("Here we are!");

var MYAPP = {
    win: this,
    page: 0,
    bullet: 0,
    image: 0,
    //navOrder: ["intro.html", "good_code.html"],
    //navOrder: ["title.html","page1.html","page1b.html"],
    //navOrder: ["intro.html", "why_learn.html","stack.html"],
    //navOrder: ["intro.html", "operator1.html", "operator2.html"],
    // navOrder: ["intro.html", "objects.html"],
    navOrder: ["intro.html", "first.html", "regexinfo.html"],
    bulletOrder: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13"],
    imageOrder: ["obj1.png", "obj2.png", "obj3.png", "image4.png", "image5.png", "image6.png", "image7.png"],
    setup: function() {
        //console.log("Setup Run");

        var moveSomething = function(e) {
            var loc = this.location.href,
                parts = loc.split("/"),
                curPage = parts[parts.length - 1];

            for (var i = 0;i < MYAPP.navOrder.length;i++) {
                if (curPage == MYAPP.navOrder[i]) {
                    MYAPP.page = i;
                }
            }
            switch(e.keyCode) {
                case 37:
                    // left key pressed
                    // console.log("Left key pressed.");
                    if (MYAPP.page > 0) {
                        MYAPP.page--;
                    }
                    this.location.assign(MYAPP.navOrder[MYAPP.page]);
                    break;
                case 38:
                    // up key pressed
                    // console.log("Up key pressed.");
                    break;
                case 39:
                    // right key pressed
                    // console.log("Right key pressed.");
                    if (MYAPP.page < MYAPP.navOrder.length - 1) {
                        MYAPP.page++;
                    }
                    this.location.assign(MYAPP.navOrder[MYAPP.page]);
                    break;
                case 40:
                    // down key pressed
                    // console.log("Down key pressed");
                    var doc = this.document;
                    if (MYAPP.bullet < MYAPP.bulletOrder.length) {
                        if (MYAPP.bullet > 0) {
                            var theBullet = doc.getElementById(MYAPP.bulletOrder[MYAPP.bullet]),
                                thePrevBullet = doc.getElementById(MYAPP.bulletOrder[MYAPP.bullet - 1]);

                            theBullet.style.visibility = "visible";
                            //thePrevBullet.style.color = "silver";
                            MYAPP.bullet++;
                        } else {
                            var theBullet = doc.getElementById(MYAPP.bulletOrder[MYAPP.bullet]),
                                theImage,
                                imgPath,
                                origImage = doc.getElementById("objimg");

                            theBullet.style.visibility = "visible";

                            if (theBullet.id === "b0") {
                                // console.log("It equals b0");
                                if (MYAPP.image > 5) {
                                    MYAPP.bullet++;
                                }
                                if (MYAPP.image > 0) {
                                    theImage = MYAPP.imageOrder[MYAPP.image];
                                    imgPath = "images/prototype/" + theImage;
                                    origImage.src = imgPath;
                                    if (MYAPP.image > 1) {
                                        origImage.style.width = "800px";
                                    } else if (MYAPP.image > 0) {
                                        origImage.style.width = "700px";
                                    }
                                }
                                MYAPP.image++;
                                // console.log(MYAPP.image);
                            } else {
                                MYAPP.bullet++;
                            }
                        }
                    }
                    break;  
            }   
        };

        window.addEventListener("keydown", moveSomething, false);
    }
};

document.addEventListener("DOMContentLoaded", MYAPP.setup, false);
 

/*$(document).ready(function() {
    $.getJSON("page1.json", function(data) {
        console.log(data);
    });


});*/

