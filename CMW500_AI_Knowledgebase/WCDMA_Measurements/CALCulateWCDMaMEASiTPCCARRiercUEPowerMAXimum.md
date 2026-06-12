# CALCulateWCDMaMEASiTPCCARRiercUEPowerMAXimum

Module: WCDMA Measurements
Source: 44f14e85ce67405f.htm

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
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MAXimum?
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MAXimum? 
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MINimum? 
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:AVERage? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MAXimum? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MINimum? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:AVERage? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MAXimum? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:MINimum? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:UEPower:AVERage? 
Return the UE power and minimum/maximum output power single value results per carrier. The minimum, maximum and average values of these results can be retrieved.
The command returns all parameters listed below, independent of the selected TPC setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<c>
1..2
Return values: 
<Reliability>
"Reliability Indicator"
<UEPower>
UE power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<MaxOutputPower>
Maximum output power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<MinOutpuPower>
Minimum output power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.0.20: added 
CALCulate
 commands
V3.2.70: command renamed (
CARRier<c>
 added)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top