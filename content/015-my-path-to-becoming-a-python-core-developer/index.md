---
title: My Path to Becoming a Python Core Developer
cover: 'https://images.unsplash.com/photo-1513563568283-f43b7e3d8de5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3286&q=80'
date: '2019-01-27'
description: The story of how I became a Python Core Developer.
slug: 'blog/015-my-path-to-becoming-a-python-core-developer'
category: 'story'
tags:
  - python
  - open source
  - core development
---

I attended my first PyCon in 2015. Hosted in Montréal, it was my first time to Canada and my first visit out of the country as an adult. 6 months earlier, I had started a company with my husband (boyfriend, at the time). It'd only been 4 months since I dropped out of graduate school to focus on building Cuttlesoft.

Hindsight has given me a very different perspective, but in the moment, I wasn't sure if making such a risky decision was the right choice. I wanted desperately to leave the city where I was living to experience something new, already feeling like I had spent too long in the only state I was old enough to remember living in. I wanted to pursue graduate school to continue studying language theory, formal verification, and compilers, but I would have to wait until the following year to transfer to another university in a shiny new city.

There were constant waves of excitement, nervousness, uncertainty.. but mostly excitement.

I had the mentality of a person who'd grown up being told she could do anything if she worked hard enough at it, and having the ability for our young company to send both Frank and I to a conference in _Canada_ was a sign that I was taking a step in the right direction. I still worried that I was leaving something behind that I was passionate about. Maybe I would go back to graduate school one day? Who knew.

One of the keynote speakers at PyCon that year was Guido van Rossum, Python's beloved creator and (now Emeritus) BDFL. During his keynote, he made a call to action and set a public goal to have at least 2 female Core Developers by next year's PyCon. There were none at the time. Frank poked me and said something along the lines of, "you should do it! You could totally do that”. I didn't know much about Guido then, but I knew that I was intimidated even at the thought of talking to him.

One night, we found ourselves at an event that Guido was also attending. Frank and another conference attendee we had met encouraged me to go talk to him. I thought, “if I don't talk to him now, will I get another chance?”

Turns out, Guido isn't always much of a talker. Conferences can get overwhelming for someone with so much visibility as he has, but I didn't realize that until later. I asked if he had a moment to talk and he said “sure!" in a way that I admire (I've rarely heard him be anything but enthusiastic and encouraging). I introduced myself and explained my love of Python and history of studying parsers, compilers, and language theory in school. I told him that I heard his call to action and that I was really interested in contributing to Python.

Sometime during my babbling, our new conference friend walked by and took a flash photo of Guido and I talking. In a dark venue with few lights on. So ya know, totally not obvious or anything. I was stunned and immediately turned bright red (a true skill of mine). I barely knew either of these people, and I was already feeling very out of my comfort zone. We both sort of ignored it and he said something about emailing him and that we could talk more later.

I didn't. I was horrified and embarrassed.

PyCon 2016 came and went, and there still weren't any female Core Developers. Guido made another announcement — that he would personally mentor any females who were interested in Core Development. Again, I thought to myself, “how can I _not_?”. So I sent him an email, making a joke about how he probably remembered the embarrassing flash-photo night (in hindsight, he had probably forgotten all about it by the next day).

From there, the rest is history; yes, the kind of history you read in textbooks — long, drawn out, and pretty boring. The recommendation for new contributors is to write documentation or fix bugs. The tricky part is that most of the open bugs for CPython are non-trivial and are the pieces that Core Devs haven’t been able to tackle themselves; most of the new low-hanging fruit gets fixed incredibly quickly. But documentation and bug fixes weren’t what drew me to CPython anyway, so I started reading tons of source code and writing a lot of print statements to walk through the core of CPython’s implementation.

Guido supported (read: humored) me through all of it. I’d pick at bits and pieces of code that I would come across so I could learn more about the cobweb-covered corners of the code that hadn’t been touched in over 15 years. So every few weeks, I'd meet with Guido and ask questions on the interesting or confusing things I would find. But this didn’t get me very far on paper (or, in GitHub PRs, if you're counting (and you really shouldn't be)).

I was graciously invited to attend the [Language Summit](https://lwn.net/Articles/723251/) at PyCon in 2017, which gave me a reassuring boost of enthusiasm — I was so grateful to just get to sit and listen and absorb as much as I possibly could. I felt like a kid who had snuck into a movie theatre without buying a ticket. I mostly kept to myself and didn't really talk to anyone; I mostly observed. So, PyCon 2017 too, came and went.

There were many times in this process that I felt aimless. I was arbitrarily picking things apart without actually doing anything new, which had spells of feeling pretty terrible. Sure, I had moments of feeling comfortable and extremely lucky that I had this opportunity and I _loved_ learning about the inner workings of CPython, but I also had a looming feeling that the next time I met with Guido, he’d say something like “well, I don’t see the point of this anymore and I’m not sure you know what you’re even doing, so good luck figuring it out” — which he would NEVER say — but nonetheless, the negative voice in my head would sometimes get the better of me and I worried I was wasting his time. I was certainly disappointing myself.

PyCon 2018 and another [Language Summit](https://lwn.net/Articles/754152/) came around — this time, complete with me actually talking to other core developers! I had been keeping up with the [Python-Dev](https://mail.python.org/mailman/listinfo/python-dev) and [Python-Ideas](https://mail.python.org/mailman/listinfo/python-ideas) mailing lists more than I ever had before, so I felt like I had relative things to talk to people about. Turns out, that most of the core developers are incredibly kind and welcoming (culture is set from the top-down, and Guido has done an incredible job at guiding our community in this direction). I immediately felt more welcomed than I ever had before. People were interested in hearing my story, I got to hear theirs, we would talk about the technical details of the current hot topics. It was _grand_. I even found an additional mentor, Eric Snow, who invited me to participate in his work on [PEP 554 (Multiple Interpreters in the Stdlib)](https://www.python.org/dev/peps/pep-0554/). This turned into a great collaborative mentorship (certainly different than the one I had with Guido, but I could write a whole blog post just on that) where we would each bounce ideas off each other or work through implementation details when we needed it.

And then, something incredibly divisive happened: [PEP 572 (Assignment Expressions)](https://www.python.org/dev/peps/pep-0572/) was approved soon after PyCon 2018. Guess who Guido asked to implement it? Suddenly, all of the things I had been studying aimlessly had meaning in a very real way.

From there, I worked on implementing a proof of concept in record time (the easiest parts came first, and it was exactly the thing I didn't know I had already been preparing for). I kept iterating towards an implementation that checked all the boxes and worked with Guido to finalize the hairy details during the Python Core Developer Sprint in September 2018. With an implementation 95% complete, I was [promoted to a fully fledged Core Developer](https://mail.python.org/pipermail/python-committers/2018-September/006059.html), over 3 years after that seed had been planted in my head. There were a few other pieces that needed to fall into place to land the implementation, but that was that. I now “own” a new part of the language that I’m responsible for taking care of.

I tell my story to show that everyone's path is different. being a Python Core Developer is not an accolade or a badge of honor. It's often difficult, thankless work, but it is _so_ interesting and rewarding if it's right for you. For me, it's been a way for my love of programming language design and compilers to come full circle; a way to continue to learn and use those skills in a way I never expected I would, and a way to give back to the Python community I've grown to love.
