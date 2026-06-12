# CONFigureDATACONTrolEPDGIKEINTegrity

Module: Data Application Unit
Source: 3afa3d068e294c19.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
ePDG Service
 > 
IKE Settings
 > 
CONFigure:DATA:CONTrol:EPDG:IKE:INTegrity
CONFigure:DATA:CONTrol:EPDG:IKE:INTegrity 
<HMAC_MD5_96>, <HMAC_SHAI_96>, <AES_XCB_96>, <SHA2_256_128>, <SHA2_384_192>, <SHA2_512_256>
Selects the supported integrity protection algorithms for the IKEv2 protocol.
Parameters:
<HMAC_MD5_96>
OFF |
 
 ON
AUTH_HMAC_MD5_96
*RST:
ON
<HMAC_SHAI_96>
OFF |
 
 ON
AUTH_HMAC_SHA1_96
*RST:
ON
<AES_XCB_96>
OFF |
 
 ON
AUTH_AES_XCBC_96
*RST:
ON
<SHA2_256_128>
OFF |
 
 ON
AUTH_HMAC_SHA2_256_128
*RST:
ON
<SHA2_384_192>
OFF |
 
 ON
AUTH_HMAC_SHA2_384_192
*RST:
ON
<SHA2_512_256>
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