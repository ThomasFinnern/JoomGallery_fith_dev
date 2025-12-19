
# modern router: missing Doc information


There is a mail to Thomas Finnern:


Betreff:
Re: "modern jg3" Router
Was ist bei "modern jg3" Router zu beachten ?
gibt es Dokumentation, wie ist die Form in der URL ?


Hallo Thomas,

Nein, dazu gibt es keine Doku.
Das hier ist gibt es zum Modern Router (default):
https://github.com/JoomGalleryfriends/JG4-dev/pull/265
und hier steht auch was zum Modern Router (default):
https://www.joomgalleryfriends.net/dokumentation/migration/information-jg3-zu-jg4.html

Zum Modern Router (JG3 flavor) habe ich noch nie was geschrieben. Aber grosse Unterschied sind die URLs zur Detailansicht der Bilder.

index.php/gallery/images/1-testimage.html?catid=1

würde mit dem Modern Router (JG3 flavor) zu 

index.php/gallery/parentcategory/subcategory/1-testimage.html

werden. Das heisst, die Kategorie-Verschachtelung ist in der URL der Bilder zu sehen.

Nein, noIds wird im Modern Router (JG3 flavor) aktuell nicht unterstützt. Insgesamt ist der JG3 flavor Router weniger ausgearbeitet.
Nein, einen zusätzlichen Parameter brauchts nicht. Der parameter ist im Router verfügbar. Er wird aktuell einfach nicht verwendet.


Ja, der JG3LegacyRoter ist mit Absicht ohne u im Namen. Dies, weil er nicht lauffähig ist. Sobald er Router im Namen hat, wird er in der Konfiguration auswählbar und verwendbar sein. Würde aktuell jedoch nur PHP errors erzeugen.


Gruss
Manuel

