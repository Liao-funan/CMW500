# FETChGSMMEASiMEValuationMODulationDBITs

Module: GSM Measurements
Source: 1e9ca1888b194ece.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
FETCh:GSM:MEAS<i>:MEValuation:MODulation:DBITs?
FETCh:GSM:MEAS<i>:MEValuation:MODulation:DBITs? 
Returns the demodulated bits of the "Measurement Slot". For GMSK modulation, a symbol consists of 1 bit, for 8PSK of 3 bits, for 16-QAM of 4 bits.
Return values: 
<Reliability>
"Reliability Indicator"
<DemodBits>
142 values, one value per symbol, representing the demodulated bits of the symbol in decimal presentation
Range: 
0  to  15
Usage: 
Query only
Firmware/Software: 
V2.1.60
Top