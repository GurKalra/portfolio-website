---
title: "a button and a textbox made me lose my mind"
description: "making ui in unity 😇"
date: 2026-05-27
---

I have made a few projects in Unity... not many, but enough to learn the basics and get comfortable with its *beautiful* UI system.
Unity is like a cockpit when you open it for the first time, but it gets better with time, and life becomes rainbows and sunshine.

Until I decided to make a full-fledged game and everything decided it wanted to end me personally.

### So what really happened?
npx @astrojs/upgrade
I was trying to make a game called **As Above**.

The idea came from a text my dad sent me a while back:

```
Game idea - there are sets of people, and you are God. As God, you need to put weight on everyone based on their capacity. If you put less weight or no weight, they will indulge in suppressing or hitting people who are carrying bigger weight. If you put more weight than their capacity, they are less able to move and can form a union to throw away the weight entirely and conspire against you.
```

First reaction: I was proud of my dad. My dad giving me game ideas like, *how cool is that?*
Second reaction: oh i need to do some thinking now to actually make it work.

---
### What is the game?

You are God over a small village. People arrive at your door. You read their file and decide how much burden to give them according to their work, their responsibility, their current situation, etc. Once decided, it's locked. You move on. The village lives with what you chose.

The game performs like a puzzle. It is not a puzzle.

**The Core Loop**

- **Morning** - New villagers arrive from the bottom right corner. You click on them, read their dossier - name, age, occupation, history, and a future event only *you* can see and type in a weight. Hit Assign. They enter the village and start living.
- **Afternoon** - The village runs. People wander. You can click any villager and read their updated file, who they have been near, what's been happening to them, how they are holding up. This is your investigation window.
- **Evening** - "The worship place" opens. Villagers who are balanced or at peace attend. Each prayer generates a Faith Token. This is your only currency for divine intervention.

_NOTE: to be clear I didn't want any religious stuff in this (says as he is making a game being a god) hence named it "the worship place"_

**Now more yap about what is really happening under the hood**

Every villager has a hidden capacity which you will never see directly, you infer it from their dossier. Assign too little and they become idle and aggressive, bullying those who carry more. Assign too much and they strain, withdraw, and eventually break.

When an overburdened villager crosses paths with an underloaded one enough times, a cascade fires emotions like guilt and fear on them (guilt on the bully, fear on the victim). That victim may now be overburdened. They find someone else. The chain never stops.

Positive cascades exist too. Balanced villagers with spare capacity naturally help strained neighbours. People who have been helped are drawn back toward their helper. Social bonds form organically from the simulation.

Capacity is never fixed. Sustained balance grows it slowly. Chronic overload degrades it. A future event landing, say a sick dependent or an unresolved debt will drop it suddenly. Grief from a neighbor's death will also drop it immediately.

When someone breaks, the severity depends on how far over capacity they were: withdrawal, shell, departure, death. Death spreads grief to everyone nearby and their tasks redistribute to whoever is left.

**What's in the game right now**

* Villagers arrive procedurally each morning with generated names, ages, histories, and one future event
* Weight assignment with a locked dossier panel (*Papers Please* style)
* Full cascade simulation running in the background (guilt, fear, support, grief)
* Relationship tracker - villagers who cross paths frequently affect each other
* Social attraction - people gravitate toward those who helped them
* Dynamic dossier - updates every morning with what the simulation did to that person
* Death markers - permanent brown spots where people died, visible all run
* Three-phase day cycle - morning assignment, afternoon reading, evening worship
* Faith token economy - attendance generates tokens for future god powers
* Imbalance score - hidden pressure building toward critical events
* Villager colors - blue (underloaded), green (balanced), yellow (withdrawal), orange (strained), red (breaking), dark red (shell), grey (departed)

_FUN FACT: Currently this all is in the debug logs. Hence I started with the UI and boy oh boy i was *mesmerised*_

---
### Making the thing

After a lot of ideation, two weeks, to be exact the final design was settled and was with us (there is no "us" by the way, it's just me.)

Development started smooth enough. Write code. Watch YouTube to understand coroutines. Have a few "WHY DOES THIS CODE GIVE AN ERROR" days. After all that, the basic mechanics were done:

* Villagers arrive in the village
* Get a weight assigned to them
* Roam around with proximity logic so they can form "connections" (connections is a strong word, call it a list of the people they come across most, based on their random movement)

---
### The pain

Now it was time to add user input, because this is a video *game* and not just a video (I don't know why I try with the puns).

I thought, how long could it possibly take? Two hours max. Set up the UI Canvas, connect everything, add the procedurally generated text blocks that show the past, present, and future of each villager.

It took me FOUR hours. DOUBLE THE AMOUNT I THOUGHT IT WOULD. AND WHY ALL BECAUSE OF A BUTTON AND A TEXT BOX.

The button was the 'close button' (it closes the dossier of the villager). Easy enough to set up (or so i thought) put it in a canvas, give it a horizontal layout group, connect it to the close UI function and voila.

Except no. No voila happened.

The button worked in the morning cycle but refused to work in the afternoon cycle, which is exactly when the dossier is needed the most and most of the user interaction happens. I won't go into the details of the breakdown, but the root issue was that the text block was a raycast target. TLDR; The text block was covering the close button and silently eating every click. This took about an hour and a half to debug because I am a humble beginner in the beautiful Unity UI building process.

After that was fixed, the block showing the age and life status of the villager stopped working. I still don't know why. It just randomly stopped.

I removed it, added it back to the canvas, and it worked. Just worked. I was confused then and I am still confused now writing this. The classic "turn it off and turn it on again" approach, successful once again. But it works and I am happy. Finally free from the shackles of Unity UI (at least for now).

Here is the very basic UI that took me longer to build than the main game logic (that is a lie, the logic took longer, but let me have this).

![the final ui](/images/logs/ui.png)

---

### Next steps

I will continue working on the game and will keep updating here. This is, I believe, the first of many crashes over the exact same thing.