//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
  
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.
  

  // Create a function to listen for clicks on the "login" button.
  $('.login').on('click', function() {
    // When a user clicks the "login" button, hide the login form elements on the page.
    $('#login-form').hide();
    // Fill the user's first and last name into `div.user-info`.
    $('.user-fullname').text(userInfo.firstName + " " + userInfo.lastName);
    // show users name after login
    $('.user-info').show();
});
  
  // create onclick function so user can be taken back to navbar login when user logs out.
  $('.logout').on('click', function(){
    // remove user-info when user logs out
    $('.user-info').css("display", "none");
    // display login-in form when after user logs out and user-info isnt displayed anymore
    $('#login-form').show();
  });

  
  
    //Create a function to listen for clicks on all the "View Details"  buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the proper part of the screen.
    $('.view-details').on('click', function(event){
      console.log(event);
      var targetElement = event.target;
    // When user clicks a "view details" button, find the parent of that element.
      var container = targetElement.parentElement.parentElement;   
    // Within that parent, find all the elements that have the class `details`.
    $(container).find('.details').each(function(index, el){
    // Toggle visibility of all the elements within that parent with the class `details`.
      if ($(el).is(':visible')){
        $(el).fadeOut();
        targetElement.innerText = "View Details"
      } 
    // Change the text of the "view details" button to read "hide details" so the user understands they can hide the text again.
      else {
        $(el).fadeIn();
        targetElement.innerText = "Hide Details"
      }
    });
  });

  

    // Create a function that listens for clicks on the voting buttons and looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    
    //Set up an event listener on the buttons with the `vote` class.
  $('.vote').on('click', function(event){
  var targetElement = event.target;
    // When a button is clicked, look at the `data-vote` attribute to determine what the user is voting for ("great" or "greatest").
  var voteChoice = $(targetElement).data('vote');
    if(voteChoice == 'great'){
      // Increment the counter for whichever vote talley is affected.
      voteCounts.great++
    } else {                           // var voteChoice = $(targetElement).data('vote);
      // Increment the counter for whichever vote talley is affected.
      voteCounts.greatest++
    }
    // total count for everytime a button is pressed
     voteCounts.total++;
    
    // Determine the respective percentages (out of 100) for each progress bar.
  var greatPercent = voteCounts.great/voteCounts.total*100;
    // Modify the `width` attribute on each progress bar to set the updated percentage.
  $('.great-progress').css('width', greatPercent + '%');
    // Determine the respective percentages (out of 100) for each progress bar.
  var greatestPercent = voteCounts.greatest/voteCounts.total*100;
    // Modify the `width` attribute on each progress bar to set the updated percentage.
  $('.greatest-progress').css('width', greatestPercent + '%');
  });

  
});
