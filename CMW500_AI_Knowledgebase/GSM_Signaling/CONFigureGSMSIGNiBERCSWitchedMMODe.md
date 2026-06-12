# CONFigureGSMSIGNiBERCSWitchedMMODe

Module: GSM Signaling
Source: 2997bb005f5d4ead.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
General BER CS Settings
 > 
CONFigure:GSM:SIGN<i>:BER:CSWitched:MMODe
CONFigure:GSM:SIGN<i>:BER:CSWitched:MMODe 
<Mode>
Selects the measurement mode of the BER CS measurement. For a detailed description of the modes, see 
"BER CS Measurement"
.
Parameters:
<Mode>
BBBurst |
 
 BER |
 
 RFER |
 
 FFACch |
 
 FSACch |
 
 RUFR |
 
 AIFer |
 
 MBEP |
 
 SQUality |
 
 BFI
BBBurst
: "Burst by Burst" mode
BER
: "BER" mode
RFER
: "RBER/FER" mode
FFACch
: "FER FACCH" mode
FSACch
: "FER SACCH" mode
RUFR
: "RBER/UFR" mode
AIFer
: "AMR Inband FER" mode
MBEP
: "Mean BEP" mode
SQUality
: "Signal Quality" mode
BFI
: "Bad Frame Indication" mode
*RST:
BBB
Example: 
See 
"Measuring in Burst by Burst Mode"
Firmware/Software: 
V2.0.10
V2.1.25: added 
FFACch
, 
FSACch
V3.0.20: added 
AIFer
V3.2.20: added 
RUFR
V3.2.30: added 
MBEP
, 
SQUality
V3.2.70: added 
BFI
Options: 
R&S CMW-KS210 for BER, FFACch, FSACch, RUFR, AIFer, BFI.
Manual operation: 
See 
"Measure Mode"
Top