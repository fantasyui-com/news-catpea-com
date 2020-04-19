---
id: hotpink-linen
title: Ewwwwwww I Switched From Node Sass To Sass Node Sass Got Old I Guess I Wasnt Really Paying Too Much Attention To
category: research
date: 2020-04-04T19:04:39.833Z
draft: false
---

Ewwwwwww! I switched from [node-sass][1] to [Sass][2], node-sass got old, I guess.

I wasn't really paying too much attention to SASS (a UI programming language) because I think CSS should be shaped with JS, as these are native browser

technologies. But since [Bootstrap][3] is forcing me into [Sass][4], I might as well make use of the language, and... I guess its functions as well.

Since this is a new addition to the system, there is both a learning curve, and bugs.

So I've been trying to execute color.adjust(#6b717f, $red: 15); these are the big fancy new functions, but I've been getting errors for days.

Well, now that I switched to [Sass][5] (from node-sass) there were changes, but I still got an error.

It turns out they have a new module system, and before I make use of the color function I have to execute @use 'sass:color'; on top of the program file.

That's how it is done in all programming languages, but since I upgraded, I had to learn few new things about the new version of the language.

Now, this does not mean that I approve of the existence of the [SASS Programming Language][6] in my code. But it is OK.

As the first, thing here, I created a custom function, this is written in JavaScript, and it is integrated with SASS. The function measures readability between a background color and a foreground color, and it is interesting... Because even though everyone says "if readability is more than 4.5 you are peachy",

When working with themes, when kind of knowing colors, the 4.5 threshold can be lowered down to 1.5 even.

The big deal here is being able to say, keep darkening/lightening that color until it passes the readability test.

Here is an image of a recent test of using my [wcag-contrast][7](foreground, background) function until a color is readable.

Note how text in the first column it not readable as the background and text-color converge in the middle.

And now look at the second column, where SMART coloring is taking place.

I know it is still dark, I kept the color change threshold very low on purpose, to make the overall UI graphics nice. The point is that the text is keeping up with the background, it is keeping juuuuuuust a wee bit above, un-readability.

![GUI Ideas](research/smart-color.png)

Automatic Coloring

As a side-note, programming-wise this is not really impressive, it is like 5 lines of code, so pro-programmers would yawn at this, but it is a big deal for me, because I am getting really precise and delicate control over colors in my Dark Theme here, that it is only 5 lines of code, is great for me, I can just type in a bit of code and be done with worrying about color readability for some UI component or button/label combo. I like this. And I like being given the opportunity to ponder if I want something to grow brighter (like a label on a button) or darker, like in the case of a number-label on a table of data (like a row number in Excel).

[1]: https://github.com/sass/node-sass
[2]: https://sass-lang.com
[3]: https://getbootstrap.com/
[4]: https://sass-lang.com
[5]: https://sass-lang.com
[6]: https://sass-lang.com/documentation/at-rules/control/if
[7]: https://www.w3.org/TR/WCAG20-TECHS/G18.html