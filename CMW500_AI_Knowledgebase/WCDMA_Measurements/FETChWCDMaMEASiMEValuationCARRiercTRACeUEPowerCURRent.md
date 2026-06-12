# FETChWCDMaMEASiMEValuationCARRiercTRACeUEPowerCURRent

Module: WCDMA Measurements
Source: 45b9535fa2844af0.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:MINimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:MINimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:UEPower:SDEViation? 
Returns the values of the UE power traces for up to 120 slots.
Each current value is averaged over a half-slot or a full-slot, depending on the measurement period (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MPERiod:
​
MODulation
). The number of results depends on the measurement length (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MSCount
).
The results of the current, average, minimum, maximum and standard deviation traces can be retrieved. The minimum and standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: UE Power and Power Steps"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<UEpower_1> ... <UEpower_n>
One result per measured slot or half-slot
Range: 
-100 dBm to 55 dBm (SDEViation: 0 dB to 77 dB)
Default unit: 
dBm (SDEViation: dB)
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top