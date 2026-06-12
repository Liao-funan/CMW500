# CONFigureAUDioMEASiANALogFFTNoiseFILTerHPASs

Module: Audio Measurements
Source: c1a70e1910cd401f.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
FFT Noise Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:ANALog:FFTNoise:FILTer:HPASs
CONFigure:AUDio:MEAS<i>:ANALog:FFTNoise:FILTer:HPASs 
<Frequency>
CONFigure:AUDio:MEAS<i>:DIGital:FFTNoise:FILTer:HPASs 
<Frequency>
Configures the cutoff frequency of the highpass filter for FFT noise measurements.
Parameters:
<Frequency>
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
Example: 
See 
"FFT Noise Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Filter"
Top