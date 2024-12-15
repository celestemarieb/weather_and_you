# R1 Description 

## Purpose 

The purpose of this application ("Weather `&` You") is to remind folks to enjoy lovely weather when it visits and while it lasts.

### Idea

The application suggests activities based on the weather in the user's location.

## Functionality / Features 

### MVP Features 

The application suggests whether the user should stay inside or go outside based on the weather in their location. 

### Planned Functionality

Forecast: A weather forecast is shown to the user for the current day

The application accesses information about the weather in the user's location from the following API:
https://open-meteo.com/en/docs/bom-api

Activity Suggestions: A suggestion is provided to the user based on the weather in their location and its suitability for an activity listed in the database (e.g. have a picnic on a sunny day, watch a horror movie on a misty day)

"To Do" List Task Suggestions: A task from a user's own to-do list is suggested based on the weather (e.g. wash the car on a sunny day, read that book on a rainy day)

## Target Audience 

Folks who open their devices before they open their windows.

## Technical Stack 

Frontend: React
Backend: Node.js with Express.js
Database: MongoDB

# R2 Dataflow Diagram 

[dataflow diagram](/Users/celestebird/weather_and_you/images/dataflowdiagram.drawio.png)

# R3 Application Architecture Diagram 


# R4 User Stories 

MVP 

when I provide my location, I receive a suggestion 

[https://github.com/celestemarieb/weather_and_you/issues/8]

Acceptance Criteria 

- the suggestion provided is appropriate for the weather in my location 

- the suggestion provided is either to remain indoors or consider going outdoors 

- the current weather forecast for the location is shown (in celsius)

V2

when I provide my location, I receive several suggestions 

[https://github.com/celestemarieb/weather_and_you/issues/9]

Acceptance Criteria 

- the suggestions provided are appropriate for the weather in my location 

- the suggestions provided are activities which can take place either indoors or outdoors, not both 

- at least one suggestion will be provided 

- the current weather forecast for the location is shown (in celsius)


I am able to create my own suggestions

[https://github.com/celestemarieb/weather_and_you/issues/10]

Acceptance Criteria 

- the suggestions added to the database are associated with appropriate weather parameters (i.e wash the cat is a suggestion appropriate for a sunny day above 25 degrees)


# R5 Wireframes 

Wireframes created in Figma and accessible here : [https://www.figma.com/design/Hs8UI6geTjW6s9WJRpSG0S/T3-Application?node-id=0-1&t=AU2rEmsJRhi4QeFa-1]

Mobile

![Mobile Wireframe](images/MobileWireframe.png)

Desktop 

![Desktop Wireframe](images/DesktopWireframes.png)

# R6 Project Management 

Github Projects has been used to document task definition, delegation and progress. 

The Github Project can be viewed here: [https://github.com/users/celestemarieb/projects/8]

![Project Management](images/ProjectManagement.png)

# Resources 

Coolors - for colour palette