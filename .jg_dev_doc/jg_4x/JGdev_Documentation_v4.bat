@ECHO OFF
REM CLS
ECHO --- JGdev_Documentation_v4.bat ---------------------------
ECHO.

REM does use the python plugin markdown-pp to collect 
REM all *.md files and create RSGallery2.Documentation.md
REM file. 
REM In Atom use the plugin markdown to PDF to create the matching *.PDF

markdown-pp JGdev_Documentation_v4.mdpp -o JGdev_Documentation_v4.md -e latexrender

ECHO Done
ECHO.