---
layout: post
title: Reliving the Browser Wars through Screen Readers and Email
---
A Reminder of the Importance of Cross Compatibility
==============
A couple of recent projects have driven home an appreciation of those developing through the web's infancy and the battles fought during the browser wars.

The first project was a simple modal window. A user clicks a link taking them to an external site and we fire a modal letting them know the heading into uncharted territory beyond our control. Super simple, right? Nothing a little
`var modal ={
  modalInner.innerHTML = '<div class="modal"><h1>Modal Title</h1><p>modal text here</p></h1></div>';
  appendModal = function () {
    var parent = document.getElementsByTagName(body);
    parent.appendChild[0](this);
  }
}
document.getElementById('triggerLink').addEventListener('click', modal, false);
`
can't solve, right? 

Unfortunately, what first had the sense of simplicity quickly mutuated into a complex and unwieldy task when screen reader support entered the picture. NVDA, JAWS and Voice Over all have a slighyl different approach to dialog boxes and they all use different key commands to navigate content within a dialog. NVDA assumes any dialog must contain a form and immediately switches to forms mode. Only after turning off forms mode will you be able to navigate the content as you typically would in NVDA. There is literally no way for someone who is not a complete accessibility expert (or daily NVDA user) to know that, so there was good week of head banging testing before a kind soul on Twitter alerted me to this quirk. 

Voice Over, typically (from what I'm told), the most erratic screen reader, behaved marvelously. That is, as long as I added event listeners to every link or button explicitly telling it where to go next. This was not something that was needed for the other two. 

Additionally, my new default browser, Vivaldi, failed me in testing. Tab focus is supposed to be trapped within the modal when open and not move to the underlying document. Since Vivaldi runs on Chromium, I always thought of it as Chrome with a more pleasing UI and feature set. Unfortunately, it ignores the events listers setting up the tabbing in modal and throws focus to the next element in the document.To this day, it is the only browser that behaves this way and is the primary reason I stopped using it as my default. 

All this is to say that, a simple modal window chewed through a good sprint plus between implentation and accessibility considerations. It really enlightened me to the need for thorough screen reader testing as part of a build process. Beyond that, it's clear that there are many situations that no one besides a daily screen reader user would ever account for and can lead to an near endless cycle of tail chasing. It's certainly worth considering having a trained screen reader user walk through the common use cases with your QA team before they start testing your project.

As surprisingly complicated as the modal window project was, it was a cake walk compared to hand coding a responsive email meant to work across a variety of email clients. 

Now, I'm admittedly a newb in some regards and I've never built a web site using tables. After building a simple email, I have an even greater appreciation for the devs that fought their way through the hellscape of the 90's. Anyone who's built HTML emails before knows the pain involved and I can'
