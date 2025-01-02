# Get it Done
## By Jacen Green

## Summary
Get it Done (GiD) is a free proof-of-concept productivity app designed for individuals who want to a tool to help assist manage a personal project or for small-scale collaborations which could benefit from task delegation and tracking without the need for immediate communication. The app is designed to be simpler and easier-to-use than it's competition while giving a slick user experience that encourages productivity with it's use of colours, animations and general design aesthetic - it's fun to use!

A live link to the deployed app can be visited [here](https://tipple-and-tail-7dca6c4d30d7.herokuapp.com/).

## Process

**Problem Statement**
> You have seen a gap in the market for a productivity app which does not focus entirely on function, but rather bridges the gap between a simple task manager app and a more complicated project manager app that offers a potentially overwhelming experience for new collaborators and individuals who want to improve their productivity and planning.

💠 **Design**
<details>
 <summary> Wireframes</summary>
 
 ### Low fidelity wireframing -> Balsamiq
 Low fidelity wireframes were created using Balsamiq to touch upon all aspects of the app's deisgn requirements.
 <br>
 <br>
 <br>
 <br>

 **Home Page: Intro splash screen**
 ![image](https://github.com/user-attachments/assets/f87c3632-65ee-47b6-b900-865d0749d827)
 The initial thought process was to create a stylistic and clean looking home 'splash' screen, not dissimilar to a game loading screen - the 
 goal being to immediately engage the user and hook their attention by inducing a sense of wonder.
 <br>
 <br>
 Blue arrows indicate animation directions; The Page will start with the site logo loaded, which will split into to halves and reveal the 
 name of the site, before continuing it's animation by highlighting and revealing directive text to motivate the user. Afterwards the logo 
 and text will transition off the screen into the login screen.
 <br>
 <br>
 The app would mostly remain consistent from desktop to tablet screens, and have layout changes for mobile devices - in this case the edges 
 of the logo would dissapear off the edge of the screen after splitting.
 <br>
 <br>
 <br>
 <br>

 **Login screen (home page)**
 ![image](https://github.com/user-attachments/assets/b8abeac1-eb97-48b7-b7f3-8a100d1ed534)
 [The login screen which the home screen 'rests' on after the completed animation] A simple login screen with minimal elements focuses the 
 user on their only real next step, since a login is required to use the site.
 <br>
 <br>
 If a user is already logged in or has an existing login token which has not expired, then the animations would play out before transitioning 
 to the Epics page. If a new account needs to be registered then the login screen will transition to a similar register screen after clicking 
 the button.
 <br>
 <br>
 <br>
 <br>

 **Epics page (Get Started)**
 ![image](https://github.com/user-attachments/assets/6c139a08-b133-4319-9db5-0499c49bfe23)
 If no Epics have yet been created then the user would be shown the above page. Clicking on [get started] will continue to the create Epics 
 page where information can be added and tasks can be created.
 <br>
 <br>
 <br>
 <br>

 **Epics page (display panel)**
 ![image](https://github.com/user-attachments/assets/b36c0ced-92ac-40f2-b053-d2b3b1490695)
 If data exists for epics on the database then the Epics card panel will display with some summary information as well as the chosen image 
 for the Epic. Users would be able to scroll through more cards if the maximum page display for cards is exceeded. From here Epics can be 
 selected to be redirected to the Tasks page, or by clicking an edit icon the Epic View page will be shown where CRUD functionality can be 
 actioned provided superuser access is granted.
 <br>
 <br>
 On mobile devices this would display in a list format instead to save space.
 <br>
 <br>
 <br>
 <br>
 
 **Tasks page (display panel)**
 ![image](https://github.com/user-attachments/assets/278dc298-01c3-4464-a4ee-71ea78332012)
 The task version of the Epics page, showing once an Epic has been selected. Here Task summary information is shown and tasks can be selected 
 to either be viewed in detail or, given appropriate access, updated or deleted after confirmation from the superuser.
 <br>
 <br>
 <br>
 <br>

 **Epic/Task View page**
 ![image](https://github.com/user-attachments/assets/d5752993-dec8-469f-bf9e-91efa599bc0f)
 This view page is where users can carry out CRUD actions or view a given card in further detail.
 <br>
 <br>
 <br>
 <br>

 **Profile page**
 ![image](https://github.com/user-attachments/assets/9f703d87-ce30-44a4-9ba8-686ef3465dfe)
 For a small amount of user customisation, a profile page will also exist. Here users can add personal information about themselves and add a 
 profile image/avatar that other collaborators will see as assignees on Tasks and Epics. The page would also show some statistics, for 
 example how many Tasks have been assigned to them. Additionally, a Profile List page would also be added so that users can view all other 
 collaborators involved with the project.

</details>

## Themes
![image](https://github.com/user-attachments/assets/a8605fd8-ce9c-41a1-9c29-61c54621fd54)
<br>
The blue colour palette used above is used to set the overally theme for the app. During research into theming, blue was highlighted as the most common colour for general productivity and focus. As a result the various shades are used to add accents and detaiils to titles, buttons and various other interactable elements - allowing differentiation in a simplistic yet stylistic design that further pushes user engagement.
<br>
<br>
The colour pallet was taken from a website called VENNGAGE: https://venngage.com/blog/blue-color-palettes/
<br>
<br>
With regards to the general CSS styling of the app, Bootsrap React was used to degree - although for a truly custom feeling design most of the CSS was custom made for this project. Many fonts had been looked at with the use of googlefonts, however ultimately it was decided that the default React font fit the design aesthetic perfectly; sans-serif, circular curves to the text that was simple and serious enough to enhance the app's overall design focus while resembling the custom logo.

## Custom Logo
![image](https://github.com/user-attachments/assets/fac1b3f3-8542-4a9f-9167-87846bcac54f)


💠 **Development**

User Stories:
<details>
 <summary>🔵 See User Stories (User) 🔍</summary>
 
- [US01] 🔵 As a user, I want to quickly log in,<br>
  so that I can immediately carry on where I left off.
  
- [US02] 🔵 As a user, I want to create tasks for a given project,<br>
  so that I can plan it out.
  
- [US03] 🔵 As a user, I want to catagorise my tasks,<br>
  so that I prioritise more important work.
  
- [US04] 🔵 As a user, I want to assign fellow collaborators to certain tasks,<br>
  so that I can delegate and complete a project more efficiently.
  
- [US05] 🔵 As a user, I want to mark a given task as complete,<br>
  so that I can track the overall progress of my project.
  
- [US06] 🔵 As a user, I want to see and leave comments on a given task,<br>
  so that I can concisely communicate with my collaborators.
  
- [US07] 🔵 As a user, I want filter tasks,<br>
  so I can see clearly who is working on what or which tasks require more attention.
  
- [US08] 🔵 As a user, I want to set deadlines for tasks,<br>
  so that I can efficiently manage my workload.
  
- [US09] 🔵 As a user, I want to create a basic profile,<br>
  so other collaborators can learn a bit about me and what I do.
  
- [US10] 🔵 As a user, I want be able to edit tasks after creation,<br>
  so that I can make necessary changes without starting again.
  
</details>

MOSCOW model in use for user stories.
![image](https://github.com/Viridi-Machina/tipple-and-tail/assets/146846939/847130a5-90e0-4ef6-b197-13da0c67ece6)
Following agile methodology a great deal of time was spent setting up the project kanban and other various boards where the project could be visualised.
Each user story was given 1-4 acceptance criteria and each given story point scores as well as their own respective tasks

![image](https://github.com/Viridi-Machina/tipple-and-tail/assets/146846939/00a298ee-bb29-40b7-8315-21a441dcd28a)

![image](https://github.com/Viridi-Machina/tipple-and-tail/assets/146846939/2939992a-139a-426e-9f46-405e4319df20)


💠 **Data Models**
<details>
 <summary> See detail</summary>
The data models created for this project are displayed in the image below:<br>
<br>
 
![image](https://github.com/Viridi-Machina/tipple-and-tail/assets/146846939/32bd5dc3-416c-47c0-a5be-0e69152fd14d)

<br>

The data models can be divided into 3 main apps to separate functionality:<br>
🔷 **User App**: This app handles user accounts as well as their enquiries and comments made to event posts.<br>
🔹 `User` - This model represents any user account, containing their name, email adress, mobile number, bookings and account status.<br>
🔹 `Enquiry` - This model represents enquiries made by the user, containing messages submitted to the site admin.<br>
🔹 `Comment` - This model represents comments made by the user on posted events, requiring approval by an admin.<br>
<br>
After discussing with my mentor it would become apparent that creating a custom user model was massively overcomplicating things, and a default user model was then used.

🟣 **About App**: This app handles the about and event models, both handled by the site admin.<br>
🔺 `About` - This model represents an about page, filled out and updated byu the site admin.<br>
🔺 `Event` - This model represents an events page, a psuedo blog-post view which displays events that can link to bookings.<br>
<br>

🔶 **Booking App**: This app handles the booking process; filtering available tables, timeslots and booking packages.<br>
🔸`Booking` - This model represents the core booking process, storing all associated fields.<br>
🔸`Table` - This model stores a small number of tables with unique table numbers and capacity which can be updated by an admin.<br>
🔸`TimeSlot` - This model represents the chosen time slot to be applied to the booking and table.<br>
🔸`TableSlot` - This model represents the specific tables with a chosen TimeSlot and TableSlot.<br>
🔸`Package` - This model represents additional extras for booking customization, which are also used to tag bookings.<br>
<br>
After speaking with my mentor the booking model was also overcomplicated, and in need of large changes to the model which had already been migrated, whilst removing
some unneccesary models such as TimeSlot and TableSlot and compressing them into the one Table model.


</details>

## Features
**CRUD Functionality**
- Users can create, edit and delete their created bookings from the booking dashboard.
- Admins can access all user's bookings for the purpose of updating or deleting.
- Users do not have access to other user's bookings.

**Authentication & Authorisation**

**Future Feature Implementation**
- Completion of the Event model, linked to a event detail view which also provides user interactions through leaving comments on events.
- Completion of the Enquiry form on the home page - which had to be cut from development - as the main booking system took priority and
  turned out to be rather complicated to get a grasp of.
- Menu feature in about section as well as opening times being displayed for users.
- Links from the events page to set the date automatically in the booking page when following the link.
- Footer with contact information and socials.
- Increased detail with unsuccessful booking - no tables available at this time (avoiding double bookings - offer an alternative time slot.
- Improve responsiveness for smaller devices.

## Bugs
Double clicking the create booking button before the first response is completed results in a duplicate booking.

## Manual Testing

<details>
    <summary>Navbar :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/566cb972-aecc-4b80-8988-6c55432bfce6)
</details>

<details>
    <summary>Homepage :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/93e8322f-f4d2-46ba-953f-100982543064)
</details>

<details>
    <summary>Events Page :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/561d8b48-bbbe-40ca-a3e6-ddcbd4d2765b)
</details>

<details>
    <summary>Register / Log In / Log Out :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/2ab2ad58-8354-43b3-84fb-56334d3d22f4)
</details>

<details>
    <summary>Create Booking Page :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/0af3c36e-43fb-4af6-b182-264da21d53ec)
</details>

<details>
    <summary>Booking Dashboard :mag:</summary>
    
   ![image](https://github.com/user-attachments/assets/68466ffc-00b9-4b53-8f4e-3f5eb3a93401)
</details>

**Lighthouse**
Dev Tools lighthouse tool shows 99/100 for overall performance.
![image](https://github.com/user-attachments/assets/3647919d-e0b3-4719-b1df-1bdc6f15ac0c)


**Responsiveness**
- This particular project was created mainly for desktop and tablets for business use as a way to manage and create bookings more-so than for users to create their own, albeit an option. 

**Code Validation**
W3C Markup Validation Service
JSHint
PEP8

All of the above validations were passed:
- All custom python files met pep8 criteria
- No javascript was used in the project
- All html source code checked for and found zero errors at this stage of deployment.

## Deployment
**Heroku Deployment**
<details>
 <summary>Method :purple_circle:</summary>

- From the dashboard you will be able to see your deployed projects. Click on `New`, then `Create new app`:
  <details>
    <summary>Dashboard :mag:</summary>
    
    ![image](https://github.com/Viridi-Machina/battleships/assets/146846939/d4468782-45f9-4c26-8369-1ddffee2b408)
  </details>

- Enter a unique `App name` and `Choose a region`, then click `Create app`.<br>
  Once created navigate to the `Settings` menu.
  <details>
    <summary>App Dashboard :mag:</summary>

    ![image](https://github.com/Viridi-Machina/battleships/assets/146846939/fde9249a-f073-46af-aeff-ddf4b7d6aacf)
  </details>
  
- Within the `Settings` menu, navigate to `Config Vars` (Also known as *Environment Variables*).<br>
  This is where private and sensitive data, such as credentials and keys, will be stored for the project.
  <details>
    <summary>App Settings :mag:</summary>

    ![image](https://github.com/Viridi-Machina/battleships/assets/146846939/078e131f-0ec6-483f-9031-7049385cdad8)
  </details>

- If the project is dependant on a creds.json file, then this is where the data will be stored.
- Click `Reveal Config Vars`. For initial deployment of a full-stack project:<br>
  `KEY`: 'DISABLE_COLLECTSTATIC'. `VALUE` '1'<br>
  This will prevent Heroku from uploading static files to the build.<br>
  Later on, once the project has been configured with a local static file directory, this KEY/VALUE pair can be removed.
- Note that any other secret keys such as links to the prject's database will be added as the project develops.<br>
  The image below shows an example of the `config vars` panel used in a previous project.
  <details>
    <summary>Config Vars :mag:</summary>
    
    ![image](https://github.com/Viridi-Machina/battleships/assets/146846939/0721287b-f32f-4b37-be16-ddcf1cfeb1c2)
  </details>

- A final component required for successful deployment is the use of a `Procfile`:
    - Heroku will read this file to determine how to start the server.
    - Within the Procfile a python package called *gunicorn* is referenced as a production-ready webserver for Heroku to use.
    - After installing gunicorn and adding it to the `requirements.txt` file, the following line of code needs to be added to
      the Procfile `web: gunicorn my_project.wsgi`.
    - Note that a blank line after the above code may be either required or need to be removed for Heroku to read it successfully.

### Connect to GitHub and deploy:

- Navigate to the `Deploy` menu. For `Deployment method` select GitHub. Finally, you can manually deploy the project.
  <details>
    <summary>Deploy Menu :mag:</summary>

  ![image](https://github.com/Viridi-Machina/battleships/assets/146846939/9081df0b-d551-40f2-b9c1-f770b9d4a5fb)
  </details>

## Credits
- Mentor: Gareth McGirr -> booking view and form code heavily used and adapted for my own project.
- Other code snipets have been referrenced within the project files.
- All styling is completely my own, graphics and logos made via adobe flash and figma. Hero background image from adobe stock
