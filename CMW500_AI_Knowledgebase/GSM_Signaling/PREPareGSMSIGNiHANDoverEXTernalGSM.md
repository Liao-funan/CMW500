# PREPareGSMSIGNiHANDoverEXTernalGSM

Module: GSM Signaling
Source: f411118a78dc4dc7.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
External Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:EXTernal:GSM
PREPare:GSM:SIGN<i>:HANDover:EXTernal:GSM 
<Band>, <DLChannel>, <BandIndicator>
Configures the destination parameters for handover to a GSM destination at another instrument.
For channel number ranges depending on operating bands see 
"GSM Bands and Channels"
.
Parameters:
<Band>
G085 |
 
 G09 |
 
 G18 |
 
 G19
GSM 850, GSM 900, GSM 1800, GSM 1900
*RST:
G09
<DLChannel>
Channel number used for the broadcast control channel (BCCH)
Range: 
0 to 1023, depending on GSM band
*RST:
20
<BandIndicator>
G18 |
 
 G19
Band indicator for distinction of GSM 1800 and GSM 1900 bands. The two bands partially use the same channel numbers for different frequencies.
*RST:
G18
Example: 
See 
"Performing a CS Handover to Another Instrument"
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Destination Parameters"
Top