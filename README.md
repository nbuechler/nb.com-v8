# Nathaniel Buechler's Online Portfolio --- LATEST
My new webpage live on http://www.nathanielbuechler.com. This project is the 8th iteration of my webpage. Displaying my 'hat' - or role - as a Multifacited Specialist, this project displays the qualities of a technician that masters many skills while being sometimes satisfactory at many more.

# History
The original project was made many years ago with Photoshop slices. If you're unfamiliar with that concept, it is when the web designer takes a photoshop file and slices it into HTML tables. While much different from the 1st iteration, the 8th iteration uses angular.js as a web framework to assist me.

# Goals
* The main goal is to display all of my accomplishments.
* The aim of this project is to showcase any projects and/or the activities I have done or am doing currently.
* This project is meant to show both breadth and depth, and therfore shows elements of my history that are less than perfect.
* It is meant to show a whole picture of who I am, but it also focuses the viewer by provided different roles.


# make sure to build first!
While in the root of the project, build the node dependencies.
```
npm install
```
Then, build the bower dependencies.
```
bower install
```

# run the app locally
If you have python installed, running a python server is how I did it (2016). You can also use any other server of your choice.
```
python -m SimpleHTTPServer
```
Now, go to _localhost:8000_ in your browser and the page will display.

# Fonts used for icons
Just as a note, the fonts used for the icons are arial and courier.

# Other notes:
* This project is made with angular.js (1 not 2) and has no back-end so that it can run in a very cost effective way.
* JSON objects within the application are used as the data, and it can eventually be made as a database and backend with an API where calls are made somewhere else (if needed).

# Features
Includes the following:
* Videos
* Pictures
* Articles
* Data Visualizations

# Lessons Learned
* Using a web framework eliminated some problems in creating repetitive code block. In version 8, I used angular.js (version 1) but I still haven't solved the problem of creating content in an easier way. Maybe I need to build a piece of software one day to fulfill the repetitive task of collecting and displaying information about everything someone does. 
* Having more skill in JavaScript, I found that I could make massive leaps above the previous version (in 2016). I even made this site responsive. I'm satisfied, but not thrilled, with the performance, and I think using a reactive framework like react.js would improve this further. I also should lower the image sizes of some of the assets.
* I discovered that using an IDE like Atom.io made developing this much easier than last time. Dreamweaver was nice for web designers, but large scale applications don't hold up - even with Dreamweaver's template functionality.
* Anyone can make a great user experience with a stylish user interface, even with a little bit of knowledge of d3.js, jQuery, etc. But, having even more experience, I was able to create a large scale application with a robust amount of content
* Static pages can build useful apps, but I should have used more JSON objects outside of the controllers to serialize data (in 2016). Moreover, if I can host a database on a server, I may even store data and make ASYNC calls for data.

# License
GPLv3
