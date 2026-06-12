# FETChWCDMaMEASiMEValuationCARRiercTRACeCDPowerDPCChCURRent

Module: WCDMA Measurements
Source: c24de9ffc12f47cb.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CDP vs. Slot Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MINimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:SDEViation? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MINimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MINimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MINimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:SDEViation? 
Returns the values of the RMS CDP vs. slot traces for the DPCCH and the DPDCH.
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
The results of the current, average, minimum, maximum and standard deviation traces can be retrieved. The standard deviation traces cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation, CDP and CDE"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<CDP_1> ... <CDP_n>
RMS CDP trace results, one result per measured slot or half-slot
Range: 
-100 dB to 0 dB (SDEViation: 0 dB to 50 dB)
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