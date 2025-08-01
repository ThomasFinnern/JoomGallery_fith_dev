@ECHO OFF
REM  list a joomgallery category
REM %1 category id
REM %2 line length restriction on output
CLS

REM category id
set cat_id=%1

if "%~1"=="" (
	set cat_id=2
)

REM REM line length restriction on output
REM set max_length=%2
REM if  "%~2"=="" (
	REM set max_length=90
REM )

ECHO.
ECHO --- php joomla.php joomgallery:category:parameters  --id=%cat_id%
REM --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:category:parameters  --id=%cat_id% 
REM --max_line_length=%max_length%

