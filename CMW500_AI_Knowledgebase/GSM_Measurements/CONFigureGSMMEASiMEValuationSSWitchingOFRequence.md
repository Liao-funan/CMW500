# CONFigureGSMMEASiMEValuationSSWitchingOFRequence

Module: GSM Measurements
Source: 1624c03bba4040c2.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Switching Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SSWitching:OFRequence
CONFigure:GSM:MEAS<i>:MEValuation:SSWitching:OFRequence 
<FreqOffset0>, ..., <FreqOffset19>
Defines the frequency offsets to be used for spectrum switching measurements. The offsets are defined relative to the analyzer frequency. Up to 20 offsets can be defined and enabled.
Parameters:
<FreqOffset0> ... <FreqOffset19>
Set and enable frequency offset.
Range: 
0 Hz  to  3E+6 Hz
*RST:
Offset 0 to 3 in MHz: 0.4, 0.6, 1.2, 1.8 (all ON); Offset 4 to 19: 1.9 MHz (all OFF)
Default unit: 
Hz
Additional parameters: OFF | ON (disables / enables offset using the previous/default value)
Example: 
See 
"Configuring a Spectrum Measurement"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Frequency Offsets"
Top