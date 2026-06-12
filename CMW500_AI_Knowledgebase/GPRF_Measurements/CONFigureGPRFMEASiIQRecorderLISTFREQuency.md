# CONFigureGPRFMEASiIQRecorderLISTFREQuency

Module: GPRF Measurements
Source: 666f870a87da4be2.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:FREQuency
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:FREQuency 
<Index>, <Frequency>
CONFigure:GPRF:MEAS<i>:IQRecorder:LIST:FREQuency? 
<Index>
Defines or queries the frequency of a selected frequency/level step.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Frequency of the frequency/level step
Range: 
70E+6 Hz  to  6E+9 Hz
Increment: 
0.1 Hz
*RST:
Depending on list index (750 MHz to 960 MHz for index 0 to 21)
Default unit: 
Hz
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  1999
Example: 
See 
"Performing a Single-Shot Measurement"
Firmware/Software: 
V1.0.10.1
Top