@ECHO OFF
REM -----------------------------------------------------
REM Fix joomgallery code style (jg_fixCodeStyle.bat)
REM -----------------------------------------------------
REM This batch calls following task succession to apply 
REM JG defined codestyle
REM "php-cs-fixer" "phpcbf"  "php-cs-fixer"
REM 
REM the base path to the repository may be given as the 
REM first argument. It will be used with pushd/popd. So 
REM if something runs wrong you may be stuck on the wrong 
REM folder. Then use popd to get back ;-)
REM 
REM -----------------------------------------------------

CLS

ECHO ----------------------------------------------
ECHO Fix joomgallery code style
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
REM 01 call "php-cs-fixer"

ECHO ----------------------------------------------
ECHO 01 call "php-cs-fixer"
ECHO    log file 01.php-cs-fixer.log
ECHO    may take some time 

ECHO php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer --verbose --config=.\.php-cs-fixer.dist.php fix .\ 
php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer --verbose --config=.\.php-cs-fixer.dist.php fix .\ >%actualPath%\01.php-cs-fixer.log
REM if errorlevel 1 (
REM 	ECHO Error on calling php-cs-fixer (01)
REM 	goto :ErrorBack
REM )	
ECHO.

REM =====================================================
REM 02 call "phpcbf"

ECHO ----------------------------------------------
ECHO 02 call "phpcbf"
ECHO    log file 02.phpcbf.log
ECHO    may take some time 

ECHO php ./administrator/com_joomgallery/vendor/bin/phpcbf -v --standard=ruleset.xml .\ 
php ./administrator/com_joomgallery/vendor/bin/phpcbf -v --standard=ruleset.xml .\ >%actualPath%\02.phpcbf.log
REM if errorlevel 1 (
REM 	ECHO Error on calling phpcbf (02)
REM 	goto :ErrorBack
REM )	
ECHO.

REM =====================================================
REM 03 call "php-cs-fixer" 

ECHO ----------------------------------------------
ECHO 03 call "php-cs-fixer" 
ECHO    log file 03.php-cs-fixer.log
ECHO    may take some time 

ECHO php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer --verbose --config=.\.php-cs-fixer.dist.php fix .\ 
php ./administrator/com_joomgallery/vendor/bin/php-cs-fixer --verbose --config=.\.php-cs-fixer.dist.php fix .\ >%actualPath%\03.php-cs-fixer.log

REM may not be needed but for additional code added later 
REM if errorlevel 1 (
REM 	ECHO Error on calling php-cs-fixer (03)
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

