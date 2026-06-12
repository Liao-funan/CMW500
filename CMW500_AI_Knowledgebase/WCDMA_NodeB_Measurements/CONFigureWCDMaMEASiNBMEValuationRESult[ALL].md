# CONFigureWCDMaMEASiNBMEValuationRESult[ALL]

Module: WCDMA NodeB Measurements
Source: 86c4e19a4d11408d.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult[:ALL]
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult[:ALL] 
<EnablePower>, <EnableFreqError>, <EnableEVM>, <EnableMagError>, <EnablePhaseErr>, <EnableEVMchip>, <EnableMErrChip>, <EnablePhErrChip>, <EnableACLR>, <EnableEMask>, <EnableCDP>, <EnableCDE>
Enables or disables the evaluation of results and shows or hides the views in the NodeB multi-evaluation measurement. This command combines all other 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult...
 commands.
Parameters:
<EnablePower>
OFF |
 
 ON
Power
OFF:
 do not evaluate results, hide the view
ON:
 evaluate results and show the view
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
<EnableACLR>
OFF |
 
 ON
Adjacent channel leakage power ratio
*RST:
ON
<EnableEMask>
OFF |
 
 ON
Spectrum emission mask
*RST:
ON
<EnableCDP>
OFF |
 
 ON
Code domain power
*RST:
ON
<EnableCDE>
OFF |
 
 ON
Code domain error
*RST:
ON
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V3.5.10
Top