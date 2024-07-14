#!/usr/bin/env node

const {terminal} = require('terminal-kit');
const typingOptions = {delay: 20}
const elliot = 'Elliot: ';
const mrRobot = 'Mr Robot: ';

terminal.slowTyping(`${elliot} None of you are real.
${mrRobot} What? You are?
${mrRobot} Is any of it real?
${mrRobot} I mean, look at this. Look at it!
${mrRobot} A world built on fantasy!
${mrRobot} Synthetic emotions in form of pills!
${mrRobot} Psychological warfare in the form of advertising!
${mrRobot} Mind-altering chemicals in the form of food!
${mrRobot} Brain-washing seminars in the form of media!
${mrRobot} Controlled isolated bubbles in the form of social networks!
${mrRobot} Real? You want to talk about reality?
${mrRobot} We haven't lived in anything remotely close to it since the turn of the century!
${mrRobot} You have to dig pretty deep, kiddo, before you can find anything real!
${mrRobot} We live in a kingdom of bullshit, a kingdom you have lived in for far too long!
${mrRobot} So don't tell me about not being real!
${mrRobot} I'm no less real than the f*cking beef patty in your Big Mac!
${mrRobot} As far as you are concerned, Elliot, I am very real!\n`, typingOptions);