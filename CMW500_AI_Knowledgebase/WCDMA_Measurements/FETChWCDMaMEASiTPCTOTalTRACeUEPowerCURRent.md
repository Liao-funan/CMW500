# FETChWCDMaMEASiTPCTOTalTRACeUEPowerCURRent

Module: WCDMA Measurements
Source: b84fea74ee084eeb.htm

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
FETCh:WCDMa:MEAS<i>:TPC:TOTal:TRACe:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:TPC:TOTal:TRACe:UEPower:CURRent? 
READ:WCDMa:MEAS<i>:TPC:TOTal:TRACe:UEPower:CURRent? 
Return the values of the UE power vs slot trace over all carriers.
You can query the number of measured slots using the 
CONFigure:WCDMa:MEAS:TPC:...:MLENgth?
 command of the used measurement mode.
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
V3.2.70
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top