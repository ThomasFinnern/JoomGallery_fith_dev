@ECHO OFF
REM  list a joomgallery config list
REM %1 category id
REM %2 line length restriction on output
CLS

REM category id
set cat_id=%1

if "%~1"=="" (
	set cat_id=20
)

REM line length restriction on output
set max_length=%2
if  "%~2"=="" (
	set max_length=90
)

ECHO.
ECHO --- php joomla.php joomgallery:category  --id=%cat_id% --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:category  --id=%cat_id% --max_line_length=%max_length%

