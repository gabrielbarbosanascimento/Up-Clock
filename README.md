Up-Clock
========

A beautiful clock inspired by the [Ubuntu Touch Lockscreen](https://www.youtube.com/watch?v=iaC6EctpIas).

![screenshot](http://upclock.tk/img/upclock.jpg)


This app was created using Quickly on [Ubuntu](http://ubuntu.com/), and later ported to work with Python3.
<h3>HOW TO GET IT?</h3>
A PPA is available at https://launchpad.net/~apandada1/+archive/up-clock.
To install from the PPA, open a Terminal, and run the following commands.
```bash
sudo add-apt-repository ppa:apandada1/up-clock
sudo apt update
sudo apt install up-clock
```
<h3>HOW TO BUILD IT FROM SOURCE?</h3>

To run this application, 

- Open the Terminal and type cd plus the direction of this directory on your files. 
- Enter on the directory 
```bash
$ cd Up-Clock
```
- Now enter
```bash
$ debuild
```
It will build the .deb package for you.


Images
========

All the images used on this app are located on media folder


Files
========

Specific files are located on `data/media/lib` folder, you can find jquery or cycle plugins there 
