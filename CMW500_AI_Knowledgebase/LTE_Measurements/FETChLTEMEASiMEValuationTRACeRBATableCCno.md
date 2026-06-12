# FETChLTEMEASiMEValuationTRACeRBATableCCno

Module: LTE Measurements
Source: 29bbdbd3538046b2.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RB Allocation Table Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:RBATable:CC<no>?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:RBATable:CC<no>? 
READ:LTE:MEAS<i>:MEValuation:TRACe:RBATable:CC<no>? 
Returns the information of the CC<no> RB allocation table. See also 
"View RB Allocation Table"
.
For each captured slot, three results are returned:
<Reliability>, {<ChannelType>, <OffsetRB>, <NoRB>}
slot 1
, ..., {<ChannelType>, <OffsetRB>, <NoRB>}
slot n
Where n equals two times the number of captured subframes (see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
MSUBframes
).
Suffix: 
<no>
1..4
Return values: 
<Reliability>
"Reliability Indicator"
<ChannelType>
PUSCh |
 
 PUCCh |
 
 NONE |
 
 DL |
 
 SSUB
Detected channel type for the first captured slot
PUSCh
: slot contains only PUSCH
PUCCH
: slot contains only PUCCH
NONE
: slot contains no allocated RBs at all
DL
: downlink slot (only relevant for TDD)
SSUB
: part of special subframe (only relevant for TDD)
<OffsetRB>
Offset of first allocated RB in the first captured slot
Range: 
0  to  99
<NoRB>
Number of allocated RBs in the first captured slot
Range: 
0  to  100
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Top