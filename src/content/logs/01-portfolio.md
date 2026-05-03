---
title: "finally made my portfolio website"
description: "i finally made my website, and i would like to say i cooked"
date: 2026-05-04
---
For a while now I have been skipping out on making a website. Is it because I don't know how to code crazy good JS or CSS, or use the Framers and Reacts of the world? Well... lowkey yes.

But I finally did it. I was too free one day (which is today, 04/05/26) and was like *let's do it*. I opened up Figma and decided to make a "wireframe".

I had heard the word wireframe a lot but never really knew what it was. According to Google: *"A website wireframe is a low-fidelity, structural blueprint of a webpage that outlines the layout, content placement, and functionality without using colors, fonts, or images."* Holy yap.

According to me it is a drawing of how I want my website to look. Ok it is what the definition says. NOT THE POINT.

## Figma Was A Pain

This was my first time using Figma and honestly, it felt exactly like the first time I opened Unity. Just a cockpit of panels and buttons and I had zero no idea what any of them did. Like what does this button do? How do I select only one component in this? How am I supposed to change the font size? (actually had to google it btw)

But I pushed through it and I'm so happy I did. Having an actual wireframe before touching any code made the whole build so much smoother. Here are some screenshots -

![figma wireframe-01](/images/logs/wireframe-01.png)
*how I planned the hero page and the projects to look together*

![figma wireframe-02](/images/logs/wireframe-02.png)
*how the dev logs pages were planned*
---

## Now the tough part. Coding.

I did use AI, but I also genuinely learnt a lot while building this. Like there's a JS framework called **Astro**. It's supposed to be fast as hell and handles static sites really cleanly. (Says the guy whose website has animations on literally everything, but still "static".) 

Also new note, I finally understood how infinite scrollers work.

Small side track time... the big side scrollers on the website that say "hello" in a bunch of different languages were never in the plan (you can see it's not in the wireframes). They came about because the actual website felt kind of empty and I needed something to fill the space.

But coming back to it - infinite scrollers are **Cool**. And they're way simpler than they look.

Instead of writing a ton of text and hoping it looks "infinite", you just do a split. Make a copy of the text in a wrapper:

```html
<div class="scroll-wrapper">
  <div class="scrolling-text">hello<br>hello<br>hello...</div>  <!-- Copy 1 -->
  <div class="scrolling-text">hello<br>hello<br>hello...</div>  <!-- Copy 2 -->
</div>
```

Then for the animation, all you do is slide the wrapper by 50%:

```css
@keyframes scroll-vertical {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
```

And on the wrapper itself:

```css
animation: scroll-vertical 25s linear infinite;
```

That's it. It's sliding the entire wrapper up by 50% and since there are two identical copies, by the time the first one scrolls out, the second one is in the exact same position. Seamless loop. So simple, yet it just elevates the whole website.

---

## Now What I'm Actually Proud Of

The website as a whole honestly. Actually sitting down and *designing* something, then *building* it, and now *writing a log* on it. This full cycle is something I've never really done before.

And the look of the website. I have wanted to make something like this for a while like minimalistic but not too much. Not that cold sterile white-space-and-one-font-and-this-website-has-no-soul kind of minimal. Just the right amount. Warm, has personality, feels like mine. I think I nailed it or better I cooked.

---

## Sooo Why Logs?

Finally making a portfolio also got me to finally write logs. Another thing I've wanted to do for a long time. The thing is I work on all these projects and I want to have a record of them.

I always used to think *"who's going to read this, who's going to care"*, buuut I have realised it's for me. It's a sign of everything **I'm doing**, and everything **I have done**, really when I will look back at it.

The first log. The first portfolio. Here's to a lot more logs, a lot more websites, and a lot more games.
