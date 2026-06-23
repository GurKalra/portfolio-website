---
title: "building something too ambitious?"
description: "going through the amazon HackOn '26"
date: 2026-06-24
---

_*(this one will not have pictures for my pictorial readers)*_

such an enthralling experience, even though it was online.

So i got to know about the Amazon HackOn hackathon from one of the random 1200 WhatsApp groups i am in as a student. (why am i in so many WhatsApp groups?) The prize if you win? A *JOB* at Amazon as an intern. So i was in. Immediately.

Now taking part in a hackathon is not the hard part. The hard part is always the *team*. Will they actually work? Or will everything silently land on one person while everyone else is "ya man i'm working on it no issues!!"?

BUUUUTTT i was lucky enough to find my teammates. It was my last year college roommate and his 'close friend' (it was his gf, this might be tmi). They are genuinely one of the best teams i have worked with in a hackathon *till now*. They did the work given rather did more than the work, and i was so proud (insert random 'im proud' gif).

### the steps

It started with a coding round. DSA, Gen AI, and some other questions, something like 20 MCQs and 3 coding problems (that is if my memory is still working correctly). 70,000+ people took part and they didn't specify how many would make it through. Me and my team got selected in the TOP 300 TEAMS. Very proud moment. (tho we were the only team from our college)

Then came the actual task. The problem statements.

There were 5 major themes and we had to pick one and build a solution: a PRD, a demo video, and extra points for a working prototype (we did our best, getting to that later).

We went with **"AI for Campus, Community & Everyday Life"**. Under this there were two problem statements:
- **CampusFlow** - AI Operating System for Student Life
- **PocketBuddy** - AI Financial & Wellness Assistant for Students

We went with CampusFlow because it felt more interesting and honestly PocketBuddy felt a little too "here is an AI reading all your payment decisions and then judging you for the random 3am 'investment' you did on clothes."

The exact statement -
```
Student life runs on chaos — class schedules, assignment deadlines, club events,
attendance, transport, hostel notices, placement prep, and exam stress are
spread across WhatsApp groups, emails, portals, and spreadsheets. Important
updates are constantly missed. What if there was a unified AI-powered campus
assistant that could understand a student's routine, summarize important
updates, organize schedules intelligently, answer campus-related questions
instantly, and proactively help students manage everyday academic and
personal life?
```

### the assignment and the work

I was the "lead", so backend went to Yatharth since he knew AWS and we needed a lot of AWS (i did some of it too and boy oh boy that was an experience). I took on the Figma and the frontend, the friend handled the PRD. The video scripting and editing was on me as well.

So we WORKED.

48 hours. Let me tell you what we built.

### the idea
_(IDEA SLOP TIME)_

Okay so. Picture your average day as a college student.

You have 10 WhatsApp groups that all decide to be active at the same time. Your professor posts the assignment deadline on Google Classroom. The same deadline gets announced in the class WhatsApp group. Your college sends an email about it too. THREE places. Same information. And you still somehow miss it.

Our idea went to that the info exists. The problem is architectural. There is no tool that sits across all three channels at once and makes sense of them together.

**NotiQue** (that's what we named it, yes we are very cool) was our answer to this. One feed. All your sources. No chaos.

**what it does**

NotiQue pulls in from three places:
- **WhatsApp** - your class groups, society groups, all of them
- **Gmail** - college emails, professor emails, everything landing in your inbox
- **Google Classroom** - assignments, announcements, the works

It then runs all of this through an AI pipeline that classifies every message as either **ACTION** (you need to do something like submit, attend, reply) or **INFO** (just good to know), and scores it high, medium, or low importance. The stuff that actually needs your attention floats to the top. The rest stays quiet.

The other thing is **deduplication**. When the same assignment deadline gets posted in your WhatsApp group, announced on Classroom, and emailed to you, you see it *once*. Not three times. One clean card. And when you submit on Google Classroom, that card auto-ticks and every future reminder for that assignment gets silenced permanently. (actually proud of this one, oh so very thoughtful of us).

There is also **time-decay notification logic** which i think is very clever (it was not my idea but i fw it). A deadline three days away notifies you once every 12 hours. The same deadline in two hours notifies you on every single reminder. The urgency recalculates automatically as time passes, no configuration needed from the student.

The whole thing also has a **RAG-based chat**. You can ask "what's due today?" and it answers from your actual live data, not from some generic AI that doesn't know your schedule. No vector database, no embeddings. Lambda just pulls your current feed and todos from S3 and injects them directly into the prompt. The student's entire academic world fits in one context window. (This is a brag. I am bragging. I hope you are bragged.)

**the stack**

Frontend was Expo + React Native so we could target both Android and iOS from one codebase. Backend was fully serverless, used AWS Lambda + API Gateway + Node.js. AI classification via AWS Bedrock (in the PRD, irl it was groq, shhh). S3 as the primary data store (no traditional database, just per-user JSON folders). AWS SNS for push notifications. EventBridge for triggering Google Classroom syncs every 15 minutes. And `whatsapp-web.js` on EC2 for the WhatsApp connection.

The pitch to Amazon was also pretty interesting to write. Actually researched on what kind of amazon system already exists hence, Amazon Q for enterprise employees. 
We basically said we are doing the same thing, but for students. WhatsApp replaces Slack. Gmail replaces corporate email. Google Classroom replaces the document system. Amazon Q stops at the enterprise boundary. We start right there.

*(the PRD is linked at the bottom if you want the full thing. it is a real document and not a youtube link. i promise. scroll to find out.)*

### the connections

Okay so the idea sounds clean. The connections were NOT clean NOT AT ALL.

**the whatsapp situation**

WhatsApp has no official API for reading group messages as a participant. So we used `whatsapp-web.js` which reverse-engineers the WhatsApp Web protocol 
TLDR; essentially running a headless browser session on EC2 that mirrors your WhatsApp.

To connect your WhatsApp you need to authenticate it somehow. We started with a QR code. Classic, simple. Except we immediately realized that if the user is on their *phone* using the app, how are they going to scan a QR code that is also on their phone?? THEY CANT. We felt very smart for a second there and then immediately went "wait that is not so smart is it now".

So we switched to pairing code auth. You generate an 8-character code in WhatsApp settings and enter it in the app. Much better.

Except when we got the pairing code it was showing up in the terminal on EC2. Not in the frontend. Not where any real user would ever look. The code was generating correctly, it just wasn't syncing to the app in time because of how the `whatsapp-web.js` events were firing. Getting that flow to actually surface the code in the UI took longer than it should have. (i was managing the frontend and it was nice!!!)

And after all the work, it worked, but at the same time, it is fundamentally a hack. `whatsapp-web.js` is a reverse-engineered web protocol and Meta can break it at any point with an update. The real solution is an official WhatsApp participant-side group reading API, which Meta hasn't built yet. META MAKE AN API PLEASE.

**the google oauth situation**

One Google OAuth flow covers both Gmail and Google Classroom since they're under the same account. Clean in theory.

In practice the issue was that Google's OAuth policy blocks unverified apps from requesting sensitive scopes like reading Gmail. We are not a verified app. We are three college students with 48 hours. The real situation was that we were not verified (lol obviously) and the verification process takes weeks or months and requires a security audit.

We spent a genuinely painful amount of time trying to work around it. Eventually we reverted to a mock implementation for the demo. Everything looked exactly the same, it just wasn't pulling from a real inbox. The UI, the cards, the classification — all worked perfectly. Just with test data instead of live data. (which i think is smart. fake it till you make it.)

Hence no working protoype link. (was it this that costed us the selection?)

**the push notifications situation**

We built push notifications into the architecture. AWS SNS sending to Expo's push API, time-decay urgency logic and everything. It was built. It was in the code.

We did not show it in the demo video.

I still think about this. We had it working and we just... didn't demo it. Did that cost us the selection? I genuinely don't know. Maybe. Probably. Push notifications are literally the whole point of a notification aggregator and we didn't show them running.

### the result

We did not get selected. :(

We did our best and i genuinely feel there is still something in this idea. The only frustrating part is that we will never know exactly where we fell short. Like was it the video, the PRD, the idea itself, the missing push notification demo. No feedback.

But we did our best and if another hackathon comes i will absolutely do it with them again. And we will win a few. (i am not crying, i promise.)

here is a link to the PRD if you want to have a look - [prd](https://youtu.be/Aq5WXmQQooo?si=hm_fTxpl5YorgNDJ) (this is a real link. mostly.)

In the end i learned things. More about designing, more about building fast, more about AWS than i wanted to know in 48 hours, and that you should always demo the push notifications.

Bye Bye!!