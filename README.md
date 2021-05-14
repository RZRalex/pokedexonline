This is a Coding Dojo project by Alex Cheong


This machine used:
Javascript
Bootstrap 4.0
jQuery 3.6
pokeapi.co
Ajax

Notes:
- Learned how to use arrow function notation in this project. A bit fun but I will need to learn to combine it better with jQuery. 
- Promises are an interesting tool to really help out with quantaties of data from an Ajax call.

- Pokemon #259 Marshtomp is giving back an error in its API call. This causes the Gen III Hoenn region list to not populate the inital set. You can still call the next or previous groups, but anything that is, or contains Pokemon #259 will not show results.
- There is a small issue that sometimes the search functionality will not work as scripted. The search bar and button should not attempt to refresh or change the entire page as a 'preventDefault' action is scripted. Their main function is to clear cards and insert the specified pokecard. 

- The Show all button has no connection and function, please do not try to make it work. It is meant as a joke I do not want to lose connection to the api.

- Added a link to the git repo



        Please have fun with looking up your Pokemon!