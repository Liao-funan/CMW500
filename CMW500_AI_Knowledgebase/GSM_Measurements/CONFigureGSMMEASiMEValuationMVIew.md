# CONFigureGSMMEASiMEValuationMVIew

Module: GSM Measurements
Source: d35e11523.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:MVIew
CONFigure:GSM:MEAS<i>:MEValuation:MVIew 
<Timeslot0>, ..., <Timeslot7>
Defines the expected modulation scheme and burst type in all timeslots and adjusts the power/time template accordingly.
Parameters:
<Timeslot0> ... <Timeslot7>
ANY |
 
 OFF |
 
 GMSK |
 
 EPSK |
 
 ACCess |
 
 Q16
ANY:
 Any burst type can be analyzed
OFF:
 No signal expected
GMSK:
 GMSK-modulated normal bursts
EPSK:
 8PSK-modulated normal bursts
ACCess:
 Access bursts
Q16:
 16-QAM-modulated normal bursts
*RST:
ANY
Example: 
See 
"Selecting Specific Burst Types"
Firmware/Software: 
V1.0.0.4 (
Q16
 in V1.0.15.0)
Options: 
for Q16: R&S CMW-KM201
Manual operation: 
See 
"Modulation View"
Top