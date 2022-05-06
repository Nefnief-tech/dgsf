<?php
/* $Id: standard.html 2021-07-21 14:09:12 +0000 Stefan Seiz  bb053cabed35be217326d931c127d421b0b672d5 $ */
class Configuration {
public static $conf_actionScript = 'SendEmail.php?sc';
public static $conf_requiredFields = '';
public static $conf_siteKey = '';
public static $conf_secretKey = '';
public static $conf_email_template = '<h1>Ein Formular wurde Ihnen von Ihrer Website gesendet</h1>
<p>Jemand hat Ihnen ein Formular mit den folgenden Werten 
gesendet.</p>[FORM_TABLE]';
public static $conf_smtp_useSmtp = '0';
public static $conf_smtp_servername = '';
public static $conf_smtp_username = '';
public static $conf_smtp_password = '';
public static $conf_smtp_port = '587';
public static $conf_smtp_useSsl = 'tls';
public static $conf_smtp_debug = '0';
}
?>
