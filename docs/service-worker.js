!function(){"use strict";const s=["client/index.6f7f13ce.js","client/index.03485293.js","client/Tail.a6404313.js","client/index.8a171285.js","client/[post].928172cc.js","client/Flip.329977ee.js","client/[post].735027c6.js","client/Post.2504bd86.js","client/index.82da3dba.js","client/client.9b801bfa.js","client/index.522b2d3a.js","client/old-radio.7b2fe98b.js","client/[post].0a7a37bf.js","client/index.c8ae1340.js","client/radio.298b906b.js","client/client.891d4d31.js"].concat(["service-worker-index.html","audio/poetry-0028.mp3","audio/poetry-0029.mp3","audio/poetry-0030.mp3","audio/poetry-0031.mp3","audio/poetry-0032.mp3","audio/poetry-0033.mp3","audio/poetry-0034.mp3","audio/poetry-0035.mp3","audio/poetry-0036.mp3","audio/poetry-0037.mp3","audio/poetry-0038.mp3","audio/poetry-0039.mp3","audio/poetry-0040.mp3","audio/poetry-0041.mp3","audio/poetry-0042.mp3","audio/poetry-0043.mp3","audio/poetry-0044.mp3","audio/poetry-0045.mp3","audio/poetry-0046.mp3","audio/poetry-0047.mp3","audio/poetry-0048.mp3","audio/poetry-0049.mp3","audio/poetry-0050.mp3","audio/poetry-0051.mp3","audio/poetry-0052.mp3","audio/poetry-0053.mp3","audio/poetry-0054.mp3","audio/poetry-0055.mp3","audio/poetry-0056.mp3","audio/poetry-0057.mp3","audio/poetry-0058.mp3","audio/poetry-0059.mp3","audio/poetry-0060.mp3","audio/poetry-0061.mp3","audio/poetry-0062.mp3","audio/poetry-0063.mp3","audio/poetry-0064.mp3","audio/poetry-0065.mp3","audio/poetry-0066.mp3","audio/poetry-0067.mp3","audio/poetry-0068.mp3","audio/poetry-0069.mp3","audio/poetry-0070.mp3","audio/poetry-0071.mp3","audio/poetry-0072.mp3","audio/poetry-0073.mp3","audio/poetry-0074.mp3","audio/poetry-0075.mp3","audio/poetry-0076.mp3","audio/poetry-0077.mp3","audio/poetry-0078-2.mp3","audio/poetry-0078.mp3","audio/poetry-0079.mp3","audio/poetry-0080.mp3","audio/poetry-0081.mp3","audio/poetry-0082.mp3","audio/poetry-0083.mp3","audio/poetry-0084.mp3","audio/poetry-0085.mp3","css/pico.classless-1.0.2.min.css","database.json","favicon.png","global.css","icons/alarm-fill.svg","icons/alarm.svg","icons/alt.svg","icons/app-indicator.svg","icons/app.svg","icons/archive-fill.svg","icons/archive.svg","icons/arrow-90deg-down.svg","icons/arrow-90deg-left.svg","icons/arrow-90deg-right.svg","icons/arrow-90deg-up.svg","icons/arrow-bar-down.svg","icons/arrow-bar-left.svg","icons/arrow-bar-right.svg","icons/arrow-bar-up.svg","icons/arrow-clockwise.svg","icons/arrow-counterclockwise.svg","icons/arrow-down-left.svg","icons/arrow-down-right.svg","icons/arrow-down-short.svg","icons/arrow-down.svg","icons/arrow-left-right.svg","icons/arrow-left-short.svg","icons/arrow-left.svg","icons/arrow-repeat.svg","icons/arrow-return-left.svg","icons/arrow-return-right.svg","icons/arrow-right-short.svg","icons/arrow-right.svg","icons/arrow-up-down.svg","icons/arrow-up-left.svg","icons/arrow-up-right.svg","icons/arrow-up-short.svg","icons/arrow-up.svg","icons/arrows-angle-contract.svg","icons/arrows-angle-expand.svg","icons/arrows-collapse.svg","icons/arrows-expand.svg","icons/arrows-fullscreen.svg","icons/arrows-move.svg","icons/aspect-ratio-fill.svg","icons/aspect-ratio.svg","icons/at.svg","icons/award-fill.svg","icons/award.svg","icons/backspace-fill.svg","icons/backspace-reverse-fill.svg","icons/backspace-reverse.svg","icons/backspace.svg","icons/bag-fill.svg","icons/bag.svg","icons/bar-chart-fill.svg","icons/bar-chart.svg","icons/battery-charging.svg","icons/battery-full.svg","icons/battery-half.svg","icons/battery.svg","icons/bell-fill.svg","icons/bell.svg","icons/blockquote-left.svg","icons/blockquote-right.svg","icons/book-half.svg","icons/book.svg","icons/bookmark-check.svg","icons/bookmark-dash.svg","icons/bookmark-fill.svg","icons/bookmark-plus.svg","icons/bookmark.svg","icons/bookmarks-fill.svg","icons/bookmarks.svg","icons/bootstrap-fill.svg","icons/bootstrap-reboot.svg","icons/bootstrap.svg","icons/bounding-box-circles.svg","icons/bounding-box.svg","icons/box-arrow-down-left.svg","icons/box-arrow-down-right.svg","icons/box-arrow-down.svg","icons/box-arrow-in-down-left.svg","icons/box-arrow-in-down-right.svg","icons/box-arrow-in-down.svg","icons/box-arrow-in-left.svg","icons/box-arrow-in-right.svg","icons/box-arrow-in-up-left.svg","icons/box-arrow-in-up-right.svg","icons/box-arrow-in-up.svg","icons/box-arrow-left.svg","icons/box-arrow-right.svg","icons/box-arrow-up-left.svg","icons/box-arrow-up-right.svg","icons/box-arrow-up.svg","icons/braces.svg","icons/briefcase-fill.svg","icons/briefcase.svg","icons/brightness-alt-high-fill.svg","icons/brightness-alt-high.svg","icons/brightness-alt-low-fill.svg","icons/brightness-alt-low.svg","icons/brightness-high-fill.svg","icons/brightness-high.svg","icons/brightness-low-fill.svg","icons/brightness-low.svg","icons/brush.svg","icons/bucket-fill.svg","icons/bucket.svg","icons/building.svg","icons/bullseye.svg","icons/calendar-fill.svg","icons/calendar.svg","icons/camera-video-fill.svg","icons/camera-video.svg","icons/camera.svg","icons/capslock-fill.svg","icons/capslock.svg","icons/card-checklist.svg","icons/card-heading.svg","icons/card-image.svg","icons/card-list.svg","icons/card-text.svg","icons/caret-down-fill.svg","icons/caret-down.svg","icons/caret-left-fill.svg","icons/caret-left.svg","icons/caret-right-fill.svg","icons/caret-right.svg","icons/caret-up-fill.svg","icons/caret-up.svg","icons/chat-dots-fill.svg","icons/chat-dots.svg","icons/chat-fill.svg","icons/chat-quote-fill.svg","icons/chat-quote.svg","icons/chat-square-dots-fill.svg","icons/chat-square-dots.svg","icons/chat-square-fill.svg","icons/chat-square-quote-fill.svg","icons/chat-square-quote.svg","icons/chat-square.svg","icons/chat.svg","icons/check-all.svg","icons/check-box.svg","icons/check-circle.svg","icons/check.svg","icons/chevron-bar-contract.svg","icons/chevron-bar-down.svg","icons/chevron-bar-expand.svg","icons/chevron-bar-left.svg","icons/chevron-bar-right.svg","icons/chevron-bar-up.svg","icons/chevron-compact-down.svg","icons/chevron-compact-left.svg","icons/chevron-compact-right.svg","icons/chevron-compact-up.svg","icons/chevron-contract.svg","icons/chevron-double-down.svg","icons/chevron-double-left.svg","icons/chevron-double-right.svg","icons/chevron-double-up.svg","icons/chevron-down.svg","icons/chevron-expand.svg","icons/chevron-left.svg","icons/chevron-right.svg","icons/chevron-up.svg","icons/circle-fill.svg","icons/circle-half.svg","icons/circle-square.svg","icons/circle.svg","icons/clipboard-data.svg","icons/clipboard.svg","icons/clock-fill.svg","icons/clock-history.svg","icons/clock.svg","icons/cloud-download.svg","icons/cloud-fill.svg","icons/cloud-upload.svg","icons/cloud.svg","icons/code-slash.svg","icons/code.svg","icons/collection-fill.svg","icons/collection-play-fill.svg","icons/collection-play.svg","icons/collection.svg","icons/columns-gap.svg","icons/columns.svg","icons/command.svg","icons/compass.svg","icons/cone-striped.svg","icons/cone.svg","icons/controller.svg","icons/credit-card.svg","icons/crop.svg","icons/cursor-fill.svg","icons/cursor-text.svg","icons/cursor.svg","icons/dash-circle-fill.svg","icons/dash-circle.svg","icons/dash-square-fill.svg","icons/dash-square.svg","icons/dash.svg","icons/diamond-fill.svg","icons/diamond-half.svg","icons/diamond.svg","icons/display-fill.svg","icons/display.svg","icons/dot.svg","icons/download.svg","icons/droplet-fill.svg","icons/droplet-half.svg","icons/droplet.svg","icons/egg-fill.svg","icons/egg-fried.svg","icons/egg.svg","icons/eject-fill.svg","icons/eject.svg","icons/envelope-fill.svg","icons/envelope-open-fill.svg","icons/envelope-open.svg","icons/envelope.svg","icons/exclamation-circle-fill.svg","icons/exclamation-circle.svg","icons/exclamation-diamond-fill.svg","icons/exclamation-diamond.svg","icons/exclamation-octagon-fill.svg","icons/exclamation-octagon.svg","icons/exclamation-square-fill.svg","icons/exclamation-square.svg","icons/exclamation-triangle-fill.svg","icons/exclamation-triangle.svg","icons/exclamation.svg","icons/exclude.svg","icons/eye-fill.svg","icons/eye-slash-fill.svg","icons/eye-slash.svg","icons/eye.svg","icons/file-arrow-down.svg","icons/file-arrow-up.svg","icons/file-break.svg","icons/file-check.svg","icons/file-code.svg","icons/file-diff.svg","icons/file-earmark-arrow-down.svg","icons/file-earmark-arrow-up.svg","icons/file-earmark-break.svg","icons/file-earmark-check.svg","icons/file-earmark-code.svg","icons/file-earmark-diff.svg","icons/file-earmark-minus.svg","icons/file-earmark-plus.svg","icons/file-earmark-ruled.svg","icons/file-earmark-spreadsheet.svg","icons/file-earmark-text.svg","icons/file-earmark-zip.svg","icons/file-earmark.svg","icons/file-minus.svg","icons/file-plus.svg","icons/file-post.svg","icons/file-richtext.svg","icons/file-ruled.svg","icons/file-spreadsheet.svg","icons/file-text.svg","icons/file-zip.svg","icons/file.svg","icons/files-alt.svg","icons/files.svg","icons/film.svg","icons/filter-left.svg","icons/filter-right.svg","icons/filter.svg","icons/flag-fill.svg","icons/flag.svg","icons/folder-check.svg","icons/folder-fill.svg","icons/folder-minus.svg","icons/folder-plus.svg","icons/folder-symlink-fill.svg","icons/folder-symlink.svg","icons/folder.svg","icons/fonts.svg","icons/forward-fill.svg","icons/forward.svg","icons/fullscreen-exit.svg","icons/fullscreen.svg","icons/funnel-fill.svg","icons/funnel.svg","icons/gear-fill.svg","icons/gear-wide-connected.svg","icons/gear-wide.svg","icons/gear.svg","icons/gem.svg","icons/geo-alt.svg","icons/geo.svg","icons/gift-fill.svg","icons/gift.svg","icons/graph-down.svg","icons/graph-up.svg","icons/grid-1x2-fill.svg","icons/grid-1x2.svg","icons/grid-3x2-gap-fill.svg","icons/grid-3x2-gap.svg","icons/grid-3x2.svg","icons/grid-3x3-gap-fill.svg","icons/grid-3x3-gap.svg","icons/grid-3x3.svg","icons/grid-fill.svg","icons/grid.svg","icons/hammer.svg","icons/hash.svg","icons/heart-fill.svg","icons/heart-half.svg","icons/heart.svg","icons/house-door-fill.svg","icons/house-door.svg","icons/house-fill.svg","icons/house.svg","icons/hr.svg","icons/image-alt.svg","icons/image-fill.svg","icons/image.svg","icons/images.svg","icons/inbox-fill.svg","icons/inbox.svg","icons/inboxes-fill.svg","icons/inboxes.svg","icons/info-circle-fill.svg","icons/info-circle.svg","icons/info-square-fill.svg","icons/info-square.svg","icons/info.svg","icons/intersect.svg","icons/justify-left.svg","icons/justify-right.svg","icons/justify.svg","icons/kanban-fill.svg","icons/kanban.svg","icons/laptop.svg","icons/layers-fill.svg","icons/layers-half.svg","icons/layers.svg","icons/layout-sidebar-inset-reverse.svg","icons/layout-sidebar-inset.svg","icons/layout-sidebar-reverse.svg","icons/layout-sidebar.svg","icons/layout-split.svg","icons/layout-text-sidebar-reverse.svg","icons/layout-text-sidebar.svg","icons/layout-text-window-reverse.svg","icons/layout-text-window.svg","icons/layout-three-columns.svg","icons/layout-wtf.svg","icons/life-preserver.svg","icons/lightning-fill.svg","icons/lightning.svg","icons/link-45deg.svg","icons/link.svg","icons/list-check.svg","icons/list-nested.svg","icons/list-ol.svg","icons/list-task.svg","icons/list-ul.svg","icons/list.svg","icons/lock-fill.svg","icons/lock.svg","icons/map.svg","icons/mic-fill.svg","icons/mic-mute-fill.svg","icons/mic-mute.svg","icons/mic.svg","icons/moon.svg","icons/music-note-beamed.svg","icons/music-note-list.svg","icons/music-note.svg","icons/music-player-fill.svg","icons/music-player.svg","icons/newspaper.svg","icons/octagon-fill.svg","icons/octagon-half.svg","icons/octagon.svg","icons/option.svg","icons/outlet.svg","icons/paperclip.svg","icons/pause-fill.svg","icons/pause.svg","icons/pen.svg","icons/pencil-square.svg","icons/pencil.svg","icons/pentagon-fill.svg","icons/pentagon-half.svg","icons/pentagon.svg","icons/people-circle.svg","icons/people-fill.svg","icons/people.svg","icons/person-bounding-box.svg","icons/person-check-fill.svg","icons/person-check.svg","icons/person-dash-fill.svg","icons/person-dash.svg","icons/person-fill.svg","icons/person-lines-fill.svg","icons/person-plus-fill.svg","icons/person-plus.svg","icons/person-square.svg","icons/person.svg","icons/phone-landscape.svg","icons/phone.svg","icons/pie-chart-fill.svg","icons/pie-chart.svg","icons/pip-fill.svg","icons/pip.svg","icons/play-fill.svg","icons/play.svg","icons/plug.svg","icons/plus-circle-fill.svg","icons/plus-circle.svg","icons/plus-square-fill.svg","icons/plus-square.svg","icons/plus.svg","icons/power.svg","icons/puzzle-fill.svg","icons/puzzle.svg","icons/question-circle-fill.svg","icons/question-circle.svg","icons/question-diamond-fill.svg","icons/question-diamond.svg","icons/question-octagon-fill.svg","icons/question-octagon.svg","icons/question-square-fill.svg","icons/question-square.svg","icons/question.svg","icons/reply-all-fill.svg","icons/reply-all.svg","icons/reply-fill.svg","icons/reply.svg","icons/screwdriver.svg","icons/search.svg","icons/server.svg","icons/shield-fill.svg","icons/shield-lock-fill.svg","icons/shield-lock.svg","icons/shield-shaded.svg","icons/shield.svg","icons/shift-fill.svg","icons/shift.svg","icons/shuffle.svg","icons/skip-backward-fill.svg","icons/skip-backward.svg","icons/skip-end-fill.svg","icons/skip-end.svg","icons/skip-forward-fill.svg","icons/skip-forward.svg","icons/skip-start-fill.svg","icons/skip-start.svg","icons/slash-circle-fill.svg","icons/slash-circle.svg","icons/slash-square-fill.svg","icons/slash-square.svg","icons/slash.svg","icons/sliders.svg","icons/soundwave.svg","icons/speaker.svg","icons/square-fill.svg","icons/square-half.svg","icons/square.svg","icons/squirrel.svg","icons/star-fill.svg","icons/star-half.svg","icons/star.svg","icons/stop-fill.svg","icons/stop.svg","icons/stopwatch-fill.svg","icons/stopwatch.svg","icons/subtract.svg","icons/sun.svg","icons/table.svg","icons/tablet-landscape.svg","icons/tablet.svg","icons/tag-fill.svg","icons/tag.svg","icons/terminal-fill.svg","icons/terminal.svg","icons/text-center.svg","icons/text-indent-left.svg","icons/text-indent-right.svg","icons/text-left.svg","icons/text-right.svg","icons/textarea-t.svg","icons/textarea.svg","icons/three-dots-vertical.svg","icons/three-dots.svg","icons/toggle-off.svg","icons/toggle-on.svg","icons/toggles.svg","icons/tools.svg","icons/trash-fill.svg","icons/trash.svg","icons/trash2-fill.svg","icons/trash2.svg","icons/triangle-fill.svg","icons/triangle-half.svg","icons/triangle.svg","icons/trophy.svg","icons/tv-fill.svg","icons/tv.svg","icons/type-bold.svg","icons/type-h1.svg","icons/type-h2.svg","icons/type-h3.svg","icons/type-italic.svg","icons/type-strikethrough.svg","icons/type-underline.svg","icons/type.svg","icons/union.svg","icons/unlock-fill.svg","icons/unlock.svg","icons/upload.svg","icons/view-list.svg","icons/view-stacked.svg","icons/volume-down-fill.svg","icons/volume-down.svg","icons/volume-mute-fill.svg","icons/volume-mute.svg","icons/volume-up-fill.svg","icons/volume-up.svg","icons/vr.svg","icons/wallet.svg","icons/watch.svg","icons/wifi.svg","icons/window.svg","icons/wrench.svg","icons/x-circle-fill.svg","icons/x-circle.svg","icons/x-diamond-fill.svg","icons/x-diamond.svg","icons/x-octagon-fill.svg","icons/x-octagon.svg","icons/x-square-fill.svg","icons/x-square.svg","icons/x.svg","image/lg-poetry-0025-a.jpg","image/lg-poetry-0025-b.jpg","image/lg-poetry-0025-c.jpg","image/lg-poetry-0025-f.jpg","image/lg-poetry-0025-h.jpg","image/lg-poetry-0025-i.jpg","image/lg-poetry-0025-j.jpg","image/lg-poetry-0025-k.jpg","image/lg-poetry-0025-l.jpg","image/lg-poetry-0025-m.jpg","image/lg-poetry-0025-t.jpg","image/lg-poetry-0025-x.jpg","image/lg-poetry-0051-illustration.jpg","image/lg-poetry-0052-illustration.jpg","image/lg-poetry-0054-illustration.jpg","image/lg-poetry-0055-illustration.jpg","image/lg-poetry-0056-illustration.jpg","image/lg-poetry-0057-illustration.jpg","image/lg-poetry-0060-illustration.jpg","image/lg-poetry-0060-ozymandias.jpg","image/lg-poetry-0063-art.jpg","image/lg-poetry-0063-cold.jpg","image/lg-poetry-0063-deer.jpg","image/lg-poetry-0063-illustration.jpg","image/lg-poetry-0063-mist.jpg","image/lg-poetry-0063-perfect.jpg","image/lg-poetry-0063-seagull.jpg","image/lg-poetry-0064-illustration.jpg","image/lg-poetry-0066-illustration.jpg","image/lg-poetry-0066-starscape.jpg","image/lg-poetry-0067-illustration.jpg","image/lg-poetry-0068-illustration.jpg","image/lg-poetry-0068-mud.jpg","image/lg-poetry-0068-noclothes.jpg","image/lg-poetry-0069-illustration.jpg","image/lg-poetry-0070-illustration.jpg","image/lg-poetry-0070-nurnberg.jpg","image/lg-poetry-0071-illustration.jpg","image/lg-poetry-0071-thinker.jpg","image/lg-poetry-0072-illustration.jpg","image/lg-poetry-0073-illustration.jpg","image/lg-poetry-0074-illustration.jpg","image/lg-poetry-0074-waiting.jpg","image/lg-poetry-0075-illustration.jpg","image/lg-poetry-0075-rise.jpg","image/lg-poetry-0076-illustration.jpg","image/lg-poetry-0077-illustration.jpg","image/lg-poetry-0078-illustration.jpg","image/lg-poetry-0079-hepatia.jpg","image/lg-poetry-0079-illustration.jpg","image/lg-poetry-0079-martorano.jpg","image/lg-poetry-0079-socrates.jpg","image/lg-poetry-0079-soldier.jpg","image/lg-poetry-0080-illustration.jpg","image/lg-poetry-0081-illustration.jpg","image/lg-poetry-0082-illustration.jpg","image/lg-poetry-0083-amaze.jpg","image/lg-poetry-0083-guess.jpg","image/lg-poetry-0083-illustration.jpg","image/lg-poetry-0083-noes.jpg","image/lg-poetry-0084-illustration.jpg","image/lg-poetry-0085-illustration.jpg","image/md-poetry-0025-a.jpg","image/md-poetry-0025-b.jpg","image/md-poetry-0025-c.jpg","image/md-poetry-0025-f.jpg","image/md-poetry-0025-h.jpg","image/md-poetry-0025-i.jpg","image/md-poetry-0025-j.jpg","image/md-poetry-0025-k.jpg","image/md-poetry-0025-l.jpg","image/md-poetry-0025-m.jpg","image/md-poetry-0025-t.jpg","image/md-poetry-0025-x.jpg","image/md-poetry-0051-illustration.jpg","image/md-poetry-0052-illustration.jpg","image/md-poetry-0054-illustration.jpg","image/md-poetry-0055-illustration.jpg","image/md-poetry-0056-illustration.jpg","image/md-poetry-0057-illustration.jpg","image/md-poetry-0060-illustration.jpg","image/md-poetry-0060-ozymandias.jpg","image/md-poetry-0063-art.jpg","image/md-poetry-0063-cold.jpg","image/md-poetry-0063-deer.jpg","image/md-poetry-0063-illustration.jpg","image/md-poetry-0063-mist.jpg","image/md-poetry-0063-perfect.jpg","image/md-poetry-0063-seagull.jpg","image/md-poetry-0064-illustration.jpg","image/md-poetry-0066-illustration.jpg","image/md-poetry-0066-starscape.jpg","image/md-poetry-0067-illustration.jpg","image/md-poetry-0068-illustration.jpg","image/md-poetry-0068-mud.jpg","image/md-poetry-0068-noclothes.jpg","image/md-poetry-0069-illustration.jpg","image/md-poetry-0070-illustration.jpg","image/md-poetry-0070-nurnberg.jpg","image/md-poetry-0071-illustration.jpg","image/md-poetry-0071-thinker.jpg","image/md-poetry-0072-illustration.jpg","image/md-poetry-0073-illustration.jpg","image/md-poetry-0074-illustration.jpg","image/md-poetry-0074-waiting.jpg","image/md-poetry-0075-illustration.jpg","image/md-poetry-0075-rise.jpg","image/md-poetry-0076-illustration.jpg","image/md-poetry-0077-illustration.jpg","image/md-poetry-0078-illustration.jpg","image/md-poetry-0079-hepatia.jpg","image/md-poetry-0079-illustration.jpg","image/md-poetry-0079-martorano.jpg","image/md-poetry-0079-socrates.jpg","image/md-poetry-0079-soldier.jpg","image/md-poetry-0080-illustration.jpg","image/md-poetry-0081-illustration.jpg","image/md-poetry-0082-illustration.jpg","image/md-poetry-0083-amaze.jpg","image/md-poetry-0083-guess.jpg","image/md-poetry-0083-illustration.jpg","image/md-poetry-0083-noes.jpg","image/md-poetry-0084-illustration.jpg","image/md-poetry-0085-illustration.jpg","image/poetry-0025-a.jpg","image/poetry-0025-b.jpg","image/poetry-0025-c.jpg","image/poetry-0025-f.jpg","image/poetry-0025-h.jpg","image/poetry-0025-i.jpg","image/poetry-0025-j.jpg","image/poetry-0025-k.jpg","image/poetry-0025-l.jpg","image/poetry-0025-m.jpg","image/poetry-0025-t.jpg","image/poetry-0025-x.jpg","image/poetry-0051-illustration.jpg","image/poetry-0051-illustration.png","image/poetry-0052-illustration.jpg","image/poetry-0054-illustration.jpg","image/poetry-0055-illustration.jpg","image/poetry-0056-illustration.jpg","image/poetry-0057-illustration.jpg","image/poetry-0060-illustration.jpg","image/poetry-0060-illustration.png","image/poetry-0060-ozymandias.jpg","image/poetry-0063-art.jpg","image/poetry-0063-cold.jpg","image/poetry-0063-deer.jpg","image/poetry-0063-illustration.jpg","image/poetry-0063-mist.jpg","image/poetry-0063-perfect.jpg","image/poetry-0063-seagull.jpg","image/poetry-0064-illustration.jpg","image/poetry-0066-illustration.jpg","image/poetry-0066-starscape.jpg","image/poetry-0067-illustration.jpg","image/poetry-0068-illustration.jpg","image/poetry-0068-mud.jpg","image/poetry-0068-noclothes.jpg","image/poetry-0069-illustration.jpg","image/poetry-0070-illustration.jpg","image/poetry-0070-nurnberg.jpg","image/poetry-0071-illustration.jpg","image/poetry-0071-thinker.jpg","image/poetry-0072-illustration.jpg","image/poetry-0073-illustration.jpg","image/poetry-0074-illustration.jpg","image/poetry-0074-waiting.jpg","image/poetry-0075-illustration.jpg","image/poetry-0075-rise.jpg","image/poetry-0076-illustration.jpg","image/poetry-0077-illustration.jpg","image/poetry-0078-illustration.jpg","image/poetry-0079-hepatia.jpg","image/poetry-0079-illustration.jpg","image/poetry-0079-martorano.jpg","image/poetry-0079-socrates.jpg","image/poetry-0079-soldier.jpg","image/poetry-0080-illustration.jpg","image/poetry-0081-illustration.jpg","image/poetry-0082-illustration.jpg","image/poetry-0083-amaze.jpg","image/poetry-0083-guess.jpg","image/poetry-0083-illustration.jpg","image/poetry-0083-noes.jpg","image/poetry-0084-illustration.jpg","image/poetry-0085-illustration.jpg","image/research-0001-squirrel.png","image/research-0010-squirrel.png","image/research-0020-gui1.png","image/research-0021-squirrel.svg","image/research-0033-megaphone.svg","image/research-0033-piano.png","image/research-0037-daw.jpg","image/research-0043-unselections.png","image/research-0044-sequencer.png","image/research-0046-smart-color.png","image/research-0052-gui2.png","image/research-0052-gui3.png","image/research-0055-wee.png","image/research-0060-gui5.png","image/research-0060-gui6.png","image/research-0061-desktop.png","image/research-0061-mobile.png","image/research-0066-bulb.png","image/research-0066-light-bulb.svg","image/research-0067-dexter.png","image/research-0067-pixels.png","image/research-0068-color-mixing-trial-1.png","image/research-0068-color-mixing.png","image/research-0068-hsl.png","image/research-0070-nocolor.jpg","image/research-0071-basic.png","image/research-0071-megaman.jpg","image/research-0071-mm.png","image/research-0071-overview.png","image/research-0071-real.jpg","image/research-0072-real.jpg","image/research-0072-real1.jpg","image/research-0073-designer.png","image/research-0073-real.jpg","image/research-0073-real2.png","image/research-0074-box1.png","image/research-0074-box2.png","image/research-0074-box3.png","image/research-0074-box4.png","image/research-0075-all.png","image/research-0075-icecream.jpg","image/research-0075-interesting.png","image/research-0075-real.jpg","image/research-0075-tool1.png","image/research-0077-bb.png","image/research-0077-button.png","image/research-0078-box4.png","image/research-0078-bp.png","image/research-0078-calc.png","image/research-0078-energon.jpg","image/research-0078-energon.png","image/research-0078-energon1.jpg","image/research-0078-energon1.png","image/research-0078-energon2.png","image/research-0078-real.jpg","image/research-0078-setings.png","image/research-0084-md.png","image/research-0086-news-update-1.png","image/research-0086-news-update-2.png","image/research-0086-news-update-3.png","image/research-0087-multicolor.png","image/research-0089-nojs-1.png","image/research-0089-nojs-2.png","image/research-0090-t-1.png","image/research-0090-t-2.png","image/sm-poetry-0025-a.jpg","image/sm-poetry-0025-b.jpg","image/sm-poetry-0025-c.jpg","image/sm-poetry-0025-f.jpg","image/sm-poetry-0025-h.jpg","image/sm-poetry-0025-i.jpg","image/sm-poetry-0025-j.jpg","image/sm-poetry-0025-k.jpg","image/sm-poetry-0025-l.jpg","image/sm-poetry-0025-m.jpg","image/sm-poetry-0025-t.jpg","image/sm-poetry-0025-x.jpg","image/sm-poetry-0051-illustration.jpg","image/sm-poetry-0052-illustration.jpg","image/sm-poetry-0054-illustration.jpg","image/sm-poetry-0055-illustration.jpg","image/sm-poetry-0056-illustration.jpg","image/sm-poetry-0057-illustration.jpg","image/sm-poetry-0060-illustration.jpg","image/sm-poetry-0060-ozymandias.jpg","image/sm-poetry-0063-art.jpg","image/sm-poetry-0063-cold.jpg","image/sm-poetry-0063-deer.jpg","image/sm-poetry-0063-illustration.jpg","image/sm-poetry-0063-mist.jpg","image/sm-poetry-0063-perfect.jpg","image/sm-poetry-0063-seagull.jpg","image/sm-poetry-0064-illustration.jpg","image/sm-poetry-0066-illustration.jpg","image/sm-poetry-0066-starscape.jpg","image/sm-poetry-0067-illustration.jpg","image/sm-poetry-0068-illustration.jpg","image/sm-poetry-0068-mud.jpg","image/sm-poetry-0068-noclothes.jpg","image/sm-poetry-0069-illustration.jpg","image/sm-poetry-0070-illustration.jpg","image/sm-poetry-0070-nurnberg.jpg","image/sm-poetry-0071-illustration.jpg","image/sm-poetry-0071-thinker.jpg","image/sm-poetry-0072-illustration.jpg","image/sm-poetry-0073-illustration.jpg","image/sm-poetry-0074-illustration.jpg","image/sm-poetry-0074-waiting.jpg","image/sm-poetry-0075-illustration.jpg","image/sm-poetry-0075-rise.jpg","image/sm-poetry-0076-illustration.jpg","image/sm-poetry-0077-illustration.jpg","image/sm-poetry-0078-illustration.jpg","image/sm-poetry-0079-hepatia.jpg","image/sm-poetry-0079-illustration.jpg","image/sm-poetry-0079-martorano.jpg","image/sm-poetry-0079-socrates.jpg","image/sm-poetry-0079-soldier.jpg","image/sm-poetry-0080-illustration.jpg","image/sm-poetry-0081-illustration.jpg","image/sm-poetry-0082-illustration.jpg","image/sm-poetry-0083-amaze.jpg","image/sm-poetry-0083-guess.jpg","image/sm-poetry-0083-illustration.jpg","image/sm-poetry-0083-noes.jpg","image/sm-poetry-0084-illustration.jpg","image/sm-poetry-0085-illustration.jpg","logo-192.png","logo-512.png","logo-512.xcf","manifest.json","nordhouse/a.jpg","nordhouse/b.jpg","nordhouse/c.jpg","nordhouse/f.jpg","nordhouse/h.jpg","nordhouse/i.jpg","nordhouse/j.jpg","nordhouse/k.jpg","nordhouse/l.jpg","nordhouse/m.jpg","nordhouse/t.jpg","nordhouse/x.jpg","poems/day23.mp3","poems/day24.mp3","poems/day25.mp3","poems/day26.mp3","poems/day26.txt","poems/day27.mp3","poems/day28.mp3","poems/day29.mp3","poems/day30.mp3","poems/day31.mp3","poems/day31.txt","poems/day32.mp3","poems/day32.txt","poems/day33.mp3","poems/day33.txt","poems/day34.mp3","poems/day35.mp3","poems/day36.mp3","poems/day37.mp3","poems/day38.mp3","poems/day38.txt","poems/day39.mp3","poems/day40.mp3","poems/day40b.mp3","poems/id138.mp3","poems/id139.mp3","poems/id140.mp3","poems/id141.mp3","poems/id143.jpg","poems/id143.mp3","poems/id143.png","poems/id144.jpg","poems/id144.mp3","poems/id145.md","poems/id145.mp3","poems/id146.jpg","poems/id146.mp3","poems/id147.mp3","poems/id148.jpg","poems/id148.mp3","poems/id149.jpg","poems/id149.mp3","poems/id149.txt","poems/id150.mp3","poems/id150.txt","poems/idi46.jpg","radio-header.jpg","radio-icon-a.jpg","radio-icon-b.jpg","radio-icon-c.jpg","radio-icon-d.jpg","research/aaa.png","research/aaa2.png","research/all.png","research/basic.jpg","research/basic.png","research/basics.jpg","research/bb.png","research/box1.png","research/box2.png","research/box3.png","research/box4.png","research/bp.png","research/bulb.png","research/button.png","research/calc.png","research/color-mixing-trial-1.png","research/color-mixing.png","research/daw.jpg","research/day-pixels.png","research/designer.png","research/desktop.png","research/dexter.jpg","research/dexter.png","research/energon.jpg","research/energon.png","research/energon1.jpg","research/energon1.png","research/energon2.png","research/gui1.png","research/gui2.png","research/gui3.png","research/gui5.png","research/gui6.png","research/hsl.png","research/icecream.jpg","research/interesting.png","research/md.png","research/megaman.jpg","research/mm.png","research/mobile.png","research/multicolor.png","research/news-update-1.png","research/news-update-2.png","research/news-update-3.png","research/night-pixels.png","research/nocolor.jpg","research/nocolor.png","research/nojs-1.png","research/nojs-2.png","research/overview.png","research/piano.png","research/pixels.png","research/real.jpg","research/real1.jpg","research/real2.png","research/rise.jpg","research/sequencer.png","research/setings.png","research/smart-color.png","research/squirrel.png","research/t-1.png","research/t-2.png","research/the-matrix.jpg","research/tool1.png","research/unselections.png","research/wee.png"]),i=new Set(s);self.addEventListener("install",i=>{i.waitUntil(caches.open("cache1590720382985").then(i=>i.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const i of s)"cache1590720382985"!==i&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const e=new URL(s.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&i.has(e.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1590720382985").then(async i=>{try{const e=await fetch(s.request);return i.put(s.request,e.clone()),e}catch(e){const o=await i.match(s.request);if(o)return o;throw e}}))))})}();
