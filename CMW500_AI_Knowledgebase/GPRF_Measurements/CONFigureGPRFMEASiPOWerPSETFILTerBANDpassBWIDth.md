# CONFigureGPRFMEASiPOWerPSETFILTerBANDpassBWIDth

Module: GPRF Measurements
Source: 3c3478feadb44e4c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Parameter Set List Settings
 > 
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:BANDpass:BWIDth
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:BANDpass:BWIDth 
<Index>, <Bandwidth>
CONFigure:GPRF:MEAS<i>:POWer:PSET:FILTer:BANDpass:BWIDth? 
<Index>
Selects the bandpass filter bandwidth for a particular parameter set <Index>.
Parameters:
<Bandwidth>
1 kHz |
 
 3 kHz |
 
 5 kHz |
 
 10 kHz |
 
 30 kHz |
 
 50 kHz |
 
 100 kHz |
 
 300 kHz |
 
 500 kHz |
 
 1 MHz |
 
 3 MHz |
 
 5 MHz |
 
 10 MHz |
 
 30 MHz |
 
 40 MHz
Values in-between are rounded.
*RST:
300E+3 Hz
Default unit: 
Hz
Parameters for setting and query: 
<Index>
Number of the parameter set
Range: 
0 to 31
Example: 
See 
"Performing an I/Q Data Measurement"
Firmware/Software: 
V2.1.25
Manual operation: 
See 
"Edit Parameter Set"
Top