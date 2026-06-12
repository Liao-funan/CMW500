# CONFigureGPRFMEASiSPECtrumFREQuencySPAN

Module: GPRF Measurements
Source: 4cc41aac6a8d42ae.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Frequency Settings
 > 
CONFigure:GPRF:MEAS<i>:SPECtrum:FREQuency:SPAN
CONFigure:GPRF:MEAS<i>:SPECtrum:FREQuency:SPAN 
<FrequencySpan>
Sets or gets the frequency span for frequency sweep mode. Setting this value also determines the center frequency, start frequency and stop frequency.
Increasing the span symmetrically extends the frequency range ("Start Frequency" to "Stop Frequency") around the center frequency, if possible. When the lower/upper frequency limit is reached, the range is extended in the direction of higher/lower frequencies only, until finally the "Full Span" of 5930 MHz is reached.
Parameters:
<FrequencySpan>
Range: 
1.0E+3 Hz to 5.93E+9 Hz
*RST:
3.23E+9 Hz
Default unit: 
Hz
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Frequency > Span"
Top