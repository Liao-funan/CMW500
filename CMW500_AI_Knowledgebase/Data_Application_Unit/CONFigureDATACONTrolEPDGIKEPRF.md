# CONFigureDATACONTrolEPDGIKEPRF

Module: Data Application Unit
Source: 1d2f97bcbbe54b66.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
ePDG Service
 > 
IKE Settings
 > 
CONFigure:DATA:CONTrol:EPDG:IKE:PRF
CONFigure:DATA:CONTrol:EPDG:IKE:PRF 
<PRFMD5>, <PRFSHA1>, <SHA2_256>, <SHA2_384>, <SHA2_512>
Selects the supported pseudorandom functions for the IKEv2 protocol.
Parameters:
<PRFMD5>
OFF |
 
 ON
PRF_HMAC_MD5
*RST:
ON
<PRFSHA1>
OFF |
 
 ON
PRF_HMAC_SHA1
*RST:
ON
<SHA2_256>
OFF |
 
 ON
PRF_HMAC_SHA2_256
*RST:
ON
<SHA2_384>
OFF |
 
 ON
PRF_HMAC_SHA2_384
*RST:
ON
<SHA2_512>
OFF |
 
 ON
PRF_HMAC_SHA2_512
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
"PRF"
Top