# CONFigureLTEMEASiENBMEValuationRESult[ALL]

Module: LTE eNodeB Measurements
Source: 42d902a08c1d4071.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult[:ALL]
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult[:ALL] 
<EVM>, <MagnitudeError>, <PhaseError>, <OFDMsymPower>, <SpecFlatness>, <IQ>, <TXMeasurement>, <SpecEmMask>, <ACLR>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines most other 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult...
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
Magnitude error
*RST:
OFF
<PhaseError>
OFF |
 
 ON
Phase error
*RST:
OFF
<OFDMsymPower>
OFF |
 
 ON
OFDM symbol power
*RST:
ON
<SpecFlatness>
OFF |
 
 ON
Spectrum flatness
*RST:
ON
<IQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
OFF
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
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V3.0.20
Top