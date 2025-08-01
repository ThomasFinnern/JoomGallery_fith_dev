@ECHO OFF
REM  list a joomgallery images list
CLS

REM REM category id
REM set cat_id=%1

REM if "%~1"=="" (
	REM set cat_id=20
REM )

rem rem line length restriction on output
rem set max_length=%2
rem if  "%~2"=="" (
	rem set max_length=90
rem )

REM rem line length restriction on output
REM set max_length=%1
REM if  "%~1"=="" (
	REM set max_length=90
REM )

ECHO.
ECHO --- php joomla.php joomgallery:image:list 
REM  --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:image:list 
REM --max_line_length=%max_length%

