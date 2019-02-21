# IBAN Generator

Easily generate fake IBAN numbers in your Sketch files.

## Usage

To use this plugin, simply access it like you access other Data plugins for Sketch.

### Random

To generate a completely random IBAN, use the **Random** option. This will return an IBAN number from any country currently using the standard.

Example: `GL35 6200 4976 6719 31`

![Random IBAN GIF](assets/iban-random.gif "Random IBAN")

### Specific country

To generate a random IBAN, but for a specific country, use the **Specific country** option. Select the country you want, and hit OK.

![Specific country IBAN GIF](assets/iban-specific.gif "Specific country IBAN")

## Specs

### Supported countries

The list of supported countries is derived from the [IBAN Wikipedia](https://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country) page.

*See an IBAN country that's not in the list? Open an issue, or create a pull request.*

Currently, the list contains:

| Country                 | ISO Alpha-2 Country Code |
| ----------------------- | ------------------------ |
| Albania                 | `AL`                     |
| Andorra                 | `AD`                     |
| Austria                 | `AT`                     |
| Azerbaijan              | `AZ`                     |
| Bahrain                 | `BH`                     |
| Belarus                 | `BY`                     |
| Belgium                 | `BE`                     |
| Bosnia and Herzegovina  | `BA`                     |
| Brazil                  | `BR`                     |
| Bulgaria                | `BG`                     |
| Costa Rica              | `CR`                     |
| Croatia                 | `HR`                     |
| Cyprus                  | `CY`                     |
| Czech Republic          | `CZ`                     |
| Denmark                 | `DK`                     |
| Dominican Republic      | `DO`                     |
| East Timor              | `TL`                     |
| Estonia                 | `EE`                     |
| Faroe Islands           | `FO`                     |
| Finland                 | `FI`                     |
| France                  | `FR`                     |
| Georgia                 | `GE`                     |
| Germany                 | `DE`                     |
| Gibraltar               | `GI`                     |
| Greece                  | `GR`                     |
| Greenland               | `GL`                     |
| Guatemala               | `GT`                     |
| Hungary                 | `HU`                     |
| Iceland                 | `IS`                     |
| Ireland                 | `IE`                     |
| Israel                  | `IL`                     |
| Italy                   | `IT`                     |
| Jordan                  | `JO`                     |
| Kazakhstan              | `KZ`                     |
| Kosovo                  | `XK`                     |
| Kuwait                  | `KW`                     |
| Latvia                  | `LV`                     |
| Lebanon                 | `LB`                     |
| Liechtenstein           | `LI`                     |
| Lithuania               | `LT`                     |
| Luxembourg              | `LU`                     |
| North Macedonia         | `MK`                     |
| Malta                   | `MT`                     |
| Mauritania              | `MR`                     |
| Mauritius               | `MU`                     |
| Monaco                  | `MC`                     |
| Moldova                 | `MD`                     |
| Montenegro              | `ME`                     |
| Netherlands             | `NL`                     |
| Norway                  | `NO`                     |
| Pakistan                | `PK`                     |
| Palestinian territories | `PS`                     |
| Poland                  | `PL`                     |
| Portugal                | `PT`                     |
| Qatar                   | `QA`                     |
| Romania                 | `RO`                     |
| San Marino              | `SM`                     |
| Saudi Arabia            | `SA`                     |
| Serbia                  | `RS`                     |
| Slovakia                | `SK`                     |
| Slovenia                | `SI`                     |
| Spain                   | `ES`                     |
| Sweden                  | `SE`                     |
| Switzerland             | `CH`                     |
| Tunisia                 | `TN`                     |
| Turkey                  | `TR`                     |
| United Arab Emirates    | `AE`                     |
| United Kingdom          | `GB`                     |
| Vatican City            | `VA`                     |
| Virgin Islands, British | `VG`                     |

### IBAN format

The IBAN template formatting used, is country-specific. This means that each country has a different combination of of digits and (upper and lower) alpha characters. 

These formats are derived from the [IBAN Wikipedia](https://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country) page.