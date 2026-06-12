# SOURceGPRFGENiARBCRATe

Module: GPRF Generator
Source: 33227e7ff23244db.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
ARB Settings
 > 
SOURce:GPRF:GEN<i>:ARB:CRATe?
SOURce:GPRF:GEN<i>:ARB:CRATe? 
Queries the clock rate of the loaded waveform file. The clock rates of waveform file created with R&S WinIQSIM2 are compatible with the R&S
 
CMW; see 
"Generating and Transferring Waveform Files"
.
Note:
 If a multi-segment waveform file is loaded, this command returns the clock rate in the last segment. Use 
SOURce:
​
GPRF:
​
GEN<i>:
​
ARB:
​
MSEGment:
​
CRATe?
 to query the clock rates of the individual segments.
Return values: 
<ClockRate>
Range: 
as defined in the waveform file
*RST:
n/a
Default unit: 
Hz
Example: 
See 
"Using the Arbitrary Mode"
Usage: 
Query only
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Baseband Configuration > ARB > ARB File"
Top