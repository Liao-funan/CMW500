# PREPareWCDMaSIGNiHANDoverEXTernalWCDMa

Module: WCDMA Signaling
Source: 97df1f9c7c574cef.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
PREPare:WCDMa:SIGN<i>:HANDover:EXTernal:WCDMa
PREPare:WCDMa:SIGN<i>:HANDover:EXTernal:WCDMa 
<Band>, <DLChannel>
Configures the destination parameters for handover to a WCDMA destination at another instrument.
Parameters:
<Band>
OB1 |
 
 ... |
 
 OB14 |
 
 OB19 |
 
 ... |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OBS1 |
 
 ... |
 
 OBS3 |
 
 OBL1 |
 
 UDEFined
OB1
, ..., 
OB14
: operating band I to XIV
OB19
, ..., 
OB22
: operating band XIX to XXII
OB25, OB26
: operating band XXV, XXVI
OBS1
: operating band S
OBS2
: operating band S 170 MHz
OBS3
: operating band S 190 MHz
OBL1
: operating band L
UDEFined
: user defined
<DLChannel>
For channel number ranges depending on operating bands see 
Table "Operating bands for uplink signals"
.
Example: 
See 
"Performing a Handover to Another Instrument"
Firmware/Software: 
V3.5.20
V3.5.30: added <Band> 
OB25
, 
OB26
Manual operation: 
See 
"Destination Parameters"
Top