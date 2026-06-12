# PREPareGSMSIGNiHANDoverEXTernalTDSCdma

Module: GSM Signaling
Source: 2a420157a84347e2.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
External Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:EXTernal:TDSCdma
PREPare:GSM:SIGN<i>:HANDover:EXTernal:TDSCdma 
<Band>, <DLChannel>
Configures the destination parameters for handover to a TD-SCDMA destination at another instrument.
Parameters:
<Band>
OB1 |
 
 OB2 |
 
 OB3
OB1:
 Band 1 (F), 1880 MHz to 1920 MHz
OB2:
 Band 2 (A), 2010 MHz to 2025 MHz
OB3:
 Band 3 (E), 2300 MHz to 2400 MHz
*RST:
OB1
<DLChannel>
Downlink channel number
Range: 
The allowed range depends on the frequency band, see table below.
*RST:
9404
Example: 
See 
"Performing a CS Handover to Another Instrument"
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Destination Parameters"
TD-SCDMA channel numbers
Band
Channel number
Frequency in MHz
a (China)
10054 to 10121
2010.8 to 2024.2
e
11504 to 11996
2300.8 to 2399.2
f
9404 to 9596
1880.8 to 1919.2
Top