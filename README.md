<img src="http://gabrielbarbosanascimento.github.io/Up-Clock/img/up-clock.svg" alt="Blanket" width="128" height="128" align="left">

# Up-Clock

**A beautiful clock inspired by the [Ubuntu Touch Lockscreen](https://www.youtube.com/watch?v=iaC6EctpIas).**

<p align="center">
  <img width="400" height="400" src="http://gabrielbarbosanascimento.github.io/Up-Clock/img/upclock.jpg"/>
</p>

**Homepage**: https://gabrielbarbosanascimento.github.io/Up-Clock/

This is an web app which runs inside a Python window using GTK Webkit2. The main HTML file, and its libs are is located at `data/media`.

This software was initially packaged using [Quickly](https://wiki.ubuntu.com/Quickly) on [Ubuntu](http://ubuntu.com/), and was later ported to work with Python3 and GTK Webkit 2.

## HOW TO GET IT?

A PPA is available at https://launchpad.net/~apandada1/+archive/up-clock.
To install from the PPA, open a Terminal, and run the following commands.

```bash
sudo add-apt-repository ppa:apandada1/up-clock
sudo apt update
sudo apt install up-clock
```

## HOW TO BUILD IT FROM SOURCE?

#### Dependencies

Build dependencies: `dh-python, debhelper, python3-distutils-extra`

Runtime dependencies: `gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-webkit2-4.1`

#### To build this application in Ubuntu/Debian, open a Terminal and run the following commands.

```bash
$ cd Up-Clock
$ debuild -b -uc -us
```
It will build the .deb package for you (you may need sudo).

