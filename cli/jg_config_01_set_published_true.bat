@ECHO OFF
REM GET joomgallery configuration variable
REM %1 config id
REM %2 variable name
REM %2 variable value
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

REM line length restriction on output
set value=%3
if  "%~3"=="" (
	set value=true
)

ECHO.
ECHO --- php joomla.php joomgallery:config:set --id=%config_id% %variable% %value% --verify=true
ECHO.
ECHO ON
php joomla.php joomgallery:config:set --id=%config_id% %variable%  %value% --verify=true
REM php joomla.php joomgallery:config:set --id=%config_id% %variable%  %value%

