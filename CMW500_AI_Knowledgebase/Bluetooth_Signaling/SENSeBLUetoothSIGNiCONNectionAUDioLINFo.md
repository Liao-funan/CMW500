# SENSeBLUetoothSIGNiCONNectionAUDioLINFo

Module: Bluetooth Signaling
Source: 6891764bb4a34bb0.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:BLUetooth:SIGN<i>:CONNection:AUDio:LINFo?
SENSe:BLUetooth:SIGN<i>:CONNection:AUDio:LINFo? 
Queries the parameters of active audio connection.
Return values: 
<SpeechCode>
CVSD |
 
 ALAW |
 
 ULAW |
 
 MSBC
CVSD (8 kHz), A-law (8 kHz), μ-law (8 kHz), or mSBC (16 kHz) codec
<LinkType>
SCO |
 
 ESCO
Synchronous connection-oriented (SCO) or enhanced synchronous connection-oriented (eSCO) link
<PacketType>
HV1 |
 
 HV2 |
 
 HV3 |
 
 EV3 |
 
 EV4 |
 
 EV5 |
 
 2EV3 |
 
 3EV3 |
 
 2EV5 |
 
 3EV5
HV1
: SCO packets high-quality voice, 1/3 rate FEC
HV2
: SCO packets high-quality voice, 2/3 rate FEC
HV3
: SCO packets high-quality voice, no FEC
EV3, EV4, EV5
: eSCO packets on the top of BR ACL connection
2EV3, 3EV3, 2EV5, 3EV5
: eSCO packets on the top of EDR ACL connection (2-EV3, 3-EV3, 2-EV5, 3-EV5 packets)
<SampleRate>
Range: 
0 kHz  to  999 kHz
<DataRate>
Range: 
0 kbit/s  to  9999 kbit/s
Example: 
See 
"Configure Audio Profile"
Usage: 
Query only
Firmware/Software: 
V3.5.50
V3.5.60: added <SpeechCode> ALAW and ULAW
Options: 
R&S CMW-KS602
Manual operation: 
See 
"Link Info"
Top