
## Abstract
Technical Test for **Angular Senior level** , corrected by the NUWE enterprise. With a final mark of **2750/3000** and 1º Place (of 3 projects) and very good feedback and sensations about the project. (Review for Nuwe at the end of the readme)




## Description
In this challenge, you are asked to develop the payment gateway shown above.
In addition, it is also requested to perform a validation to see that the card format has the correct format and make sure the component is fully testable.
If developed in with react it is fully mandatory to use Typescript as it is required in order to fulfill the position requirements.

![Objetive payment gateway](payment_gateway.JPG)


## Project question 
At the end of the project readme, include a brief explanation of the project's architecture and how would you structure the code Also, if it was part of a bigger project with views, internationalization, tests, and shared components how would this project be structured and where would the reusable component be placed.


### Question response:

The project architecture is the main component "checkout-form.component", its parent component "parent.component" which only receive the data and print it in the console, and "simple-card-page.component" which is a simple CSS component used to make the 'card' style.

If it was part of a bigger project with views, I see 3 possible approaches to connect the independent and reusable component "checkout-form":

1. Connecting the component to its parents and manage the data in the parent. The checkout-form component could be connected in any place using @Input @Output annotations to send the data to the parent components.

2. If the component needs to be connected without relation with its parents, the inputs and outputs should be replaced for a Service who connects the component to the others which have the logic to manage the data.

3. If the application needed it for any reason, it is also possible to use a behavior subject in the component, which sends the data and subscriptions which receive and manage the data.

In this development, I used the first approach. The component "checkout-form" is connected to the parent component "parent" which is a simple component that receive the data and just print the information received in a console.log() and show a success toast every time the "checkout-form" component submit the data.

For internationalization in Angular, I have used the package "ngx-translate" which works really well, and I already have experience with it.

Regarding the Tests, I choose Karma Jasmine for testing every functionality, especially the inputs, the validations and the submit of data. 

### Test results:
![Test results](test_results.JPG)


### Firebase deploy
https://angular-pruebatecnica-alex-m-p.web.app/




# Review

## Feedback from NUWE: 
Both the solution and the description of how you'd scale the component make a lot of sense.
It is not necessary at the moment to complicate the structure of the project but in order to make it more re-usable and the app complexity is bigger, we should add a new service layout and probably a repository for all the state and business logic.
The solution works good and I think it is intelligent to rely some parts on the 3rd party libraries, always making sure they won't compromise the project. The only thing I'd change is where you place the validators, in order to be more re-usable as I am sure they'd be used for more components and probably they should have util or infrastructure shared folder, but for the current project, it is okay.
I'd also add some basic commands or info on the README about how to get started with the project (just some recommendations) And lastly, there are minor accessibility and styling issues that are not really important and the.
Finally, good project, well commented and tested (I'd advise connecting some kind of lint and Sonarqube or similar to double-check the test coverage, but the functionalities are fully covered) and if you have any doubts do not hesitate to contact us.

## Mark

![mark](https://user-images.githubusercontent.com/33956661/157881456-e3c8d188-be18-4e3f-bd7d-e1475688d0f5.PNG)


## Metrics

![Metrics](https://user-images.githubusercontent.com/33956661/157881493-ece5877d-e220-4c9c-999c-24666c0bcd88.PNG)
