#Simple reCaptcha Example    
A sample project on how to use reCaptcha in a Google Apps Script WebApp.  
  
####Setup  
1) Add Code.gs and index.html to a new project.  
2) Save and Publish the project. Launch the webapp.   
3) Open dev tools and open the elements tab. Find the iframe with the id of `sandboxFrame`.  
4) Copy the domain in the src of the iframe. It should look something like:  
 `n-uq3k6igt5bdk7ej335hnowqcmthhi22iel3l73y-script.googleusercontent.com`  
5) Go to the reCaptcha site at: https://www.google.com/recaptcha/intro/index.html  
6) Click Get reCAPTCHA. Register a new site by giving it a label and adding the domain you recorded in step 4.  
7) Go to you script properties and add a property of `captcha_secret` with the generated Secret Key.    
8) Open index.html. Add the Site Key to where it says `YOURSITEKEY`  
9) Publish a new version of your script to add the changes you made.  
10) Open the webapp and check to see if you are human.  



