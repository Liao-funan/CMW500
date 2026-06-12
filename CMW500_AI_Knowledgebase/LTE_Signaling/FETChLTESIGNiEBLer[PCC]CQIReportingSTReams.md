# FETChLTESIGNiEBLer[PCC]CQIReportingSTReams

Module: LTE Signaling
Source: b16cfefd25be4d6a.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:CQIReporting:STReam<s>?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:CQIReporting:STReam<s>? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:CQIReporting:STReam<s>? 
Returns the single results of the CQI reporting view for one downlink stream of one carrier.
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<CQImedian>
Median reported CQI value
Range: 
0  to  15
<RangeAbsolute>
Number of reports received for the range from median CQI - 1 to median CQI + 1
Range: 
0  to  2E+9
<RangeRelative>
<RangeAbsolute> as percentage of total number of received reports
Range: 
0 %  to  100 %
Default unit: 
%
<BLER>
Block error ratio (percentage of sent scheduled subframes for which no ACK has been received)
Range: 
0 %  to  100 %
Default unit: 
%
<TotalNumber>
Total number of received CQI reports
Range: 
0  to  2E+9
<ExpiredSubframes>
Number of already sent scheduled subframes
Range: 
0  to  2E+9
Example: 
See 
"Performing a Single-Shot BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.30, SCC command V3.2.70
Top