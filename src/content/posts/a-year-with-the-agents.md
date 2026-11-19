---
title: "A year with agents"
date: 2026-05-20
description: "What a year of coding with AI agents did to my work, my head, and how I think about shipping software."
draft: true
lang: en
---

Last year I took a workshop where someone demoed Cline running on top of GitHub Copilot. I went in with low expectations. I had used autocomplete before, I figured this would be more of the same. It was not.

They opened VS Code, installed Cline, and prompted it to build a small app. I watched it write its own plan, decide which files to make, where to put them, and then start doing the work. I was a software engineer level 2 at the time. My first thought, sitting there with what I am sure was a stupid look on my face, was that my career was over.

The senior next to me leaned over and said, "this is just a parlor trick. It can do this kind of thing, it cannot do the hard stuff." It helped in the moment. It did not really land. I've read both aisles of opinions enough to make my own thoughts, predictions, and questions. How good does an algorithm actually have to be to do the job of a human? You do not need AGI for that. And the things in the way, training data, compute, datacenters, base model quality, all looked like solvable problems to me. They still do.

If I believed all that, I wanted to push on it. And lucky for me, I was at a company that put no cap on how much AI I could use. At home I have a Pro subscription and I feel the ceiling. At work I could try things, crash hard, and try again. I started doing things I had been meaning to do for years but never had the time for.

The first thing I tried was running multiple Claude Code agents in parallel. I had a stack of Jira tickets, so I cloned the repo into a bunch of folders and fired off an agent in each one. I would not have called them agents back then. It was just "Claude Code, but a lot of them."

And it worked, I started closing tickets I had been sitting on for months. I started fixing the kind of background problems we all knew about but never prioritized. The work was real. The progress was real.

The shift came on a feature I would not have shipped on my own. We had a component library feeding styles into two applications. When I sent HTML from one app to the other, the styles leaked. I had been working around it by only making changes on one side. The fix turned out to be an architectural pattern I did not know. The component library was already imported on the receiving side, so when I shipped HTML across, I did not need to ship the styles with it. The other app already had them. The AI surfaced the pattern. I picked the design. I learned what I was doing as I went. That feature was bigger and cleaner than anything I had shipped before, and it felt like mine.

I really wanted to see what these new tools were capable of, so I kept escalating. I looked for ways to use them better. I picked up tmux so I could split a terminal between agents. I learned worktrees so I could keep five or six branches alive at once. I started writing skills to wire up the workflow end to end. I got an MCP set up that could pull a Jira ticket, draft a plan, break it into tasks, implement, and then run a review pass. The first time the whole chain ran clean I remember thinking, this is getting really good.

Opus 4 was the model where I stopped checking. Before Opus 4 you could always tell. There was a tell in the comments, a tell in the variable names, a tell in the shape of the file. By the time Opus 4.6 came out the tells were gone. The diffs were clean. The docs read well. It started doing some things better than I would have. And that is when I started letting it work on its own.

That is also when the guilt started. Up until then I had been driving every change, picking the spots, making the calls. Now less of the work was mine.

It was the feeling of a manager getting a bonus for a project his team actually shipped. Not quite right.

And then I started shipping slop.

There was a sprint where I closed eighteen tickets. We had a release coming up, a long bug list, not enough hands. I closed eighteen. I remember telling myself there was no way I could have done that without AI. I am not sure that is true. I probably could have, with more hours, the same worktrees, the same tooling, just by hand. What AI gave me was permission to stop thinking about it.

The eighteen tickets shipped. Some of them came back. The team started feeling it before I did. Smooth sailing became a slow tax. The code did the job, but it did not look right and it did not feel right, and a few weeks later we were paying for it.

The other tell was outside the code. I started using AI to draft messages and docs. Friends would read them and ask if they were AI-generated, and they were always right. That stung more than I expected. It was not me. I had outsourced enough of my voice that people who knew me could tell.

From around the time Opus 4 landed through to about February of this year, I lived in some low-grade version of AI psychosis. Doom and gloom. Pretty tiring. By March, the team had had enough, and so had I. We put some guardrails in. Nothing fancy. You had to run the happy path yourself before handing anything to QA. In hindsight, obvious. At the time it felt like a relief. I had been caught up in the slop machine, trying to prove I could be productive with AI by burning as many tokens as possible. The guardrails gave me permission to stop.

I still think AI is getting good. I still think we are close to it being able to do most of what we do today. What I have learned is that the speed is misleading. You can move fast and look productive, and there is a layer of hidden tech debt building underneath that you do not see until it ignites. When it does, it slows you down more than the speed ever helped.

What I came around to is that the human still has to be in the loop, not as a typist but as the person who knows what is worth building, what nuance the change needs, whether this line should actually become that line. And we still need bigger systems around the agents. One-shot apps are a fun party trick. Shipping software at scale still needs someone who understands architecture, who knows how to make a thing efficient, who can tell when six parallel agents are about to step on each other.

That last problem is the one I started building for earlier this year. There are generic solutions out there, and more coming, but they all assume your company looks like every other company, and companies don't actually look like that. Every team has its own ticket system, its own workflows, its own quirks. If you want a real interface for managing a bunch of agents at once, a sidebar with your tickets, a worktree and an agent per ticket, a terminal you can drop into, it has to be built for the company using it. That is what I have been building.

That is where I am at. Still developing with AI, but the way I did on that styles feature. Driving the design, learning as I go, shipping things that feel like mine.
