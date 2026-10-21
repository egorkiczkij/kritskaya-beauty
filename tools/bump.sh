#!/bin/sh
# Новая метка версии: телефоны сразу берут свежие файлы, а открытые старые копии сами перезагружаются
v=$(date +%s)
sed -i "s|styles.css?v=[0-9]*|styles.css?v=$v|; s|config.js?v=[0-9]*|config.js?v=$v|; s|app.js?v=[0-9]*|app.js?v=$v|; s|thumbs.js?v=[0-9]*|thumbs.js?v=$v|; s|<meta name=\"build\" content=\"[0-9]*\">|<meta name=\"build\" content=\"$v\">|" index.html
echo "$v" > version.txt
echo "$v"
