# CALCulateWCDMaMEASiTPCCARRiercTRACePSTepsCURRent

Module: WCDMA Measurements
Source: c9a717baf60c4c12.htm

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
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:PSTeps:CURRent?
CALCulate:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:PSTeps:CURRent? 
FETCh:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:PSTeps:CURRent? 
READ:WCDMa:MEAS<i>:TPC:CARRier<c>:TRACe:PSTeps:CURRent? 
Return the values of the power steps trace per carrier.
Each power step is calculated as the difference between the UE power of a slot and the UE power of the preceding slot. For the first measured slot, a 0 is returned.
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
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<PowerSteps>
N power step results, one per measured slot
Power step result number m indicates the difference between the UE power results number m and number m-1. The first power step result equals NCAP.
Range: 
-50 dB  to  50 dB
Default unit: 
dB
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