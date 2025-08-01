@ECHO OFF
REM  joomgallery image parameter list
REM %1 image id
REM %2 line length restriction on output
CLS

REM image id
set image_id=%1

if "%~1"=="" (
	set image_id=4
)

REM REM line length restriction on output
REM set max_length=%2
REM if  "%~2"=="" (
	REM set max_length=90
REM )

ECHO.
ECHO --- php joomla.php joomgallery:image:parameters  --id=%image_id%
REM --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:image:parameters  --id=%image_id% 
REM --max_line_length=%max_length%

