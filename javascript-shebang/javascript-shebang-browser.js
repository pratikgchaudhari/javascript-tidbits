#!/usr/bin/env node

const app = document.getElementById('app');

const elliot = 'Elliot: ';
const mrRobot = 'Mr Robot: ';

const typingOptions = {
    loop: true,
    delay: 75,
    autoStart: true,
};

const typewriter = new Typewriter(app, typingOptions);

typewriter
    .pauseFor(1000)
    .typeString(`${elliot} None of you are real.<br>
${mrRobot} What? You are?<br>
${mrRobot} Is any of it real?<br>
${mrRobot} I mean, look at this. Look at it!<br>
${mrRobot} A world built on fantasy!<br>
${mrRobot} Synthetic emotions in form of pills!<br>
${mrRobot} Psychological warfare in the form of advertising!<br>
${mrRobot} Mind-altering chemicals in the form of food!<br>
${mrRobot} Brain-washing seminars in the form of media!<br>
${mrRobot} Controlled isolated bubbles in the form of social networks!<br>
${mrRobot} Real? You want to talk about reality?<br>
${mrRobot} We haven't lived in anything remotely close to it since the turn of the century!<br>
${mrRobot} You have to dig pretty deep, kiddo, before you can find anything real!<br>
${mrRobot} We live in a kingdom of bullshit, a kingdom you have lived in for far too long!<br>
${mrRobot} So don't tell me about not being real!<br>
${mrRobot} I'm no less real than the f*cking beef patty in your Big Mac!<br>
${mrRobot} As far as you are concerned, Elliot, I am very real!<br>`)
    .pauseFor(20)
    .start();

