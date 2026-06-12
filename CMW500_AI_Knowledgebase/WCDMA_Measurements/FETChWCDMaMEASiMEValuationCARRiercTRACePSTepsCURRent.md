# FETChWCDMaMEASiMEValuationCARRiercTRACePSTepsCURRent

Module: WCDMA Measurements
Source: ab5208d29f604113.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:MINimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:MINimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PSTeps:SDEViation? 
Returns the values of the UE power step traces for up to 120 slots.
Each power step is calculated as the difference between the UE power of a half-slot or full-slot and the preceding half-slot or full-slot, depending on the measurement period (see 
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
).
As there is no previous slot / halfslot for slot 0, the first returned power step value equals NCAP. The number of results depends on the measurement length (see 
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
<PowStep_1> ... <PowStep_n>
One result per measured slot or halfslot
Range: 
-50 dB to 50 dB (SDEViation: 0 dB to 50 dB)
Default unit: 
dB
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