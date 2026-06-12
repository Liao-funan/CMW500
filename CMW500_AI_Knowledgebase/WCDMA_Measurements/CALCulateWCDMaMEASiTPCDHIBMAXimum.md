# CALCulateWCDMaMEASiTPCDHIBMAXimum

Module: WCDMA Measurements
Source: 43e9fdfe36f54683.htm

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
CALCulate:WCDMa:MEAS<i>:TPC:DHIB:MAXimum?
CALCulate:WCDMa:MEAS<i>:TPC:DHIB:MAXimum? 
CALCulate:WCDMa:MEAS<i>:TPC:DHIB:MINimumc? 
CALCulate:WCDMa:MEAS<i>:TPC:DHIB:AVERage? 
FETCh:WCDMa:MEAS<i>:TPC:DHIB:MAXimum? 
FETCh:WCDMa:MEAS<i>:TPC:DHIB:MINimum? 
FETCh:WCDMa:MEAS<i>:TPC:DHIB:AVERage? 
READ:WCDMa:MEAS<i>:TPC:DHIB:MAXimum? 
READ:WCDMa:MEAS<i>:TPC:DHIB:MINimum? 
READ:WCDMa:MEAS<i>:TPC:DHIB:AVERage? 
Return the dual carrier in-band emission results. The minimum, maximum and average results can be retrieved.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<CarrierChPower>
Level of the uplink carrier, where the UE transmits at the maximal output power
Range: 
-100 dBm  to  40 dBm
Default unit: 
dBm
<InbandEmission>
Relative level of the other uplink carrier transmitting at minimal output power
Range: 
-99 dB  to  99 dB
Default unit: 
dB
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KM405
Top