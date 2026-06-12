# CONFigureBLUetoothMEASiRXQualityROUTeUSAGeALL

Module: Bluetooth Measurements
Source: 203cf07faded44bd.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Rx Measurement
 > 
Measurement Settings
 > 
CONFigure:BLUetooth:MEAS<i>:RXQuality:ROUTe:USAGe:ALL
CONFigure:BLUetooth:MEAS<i>:RXQuality:ROUTe:USAGe:ALL 
<TXConnectorBENCH>, <Usage>...
CONFigure:BLUetooth:MEAS<i>:RXQuality:ROUTe:USAGe:ALL? 
<TXConnectorBENCH>
Activates or deactivates the individual RF connectors of a connector bench. The setting is relevant for non-signaling Rx measurements.
For possible bench values, see 
"Values for RF Path Selection"
.
Parameters:
<Usage>
OFF |
 
 ON
Comma-separated list of 4 or 8 values, one for each connector of the bench.
*RST:
ON, OFF, OFF, OFF, OFF, OFF, OFF, OFF
Parameters for setting and query: 
<TXConnectorBENCH>
Selects a bench with 4 or 8 connectors.
*RST:
R118
Example: 
See 
"Configuring an Rx Measurement"
Options: 
R&S CMW-KD611
Manual operation: 
See 
"Connectors (Output)"
Top