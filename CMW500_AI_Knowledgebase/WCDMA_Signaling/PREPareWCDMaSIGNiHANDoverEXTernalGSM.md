# PREPareWCDMaSIGNiHANDoverEXTernalGSM

Module: WCDMA Signaling
Source: 2e4c5c9f4ecc4a16.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
PREPare:WCDMa:SIGN<i>:HANDover:EXTernal:GSM
PREPare:WCDMa:SIGN<i>:HANDover:EXTernal:GSM 
<Band>, <DLChannel>
Configures the destination parameters for handover to a GSM destination at another instrument.
Parameters:
<Band>
G04 |
 
 G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 400, GSM 850, GSM 900, GSM 1800, GSM 1900
<DLChannel>
Channel number used for the broadcast control channel (BCCH)
Range: 
The allowed range depends on the operating band, see table below.
Example: 
See 
"Performing a Handover to Another Instrument"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Destination Parameters"
Channel numbers
Band
Channel number
G04
259 to 293, 306 to 340
G085
128 to 251
G09
0 to 124, 940 to 1023
G18
512 to 885
G19
512 to 810
Top