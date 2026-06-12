# FETChWCDMaMEASiMEValuationCARRiercTRACeEVMagnitudePEAKCURRent

Module: WCDMA Measurements
Source: 33152ab25deb421e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:EVMagnitude:PEAK:SDEViaton? 
Returns the values of the peak EVM traces for up to 120 slots.
Each current value is determined for a half-slot or a full-slot, depending on the measurement period (see 
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
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation, CDP and CDE"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<EVM_1> ... <EVM_n>
Peak EVM trace results, one result per measured slot or half-slot
Range: 
0 % to 100 % (SDEViation: 0 % to 50 %)*
Default unit: 
%
* Test head with detached computing module calculates results without upper limitation, even if results of 100% (SDEViation: 50 %) mean, that the signal cannot be decoded.
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