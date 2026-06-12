# FETChWCDMaMEASiMEValuationLISTCDPowerEDPDchnoCURRent

Module: WCDMA Measurements
Source: ad6169b659784484.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:MINimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:SDEViation? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:SDEViation? 
Return RMS CDP and CDE vs. slot values for a selected E-DPDCH for all measured list mode segments.
Suffix: 
<no>
1..4
Selects the E-DPDCH
Return values: 
<Reliability>
"Reliability Indicator"
<EDPDCH>
Comma-separated list of values, one per measured segment
Range: 
-100 dB  to  0 dB
Default unit: 
dB
Example: 
See 
"Using WCDMA List Mode"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM012, R&S CMW-KM401
Top