<?php

define ('ROOT_PATH', dirname(__DIR__));
ini_set('display_errors', 'on');
ini_set('html_errors', 'on');
set_time_limit(300);

// Include vendor
// require ROOT_PATH . "/vendor/autoload.php";

/* Include loader */
include ROOT_PATH . "/lib/Runtime/php/loader.php";

/* Include enviroments */
$env = include ROOT_PATH . "/env.php";

/* Run app */
$loader = ( new Loader() )
	->addIncludePath( ROOT_PATH . "/lib" )
	->addIncludePath( ROOT_PATH . "/src" )
	->setEnv($env)
	->setMainModule("App")
	->setEntryPoint("Runtime.Web.Backend.CGI")
	->run();

exit($loader->exit_code);
