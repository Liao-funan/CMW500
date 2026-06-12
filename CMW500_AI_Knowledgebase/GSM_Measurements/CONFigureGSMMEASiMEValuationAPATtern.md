# CONFigureGSMMEASiMEValuationAPATtern

Module: GSM Measurements
Source: d35e13942.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:APATtern
CONFigure:GSM:MEAS<i>:MEValuation:APATtern 
<Timeslot0>, ..., <Timeslot7>
Defines the burst pattern that the R&S
 
CMW expects in the TDMA frames of the received GSM signal. The pattern is used for frame synchronization if the pattern acquisition mode is active (see 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
AMODe
).
Parameters:
<Timeslot0> ... <Timeslot7>
OFF |
 
 GMSK |
 
 EPSK
Pattern selection for corresponding timeslot (0 to 7)
OFF:
 No signal expected
GMSK:
 GMSK-modulated normal bursts
EPSK:
 8PSK/16-QAM-modulated normal bursts
*RST:
GMSK (timeslot 0), OFF (timeslots 1 to 7)
Example: 
See 
"Selecting Specific Burst Types"
Firmware/Software: 
V1.0.4.11
Options: 
R&S CMW-KM201 (for 16-QAM modulation)
Manual operation: 
See 
"Pattern"
Top