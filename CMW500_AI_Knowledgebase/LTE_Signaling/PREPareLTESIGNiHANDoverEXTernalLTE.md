# PREPareLTESIGNiHANDoverEXTernalLTE

Module: LTE Signaling
Source: 3dc0f56af1034e1c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Handover Preparation
 > 
PREPare:LTE:SIGN<i>:HANDover:EXTernal:LTE
PREPare:LTE:SIGN<i>:HANDover:EXTernal:LTE 
<Band>, <DLChannel>
Configures the destination parameters for handover to an LTE destination at another instrument.
For channel number ranges depending on operating bands, see 
"Operating Bands"
.
Parameters:
<Band>
UDEFined |
 
 OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
Operating band
*RST:
OB1
<DLChannel>
Downlink channel number
Range: 
depends on operating band
*RST:
300
Example: 
See 
"Performing a Handover to Another Instrument"
Firmware/Software: 
V3.0.20, some bands added in later versions
Manual operation: 
See 
"Destination Parameters"
Top