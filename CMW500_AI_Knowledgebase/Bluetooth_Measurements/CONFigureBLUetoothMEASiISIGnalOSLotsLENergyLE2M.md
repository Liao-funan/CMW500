# CONFigureBLUetoothMEASiISIGnalOSLotsLENergyLE2M

Module: Bluetooth Measurements
Source: 4ad181be80e24cd2.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:LENergy:LE2M
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:LENergy:LE2M 
<NoOfOffSlots>
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:LENergy[:LE1M] 
<NoOfOffSlots>
Specifies the number of unused slots between any two occupied slots or slot sequences.
Commands for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
) are available.
Parameters:
<NoOfOffSlots>
Range: 
1  to  9
*RST:
1
Default unit: 
Multiplies of 625 µs
Example: 
See 
"Spectrum Measurements"
Firmware/Software: 
V3.5.20
V3.5.70: added command for LE2M
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Manual operation: 
See 
"No. of Off Slots"
Top