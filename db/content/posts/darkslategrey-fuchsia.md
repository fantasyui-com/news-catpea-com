---
id: darkslategrey-fuchsia
title: I Finished Laying Down The Groundwork For Bootstrap Svelte Components As Predicted There Is Wisdom In Following Bootstraps Co
category: research
date: 2020-04-08T16:28:09.783Z
draft: false
---

I finished laying down the groundwork for [Bootstrap][1]+[Svelte][2] components. As predicted, there is wisdom in following Bootstrap's Conventions. The code is short, clean and lightweight.

I only styled the big grid in [CATPEA DAW][3] this is a lot of work, or at least getting it off the ground initially was a lot of work. Now that I know how to structure things, things will move faster.

![Design Examples](research/gui5.png)

Fully Styled Component

Here is the [graphics programming language][4] and the [actual code of the musical form component][5] it is very compact, but there are multiple layers of programming conventions here, ew, ew.

I should add that this grid is where the user structures a part of a song, for example The Intro. Each cell in here represents about 16 notes that can be inserted. But also, once the user establishes those 16 notes, they only need to worry about lighting those buttons up, it is always the same 16 notes per row... they just select where those notes are active. And beneath this grid is a list of instruments, and places where those 16 notes go. If the user places sharp-drums as the first instruments, selects all 16 note-spots, then it will play tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk BUT ONLY IF THE cell in the thing pictured above is lit. So this grid is an activator of melodies. Which are created in the thing pictured below:

![Design Examples](research/gui6.png)

Yet Un-styled Melody Maker Component

[1]: https://getbootstrap.com/
[2]: https://svelte.dev/
[3]: /daw
[4]: https://github.com/fantasyui-com/catpea-com/blob/b79570e6459d128d3ecb79ed478ffe65fb23759c/src/style/daw/daw.scss
[5]: https://github.com/fantasyui-com/catpea-com/blob/b79570e6459d128d3ecb79ed478ffe65fb23759c/src/components/song-machine/Form.svelte