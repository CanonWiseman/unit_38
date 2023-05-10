### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A JWT is a json Web Token and it is used to store information behind an encoded key.

- What is the signature portion of the JWT?  What does it do?

The signature is what locks the information away from any entity without the correct key.

- If a JWT is intercepted, can the attacker see what's inside the payload?

The attacker will not be able to see whats in the payload without the secret key.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

You can start by creating a token for valid users and storing it in local storage. After, anytime you want to authenticate a user you can use middleware in order to verify the token return the user back to the inteded route. If not valid the middleware will throw an error and return it to the user.

- Compare and contrast unit, integration and end-to-end tests.

unit testing is good for individual functions on in a larger program. They are used to test the results that will come back to the user when called. On a larger scale You will use integration testing. This will test the applications functions in how they work together. As an example this would be testing how a route connects and interacts with a database. On an even larger scale is end to end tests. This type of testing is use to test how a user will pilot your website from the moment they open it to the moment they close it. An example would be testing how a user finds a form, fills out said form and then where they go after that form is filled. This type of testing is not used as frequently but is an all encompasing test that will wrap all smaller tests into one large test

- What is a mock? What are some things you would mock?

A mock is a forced response from a certain function. This would be used to test something like a random number generator where if you tested it without a mock, the results would not be consistent due to the randomness that is inately baked into the function.

- What is continuous integration?

Continuous integration is done on the source controlled side of programming and deployment. With a CI system, tests are written for areas and new code has to pass through those tests and succeed before the code is deployed into production

- What is an environment variable and what are they used for?

Environment variables are variables that are set globally outside of the code. These can be used for things like secret keys as well as telling the app if the code is in testing or production.

- What is TDD? What are some benefits and drawbacks?

TDD is test driven development. The idea is that the tests are written first and the production code is written after to pass those tests. The benefits are that cleaner code will be written becasue the direction and final product is already set. The downsides is that the tests will take a while to write especially if the plan is not thought out well enough. Also another downside is that code direction can change and the developers will lose the time they took to write out the tests.

- What is the value of using JSONSchema for validation?

The value comes in code clarity and time. Without schema validation JSON validation would be a mess full of if else statments trying to catch every case of invalid json comes through.

- What are some ways to decide which code to test?

TEST everything!! But test code that has a lot of varying elements more. Also test code that takes in user input more because the user is the most wild variable in coding.

- What does `RETURNING` do in SQL? When would you use it?

  RETURNING returns specified values back when called. This will be used when you do something other than a select and want information that was sent in back.

- What are some differences between Web Sockets and HTTP?

  Web sockets are connections that stay up to give a real time request response cycle and HTTP connection will close after the response is recieved.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I personally prefer express because I like JS and understand JS code more. Also I like node more and the whole process of setting up enviornments and installing packages. I also like working with the same language across front and back end (atleast for now as trying to remember syntax from 2 languages is hard).