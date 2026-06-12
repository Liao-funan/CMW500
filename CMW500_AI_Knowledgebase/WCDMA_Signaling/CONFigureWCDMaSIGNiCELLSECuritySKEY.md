# CONFigureWCDMaSIGNiCELLSECuritySKEY

Module: WCDMA Signaling
Source: d2bdc58c82e4429a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Security Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:SECurity:SKEY
CONFigure:WCDMa:SIGN<i>:CELL:SECurity:SKEY 
<SecretKey>
Defines the secret key K as 32-digit hexadecimal number. Leading zeros can be omitted.
K is used for the authentication procedure including a possible integrity check.
Parameters:
<SecretKey>
Range: 
#H0  to  #HFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
*RST:
#H000102030405060708090A0B0C0D0E0F
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Secret Key"
Top