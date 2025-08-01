@ECHO OFF
REM  list a joomgallery configuration variables
REM %1 config id
REM %2 line length restriction on output
CLS

REM category id
set config_id=%1

if "%~1"=="" (
	set config_id=1
)

REM line length restriction on output
set max_length=%2
if  "%~2"=="" (
	set max_length=90
)

ECHO.
ECHO --- php joomla.php joomgallery:config  --id=%config_id% --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:config  --id=%config_id% --max_line_length=%max_length%

