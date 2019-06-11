# What is it

This code is an example of Bot for Whatsapp Web.

I have create this piece of code just to know if was viable. It is just a concept, just a test.

# How to use it?

You have to install the Chrome extension from the forked file in developer mode:

1. Open the Chrome extension page and turn on "Developer mode" 
    you could do chrome://extensions/ in chrome

2. Select "Load Unpacked Extension" and point it to the extension folder - and you are done!

3. Installed!

4. Click the extension button and open whatsApp.

5. Now ask for your friend to send you this message: `@HELP`

# FAQ

#### So it's possible to create a Bot in Whatsapp Web?

Yes, it is.

#### Am I going to be banned?

Hum, so you already know that Whatsapp does not allow Bots, right?

Well, you're right: Whatsapp will ban you forever if they discovery you are running a Bot on long-term. For a small test: Don't worry, go forward.

I can't understand why Mark Zuckerberg still forbid Bots, he is the kind of guy who [loves to copy-cat](https://www.vox.com/2017/3/28/15079774/facebook-stories-snapchat-instagram-copy) all the good things in the Web, right? 
 Why not simply copy WeChat features? if you go to China, you will discover that you can pay all your bils using WeChat, including silly things like P2P payments or restaurants. Paper money is past.

Elon Musk may be right, perhaps the little Zuckberg [is just being limited in this subject](https://twitter.com/elonmusk/status/889743782387761152), lol.

I can't guarantee that you are not getting banned in a long term using this Bot. I really don't think so, but I can't guarantee.

#### Bullshit! I got banned using yowsup!

Hold on mate, there are kids here.

First, [yowsup](https://github.com/tgalal/yowsup) is a great python library! Simply awesome.

But their problem is: They connect to Whatsapp servers directly, without any middlware. So it is not so hard for whatsapp team to create ban-rules you if you are using yowsup.

I got banned many times in past, so I know, soon or later, you will get banned as well. Is just a matter of time.  You can see that I am probably right just looking [here](https://github.com/tgalal/yowsup/issues/1558), 
[here](https://github.com/tgalal/yowsup/issues/1979), 
[here](https://github.com/tgalal/yowsup/issues/1806) and
[here](https://github.com/tgalal/yowsup/issues/1686).

That's why I did this code. Using whatsapp web, it is almost impossible for whatsapp team to know that you are running a Bot.

#### But... What are the limitations?

A lot of limitations!

1. As you are handling DOM direcly, you can't process hundred of messages at once. Yowsup is much better at this subject.

2. You can't start a message with a unknown person. You can only answer them, mainly because you can't add a new fellow on the Contacts list on Whatsapp Web.

2. You have to install Whatsapp on your phone, connect it on Wifi and keep it charging all the time. So you have to have a cellphone exclusively for this Bot. You will need a computer with chrome running as well. But that's the main objective: In order to avoid being detect as a Bot, so you have to play this boring cat-and-rat game.

#### I think there're some bugs on your code.

Yes, there are.

1. Your friend can't send `@HELP` followed of any other message really fast. This Bot only reads the last message. It's a buggy (that can be fixed)

Feel free to fix and PR it. I will probably not touch in this public repo anymore.

# -

Authors: [Bruno Kilian](https://github.com/bruno222) and [Nelson Galdeman](https://github.com/NelsonGaldeman)
