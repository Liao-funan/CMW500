# CONFigureGPRFMEASiPOWerLISTFREQuencyALL

Module: GPRF Measurements
Source: 8e3c944a025f45fd.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:POWer:LIST:FREQuency:ALL
CONFigure:GPRF:MEAS<i>:POWer:LIST:FREQuency:ALL 
<Frequency>...
Defines the frequencies of all frequency/level steps.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Comma-separated list of up to 2000 frequencies, with one value per frequency/level step
A query returns 2000 results (maximum number of steps).
Range: 
70E+6 Hz  to  6E+9 Hz
Increment: 
0.1 Hz
*RST:
value 0 to 19: 750 MHz to 940 MHz, value 20 to 1999: 940 MHz
Default unit: 
Hz
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V1.0.2.6
Manual operation: 
See 
"List > Frequency, Ref. Level, Exp. Nom. Pow."
Top