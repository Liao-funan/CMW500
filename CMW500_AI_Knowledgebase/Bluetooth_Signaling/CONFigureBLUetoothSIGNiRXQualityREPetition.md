# CONFigureBLUetoothSIGNiRXQualityREPetition

Module: Bluetooth Signaling
Source: de71533f73924eda.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER / PER   Measurement Commands
 > 
Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RXQuality:REPetition
CONFigure:BLUetooth:SIGN<i>:RXQuality:REPetition 
<Repetition>
Specifies the repetition mode of the measurement. The repetition mode specifies whether the measurement is stopped after a single-shot or repeated continuously. Use 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RXQuality:
​
PACKets[:
​
BEDR]
 to determine the number of transport blocks per single shot.
See also: 
"Statistical Settings"
Parameters:
<Repetition>
SINGleshot |
 
 CONTinuous
SINGleshot
: single-shot measurement
CONTinuous
: continuous measurement
*RST:
SING
Example: 
See 
"Performing a BER/PER Measurement"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS610 for BR/EDR
Manual operation: 
See 
"Repetition (BER)"
Top