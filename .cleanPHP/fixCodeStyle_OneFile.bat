@ECHO OFF
REM fixCodeStyle_OneFile.bat
REM -----------------------------------------------------
REM Fix joomgallery code style for one file or folder
REM -----------------------------------------------------
REM This batch calls following task succession to apply
REM JG defined codestyle
REM "php-cs-fixer" "phpcbf"  "php-cs-fixer"
REM
REM The base path to the repository may be given as the
REM first argument. It will be used with pushd/popd. So
REM if something runs wrong you may be stuck on the wrong
REM folder. Then use popd to get back ;-)
REM 
REM The second argument si a file or folder which should 
REM be converted
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

php --version >NUL 2>&1
IF errorlevel 1 (
	ECHO.
	ECHO Actual environment PATH:
	ECHO %path%
	ECHO.
	ECHO Please add the path to php.exe to path variable
	ECHO using "set PATH=%%PATH%%;C:\your\path\here\"
	GOTO :EOF
	ECHO.
)

REM -----------------------------------------------------
REM keep actual directory for log files
set "actualPath=%cd%"
ECHO  - 'actualPath %actualPath%'

REM -----------------------------------------------------
REM jg_basePath to the repository
REM 
set "jg_basePath=..\"
IF NOT  "%~1"=="" (
 	set "jg_basePath=%~1"
) else (
    ECHO.
    ECHO ERROR: The first argument was not found. It is 
    ECHO expected to be the path to the joomgallery root.
    ECHO The second argument is the path to the file or
	ECHO folder where the fixing shall happen.
    ECHO.
    GOTO :ErrorBack
)

ECHO  - 'jg base path %jg_basePath%'

REM -----------------------------------------------------
REM path to the file
REM 
set "jg_filePath=..\"
IF NOT  "%~2"=="" (
 	set "jg_filePath=%~2"
) else (
    ECHO.
    ECHO ERROR: The second argumten was not found. It is 
	ECHO expected a path to the file or folder where the 
	ECHO fixing shall happen.
    ECHO.
    GOTO :ErrorBack
)
ECHO  - 'jg file(s) path %jg_filePath%'

REM First argument is a existing folder ?
if NOT EXIST %jg_basePath%\ (
    ECHO.
    ECHO ERROR: The first argument is not a exising direcory 
    ECHO It is expected to be the path to the joomgallery root.
    ECHO.
    GOTO :ErrorBack
)

REM Second argument is a existing file or folder ?
REM folder ?
if NOT EXIST %jg_basePath%\ (

	REM file ?
	if NOT EXIST %jg_basePath%\ (

		ECHO.
		ECHO ERROR: The second argument is neither a exising file 
		ECHO or a direcory.
		ECHO The second argument is the path to the file or
		ECHO folder where the fixing shall happen
		ECHO.
		GOTO :ErrorBack
	)
)

REM -----------------------------------------------------
REM Move to jg_basePath

pushd  "%jg_basePath%"
ECHO Moved to path: %cd%

REM -----------------------------------------------------
REM Verify that we are in the correct working directory
REM Check for required file: joomgallery.xml
IF NOT EXIST "joomgallery.xml" (
    ECHO.
    ECHO ERROR: joomgallery.xml not found in %cd%
    ECHO This does not appear to be the JoomGallery root directory.
    ECHO Aborting to prevent accidental composer operations!
    ECHO.
    GOTO :ErrorBack
)

REM REM -----------------------------------------------------
REM REM Composer housekeeping

REM ECHO Install and update needed dependencies (composer)

REM echo "--- composer dump-autoload"
REM call composer dump-autoload
REM IF errorlevel 1 (
    REM ECHO.
    REM ECHO ERROR: composer dump-autoload failed!
    REM GOTO :ErrorBack
REM )

REM echo "--- composer install"
REM call composer install
REM IF errorlevel 1 (
    REM ECHO.
    REM ECHO ERROR: composer install failed!
    REM GOTO :ErrorBack
REM )

REM echo "--- composer update"
REM call composer update
REM IF errorlevel 1 (
    REM ECHO.
    REM ECHO ERROR: composer update failed!
    REM GOTO :ErrorBack
REM )

REM ECHO Composer tasks completed successfully.
REM ECHO.

REM =====================================================
REM 01 call "php-cs-fixer"

ECHO ----------------------------------------------
ECHO 01 call "php-cs-fixer"
ECHO    log file 01.php-cs-fixer.log
ECHO    may take some time

php ".\administrator\com_joomgallery\vendor\bin\php-cs-fixer" --verbose --config=.\.php-cs-fixer.dist.php fix %jg_filePath% >"%actualPath%\01.php-cs-fixer.log"
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

php ".\administrator\com_joomgallery\vendor\bin\phpcbf" -v --standard=ruleset.xml %jg_filePath% >"%actualPath%\02.phpcbf.log"
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

php ".\administrator\com_joomgallery\vendor\bin\php-cs-fixer" --verbose --config=.\.php-cs-fixer.dist.php fix %jg_filePath% >"%actualPath%\03.php-cs-fixer.log"
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
