---
title: Adding 'Open in Sublime' to Mac Context Menu
cover: 'https://images.unsplash.com/photo-1473520844623-167ad716dcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'
date: '07/12/2016'
excerpt: A quick tutorial on creating a service to open files in Sublime via right-clicking.
slug: 'blog/000-mac-open-in-sublime-menu'
category: 'tutorial'
tags:
  - osx
  - workflow
---

# Enable OSX Sierra Context Menu Launch:

_The process for older OSX versions is similar, so you should still be able to use this as a guide._

1. Open up Automator (using Spotlight or finding it under "Applications") and click "New Document".

1. Select "Service" from the tiled menu.

1. Search for "Run Shell Script" in the upper left to find our action type. Drag it over to the main panel, or you can double click it.

1. In the top bar, set "Services receive selected" to "files or folders".

1. Select your shell type of choice, or leave it as `/bin/bash` if you're unsure.
   Change the "Pass input" setting to "as arguments".

1. For **Sublime Text 3**, enter the following in the text input:

`/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl -n "$@"`

For **Sublime Text 2**, enter the following in the text input:

`/Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl -n "$@"`

1. Save as "Open in Sublime". You can save it as whatever you want, but this will become the display name of the service.

Now when you right click on a file or folder, under "Services" you will see "Open in Sublime".

I also set up a service for adding a file or directory to the current Sublime window. You can duplicate the process above using the `-a` flag instead of `-n` in the command, and name it something appropriate like "Open in Current Sublime Window".
