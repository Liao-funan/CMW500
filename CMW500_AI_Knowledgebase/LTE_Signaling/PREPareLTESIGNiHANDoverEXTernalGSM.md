# PREPareLTESIGNiHANDoverEXTernalGSM

Module: LTE Signaling
Source: 9270c88f32604039.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Handover Preparation
 > 
PREPare:LTE:SIGN<i>:HANDover:EXTernal:GSM
PREPare:LTE:SIGN<i>:HANDover:EXTernal:GSM 
<Band>, <DLChannel>, <BandIndicator>
Configures the destination parameters for handover to a GSM destination at another instrument.
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
Channel number used for the BCCH
Range: 
depends on GSM band, see table below
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
"Performing a Handover to Another Instrument"
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Destination Parameters"
Channel number range depending on GSM band
Band
Channel number
G085
128 to 251
G09
0 to 124, 940 to 1023
G18
512 to 885
G19
512 to 810
Top