<h3>michalkrol2 / https://pawelzygmuntkrol.github.io/michalkrol2/index.html</h3>

Second attempt to create a page for a contemporary artist Michał Król. 

Smarter and having some (not much) real life experience after creating first version of the page I decided to create it once again to try some new things, correct mistakes 
made in the first version and check how some optimalisation techinques work. The differences in design was not big yet some useful features like showing if painting is avaliable or not on the home page was added.

<b>Main changes comparing to previous version (and my thoughts on that):</b>

- <b>SASS (SCSS)</b> - great tool for making code more DRY, especially if the project needs Flexbox a lot / developer loves Flexbox to much because things like mixins can save 
a lot of effort. What is more, variables are great as well but I think they show their real power when ie. themes come to play (could not do this this time). And last but not 
least, nesting FTW!

- <b>BEM</b> - sometimes, in the beginning, I got mixed feelings when I used it because I was not sure if I was naming the classes right but after a while it was like my second 
nature. Great tool but I think the biggest power of BEM is that it makes it easier for developer to get into existing projects because it shows right away how to understand 
HTML / CSS better. 

- <b>ES6</b> - set of features from ES6 helps write code faster and cleaner.

- <b>Using element.getElementsByClassName() / element.querySelector()</b> - In the first project I used element.getElementsById() which was not good but I was aware of that. 
Somehow it was easiest for me in the beginning and after tons of tutorials about operations on arrays etc. the real feel of JS in action was too strong and I would rather write 
the whole page again (which I did) than sacrifice time for looking for other things that work better. 

- <b>Using target.addEventListener(type, listener) and separating it from HTML</b> - In the first version of the page I used inline on click triggers which was not good because it broke the rule of separation of concerns but it worked and the situation was as I described in the previous point. In this project it was fixed the way it should be done.

- <b>Reset CSS</b> - after a while having to write rules for margin or box-sizing in every CSS file is not fun so now the first thing to do is adding reset/normalize file.

- <b>Adding JS files at the bottom of the page</b> - simple thing but it helps rendering.

- <b>Crossbrowser tests while coding (excluding IE)</b> - it is not fun when you have written a lot of code, you check your project on different browser and it not look the same 
/ work at all. It is not fun to write extra code for different browsers either so then you have motivation to deal with it right away ie. using Autoprefixer. In case of iOS I 
used https://www.lambdatest.com/ (trial version).

- <b>Lazy loading</b> - when your page consists mostly of images it is quite good tool to make it load a little bit faster.

- <b>Smooth Scroll</b> - I saw this tool somewhere in the Internet and I wanted to try it and the conclusion is that it should not be used everywehre because it could make 
user experience worse, especially ie. on subpages with a lot of scrolling.

- <b>Static Site Boilerplate (https://staticsiteboilerplate.com/)</b> - I wanted to make few things to make my workflow better and optimise my code to work faster and I found 
the tool that fitted my needs just fine. Most important things Static Site Boilerplate did for me was:

  - <i>It runs local development server</i> so I did not have to worry about extensions like Live Server.
  - <i>It takes care of Concatenation & Minification</i> which was a problem when I made tests of how fast the first version of the page was.
  - <i>It takes care of Sass, Less & Autoprefixing</i> so I did not have to compile SASS to CSS and what is more important and I mentioned it before when I wrote about
  crossbrowser testing, I did not have to write extra code for different browsers.
  - <i>It has hot reload</i> so I could write code without having to save to check the changes in my page.
  - <i>It has build in image optimalisation</i> even though I used already optmised images used in first version (I used https://imagecompressor.com/).
  - <i>It is build using Webpack</i> and I found it at the time when I wanted to learn something about Gulp.
  
After all it was a great experience because even though I did this page once again the feeling was like I was doing it the first time (btw. I tried to not copy the code but write it again and many times I did things completly different). Multitude of new tools, need to learn how to use them, configurate them (at first I was quite afraid of this) were sometimes a test of will. After all there was a build which is also quite a challenge but it all worked out! The 404 redirection does not work because GitHub pages does not support .htaccess files.
