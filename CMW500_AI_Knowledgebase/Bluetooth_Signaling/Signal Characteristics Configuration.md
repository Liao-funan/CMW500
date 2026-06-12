# Signal Characteristics Configuration

Module: Bluetooth Signaling
Source: 97d24ad0c7a94f22.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
GUI Reference
 > 
Connection Configuration
 > 
Signal Characteristics Configuration
Signal Characteristics Configuration
This section describes the parameters of the "Signal Characteristics" branch of the config tree.
Signal characteristics configuration
Typically, remote commands 
...:BRATe
 are used for BR physical layer (PHY), 
...:EDRate
 for EDR PHY, 
...:LE1M
 for LE
 
1M
 
PHY, 
...:LE2M
 for LE
 
2M
 
PHY, and 
...:LRANge
 for LE
 
coded
 
PHY.
└
 
Packet Type (BR, EDR)
└
 
Payload Length (BR, EDR, LE)
└
 
Pattern Type (BR, EDR, LE)
└
 
Voice Link > Speech Codec
└
 
Poll Period (BR/EDR)
└
 
Whitening (BR/EDR)
└
 
Test Packet Synch Word (LE)
Packet Type (BR, EDR)
Defines Bluetooth packet type used by connection links. The supported packet types are listed in 
"Bluetooth Signal Characteristics"
.
Option R&S CMW-KS610 is required for BR/EDR.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PTYPe:
​
BRATe
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PTYPe:
​
EDRate
 
Payload Length (BR, EDR, LE)
Defines the length of RF test sequence.
Option R&S CMW-KS610 is required for BR/EDR.
Option R&S
 
CMW-KS611 is required for LE
 
1M
 
PHY. Option R&S
 
CMW-KS721 is also required for LE
 
2M
 
PHY and LE
 
coded
 
PHY.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
BRATe
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
EDRate
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
LENergy[:
​
LE1M]
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
LENergy:
​
LE2M
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PLENgth:
​
LENergy:
​
LRANge
 
Pattern Type (BR, EDR, LE)
Selects pattern for RF tests.
Option R&S CMW-KS610 is required for BR/EDR.
Option R&S
 
CMW-KS611 is required for LE
 
1M
 
PHY. Option R&S
 
CMW-KS721 is also required for LE
 
2M
 
PHY and LE
 
coded
 
PHY.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
BRATe
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
EDRate
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
LENergy[:
​
LE1M]
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
LENergy:
​
LE2M
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
LENergy:
​
LRANge
 
Voice Link > Speech Codec
Specifies the voice codec to be used for synchronous connection-oriented audio connections. This setting selects automatically also the type of data link:
If the CVSD, A-law, or μ-law coding is selected, the SCO connection is used.
If the mSBC codec is selected, the eSCO connection is used.
Note that A2DP connections use ACL links.
Option R&S CMW-KS602 is required.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
AUDio:
​
CODec
 
Poll Period (BR/EDR)
The poll interval for TX test. The manual setting of poll period is irrelevant if automatic minimum period is used. The automatic minimum period sets the used poll period depending on the packet type. See also 
"TX Test Mode (BR/EDR)"
.
Option R&S CMW-KS610 is required.
This parameter is not applicable to LE.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PPERiod:
​
MINimum
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PPERiod
 
Whitening (BR/EDR)
Enables/disables whitening in loopback mode. Whitening sequence sample is defined in Bluetooth core specification volume 2, part G.
Option R&S CMW-KS610 is required.
This parameter is not applicable to LE.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
WHITening
 
Test Packet Synch Word (LE)
Defines 4-byte synchronization word for direct test mode as hexadecimal number.
Option R&S CMW-KS611 is required.
Remote command: 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
SYNWord:
​
LENergy
 
Top