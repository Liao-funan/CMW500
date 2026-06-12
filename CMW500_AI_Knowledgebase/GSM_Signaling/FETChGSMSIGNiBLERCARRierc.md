# FETChGSMSIGNiBLERCARRierc

Module: GSM Signaling
Source: 102fca346ccc4b90.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:BLER:CARRier<c>?
FETCh:GSM:SIGN<i>:BLER:CARRier<c>? 
READ:GSM:SIGN<i>:BLER:CARRier<c>? 
Returns the results of the BLER measurement for the individual timeslots. For details, see 
"BLER Measurement"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1..2
Selects the carrier for which the results are queried - only relevant in dual carrier mode
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_BLER_TS0> ... <9_BLER_TS7>
BLER results for timeslot 0 to 7
Range: 
0 %  to  100 %
Default unit: 
%
<10_BLERAll>
BLER result as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<11_Blocks_TS0> ... <18_Blocks_TS7>
Number of RLC data blocks received by the MS in timeslot 0 to 7
Range: 
0  to  10E+7
<19_BlocksAll>
Total number of RLC data blocks received by the MS
Range: 
0  to  10E+7
<20_Rate_TS0> ... <27_Rate_TS7>
Data rates for timeslot 0 to 7
Range: 
0 kbit/s  to  130 kbit/s
Default unit: 
kbit/s
<28_RateAll>
Total data rate in all timeslots
Range: 
0 kbit/s  to  130 kbit/s times the no. of slots
Default unit: 
kbit/s
Example: 
See 
"BLER Tests"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Results"
Top