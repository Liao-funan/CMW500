# FETChWPANMEASiMEValuationTRACePSDensityCURRent[RELative]

Module: LRWPAN Measurements
Source: 9e7388fddbf245fa.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Trace Results
 > 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:CURRent[:RELative]?
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:CURRent[:RELative]? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:AVERage[:RELative]? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:MAXimum[:RELative]? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:CURRent[:RELative]? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:AVERage[:RELative]? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PSDensity:MAXimum[:RELative]? 
Returns the power spectral density traces measured using a 100 kHz resolution bandwidth filter. The results are relative to the maximum average spectral power measured within the ±1.0 MHz of the carrier frequency. The first and last samples correspond to -12.5 MHz and +12.5 MHz relative to the carrier frequency. The frequency step between two consecutive samples is 31.25 kHz.
See also: 
"Detailed Views: Power Spectral Density"
.
Return values: 
<Reliability>
"Reliability Indicator"
<PowSpecDensity>
Spectral power
Range: 
-99.99 dB to 99.99 dB
Default unit: 
dB
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top