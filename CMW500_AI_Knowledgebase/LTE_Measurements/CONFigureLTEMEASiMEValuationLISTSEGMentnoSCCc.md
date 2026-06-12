# CONFigureLTEMEASiMEValuationLISTSEGMentnoSCCc

Module: LTE Measurements
Source: 44bf31cf4bd146d6.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Settings
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCC<c>
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:SCC<c> 
<Frequency>, <ChBandwidth>
Defines SCC-specific analyzer settings for segment <no>.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Suffix: 
<no>
1..2000
Segment number
<c>
1
Only SCC1 supported - suffix can be omitted
Parameters:
<Frequency>
SCC center frequency used in the segment
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.9698E+9 Hz
Default unit: 
Hz
<ChBandwidth>
B014 |
 
 B030 |
 
 B050 |
 
 B100 |
 
 B150 |
 
 B200
SCC channel bandwidth used in the segment
B014
: 1.4 MHz
B030
: 3 MHz
B050
: 5 MHz
B100
: 10 MHz
B150
: 15 MHz
B200
: 20 MHz
*RST:
B200
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.5.30
Options: 
R&S CMW-KM012
R&S CMW-KM502/-KM552 for FDD/TDD
Top