# CONFigureDATACONTrolIMS2SUBScribersIPSecALGorithmENCRyption

Module: Data Application Unit
Source: 920f5c28de844c01.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Subscriber Settings
 > 
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IPSec:ALGorithm:ENCRyption
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IPSec:ALGorithm:ENCRyption 
<EncryptionAlg>
Selects an encryption algorithm for subscriber profile number <s>.
Suffix: 
<s>
1..5
Parameters:
<EncryptionAlg>
DES |
 
 AES |
 
 NOC |
 
 AUTO
DES
: DES-EDE3-CBC
AES
: AES-CBC
NOC
: NULL, no encryption
AUTO
: as indicated in REGISTER message
*RST:
NOC
Example: 
See 
"Configuring subscriber profiles"
Firmware/Software: 
V3.5.10, V3.5.50 added AUTO
Manual operation: 
See 
"Encryption Algorithm"
Top