fx_version 'cerulean'
game 'gta5'
author "v42"
description "Custom loading screen by v42"

client_script 'client/cl_main.lua'

files {
    'ui/index.html',
    'ui/assets/css/main.css',
    'ui/assets/img/*.png',
    'ui/assets/js/main.js',
    'ui/assets/js/config.js',
    'ui/assets/css/gravity.woff2',
    'ui/assets/songs/*.mp3',
    'ui/assets/img/*.mp4',
}

loadscreen 'ui/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
