# FETChWCDMaMEASiMEValuationCARRiercTRACeCDERrorHSDPcchCURRent

Module: WCDMA Measurements
Source: 0a4cdcfd8a5c441d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CDE vs. Slot Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:SDEViation? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:SDEViation? 
Returns the values of the RMS CDE vs. slot traces for the HS-DPCCH and the E-DPCCH.
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
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation traces cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation, CDP and CDE"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<CDE_1> ... <CDE_n>
RMS CDE trace results, one result per measured slot or half-slot
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
 added)
Options: 
R&S CMW-KM401
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top