# CALCulateWCDMaMEASiTPCCARRiercTRACeUEPowerCURRent

Module: WCDMA Measurements
Source: 414da21d38074c80.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Results (Traces)
 > 
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:UEPower:CURRent?
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:UEPower:CURRent? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:UEPower:CURRent? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:UEPower:CURRent? 
Return the values of the UE power vs slot trace per carrier.
You can query the number of measured slots using the 
CONFigure:WCDMa:MEAS:TPC:...:MLENgth?
 command of the used measurement mode.
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
<UEpower>
N power results, one per measured slot
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
V3.2.60: added 
CALCulate
 command
V3.2.70: command renamed (
CARRier<c>
 added)
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top