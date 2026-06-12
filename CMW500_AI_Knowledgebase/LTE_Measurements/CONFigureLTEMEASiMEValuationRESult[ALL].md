# CONFigureLTEMEASiMEValuationRESult[ALL]

Module: LTE Measurements
Source: 9279b6beed2a4560.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:LTE:MEAS<i>:MEValuation:RESult[:ALL] 
<EVM>, <MagnitudeError>, <PhaseError>, <InbandEmissions>, <EVMversusC>, <IQ>, <EquSpecFlatness>, <TXMeasurement>, <SpecEmMask>, <ACLR>[, <RBAllocTable>, <PowerMonitor>, <BLER>, <PowerDynamics>]
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines most other 
CONFigure:LTE:MEAS<i>:MEValuation:RESult...
 commands.
Parameters:
<EVM>
OFF |
 
 ON
Error vector magnitude
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<MagnitudeError>
OFF |
 
 ON
*RST:
OFF
<PhaseError>
OFF |
 
 ON
*RST:
OFF
<InbandEmissions>
OFF |
 
 ON
*RST:
ON
<EVMversusC>
OFF |
 
 ON
EVM vs. subcarrier
*RST:
OFF
<IQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
OFF
<EquSpecFlatness>
OFF |
 
 ON
Equalizer spectrum flatness
*RST:
ON
<TXMeasurement>
OFF |
 
 ON
TX measurement statistical overview
*RST:
ON
<SpecEmMask>
OFF |
 
 ON
Spectrum emission mask
*RST:
ON
<ACLR>
OFF |
 
 ON
Adjacent channel leakage power ratio
*RST:
ON
<RBAllocTable>
OFF |
 
 ON
Resource block allocation table
*RST:
OFF
<PowerMonitor>
OFF |
 
 ON
*RST:
OFF
<BLER>
OFF |
 
 ON
Block error ratio
*RST:
OFF
<PowerDynamics>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V1.0.10.1
V1.0.15.20: added <RBAllocTable>, <PowerMonitor>
V1.0.15.21: added <BLER>
V2.0.10: added <PowerDynamics>
Manual operation: 
See 
"Multi Evaluation, PRACH > Assign Views"
Top