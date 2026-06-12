# CONFigureGSMMEASiMEValuationLISTSLENgth

Module: GSM Measurements
Source: a42ad759af0046eb.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SLENgth
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SLENgth 
<StepLength>
Selects the step length, i.e. the time difference between two measured TDMA timeslots. A step length of 1 means that every slot is measured, a step length of 8 means that a single timeslot per TDMA frame is measured.
If the step length is set to OFF, an arbitrary number of slots in each TDMA frame can be measured. The measured slots are defined by the <FramePattern> parameter of the following commands:
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
MODulation
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
PVTime
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SMODulation
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
SSWitching
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
SEGMent<no>:
​
BER
Parameters:
<StepLength>
Step length as number of TDMA slots
Range: 
1  to  8
*RST:
8
Additional parameters: ON | OFF (enable step length | use <FramePattern>)
Example: 
See 
"GSM List Mode"
Firmware/Software: 
V1.0.4.11 (parameter OFF: V1.0.10.1)
Options: 
R&S CMW-KM012
Top