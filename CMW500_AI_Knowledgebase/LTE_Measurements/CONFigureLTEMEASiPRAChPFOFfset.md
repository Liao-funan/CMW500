# CONFigureLTEMEASiPRAChPFOFfset

Module: LTE Measurements
Source: 5f9a541a76d548bb.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:PRACh:PFOFfset
CONFigure:LTE:MEAS<i>:PRACh:PFOFfset 
<PRACHfreqOffset>
Specifies the PRACH frequency offset. This setting is only relevant if automatic detection is disabled, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
PRACh:
​
PFOFfset:
​
AUTO
.
For the combined signal path scenario, use 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
PRACh:
​
PFOFfset
.
Parameters:
<PRACHfreqOffset>
Range: 
0 to <Total RB - 6> depending on channel bandwidth, see table below
*RST:
0
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"PRACH Frequency Offset"
Maximum input value depending on channel bandwidth
Channel bandwidth / MHz
1.4
3
5
10
15
20
<Total RB - 6>
0
9
19
44
69
94
Top