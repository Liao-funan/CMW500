# FETChLTEMEASiMEValuationTRACeIEMissionsCCno

Module: LTE Measurements
Source: 1e17f2aefb584039.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Inband Emission Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:TRACe:IEMissions:CC<no>?
FETCh:LTE:MEAS<i>:MEValuation:TRACe:IEMissions:CC<no>? 
READ:LTE:MEAS<i>:MEValuation:TRACe:IEMissions:CC<no>? 
Returns the values of the inband emissions trace for carrier CC<no>. See also 
"View Inband Emissions"
.
The number of results n (resource blocks) depends on the channel bandwidth, see 
"Resources in Time and Frequency Domain"
.
Suffix: 
<no>
1..4
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values, one value per resource block
Range: 
-100 dB  to  10 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Top