# CONFigureWCDMaMEASiMEValuationRESult[ALL]

Module: WCDMA Measurements
Source: 5174b2adf7fc4268.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:WCDMa:MEAS<i>:MEValuation:RESult[:ALL] 
<EnableEVM>, <EnableMagError>, <EnablePhaseErr>, <EnableACLR>, <EnableEMask>, <EnableCDmonitor>, <EnableCDP>, <EnableCDE>, <EnableEVMchip>, <EnableMErrChip>, <EnablePhErrChip>, <EnableUEpower>, <EnableFreqError>, <EnablePhaseDisc>, <EnablePowSteps>, <EnableBER>[, <EnableIQ>, <EnableRCDE>]
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines all other 
CONFigure:WCDMa:MEAS<i>:MEValuation:RESult...
 commands.
Parameters:
<EnableEVM>
OFF |
 
 ON
Error vector magnitude
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<EnableMagError>
OFF |
 
 ON
Magnitude error
*RST:
OFF
<EnablePhaseErr>
OFF |
 
 ON
Phase error
*RST:
OFF
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
<EnableCDmonitor>
OFF |
 
 ON
Code domain monitor
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
OFF
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
OFF
<EnablePhErrChip>
OFF |
 
 ON
Phase error vs. chip
*RST:
OFF
<EnableUEpower>
OFF |
 
 ON
UE power
*RST:
ON
<EnableFreqError>
OFF |
 
 ON
Frequency error
*RST:
ON
<EnablePhaseDisc>
OFF |
 
 ON
Phase discontinuity
*RST:
OFF
<EnablePowSteps>
OFF |
 
 ON
Power steps
*RST:
ON
<EnableBER>
OFF |
 
 ON
Bit error rate
*RST:
OFF
<EnableIQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
OFF
<EnableRCDE>
OFF |
 
 ON
Relative CDE
*RST:
OFF
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V1.0.3.6
V1.0.4.11: <EnableEVMchip> to <EnableBER>
V1.0.10.1: <EnableIQ>
V1.0.15.0: <EnableRCDE>
Manual operation: 
See 
"Assign Views (Hotkey)"
Top