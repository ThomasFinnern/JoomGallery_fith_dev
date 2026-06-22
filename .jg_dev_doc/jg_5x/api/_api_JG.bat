@ECHO OFF
REM CLS
ECHO --- _api_JG.bat ---------------------------
ECHO.

REM does use the python plugin markdown-pp to collect 
REM all *.md files and create RSGallery2.Documentation.md
REM file. 
REM In Atom use the plugin markdown to PDF to create the matching *.PDF

markdown-pp _api_JG.mdpp -o _api_JG.md -e latexrender

ECHO Done
ECHO.

