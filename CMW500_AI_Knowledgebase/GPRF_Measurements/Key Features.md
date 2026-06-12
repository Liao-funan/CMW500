# Key Features

Module: GPRF Measurements
Source: f561b394b9dd4343.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
I/Q vs. Slot Measurement
 > 
Key Features
Key Features
The "I/Q vs. Slot" measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...GPRF:MEAS:IQVSlot...
Use general commands of the type 
...:GPRF:MEAS...
 (no 
:IQVSlot
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:GPRF:MEAS:IQVSlot?
 to initiate a single-shot measurement and retrieve the results.
Advanced settings
You can also run the measurement in continuous mode and retrieve the results using 
FETCh:GPRF:MEAS:IQVSlot...?
.
Use the list mode to measure several consecutive sweeps.
Top