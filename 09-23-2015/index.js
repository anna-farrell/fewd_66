
    /**
     * Javascript/jQuery Exercises: selectlecting Things In The DOM!
     * Answer the following questions.
     */

    /**
     * Question 1:
     * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
     */

     //click button 1
     //select all paragraphs
     // change the color to blue

     function turnBlue () {
        $('p').css('color', 'blue');
     }
        $('#button1').on('click', turnBlue);

    /**
     * Question 2:
     * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
     */

    //  function sayMyname () {
    // $('h2').html('Anna Farrell');
    //  }
    //  $('#button1').on('click', sayMyname);

   
    $('#button1').on('click', function() {
         $('h2').html("anna");
    })

    /**
     * Question 3:
     * When button 1 is clicked, select the ordered list item that has the class "falseFact".
     * Using jQuery change the content to read "True Fact".
     */

     function trueFact () {
        $('.falseFact').html('True Fact');
     }
        $('#button1').on('click', trueFact)

    /**
     * Question 4:
     * When button 2 is clicked, change the background color of the whole page to "pink"
     */

     function changePink () {
        $('body').css("background-color", "pink");
     }
        $('#button2').on('click', changePink)

    /**
     * Question 5:
     * When button 2 is clicked, change the color of all h2's to "green"
     */

     function changeGreen () {
        $('.h2').css("color", "green")
     }
        $('#button2').on('click', changeGreen)
    /**
     * Question 6:
     * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
     */
     function blockQuotes () {
        $("blockquote").html("<span> noquote </span>")
     }
        $('#button2').on('click', blockQuotes)

    /**
     * Question 7:
     * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
     */

     function jQueryNinja () {
        $("h1").html("jQuery Ninja")
     }
        $('#button2').on('click', jQueryNinja)

    /**
     * Question 8:
     * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
     * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
     */

    /**
     * Question 9:
     * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
     * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
     */

     function fontColor () {
        $('p').css({
            'color':'blue',
            'font-family':'Georgia',
        })
     }
        $('#button3').on('click',fontColor)

    <!-- End Scripts -->