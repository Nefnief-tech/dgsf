<?php
$cookiename = $_POST['cookiename'];
$cookievalue = urldecode($_POST['cookievalue']);
$encodedvalue = json_encode( $cookievalue );

//$expire = time()+60*60*24*60; // 60 days
$expire = 60*60*24*60; // 60 days
$cookiestring = "";

if ( strpos($cookiename, 'zp_consent') === 0 ){
	// header("Set-Cookie: {$cookiename}={$cookievalue}; Max-Age={$expire}; Path=/");
	setcookie($cookiename, $cookievalue, time()+$expire, '/');
	$cookiestring = "$cookiename=$cookievalue, $expire, '/'";
}
echo '{"success":true, "cookiestring": "' . $cookiestring . '"}';
?>
