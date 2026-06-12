# CONFigureNIOTSIGNiCELLSECuritySKEY

Module: NBIoT Signaling
Source: be8982d6d5bd4f20.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Security Settings
 > 
CONFigure:NIOT:SIGN<i>:CELL:SECurity:SKEY
CONFigure:NIOT:SIGN<i>:CELL:SECurity:SKEY 
<SecretKey>
Defines the secret key K as 32-digit hexadecimal number. You can omit leading zeros.
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
V3.7.20
Manual operation: 
See 
"Secret Key"
Top