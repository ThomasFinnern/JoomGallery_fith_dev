@ECHO OFF
REM  show a joomgallery config 
REM %1 config id
REM %2 line length restriction on output
CLS

REM config id
set cnf_id=%1

if "%~1"=="" (
	set cnf_id=1
)

REM line length restriction on output
set max_length=%2
if  "%~2"=="" (
	set max_length=90
)

ECHO.
ECHO --- php joomla.php joomgallery:config  --id=%cnf_id% --max_line_length=%max_length% ---------------------
ECHO.

ECHO ON
php joomla.php joomgallery:config  --id=%cnf_id% --max_line_length=%max_length%

