#!/bin/sh
#http://forums.getpebble.com/discussion/7211/solved-freetype-library-not-found-using-macports-on-os-x-10-8
#sudo ln -s ~/gentoo/usr/lib/libfreetype.dylib /usr/local/lib/libfreetype.dylib
#sudo ln -s ~/gentoo/usr/include/freetype2/freetype /usr/local/include/freetype
sudo apt-get install libfreetype6
pip install freetype-py
git clone git@github.com:upverter/schematic-file-converter.git
cd schematic-file-converter/
python setup.py install
#python -m upconvert.upconverter -h
cd ~/quickbot
python -m upconvert.upconverter -i quickBot.fzz -f fritzing -o quickBot-eagle.sch -t eagle --unsupported
