# FETChGSMSIGNiBLEROALL

Module: GSM Signaling
Source: baf482b1efcc4079.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:BLER:OALL?
FETCh:GSM:SIGN<i>:BLER:OALL? 
READ:GSM:SIGN<i>:BLER:OALL? 
Returns the overall results of the BLER measurement.
For details, see 
"BLER Measurement"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<BLER>
BLER as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<RLCBlocks>
Total number of RLC data blocks received by the MS
Range: 
0  to  10E+7
<RLCDataRate>
Total data rate in all timeslots
Range: 
0 kbit/s  to  130 kbit/s times the no. of slots
Default unit: 
kbit/s
<Throughput>
Overall long-term throughput
Range: 
0 kbit/s  to  130 kbit/s times the no. of slots
Default unit: 
kbit/s
<ThroughputSlot>
Long-term throughput per slot
Range: 
0 kbit/s  to  130 kbit/s
Default unit: 
kbit/s
<CorruptedBlocks>
Number of corrupted data blocks transmitted in DL
Range: 
0 to 10E+7
<FalseACKblocks>
Number of corrupted data blocks reported by the MS as fault free
Range: 
0 to 10E+7
Example: 
See 
"BLER Tests"
Usage: 
Query only
Firmware/Software: 
V2.0.20
V3.2.20: <CorruptedBlocks> and <FalseACKblocks> added
Manual operation: 
See 
"Results"
Top