# CONFigureGSMMEASiMEValuationLISTSEGMentnoSMODulation

Module: GSM Measurements
Source: 5ecb19ba01844871.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation
CONFigure:GSM:MEAS<i>:MEValuation:LIST:SEGMent<no>:SMODulation 
<Statistic>, <Enable>[, <FramePattern>]
Defines the statistical length for averaging and enables the spectrum due to modulation measurement in segment no. <no>; see 
"List Mode"
.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<Statistic>
The statistical length is defined in slots. It is limited by the number of evaluated slots (defined via step length or frame pattern).
Range: 
1  to  1000
*RST:
200
<Enable>
OFF |
 
 ON
ON:
 Enable measurement of spectrum due to modulation results (including the "spectrum modulation time" results in offline mode)
OFF:
 Disable measurement
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