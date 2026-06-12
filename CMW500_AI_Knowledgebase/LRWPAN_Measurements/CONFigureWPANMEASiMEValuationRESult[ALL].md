# CONFigureWPANMEASiMEValuationRESult[ALL]

Module: LRWPAN Measurements
Source: 644ffffa27ca4230.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:WPAN:MEAS<i>:MEValuation:RESult[:ALL] 
<PvT>, <PowerScalars>, <EVMChip>, <ModScalars>, <PowSpecDensity>[, <IQConstellation>]
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines all other 
CONFigure:WPAN:MEAS<i>:MEValuation:RESult...
 commands.
Tip:
 Use 
READ...?
 queries to retrieve results for disabled views.
Parameters:
<PvT>
OFF |
 
 ON
Power vs. time
ON:
 evaluate results and show the view
OFF:
 do not evaluate results, hide the view (if applicable)
*RST:
ON
<PowerScalars>
OFF |
 
 ON
Statistical power results
*RST:
ON
<EVMChip>
OFF |
 
 ON
Error vector magnitude vs chip
*RST:
ON
<ModScalars>
OFF |
 
 ON
Statistical modulation results
*RST:
ON
<PowSpecDensity>
OFF |
 
 ON
Power spectral density results
*RST:
ON
<IQConstellation>
OFF |
 
 ON
IQ constellation results
*RST:
ON
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V3.5.10
V3.5.20: added 
IQConstellation
Manual operation: 
See 
"Assign Views"
Top