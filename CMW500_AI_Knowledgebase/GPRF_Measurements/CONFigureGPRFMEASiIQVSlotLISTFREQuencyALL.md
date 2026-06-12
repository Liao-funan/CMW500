# CONFigureGPRFMEASiIQVSlotLISTFREQuencyALL

Module: GPRF Measurements
Source: fc5a647225ea49ff.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
List Configuration
 > 
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:FREQuency:ALL
CONFigure:GPRF:MEAS<i>:IQVSlot:LIST:FREQuency:ALL 
<Frequency>...
Defines the frequencies of all frequency/level steps.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Comma-separated list of up to 200 frequencies, with one value per frequency/level step
A query returns 200 results (maximum number of steps).
Range: 
70E+6 Hz  to  6E+9 Hz
Increment: 
0.1 Hz
*RST:
value 0 to 21: 750 MHz to 960 MHz, value 22 to 199: 960 MHz
Default unit: 
Hz
Example: 
See 
"Configuring the List Mode"
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"List"
Top