# CONFigureAUDioMEASiANALogFILTerHPASs

Module: Audio Measurements
Source: ca22c11d270b48d1.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
General Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:ANALog:FILTer:HPASs
CONFigure:AUDio:MEAS<i>:ANALog:FILTer:HPASs 
<FreqSingleTone>, <FreqMultitone>, <FreqFFTNoise>
CONFigure:AUDio:MEAS<i>:DIGital:FILTer:HPASs 
<FreqSingleTone>, <FreqMultitone>, <FreqFFTNoise>
Configures the cutoff frequency of the highpass filter for the individual audio signal types.
Parameters:
<FreqSingleTone>
OFF |
 
 H6 |
 
 H50 |
 
 H300
OFF:
 highpass filter disabled
H6 | H50 | H300:
 cutoff frequency 6 Hz, 50 Hz or 300 Hz
*RST:
ANALog = OFF, DIGital = H6
<FreqMultitone>
OFF |
 
 H6 |
 
 H50 |
 
 H300
*RST:
ANALog = OFF, DIGital = H6
<FreqFFTNoise>
OFF |
 
 H6 |
 
 H50 |
 
 H300
*RST:
ANALog = OFF, DIGital = H6
Firmware/Software: 
V3.2.10
Top