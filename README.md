# angular-course-assignments

#Assignment 1:- Creating two basic components and using them.

#Assignment 2:- (Data binding)
  Add a Input field which updates a property ('username') via Two-Way-Binding
  Output the username property via String Interpolation (in a paragraph below the input)
  Add a button which may only be clicked if the username is NOT an empty string
  Upon clicking the button, the username should be reset to an empty string

#Assignment 3:- (Directives)
  Add A button which says 'Display Details'
  Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')
  Toggle the displaying of that paragraph with the button created in the first step
  Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)
  Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)

#Assignment 4:- (Communicating between components with @Input and @Output and changing pages with routing)
  Create three new components: GameControl, Odd and Even
  The GameControl Component should have buttons to start and stop the game
  When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())
  The event should be listenable from outside the component
  When stopping the game, no more events should get emitted (clearInterval(ref))
  A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
  Simply output Odd - NUMBER or Even - NUMBER in the two components
  Style the element (e.g. paragraph) holding your output text differently in both components
#NOTE:- Also added lazy loading routing in this assignment

#Assignment 5:- (Using template driven forms)
  Add a Form with the following Inputs (and Validators)
  1) Mail address (should not be empty and should be an email address)
  2) A Dropdown which allows the user to select from three different Subscriptions ("Basic", "Advanced", "Pro")
    Set "Advanced" as Default
  3) A Password field (should not be empty)
  4) A Submit Button

  Display a warning message if the Form is invalid AND was touched. Display a warning message below each input if it's invalid.

  Upon submitting the form, you should simply print the Value of the Form to the Console.
  Optionally, display it in your template.

#Assignment 6:- (Using reactive form with dynamic form validations)
  Add a Form with the following Inputs (and Validators)
  1) Mail address (should not be empty and should be an email address)
  2) A Dropdown which allows the user to select from three different Subscriptions ("Basic", "Advanced", "Pro")
    Set "Advanced" as Default
  3) A Password field (should not be empty)
  4) A Submit Button

  Display a warning message if the Form is invalid AND was touched. Display a warning message below each input if it's invalid.

  Upon submitting the form, you should simply print the Value of the Form to the Console.
  Optionally, display it in your template.  

#Assignment 7:- (Create custom pipe and use it)  
  Created a custom basic reverse string pipe and used it in the reactive form