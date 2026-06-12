# CONFigureLTEMEASiMEValuationLISTSEGMentnoRBALlocation

Module: LTE Measurements
Source: 3376673929144b05.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:RBALlocation
CONFigure:LTE:MEAS<i>:MEValuation:LIST:SEGMent<no>:RBALlocation 
<Auto>, <NoRB>, <Offset>
Allows you to define the resource block allocation manually for segment <no>. By default, the RB allocation is detected automatically.
Suffix: 
<no>
1..2000
Segment number
Parameters:
<Auto>
OFF |
 
 ON
OFF
: manual definition via <NoRB> and <Offset>
ON
: automatic detection of RB allocation
*RST:
ON
<NoRB>
Number of allocated resource blocks in each measured slot
Range: 
see table below
*RST:
100
<Offset>
Offset of first allocated resource block from edge of allocated UL transmission bandwidth
Range: 
see table below
*RST:
0
Example: 
See 
"Specifying List Mode Settings"
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM012
Channel bandwidth
Range <NoRB>
Range <Offset>
1.4 MHz
1 to 6
0 to 5
3 MHz
1 to 15
0 to 14
5 MHz
1 to 25
0 to 24
10 MHz
1 to 50
0 to 49
15 MHz
1 to 75
0 to 74
20 MHz
1 to 100
0 to 99
For eMTC, the relevant channel bandwidth is always 1.4 MHz, because the RB allocation is defined within the narrowband.
Top