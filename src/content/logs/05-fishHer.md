---
title: "first ever 3D game"
description: "i completed a game jam!!"
date: 2026-07-25
---
(link of the game at the end)

I have taken parts in game jams before but i was unable to comeplete games, motly because of college or i just didn't felt enough to complete the game.. But i always wanted to make a fully 3D games, i have made games that are 2D unity and godot. BUT IT ALL CHANGED OFFICIALLY THIS MONTH.

So before getting into the process of making the game, i want to tell my inspiration. **SQUIRREL STAPLER!**
The first time i saw that game on youtube i was like this is so cool and smart. (i saw markiplier's video, you should go watch it if you haven't already)

### the jam and the idea
The jam was called **[S.T.E.M Jam](https://itch.io/jam/stem-jam)** hosted by Hosted by Spotatoking, GameDev and Esports Club, IIT Guwahati. There were four major themes:
- SIGMA (You are what accumulates.)
- TRANSMISSION (The communication between systems.)
- ECHO (Actions reverberate beyond their moment.)
- MEDIUM (The channel shapes the meaning.)

You can go ahead if you want to read more about it but i chose ECHo and then came the real idea planning.

---

#### the idea
So as i told Squirrel Stapler is a huge inspo for this game but i wanted to do something else (obviously). So i first thought of fishing, because i don't know why, i just did. It seemed fun. Really i have no idea where i got the idea from, but it was fun.

_(a side note: I planned the mechanics of the game first and then a story to support it.)_
Now coming back to the topic, what can we do in a fishing game? Immediately i thought as the days pass by the water changed color, the fishes are not fishes anymore, the music turns louder and so on. Now my thought was that how is it fitting to the theme ECHO? 

So this is where the lore comes in, like why is is happening or why is the player doing all that they are doing? This is something i wrote in the itch io page of my game

```
the idea behind this is that consequence doesn't end when the moment does, that some patterns get inherited before you even notice you've picked them up. You play as a man with a daily ritual: fish, deliver the catch, write in his journal, sleep, repeat. The game is short and isn't interested in jump scares rather going for dread instead of shock.
```

---

### the process

So this was my first official 3D game and that is why is was not really sure how and where to start. Thank god to plugins and assets that made making this much simple.

I was getting ready to make a full character controller by myself but then i found [Modular First Person Controller](https://assetstore.unity.com/packages/3d/characters/modular-first-person-controller-189884), it made it so simple that i didn't even had to make the full controller and just had to tweak it a bit for my needs.

#### the boat
THIS EVIL BOAT TOOK ME SO LONG TO SET UP ONE FULL DAY MAKING SURE IT WORKS.
_ahem_ anyways, i say this because the way i wanted the boat setup was like, you get on the boat and control it (i mean duh) using WASD. WASD is also used by the character controller, ok makes sense, cool that worked easily i had to patch up the boat controls to the first person controller, perfect that worked fine.

The camera. OH THE CAMERA. MY MAN I SINCERELY APOLOGISE TO EVERY GAME DEVELOPER IN THIS PLANET FOR THE EXTENT OF THE TORTURE I PUT MYSELF THROUGH. The camera, so the way i wanted the camera was that you sit on the boat and then the camera switches to the front of the boat.I really was naive enough to think, "oh how hard can it be all i need to do is set up a game object that in which the camera will get placed when you get on the boat". Ya no.

It was like when the camera got to the right postion, the body stopped moving, when the body was moving the camera got stuck and i was able to control the body OUT OF THE CAMERA, which was a hilarious sight but NOT FOR ME CAUSE I WAS THE ONE WHO HAD TO FIX IT. (i wish i made a video of it, now i know better). I did fix it tho, don't ask me how, it was a lot of trail and error.

#### the fishing
The fishing mechanic went through like 2-3 iterations before finally making it.
One of it was something like Stardew Valley but i realised that it will take me a lot more time to make it work and set it up and i will not be able to make it in time for the jam. Another iteration was you need to move the bobber with the mouse and when the fish comes near it you need to click a button to reel it in. But again same issue, i was not really sure how do i make it fully and time. (the boat took so long that i had to keep a simple fishing mechanic)

So the one that i went for is super rudementary.
- You sit in the boat and wait for the prompt to come
- You press the button in time, you catch the fish
- If you don't, the next time the fish comes you will lesser time to press the button. Basically it increases the difficulty each time you miss the button.

I thought this is simple enough but at the same time deemed a little challenge. To implement it, it took a little while because I am still leanring C# as well but it sure was a fun time implementing this.

#### the environment / map
I wanted to make a small map but i wanted to go for a PSX-Shader type thing and for that i wasn't sure how to make it fully like a map you know? Again praise the assets and plugins [PSX Shaders](https://assetstore.unity.com/packages/vfx/shaders/psx-shader-kit-183591) and for the map i wanted it to be a little random generated and lo and behold [Map generator](https://assetstore.unity.com/packages/p/3d-square-tile-terrain-generator-237277) came in handy.

Other than this i wanted to have a little less visibilty so something like a fog mechanic (lowk slient hill rip off lol) and i just addded the fog from the enviroment settings in unity itself.

There were some models and stuff the psx shader didnt work on. Now i dont know if this was a skill issue or actually it was not working or set up in that way.

![the secret thing in game](/images/logs/log-5/censor.png)

#### the lore
I wanted to have a cohevies (or something similar to that) story for the game and what is the best way to tell a story than to make the player read. YAY COMPREHENSION!!

Having notes scattered around and having a journal was a great idea because that way you can put in a lot of lore and story elements without actually impacting the gameplay. Other than this i wanted the game to be a bit unsettling so i added some horror elements (not really horror, more like unsettling.)

![One of the journal entry](/images/logs/log-5/note.png)

#### the audio
sound was the last big system i built and honestly one of my favorites once it actually worked (see: the managers section for how much of "actually working" was earned the hard way this jam).

i pulled most of my raw sounds from freesound.org and then took them into audacity to actually make them fit the vibe. A lot of the eerie stuff isn't eerie in its original form at all, it's just regular ambient noise that I reversed, pitched down, and threw some reverb on until it stopped sounding like a normal sound and started sounding like something a little wrong. 

Turns out you can make almost anything unsettling if you reverse it and slow it down enough, which, weirdly, was one of the more fun parts of the whole process.

i also built a full layered audio system in unity: a choir track that plays constantly through the whole game and gets louder each day, separate ambience for when you're on land, separate water ambience (three different versions, one per day) for when you're on the boat, and one-shot sounds for things like catching a fish and turning a page. 
Getting all of that to actually cooperate and not overlap or cut out was its own small nightmare (there was a stretch where boarding the boat would kill literally all audio in the game for reasons I still don't fully understand. For this i just removed my audio listners and then readded them again and it worked (i should really learn to use unity properly)).

But by the end it made the whole thing feel a lot more alive than it had any right to, given how simple most of the actual sound design was underneath it.

#### the managers not existing
Now for this, two of the managers `GameOverSequence` and `PauseController` after making them in the editor and running the game, they were just not working. They were not showing in the scene hierarchy at all even tho they had instances attached to them.

I spent SO LONG on this. 🫩🫩.
Adding debug logs , checking if there were duplicates, if the script was attached, if the checkbox was there or nor.
TLDR; i was losing it.

Next day i came back again to check what is up. I deleted both of them and then made them again and SAVED the game. Now i want to put emphasis on SAVED cause my oh my. i uh didnt save the game last time.... Yep.

AND IT WORKED SO YES!!!! :D

---
![a random image of the editor](/images/logs/log-5/random.png)

## the end?
So finally a full 3D game all by yours truly. (okay, a lot of assets were used, but still, I DID IT!!)

This whole thing also happened under a genuinely stupid amount of time pressure. I had a day trip in the middle of the jam that ate a full day of work, and my college semester started with about four days still left on the clock, which meant most of the back half of this project got built in whatever scraps of evening I had left. I cut things because of it. 

The fishing minigame is deliberately as simple as it is because I didn't have time for anything fancier. Day 3 is short on purpose, partly for pacing, partly because "short" was the only version I could actually finish. I don't think the game suffered for it in the end, if anything having to cut constantly probably made me make sharper decisions than if I'd had all the time in the world, but I'd be lying if I said it wasn't stressful getting this out the door by the deadline.

I am so proud of this game and I hope you go play it. It was fun making it, even the hard times, because I knew it was going to be worth it. i learnt a lot tho. To a lot more games to come for sure <33.

(i already have ideas maybe a 2.5D game next?)

**LINK TO THE GAME:** [FishHer](https://gurgames.itch.io/fishher)

Some screenshots of the game:

![the inside of the cabin](/images/logs/log-5/cabin.png)
![fish](/images/logs/log-5/fis.png)
![outside touching grass](/images/logs/log-5/outside.png)

BYE BYE!!