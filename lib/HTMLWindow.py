# -*- Mode: Python; coding: utf-8; indent-tabs-mode: nil; tab-width: 4 -*-

from gi.repository import WebKit
from gi.repository import Gtk
import json
import os


class HTMLWindow(Gtk.Window):

    def __init__(self, width, height):
        #create the window
        Gtk.Window.__init__(self)

        # splitter = Gtk.Paned(orientation=Gtk.Orientation.VERTICAL)
        # splitter.show()

        # #create the widget container
        # vbox = Gtk.VBox(homogeneous=False)
        # self.add(splitter)
        # vbox.show()
        # splitter.add1(vbox)

        # #create the menu
        # file_menu = Gtk.Menu()

        # accel_group = Gtk.AccelGroup()
        # self.add_accel_group(accel_group)

        # quit_item = Gtk.MenuItem()
        # quit_item.set_label("_Quit")
        # quit_item.set_use_underline(True)
        # accel = Gtk.accelerator_parse("<Control>q")
        # quit_item.add_accelerator("activate", accel_group, accel[0], accel[1], Gtk.AccelFlags.VISIBLE)
        # quit_item.show()
        # quit_item.connect("activate", self.quit)
        # file_menu.append(quit_item)
        # quit_item.show()

        # menu_bar = Gtk.MenuBar()
        # vbox.pack_start(menu_bar, False, False, 0)
        # menu_bar.show()

        # file_item = Gtk.MenuItem()
        # file_item.set_label("_File")
        # file_item.set_use_underline(True)
        # file_item.show()

        # file_item.set_submenu(file_menu)
        # menu_bar.append(file_item)

        #create the WebView
        self.view = WebKit.WebView()
        self.view.get_settings().set_property("enable-developer-extras", True)
        # inspector = self.view.get_inspector()
        # inspector.connect("inspect-web-view", self.inspect, splitter)

        sw = Gtk.ScrolledWindow()
        sw.add(self.view)
        self.view.show()
        sw.show()

        #and use that for sizing
        self.set_size_request(width, height)

        #add the webkit window
        # vbox.pack_start(sw, True, True, 0)
        self.add(sw)
        directory = os.path.dirname(os.path.dirname(__file__))

        html_file = """%s/main.html""" % directory

        self.view.open(html_file)

        self.view.connect('title-changed', self._on_html_message)

    def inspect(self, inspector, target_view, splitter):
        inspector_view = WebKit.WebView()
        #inspector_view.show()
        splitter.add2(inspector_view)

        return inspector_view

    def _on_html_message(self, view, frame, title):
        if title == "null":
            #ignore when the title was set to null
            #typically to ensure the same message can be passed twice
            return
        else:
            try:
                message = json.loads(title)
            except Exception, inst:
                print inst
                message = {"signal": "error", "data": "signal not parsed"}
        self.on_html_message(message["signal"], message["data"])

    def on_html_message(self, message):
        pass

    def send_html_message(self, signal, data):
        data_string = json.dumps(data)
        self.view.execute_script("require('lib/backend')._receive_message('%s','%s');" % (signal, data_string))

    def quit(self, widget, data=None):
        self.destroy()
