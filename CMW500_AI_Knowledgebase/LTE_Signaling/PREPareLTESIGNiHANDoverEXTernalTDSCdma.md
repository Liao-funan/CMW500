# PREPareLTESIGNiHANDoverEXTernalTDSCdma

Module: LTE Signaling
Source: 4fdb712521694870.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Handover Preparation
 > 
PREPare:LTE:SIGN<i>:HANDover:EXTernal:TDSCdma
PREPare:LTE:SIGN<i>:HANDover:EXTernal:TDSCdma 
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
The allowed range depends on the frequency band:
OB1: 9400 to 9600
OB2: 10050 to 10125
OB3: 11500 to 12000
*RST:
10563
Example: 
See 
"Performing a Handover to Another Instrument"
Firmware/Software: 
V3.0.50
Manual operation: 
See 
"Destination Parameters"
Top