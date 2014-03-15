# -*- Mode: Python; coding: utf-8; indent-tabs-mode: nil; tab-width: 4 -*-
### BEGIN LICENSE
# Copyright (C) 2014 Gabriel Barbosa <barbosanascimentogabriel@gmail.com>
# Copyright (C) 2014 Archisman Panigrahi <apandada1@gmail.com>
# This program is free software: you can redistribute it and/or modify it 
# under the terms of the GNU General Public License version 3, as published 
# by the Free Software Foundation.
# 
# This program is distributed in the hope that it will be useful, but 
# WITHOUT ANY WARRANTY; without even the implied warranties of 
# MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR 
# PURPOSE.  See the GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License along 
# with this program.  If not, see <http://www.gnu.org/licenses/>.
### END LICENSE

import locale
from locale import gettext as _
locale.textdomain('up-clock')

import subprocess
from gi.repository import Gtk, WebKit # pylint: disable=E0611
import logging
logger = logging.getLogger('up_clock')

from up_clock_lib import Window
from up_clock_lib.helpers import get_media_file


# See up_clock_lib.Window.py for more details about how this class works
class UpClockWindow(Window):
    __gtype_name__ = "UpClockWindow"
    
    def finish_initializing(self, builder): # pylint: disable=E1002
        """Set up the main window"""
        super(UpClockWindow, self).finish_initializing(builder)

        self.box = self.builder.get_object("box")
        self.window = self.builder.get_object("up_clock_window")
        self.drag = True
        # Code for other initialization actions should be added here.
        self.webview = WebKit.WebView()
        self.box.add(self.webview)
        self.webview.props.settings.enable_default_context_menu = False
        self.webviewsettings = self.webview.get_settings()
        self.webviewsettings.set_property("javascript-can-open-windows-automatically", True)
        self.webviewsettings.set_property("enable-universal-access-from-file-uris", True)
        self.webviewsettings.set_property('enable-default-context-menu',False)
        self.webview.load_uri(get_media_file('main.html'))
        self.box.show_all()

        def navigation_requested_cb(view, frame, networkRequest):
            uri = networkRequest.get_uri()
            subprocess.Popen(['xdg-open', uri])
            return 1

        def console_message_cb(widget, message, line, source):
            logger.debug('%s:%s "%s"' % (source, line, message))
            return True

        def title_changed(widget, frame, title):
            print title

            if title == "close":
                Gtk.main_quit()
            elif title == "minimize":
                self.window.iconify()

            # Disables Dragging
            elif title == "disable_drag":
                self.drag = False
            elif title == "enable_drag":
                self.drag = True
            elif title == "1":
                self.set_opacity(1.0)
            elif title == "0.95":
                self.set_opacity(0.95)
            elif title == "0.9":
                self.set_opacity(0.9)
            elif title == "0.85":
                self.set_opacity(0.85)
            elif title == "0.8":
                self.set_opacity(0.8)
            elif title == "0.75":
                self.set_opacity(0.75)
            elif title == "0.7":
                self.set_opacity(0.7)
            elif title == "0.65":
                self.set_opacity(0.65)
            elif title == "0.6":
                self.set_opacity(0.6)
            elif title == "0.55":
                self.set_opacity(0.55)
            elif title == "0.5":
                self.set_opacity(0.5)
            elif title == "0.45":
                self.set_opacity(0.45)
            elif title == "0.4":
                self.set_opacity(0.4)
            elif title == "0.35":
                self.set_opacity(0.35)
            elif title == "0.3":
                self.set_opacity(0.3)
            elif title == "0.25":
                self.set_opacity(0.25)
            elif title == "0.2":
                self.set_opacity(0.2)
            elif title == "0.15":
                self.set_opacity(0.15)
            elif title == "0.1":
                self.set_opacity(0.1)

            

        def press_button(widget, event):
            if event.button == 1:
                if self.drag == True:
                    Gtk.Window.begin_move_drag(self.window,event.button,event.x_root,event.y_root,event.time)

        self.webview.connect('title-changed', title_changed)
        self.webview.connect('navigation-requested', navigation_requested_cb)
        self.webview.connect('console-message', console_message_cb)
        self.webview.connect('button-press-event', press_button)

