# CONFigureBLUetoothMEASiISIGnalOSLotsBRATe

Module: Bluetooth Measurements
Source: 37bf56ee70e949e4.htm

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
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:BRATe
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:BRATe 
<NoOfOffSlots>(3)
CONFigure:BLUetooth:MEAS<i>:ISIGnal:OSLots:EDRate 
<NoOfOffSlots>(6)
Specifies the number of unused slots between any two occupied slots or slot sequences.
Parameters:
<NoOfOffSlots>
Number of off slots for the different packet types:
3 values for BR packets (DH1, DH3, DH5)
6 values for EDR packets (2-DH1, 2-DH3, 2-DH5, 3-DH1, 3-DH3, 3-DH5)
Range: 
1  to  9
*RST:
1
Example: 
See 
"Spectrum Measurements"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"No. of Off Slots"
Top