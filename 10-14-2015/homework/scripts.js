/* WEATHER APP PSEUDO CODE
 *
 * Receive input data
 * Write function that does:
 *      Takes Temp in Celcius
 *      Multiplies the temp by 1.8 and adds 32
 *      (T(°F) = T(°C) × 1.8 + 32)
 * Create temperature variable for our new data and place it on the page
 *
 * Temperature variable
 * Use conditionals if/else to change background of page
*/

// Button click event to get data
$('button').on('click', americanize);
$('body').css('background-image', 'url("http://lorempixel.com/400/200')
// Function to Americanize the Celcius value
function americanize(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Saves input into a variable
    var number = $('input').val();

    // Run convertTemp function
    convertTemp(number);
}

// Function to convert our Temperature
function convertTemp(num) {
    var newTemp = num * 1.8 + 32;
    console.log(newTemp);
    updateHtmlTemp(newTemp);

    
 if (newTemp < 90) {
$('body').css('background-image', 'url("http://lorempixel.com/400/200')
} else if (newTemp < 90 && num >80 ) { 
$('body').css('background-color', 'yellow');
} else {
   $('body').css('background-color', 'red');
}
}
// Function update our HTML
function updateHtmlTemp(num) {
    $('.tempFahrenheit').html(num);
    $('input').val('');
}

switch (expression) {
    case expression:
        break:
    default:
}

