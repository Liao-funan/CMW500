# FETChWCDMaMEASiOLPControlCARRiercUEPPowerRUPrupcarrier

Module: WCDMA Measurements
Source: d1baa2050698479c.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Results
 > 
FETCh:WCDMa:MEAS<i>:OLPControl:CARRier<c>:UEPPower:RUP<rupcarrier>?
FETCh:WCDMa:MEAS<i>:OLPControl:CARRier<c>:UEPPower:RUP<rupcarrier>? 
READ:WCDMa:MEAS<i>:OLPControl:CARRier<c>:UEPPower:RUP<rupcarrier>? 
Return the traces of the UE power vs slot during the ramp up of selected carrier per uplink carrier measured in slots -15 to 45.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<c>
1..*
Uplink carrier to be measured
<rupcarrier>
1..*
Number of the carrier specifying a ramp up power measurement
Return values: 
<Reliability>
"Reliability Indicator"
<UEPower>
60 UE power results, one per measured slot
Range: 
-100 dBm to 100 dBm
Default unit: 
dBm
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top