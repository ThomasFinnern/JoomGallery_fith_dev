<?php
/** Test 01: read joomla version */

print '=== Test 01 ============================' . "\n";

// https://yourdomain.com/api/v1/cms/version/:option

$response = file_get_contents('http://127.0.0.1/Joomla5x/api/v1/cms/version/:option');

// Json 
//if $response is JSON, use json_decode to turn it into php array:
$response = json_decode($response);

$response_pretty = json_encode($response, JSON_PRETTY_PRINT);
print ( $response_pretty);

// XML 
//if $response is XML, use simple_xml class:
// $response = new SimpleXMLElement($response);

