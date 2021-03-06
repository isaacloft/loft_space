// JavaScript Document
$(document).ready(function(e) {

    var faviconnumber = 1;

    function favicon() {
        favicon = favicon == 1 ? 2 : 1;
        $('.favicon').attr('href', 'favicon' + favicon + ".png");
    }
    console.clear();
    var commandlist = [ /*Can be populated with various methods*/
        ["help", "Show commands"],
        ["list", "List all pages on the website"],
        ["nav &lt;location&gt;", "Navigate to location, i.e. nav about"],
        ["show &lt;animated banners by clients&gt;", "Currently available clients: bupa, holden."],
        // ["/gl", "Generate a url for the current page - [^http://koya.io/](This doesn't work in an iframe, try it at *Koya.io*) outputs something like [^http://koya.io/connect](*koya.io/connect*)"],
        ["clear", "Clear the console"]
        // ["/login &lt;username&gt; &lt;password&gt;", "Login to your account - This is not set up and when implemeneted it'll be '/login username' then request password without printing into the cmd prompt"],
        // ["/upload", "Upload file, must be logged in."]
    ];
    var previouscommands = [];
    var currentcommand = 0;
    var pages = [ /*Can be populated with various methods*/
        ["index", "Welcome to Loft.",
            "<div class='ascii'>   | |       / __ \   |  ____| |__   __|</div>",
            "<div class='ascii'>   | |      | |  | |  | |__      | |   </div>",
            "<div class='ascii'>   | |      | |  | |  |  __|     | |   </div>",
            "<div class='ascii'>   | |____  | |__| |  | |        | |   </div>",
            "<div class='ascii'>   |______|  \____/    |_|        |_|   </div>"
        ],


        ["about", "About Loft",
            "I'm big fan of command line because of my earlier networking engineering experience.",
            "The current Loft is still in starting phase to be a real command line operated website",
            "I will continue updating new features, such as linux directory structure.",
            "-----------------------------------------",



            "The command line sandbox is taken from <a class='homepage' href='https://codepen.io/z-/pen/eJNgWO' target='_blank'>[Koya.IO]</a>", "Loft is modified based on that sandbox and added my own functionalities and color profile."
        ],
        ["connect", "Connect with Loft",
            "<a class='homepage' href='mailto:isaacloft0906@gmail.com'>[Email Isaac]</a>"
        ]
        // "[skype:finn.shackleton](Skype)",
        // "[^http://steamcommunity.com/id/bananabutterscotchmaplepancakes](Steam) < Always available",
        // "[^https://codepen.io/OfficialAntarctica](Codepen)",
        // "[^http://everybodyedits.com/profiles/bbmp](Everybody Edits)"]
    ];
    var pageindex = ["index", "about", "connect", ""];
    var clientindex = ["bupa", "holden"];

    var currentpage = "index";
    // var url = "http://koya.io/"
    /*
       Custom Text Syntax
       Links:      
          [URLPATH](NAME) - regular
          [^URLPATH](NAME) - open in new tab
          
       Styles:
          *TEXT* - bold text
          E! - Text is an error/notification
          A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
    */
    var index_directory = '<p id="pointer">~/loft/index/</p>';



    function init() {
        setInterval(time);
        // console.clear();
        console.log(new Date().getTime());


        log(index_directory, 'Welcome to the <a class="homepage" href="https://www.isaacguan.com" target="_blank">[Loft]</a>. All display banner portfolio will be coming soon');
        log(index_directory, "This site is currently in-use for displaying my most recent work, advertising digital banners.");
        log(index_directory, "You can type &nbsp<p style='color:yellow;'>help</p>&nbsp to view the basic commands navgating in this site");
        // urlvars();
        // log(directory, "For help say '/help'");
        setInterval(favicon, 500);
    }

    function urlvars() {
        var pagelocs = window.location.pathname.replace("/", "").split("/");
        var pageloc = pagelocs[0];
        console.log(pageloc);
        //alert();
        if (pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
                currentpage = pageloc;
            }
        }
        log(index_directory, "You are currently on page: *" + currentpage + "*");
        if (pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
                currentpage = pageloc;
                loadpage($.inArray(pageloc, pageindex));
            } else {
                //Un-note next line to show 404 errors with wrong urls
                //log("Client", "404 - The page '" + pageloc + "' does not exist. To "); 
            }
        }
        if (pageloc == "") {
            log("Client", "What would you like to access?");
        }
    }

    function getParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return "";
        } else {
            return results[1];
        }
    }

    function log_divider(directory) {
        console.log("!!!", directory);
        var theme_color = "";
        if (directory == "index") {
            theme_color = '#1666e5';
        } else if (directory == "about") {
            theme_color = '#f4cb42';

        } else if (directory == "connect") {
            theme_color = '#9ed17d';

        }
        var d = new Date();
        var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
        var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
        var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
        var colour = "whitet";
        var textcolour = "";
        var postcolour = "";

        $(".stream").append(

            '<div style="color:' + theme_color + '" class="la-pacman la-sm"><div></div><div></div><div></div><div></div><div></div><div></div></div>'
        );

    }

    function log(name, information) {
        var d = new Date();
        var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
        var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
        var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
        var colour = "whitet";
        var textcolour = "";
        var postcolour = "";

        switch (name[0]) {
            case "!":
                postcolour = " important";
                name = name.substr(1);
                break;
        }
        switch (name) {
            case index_directory:
                colour = "redt";
                break;
            case "Server":
                colour = "bluet";
                break;
            case "Client":
                colour = "bluet";
                break;
            case "User":
                colour = "greent";
                postcolour = " selft";
                break;
        }
        if (information[0] == "A" && information[1] == "!") {
            information = information.substr(2);
            information = information.replace(/ /g, '\u00A0');
        }
        if (information[0] == "E" && information[1] == "!") {
            information = information.substr(2);
            postcolour = " important";
        }

        while (information.indexOf("](") >= 0) { //URL parser

            var NAMEregExp = /\(([^)]+)\)/;
            var uname = NAMEregExp.exec(information)[1];

            var URLregExp = /\[([^)]+)\]/;
            var url = URLregExp.exec(information)[1];
            var newpage = false;
            if (url[0] == "^") {
                newpage = true;
                url = url.substr(1);
            }
            var start = information.indexOf("[");
            var end = information.indexOf(")");
            if (newpage) {
                information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
            } else {
                information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
            }
            //information = '<a href="' + url + '">' + uname + '</a>'; //working

        }
        var tobold = true;
        var boldnumber = 0;
        for (var i = 0; i < information.length; i++) {
            if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
                boldnumber++;
            }
        }
        while (information.indexOf("*") >= 0) { //Bold parser
            var pos = information.indexOf("*");
            information = information.replace("*", "");
            if (tobold) {
                information = information.splice(pos, 0, '<b>');
            } else {
                information = information.splice(pos, 0, '</b>');
            }
            tobold = !tobold;
            if (tobold && boldnumber <= 1) {
                break;
            }
            //information = '<a href="' + url + '">' + uname + '</a>'; //working
        }
        var tounderline = true;
        var underlinenumber = 0;
        for (var i = 0; i < information.length; i++) {
            if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
                underlinenumber++;
            }
        }
        while (information.indexOf("**") >= 0) { //Bold parser
            var pos = information.indexOf("**");
            information = information.replace("**", "");
            if (tounderline) {
                information = information.splice(pos, 0, '<u>');
            } else {
                information = information.splice(pos, 0, '</u>');
            }
            tounderline = !tounderline;
            if (tounderline && underlinenumber <= 1) {
                break;
            }
            //information = '<a href="' + url + '">' + uname + '</a>'; //working
        } /**/
        $(".stream").append('<div class="line">' +
            '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
            '<p class="name ' + colour + '">' + name + '</p>' +
            '<p class="information' + postcolour + '">' + information + '</p>' +
            '</div>');
        $('#edit').html("");
        $(document).scrollTop($(document).height() - $(window).height());
    }
    var timestring = "";

    function time() {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
        if (temptimestring != timestring) {
            timestring = temptimestring;
            $(".editline .time").text(timestring);
        }
    }

    var ctrldown = false;
    $(".editline .edit").keydown(function(e) {
        var text = $(".editline .edit").val();
        console.log(e.which);
        if (e.which == 13 && text !== "" && !ctrldown) {
            var commands = text.split(' ');
            var output = "";
            if (commands[0] == "help") {
                text = "/" + text;
            }
            $(".editline .edit").val("");
            log(index_directory, text);

            previouscommands[currentcommand] = text;
            currentcommand = previouscommands.length;
            $(".editline .edit").keydown(35);
            cmd(commands[0], text, commands);
            /*Add mod commands*/
            //modcmd(commands[0], text, commands);
            /*Add mod commands*/

        }
        if (e.which == 38) { //up
            if (currentcommand > 0) {
                currentcommand--;
                $(".editline .edit").val(previouscommands[currentcommand]);
            }
        }
        if (e.which == 40) { //down

            if (currentcommand < previouscommands.length) {
                currentcommand++;
                $(".editline .edit").val(previouscommands[currentcommand]);
            }
        }
    });

    function cmd(command, words, word) {
        switch (word[0]) {
            case "/help":
            case "help":
                for (var i = 0; i < commandlist.length; i++) {
                    output = commandlist[i][0] + " : " + commandlist[i][1];
                    //console.log(command[i][0]);
                    log(index_directory, output);
                }
                break;
            case "/gl":
                //window.location.href = "http://koya.io" + (currentpage == "landing" ? "" : "/" + currentpage);
                window.history.pushState(currentpage, 'InpagePage', (currentpage == "landing" ? "/" : "/" + currentpage));
                break;
            case "clear":
                $(".stream").text("");
                $(".banners").html("");
                $("#default_ascii").show();


                break;
            case "nav":
                if ($.inArray(word[1], pageindex) >= 0) {
                    currentpage = word[1];

                    var dir_class = currentpage + "_directory"
                    var current_directory = '<p id="pointer" class="' + dir_class + '">~/loft/' + currentpage + '/</p>';

                    log(current_directory, "You are now in " + currentpage);

                    loadpage($.inArray(word[1], pageindex), current_directory);
                } else {
                    log("", "'" + word[1] + "' does not exist.");
                }
                break;
            case "show":
                if ($.inArray(word[1], clientindex) >= 0) {
                    currentpage = word[1];

                    var dir_class = currentpage + "_directory"
                    var current_directory = '<p id="pointer" class="' + dir_class + '">~/loft/' + currentpage + '/</p>';

                    log(current_directory, "You are watching animated banners for " + currentpage, "You can drag the edge of the right canvas to resize");
                    log(current_directory, "Note: <u>You can drag the edge of the right canvas to resize<u>");
                    show_animated_banners(currentpage);

                    // loadpage($.inArray(word[1], clientindex), current_directory);
                } else {
                    log("", "'" + word[1] + "' has no animated banners to display");
                }
                break;
            case "list":
                $.each(pageindex, function(id, content) {
                    log(index_directory, "> " + content);
                });
                break;
            case "/login":
                if (word.length >= 3) {
                    log("Client", "Attempting to login to " + word[1] + " with " + Array(word[2].length + 1).join("â€¢"));
                    loginreturn = false;
                    //log("Client", "ER1");
                    setTimeout(loginemptyreturn, 20000);
                } else {
                    log("Client", "Not enough arguments to log in, you need a USERNAME and a PASSWORD.");
                }
                break;
            default:
                output = "Unrecognised command '" + word[0] + "'.";
                log(index_directory, output);
        }
    }



    function loadpage(i, directory) {

        log_divider(pages[i][0]);

        $.each(pages[i], function(id, content) {
            if (content != pageindex[i]) {
                log(directory, content);
                console.log(content);
            }
        });
        log_divider(pages[i][0]);



    }
    var loginreturn = false;

    function loginemptyreturn() {
        //log("Client", "ER2");
        if (!loginreturn) {
            log("Client", "E![LOGIN] No Return Recieved");
        }
    }
    String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };
    init();
});