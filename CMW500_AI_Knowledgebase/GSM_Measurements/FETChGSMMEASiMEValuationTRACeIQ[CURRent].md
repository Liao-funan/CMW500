# FETChGSMMEASiMEValuationTRACeIQ[CURRent]

Module: GSM Measurements
Source: f201d18248094ac1.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
I/Q Constellation Results (Traces)
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:IQ[:CURRent]?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:IQ[:CURRent]? 
READ:GSM:MEAS<i>:MEValuation:TRACe:IQ[:CURRent]? 
Returns the results in the I/Q constellation diagram.
Return values: 
<Reliability>
"Reliability Indicator"
<IPhase_1> ... <IPhase_n> <QPhase_1> ... <QPhase_n>
n normalized I and Q amplitudes, depending on the burst and modulation type
8PSK/16-QAM modulation: 568 values (four values per symbol period, symbol 3 to symbol 144)
GMSK modulation: 588 values (four values per symbol period, symbol 0.5 to symbol 147.5)
Access burst: 348 values (four values per symbol period, symbol 0.5 to symbol 87.5)
Range: 
-2  to  2
Example: 
See 
"I/Q Constellation Diagram"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top