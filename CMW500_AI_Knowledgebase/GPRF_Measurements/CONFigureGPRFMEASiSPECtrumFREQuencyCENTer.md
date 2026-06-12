# CONFigureGPRFMEASiSPECtrumFREQuencyCENTer

Module: GPRF Measurements
Source: 2a3de0c1660444d4.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Frequency Settings
 > 
CONFigure:GPRF:MEAS<i>:SPECtrum:FREQuency:CENTer
CONFigure:GPRF:MEAS<i>:SPECtrum:FREQuency:CENTer 
<CenterFrequency>
Sets or gets the center frequency of the spectrum measurement.
In frequency sweep mode (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
SPECtrum:
​
FREQuency:
​
SPAN:
​
MODE
) , setting the center frequency adjusts the start and stop frequencies as follows:
If the start frequency and stop frequency do not reach the minimum / maximum values, the frequency span is kept constant.
If the start frequency or stop frequency reaches the minimum / maximum value, the frequency span is reduced automatically as far as required.
In zero span mode,  setting the center frequency leaves the start frequency, stop frequency and span unchanged. These values are adjusted according to the new center frequency and (appropriately reduced) span when the frequency sweep mode is selected.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<CenterFrequency>
Range: 
70E+6 Hz  to  6E+9 Hz
Increment: 
1 kHz
*RST:
1.685E+9 Hz
Default unit: 
Hz
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Frequency > Center"
Top