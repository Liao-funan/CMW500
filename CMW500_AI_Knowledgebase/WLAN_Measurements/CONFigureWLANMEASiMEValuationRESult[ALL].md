# CONFigureWLANMEASiMEValuationRESult[ALL]

Module: WLAN Measurements
Source: 29f91d3469e2442d.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:WLAN:MEAS<i>:MEValuation:RESult[:ALL] 
<ModScalar>, <PvT>, <EVMvsChip>, <EVMvsSym>, <EVMvsCarr>, <IQConst>, <SpecFlatness>, <TranSpecMask>[, <UnusedToneErr>]
Enables or disables the evaluation of results and shows or hides the views. This command combines all other 
CONFigure:WLAN:MEAS<i>:MEValuation:RESult...
 commands.
Views can only be hidden for receive mode SISO.
To check which views are relevant for which standard, see 
"Overview"
.
Parameters:
<ModScalar>
OFF |
 
 ON
Modulation scalar overview
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<PvT>
OFF |
 
 ON
Power vs. time
*RST:
OFF
<EVMvsChip>
OFF |
 
 ON
EVM vs chip
*RST:
ON
<EVMvsSym>
OFF |
 
 ON
EVM vs symbol
*RST:
ON
<EVMvsCarr>
OFF |
 
 ON
EVM vs carrier
*RST:
ON
<IQConst>
OFF |
 
 ON
I/Q constellation diagram
*RST:
OFF
<SpecFlatness>
OFF |
 
 ON
Spectrum flatness
*RST:
OFF
<TranSpecMask>
OFF |
 
 ON
Transmit spectrum mask
*RST:
OFF
<UnusedToneErr>
OFF |
 
 ON
Unused tone error
*RST:
OFF
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.50, V1.0.15.0: <TranSpecMask>, V1.0.15.20: <SpecFlatness>, V2.1.10: <PvT>, V3.7.21: <UnusedToneErr>
Manual operation: 
See 
"Assign Views"
Top