---
title: On My First Conference talk
cover: 'https://images.unsplash.com/photo-1475850313866-696e8076ac0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
date: '2018-01-30'
description: Reflections and tips that I learned from proposing, planning, and giving my first conference talk.
slug: 'blog/013-on-my-first-conference-talk'
category: 'story'
tags:
  - conferences
  - talks
---

I’ve had the desire to speak at conferences for years now. My husband and I attended our first PyCon in 2015 and at some point during a talk he leaned over and whispered “That could be you up there. You could be giving talks”. And I thought… that would be SO cool.

It’s now 2018 and 2.5 years later, I finally gave my first conference talk at the inaugural [PyCascades](https://pycascades.com). And so far, I’ve been really lucky. It can be _really_ difficult to get a conference talk accepted. Most people don’t get all of their talks accepted, let alone their first proposal; but don’t let that dissuade you. You have to start somewhere! I also picked one of the most supportive conferences I’ve seen as my first, which I also consider myself very lucky for.

Because I know that there’s a great shroud of mystery surrounding talk proposals and speaking, I decided to open up all aspects of my conference talk process. I have [a repo with all of my conference talk proposals](https://github.com/emilyemorehouse/conference-talk-proposals) and [a repository with my first presentation/notes/code playground](https://github.com/emilyemorehouse/ast-and-me). I leveraged Github issues for my presentation repository to track my own progress and improvements, along with feedback I received from others along the way.

So what have I learned?

## Your Proposal Isn’t Set In Stone

[The repo I mentioned](https://github.com/emilyemorehouse/conference-talk-proposals) contains ALL of my talk proposals, and it’s pretty minimal right now. Remember what I said about having to start somewhere? I also submitted the same talk that I had accepted for PyCascades to PyCon, which is totally fine! I plan to include all proposed, accepted, and rejected proposals along with any feedback I receive along the way.

As a fun exercise, take a look at my initial proposal for PyCascades compared to the one I submitted for PyCon. In between writing those documents, I had a chance to actually write the talk and give it at a local meet-up. These proposals are for the SAME talk, but they look very different. Your proposal is probably going to change, by a little or maybe a lot.

## Your Thoughts, Experiences & Failures Are Valuable

My talk idea for [The AST and Me](https://emilyemorehouse.github.io/ast-and-me) came from fiddling around with the CPython source code as I attempted to find a niche that I could bring value to. I had a few things VERY wrong when I started. It turns out that after 28+ years, the CPython compiler and interpreter are pretty solid. It also turns out that there aren’t major speed ups to be gained from optimizing the AST during the compilation process. [Victor Stinner](https://www.blog.pythonlibrary.org/2017/02/27/pydev-of-the-week-victor-stinner/), a CPython core dev, spent years [investigating](http://faster-cpython.readthedocs.io/fat_python.html#fat-python) this and has [since moved on](https://groups.google.com/d/msg/dev-python/-mpP77BSSs4/vYRZ-49OBQAJ). It also turned out that I based my talk on the foundation that these things were true.. 🤷 My idea wound up completely evolving from being centered on optimizations and speed-ups to how tools like transpilers and linters rely on ASTs to build really cool stuff.

I stumbled a lot. I had moments where I thought I was going to make a fool of myself and that I didn’t have anything useful to say. But I had a people who both encouraged me and challenged me to keep going. The point is that I wouldn’t have landed where I did if I hadn’t poked around in an unknown area, failed, failed again, failed some more, and finally found something that I found cool (and it turns out that other people thought so too).

## Find A Mentor Or Proposal Buddy

You know how you’re supposed to find a workout buddy to hold you accountable for actually working out and not just saying you're going to? Do the same thing for talk proposals! I would not have submitted my first talk proposal if I didn’t feel like I was going to let down my mentor if I didn’t come through when I said I would. It's also helpful to have someone to bounce ideas off of, whether to gain their insights or to have someone as your [rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging). I also procrastinated and waited until the very last minute (almost literally) to submit. Try not to do that.

## Don’t Worry About Perfection

Some conferences will review on a rolling basis, or will give feedback for your talk before making a final decision if they need more clarity on your proposal. Don’t feel like your talk is perfect? Submit it anyway. Take a chance on getting accepted and even if you don’t, you could get valuable feedback that could improve your proposal for next time.

## Practice!

I gave my talk at two meet-ups locally before giving it at PyCascades. I spent 2 hours writing my proposal (not including the many meetings with my mentor and other time spent thinking or messing around with CPython). I spent 36 hours working on my presentation and demo code. I put in a lot of work, and it paid off! I got absolutely invaluable feedback from my local meet-ups by getting an initial version of my talk done a month before PyCascades which gave me time to iterate and make improvements. I also got a lot of confidence and validation from people who were genuinely interested in what I had to say.

## Pick The Right Conference

In the Python world, community is everything. There are so many amazing people consciously working on diversity and inclusion. The right community wants to see you succeed and only wants the best for you. They’ll cheer before and after your talk, they’ll come up to you after to support you, they’ll ask questions. It definitely helps to know some of the people who will be in the room with you. And don’t be afraid to say “holy cow, I’m super nervous”. Playing it cool doesn’t always help, but hearing someone say “you’re going to do awesome!” definitely helps.

## Ask For Feedback

I used GitHub issues to track all feedback that I received from giving the talk at meet-ups along with improvements that I wanted to make as well. I also told people (both when I started and ended the talk) that I was looking for feedback so the audience had it in mind as they watched the talk.

## Do The Work, But Use Your Resources

SO much of my talk relied on the research, documentation, and blog posts that other people created. Do the work and research your subject well. Be familiar with your content and use the information you can find to help you! Also, don't be afraid to answer an audience question with "I don't know" or "I'd have to look that up".

All in all… just do it! It’s scary and you’re going to have times that you feel like you shouldn’t be giving a talk at all. Fall back on some of the things I mentioned above and keep taking steps forward, even if you have to pause every once in a while.
