# CONFigureGSMMEASiMEValuationLISTSEGMentnoMODulation

Module: GSM Measurements
Source: d35e12041.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation 
<ModStatistics>, <EVMenable>, <MagErrorEnable>, <PhaseErrEnable>, <AMPMenable>[, <FramePattern>]
Defines the statistical length for the 
AVERage
, 
MIN
, and 
MAX
 calculation and enables the calculation of the different modulation results in segment no. <no>; see 
"List Mode"
.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<ModStatistics>
The statistical length is defined in slots. It is limited by the number of evaluated slots (defined via step length or frame pattern).
Range: 
1  to  1000
*RST:
100
<EVMenable>
OFF |
 
 ON
ON:
 Enable measurement of EVM
OFF:
 Disable measurement of EVM
*RST:
OFF
<MagErrorEnable>
OFF |
 
 ON
Enable or disable measurement of magnitude error
*RST:
OFF
<PhaseErrEnable>
OFF |
 
 ON
Enable or disable measurement of phase error
*RST:
OFF
<AMPMenable>
OFF |
 
 ON
Enable or disable measurement of AM PM delay
*RST:
OFF
<FramePattern>
8-digit binary value, defines the evaluated timeslots in each TDMA frame. Used only if no step length is configured (see 
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
SLENgth
).
Range: 
#B00000000 to #B11111111 (no slots ... all slots measured)
*RST:
#B10000000 (first slot in each frame measured)
Example: 
See 
"GSM List Mode"
Firmware/Software: 
V1.0.4.11 (parameter <FrameLength>: V1.0.10.1)
Options: 
R&S CMW-KM012
Top