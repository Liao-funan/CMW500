# CONFigureDATACONTrolIMS2SUBScribersIPSecALGorithmINTegrity

Module: Data Application Unit
Source: 16754676f0df484b.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Subscriber Settings
 > 
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IPSec:ALGorithm:INTegrity
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IPSec:ALGorithm:INTegrity 
<IntegrityAlg>
Selects an integrity protection algorithm for subscriber profile number <s>.
Suffix: 
<s>
1..5
Parameters:
<IntegrityAlg>
HMMD |
 
 HMSH |
 
 AUTO
HMMD
: HMAC-MD5-96
HMSH
: HMAC-SHA-1-96
AUTO
: as indicated in REGISTER message
*RST:
AUTO
Example: 
See 
"Configuring subscriber profiles"
Firmware/Software: 
V3.5.10, V3.5.50 added AUTO
Manual operation: 
See 
"Integrity Algorithm"
Top