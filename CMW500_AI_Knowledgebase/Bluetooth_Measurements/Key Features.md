# Key Features

Module: Bluetooth Measurements
Source: 7da499e8692041be.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Key Features
Key Features
The Bluetooth multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...Bluetooth:MEAS:MEValuation...
Use general commands of the type 
...:BLUetooth:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and configure RF and analyzer settings.
Use general commands of the type 
...:BLUetooth:MEAS:ISIGnal...
 (no 
:MEValuation
 mnemonic) to inform the R&S
 
CMW about the basic properties of the measured Bluetooth signal.
After a 
*RST
, the measurement is switched off. Use 
READ:BLUetooth:MEAS:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:BLUetooth:MEAS:MEValuation
 and retrieve the results using 
FETCh:BLUetooth:MEAS:MEValuation...?
.
Use manual (i.e. user-assisted) detection for fastest measurements (
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe MANual
).
Top