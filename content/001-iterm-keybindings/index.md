---
title: Adding iTerm Key Mappings to Work Like Mac Keyboard Shortcuts
cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'
date: '2016-07-16'
description: Learn how to add custom key-mappings to iTerm so you can do things like "⌘⌦" to delete a full line or "⎇→" to move forward a word.
slug: 'blog/001-iterm-keybindings'
category: 'tutorial'
tags:
  - osx
  - workflow
---

1. Open up your iTerm preferences from the top bar (iTerm → Preferences), or using `⌘,`.

1. Navigate to 'Keys' using the top menu bar. iTerm ships with some default key mappings, but here's where you can add your own. You may need to delete some of the defaults to make room for the standard Mac shortcuts.

1. Each key mapping can be added individually using the "+", if you'd like to pick and choose:

## Move cursor to the beginning of the line:

- Keyboard shortcut: Command+left:
- Action: Send hex code
- Code: 0x1

![screenshot of command-left settings](/img/blog/001-iterm-keybindings/CMD-LEFT.png 'iTerm command-left settings')

## Move cursor to the end of the line:

- Keyboard shortcut: Command+right:
- Action: Send hex code
- Code: 0x5

![screenshot of command-right settings](/img/blog/001-iterm-keybindings/CMD-RIGHT.png 'iTerm command-right settings')

## Move cursor left one word:

- Keyboard shortcut: Option+left:
- Action: Send escape sequence
- Code: b (appears as ^[b in list view)

![screenshot of option-left settings](/img/blog/001-iterm-keybindings/OPT-LEFT.png 'iTerm option-left settings')

## Move cursor right one word:

- Keyboard shortcut: Option+right:
- Action: Send escape sequence
- Code: f (appears as ^[f in list view)

![screenshot of option-right settings](/img/blog/001-iterm-keybindings/OPT-RIGHT.png 'iTerm option-right settings')

## Delete from the cursor the the beginning of the line:

- Keyboard shortcut: Command+delete:
- Action: Send hex code
- Code: r0x15

![screenshot of command-delete settings](/img/blog/001-iterm-keybindings/CMD-DEL.png 'iTerm command-delete settings')

## Delete from the cursor the the beginning of the word:

- Keyboard shortcut: Option+delete:
- Action: Send hex code
- Code: 17

![screenshot of option-delete settings](/img/blog/001-iterm-keybindings/OPT-DEL.png 'iTerm option-delete settings')

## Here's a list of all of my current keybindings:

![screenshot of all keybindings](/img/blog/001-iterm-keybindings/ALL.png 'All Current iTerm Key Mappings')

PS: `⌃⌘Space` on a Mac brings up the technical symbols menu and I just learned about it writing this post. Get at it.
![screenshot of technical symbols picker](/img/blog/001-iterm-keybindings/technical-symbols.png 'Technical symbols on Mac OSX')
