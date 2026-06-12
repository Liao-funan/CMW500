# FETChGSMSIGNiBERPSWitchedCARRierc

Module: GSM Signaling
Source: 3c666a9767f64347.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:BER:PSWitched:CARRier<c>?
FETCh:GSM:SIGN<i>:BER:PSWitched:CARRier<c>? 
READ:GSM:SIGN<i>:BER:PSWitched:CARRier<c>? 
Returns the results of the BER PS measurement for the individual timeslots.
For the details of the results, see 
"BER PS Measurement"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<c>
1
Selects the carrier for which the results have to be queried - only relevant in dual carrier mode
Return values: 
<1_Reliability>
See 
"Reliability Indicator"
<2_Frames_0> <9_Frames_7>
Number of already transmitted blocks in timeslot 0 to 7
Range: 
0  to  500E+3
<10_FramesAll>
Total number of already transmitted blocks
Range: 
0  to  500E+3
<11_BER_0> <18_BER_7>
BER results for timeslot 0 to 7
Range: 
0 %  to  100 %
Default unit: 
%
<19_BERall>
BER result as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<20_DBLER_0> <27_DBLER_7>
DBLER results for timeslot 0 to 7
Range: 
0 %  to  100 %
Default unit: 
%
<28_DBLERall>
DBLER result as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<29_USF_BLER_0> <36_USF_BLER_7>
USF BLER results for timeslot 0 to 7
Range: 
0 %  to  100 %
Default unit: 
%
<37_USF_BLERall>
USF BLER result as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<38_FalseUSF_0> <45_FalseUSF_7>
False USF BLER results for timeslot 0 to 7
Range: 
0 %  to  100 %
Default unit: 
%
<46_FalseUSFall>
False USF BLER result as weighted average over all timeslots
Range: 
0 %  to  100 %
Default unit: 
%
<47_NoAssigUSF_0> <54_NoAssigUSF_7>
Detected non-assigned USF results for timeslot 0 to 7
Range: 
0  to  500E+3
<55_NoAssigUSFAll>
Detected non-assigned USF result as weighted average over all timeslots
Range: 
0  to  500E+3
<56_CRCerrors_0> <63_CRCerrors_7>
CRC error results for timeslot 0 to 7
Range: 
0  to  500E+3
<64_CRCerrorsAll>
CRC error result as weighted average over all timeslots
Range: 
0  to  500E+3
Example: 
See 
"BER PS Tests"
Usage: 
Query only
Firmware/Software: 
V2.2.30
V3.2.30: added <Frames>, <FramesAll>, results per timeslot and overall results
V3.2.70: ranges of blocks extended
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Results"
Top