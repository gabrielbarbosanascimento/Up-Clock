Up-Clock
========

A beautiful clock inspired by the [Ubuntu Touch Lockscreen](https://www.youtube.com/watch?v=iaC6EctpIas).

![screenshot](http://upclock.tk/img/upclock.jpg)

This is an web app which runs inside a Python window using GTK Webkit2. The main HTML file, and its libs are is located at `data/media`.

This software was initially packaged using Quickly on [Ubuntu](http://ubuntu.com/), and was later ported to work with Python3 and GTK Webkit 2.

<h3>HOW TO GET IT?</h3>
A PPA is available at https://launchpad.net/~apandada1/+archive/up-clock.
To install from the PPA, open a Terminal, and run the following commands.

```bash
sudo add-apt-repository ppa:apandada1/up-clock
sudo apt update
sudo apt install up-clock
```
<h3>HOW TO BUILD IT FROM SOURCE?</h3>

- Dependencies

Build dependencies: `dh-python, debhelper, python3-distutils-extra`

Runtime dependencies: `gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-webkit2-4.0`

- To run this application, open a Terminal and enter the directory of the source code

```bash
$ cd Up-Clock
```
- Now enter the command

```bash
$ debuild -b -uc -us
```
It will build the .deb package for you (you may need sudo).

