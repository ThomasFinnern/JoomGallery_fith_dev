@ECHO OFF
REM GET joomgallery configuration variable dynamicprocessing part
REM %1 config id
CLS

REM category id
set config_id=%1

if "%~1"=="" (
	set config_id=1
)

ECHO.
ECHO --- php joomla.php joomgallery:config:dynamicprocessing  --id=%config_id% 
ECHO.

ECHO ON
php joomla.php joomgallery:config:dynamicprocessing  --id=%config_id% 

