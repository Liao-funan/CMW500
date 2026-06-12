# FETChWCDMaMEASiTPCCARRiercUEPowerSTATistics

Module: WCDMA Measurements
Source: 9f96a154b2574a59.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:STATistics?
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:STATistics? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:STATistics? 
Return the "Statistics" values, indicating how many trace values have been considered to derive the results. The results are the maximum, minimum and average values of the maximum output power and the minimum output power per carrier.
The command returns all parameters listed below, independent of the selected TPC setup. Depending on the TPC setup, either a result value or an indicator is returned (e.g. NAV).
Suffix: 
<c>
1..2
Return values: 
<Reliability>
"Reliability Indicator"
<MaxOutputPower>
Number of trace values for maximum output power
Range: 
0  to  341
<MinOutpuPower>
Number of trace values for minimum output power
Range: 
0  to  341
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.2.70: command renamed (
CARRier<c>
 added)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top