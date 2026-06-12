# CONFigureDATACONTrolEPDGESPINTegrity

Module: Data Application Unit
Source: e6039fc304034ab0.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
ePDG Service
 > 
ESP Settings
 > 
CONFigure:DATA:CONTrol:EPDG:ESP:INTegrity
CONFigure:DATA:CONTrol:EPDG:ESP:INTegrity 
<MD596>, <SHAI96>, <XCBC96>, <SHA256>, <SHA384>, <SHA512>
Selects the supported integrity protection algorithms for the ESP protocol.
Parameters:
<MD596>
OFF |
 
 ON
AUTH_HMAC_MD5_96
*RST:
ON
<SHAI96>
OFF |
 
 ON
AUTH_HMAC_SHA1_96
*RST:
ON
<XCBC96>
OFF |
 
 ON
AUTH_AES_XCBC_96
*RST:
ON
<SHA256>
OFF |
 
 ON
AUTH_HMAC_SHA2_256_128
*RST:
ON
<SHA384>
OFF |
 
 ON
AUTH_HMAC_SHA2_384_192
*RST:
ON
<SHA512>
OFF |
 
 ON
AUTH_HMAC_SHA2_512_256
*RST:
ON
Example: 
See 
"Configuring the ePDG Service"
Firmware/Software: 
V3.5.20
V3.5.30: added <SHA2_...>
Options: 
R&S CMW-KA065
Manual operation: 
See 
"Integrity"
Top