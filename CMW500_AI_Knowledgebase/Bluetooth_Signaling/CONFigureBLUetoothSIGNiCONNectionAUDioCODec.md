# CONFigureBLUetoothSIGNiCONNectionAUDioCODec

Module: Bluetooth Signaling
Source: 003381f283324a25.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Audio Parameters
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:AUDio:CODec
CONFigure:BLUetooth:SIGN<i>:CONNection:AUDio:CODec 
<Codec>
Specifies the codec to be used for synchronous connection-oriented audio connections.
Parameters:
<Codec>
CVSD |
 
 ALAW |
 
 ULAW |
 
 MSBC
CVSD
: continuously variable slope delta codec (8 kHz - SCO link)
ALAW
: A-law coding (8 kHz - SCO link)
ULAW
: μ-law coding (8 kHz - SCO link)
mSBC
: modified subband coding (16 kHz - eSCO link)
*RST:
CVSD
Example: 
See 
"Configure Audio Profile"
Firmware/Software: 
V3.5.50
V3.5.60: added ALAW and ULAW
Options: 
R&S CMW-KS602
Manual operation: 
See 
"Voice Link > Speech Codec"
Top