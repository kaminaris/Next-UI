# Installation Guide

## Setup

1. Have ACT installed [guide here](https://github.com/FFXIV-ACT/setup-guide)
2. Install FFXIV Parser plugin [guide here](https://github.com/FFXIV-ACT/setup-guide#ffxiv-act-plugin)
3. Install OverlayPlugin [guide here](https://github.com/FFXIV-ACT/setup-guide#overlayplugin)

## NextUI install

### First add new overlay

![](https://i.imgur.com/0PT75NJ.png)

### Then chose settings

![](https://i.imgur.com/nEq6CBD.png)

### Fill the options

### WARNING: You are not supposed to move overlay, it is supposed to be fullscreen

You can however set **enable clickthrough** but you will not be able to change settings once you 
do that, nor move any elements

URL: https://kaminaris.github.io/Next-UI/

![](https://i.imgur.com/r6xgDXk.png)

### Now the hard part...

We need to set the size of overlay manually because it's still in alpha stage so there is no
preset that will enable us to do so.

1. Know your monitor resolution (for most people it will be 1920x1080 so 1920 pixels wide and 1080 pixels tall)
2. **CLOSE ACT**
3. Open up in windows explorer folder: `C:\Users\YOUR_WINDOWS_USER_NAME\AppData\Roaming\Advanced Combat Tracker\Config`
You will see something like this: ![](https://i.imgur.com/gWDi2uH.png)
4. **Make a copy of this file somewhere in case you fail**
5. Now open it with some text editor like notepad (however I do recommend something better like 
notepad2, notepad, notepad++, vscode or literally any other editor that has `json` support)
6. Search for the overlay name you typed in, in this case `NextUI` ![](https://i.imgur.com/Az3BYUQ.png)
7. Now change the `Position` to `"0, 0"` and `Size` to your monitor resolution ex. `"1920, 1080"` so it should look 
   like this: ![](https://i.imgur.com/XSH1mdO.png)
8. Save the file, open up ACT again

### You should be good to go, if you have any problems at this point restore backup and try again.

**If you can't** click in settings window in game, toggle this twice (turn on, turn off) it has to be off:

![](https://i.imgur.com/kRIYWdi.png)

### In game settings:

For in game settings refer to [this guide](SETTINGS.md)

