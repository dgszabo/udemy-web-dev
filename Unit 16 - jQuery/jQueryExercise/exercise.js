// Select all divs and give them a purple background
$('div').css('background', 'purple')

// Select the divs with class "highlight" and make them 200px wide
$('div + .highlight').css('width', '200px')

// Select the div with id "third" and give it a orange border
$('div + #third').css('border', 'orange solid 1px')

// Bonus: Select the first div only and change its font color to pin
$('div:first').css('color', 'pink')