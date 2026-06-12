# CONFigureBLUetoothMEASiMEValuationRESult[ALL]

Module: Bluetooth Measurements
Source: 1913d8dcbb064d63.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult[:ALL] 
<DEVM>, <PhaseDiff>, <ModScalars>, <IQAbsolute>, <IQDifferential>, <IQError>, <FreqDev>, <PvT>, <PowerScalars>, <SpectrumOBW>, <SpectrumACP>, <SpectrumGACP>[, <SpecFreqRange>, <PhaseEncoding>]
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines all other 
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult...
 commands.
Tip:
 Use 
READ...?
 queries to retrieve results for disabled views.
Parameters:
<DEVM>
OFF |
 
 ON
Differential error vector magnitude (only for EDR)
ON:
 Evaluate results and show the view
OFF:
 Do not evaluate results, hide the view (if applicable)
*RST:
ON
<PhaseDiff>
OFF |
 
 ON
Phase difference (only for EDR)
*RST:
ON
<ModScalars>
OFF |
 
 ON
Statistical modulation results
*RST:
ON
<IQAbsolute>
OFF |
 
 ON
IQ constellation absolute (only for EDR)
*RST:
ON
<IQDifferential>
OFF |
 
 ON
IQ constellation differential (only for EDR)
*RST:
ON
<IQError>
OFF |
 
 ON
IQ constellation error (only for EDR)
*RST:
ON
<FreqDev>
OFF |
 
 ON
Frequency deviation (only for BR and LE)
*RST:
ON
<PvT>
OFF |
 
 ON
Power vs. time
*RST:
ON
<PowerScalars>
OFF |
 
 ON
Statistical power results
*RST:
ON
<SpectrumOBW>
OFF |
 
 ON
Spectrum 20 dB bandwidth (only for BR)
*RST:
ON
<SpectrumACP>
OFF |
 
 ON
Spectrum ACP (only for BR and LE)
*RST:
ON
<SpectrumGACP>
OFF |
 
 ON
Spectrum gated ACP (only for EDR)
*RST:
ON
<SpecFreqRange>
OFF |
 
 ON
Spectrum frequency range (only for BR)
*RST:
ON
<PhaseEncoding>
OFF |
 
 ON
Statistical differential phase encoding results (only for EDR in combined signal path)
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V1.0.10.50
V2.0.20: added <SpectrumGACP>
V3.2.50: added <SpecFreqRange>, <PhaseEncoding>
Manual operation: 
See 
"Assign Views"
Top