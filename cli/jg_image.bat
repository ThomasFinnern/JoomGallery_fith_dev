@ECHO OFF
REM  show a joomgallery image
REM %1 image id
REM %2 line length restriction on output
CLS

REM category id
set image_id=%1

if "%~1"=="" (
	set image_id=10
)

REM line length restriction on output
set max_length=%2
if  "%~2"=="" (
	set max_length=90
)

ECHO.
ECHO --- php joomla.php joomgallery:image  --id=%image_id% --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:image  --id=%image_id% --max_line_length=%max_length%

