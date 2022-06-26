            /* All about package.json file concept */
/*AGENDA
    * What is package file ?
    * How to create package.json file.
    * All information available inside package.json desciption line by line
    * How to install external packages ?
    
#1. package:- it contains all informations of a project.
    like project name, version, git repository link, all required packages etc.
#2. How to create Package.json file:- npm init (run this command)
    this will ask for some configuration, give that proper configuration.
    when u completed configuration and press enter this will create a file
    package.json file.

    # package.json file is really very important please dont delete it. if u delete this file 
    then your project is completely destroyable.

    # all installed packages comes under the :
    dependancies { } 
    
    # after  installtion done, its create a folder node-modules and this folder contains all packages.

    # when you intall any external required packages for project 
    # then its automatically create a package-lock.json file
    # we can delete this file and again get this by installing node_moduls(npm intall)
    
 */

const color = require('colors');
console.log("Hey i am using external package here!!!".green);