# Running Honkai: Star Rail with CrepeSR

## SECTION 0 - Links
[Frontrooms Discord](https://discord.gg/wzkuZVTNe8)

[Support Discord](https://discord.gg/sCAC282C)

## SECTION 1 - Setting up everything

###### PART 0: Prerequisites

You need to download the following:
 - Honkai : Star Rail (Get this yourself)
 - Node.js (https://nodejs.org/en/download/current/) and select Windows Installer (.msi)
 - Python (https://www.python.org/downloads/) click on the yellow button , it will download the latest version of Python.
 - Visual Studio (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false) you will also need to install the Desktop development with C++  plugin for it.
 - Fiddler Classic (https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe)
 - MongoDB Compass (https://www.mongodb.com/try/download/compass)
 - CrepeSR Resources (https://github.com/memetrollsXD/CrepeSR-Resources)
 
###### PART 1: Setting up CrepeSR and the Proxy

 Step 1: Download MongoDB Compass from the link above. Afterwards start the app and click on the "Connect" button. You can minimized the app afterwards.

 Step 2: Download CrepeSR from the link above and press on the green button called "Code" then press "Download ZIP" do the same for the CrepeSR-Resources link.
 
 Step 3: Extract the "CrepeSR-main" folder and head into the src folder and create a new folder called "data"

 Step 4: Then extract the "CrepeSR-Resources-main" folder and click on it and copy everything (except the README.md) into "CrepeSR-main\src\data"

 Step 5: After you've done that go to Fiddler Classic link and install it then run it then go to Tools > Options > Connections > Fiddler Classic listens on port and set the port to 8080

 Step 6: Afterwards go to the right of the screen and press on FiddlerScript and paste this script this:

```bash
import System;
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;
var list = [
    "https://api-os-takumi.mihoyo.com/", //1
    "https://hk4e-api-os-static.mihoyo.com/", //2
    "https://hk4e-sdk-os.mihoyo.com/",
    "https://dispatchosglobal.yuanshen.com/",
    "https://osusadispatch.yuanshen.com/", // 5
    "https://account.mihoyo.com/",
    "https://log-upload-os.mihoyo.com/",
    "https://dispatchcntest.yuanshen.com/",
    "https://devlog-upload.mihoyo.com/",
    "https://webstatic.mihoyo.com/", // 10
    "https://log-upload.mihoyo.com/",
    "https://hk4e-sdk.mihoyo.com/",
    "https://api-beta-sdk.mihoyo.com/",
    "https://api-beta-sdk-os.mihoyo.com/",
    "https://cnbeta01dispatch.yuanshen.com/", // 15
    "https://dispatchcnglobal.yuanshen.com/",
    "https://cnbeta02dispatch.yuanshen.com/",
    "https://sdk-os-static.mihoyo.com/",
    "https://webstatic-sea.mihoyo.com/",
    "https://webstatic-sea.hoyoverse.com/", // 20
    "https://hk4e-sdk-os-static.hoyoverse.com/",
    "https://sdk-os-static.hoyoverse.com/",
    "https://api-account-os.hoyoverse.com/",
    "https://hk4e-sdk-os.hoyoverse.com/",
    "http://overseauspider.yuanshen.com",
    "https://abtest-api-data-sg.hoyoverse.com/",
    "https://account.hoyoverse.com",
    "https://log-upload-os.hoyoverse.com",
    "https://webapi-os.account.hoyoverse.com",
    "http://log-upload-os.hoyoverse.com", // 30
    "https://hkrpg-sdk-os-static.hoyoverse.com",
    "https://hkrpg-sdk-os.hoyoverse.com",
    "https://globaldp-prod-os01.starrails.com"
    ];

class Handlers
{
    static function OnBeforeRequest(oS: Session) {
        var active = true;
        
        if(active) {
            for(var i = 0; i < 33; i++) {
                if(oS.uriContains(list[i])) {
                    oS.host = "localhost"; // This can also be replaced with another IP address.
                    break;
                }
            }
        }
    }
};
```

 Step 7: Click on "Save Script"

###### PART 2: Starting the Private Server

  Step 1: Install NodeJS from the link above

  Step 2: Then go to your private server folder and hold shift and press right click and click on "Open PowerShell window here" (Or on Windows 11 "Open in Terminal")

  Step 3: in the terminal window type "npm install" (You need to make sure you ABSOLUTELY HAVE Visual Code Studio with the Desktop development with C++ plugin installed it will be one of the options after you install it)

  Step 4: After the "npm install" command has finished type "npm run start" and crepeSR should start.

  Step 5: Now you should see a "config.json" file , open it with NotePad or your main text editor and change:
"MONGO_URI": "mongodb://localhost:27017/crepesr",
to
"MONGO_URI": "mongodb://0.0.0.0:27017/crepesr",

###### PART 3: Starting & Playing the Game

 Step 1: Within the CrepeSR command prompt, create an account with the command:
 
 ```account create [username] [uid]```
 
 e.g. account create GigaChad 420

 Step 2: Open StarRail.exe and have fun!

## SECTION 2 - Map & Character IDs

How to change Characters:
In your crepeSR shell type:

```/target [UID]```

```/avatar add [characterID]``` OR ```remove [characterID]```

(If you have any issues with E11000 , open mongoDB, connect to localhost look to the left of the screen and click on "crepesr" then click on avatars. Head to the Indexes tab and delete the _id_1 index.)
This should fix your issue and allow you to add characters to your account.

Character IDs (These may or may not change as new CBT versions are released):
```
"AvatarID": 1001, - March 7th
"AvatarID": 1002, - Dan Heng
"AvatarID": 1003, - Himeko
"AvatarID": 1004, - Welt
"AvatarID": 1005, - Kafka
"AvatarID": 1006, - Bronya (Silver Wolf)
"AvatarID": 1008, - Arlan
"AvatarID": 1009, - Asta
"AvatarID": 1013, - Herta
"AvatarID": 1101, - Bronya (Adult)
"AvatarID": 1102, - Seele
"AvatarID": 1103, - Serval
"AvatarID": 1104, - Gepard
"AvatarID": 1105, - Natasha
"AvatarID": 1106, - Pela
"AvatarID": 1107, - Clara
"AvatarID": 1108, - Sampo
"AvatarID": 1109, - Hook
"AvatarID": 1203, - Luocha
"AvatarID": 1204, - Jing Yuan
"AvatarID": 1205, - Blade
"AvatarID": 1206, - Sushang
```
(Bugged Characters which result in a softlock they might be placeholders or we are possibly missing excels)
```"AvatarID": 8001, - ???
"AvatarID": 8002, - ???
"AvatarID": 8003, - ???
"AvatarID": 8004, - ???
"AvatarID": 9070, - ???
"AvatarID": 9075, - ???
"AvatarID": 9998, - ???
```

Map IDs:
MapEntryExcelTable.json
Which is found in : CrepeSR\src\data\excel
Here you can find planeIDs & floorIDs which you can use to change the scenes

Change Maps:
Go to mongoDB Compass and head to:
crepesr > players > Click on the arrow on the left of "posData:Object" and change floorID and planeID according to IDs from the MapEntryExcelTable.json file. Be aware that some IDs may or may not crash your game.
