# CONFigureGSMMEASiMEValuationPCL

Module: GSM Measurements
Source: 5590e501ce0d43ad.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:PCL
CONFigure:GSM:MEAS<i>:MEValuation:PCL 
<Slot0>, <Slot1>, <Slot2>, <Slot3>, <Slot4>, <Slot5>, <Slot6>, <Slot7>
Sets the expected PCL values in all timeslots, to be used in 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
PCLMode
 
PCL
. The PCL values are interpreted according to the current GSM band setting (
CONFigure:
​
GSM:
​
MEAS<i>:
​
BAND
).
For the combined signal path scenario, use:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
PCL:
​
TCH:
​
CSWitched
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
CHCCombined:
​
TCH:
​
CSWitched
Parameters:
<Slot0>
Range: 
0  to  31
*RST:
0
<Slot1>
Range: 
0  to  31
*RST:
0
<Slot2>
Range: 
0  to  31
*RST:
0
<Slot3>
Range: 
0  to  31
*RST:
0
<Slot4>
Range: 
0  to  31
*RST:
0
<Slot5>
Range: 
0  to  31
*RST:
0
<Slot6>
Range: 
0  to  31
*RST:
0
<Slot7>
Range: 
0  to  31
*RST:
0
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"PCL > Setting"
Top