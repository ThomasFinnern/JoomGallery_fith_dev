@ECHO OFF
REM GET joomgallery configuration variable
REM %1 config id
REM %2 variable name
CLS

REM category id
set config_id=%1

if "%~1"=="" (
	set config_id=1
)

REM line length restriction on output
set variable=%2
if  "%~2"=="" (
	set variable=published
)

ECHO.
ECHO --- php joomla.php joomgallery:config:get  --id=%config_id% %variable%
ECHO.

ECHO ON
php joomla.php joomgallery:config:get  --id=%config_id% %variable%

