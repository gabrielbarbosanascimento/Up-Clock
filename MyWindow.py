# -*- Mode: Python; coding: utf-8; indent-tabs-mode: nil; tab-width: 4 -*-
### BEGIN LICENSE
# Copyright (C) 2013 Gabriel Barbosa <barbosanascimentogabriel@gmail.com>
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

from lib.HTMLWindow import HTMLWindow
from gi.repository import Gtk

class MyWindow(HTMLWindow):

    def __init__(self):
        super(MyWindow, self).__init__(442, 442)
        self.drag = True
        self.set_resizable(False)
        self.connect('button-press-event', self.button_press)


    def button_press(self, widget, event):
        if event.button == 1 and self.drag:
            print "button 1 pressed and self drag is true"
            Gtk.Window.begin_move_drag(self, event.button, event.x_root, event.y_root, event.time)

    def on_html_message(self, signal_name, data):
        print "signal received from frontend: %(signal)s, with this data: %(data)s" % {'signal': signal_name, 'data': data}

        if signal_name == 'frontend_loaded':
            version = 'Unknown OS'
            for line in open('/etc/lsb-release'):
                if 'DISTRIB_DESCRIPTION' in line:
                    version = line.replace('DISTRIB_DESCRIPTION=', '')[1:-2]
            self.send_html_message('version_provided', {"version": "%s %s" % (data, version)})

        elif signal_name == 'quit':
            self.destroy()

        elif signal_name == 'minimize':
            self.iconify()

        elif signal_name == 'enable_drag':
            self.drag = True

        elif signal_name == 'disable_drag':
            self.drag = False
