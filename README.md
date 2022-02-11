# DiscordLang
Edits all the messages you / or a friend sent to a language of your choice.
To prank your non existant friends or something idk saw this on youtube a year ago but forgot what the video was called so i thought id make my own version.

Also this is against discords TOS so be careful i guess. But the chance of getting banned is really low but not 0%.

Manual installation: 
```
git clone https://github.com/Lz4Lz/DiscordLang.git
npm i discord.js@11
npm i express
npm i ejs
npm i path
npm i @vitalets/google-translate-api
```

Automatic installation: 
```
wget https://github.com/Lz4Lz/DiscordLang/blob/main/setup.sh

chmod u+x setup.sh if u need that
./setup.sh
```
Not tested on Windows but will prob work.

You will see something like this on port 3000

![image](https://user-images.githubusercontent.com/59481770/153628240-1e40e7cf-e571-47ba-9673-d137d909b3b8.png)

Token, UserID, Language.

Languages only supports ISO-639 format

