# Purfect - Adopt a Pet

Purfect is a web application that brings a Tinder-like feel to adopting pets. This can be for any user or organisation to list animals for adoption. This idea came about from wanting a centralised platform for all adoption offers, rather than only on specific sites. We want to increase reach for those whom are looking for a new companion and looking for a new home.

<br/>
This is the third project (group) for General Assembly Software Engineering Immersive Course. We were tasked to create a CRUD system using everything we had learnt in the last 9 weeks about front and back end web development. We were given about a week to create a functioning application complete with Models (at least 3) and site deployment (firebase).

https://project-2-5825e.web.app/
<br/>

### Collaborators:

-   [JJ](https://github.com/oldbettie)
-   [Dhaya](https://github.com/Dhaya94)
-   [Mandy](https://github.com/123mandy)
-   [Kristabel](https://github.com/kristabel-wong)

## Logins

Normal users:

<pre>
Email: jane@ga.co 
Password: chicken

Email: johnsmith@ga.co 
Password: chicken
</pre>

## Features

1. Sign in/Sign out
   ![screen shots](gif/signin_resize.gif)
2. Create users profile

    - Add a profile picture or a default icon will be provided
    - Edit your personal details
    - Image upload

    <br/>
    Pets:
    <br/>

    - Create your pets link
    - View and edit the details of your pets
    - View your liked Pets
    - Choose someone to adopt your pet
    - Send Adoption Request
    - Change the person selected for adoption

    <br/>

3. Home Page/List View:

![screen shots](gif/swiping.gif)

-   Displays the pets in a tinder style profile cards
-   Swipe right on the pets you would consider adopting
-   Swipe left on the pets which you don't want to know more about
-   List view offers an alternative view to view all the pets
-   User can like the pets on the list view
-   User can click on the pets to learn more about them

4. Messages:

![screen shots](gif/message.gif)

-   User to User messaging
-   Instant messaging

5. Create Pets/edit

![screen shots](gif/drag%26drop.gif)

-   upload multiple images
-   Create pet info

6. Pet view

![screen shots](gif/petshow_resize.gif)

-   Use carousel sliders to show multiple images

7. Adopt view

![screen shots](gif/adopt_resize.gif)

-   Need to read the doc from Petrescue before you choose to adopt a pet

## Bugs

1. It takes long to upload images to firebase storage, need to add a loading animation to make it more clearly for users to see what is happening.
2. Max of 10 likes (patched may 10th 2022 can now like as many as you like)
3. Need to wait for the image upload to be successful before updating profiles
4. Unsuccessful login and sign up attempt causes the respective page to be unresponsive. A reload is required to continue loggin in or signing up successfully.

## To Do

1. Button to unmatch/unlike
2. Remove adoption request
3. Need to change the style after clicking like button

## Updates

-   may 10th 2022 -

1. added further filters for pet swipes on both the swipe and list page
2. fixed some minor console bugs
3. fixed limit on pet likes now unlimited
