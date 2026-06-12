# CONFigureGSMMEASiMEValuationSMODulationOFRequence

Module: GSM Measurements
Source: 3327cd6dbaf0466e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Modulation Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SMODulation:OFRequence
CONFigure:GSM:MEAS<i>:MEValuation:SMODulation:OFRequence 
<FreqOffset0>, ..., <FreqOffset19>
Defines the frequency offsets to be used for spectrum modulation measurements. The offsets are defined relative to the analyzer frequency. Up to 20 offsets can be defined and enabled.
Parameters:
<FreqOffset0> ... <FreqOffset19>
Set and enable frequency offset.
Range: 
0 Hz  to  3E+6 Hz
*RST:
Offset 0 to 10 in MHz: 0.1, 0.2, 0.25, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8 (all ON); Offset 11 to 19: 1.9 MHz (all OFF)
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