# CONFigureGSMMEASiMEValuationMSLots

Module: GSM Measurements
Source: f69dbf8a3e0d4e3b.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:MSLots
CONFigure:GSM:MEAS<i>:MEValuation:MSLots 
<SlotOffset>, <SlotCount>, <MeasSlot>
Defines settings for the measured slots.
For the combined signal path scenario, use 
CONFigure:
​
GSM:
​
SIGN<i>:
​
MSLot:
​
UL
.
Parameters:
<SlotOffset>
Start of the measurement interval relative to the GSM frame boundary
Range: 
0  to  7
*RST:
0
<SlotCount>
Number of slots to be measured
Range: 
1  to  8
*RST:
1
<MeasSlot>
Slot to be measured for one-slot measurements
Range: 
0  to  7
*RST:
0
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Measurement Slot Settings"
Top