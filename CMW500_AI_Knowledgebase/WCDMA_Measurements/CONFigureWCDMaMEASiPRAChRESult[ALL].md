# CONFigureWCDMaMEASiPRAChRESult[ALL]

Module: WCDMA Measurements
Source: dd54b2a332604030.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WCDMa:MEAS<i>:PRACh:RESult[:ALL]
CONFigure:WCDMa:MEAS<i>:PRACh:RESult[:ALL] 
<EnableUEpower>, <EnablePowSteps>, <EnableFreqError>, <EnableEVM>, <EnableMagError>, <EnablePhaseErr>, <EnableUEPchip>, <EnableEVMchip>, <EnableMErrChip>, <EnablePhErrChip>, <EnableIQ>
Enables or disables the evaluation of results and shows or hides the views in the PRACH measurement. This command combines all other 
CONFigure:WCDMa:MEAS<i>:PRACh:RESult...
 commands.
Parameters:
<EnableUEpower>
OFF |
 
 ON
UE power
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<EnablePowSteps>
OFF |
 
 ON
Power steps
*RST:
ON
<EnableFreqError>
OFF |
 
 ON
Frequency error
*RST:
ON
<EnableEVM>
OFF |
 
 ON
Error vector magnitude
*RST:
ON
<EnableMagError>
OFF |
 
 ON
Magnitude error
*RST:
ON
<EnablePhaseErr>
OFF |
 
 ON
Phase error
*RST:
ON
<EnableUEPchip>
OFF |
 
 ON
UE power vs. chip
*RST:
ON
<EnableEVMchip>
OFF |
 
 ON
EVM vs. chip
*RST:
ON
<EnableMErrChip>
OFF |
 
 ON
Magnitude error vs. chip
*RST:
ON
<EnablePhErrChip>
OFF |
 
 ON
Phase error vs. chip
*RST:
ON
<EnableIQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
ON
Example: 
See 
"Performing Measurements"
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Assign Views (Hotkey)"
Top