# CONFigureGPRFMEASiIQRecorderFILTerTYPE

Module: GPRF Measurements
Source: 57f6137bac4a4341.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Filter Settings
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:FILTer:TYPE
CONFigure:GPRF:MEAS<i>:IQRecorder:FILTer:TYPE 
<FilterType>
Selects the IF filter type. Gauss filters have shorter settling times and therefore larger sampling rates. Bandpass filters have a flat passband and steeper edges. See also 
"Filter Settings and Samples"
.
Parameters:
<FilterType>
BANDpass |
 
 GAUSs
BANDpass:
 bandpass filter with variable bandwidth
GAUSs:
 filter of Gaussian shape with variable bandwidth
*RST:
GAUS
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Filter"
Top