## Transformice for Linux

Transformice is a multiplayer game, where you play as a little mouse out to get cheese! With just over million of players, this deserve rewards. Sadly, me and a few people who play the game have problems setting up the Linux standalone. So, i decided to make my own with Node.js Electron. It's simple, easy, and open source!!

### Installing (recommended)

Installing the app is quite simple. Open up a terminal **(CTRL + T)** and type in these commands.
```arch 
#If arch shows x86_64 then do this
URL='http://nekotony.pro/deb/transformice_x64.deb'; FILE=`mktemp`; wget "$URL" -qO $FILE && sudo dpkg -i $FILE; rm $FILE
#otherwise do this
URL='http://nekotony.pro/deb/transformice_x32.deb'; FILE=`mktemp`; wget "$URL" -qO $FILE && sudo dpkg -i $FILE; rm $FILE```
```
### Other Installing 
```
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
git clone https://github.com/NekoTony/Transformice-Linux.git
cd Transformice-Linux
npm install
```

After that, you can run the app like this:
```npm start```

If you would like it in a desktop application with `electron-package` then run this:
```npm run-script package```

**Make sure you edit the scripts/package field in package.json to the right data. Here's a template:**

```
"scripts": {
"start": "electron main.js",
"package": "npm install --save-dev electron-packager && electron-packager ./  --linux --out {folder to save desktop application with.} --version 1.0.1 --overwrite --icon={replace me with directory to icon.png in the source file.}"
}
```

### Linux Versions

Here's a list of Linux Dists that work well with this application:

```
Ubuntu 16.04 Xerial x86 - Worked well with @NekoTony (Proof: I tested it on there)
```

If you use another version of linux, **this doesn't mean it doesn't work on your version. You can Pull Request the README.md and add your version of Linux if it works for you. Template:

```
Linux Version - Work well with @Username (Proof: url proof)
```

### Keyboard Commands

*  `CTRL+e` - Close the application 
*  `CTRL+m` - Min/Max Application
*  `CTRL+a` - Load Atelier801 Forums Page
*  `CTRL+t` - Load Transformice Game

### ERROR!! PROBLEMS!!!

If you have an error with this application than please report it in issues or on our thread (bottom of the page). If that doesn't work or it doesn't support your version, then you can play it full screen in the browser [here](http://www.transformice.com/TransformiceChargeur.swf). Make sure you click F11 for full screen.


### Links

[Discord Support Server](https://discord.gg/mBU7rSv)
[Official A801 Thread](https://atelier801.com/topic?f=6&t=854970&p=2#m37)
