# FETChGSMSIGNiBERPSWitched

Module: GSM Signaling
Source: bde596dffc644d14.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
Measurement Results
 > 
FETCh:GSM:SIGN<i>:BER:PSWitched?
FETCh:GSM:SIGN<i>:BER:PSWitched? 
READ:GSM:SIGN<i>:BER:PSWitched? 
Returns the results of the BER PS measurement over all carriers.
For the details of the results, see 
"BER PS Measurement"
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Frames>
Number of already transmitted blocks
Range: 
0  to  500E+3
<BER>
BER
Range: 
0 %  to  100 %
Default unit: 
%
<DBLER>
DBLER
Range: 
0 %  to  100 %
Default unit: 
%
<USF_BLER>
USF BLER
Range: 
0 %  to  100 %
Default unit: 
%
<FalseUSFdetect>
False USF BLER
Range: 
0 %  to  100 %
Default unit: 
%
<CRCerrors>
CRC errors
Range: 
0  to  500E+3
<NonAssignedUSF>
Number of USFs in data blocks not assigned to the MS
Range: 
0  to  500E+3
Example: 
See 
"BER PS Tests"
Usage: 
Query only
Firmware/Software: 
V2.2.30
V3.2.30: added <NonAssignedUSF>
V3.2.70: ranges of blocks extended
Manual operation: 
See 
"Results"
Top