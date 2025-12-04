@ECHO OFF
REM -----------------------------------------------------
REM Check joomgallery code style by phpcs
REM calling cbf (jg_checkCodeBy_cs_cbf.bat)
REM -----------------------------------------------------
REM 
REM 
REM -----------------------------------------------------

CLS

ECHO ----------------------------------------------
ECHO Check joomgallery code style by phpcs
ECHO ----------------------------------------------
REM ECHO.

REM -----------------------------------------------------
REM Check if PHP is available

ECHO php check

php --version >NUL
if errorlevel 1 (
	ECHO.
	ECHO Actual environment PATH:
	ECHO "%path%"
	ECHO.
	ECHO Please add the path to php.exe to path variable  
	ECHO using "set PATH=%%PATH%%;C:\your\path\here\"
	GOTO :EOF
	ECHO.
)

REM -----------------------------------------------------
REM keep actual directory for log files
set "actualPath=%cd%"
ECHO  - 'actualPath "%actualPath%"'

REM -----------------------------------------------------
REM jg_basePath to the repository
REM 
REM set jg_basePath=..\
set jg_basePath=..\..\JoomGallery
if NOT %1A==A (
 	set jg_basePath=%1
)
ECHO  - 'jg base path "%jg_basePath%"'

REM -----------------------------------------------------
REM Move to jg_basePath 

pushd  %jg_basePath%
ECHO Moved to path: %cd% 

REM =====================================================
REM call "phpcs"

ECHO ----------------------------------------------
ECHO call "phpcbf"
ECHO    may take some time 

ECHO php ./administrator/com_joomgallery/vendor/bin/phps --standard=ruleset.xml .\ 
php ./administrator/com_joomgallery/vendor/bin/phpcs --standard=ruleset.xml .\ 
REM if errorlevel 1 (
REM 	ECHO Error on calling phpcbf (02)
REM 	goto :ErrorBack
REM )	
ECHO.

REM -----------------------------------------------------
REM Move back 

:MoveBack
popd
ECHO.
ECHO Done and moved back to path: %cd% 
ECHO.
GOTO :EOF

:ErrorBack
popd
ECHO.
ECHO !!! Error found !!!
ECHO and moved back to path: %cd% 
ECHO.
GOTO :EOF

